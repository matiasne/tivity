import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Comercio } from '../models/comercio';
import { CarritoService } from '../Services/global/carrito.service';
import { ComerciosService } from '../Services/comercios.service';
import { EscanerCodigoBarraService } from '../Services/escaner-codigo-barra.service';
import { ModalController } from '@ionic/angular';
import { ComandaPage } from '../impresiones/comanda/comanda.page';
import { AConRespInscriptoPage } from '../impresiones/facturas/a-con-resp-inscripto/a-con-resp-inscripto.page';

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
    private escanerCodigoBarraService:EscanerCodigoBarraService,
    private modalController:ModalController,
  ) { 
    this.comercio = new Comercio()
  }
 
  ngOnInit() { 
    this.carritoService.vaciar() 
  //  this.impresoraService.impresionPrueba("matias") 
  }

  ionViewDidEnter(){
  
    this.comerciosService.getSelectedCommerce().subscribe(data=>{
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

  async selectUSB(){    
    this.escanerCodigoBarraService.seleccionarDispositivoUSB()
  }

  async connectUSB(){
    this.escanerCodigoBarraService.conectarDirectamenteUSB()
  }

  async mostrarFactura(){
    const modal = await this.modalController.create({
      component: AConRespInscriptoPage    
    });    
    return await modal.present();
  }
}
