import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { BaseService } from './base.service';
import { ComerciosService } from './comercios.service';

@Injectable({
  providedIn: 'root'
})
export class SubscripcionesService extends BaseService{

  private comercioId = "";

  constructor(
    protected afs: AngularFirestore,
    private firestore: AngularFirestore,
    private comerciosService:ComerciosService
    ) {     
      super(afs); 
      this.comerciosService.getSelectedCommerce().subscribe(data=>{
        if(data){
          this.comercioId = data.id
          this.setPath("comercios/"+this.comercioId+"/subscripciones/");
         }        
      })
  }
}
