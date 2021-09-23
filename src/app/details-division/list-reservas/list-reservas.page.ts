import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ListReservasManagerComponent } from 'src/app/Components/list-reservas-manager/list-reservas-manager.component';
import { FormReservaPage } from 'src/app/form-reserva/form-reserva.page';
import { Reserva } from 'src/app/models/reserva';
import { Division } from 'src/app/models/subdivision';
import { NavegacionParametrosService } from 'src/app/Services/global/navegacion-parametros.service';
import { ReservasService } from 'src/app/Services/reservas.service';

@Component({
  selector: 'app-list-reservas',
  templateUrl: './list-reservas.page.html',
  styleUrls: ['./list-reservas.page.scss'],
})
export class ListReservasPage implements OnInit {

  public vistaLista = false;

  @ViewChild(ListReservasManagerComponent) listReservasManagerChild:ListReservasManagerComponent;
  public division:Division

  constructor(
    public modalController:ModalController,
    private navParametrosService:NavegacionParametrosService,
    private reservasService:ReservasService,
  ) { 
    this.division = new Division();
    if(this.navParametrosService.param instanceof Division){
      this.division.asignarValores(this.navParametrosService.param)
    }
  }

  ngOnInit() {
   

    

  }

  ionViewDidLeave(){
    this.listReservasManagerChild.borrarDatosComponente()
  }

  verLista(){
    this.vistaLista = !this.vistaLista;
    console.log(this.vistaLista)
  }

  
  async nuevaReserva(fechaInicio = null){
    

    let res = new Reserva();
    res.desde = fechaInicio;

    res.divisionNombre = this.division.nombre
    
   const modal = await this.modalController.create({
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

}
