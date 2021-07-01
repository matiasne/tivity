import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ComerciosService } from '../Services/comercios.service';

@Component({
  selector: 'app-form-configuracion-afip',
  templateUrl: './form-configuracion-afip.page.html',
  styleUrls: ['./form-configuracion-afip.page.scss'],
})
export class FormConfiguracionAfipPage implements OnInit {

  public password="";
  constructor(
    private modalCtrl:ModalController,
    private comerciosService:ComerciosService
  ) { }

  ngOnInit() {
  }

  cancelar(){
    this.modalCtrl.dismiss();
  }

  guardar(){
    localStorage.setItem('AfipPassword'+this.comerciosService.getSelectedCommerceValue().id,this.password);
    this.modalCtrl.dismiss();
  }

}
