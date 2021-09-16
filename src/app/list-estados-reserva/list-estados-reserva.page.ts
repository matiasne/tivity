import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormEstadoReservaPage } from '../form-estado-reserva/form-estado-reserva.page';
import { EstadosReservasService } from '../Services/estados-reservas.service';

@Component({
  selector: 'app-list-estados-reserva',
  templateUrl: './list-estados-reserva.page.html',
  styleUrls: ['./list-estados-reserva.page.scss'],
})
export class ListEstadosReservaPage implements OnInit {

  public estados = []
  constructor(
    private modalCtrl:ModalController,
    private estadosReservaService:EstadosReservasService
  ) { }

  ngOnInit() {
    this.estadosReservaService.list().subscribe(res =>{
      this.estados = res;
    })
  }

  async crearEstado(){
    const modal = await this.modalCtrl.create({
      id:'form-estado-reserva',
      component: FormEstadoReservaPage,     
      cssClass:'modal-custom-wrapper'  
    });
    return await modal.present(); 
  }


  eliminar(estado){
    this.estadosReservaService.delete(estado.id).then(data=>{
      console.log("Borrado correctamente")
    })
  }

  seleccionar(estado){
    this.modalCtrl.dismiss(estado,undefined,'modal-select-estado')
  }

  cerrar(){
    this.modalCtrl.dismiss(undefined,undefined,'modal-select-estado')
  }

}
