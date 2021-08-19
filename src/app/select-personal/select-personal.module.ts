import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectPersonalPageRoutingModule } from './select-personal-routing.module';

import { SelectPersonalPage } from './select-personal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectPersonalPageRoutingModule
  ],
  declarations: [SelectPersonalPage]
})
export class SelectPersonalPageModule {}
