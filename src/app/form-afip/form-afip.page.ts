import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-form-afip',
  templateUrl: './form-afip.page.html',
  styleUrls: ['./form-afip.page.scss'],
})
export class FormAfipPage implements OnInit {

  public password="";
  constructor(
    private modalCtrl:ModalController
  ) { }

  ngOnInit() {
    
  }

  cancelar(){
    this.modalCtrl.dismiss();
  }

  guardar(){
    
  }
  

}
