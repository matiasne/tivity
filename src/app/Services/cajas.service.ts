import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { BaseService } from './base.service';
import { ComerciosService } from './comercios.service';

@Injectable({
  providedIn: 'root'
})
export class CajasService extends BaseService{

  constructor(
    protected afs: AngularFirestore,
    private comerciosService:ComerciosService
  ) {     
    super(afs); 
    
       this.setPath(this.getPath())   
    
     
  }

  private getPath(){ //esto debe ser así porque puede que cambie de comercio en algun momento usando la app
    let comercioId = this.comerciosService.getSelectedCommerceId()
    return 'comercios/'+comercioId+'/cajas'
  }


}


  



  
  