import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RolesService } from '../Services/roles.service';

@Component({
  selector: 'app-select-personal',
  templateUrl: './select-personal.page.html',
  styleUrls: ['./select-personal.page.scss'],
})
export class SelectPersonalPage implements OnInit {

  public items = [];
  public itemsAll =[];
  public palabraFiltro = "";

  constructor(
    public modalCtrl: ModalController,
    public rolesService:RolesService
  ) { }

  ngOnInit() {

    let comercio_seleccionadoId = localStorage.getItem('comercio_seleccionadoId'); 
   var rolSub = this.rolesService.getAllRolesbyComercio(comercio_seleccionadoId).subscribe(data =>{       
      this.itemsAll = data
      console.log(data)
      this.buscar()
      rolSub.unsubscribe();
    });

  }

  buscar(){
    if(this.palabraFiltro != ""){
      this.items = [];
      this.itemsAll.forEach(item => {
        if(item.nombre.toLowerCase().includes(this.palabraFiltro.toLowerCase())){
          this.items.push(item);
          return;
        }

        if(item.email.toLowerCase().includes(this.palabraFiltro.toLowerCase())){
          this.items.push(item);
          return;
        }
      });     
    }
    else{
      this.items = this.itemsAll;
    }
  }


  seleccionar(item){
    this.modalCtrl.dismiss({
      'item': item
    });
  }

  cerrar(){
    this.modalCtrl.dismiss();
  }

}
