import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormMesaPageRoutingModule } from './form-mesa-routing.module';

import { FormMesaPage } from './form-mesa.page';

import { NgxQRCodeModule } from 'ngx-qrcode2';  //import this
import { DirectivesModule } from '../Directives/directives.module';

@NgModule({
  imports: [
    CommonModule,
    DirectivesModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    NgxQRCodeModule,
    FormMesaPageRoutingModule
  ],
  declarations: [FormMesaPage]
})
export class FormMesaPageModule {}
