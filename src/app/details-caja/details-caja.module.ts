import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsCajaPageRoutingModule } from './details-caja-routing.module';

import { DetailsCajaPage } from './details-caja.page';
import { DirectivesModule } from '../Directives/directives.module';

@NgModule({
  imports: [
    CommonModule,
    DirectivesModule,
    FormsModule,
    IonicModule,
    DetailsCajaPageRoutingModule
  ],
  declarations: [DetailsCajaPage]
})
export class DetailsCajaPageModule {}
