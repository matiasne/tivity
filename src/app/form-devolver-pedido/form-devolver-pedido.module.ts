import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormDevolverPedidoPageRoutingModule } from './form-devolver-pedido-routing.module';

import { FormDevolverPedidoPage } from './form-devolver-pedido.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormDevolverPedidoPageRoutingModule
  ],
  declarations: [FormDevolverPedidoPage]
})
export class FormDevolverPedidoPageModule {}
