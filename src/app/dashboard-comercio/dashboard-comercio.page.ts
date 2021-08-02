import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CajasService } from '../Services/cajas.service';
import { MesasService } from '../Services/mesas.service';
import { Comercio } from '../models/comercio';
import { CarritoService } from '../Services/global/carrito.service';
import { AfipServiceService } from '../Services/afip/afip-service.service';
import { ComerciosService } from '../Services/comercios.service';
import { LoadingService } from '../Services/loading.service';
import { ImpresoraService } from '../Services/impresora/impresora.service';
import { ModalController } from '@ionic/angular';
import { FormCardPaymentPage } from '../form-card-payment/form-card-payment.page';

@Component({
  selector: 'app-dashboard-comercio',
  templateUrl: './dashboard-comercio.page.html',
  styleUrls: ['./dashboard-comercio.page.scss'],
})
export class DashboardComercioPage implements OnInit {

  public comercio:Comercio;

  public link = "";
  constructor(
    public router:Router,
    private carritoService:CarritoService,
    private comerciosService:ComerciosService,
    private afipService:AfipServiceService,
    private loadingService:LoadingService,
    private impresoraService:ImpresoraService,
    private modalCtrl:ModalController
  ) { 
    this.comercio = new Comercio()
  }
 
  ngOnInit() { 
    this.carritoService.vaciar() 
  //  this.impresoraService.impresionPrueba("matias") 
  }

  ionViewDidEnter(){
    
    if(this.comercio.id == "" ){
      this.loadingService.presentLoading()
    }

    this.comerciosService.getSelectedCommerce().subscribe(data=>{
      this.loadingService.dismissLoading();
      this.comercio = new Comercio();
      this.comercio.asignarValores(data)
      this.link = "https://auth.mercadopago.com.ar/authorization?client_id=6782463642048642&response_type=code&platform_id=mp&state=id="+this.comercio.id+"&redirect_uri=https://us-central1-tivity-socialup.cloudfunctions.net/api/mercadopago/marketplaceAuth"
    })
    
    
    
    
    
  }

  irVentas(){
    this.router.navigate(['dashboard-ventas']);
  }

  irSubscripciones(){
    this.router.navigate(['dashboard-subscripciones']);
  }

  irClientes(){
    this.router.navigate(['dashboard-clientes']);
  }

  irProductos(){
    this.router.navigate(['dashboard-productos']);
  }

  irServicios(){
    this.router.navigate(['dashboard-servicios']);
  }

  irServiciosProductos(){
    this.router.navigate(['list-productos-servicios']);
  }

  irPersonal(){
    this.router.navigate(['list-personal']);
  }
  
  irEgresoCaja(){
    this.router.navigate(['form-egreso-caja']);
  }

  async tarjeta(){
    
    let modal = await this.modalCtrl.create({
      component: FormCardPaymentPage,
    });  
    return await modal.present();
  }

}
