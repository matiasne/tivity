import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CajasService } from '../Services/cajas.service';
import { MesasService } from '../Services/mesas.service';
import { Comercio } from '../models/comercio';
import { CarritoService } from '../Services/global/carrito.service';
import { AfipServiceService } from '../Services/afip/afip-service.service';
import { ComerciosService } from '../Services/comercios.service';
import { LoadingService } from '../Services/loading.service';

@Component({
  selector: 'app-dashboard-comercio',
  templateUrl: './dashboard-comercio.page.html',
  styleUrls: ['./dashboard-comercio.page.scss'],
})
export class DashboardComercioPage implements OnInit {

  public comercio:Comercio;
  constructor(
    public router:Router,
    private carritoService:CarritoService,
    private comerciosService:ComerciosService,
    private afipService:AfipServiceService,
    private loadingService:LoadingService
  ) { }

  ngOnInit() {
    this.carritoService.vaciar()
  }

  ionViewDidEnter(){
    
    if(this.comercio.id){
      this.loadingService.presentLoading()
    }

    this.comerciosService.getSelectedCommerce().subscribe(data=>{
      this.loadingService.dismissLoading();
      this.comercio.asignarValores(data)
      this.afipService.login();
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

}
