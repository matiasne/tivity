import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../Services/global/carrito.service';
import { NavController, ModalController, AlertController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { ComerciosService } from '../Services/comercios.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingService } from '../Services/loading.service';
import { ToastService } from '../Services/toast.service';
import { SelectClientePage } from '../select-cliente/select-cliente.page';
import { FormClientePage } from '../form-cliente/form-cliente.page';
import { Mesa } from '../models/mesa';
import { Cliente } from '../models/cliente';
import { Comercio } from '../models/comercio';
import { Pedido } from '../models/pedido';
import { AuthenticationService } from '../Services/authentication.service';
import { EnumTipoDescuento } from '../models/descuento';
import { ModalNotificacionService } from '../Services/modal-notificacion.service';
import { ModalInputDireccionPage } from '../modal-input-direccion/modal-input-direccion.page';
import { Localizacion } from '../models/localizacion';
import { ImpresoraService } from '../Services/impresora/impresora.service';
import { SelectDivisionPage } from '../select-division/select-division.page';
import { Division, Subdivision } from '../models/subdivision';
import { FormCobrarPedidoPage } from '../form-cobrar-pedido/form-cobrar-pedido.page';

@Component({
  selector: 'app-details-carrito',
  templateUrl: './details-carrito.page.html',
  styleUrls: ['./details-carrito.page.scss'],
})
export class DetailsCarritoPage implements OnInit {

  public carrito = new Pedido();
  public comercio:Comercio;
  public subsComercio: Subscription;
  public subsCarrio:Subscription;
  
  public impresora
  public enumTipo = EnumTipoDescuento

  constructor(
    public authenticationService:AuthenticationService,
    public carritoService:CarritoService,
    private navCtrl: NavController,
    public modalController: ModalController,
    public comerciosService:ComerciosService,
    private loadingService:LoadingService,
    private toastServices:ToastService,
    private impresoraService:ImpresoraService,
    
    private route:ActivatedRoute,
    private router:Router,
    
    private alertController:AlertController,
    private modalNotificacion:ModalNotificacionService
  ) {
    this.comercio = new Comercio();
    this.carrito = new Pedido(); 

    this.loadingService.presentLoading()

    this.comerciosService.getSelectedCommerce().subscribe(data=>{
      this.comercio.asignarValores(data)
      console.log(this.comercio)    
    })
   

   // this.back = this.route.snapshot.params.carritoIntended;

   
    this.subsCarrio = this.carritoService.getActualCarritoSubs().subscribe(data=>{
      this.carrito = data;  
      
      this.loadingService.dismissLoading()
    })    
  }  



  ionViewDidEnter(){
    
  }

  ngOnInit() {
    
  } 

  ionViewDidLeave(){
    this.subsCarrio.unsubscribe();   
  } 

  atras(){
    this.modalController.dismiss()
  }

  async cancelar(){
    this.modalController.dismiss();
  }


  continuar(){ 

    if(this.carrito.items.length == 0){
      this.toastServices.alert("Debes ingresar al menos un producto o servicio","");      
      return;
    }        
    
    this.crearPedido();       
  } 

  crearPedido(){
    this.imprimir()   
    this.carritoService.crearPedido()
    this.modalController.dismiss("vacio")
  }  

  imprimir(){
    this.impresoraService.impresionComanda(this.carrito);
  }

  cerrar(){
    this.modalController.dismiss()
  }

  async cobrar(){
    this.carrito.comanda.numero = await this.comerciosService.obtenerActualizarNumeroPedido()
    const modal = await this.modalController.create({
      id:'form-cobrar',
      component: FormCobrarPedidoPage,  
      componentProps:{pedido:this.carrito,comercio:this.comercio},   
      cssClass:'modal-custom-wrapper' 
    });    

    modal.onDidDismiss()
    .then((retorno) => {
      if(retorno.data == "cobrado"){
       
        this.modalController.dismiss(null,null,'details-carrito') 
       
        
      }
     
    });
    return await modal.present();
  }

}
