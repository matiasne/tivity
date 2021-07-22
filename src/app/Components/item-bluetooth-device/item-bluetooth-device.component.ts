import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item-bluetooth-device',
  templateUrl: './item-bluetooth-device.component.html',
  styleUrls: ['./item-bluetooth-device.component.scss'],
})
export class ItemBluetoothDeviceComponent implements OnInit {

  @Input() item:any
  @Output() seleccionar = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {}

  click(){
    this.seleccionar.emit();
  }

}
