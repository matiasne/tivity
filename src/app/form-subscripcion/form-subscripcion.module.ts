import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormSubscripcionPageRoutingModule } from './form-subscripcion-routing.module';

import { FormSubscripcionPage } from './form-subscripcion.page';
import { ComponentsModule } from '../Components/components.module';
import { DirectivesModule } from '../Directives/directives.module';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    DirectivesModule,
    FormsModule,
    IonicModule,
    FormSubscripcionPageRoutingModule
  ],
  declarations: [FormSubscripcionPage]
})
export class FormSubscripcionPageModule {}
