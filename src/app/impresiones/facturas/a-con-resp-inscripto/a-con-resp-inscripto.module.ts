import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AConRespInscriptoPageRoutingModule } from './a-con-resp-inscripto-routing.module';

import { AConRespInscriptoPage } from './a-con-resp-inscripto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AConRespInscriptoPageRoutingModule
  ],
  declarations: [AConRespInscriptoPage]
})
export class AConRespInscriptoPageModule {}
