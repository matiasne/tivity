import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardReservasPageRoutingModule } from './dashboard-reservas-routing.module';

import { DashboardReservasPage } from './dashboard-reservas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardReservasPageRoutingModule
  ],
  declarations: [DashboardReservasPage]
})
export class DashboardReservasPageModule {}
