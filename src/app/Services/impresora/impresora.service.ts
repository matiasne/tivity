import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { ComandaPage } from 'src/app/impresiones/comanda/comanda.page';
import { TicketDetallePage } from 'src/app/impresiones/ticket-detalle/ticket-detalle.page';
import { BluettothDevice } from 'src/app/models/bluetooth-device';
import { BluettothImpresora } from 'src/app/models/bluetooth-impresora';
import { Comercio } from 'src/app/models/comercio';
import { Pedido } from 'src/app/models/pedido';
import { BluetoothService } from '../bluetooth.service';
import { ComerciosService } from '../comercios.service';
import { EscPosService } from './esc-pos.service';


@Injectable({
  providedIn: 'root'
})
export class ImpresoraService {

  public largoDeLinea = 32;
  public pedido:any;
  public comercio:Comercio;
  public estadoImpresoraSubject = new BehaviorSubject<any>("");
  public impresora:BluettothImpresora
  
  constructor(
    private bluetoothService: BluetoothService,
    private modalController:ModalController,
    private escposService:EscPosService,
    private comerciosService:ComerciosService
  ) {
    this.impresora = new BluettothImpresora()
    this.comercio = new Comercio()
    if(localStorage.getItem('impresora'))
      this.impresora.asignarValores(JSON.parse(localStorage.getItem('impresora')))

      this.comerciosService.getSelectedCommerce().subscribe(data=>{
        // let comercio_seleccionadoId = localStorage.getItem('comercio_seleccionadoId'); 
        if(data){ 
         
         this.comercio.asignarValores(data)
        }
        
       })
    console.log(this.impresora)   
  }

  public guardarImpresora(dispositivo:BluettothImpresora){
    localStorage.setItem('impresora',JSON.stringify(dispositivo))
    this.impresora.asignarValores(JSON.parse(localStorage.getItem('impresora')))    
  }

  public getImpresora(){
    return this.impresora
  }

  public eliminarImpresora(){   
    localStorage.setItem('impresora',"")
    this.impresora = new BluettothImpresora()
  }

  public conectarImpresora(){    
    if(this.impresora.address != ""){
      this.bluetoothService.activarYConectarDispositivo(this.impresora);    
    }    
  }

  async impresionPrueba(usuario){  

    if(this.comercio.config.impresion){
      if(this.impresora.address === ""){
        const modal = await this.modalController.create({
          component: ComandaPage    
        });    
        return await modal.present();
      }
      else{
        var cmds = await this.escposService.prueba(usuario)
        this.bluetoothService.write(this.impresora,cmds) 
      }    
    }
    
  }


  async impresionComanda(pedido:Pedido){
    if(this.comercio.config.impresion){
      if(this.impresora.address === ""){
        const modal = await this.modalController.create({
          component: ComandaPage,
          componentProps:{
            pedido:pedido,
          }      
        });    
        return await modal.present();
      }
      else{              
        var cmds = await this.escposService.comanda(pedido)
        console.log(cmds)
        this.bluetoothService.write(this.impresora,cmds) 
      }
    }
    
    
  }

  
  async impresionTicket(pedido:Pedido){
    if(this.comercio.config.impresion){
      if(this.impresora.address === ""){ 
        const modal = await this.modalController.create({
          component: TicketDetallePage,
          componentProps:{
            pedido:this.pedido,
          }      
        });    
        return await modal.present();
      }
      else{     
        let cmds = await this.escposService.ticket(pedido)        
        this.bluetoothService.write(this.impresora,cmds) 
      } 
    }
       
  }

}
