import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListClientesPageRoutingModule } from './list-clientes-routing.module';

import { ListClientesPage } from './list-clientes.page';
import { DirectivesModule } from '../Directives/directives.module';

@NgModule({
  imports: [
    CommonModule,
    DirectivesModule,
    FormsModule,
    IonicModule,
    ListClientesPageRoutingModule
  ],
  declarations: [ListClientesPage]
})
export class ListClientesPageModule {}
