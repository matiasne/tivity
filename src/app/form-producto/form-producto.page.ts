import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { Crop } from '@ionic-native/crop/ngx';
import { ActionSheetController, ModalController, AlertController, NavController, NavParams } from '@ionic/angular';
import { File } from '@ionic-native/file/ngx';
import { Camera} from '@ionic-native/camera/ngx';
import { CategoriasService } from '../Services/categorias.service';
import { ProductosService } from '../Services/productos.service';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../models/item';
import { FormCategoriaPage } from '../form-categoria/form-categoria.page';
import { AngularFirestore } from 'angularfire2/firestore';
import { ToastService } from '../Services/toast.service';
import { FormProductoGrupoOpcionesPage } from '../form-producto-grupo-opciones/form-producto-grupo-opciones.page';
import { CocinasService } from '../Services/cocinas.service';
import { SelectGruposOpcionesPage } from '../select-grupos-opciones/select-grupos-opciones.page';
import { GrupoOpcionesService } from '../Services/grupo-opciones.service';
import { FotoService } from '../Services/fotos.service';
import { ComerciosService } from '../Services/comercios.service';
import { ImagesService } from '../Services/images.service';
import { Archivo } from '../models/foto';
import { FormStockPage } from '../form-stock/form-stock.page';
import { Comercio } from '../models/comercio';
import { DetailsImagePage } from '../details-image/details-image.page';
import { WoocommerceService } from '../Services/woocommerce/woocommerce.service';
import { LoadingService } from '../Services/loading.service';
import { WoocommerceSyncData } from '../models/woocommerceSyncData';

@Component({
  selector: 'app-form-producto',
  templateUrl: './form-producto.page.html',
  styleUrls: ['./form-producto.page.scss'],
})
export class FormProductoPage implements OnInit {

  isLoading = false;
  submitted = false;

  imagePickerOptions = {
    maximumImagesCount: 1,
    quality: 5
  }; 

  slideOpts = {
    slidesPerView: 2,
    initialSlide: 2,
    speed: 400
  };

  public categorias =[];
  public cocinas = [];
  public gruposOpciones = [];

  public datosForm: FormGroup;
  
  public updating:boolean = false;
  public titulo = "Nuevo Producto";

  public item:Item; 
  public croppedImageIcono ="";

  public imagenesNuevas = []

  public comercio:Comercio

  public flagWoocommerce = false
  public woocommerceSyncData:WoocommerceSyncData

  private paramId = "";
  
  constructor(
    private formBuilder: FormBuilder,
    private imagePicker: ImagePicker,
    private camera: Camera,
    private crop: Crop,
    public actionSheetController: ActionSheetController,
    private file: File,
    public modalController: ModalController,
    public productosService:ProductosService,
    public categoriaService:CategoriasService,
    private barcodeScanner: BarcodeScanner,
    private route: ActivatedRoute,
    public alertController: AlertController,
    private navCtrl: NavController, 
    private router:Router,
    private firestore: AngularFirestore,
    private toastServices:ToastService,
    private cocinasService:CocinasService,
    public changeRef:ChangeDetectorRef,
    public gruposOpcionesService:GrupoOpcionesService,
    public fotosService:FotoService,
    public comercioService:ComerciosService,
    public imageService:ImagesService,
    private modalCtrl:ModalController,
    private navParams:NavParams
  ) { 

    this.comercio = new Comercio()
    this.comercio.asignarValores(this.comercioService.getSelectedCommerceValue())
    this.item = new Item();
    this.woocommerceSyncData = new WoocommerceSyncData()  

    this.datosForm = this.formBuilder.group({
      tipo:['1',Validators.required],
      nombre: ['', Validators.required],
      barcode:[''],
      destacado:[false],
      precio: ['', Validators.required],
      promocion:[''],
      unidad: ['unidades'],
      valorPor:[1],
      stock: [1],
      descripcion:[''],
      cocinaId:[''],
      categorias:[''],
      foto:[''],
      createdAt:[''],
      recibirPedidos:[true]
    });

    this.paramId = this.navParams.get('id');
  }

  get f() { return this.datosForm.controls; }

  ngOnInit() {
  }

  async ionViewDidEnter(){

    console.log(this.paramId)

    if(this.paramId){
      this.updating = true; 
    //  this.loadingService.presentLoading()
      this.productosService.get(this.paramId).subscribe(item=>{        
        this.titulo = "Editar Producto";
      //  this.loadingService.dismissLoading()
        this.datosForm.patchValue(item);
        this.item.asignarValores(item)

        this.gruposOpciones = []; 
        this.item.gruposOpcionesId.forEach(id =>{
          let sub = this.gruposOpcionesService.get(id).subscribe(data=>{
            this.gruposOpciones.push(data);
            sub.unsubscribe()
          })
        })      
        this.changeRef.detectChanges()        
      })    
      
      this.productosService.getWoocommerceValue(this.paramId).subscribe(data=>{
        this.woocommerceSyncData.asignarValores(data);
        console.log(data)
      })
    } 
    else{
      this.item.id = this.firestore.createId();
    }

    let comercio_seleccionadoId = localStorage.getItem('comercio_seleccionadoId');
    this.categoriaService.getAll().subscribe((snapshot) => {     
      this.categorias = [];
      snapshot.forEach((snap: any) => {         
          var item = snap.payload.doc.data();
          item.id = snap.payload.doc.id;              
          this.categorias.push(item);   
      }); 
    })

    this.cocinasService.list().subscribe((data) => {     
      this.cocinas = data;
    /*  if(this.cocinas.length == 0 && this.comercio.config.cocinas){
        this.presentAlertCrearCocinas();
      }*/
    })

   

  }


