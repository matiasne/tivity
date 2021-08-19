import { Component, OnInit, ViewChild} from '@angular/core';
import { ModalController, LoadingController, AlertController, NavController, Platform, IonInfiniteScroll, IonSearchbar } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from '../Services/productos.service';
import { Subscription } from 'rxjs';
import { AddProductoVentaPage } from '../add-producto-venta/add-producto-venta.page';
import { CarritoService } from '../Services/global/carrito.service';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ComerciosService } from '../Services/comercios.service';
import { LoadingService } from '../Services/loading.service';
import { CargaPorVozService } from '../Services/carga-por-voz.service';
import { ChangeDetectorRef } from '@angular/core'
import { ToastService } from '../Services/toast.service';
import { CategoriasService } from '../Services/categorias.service';
import { Comercio } from '../models/comercio';
import { AuthenticationService } from '../Services/authentication.service';
import { VariacionesStocksService } from '../Services/variaciones-stocks.service';
import { FormDescuentoPage } from '../form-descuento/form-descuento.page';
import { FormRecargoPage } from '../form-recargo/form-recargo.page';
import { Pedido } from '../models/pedido';
import { ComandaPage } from '../impresiones/comanda/comanda.page';
import { CambiarPlanPage } from '../cambiar-plan/cambiar-plan.page';
import { NavegacionParametrosService } from '../Services/global/navegacion-parametros.service';
import { WordpressService } from '../Services/wordpress/wordpress.service';
import { Item } from '../models/item';
import { UsuariosService } from '../Services/usuarios.service';
import { NotifificacionesAppService } from '../Services/notifificaciones-app.service';
import { PedidoService } from '../Services/pedido.service';
import { FormProductoPage } from '../form-producto/form-producto.page';
import { DetailsCarritoPage } from '../details-carrito/details-carrito.page';
import Fuse from 'fuse.js'
import { ImpresoraService } from '../Services/impresora/impresora.service';
import { DetailsPedidoPage } from '../details-pedido/details-pedido.page';

@Component({
  selector: 'app-list-productos-servicios',
  templateUrl: './list-productos-servicios.page.html',
  styleUrls: ['./list-productos-servicios.page.scss'],
})
export class ListProductosServiciosPage implements OnInit {

  
  @ViewChild(IonSearchbar, { static: false }) ionSearchbar: IonSearchbar;

  @ViewChild(IonSearchbar) set content(content: IonSearchbar) {
    if(content) { // initially setter gets called with undefined
        this.ionSearchbar = content;
    }
 }
  
  comercio:Comercio;

  itemsAllProductos:any=[];
  itemsProductos:any = [];
  //itemsRenderProductos:any = [] 


  public carrito:any

  public itemsSeparadosAlfabeticamente = [];

  public categorias =[];
  public subsItemsProd: Subscription;
  public subsComercio: Subscription;
  public carritoSubs:Subscription;
  public palabraFiltro = "";
  public ultimoItem = "";
  public loadingActive = false;
  public showProductos:boolean = true;
  public cajaSeleccionada="";
  public reconociendoPorVoz = false;
  public subsVoz:Subscription;
  public seteandoProducto = false;

  public permisos = {
    canAgregar:false,
    canCarrito:false,
  }

  public buscandoProductos = true;

  public buscandoBarCode = false;

  public isMobile = false;

  public dragAgregar = false;
  public dragEvent:any

  public connectionStatus = "offline"
  public countNotificaciones = 0;

  public showSearchBar = false;

  public pedidosSolicitadosLength = 0;

  public impresoraStatus = false;

  public flagCobrando = false;

  constructor(
    public loadingController: LoadingController,
    private router: Router,
    private route: ActivatedRoute,
    public productosService:ProductosService,
    public variacionesStockService:VariacionesStocksService,
    public modalCtrl: ModalController,
    public carritoService:CarritoService,
    private barcodeScanner: BarcodeScanner,
    public alertController: AlertController,
    public comerciosService:ComerciosService,
    public loadingService:LoadingService,
    public cargaPorVoz:CargaPorVozService,
    public changeRef:ChangeDetectorRef,
    public toastServices:ToastService,
    private categoriasService:CategoriasService,
    private AuthenticationService:AuthenticationService,
    private modalController:ModalController,
    private authenticationService:AuthenticationService,
    private navParametrosService:NavegacionParametrosService,
    private platform:Platform,
    private wordpressService:WordpressService,
    private usuariosServices:UsuariosService,
    private notificacionesAppService:NotifificacionesAppService,
    private pedidosService:PedidoService,
    private impresoraService:ImpresoraService
    
  ) { 
    
    
    


    console.log(this.ionSearchbar)
    this.notificacionesAppService.getSinLeer(this.authenticationService.getUser()).subscribe(snapshot =>{
      console.log(snapshot.length)
      this.countNotificaciones = snapshot.length;
    }) 


    this.usuariosServices.getConnectionStatus().subscribe(data=>{
      this.connectionStatus = data
    })

    this.AuthenticationService.observeRol().subscribe(data=>{
      if(data=="Administrador"){
        this.permisos.canAgregar = true;
        this.permisos.canCarrito = true;
      }
      if(data=="Cajero"){
        this.permisos.canAgregar = false;
        this.permisos.canCarrito = true;
      }
    })

    if (this.platform.is('mobile')) { 
      this.isMobile = true;
    }     
  }

  
  refresh(event) {
    console.log('Begin async operation');
    this.ngOnInit();
    setTimeout(() => {
        event.target.complete();
      }, 500);
  }


  


