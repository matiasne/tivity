import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormAfipPageRoutingModule } from './form-afip-routing.module';

import { FormAfipPage } from './form-afip.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormAfipPageRoutingModule
  ],
  declarations: [FormAfipPage]
})
export class FormAfipPageModule {}
