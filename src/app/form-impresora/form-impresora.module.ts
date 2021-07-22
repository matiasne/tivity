import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormImpresoraPageRoutingModule } from './form-impresora-routing.module';

import { FormImpresoraPage } from './form-impresora.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormImpresoraPageRoutingModule
  ],
  declarations: [FormImpresoraPage]
})
export class FormImpresoraPageModule {}
