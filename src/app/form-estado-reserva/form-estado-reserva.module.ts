import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormEstadoReservaPageRoutingModule } from './form-estado-reserva-routing.module';

import { FormEstadoReservaPage } from './form-estado-reserva.page';
import { ColorPickerModule } from 'ngx-color-picker';

@NgModule({
  imports: [
    CommonModule,
    ColorPickerModule,
    FormsModule,
    IonicModule,
    FormEstadoReservaPageRoutingModule
  ],
  declarations: [FormEstadoReservaPage]
})
export class FormEstadoReservaPageModule {}
