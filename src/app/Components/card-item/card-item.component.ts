import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/models/item';


@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss'],
})
export class CardItemComponent implements OnInit {

  @Input() item:Item;
  @Input() multiplicador:number; 
  @Input() showImage = true;
  @Input() showStock = true; 
  @Input() showOpcionesSeleccionadas = true;
  @Input() showEnCarrito = true;
  @Output() select = new EventEmitter<any>();
    
  constructor() { 
    this.item = new Item()
  }

  ngOnInit() { 
   
   
    }

  seleccionar(){
    this.select.emit();
  }
}
