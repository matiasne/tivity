import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastService } from '../Services/toast.service';
import { FormDivisionPage } from '../form-division/form-division.page';
import { ComerciosService } from '../Services/comercios.service';
import { Comercio } from '../models/comercio';
import { AlertController, ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-form-subdivision',
  templateUrl: './form-subdivision.page.html',
  styleUrls: ['./form-subdivision.page.scss'],
})
export class FormSubdivisionPage implements OnInit {

  datosForm: FormGroup;
  submitted = false;
  public comercio: Comercio;
  public updating = false;
  public titulo="";
  public comercioId = "";

  constructor(
    public modalCtrl: ModalController,
    public alertController: AlertController,
    private toastServices:ToastService,
    private comercioService:ComerciosService,
    private navCtrl: NavController,
  ) { 

    
    this.comercio = new Comercio();
    this.comercio.asignarValores(this.comercioService.getSelectedCommerceValue());

  }

  ngOnInit() {
  }


  guardar(){

    this.submitted = true;
    

    if (this.comercio.subdivisiones.nombre == "") {
      this.toastServices.alert('Por favor completar todos los campos marcados con * antes de continuar',"");
      return;
    }  

    this.comercioService.update(this.comercio).then(data=>{
      console.log("Comercio Actualizado");
    })
    
    this.navCtrl.back();
  }

  cancelar(){
    this.navCtrl.back();
  } 

  async addDivision(){
    const modal = await this.modalCtrl.create({
      component: FormDivisionPage,
    });  

    modal.onDidDismiss().then((retorno) => {
      if(retorno.data)        
        this.comercio.subdivisiones.items.push(retorno.data)  
        this.comercioService.update(this.comercio).then(data=>{
          console.log("Actualizado")
          this.comercio.asignarValores(this.comercioService.getSelectedCommerceValue());
        })      
    }); 

    return await modal.present();
  }

  deleteDivision(index){
    this.comercio.subdivisiones.items.splice(index, 1)   
  }

}
