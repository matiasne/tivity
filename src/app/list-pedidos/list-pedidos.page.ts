import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { DetailsPedidoPage } from '../details-pedido/details-pedido.page';
import { Pedido } from '../models/pedido';
import { NavegacionParametrosService } from '../Services/global/navegacion-parametros.service';

@Component({
  selector: 'app-list-pedidos',
  templateUrl: './list-pedidos.page.html',
  styleUrls: ['./list-pedidos.page.scss'],
})
export class ListPedidosPage implements OnInit {


  constructor(
    public modalController:ModalController,
    private navParamService:NavegacionParametrosService
    ){

  }

  
 ngOnInit(){

 }

 async nuevoPedido(){
  this.navParamService.param = undefined;
  const modal = await this.modalController.create({
    component: DetailsPedidoPage,
    componentProps:{
      pedido:new Pedido(),
    },
    id:'detail-pedido'      
  });

  
  await modal.present();  
}

 
}
