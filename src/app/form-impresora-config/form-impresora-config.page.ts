import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { FormImpresoraPage } from '../form-impresora/form-impresora.page';
import { ListSelectBluetoothDevicePage } from '../list-select-bluetooth-device/list-select-bluetooth-device.page';
import { BluettothDevice } from '../models/bluetooth-device';
import { BluettothImpresora } from '../models/bluetooth-impresora';
import { Comercio } from '../models/comercio';
import { ComerciosService } from '../Services/comercios.service';
import { ImpresoraService } from '../Services/impresora/impresora.service';

@Component({
  selector: 'app-form-impresora-config',
  templateUrl: './form-impresora-config.page.html',
  styleUrls: ['./form-impresora-config.page.scss'],
})
export class FormImpresoraConfigPage implements OnInit {

  public impresora:BluettothImpresora
  public cocinas = [];
  public comercio:Comercio

  constructor(
    private modalCtrl:ModalController,
    private impresoraService:ImpresoraService,
    private comercioService:ComerciosService
  ) { 
    this.impresora = new BluettothImpresora()   
    this.impresora = this.impresoraService.getImpresora()
    console.log(this.impresora)
    this.comercio = new Comercio();
    this.comercioService.getSelectedCommerce().subscribe(data=>{
      // let comercio_seleccionadoId = localStorage.getItem('comercio_seleccionadoId'); 
      if(data){ 
       
       this.comercio.asignarValores(data)
      }
      
     })
  }

  ngOnInit() {
    
  }

  async seleccionar(printer){
    const modal = await this.modalCtrl.create({
      component: FormImpresoraPage,
      componentProps:{dispositivo:printer}
    });
    modal.onDidDismiss()
    .then((retorno) => {
      if(retorno.data){
        this.impresora.asignarValores(retorno.data)
        this.impresoraService.guardarImpresora(retorno.data);
      }
               
    });
    return await modal.present();
  }

  async agregarImpresora(){
    const modal = await this.modalCtrl.create({
      component: ListSelectBluetoothDevicePage,
      id:'list-impresoras'
    });
    modal.onDidDismiss()
    .then(async (retorno) => {
      if(retorno.data){   
        
          const modal = await this.modalCtrl.create({
            component: FormImpresoraPage,
            componentProps:{dispositivo:retorno.data}
          });
          modal.onDidDismiss()
          .then((retorno) => {
            this.impresora.asignarValores(retorno.data)
            this.impresoraService.guardarImpresora(retorno.data);
          });
          return await modal.present();             
        }             
    });
    return await modal.present();
  }

  
  conectar(){
    this.impresoraService.impresionPrueba("usuario prueba")
  }

  update(){    
    this.comercioService.update(this.comercio);
  }

  eliminar(){
    this.impresora = new BluettothImpresora()   
    this.impresoraService.eliminarImpresora()
  }


}
