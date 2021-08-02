import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ItemPedido } from 'src/app/models/itemPedido';

@Component({
  selector: 'app-card-item-pedido',
  templateUrl: './card-item-pedido.component.html',
  styleUrls: ['./card-item-pedido.component.scss'],
})
export class CardItemPedidoComponent implements OnInit {

  @Input() item:ItemPedido;
  @Input() multiplicador:number; 
  @Input() showImage = true;
  @Input() showStock = true; 
  @Input() showOpcionesSeleccionadas = true;
  @Input() showEnCarrito = true;
  @Output() select = new EventEmitter<any>();
    
  constructor() { 
    this.item = new ItemPedido()
  }

  ngOnInit() { 
   
   
    }

  seleccionar(){
    this.select.emit();
  }

}
