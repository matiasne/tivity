import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardComercioPageRoutingModule } from './dashboard-comercio-routing.module';

import { DashboardComercioPage } from './dashboard-comercio.page';
import { DirectivesModule } from '../Directives/directives.module';

@NgModule({
  imports: [
    CommonModule,
    DirectivesModule,
    FormsModule,
    IonicModule,
    DashboardComercioPageRoutingModule
  ],
  declarations: [DashboardComercioPage]
})
export class DashboardComercioPageModule {}
