import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CConConsumidorFinalPageRoutingModule } from './c-con-consumidor-final-routing.module';

import { CConConsumidorFinalPage } from './c-con-consumidor-final.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CConConsumidorFinalPageRoutingModule
  ],
  declarations: [CConConsumidorFinalPage]
})
export class CConConsumidorFinalPageModule {}
