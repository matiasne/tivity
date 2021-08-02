import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { BaseService } from './base.service';
import { ComerciosService } from './comercios.service';

@Injectable({
  providedIn: 'root'
})
export class SubscripcionesService extends BaseService{

  constructor(
    protected afs: AngularFirestore,
    private firestore: AngularFirestore,
    private comerciosService:ComerciosService
    ) {     
      super(afs); 
     
  }

  setPath(clienteId){
    let comercioId = this.comerciosService.getSelectedCommerceId()
    this.path = 'comercios/'+comercioId+'/clientes/'+clienteId+'/subscripciones'
  }

  addSubscripcion(clienteId,subscripcion){
    this.setPath(clienteId)
    return super.add(subscripcion)    
  }

  listSubscripciones(clienteId){
    this.setPath(clienteId)
    return super.list()    
  }

  getSubscripciones(clienteId,subscripcionId){
    this.setPath(clienteId)
    return super.get(subscripcionId)    
  }

  deleteSubscripciones(clienteId,subscripcionId){
    this.setPath(clienteId)
    return super.delete(subscripcionId)    
  }
  


}
