import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormUserPageRoutingModule } from './form-user-routing.module';

import { FormUserPage } from './form-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormUserPageRoutingModule
  ],
  declarations: [FormUserPage]
})
export class FormUserPageModule {}
