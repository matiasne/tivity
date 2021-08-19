import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Permisos, Rol } from '../models/rol';
import { RolesService } from '../Services/roles.service';
@Component({
  selector: 'app-form-personal-permisos',
  templateUrl: './form-personal-permisos.page.html',
  styleUrls: ['./form-personal-permisos.page.scss'],
})
export class FormPersonalPermisosPage implements OnInit {
  public permisos = Permisos
  public rol:any
  constructor(
    private navParams:NavParams,
    private modalCtrl:ModalController,
    private rolesService:RolesService
  ) {

  
   }

  ngOnInit() {
    this.rol = new Rol();
    this.rol.asignarValores(this.navParams.get('rol'));
    console.log(this.rol)
  }

  guardar(){
    this.rolesService.update(this.rol).then(data=>{
      console.log("Guardado")
    })
  }

  cerrar(){
    this.modalCtrl.dismiss()
  }

}
