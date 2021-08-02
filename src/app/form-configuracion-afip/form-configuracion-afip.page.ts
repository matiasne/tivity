import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Comercio } from '../models/comercio';
import { AfipServiceService } from '../Services/afip/afip-service.service';
import { ComerciosService } from '../Services/comercios.service';
import { ToastService } from '../Services/toast.service';

@Component({
  selector: 'app-form-configuracion-afip',
  templateUrl: './form-configuracion-afip.page.html',
  styleUrls: ['./form-configuracion-afip.page.scss'],
})
export class FormConfiguracionAfipPage implements OnInit {

  public comercio:Comercio
  public password="";
  
  constructor(
    private modalCtrl:ModalController,
    private afipService:AfipServiceService,
    private toastService:ToastService,
    private comercioService:ComerciosService
  ) { 
    this.comercio = new Comercio();
    this.comercio.asignarValores(this.comercioService.getSelectedCommerceValue())
  }

  ngOnInit() {
  }

  cerrar(){
    this.modalCtrl.dismiss();
  }

  async validar(){
    try{      
      this.modalCtrl.dismiss();
      this.toastService.mensaje("Conectado correctamente","")
    }catch(err){
      this.toastService.alert("Verificar Clave","No se pudo conectar")
    }
    
  }

  update(){

    
    this.comercioService.update(this.comercio);
  }

  desvincular(){
    this.comercio.afip = {
      token:"",
      puntoVenta:""
    }
    this.comercioService.update(this.comercio);
  }

}
