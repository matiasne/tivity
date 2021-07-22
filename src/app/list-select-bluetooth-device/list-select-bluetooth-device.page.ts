import { Component, OnInit } from '@angular/core';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';
import { ModalController, Platform } from '@ionic/angular';
import { FormImpresoraPage } from '../form-impresora/form-impresora.page';
import { BluettothDevice } from '../models/bluetooth-device';
import { BluetoothService } from '../Services/bluetooth.service';

@Component({
  selector: 'app-list-select-bluetooth-device',
  templateUrl: './list-select-bluetooth-device.page.html',
  styleUrls: ['./list-select-bluetooth-device.page.scss'],
})
export class ListSelectBluetoothDevicePage implements OnInit {

  public impresoras = []
  constructor(
    private bluetoothSerial:BluetoothSerial,
    private modalCtrl:ModalController,
    private platform:Platform
  ) {

    if (this.platform.is('cordova')) {
      this.bluetoothSerial.list().then((data) => {      
        console.log("dispositivos emparejados")  
        console.log(data);
        data.forEach(element => {
          if(element.class== "1664"){
            this.impresoras.push(element);
          }
        });      
      },
      (error) => {
        console.log("could not find paired devices because: " + error);
        alert(error);
      });
    }
   

}

  ngOnInit() {

  }

  async seleccionar(dispositivo){   

    this.modalCtrl.dismiss(dispositivo)

  }

  cerrar(){
    this.modalCtrl.dismiss()
  }

}
