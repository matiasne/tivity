import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AConRespNoInscriptoPageRoutingModule } from './a-con-resp-no-inscripto-routing.module';

import { AConRespNoInscriptoPage } from './a-con-resp-no-inscripto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AConRespNoInscriptoPageRoutingModule
  ],
  declarations: [AConRespNoInscriptoPage]
})
export class AConRespNoInscriptoPageModule {}
