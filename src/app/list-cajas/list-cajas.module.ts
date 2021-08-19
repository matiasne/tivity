import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListCajasPageRoutingModule } from './list-cajas-routing.module';

import { ListCajasPage } from './list-cajas.page';
import { DirectivesModule } from '../Directives/directives.module';

@NgModule({
  imports: [
    CommonModule,
    DirectivesModule,
    FormsModule,
    IonicModule,
    ListCajasPageRoutingModule
  ],
  declarations: [ListCajasPage]
})
export class ListCajasPageModule {}
