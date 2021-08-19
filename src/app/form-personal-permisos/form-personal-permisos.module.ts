import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormPersonalPermisosPageRoutingModule } from './form-personal-permisos-routing.module';

import { FormPersonalPermisosPage } from './form-personal-permisos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormPersonalPermisosPageRoutingModule
  ],
  declarations: [FormPersonalPermisosPage]
})
export class FormPersonalPermisosPageModule {}
