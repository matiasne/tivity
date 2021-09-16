import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListEstadosReservaPageRoutingModule } from './list-estados-reserva-routing.module';

import { ListEstadosReservaPage } from './list-estados-reserva.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListEstadosReservaPageRoutingModule
  ],
  declarations: [ListEstadosReservaPage]
})
export class ListEstadosReservaPageModule {}
