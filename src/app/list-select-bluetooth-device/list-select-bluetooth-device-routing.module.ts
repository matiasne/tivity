import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListSelectBluetoothDevicePage } from './list-select-bluetooth-device.page';

const routes: Routes = [
  {
    path: '',
    component: ListSelectBluetoothDevicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListSelectBluetoothDevicePageRoutingModule {}