  ionViewDidLeave(){   

  }

  
  addFoto(newValue : any){   
    let archivo = new Archivo();
    archivo.url = newValue;    
    this.imagenesNuevas.push(archivo);
  }

  async agregarFoto(blob){
    return this.fotosService.uploadImagen(this.item.id,blob)
  }

  async eliminarFoto(index){

    const alert = await this.alertController.create({
      header: 'Está seguro que desea eliminar esta imagen?',
      message: '',
      buttons: [
        { 
          text: 'No',
          handler: (blah) => {
            
          }
        }, {
          text: 'Si',
          handler: () => {           
           
           
           this.item.imagenes.splice(index,1)      
          }
        }
      ]
    });
    await alert.present();    

  }

  async verImagen(index,imagen){
    const modal = await this.modalCtrl.create({
      component: DetailsImagePage,
      componentProps: {
        url:imagen.url      
      }
    });
    modal.onDidDismiss()
    .then((retorno) => {
      if(retorno.data == "eliminar"){     
        this.eliminarFoto(index)
      }        
    });
    return await modal.present();
  }

  async verImagenNueva(index,imagen){
    const modal = await this.modalCtrl.create({
      component: DetailsImagePage,
      componentProps: {
        url:imagen.url      
      }
    });
    modal.onDidDismiss()
    .then((retorno) => {
      if(retorno.data == "eliminar"){     
        this.eliminarFotoNueva(index)
      }        
    });
    return await modal.present();
  }

  async eliminarFotoNueva(index){

    const alert = await this.alertController.create({
      header: 'Está seguro que desea eliminar esta imagen?',
      message: '',
      buttons: [
        { 
          text: 'No',
          handler: (blah) => {
            
          }
        }, {
          text: 'Si',
          handler: () => {           
           
            this.imagenesNuevas.splice(index,1)            
          }
        }
      ]
    });
    await alert.present();    
  }


  async openAddGrupoOpciones(){   
      const modal = await this.modalController.create({
        component: SelectGruposOpcionesPage      
      });  
      modal.present().then(()=>{
        
      })
  
      modal.onDidDismiss()
      .then((retorno) => {
        if(retorno.data){
          this.gruposOpciones.push(retorno.data.item);
        }        
      });
      return await modal.present();
    }


  

  async eliminarGrupoOpciones(index){
    this.gruposOpciones.splice(index,1);
  }

  async guardar(){
    
    this.submitted = true;
    

    if (this.datosForm.invalid) {
      this.toastServices.alert('Por favor completar todos los campos marcados con * antes de continuar',"");
      return; 
    }  


    this.item.gruposOpcionesId =[]
    this.gruposOpciones.forEach(grupo =>{
      this.item.gruposOpcionesId.push(grupo.id);
    })

    this.item.asignarValores(this.datosForm.value);

    var palabras = [this.datosForm.controls.nombre.value,this.datosForm.controls.descripcion.value];

    if(this.item.categorias){
      if(this.item.categorias.length > 0){
        this.item.categorias.forEach(element => {
          palabras.push(element)
        });
      }
    } 

    //Pasamos imagenes nuevas
    for(let i=0;i<this.imagenesNuevas.length;i++){     
      let blob = this.imageService.getBlob(this.imagenesNuevas[i].url)
      let file = await this.agregarFoto(blob)
      let json = JSON.parse(JSON.stringify(file))
      this.item.imagenes.push(json)     
    }

    if(this.comercio.config.woocommerce){      
      console.log(this.woocommerceSyncData)
      this.woocommerceSyncData.changeDate = new Date()
      let wSyncData = JSON.parse(JSON.stringify(this.woocommerceSyncData));
      this.productosService.updateWoocommerceValues(this.item.id,wSyncData);
    }

   
    if(this.updating){
      this.productosService.update(this.item).then((data:any)=>{
        
      })
     
    } 
    else{
      this.productosService.set(this.item.id,this.item).then((data:any)=>{
      })
      
    }    
    this.modalCtrl.dismiss()
    //this.navCtrl.back();

  }

  lectorDeCodigo(){
    this.barcodeScanner.scan().then(barcodeData => {   
      
      this.datosForm.patchValue({
        barcode: barcodeData.text,      
      });  

     }).catch(err => {
         alert(err);
     });
  }

  async agregarStock(){
    const modal = await this.modalCtrl.create({
      component: FormStockPage,
      componentProps:{
        item:this.item
      }
    });  

    return await modal.present();
  }

  

  async openAddCategoria(){
    const modal = await this.modalController.create({
      component: FormCategoriaPage,  
      componentProps: { 
        comercioId:localStorage.getItem('comercio_seleccionadoId')
      }
    });   
    return await modal.present();
  }



 
  cancelar(){
   this.modalCtrl.dismiss()
    this.navCtrl.back();
  }

  elimiar(){
    this.presentAlertEliminar();
  }

  async presentAlertEliminar() {
    const alert = await this.alertController.create({
      header: 'Eliminar',
      message: 'Está seguro que desea eliminar el producto?',
      buttons: [
        {
          text: 'Cancelar',
          handler: (blah) => {
            
          }
        }, {
          text: 'Eliminar',
          handler: () => {
            this.productosService.delete(this.paramId);
            this.productosService.deleteWoocommerceValues(this.paramId)
            //this.navCtrl.back();
            this.modalCtrl.dismiss();
          }
        }
      ]
    });
    await alert.present();
  }


  async presentAlertCrearCocinas() {
    const alert = await this.alertController.create({
      header: 'Agregar Cocina',
      message: 'Debes agregar una cocina antes de continuar',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.router.navigate(['list-cocinas']);
          }
        }
      ]
    });
    await alert.present();
  }



}
