import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ListPedidosManagerComponent } from 'src/app/Components/list-pedidos-manager/list-pedidos-manager.component';
import { DetailsPedidoPage } from 'src/app/details-pedido/details-pedido.page';
import { Cliente } from 'src/app/models/cliente';
import { Pedido } from 'src/app/models/pedido';
import { NavegacionParametrosService } from 'src/app/Services/global/navegacion-parametros.service';

@Component({
  selector: 'app-list-pedidos-cliente',
  templateUrl: './list-pedidos-cliente.page.html',
  styleUrls: ['./list-pedidos-cliente.page.scss'],
})
export class ListPedidosClientePage implements OnInit {
  @ViewChild(ListPedidosManagerComponent) listPedidoManagerChild:ListPedidosManagerComponent;
  public clienteNombre = "";

  public cliente:Cliente;
  constructor(
    public modalController:ModalController,
    private route:ActivatedRoute,
    private navParametrosService:NavegacionParametrosService
  ) { 
    this.cliente = new Cliente()
  }

  ngOnInit() {
    if(this.navParametrosService.param instanceof Cliente){
      console.log("!!!!")
      this.cliente.asignarValores(this.navParametrosService.param)
    }
    
  }

  ionViewDidLeave(){
    this.listPedidoManagerChild.borrarDatosComponente()
  }

  async nuevoPedido(){
    
    let pedido = new Pedido();
    pedido.asignarCliente(this.cliente)

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
