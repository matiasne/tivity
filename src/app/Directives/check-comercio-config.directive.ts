import { Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';
import { Comercio } from '../models/comercio';
import { ComerciosService } from '../Services/comercios.service';

@Directive({
  selector: '[appCheckComercioConfig]'
})
export class CheckComercioConfigDirective implements OnInit, OnDestroy {

  @Input() appCheckConfig:any;  
  private onDestroy$ = new Subject<boolean>();

  private feat ="";
  private lastValue:any;
  
  private comercio:Comercio
  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>,
    private comercioService:ComerciosService
    ) {
      this.comercio = new Comercio()
      
     }

  ngOnInit() {   
    
  }
    
  ngOnDestroy() {
    console.log("!!!!destroy!!!!")
    this.onDestroy$.next(true);
    this.onDestroy$.unsubscribe();
  }

  @Input() set appCheckComercioConfig(feature) {

    this.comercioService.getSelectedCommerce().subscribe(data=>{
      this.comercio.asignarValores(data)

      if(this.lastValue != this.comercio.config[feature]){
        this.lastValue = this.comercio.config[feature];
        if (this.comercio.config[feature]) {
          
          this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
          this.viewContainer.clear();
        }
      }
      
      
    })
    

   
  }

}
