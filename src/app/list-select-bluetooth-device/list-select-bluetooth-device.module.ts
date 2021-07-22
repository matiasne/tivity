import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListSelectBluetoothDevicePageRoutingModule } from './list-select-bluetooth-device-routing.module';

import { ListSelectBluetoothDevicePage } from './list-select-bluetooth-device.page';
import { ComponentsModule } from '../Components/components.module';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    IonicModule,
    ListSelectBluetoothDevicePageRoutingModule
  ],
  declarations: [ListSelectBluetoothDevicePage]
})
export class ListSelectBluetoothDevicePageModule {}
