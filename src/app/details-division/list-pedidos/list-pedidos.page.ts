import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ListPedidosManagerComponent } from 'src/app/Components/list-pedidos-manager/list-pedidos-manager.component';
import { DetailsPedidoPage } from 'src/app/details-pedido/details-pedido.page';
import { Pedido } from 'src/app/models/pedido';
import { Division } from 'src/app/models/subdivision';
import { NavegacionParametrosService } from 'src/app/Services/global/navegacion-parametros.service';

@Component({
  selector: 'app-list-pedidos',
  templateUrl: './list-pedidos.page.html',
  styleUrls: ['./list-pedidos.page.scss'],
})
export class ListPedidosPage implements OnInit {
  @ViewChild(ListPedidosManagerComponent) listPedidoManagerChild:ListPedidosManagerComponent;
  public division:Division
  constructor(
    public modalController:ModalController,
    private navParametrosService:NavegacionParametrosService,
    ) { 
      this.division = new Division();
      if(this.navParametrosService.param instanceof Division){
        console.log("!!!!!!!!!!!!!!!!!!!")
        this.division.asignarValores(this.navParametrosService.param)
      }
    }
 
  ngOnInit() {
    
  }

  ionViewDidLeave(){
    this.listPedidoManagerChild.borrarDatosComponente()
  }

  async nuevoPedido(){
    
    let pedido = new Pedido();
    pedido.divisionNombre = this.division.nombre
    const modal = await this.modalController.create({
      component: DetailsPedidoPage,
      componentProps:{
        pedido:pedido
      },
      id:'detail-pedido'      
    });
  
    
    await modal.present();  
  }

}
