import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListPedidosPageRoutingModule } from './list-pedidos-routing.module';

import { ListPedidosPage } from './list-pedidos.page';
import { ComponentsModule } from '../Components/components.module';
import { DirectivesModule } from '../Directives/directives.module';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule, 
    DirectivesModule,
    FormsModule,
    IonicModule,
    ListPedidosPageRoutingModule
  ],
  declarations: [ListPedidosPage]
})
export class ListPedidosPageModule {}
