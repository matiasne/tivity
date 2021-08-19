import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormReservaPageRoutingModule } from './form-reserva-routing.module';

import { FormReservaPage } from './form-reserva.page';
import { ComponentsModule } from '../Components/components.module';
import { DirectivesModule } from '../Directives/directives.module';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    DirectivesModule,
    FormsModule,
    IonicModule,
    FormReservaPageRoutingModule
  ],
  declarations: [FormReservaPage]
})
export class FormReservaPageModule {}
