import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, NavController, NavParams } from '@ionic/angular';
import { ChatPage } from '../chat/chat.page';
import { FormClientePage } from '../form-cliente/form-cliente.page';
import { FormCobrarPedidoPage } from '../form-cobrar-pedido/form-cobrar-pedido.page';
import { FormConfiguracionAfipPage } from '../form-configuracion-afip/form-configuracion-afip.page';
import { FormDevolverPedidoPage } from '../form-devolver-pedido/form-devolver-pedido.page';
import { FormMesaPage } from '../form-mesa/form-mesa.page';
import { ModalInputDireccionPage } from '../modal-input-direccion/modal-input-direccion.page';
import { Caja } from '../models/caja';
import { Comercio } from '../models/comercio';
import { Descuento, EnumTipoDescuento } from '../models/descuento';
import { Localizacion } from '../models/localizacion';
import { Mesa } from '../models/mesa';
import { EnumTipoMovimientoCaja, MovimientoCaja } from '../models/movimientoCaja';
import { EnumEstadoCobro, Pedido } from '../models/pedido';
import { EnumEstadoCocina } from 'src/app/models/producto';
import { Producto } from '../models/producto';
import { Recargo } from '../models/recargo';
import { SelectClientePage } from '../select-cliente/select-cliente.page';
import { SelectMesaPage } from '../select-mesa/select-mesa.page';
import { SelectProductPage } from '../select-product/select-product.page';
import { AfipServiceService } from '../Services/afip/afip-service.service';
import { CajasService } from '../Services/cajas.service';
import { ComentariosService } from '../Services/comentarios.service';
import { ComerciosService } from '../Services/comercios.service';
import { CarritoService } from '../Services/global/carrito.service';
import { NavegacionParametrosService } from '../Services/global/navegacion-parametros.service';
import { ImpresoraService } from '../Services/impresora/impresora.service';
import { MesasService } from '../Services/mesas.service';
import { ModalNotificacionService } from '../Services/modal-notificacion.service';
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
    private alertController:AlertController,
    private mesasServices:MesasService,
    private navParamService:NavegacionParametrosService,
    private carritoService:CarritoService,
    private modalNotificacion:ModalNotificacionService,
    private afipService:AfipServiceService
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

    if(this.pedido.mesaId){
      this.mesasServices.get(this.pedido.mesaId).subscribe(resp=>{
        this.mesa = resp
      })
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
    this.pedido.comanda.demora = min
    this.actualizarPedido()
  }


}
