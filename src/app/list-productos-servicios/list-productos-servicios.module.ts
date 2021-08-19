import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListProductosServiciosPageRoutingModule } from './list-productos-servicios-routing.module';

import { ListProductosServiciosPage } from './list-productos-servicios.page';
import { ComponentsModule } from '../Components/components.module';
import { DirectivesModule } from '../Directives/directives.module';


@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    DirectivesModule,
    FormsModule,
    IonicModule,
    ListProductosServiciosPageRoutingModule
  ],
  declarations: [ListProductosServiciosPage]
})
export class ListProductosServiciosPageModule {}
