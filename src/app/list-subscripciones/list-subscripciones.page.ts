import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ModalController, LoadingController, AlertController } from '@ionic/angular';
import { SubscripcionesService } from '../Services/subscripciones.service';
import { Subscripcion } from '../models/subscripcion';
import { NavegacionParametrosService } from '../Services/global/navegacion-parametros.service';
import { FormSubscripcionPage } from '../form-subscripcion/form-subscripcion.page';
import { DetailsSubscripcionPage } from '../details-subscripcion/details-subscripcion.page';

@Component({
  selector: 'app-list-subscripciones',
  templateUrl: './list-subscripciones.page.html',
  styleUrls: ['./list-subscripciones.page.scss'],
})
export class ListSubscripcionesPage implements OnInit {

  public itemsAll:any[] = [];

  public itemsView:Subscripcion[] =[];

  
  constructor(
    public loadingController: LoadingController,
    private route: ActivatedRoute,
    private subscripcionesService:SubscripcionesService,
    private navParametrosService:NavegacionParametrosService,
    private modalCtrl:ModalController,
  ) { }

  ngOnInit() {   
    this.subscripcionesService.list().subscribe((data:any)=>{
      this.itemsAll = data
      this.itemsView = data
      console.log(this.itemsView)
    })
  }

  mostrar(arrayElementos){
    console.log(arrayElementos)
    this.itemsView = arrayElementos
  }

  ionViewDidEnter(){
    
  }

  ionViewDidLeave(){
  }

  async editarSubscripcion(subscripcion:Subscripcion){
    let subs = new Subscripcion()
    subs.asignarValores(subscripcion)

    this.navParametrosService.param = subs
    const modal = await this.modalCtrl.create({
      component: FormSubscripcionPage,  
      cssClass:'modal-custom-wrapper',
    });         

    modal.onDidDismiss()
    
    .then((retorno) => { 

      if(retorno.data){   
      this.subscripcionesService.update(retorno.data).then(data=>{
        console.log("Subscripcion guardada")
      })
      }else{

      }     


    });

    await modal.present();
  }

  async nuevaSubscripcion(fechaInicio = null){
    this.navParametrosService.param = null
   const modal = await this.modalCtrl.create({
      component: FormSubscripcionPage,
      componentProps:{
        fechaInicio:fechaInicio
      },     
      cssClass:'modal-custom-wrapper',

    });         

    modal.onDidDismiss()
    
    .then((retorno) => { 

      if(retorno.data){   
      this.subscripcionesService.add(retorno.data).then(data=>{
        console.log("Subscripcion guardada")
      })
      }else{

      }     


    });

    await modal.present();
  }
  

  
  async ver(item){
    let subs = new Subscripcion()
    subs.asignarValores(item)
    this.navParametrosService.param = subs;
    const modal = await this.modalCtrl.create({
        component: DetailsSubscripcionPage,
        cssClass:'modal-custom-wrapper',
    });         

    modal.onDidDismiss()
    
    .then((retorno) => { 

    });

    await modal.present();
  }

  

}
