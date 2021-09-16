import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, NavParams } from '@ionic/angular';
import { ChatPage } from '../chat/chat.page';
import { FormClientePage } from '../form-cliente/form-cliente.page';
import { Comercio } from '../models/comercio';
import { Descuento } from '../models/descuento';
import { ItemPedido } from '../models/itemPedido';
import { Recargo } from '../models/recargo';
import { Rol } from '../models/rol';
import { Subscripcion } from '../models/subscripcion';
import { SelectClientePage } from '../select-cliente/select-cliente.page';
import { SelectPersonalPage } from '../select-personal/select-personal.page';
import { SelectProductPage } from '../select-product/select-product.page';
import { AuthenticationService } from '../Services/authentication.service';
import { ComerciosService } from '../Services/comercios.service';
import { NavegacionParametrosService } from '../Services/global/navegacion-parametros.service';
import { ReservasService } from '../Services/reservas.service';
import { SubscripcionesService } from '../Services/subscripciones.service';

@Component({
  selector: 'app-form-subscripcion',
  templateUrl: './form-subscripcion.page.html',
  styleUrls: ['./form-subscripcion.page.scss'],
})
export class FormSubscripcionPage implements OnInit {

  public subscripcion:Subscripcion;
  public comercio:Comercio;
  public personal:Rol;

  constructor(
    public authService:AuthenticationService,
    public modalController:ModalController,
    private navParamService:NavegacionParametrosService,
    private alertController:AlertController,
    private navParams:NavParams,
    private subscripcionesService:SubscripcionesService,
    private comercioService:ComerciosService
  ) {
    this.comercio = new Comercio()
    this.comercio.asignarValores(this.comercioService.getSelectedCommerceValue());
    this.subscripcion = new Subscripcion()
   }

  ngOnInit() {

    if(this.navParamService.param instanceof Subscripcion){   //si es un solo pedido 
      console.log("!!!!")
      this.subscripcion.asignarValores(this.navParamService.param);
    }  
    
    
    console.log(this.subscripcion)

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
          this.subscripcion.items.push(p); 
        }

        if(retorno.data instanceof  Descuento){
          const p = JSON.parse(JSON.stringify(retorno.data));
          this.subscripcion.descuentos.push(p); 
        }

        if(retorno.data instanceof  Recargo){
          const p = JSON.parse(JSON.stringify(retorno.data));
          this.subscripcion.recargos.push(p); 
        }

      }
         
    });
    return await modal.present(); 

  }

  
  eliminarDescuento(i){
    this.subscripcion.descuentos.splice(i,1);
  }

  eliminarRecargo(i){
    this.subscripcion.recargos.splice(i,1);
  }

  eliminarCliente(){
    this.subscripcion.clienteId ="";
    this.subscripcion.clienteEmail ="";
    this.subscripcion.clienteNombre ="";
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
            this.subscripcion.items.splice(i,1);
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
          this.subscripcion.clienteEmail = cliente.email
          this.subscripcion.clienteId = cliente.id;
          this.subscripcion.clienteNombre = cliente.nombre
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
        this.subscripcion.clienteEmail = cliente.email
        this.subscripcion.clienteId = cliente.id;
        this.subscripcion.clienteNombre = cliente.nombre
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
        this.subscripcion.personalEmail = cliente.userEmail
        this.subscripcion.personalId = cliente.id;        
      }           
    });
    return await modal.present();
  }

  eliminarPersonal(){
    this.personal = new Rol();
    this.subscripcion.personalId = "";
    this.subscripcion.personalNombre ="";
    this.subscripcion.personalEmail ="";
  }
  
  async chat(){
    const modal = await this.modalController.create({
      component: ChatPage,     
      cssClass:'modal-custom-wrapper',
      componentProps:{
        id:this.subscripcion.id,
        objeto:"reservas"
      }      
    });
    return await modal.present(); 
  }

  async eliminar(){
    const alert = await this.alertController.create({
      header: 'Está seguro que desea eliminar la subscripción?',
      buttons: [
        {
          text: 'Cancelar',
          handler: (blah) => {
            
          }
        }, {
          text: 'Eliminar',
          handler: () => {           
            this.subscripcionesService.delete(this.subscripcion.id).then(data=>{
              this.modalController.dismiss()
            })
          }
        }
      ]
    });
    await alert.present();
  }

  guardar(){
    this.modalController.dismiss(this.subscripcion)
  }

  cerrar(){
    this.modalController.dismiss();
  }

}
