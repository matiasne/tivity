import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormCobrarPedidoPageRoutingModule } from './form-cobrar-pedido-routing.module';

import { FormCobrarPedidoPage } from './form-cobrar-pedido.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormCobrarPedidoPageRoutingModule
  ],
  declarations: [FormCobrarPedidoPage]
})
export class FormCobrarPedidoPageModule {}
