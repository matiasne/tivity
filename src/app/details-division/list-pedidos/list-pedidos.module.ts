import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxControlValueAccessor, FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListPedidosPageRoutingModule } from './list-pedidos-routing.module';

import { ListPedidosPage } from './list-pedidos.page';
import { ComponentsModule } from 'src/app/Components/components.module';
import { DirectivesModule } from 'src/app/Directives/directives.module';

@NgModule({
  imports: [
    CommonModule,
    DirectivesModule,
    ComponentsModule,    
    FormsModule,
    IonicModule,
    ListPedidosPageRoutingModule
  ],
  declarations: [ListPedidosPage]
})
export class ListPedidosPageModule {}
