import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Comercio } from '../models/comercio';
import { ComerciosService } from '../Services/comercios.service';

@Component({
  selector: 'app-select-division',
  templateUrl: './select-division.page.html',
  styleUrls: ['./select-division.page.scss'],
})
export class SelectDivisionPage implements OnInit {

  public comercio: Comercio;
  public viewItems = []
  constructor(
    private comercioService:ComerciosService,
    public modalCtrl: ModalController,
  ) {

    this.comercio = new Comercio();
    this.comercio.asignarValores(this.comercioService.getSelectedCommerceValue());
    this.viewItems = this.comercio.subdivisiones.items
   }

  ngOnInit() {
  }

  mostrar(arrayElementos){
    this.viewItems = arrayElementos;
  }

  seleccionar(i){
    this.modalCtrl.dismiss(this.comercio.subdivisiones.items[i])
  }

}
