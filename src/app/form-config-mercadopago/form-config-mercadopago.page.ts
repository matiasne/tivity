import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Comercio } from '../models/comercio';
import { ComerciosService } from '../Services/comercios.service';
import { MercadopagoService } from '../Services/mercadopago.service';

@Component({
  selector: 'app-form-config-mercadopago',
  templateUrl: './form-config-mercadopago.page.html',
  styleUrls: ['./form-config-mercadopago.page.scss'],
})
export class FormConfigMercadopagoPage implements OnInit {

  private comercio:Comercio
  public publicKey = "";
  public privateKey="";
  public link="";
  constructor(
    private modalCtrl:ModalController,
    private mercadoPagoService:MercadopagoService,
    private comercioService:ComerciosService
  ) { }

  ngOnInit() {
    this.comercio = new Comercio();
    this.comercio.asignarValores(this.comercioService.getSelectedCommerceValue())
    this.link = "https://auth.mercadopago.com.ar/authorization?client_id=6782463642048642&response_type=code&platform_id=mp&state=id="+this.comercio.id+"&redirect_uri=https://us-central1-tivity-socialup.cloudfunctions.net/api/mercadopago/marketplaceAuth"
  }

  ionViewDidEnter(){
    this.comercio.asignarValores(this.comercioService.getSelectedCommerceValue())
  }

  guardar(){
    this.mercadoPagoService.guardarKeys(this.privateKey,this.publicKey).then(data=>{
      console.log(data)
    })
    this.modalCtrl.dismiss()
  }

  cerrar(){
    this.modalCtrl.dismiss()
  }

  desvincular(){
    this.comercio.mercadoPago={
      publicKey:"",
      nickname: "",
      permalink:"",
    }
  }

}
