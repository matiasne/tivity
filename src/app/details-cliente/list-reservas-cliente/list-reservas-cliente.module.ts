import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListReservasClientePageRoutingModule } from './list-reservas-cliente-routing.module';

import { ListReservasClientePage } from './list-reservas-cliente.page';
import { FullCalendarModule } from '@fullcalendar/angular';
import { DirectivesModule } from 'src/app/Directives/directives.module';
import { ComponentsModule } from 'src/app/Components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FullCalendarModule,
    DirectivesModule,
    ComponentsModule,   
    IonicModule,
    ListReservasClientePageRoutingModule
  ],
  declarations: [ListReservasClientePage]
})
export class ListReservasClientePageModule {}
