import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Subscripcion } from 'src/app/models/subscripcion';
import { User } from 'src/app/models/user';
import { SubscripcionesService } from 'src/app/Services/subscripciones.service';

@Component({
  selector: 'app-card-subscription',
  templateUrl: './card-subscription.component.html',
  styleUrls: ['./card-subscription.component.scss'],
})
export class CardSubscriptionComponent implements OnInit {

  @Input() subscripcion:any; 
  @Output() select = new EventEmitter<any>();
  
  constructor(
    private router:Router,
    private alertController:AlertController,
    private subscripcionesService:SubscripcionesService
  ) {

    this.subscripcion = new Subscripcion(); 
            
    
      

  }

  async ngOnInit() {
   

  }

  seleccionar(){
    this.select.emit();  
  }

  eliminar(){
    this.subscripcionesService.delete(this.subscripcion.id)
  }


}
