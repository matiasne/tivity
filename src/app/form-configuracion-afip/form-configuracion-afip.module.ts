import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormConfiguracionAfipPageRoutingModule } from './form-configuracion-afip-routing.module';

import { FormConfiguracionAfipPage } from './form-configuracion-afip.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormConfiguracionAfipPageRoutingModule
  ],
  declarations: [FormConfiguracionAfipPage]
})
export class FormConfiguracionAfipPageModule {}
