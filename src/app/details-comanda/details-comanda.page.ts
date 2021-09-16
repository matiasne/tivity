import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, NavController, NavParams } from '@ionic/angular';
import { ChatPage } from '../chat/chat.page';
import { Comercio } from '../models/comercio';
import { Mesa } from '../models/mesa';
import { EnumTipoMovimientoCaja } from '../models/movimientoCaja';
import { Pedido } from '../models/pedido';
import { EnumEstadoCocina } from 'src/app/models/item';
import { CajasService } from '../Services/cajas.service';
import { ComentariosService } from '../Services/comentarios.service';
import { ComerciosService } from '../Services/comercios.service';
import { NavegacionParametrosService } from '../Services/global/navegacion-parametros.service';
import { ImpresoraService } from '../Services/impresora/impresora.service';
import { PedidoService } from '../Services/pedido.service';

@Component({
  selector: 'app-details-comanda',
  templateUrl: './details-comanda.page.html',
  styleUrls: ['./details-comanda.page.scss'],
})
export class DetailsComandaPage implements OnInit {

  private enumTipoMovimientoCaja = EnumTipoMovimientoCaja
  public pedido:Pedido;
  public comercio:Comercio;
  public mesa:Mesa
  
  public cEstado = EnumEstadoCocina; 
  
  public comentarios = [];

  constructor(
    public comerciosService:ComerciosService,
    public cajasService:CajasService,
    private modalController:ModalController,
    private pedidosService:PedidoService,
    private impresoraService:ImpresoraService,
    private comentariosService:ComentariosService,
    private navParamService:NavegacionParametrosService,
  ) {

    this.comercio = new Comercio()
    this.mesa = new Mesa();
    this.pedido = new Pedido()
    this.comercio.asignarValores(this.comerciosService.getSelectedCommerceValue());

    if(this.navParamService.param instanceof Pedido){   //si es un solo pedido 
      this.pedido.asignarValores(this.navParamService.param);
    }  
    else{
      this.pedido = new Pedido()
    }      


    if(this.pedido.id){
      this.comentariosService.setearPath("pedidos",this.pedido.id);   
      let obs =this.comentariosService.list().subscribe(data =>{
        this.comentarios = data; 
        obs.unsubscribe();
      })
    }  

   }

  ngOnInit() {
  }

  
  imprimir(){
    this.impresoraService.impresionComanda(this.pedido)
  }

  
  async chat(){
    const modal = await this.modalController.create({
      component: ChatPage,     
      cssClass:'modal-custom-wrapper',
      componentProps:{
        id:this.pedido.id,
        objeto:"pedidos"
      }      
    });
    return await modal.present(); 
  }

  
  actualizarPedido(){
    if(this.pedido.id){
      this.pedido.direccion = JSON.parse(JSON.stringify(this.pedido.direccion));
      this.pedidosService.update(this.pedido).then(data=>{
        console.log(data)
      })
    }
  }  

  
  cerrar(){
    this.modalController.dismiss()
  }

  demora(min){
    this.pedido.fechaTomado = new Date()
    this.pedido.comanda.demora = min
    this.actualizarPedido()
    this.modalController.dismiss()
  }


}
