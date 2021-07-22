import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsComandaPageRoutingModule } from './details-comanda-routing.module';

import { DetailsComandaPage } from './details-comanda.page';
import { ComponentsModule } from '../Components/components.module';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    IonicModule,
    DetailsComandaPageRoutingModule
  ],
  declarations: [DetailsComandaPage]
})
export class DetailsComandaPageModule {}
