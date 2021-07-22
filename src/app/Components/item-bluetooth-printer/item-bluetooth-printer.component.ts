import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item-bluetooth-printer',
  templateUrl: './item-bluetooth-printer.component.html',
  styleUrls: ['./item-bluetooth-printer.component.scss'],
})
export class ItemBluetoothPrinterComponent implements OnInit {

  
  @Input() item:any
  @Output() seleccionar = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {}

  click(){
    this.seleccionar.emit();
  }

}
