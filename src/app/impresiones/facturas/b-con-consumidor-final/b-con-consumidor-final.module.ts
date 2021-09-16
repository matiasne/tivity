import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BConConsumidorFinalPageRoutingModule } from './b-con-consumidor-final-routing.module';

import { BConConsumidorFinalPage } from './b-con-consumidor-final.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BConConsumidorFinalPageRoutingModule
  ],
  declarations: [BConConsumidorFinalPage]
})
export class BConConsumidorFinalPageModule {}
