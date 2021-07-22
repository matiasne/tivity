import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { BluettothImpresora } from '../models/bluetooth-impresora';

@Component({
  selector: 'app-form-impresora',
  templateUrl: './form-impresora.page.html',
  styleUrls: ['./form-impresora.page.scss'],
})
export class FormImpresoraPage implements OnInit {

  public impresora:BluettothImpresora
  constructor(
    private navParams:NavParams,
    private modalCtrl:ModalController
  ) { 
    this.impresora = new BluettothImpresora();
    this.impresora.asignarValores(this.navParams.get('dispositivo'))
  }

  ngOnInit() {
  }

  cerrar(){
    this.modalCtrl.dismiss();
  }
  guardar(){
    this.modalCtrl.dismiss(this.impresora)
  }

}
