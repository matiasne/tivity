import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, NavParams } from '@ionic/angular';
import { ChatPage } from '../chat/chat.page';
import { FormClientePage } from '../form-cliente/form-cliente.page';
import { FormMesaPage } from '../form-mesa/form-mesa.page';
import { Comercio } from '../models/comercio';
import { Descuento } from '../models/descuento';
import { ItemPedido } from '../models/itemPedido';
import { Mesa } from '../models/mesa';
import { Recargo } from '../models/recargo';
import { Reserva } from '../models/reserva';
import { Rol } from '../models/rol';
import { User } from '../models/user';
import { SelectClientePage } from '../select-cliente/select-cliente.page';
import { SelectMesaPage } from '../select-mesa/select-mesa.page';
import { SelectPersonalPage } from '../select-personal/select-personal.page';
import { SelectProductPage } from '../select-product/select-product.page';
import { AuthenticationService } from '../Services/authentication.service';
import { ComerciosService } from '../Services/comercios.service';
import { NavegacionParametrosService } from '../Services/global/navegacion-parametros.service';
import { ReservasService } from '../Services/reservas.service';

@Component({
  selector: 'app-form-reserva',
  templateUrl: './form-reserva.page.html',
  styleUrls: ['./form-reserva.page.scss'],
})
export class FormReservaPage implements OnInit {

  public comercio:Comercio
  public reserva:Reserva;
  public mesa:Mesa;
  public personal:Rol
  constructor(
    public authService:AuthenticationService,
    public modalController:ModalController,
    private navParamService:NavegacionParametrosService,
    private alertController:AlertController,
    private navParams:NavParams,
    private reservasService:ReservasService,
    private comercioService:ComerciosService
  ) { 
    this.comercio = new Comercio()
    this.comercio.asignarValores(this.comercioService.getSelectedCommerceValue());
    this.mesa = new Mesa();
    this.reserva = new Reserva()
    
  }

  ionViewDidEnter(){   

    
    if(this.navParamService.param instanceof Reserva){   //si es un solo pedido 
      this.reserva.asignarValores(this.navParamService.param);
    }  
    else{
      this.reserva = new Reserva()
    }
    
    console.log(this.reserva)
      
    
    if(this.navParams.get('fechaInicio'))
      this.reserva.desde = this.navParams.get('fechaInicio')
  }

  ngOnInit() {
  }

  async agregarItem(){

    const modal = await this.modalController.create({
      component: SelectProductPage,     
      cssClass:'modal-custom-wrapper' 
    });
    modal.onDidDismiss()
    .then((retorno) => {
      if(retorno.data){

        if(retorno.data instanceof  ItemPedido){
          const p = JSON.parse(JSON.stringify(retorno.data));
          this.reserva.items.push(p); 
        }

        if(retorno.data instanceof  Descuento){
          const p = JSON.parse(JSON.stringify(retorno.data));
          this.reserva.descuentos.push(p); 
        }

        if(retorno.data instanceof  Recargo){
          const p = JSON.parse(JSON.stringify(retorno.data));
          this.reserva.recargos.push(p); 
        }

      }
         
    });
    return await modal.present(); 

  }

  
  eliminarDescuento(i){
    this.reserva.descuentos.splice(i,1);
  }

  eliminarRecargo(i){
    this.reserva.recargos.splice(i,1);
  }

  eliminarCliente(){
    this.reserva.clienteId ="";
    this.reserva.clienteEmail ="";
    this.reserva.clienteNombre ="";
  }

  async eliminarItem(p,i){

    const alert = await this.alertController.create({
      header: 'Está seguro que desea eliminar el producto'+p.nombre+'?',
      buttons: [
        {
          text: 'Cancelar',
          handler: (blah) => {
            
          }
        }, {
          text: 'Eliminar',
          handler: () => {           
            this.reserva.items.splice(i,1);
          }
        }
      ]
    });
    await alert.present();

    
  }