  ngOnInit() {
    
    this.loadingService.presentLoadingText("Cargnado Productos")
    this.itemsProductos = [];
    this.comercio = new Comercio();

    this.comerciosService.getSelectedCommerce().subscribe(data=>{
      this.comercio.asignarValores(data);
      
    })

    this.cargaPorVoz.getPermission();

    this.carritoSubs = this.carritoService.getActualCarritoSubs().subscribe(data=>{
      this.carrito = data;
    });

    this.pedidosService.listSolicitados().subscribe((pedidos:any)=>{
      this.pedidosSolicitadosLength =  pedidos.length
    })  

    /*Mantener toda la lógica en el ngOninit para que solo se subscriba una vez y
    no demande al servidor todos los datso cda vez que se muestra esta pantalla*/
    let comercio_seleccionadoId = localStorage.getItem('comercio_seleccionadoId');
    var catSub = this.categoriasService.getAll().subscribe(snapshot =>{
      this.categorias = [];
      this.loadingService.dismissLoading()
      snapshot.forEach((snap: any) => {       
        var categoria = snap.payload.doc.data();
        categoria.id = snap.payload.doc.id; 
        categoria.seleccionado = false;
        this.categorias.push(categoria);           
      });    
      catSub.unsubscribe();
    })

    if(this.route.snapshot.params.filtro){
      this.palabraFiltro = this.route.snapshot.params.filtro;
      this.deseleccionarCategorias()
    }
    this.obtenerTodo();      
  }
 
  ionViewDidEnter(){
    //this.buscar(undefined);
    console.log("DidEnter")
    //this.marcarEnCarrito();
  //  this.wordpressService.obtainToken()
    console.log(this.carrito.items)
    this.validarEnCarrito()
  }

  ionViewWillEnter(){
   
  }

  ionViewDidLeave(){
    //this.subsItemsProd.unsubscribe();
  }

  validarEnCarrito(){
    this.itemsProductos.forEach(element => {
      element.enCarrito = 0;
      this.carrito.items.forEach(prod => {          
          if(prod.id == element.id){
            element.enCarrito += prod.cantidad;
          }
        });
    }) 
  }

  mostrar(items){
    console.log(items)
    this.itemsProductos = items
  }

  buscarCodigo(codigo){
    console.log(codigo)
    for(let i=0; i < this.itemsAllProductos.length ;i++){
      if(this.itemsAllProductos[i].barcode === codigo){
        this.itemsProductos.push(this.itemsAllProductos[i]);
      }
    }
    console.log(this.itemsProductos)
    if(this.itemsProductos.length == 1){
      this.agregarItem(this.itemsProductos[0])
      this.toastServices.mensaje("Se seleccionó el producto: "+this.itemsProductos[0].nombre,"");
    }
    
    this.changeRef.detectChanges()  

  }



  async editarProducto(item){
    
    let modal = await this.modalCtrl.create({
      component: FormProductoPage,
      componentProps: {
        item:item
      }
    });  
    return await modal.present();

  }

  show(){

  }

  showMore(){

  }
    

  obtenerTodo(){     
    this.buscandoProductos = true;
    this.subsItemsProd = this.productosService.list().subscribe(productos => {
      this.itemsAllProductos = productos;  
      this.buscandoProductos = false;
      this.itemsAllProductos.forEach(producto => {         
          producto.producto = true;
          producto.enCarrito = 0;      
      }); 
      this.itemsProductos = this.itemsAllProductos
      
      

      
    });  
  }

  async vaciarCarrito(){
    const alert = await this.alertController.create({
      header: 'Está seguro que desea vaciar todo el carrito?',
      message: '',
      buttons: [
        { 
          text: 'No',
          handler: (blah) => {
            
          }
        }, {
          text: 'Si',
          handler: () => {     
            this.itemsAllProductos.forEach(element => {
              element.enCarrito = 0
            });      
            this.carritoService.vaciar()        
          }
        }
      ]
    });
    await alert.present();   

    
  }

  onDrag(event,producto){
    event.target.getSlidingRatio().then(res=> {
      if(res < -0.8){
        this.dragAgregar = true
        this.dragEvent = event.target   

      }

      if(res == -1){
        this.onDrop2(producto)
      }
    })
  }

  onDrop1(producto){    
    console.log("onDropEnd")
  }

  agregarACarrito(producto){
    producto.precioTotal = producto.precio
    this.carritoService.agregarItem(producto);
  }


  onDrop2(producto){
    if(this.dragAgregar){
     
      this.dragAgregar = false
      producto.precioTotal = producto.precio
      this.carritoService.agregarItem(producto);
      this.dragEvent.close().then(data=>{
           
          
      })
    }
    
  }


