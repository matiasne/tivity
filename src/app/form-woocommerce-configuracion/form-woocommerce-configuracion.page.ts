import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Comercio } from '../models/comercio';
import { CategoriasService } from '../Services/categorias.service';
import { ComerciosService } from '../Services/comercios.service';
import { LoadingService } from '../Services/loading.service';
import { ProductosService } from '../Services/productos.service';
import { ToastService } from '../Services/toast.service';
import { CategoriesService } from '../Services/woocommerce/categories.service';
import { WebhooksService } from '../Services/woocommerce/webhooks.service';
import { WoocommerceService } from '../Services/woocommerce/woocommerce.service';
import { WordpressService } from '../Services/wordpress/wordpress.service';

@Component({
  selector: 'app-form-woocommerce-configuracion',
  templateUrl: './form-woocommerce-configuracion.page.html',
  styleUrls: ['./form-woocommerce-configuracion.page.scss'],
})
export class FormWoocommerceConfiguracionPage implements OnInit {

  public comercio:Comercio
  public subsItemsProd: Subscription;
  public productos = []

  public url
  public consumerKey
  public consumerSecret

  public progresoReceived = 0;
  public progresoSend = 0;

  public actualizar = false;
  public conexionOk = false;

  public wordpressToken = "";
  public woocommerceConnection = {
    comercioId:"",
    user:"",
    password:"",
    url:"",
    consumerKey:"",
    consumerSecret:""
  }

  public prueba = false;
  public isOk = false;

  constructor(
    private comerciosService:ComerciosService,
    private navCtrl:NavController,
    private productosServices:ProductosService,
    private woocommerceService:WoocommerceService,
    private wordpressService:WordpressService,
    private alertController:AlertController,
    private loadingService:LoadingService,
    private categoriasService:CategoriasService,
    private webhooksService:WebhooksService,
    private toastService:ToastService
  ) { 
    this.comercio = new Comercio()

  }

  ngOnInit() {
    this.comercio = this.comerciosService.getSelectedCommerceValue()
    this.comerciosService.getWoocommerceValue().subscribe(data=>{
      if(data){
        this.woocommerceConnection = data;
        this.woocommerceConnection.comercioId = this.comercio.id
      }      
    })

    this.wordpressService.obsToken().subscribe(data=>{
      this.wordpressToken = data;
      console.log(this.wordpressToken)
    })
  }


  cancelar(){
    this.navCtrl.back()
  }

  async guardar(){
    this.comerciosService.updateWoocommerceValues(this.woocommerceConnection).then(data=>{
      console.log("Guardados")
    })
  }

  test(){
    
    
      this.conectar()
   
   
  }

  async conectar(){

  /*  try{
      await this.wordpressService.login(this.woocommerceConnection.user,this.woocommerceConnection.password,this.woocommerceConnection.url)
    }
    catch(err){
      console.log(err)
      

      if(err.status == 0){
        this.toastService.alert("Error","No se puede conectar con la URL") 
        
      }
      else{
        this.toastService.alert("Error",err.error.message)
      }

      this.isOk = false;
      this.comerciosService.updateWoocommerceValues(this.comercio.id,this.woocommerceConnection).then(data=>{
        console.log("Update")
      })
     
    }*/
    this.prueba = false;
    
    this.loadingService.presentLoadingText("Probando conexión...")
    this.woocommerceService.getAll().then(data=>{
      this.prueba = true;
      console.log(data)
      this.isOk = true;
      alert("Conectado correctamente")
      this.loadingService.dismissLoading();
    },err=>{
      this.prueba = true;
      console.log(err)
      alert("Error")
      if(err.status == 0){
        this.toastService.alert("Error","No se puede conectar con la URL")
        this.isOk = false;
        this.comerciosService.updateWoocommerceValues(this.woocommerceConnection).then(data=>{
          console.log("Update")
        })
      }
      else{
        this.toastService.alert("Error",err.error.message)
        this.isOk = false;
        this.comerciosService.updateWoocommerceValues(this.woocommerceConnection).then(data=>{
          console.log("Update")
        })
      }
      this.conexionOk = false;
      this.isOk = false;
      this.comerciosService.updateWoocommerceValues(this.woocommerceConnection).then(data=>{
        console.log("Update")
      })
      this.loadingService.dismissLoading();
    })

    

  }
 

 /* async sincronizar(){
    this.actualizar = false;
    this.progresoReceived = 0;
    this.progresoSend = 0; 
    
    await this.webhooksService.pause()
    await this.webhooksService.sincronizar()

    let resp = await this.WCCategoriesService.syncFirebaseToWC()   
   // console.log(resp)
    resp = await this.woocommerceService.syncFirebaseToWC()  
  //  console.log(resp)
    await this.webhooksService.enable()
    
  }*/


  downloadData(){
    
  }


  cambiado(){
    this.actualizar = true;
  }

  async mostrarMensaje(mensaje){
    const alert = await this.alertController.create({
      header: 'Resultado',
      message: mensaje,
      buttons: [
        {
          text: 'Ok',
          handler: () => {                
          }
        }
      ]
    });

    alert.onDidDismiss().then(()=>{

    })
    await alert.present();    
  }


  
}
