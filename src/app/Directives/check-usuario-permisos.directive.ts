import { Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';
import { Permisos, Rol } from '../models/rol';
import { RolesService } from '../Services/roles.service';

@Directive({
  selector: '[appCheckUsuarioPermisos]'
})
export class CheckUsuarioPermisosDirective implements OnInit {
  
  @Input('appCheckUsuarioPermisos') data = {
    feature:"",
    permiso:"",
    creador:""
  };

  private onDestroy$ = new Subject<boolean>();
  private rol:Rol
  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>,
    private rolesService:RolesService,
  ) { 
    this.rol = new Rol()
    this.rol.asignarValores(this.rolesService.getRolValue())    
  }

  ngOnInit() {   
    if (this.checkPermission()) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

  ngAfterViewInit(){
    //
  }
    
  ngOnDestroy() {
    this.onDestroy$.next(true);
    this.onDestroy$.unsubscribe();
  }


  checkPermission(): boolean {

    if(this.data.creador){
      if(this.rol.userEmail != this.data.creador){
        return false;
      }
    }
      
    if (this.rol.permisos[this.data.feature]) {
      switch (this.data.permiso) {
        case Permisos.Visible:
          return this.rol.permisos[this.data.feature] !== Permisos.Oculto;
        case Permisos.Editor:
          return this.rol.permisos[this.data.feature] === Permisos.Editor;
      }
    }
    return false;
  }



}
