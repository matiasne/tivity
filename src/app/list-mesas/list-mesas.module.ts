import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListMesasPageRoutingModule } from './list-mesas-routing.module';

import { ListMesasPage } from './list-mesas.page';
import { FormMesaPage } from '../form-mesa/form-mesa.page';
import { DirectivesModule } from '../Directives/directives.module';

@NgModule({
  imports: [
    CommonModule,
    DirectivesModule,
    FormsModule,
    IonicModule,
    ListMesasPageRoutingModule
  ],
  declarations: [ListMesasPage]
})
export class ListMesasPageModule {}
