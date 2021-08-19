import { Component, OnInit } from '@angular/core';
import { RolesService } from '../Services/roles.service';
import { UsuariosService } from '../Services/usuarios.service';
import { Subscription } from 'rxjs';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormInvitacionPage } from '../form-invitacion/form-invitacion.page';
import { User } from 'firebase';
import { AuthenticationService } from '../Services/authentication.service';
import { LoadingService } from '../Services/loading.service';
import { FormPersonalPermisosPage } from '../form-personal-permisos/form-personal-permisos.page';

@Component({
  selector: 'app-list-personal',
  templateUrl: './list-personal.page.html',
  styleUrls: ['./list-personal.page.scss'],
})
export class ListPersonalPage implements OnInit {

  public items:any = [];
  public itemsAll:any = [];
  public rolSub: Subscription;
  public palabraFiltro = "";
  public user:User;

  public buscando = true;

  constructor(
    public authService:AuthenticationService,
    public rolesService:RolesService,
    public usuariosService:UsuariosService,
    public modalCtrl: ModalController,
    public router:Router,
    public alertController:AlertController,
    public loadingService:LoadingService
  ) { }

  ngOnInit() {
    this.items = [];
    this.user = this.authService.getActualUser();

    let comercio_seleccionadoId = localStorage.getItem('comercio_seleccionadoId'); 

    this.loadingService.presentLoadingText("Cargando Personal")
    this.rolesService.getAllRolesbyComercio(comercio_seleccionadoId).subscribe(data =>{       
     this.loadingService.dismissLoading()
      this.itemsAll = data;
      console.log(this.itemsAll)
      this.buscar();
      this.buscando = false;
    });


  }

  ionViewDidLeave(){
 
  }

  buscar(){
    if(this.palabraFiltro != ""){
      this.items = [];
      this.itemsAll.forEach(item => {
        if(item.userEmail.toLowerCase().includes(this.palabraFiltro.toLowerCase())){
          this.items.push(item);
          return;
        }

        if(item.rol.toLowerCase().includes(this.palabraFiltro.toLowerCase())){
          this.items.push(item);
          return;
        }         

      });     
    }
    else{
      this.items = this.itemsAll;
    }
  }

  

  

  async invitar(){

      const modal = await this.modalCtrl.create({
        component: FormInvitacionPage,
        componentProps: {
          rol:"owner"      
        }
      });
      modal.onDidDismiss()
      .then((retorno) => {
        if(retorno.data){     
          this.ngOnInit();  
        }        
      });
      return await modal.present();
  } 

  async desvincular(item){
    let texto = "";
    if(this.user.email == item.email){
      texto = "Estas seguro que deseas desvincularte del comercio?"
    }
    else{
      texto = 'Está seguro que desea desvincular el empleado'
    }

    const alert = await this.alertController.create({
      header: texto,
      message: 'Se perderán todos tus registros',
      buttons: [
        {
          text: 'No',
          handler: (blah) => {
            
          }
        }, {
          text: 'Si',
          handler: () => {  
            console.log("!!!!!")
            let comercio_seleccionadoId = localStorage.getItem('comercio_seleccionadoId');
            this.rolesService.delete(item.id).then(data=>{
              this.ngOnInit();
            });
          }
        }
      ]
    });
    await alert.present();    
  }

  async editarPermisos(item){
    const modal = await this.modalCtrl.create({
      component: FormPersonalPermisosPage,
      componentProps: {
        rol:item      
      }
    });
    modal.onDidDismiss()
    .then((retorno) => {
         
    });
    return await modal.present();
  }
 

}