import { NgModule } from '@angular/core';
import { CheckComercioConfigDirective } from './check-comercio-config.directive';
import { CheckUsuarioPermisosDirective } from './check-usuario-permisos.directive';

@NgModule({
  declarations: [
    CheckComercioConfigDirective,
    CheckUsuarioPermisosDirective,
  ],
  exports: [
    CheckComercioConfigDirective,
    CheckUsuarioPermisosDirective
  ]
})
export class DirectivesModule { }