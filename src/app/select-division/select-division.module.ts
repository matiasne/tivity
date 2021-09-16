import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectDivisionPageRoutingModule } from './select-division-routing.module';

import { SelectDivisionPage } from './select-division.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectDivisionPageRoutingModule
  ],
  declarations: [SelectDivisionPage]
})
export class SelectDivisionPageModule {}
