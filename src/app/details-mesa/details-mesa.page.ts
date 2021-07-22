import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { DetailsPedidoPage } from '../details-pedido/details-pedido.page';
import { ClienteEstado } from '../models/clienteEstado';
import { Comercio } from '../models/comercio';
import { EnumTipoDescuento } from '../models/descuento';
import { Mesa } from '../models/mesa';
import { EnumEstadoCobro, Pedido } from '../models/pedido';
import { Producto } from '../models/producto';
import { ComentariosService } from '../Services/comentarios.service';
import { ComerciosService } from '../Services/comercios.service';
import { NavegacionParametrosService } from '../Services/global/navegacion-parametros.service';
import { LoadingService } from '../Services/loading.service';
import { MesasService } from '../Services/mesas.service';
import { PedidoService } from '../Services/pedido.service';

@Component({
  selector: 'app-details-mesa',
  templateUrl: './details-mesa.page.html',
  styleUrls: ['./details-mesa.page.scss'],
})
export class DetailsMesaPage implements OnInit {

  public mesa:Mesa;
  public comercio:Comercio;
  public pedidos = []

  public cEstado = EnumEstadoCobro;

  public enumTipo = EnumTipoDescuento
  
  
  constructor(
    private route: ActivatedRoute,
    private alertController:AlertController,
    private comercioService:ComerciosService,
    private mesasSerivce:MesasService,
    private loadingService:LoadingService,
    private pedidosService:PedidoService,
    private navCtrl:NavController,
    private navParametrosService:NavegacionParametrosService,
    private router:Router,
    private modalController:ModalController
  ) {
    this.mesa = new Mesa();
    this.comercio = new Comercio();
   }

  ngOnInit() {

    this.comercio.asignarValores(this.comercioService.getSelectedCommerceValue())
    this.mesasSerivce.get(this.route.snapshot.params.id).subscribe(data=>{
      this.mesa = data;
    })

    this.loadingService.presentLoading(); 

    this.pedidosService.getByMesa(this.route.snapshot.params.id).subscribe((pedidos:any)=>{ 
      this.pedidos = [];        
      pedidos.forEach(element => {
        if(element.statusCobro == this.cEstado.pendiente){
          this.pedidos.push(element);  
        }
      });        
          
      this.loadingService.dismissLoading();    
    });   
  }

  ionViewDidEnter(){    

  }
   
  

  atras(){
    this.navCtrl.back()
  }

  async cerrar(){     
    this.navParametrosService.param =  this.pedidos;
    this.router.navigate(['details-pedido'])
  }

  async seleccionar(item){
     
      let editarPedido = new Pedido();
      editarPedido.asignarValores(item);
      
      this.navParametrosService.param = editarPedido;
     // this.router.navigate(['details-pedido'])
  
      const modal = await this.modalController.create({
        component: DetailsPedidoPage,
        id:'detail-pedido'      
      });
      modal.onDidDismiss()
      .then((retorno) => {

      })
  
      
      await modal.present();    
  
    }
}
