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
import { ToastService } from '../toast.service';
import { EscPosService } from './esc-pos.service';

declare global { //Esto solo funciona para chrome forzamos que identifique navigator.usb así la compilación no tira error, luego existe en el navegador
  interface Navigator {
      usb: {
        getDevices(): Promise<any>;
        requestDevice(param:any): Promise<any>;
        bulkTransfer(a:any,b:any,c:any)
      },

  }
}

@Injectable({
  providedIn: 'root'
})
export class ImpresoraService {

  public largoDeLinea = 32;
  public pedido:any;
  public comercio:Comercio;
  public estadoImpresoraSubject = new BehaviorSubject<any>("");

  public impresoraBT:BluettothImpresora
  public dispositivoUSBConectado:any

  constructor(
    private bluetoothService: BluetoothService,
    private modalController:ModalController,
    private escposService:EscPosService,
    private toastService:ToastService
  ) {
    this.impresoraBT = new BluettothImpresora()
    this.impresoraBT.asignarValores(JSON.parse(localStorage.getItem('impresoraBT'))) 

    this.conectarDirectamenteUSB()
  }

  public guardarImpresoraBT(dispositivo:BluettothImpresora){
    localStorage.setItem('impresoraBT',JSON.stringify(dispositivo))
    this.impresoraBT.asignarValores(JSON.parse(localStorage.getItem('impresoraBT')))    
  }

  public getImpresoraBT(){
    return this.impresoraBT
  }

  public setImpresoraBandeja(value){
    localStorage.setItem('impresoraBandeja',value)
  }

  public getImpresoraBandeja(){
   return localStorage.getItem('impresoraBandeja') === "true"
  }

  public eliminarImpresoraBT(){   
    localStorage.setItem('impresoraBT',"")
    this.impresoraBT = new BluettothImpresora()
  }

  public conectarImpresoraBT(){    
    if(this.impresoraBT.address != ""){
      this.bluetoothService.activarYConectarDispositivo(this.impresoraBT);    
    }    
  }

  async impresionPrueba(usuario){  

      let impreso = false;

      if(this.getImpresoraBandeja()){
        const modal = await this.modalController.create({
          component: ComandaPage    
        });    
        return await modal.present();
        impreso = true;
      }
      
      if(this.dispositivoUSBConectado){
        impreso = true;
      }

      if(this.impresoraBT.address != ""){
        var cmds = await this.escposService.prueba(usuario)
        this.bluetoothService.write(this.impresoraBT,cmds) 
        impreso = true;
      }    

      if(!impreso){
        this.toastService.alert("No hay impresora configurada","")
      }
    
    
  }


  async impresionComanda(pedido:Pedido){

    let impreso = false;

      if(this.getImpresoraBandeja()){
        const modal = await this.modalController.create({
          component: ComandaPage,
          componentProps:{
            pedido:pedido,
          }      
        });    
        return await modal.present();
        impreso = true;
      }

      if(this.dispositivoUSBConectado){
        impreso = true;
      }

      if(this.impresoraBT.address != ""){              
        var cmds = await this.escposService.comanda(pedido)
        console.log(cmds)
        this.bluetoothService.write(this.impresoraBT,cmds) 
        impreso = true;
      } 
      
      if(!impreso){
        this.toastService.alert("No hay impresora configurada","")
      }
    
    
  }

  
  async impresionTicket(pedido:Pedido){
    
    let impreso = false;

      if(this.getImpresoraBandeja()){ 
        const modal = await this.modalController.create({
          component: TicketDetallePage,
          componentProps:{
            pedido:this.pedido,
          }      
        });    
        return await modal.present();
        impreso = true;
      }

      if(this.dispositivoUSBConectado){
        impreso = true;
      }

      if(this.impresoraBT.address != ""){  
        let cmds = await this.escposService.ticket(pedido)        
        this.bluetoothService.write(this.impresoraBT,cmds) 
        impreso = true;
      } 

      if(!impreso){
        this.toastService.alert("No hay impresora configurada","")
      }
    
       
  }

  public async seleccionarDispositivoUSB(){
    
    let device:any = await navigator.usb.requestDevice({
      filters: [] 
    })
    console.log(device)
    localStorage.setItem('Impresora_USBproductId',device.productId)
    this.conectar(device)   
 }

 conectarDirectamenteUSB(){
  navigator.usb.getDevices().then(devices => {
    devices.forEach(element => {
      if(element.productId == Number(localStorage.getItem('Impresora_USBproductId'))){
        console.log(element)
        this.conectar(element)
      }
    });
  })
 }

 conectar(device){
  this.dispositivoUSBConectado = device
  device.open().then(() => device.selectConfiguration(1)) // Select configuration #1 for the device.
      .then(() => device.claimInterface(2)) // Request exclusive control over interface #2.
      .then(() => device.controlTransferOut({
          requestType: 'class',
          recipient: 'interface',
          request: 0x22,
          value: 0x01,
          index: 0x02})) // Ready to receive data
      .then(() => device.transferIn(5, 64)) // Waiting for 64 bytes of data from endpoint #5.
      .then(result => {
        const decoder = new TextDecoder();
        console.log('Received: ' + decoder.decode(result.data));
      })
      .catch(error => { console.error(error); }); 
 }

 desvincularUSB(){
  localStorage.removeItem('Impresora_USBproductId')
 }


}
