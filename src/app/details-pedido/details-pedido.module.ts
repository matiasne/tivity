import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsPedidoPageRoutingModule } from './details-pedido-routing.module';

import { DetailsPedidoPage } from './details-pedido.page';
import { ComponentsModule } from '../Components/components.module';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { DirectivesModule } from '../Directives/directives.module';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    DirectivesModule,
    NgxQRCodeModule,
    FormsModule,
    IonicModule,
    DetailsPedidoPageRoutingModule
  ],
  declarations: [DetailsPedidoPage]
})
export class DetailsPedidoPageModule {}
