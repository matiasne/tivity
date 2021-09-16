import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormReservaPage } from '../form-reserva/form-reserva.page';
import { Reserva } from '../models/reserva';
import { ReservasService } from '../Services/reservas.service';


@Component({
  selector: 'app-list-reservas',
  templateUrl: './list-reservas.page.html',
  styleUrls: ['./list-reservas.page.scss'],
})
export class ListReservasPage implements OnInit {

  public vistaLista = false;

  constructor(
    private modalCtrl:ModalController,
    private reservasService:ReservasService,
  ) { }

  ngOnInit(){

  }

  async nuevaReserva(fechaInicio = null){

    let res = new Reserva();
    res.desde = fechaInicio;

   const modal = await this.modalCtrl.create({
      component: FormReservaPage,
      componentProps:{
        reserva: res
     },     
      cssClass:'modal-custom-wrapper',

    });         

    modal.onDidDismiss()
    
    .then((retorno) => { 

      if(retorno.data){   
      this.reservasService.add(retorno.data).then(data=>{
        console.log("Reserva guardada")
      })
      }else{

      }     
    });

    await modal.present();
  }

  verLista(){
    this.vistaLista = !this.vistaLista;
    console.log(this.vistaLista)
  }


}