  lectorDeCodigo(){
    this.showSearchBar = true;
    this.buscandoBarCode = true;
    this.barcodeScanner.scan().then(barcodeData => {      
     this.buscarCodigo(barcodeData.text)
     }).catch(err => {
    
     });
  }

  irDashboardProductos(){
    this.router.navigate(['dashboard-productos']);
  }

  async agregarItem(item:Item){   

    

    const modal = await this.modalCtrl.create({
      component: AddProductoVentaPage,     
      cssClass:'modal-custom-wrapper',
      componentProps:{
        producto:item
      }
    });         

    modal.onDidDismiss()
    
    .then((retorno) => { 

      if(retorno.data){   
        item.enCarrito += retorno.data.cantidad;
        //producto.cantidad = retorno.data.cantidad
        //producto.opcionesSeleccionadas = retorno.data.opcionesSeleccionadas
        this.carritoService.agregarItem(retorno.data);    
        //this.marcarEnCarrito();         
      }else{

      }     


    });

    await modal.present();

    this.palabraFiltro ="";    
  }

  async agregarDescuento(){
    
    const modal = await this.modalCtrl.create({
      component: FormDescuentoPage,     
      cssClass:'modal-custom-wrapper'
    });  

    modal.onDidDismiss().then((retorno) => {
      if(retorno.data){  
        this.carritoService.agregarDescuento(retorno.data);          
      }        
    }); 

    return await modal.present();
  }

  async agregarRecargo(){
    const modal = await this.modalCtrl.create({
      component: FormRecargoPage,     
      cssClass:'modal-custom-wrapper'
    });  

    modal.onDidDismiss().then((retorno) => {
      if(retorno.data){  
        this.carritoService.agregarRecargo(retorno.data);          
      }        
    }); 

    return await modal.present(); 
  }

  


  async siguiente(){
    
    if(this.comercio.config.cobrarDirectamente)
      this.cobrarDirectamente()
    else
      this.verCarrito(); 
  }

  async verCarrito(){
   // this.router.navigate(['details-carrito',{carritoIntended:this.route.snapshot.params.carritoIntended}])  
   this.flagCobrando = true; 
   const modal = await this.modalController.create({
      component: DetailsCarritoPage,
      componentProps:{}      
    });    

    modal.onDidDismiss().then((retorno) => {
      this.validarEnCarrito()
      if(this.route.snapshot.params.carritoIntended)
        this.router.navigate([this.route.snapshot.params.carritoIntended]);
      if(retorno.data == "vacio"){
        this.itemsProductos.forEach(element => {
          element.enCarrito = 0;
        }) 
      }
    });

    modal.onDidDismiss().then(data=>{
      this.flagCobrando = false;
    })
    
    return await modal.present();

    
  }

  async cobrarDirectamente(){
    this.flagCobrando = true;
    
    let pedido = new Pedido()  
    pedido.setCreador(this.authenticationService.getUser())
    pedido.asignarValores(this.carrito)

    
    pedido.direccion = JSON.parse(JSON.stringify(pedido.direccion));
   
    this.pedidosService.add(pedido).then(async data=>{
      let editarPedido = new Pedido();
      editarPedido.setCreador(this.authenticationService.getUser())
      editarPedido.asignarValores(data);

      this.navParametrosService.param = editarPedido;
      const modal = await this.modalController.create({
        component: DetailsPedidoPage,
        id:'detail-pedido'      
      });
      
      modal.present().then(data=>{
       
      });    

      modal.onDidDismiss().then(data=>{
        this.flagCobrando = false;
      })
    })
    
    
    
    

  }

  async imprimirComanda(pedido){
    const modal = await this.modalController.create({
      component: ComandaPage,
      componentProps:{
        pedido:pedido,
      }      
    });    
    return await modal.present();
  }


  verProductos(categoria){

    if(categoria!= '')
      this.palabraFiltro = categoria.nombre.toLowerCase();
    else
      this.palabraFiltro = "";
   

   this.deseleccionarCategorias();
    
    if(categoria != ''){      
      categoria.seleccionado = true;     
    }
    else{
      this.palabraFiltro = '';
    }    
  }

  deseleccionarCategorias(){
    /*this.categorias.forEach(c =>{
      c.seleccionado = false;
    })*/
  }

  nuevoServicio(){
    this.router.navigate(['form-servicio']);
  }

  async nuevoProducto(){
    if(this.itemsAllProductos.length > this.comercio.config.productosMaxLength){
      let modal = await this.modalCtrl.create({
        component: CambiarPlanPage,
        componentProps: {
          extraText: "Haz alcanzado el límite de productos de tu plan: "+this.comercio.plan,
          actualPlan:this.comercio.plan
        }
      });  
      return await modal.present();
    }
    else{
     // this.router.navigate(['form-producto']);

      let modal = await this.modalController.create({
        component: FormProductoPage
      });  
      return await modal.present();

    }
    
  }


  verImpresora(){
    this.router.navigate(['form-impresora-config'])
  }
}
