import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsDivisionPageRoutingModule } from './details-division-routing.module';

import { DetailsDivisionPage } from './details-division.page';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from '../Components/components.module';


@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    IonicModule,
    DetailsDivisionPageRoutingModule
  ],
  declarations: [
    DetailsDivisionPage
  ]
})
export class DetailsDivisionPageModule {}
