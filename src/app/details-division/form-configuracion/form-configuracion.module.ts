import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormConfiguracionPageRoutingModule } from './form-configuracion-routing.module';

import { FormConfiguracionPage } from './form-configuracion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormConfiguracionPageRoutingModule
  ],
  declarations: [FormConfiguracionPage]
})
export class FormConfiguracionPageModule {}
