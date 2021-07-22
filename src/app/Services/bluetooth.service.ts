import { Injectable } from '@angular/core';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';
import { AlertController, Platform } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { LoadingService } from './loading.service';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root'
})
export class BluetoothService { 
  
  private reintento = false;
  constructor(
    private bluetoothSerial:BluetoothSerial,
    private toastServices:ToastService,
    private platform:Platform,
    private loadingService:LoadingService,
    private alertController:AlertController
  ) { }

  enable(){
    if (this.platform.is('cordova')) {
      this.bluetoothSerial.enable().then(data=>{
        console.log(data)
      },error=>{
        this.toastServices.alert("Bluetooth no activado","")
      })
    }
    else{
     // navigator.bluetooth.requestDevice
    }   
  }

  search(){
    if (this.platform.is('cordova')) {

      this.bluetoothSerial.isEnabled().then(data=>{
        this.bluetoothSerial.list().then((data) => {        
          console.log(data);
          console.log(JSON.stringify(data));
          return JSON.stringify(data)
        },
        (error) => {
          console.log("could not find paired devices because: " + error);
          alert(error);
        });
      },err=>{
        console.log("BLuetooth inhabilitado")
      })
      
    }
    else{

    }    
  }

  discover(){
    if (this.platform.is('cordova')) {
      this.bluetoothSerial.discoverUnpaired().then ((device) => {
        this.bluetoothSerial.setDeviceDiscoveredListener().subscribe( (device) => {
          JSON.stringify( device );        
          console.log(device.id);
          return JSON.stringify(device)
        });
      },
        (error) => {
          alert("could not find unparied devices " + error);
      });
    }    
  }

  activarYConectarDispositivo(dispositivo,cmds=null){
    
      if (this.platform.is('cordova')) {      
        this.bluetoothSerial.isEnabled().then(data=>{
          
          let obs = this.bluetoothSerial.connect(dispositivo.address).subscribe(data=>{
            console.log(data) 
            dispositivo.conexionActual = true;
            dispositivo.estado = 2              
          },err=>{
            obs.unsubscribe();
            dispositivo.conexionActual = false;
            dispositivo.estado = 1
          })        
          console.log(data)
  
        },err=>{
          this.bluetoothSerial.enable().then(data=>{
            console.log(data)
  
            let obs = this.bluetoothSerial.connect(dispositivo.address).subscribe(data=>{
              console.log(data) 
              dispositivo.conexionActual = true;
              dispositivo.estado = 2 

              if(cmds){
                this.bluetoothSerial.write(cmds).then(data=>{
                  this.bluetoothSerial.disconnect().then(data=>{
                    console.log("desconectado")
                  })  
                })
              }
              else{
                this.toastServices.mensaje(dispositivo.alias,"Dispositivo conectado")   
              }

            },err=>{
              obs.unsubscribe()
              dispositivo.conexionActual = false;
              dispositivo.estado = 1
            })  
  
          },err=>{
            console.log(err)
          })        
        });      
      }
    
    
  }

  write(dispositivo,cmds){
    this.bluetoothSerial.isEnabled().then(data=>{
      this.bluetoothSerial.isConnected().then(data=>{
        this.bluetoothSerial.write(cmds).then(data=>{
          this.bluetoothSerial.disconnect().then(data=>{
            console.log(cmds) 
          },err=>{
            console.log("Error al desconectar")
          })
          console.log(cmds) 
        },err=>{
          console.log("Error al escribir")
        })
      },err=>{
        this.bluetoothSerial.connect(dispositivo.address).subscribe(data=>{
          this.bluetoothSerial.write(cmds).then(data=>{
            console.log(cmds)
            this.bluetoothSerial.disconnect().then(data=>{
              console.log(cmds) 
            },err=>{
              console.log("Error al desconectar")
            }) 
          },err=>{
            console.log("Error al escribir")
          })
        },err=>{
        //  this.alertaDesconectado(dispositivo)
        })
      })  
    })
  }


  async alertaDesconectado(dispositivo){
    const alert = await this.alertController.create({
      header: dispositivo.alias+' desconectado',
      message: 'Verifique que el dispositivo esté encendido',
      buttons: [
        { 
          text: 'OK',
          handler: (blah) => {
            
          }
        }
      ]
    });
    await alert.present();  
  }

  async bluetoothDesconectado(dispositivo){
    const alert = await this.alertController.create({
      header: dispositivo.alias+' desconectado',
      message: 'Active la conexión bluetooth en su dispositivo',
      buttons: [
        { 
          text: 'OK',
          handler: (blah) => {
            this.activarYConectarDispositivo(dispositivo)
          }
        }
      ]
    });
    await alert.present();  
  }

    
    


}
