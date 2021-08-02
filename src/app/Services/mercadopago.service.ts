import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ComerciosService } from './comercios.service';

@Injectable({
  providedIn: 'root'
})
export class MercadopagoService {

  public collection: AngularFirestoreCollection;
  
  constructor(
    private http:HttpClient,
    protected afs: AngularFirestore,
    private comerciosService:ComerciosService
  ) { 
    this.collection = this.afs.collection('mercadoPago');
  }

  async procesarPago(data){
    let httpHeaders = new HttpHeaders({});      

    let options = {
      headers: httpHeaders
    };           

    let body = data
    
    return this.http.post(environment.mercadoPagoUrl+"/procesarPago",body,options).toPromise()
  }

  obtenerTiposDocumentos(){
    let httpHeaders = new HttpHeaders({});      

    let options = {
      headers: httpHeaders
    };        
    
    let body ={
      comercioId:this.comerciosService.getSelectedCommerceId()
    } 
    
    return this.http.post(environment.mercadoPagoUrl+"/obtenerTiposDocumentos",body,options)
  }


  obtenerTiposPago(){
    let httpHeaders = new HttpHeaders({});      

    let options = {
      headers: httpHeaders
    };        
    
    let body ={
      comercioId:this.comerciosService.getSelectedCommerceId()
    }
    
    return this.http.post(environment.mercadoPagoUrl+"/obtenerTiposPago",body,options)
  }

  guardarKeys(privateKey,publicKey){
    let data = {
      clavePrivada:privateKey,
      clavePublica:publicKey
    }
    let time = new Date()
    return this.collection.doc(this.comerciosService.getSelectedCommerceId()).set({...data, createdAt: time})
  }

}
