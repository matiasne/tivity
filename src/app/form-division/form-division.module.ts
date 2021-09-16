import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormDivisionPageRoutingModule } from './form-division-routing.module';

import { FormDivisionPage } from './form-division.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormDivisionPageRoutingModule
  ],
  declarations: [FormDivisionPage]
})
export class FormDivisionPageModule {}
