import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TicketFacturaPageRoutingModule } from './ticket-factura-routing.module';

import { TicketFacturaPage } from './ticket-factura.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TicketFacturaPageRoutingModule
  ],
  declarations: [TicketFacturaPage]
})
export class TicketFacturaPageModule {}
