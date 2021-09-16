import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoContactoPageRoutingModule } from './info-contacto-routing.module';

import { InfoContactoPage } from './info-contacto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoContactoPageRoutingModule
  ],
  declarations: [InfoContactoPage]
})
export class InfoContactoPageModule {}
