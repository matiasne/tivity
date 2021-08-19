import { Injectable } from '@angular/core';
import { Serial } from '@ionic-native/serial/ngx';
import { Platform } from '@ionic/angular';

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

  constructor(
    private serial: Serial,
    private platform: Platform
    ) {

    

   }

   public async init(){
    
      let device:any = await navigator.usb.requestDevice({
        filters: [] 
      })

      console.log(device)

      navigator.usb.getDevices().then(devices => {
        console.log(devices)
        if(devices.length == 0) {
          navigator.usb.requestDevice({ filters: [] })
          .then(selectedDevice => {
              device = selectedDevice;
              return device.open(); // Begin a session.
            })
          .then(() => device.selectConfiguration(1)) // Select configuration #1 for the device.
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
      })

     
    
    
   }

   onGetDevices(ports) {
    for (var i=0; i<ports.length; i++) {
      console.log(ports[i].path);
    }
  }

   public connectionHandle(){

   }

   public transferInfo(){

   }

   public onTransferCallback(event) {
    if (event && event.resultCode === 0 && event.data) {
      console.log("got " + event.data.byteLength + " bytes");
      console.log(event.data)
    }
 };
 

   
}
