import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Reserva } from 'src/app/models/reserva';
import * as firebase from 'firebase';

@Component({
  selector: 'app-card-reserva',
  templateUrl: './card-reserva.component.html',
  styleUrls: ['./card-reserva.component.scss'],
})
export class CardReservaComponent implements OnInit {

  @Input() item:Reserva;
  @Output() select = new EventEmitter<any>();
  
  constructor() {
    this.item = new Reserva(); 
   

   }

  ngOnInit() {
    
  }

  seleccionar(){
    this.select.emit();  
  }

}