  async seleccionarCliente(){
    const modal = await this.modalController.create({
      component: SelectClientePage,
      cssClass:'modal-custom-wrapper'      
    });
    
    modal.present().then(()=>{
    

    })

    modal.onDidDismiss()
    .then((retorno) => {
      if(retorno.data){
        if(retorno.data == "nuevo"){
          this.abrirNuevoCliente();
        }
        if(retorno.data != "nuevo"){
          let cliente = retorno.data.item;
          this.reserva.clienteEmail = cliente.email
          this.reserva.clienteId = cliente.id;
          this.reserva.clienteNombre = cliente.nombre
        }   
      }
           
    });
    return await modal.present();
  }

  async abrirNuevoCliente(){
    const modal = await this.modalController.create({
      component: FormClientePage,     
      cssClass:'modal-custom-wrapper' 
    });    
    modal.present().then(()=>{
    

    })

    modal.onDidDismiss()
    .then((retorno) => {
      if(retorno.data){       
        let cliente = retorno.data.item;
        this.reserva.clienteEmail = cliente.email
        this.reserva.clienteId = cliente.id;
        this.reserva.clienteNombre = cliente.nombre
      }           
    });
    return await modal.present();
  }


  async seleccionarPersonal(){
    const modal = await this.modalController.create({
      component: SelectPersonalPage,
      cssClass:'modal-custom-wrapper'      
    });
    
    modal.onDidDismiss()
    .then((retorno) => {
      if(retorno.data){
          let cliente = retorno.data.item;
          this.reserva.personalEmail = cliente.userEmail
          this.reserva.personalId = cliente.id;        
      }           
    });
    return await modal.present();
  }


  eliminarPersonal(){
    this.personal = new Rol();
    this.reserva.personalId = "";
    this.reserva.personalNombre ="";
    this.reserva.personalEmail ="";
  }

  async seleccionarMesa(){
    const modal = await this.modalController.create({
      component: SelectMesaPage,     
      cssClass:'modal-custom-wrapper'
    });

    modal.present().then(()=>{
      
    })

    modal.onDidDismiss()
    .then((retorno) => {
      if(retorno.data){
        if(retorno.data == "nuevo"){

        }
        else{
          this.mesa = retorno.data.item;
          this.reserva.mesaId = this.mesa.id;
          this.reserva.mesaNombre = this.mesa.nombre
        }
       
      }        
    });
    return await modal.present();
  }

  async abrirNuevaMesa(){
    const modal = await this.modalController.create({
      component: FormMesaPage,     
      cssClass:'modal-custom-wrapper' 
    });    
    modal.present().then(()=>{
    

    })

    modal.onDidDismiss()
    .then((retorno) => {
      if(retorno.data){
        this.mesa = retorno.data.item;
        this.reserva.mesaId = this.mesa.id;
        this.reserva.mesaNombre = this.mesa.nombre
      }
     
    });
    return await modal.present();
  }
  
  eliminarMesa(){
    this.mesa = new Mesa();
    this.reserva.mesaId = "";
    this.reserva.mesaNombre ="";
  }


  guardar(){
    this.reserva.direccion = JSON.parse(JSON.stringify(this.reserva.direccion));
    this.modalController.dismiss(this.reserva)
  }

  cerrar(){
    this.modalController.dismiss();
  }

  async chat(){
    const modal = await this.modalController.create({
      component: ChatPage,     
      cssClass:'modal-custom-wrapper',
      componentProps:{
        id:this.reserva.id,
        objeto:"reservas"
      }      
    });
    return await modal.present(); 
  }

  async eliminar(){
    const alert = await this.alertController.create({
      header: 'Está seguro que desea eliminar la reserva?',
      buttons: [
        {
          text: 'Cancelar',
          handler: (blah) => {
            
          }
        }, {
          text: 'Eliminar',
          handler: () => {           
            this.reservasService.delete(this.reserva.id).then(data=>{
              this.modalController.dismiss()
            })
          }
        }
      ]
    });
    await alert.present();
  }
}
