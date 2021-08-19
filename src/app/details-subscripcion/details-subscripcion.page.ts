import { Component, OnInit } from '@angular/core';
import { SubscripcionesService } from '../Services/subscripciones.service';
import { ActivatedRoute } from '@angular/router';
import { Subscripcion } from '../models/subscripcion';
import { Cliente } from '../models/cliente';
import { PagaresService } from '../Services/pagares.service';
import { NavegacionParametrosService } from '../Services/global/navegacion-parametros.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-details-subscripcion',
  templateUrl: './details-subscripcion.page.html',
  styleUrls: ['./details-subscripcion.page.scss'],
})
export class DetailsSubscripcionPage implements OnInit {

  public subscripcion:Subscripcion; 
  public cliente:Cliente;
  public pagares = [];
  constructor(
    private route: ActivatedRoute,
    private subscripcionesService:SubscripcionesService,
    private pagaresService:PagaresService,
    private navParamService:NavegacionParametrosService,
    private modalCtrl:ModalController
  ) { 
    this.subscripcion = new Subscripcion();
    this.cliente = new Cliente();

    if(this.navParamService.param instanceof Subscripcion){  
      this.subscripcion.asignarValores(this.navParamService.param);
      console.log(this.subscripcion)
    }  

    if(this.route.snapshot.params.id){
      this.subscripcionesService.get(this.route.snapshot.params.id).subscribe(data=>{
        this.subscripcion = data;
      })
    }
    

  }

  ngOnInit() {


  }

  cobrar(pagare){ 
 //Aca abre como pedido! y cobras
  }

  cerrar(){
    this.modalCtrl.dismiss();
  }

}
