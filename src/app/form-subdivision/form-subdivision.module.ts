import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormSubdivisionPageRoutingModule } from './form-subdivision-routing.module';

import { FormSubdivisionPage } from './form-subdivision.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormSubdivisionPageRoutingModule
  ],
  declarations: [FormSubdivisionPage]
})
export class FormSubdivisionPageModule {}
