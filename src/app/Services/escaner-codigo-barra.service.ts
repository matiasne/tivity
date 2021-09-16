import { Injectable } from '@angular/core';
import { Serial } from '@ionic-native/serial/ngx';
import { Platform } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { ToastService } from './toast.service';

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
export class EscanerCodigoBarraService {

  public escaneado = new BehaviorSubject <any>("")
  public dispConectado:any
  constructor(
    private toastService:ToastService
    ) {

    

   }

   public async seleccionarDispositivoUSB(){
    
      let device:any = await navigator.usb.requestDevice({
        filters: [] 
      })
      console.log(device)
      localStorage.setItem('QR_USBproductId',device.productId)
      this.conectar(device)   
   }

   conectarDirectamenteUSB(){
    navigator.usb.getDevices().then(devices => {
      devices.forEach(element => {
        if(element.productId == Number(localStorage.getItem('QR_USBproductId'))){
          console.log(element)
          this.conectar(element)
        }
      });
    })
   }

   conectar(device){
    this.dispConectado = device;
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
          this.toastService.mensajeVerde("Escaneado: "+result.data,"")
          this.escaneado.next(result.data);
        })
        .catch(error => { console.error(error); });
      
    
   }

   desvincularUSB(){
    localStorage.removeItem('QR_USBproductId')
   }

   observeEscanerUSB(){
    return this.escaneado.asObservable();
  }

 

   
}
