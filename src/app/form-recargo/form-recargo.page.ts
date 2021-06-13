import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EnumTipoRecargo, Recargo } from '../models/recargo';
import { CarritoService } from '../Services/global/carrito.service';
import { ToastService } from '../Services/toast.service';

@Component({
  selector: 'app-form-recargo',
  templateUrl: './form-recargo.page.html',
  styleUrls: ['./form-recargo.page.scss'],
})
export class FormRecargoPage implements OnInit {

  
  public recargo:Recargo
  public enumTipo = EnumTipoRecargo

  constructor(
    private modalCtrl: ModalController,
    private carritoService:CarritoService,
    private toastService:ToastService
    ) { 
      this.recargo = new Recargo();
    }

  ngOnInit() {
  }

  cancelar(){
    this.modalCtrl.dismiss();
  }

  agregar(){

    if(this.recargo.monto == ""){
      this.toastService.alert("Faltan datos","Por favor agregue un monto");
      return;
    }

    if(this.recargo.motivo == ""){
      this.toastService.alert("Faltan datos","Por favor agregue un motivo");
      return;
    }

    if(this.recargo.monto){
      this.modalCtrl.dismiss(this.recargo)
    }
    else{
      this.modalCtrl.dismiss();
    }
  }

}
