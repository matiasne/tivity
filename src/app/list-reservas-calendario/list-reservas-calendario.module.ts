import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListReservasCalendarioPageRoutingModule } from './list-reservas-calendario-routing.module';

import { ListReservasCalendarioPage } from './list-reservas-calendario.page';
import { ComponentsModule } from '../Components/components.module';
import { DirectivesModule } from '../Directives/directives.module';
import { FullCalendarModule } from '@fullcalendar/angular';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    DirectivesModule,
    FullCalendarModule,
    FormsModule,
    IonicModule,
    ListReservasCalendarioPageRoutingModule
  ],
  declarations: [ListReservasCalendarioPage]
})
export class ListReservasCalendarioPageModule {}
