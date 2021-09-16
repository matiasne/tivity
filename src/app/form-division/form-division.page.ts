import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-form-division',
  templateUrl: './form-division.page.html',
  styleUrls: ['./form-division.page.scss'],
})
export class FormDivisionPage implements OnInit {

  public division = {
    nombre:""
  }
  constructor(private modalCtrl:ModalController) { }

  ngOnInit() {
  }

  guardar(){

    this.modalCtrl.dismiss(this.division);
  }

  cancelar(){
    this.modalCtrl.dismiss();
  }


}
