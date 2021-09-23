import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import * as firebase from 'firebase';
import { Comercio } from '../models/comercio';
import { map } from 'rxjs/operators';
import { BaseService } from './base.service';
import { WoocommerceSyncData } from '../models/woocommerceSyncData';

@Injectable({
  providedIn: 'root'
})
export class ComerciosService extends BaseService {

  public commerceSubject = new BehaviorSubject <any>("");
  public comercio:Comercio;
  public woocommerceSyncPath = "";

  constructor(
    protected afs: AngularFirestore,
  ) {
    super(afs);   
    this.comercio = new Comercio();
    this.setPath('comercios')
    /*this.setSelectedCommerce(localStorage.getItem('comercio_seleccionadoId'));*/

  }

  getSelectedCommerceValue(){
    return this.commerceSubject.value;
  }

  getSelectedCommerce(): Observable<any>{
    return this.commerceSubject.asObservable();
  }

  getSelectedCommerceId(){
    return this.commerceSubject.value.id
  }

  getByNombre(nombre){
    return this.afs.collection(this.path, ref =>  ref.where('nombre','==',nombre)).valueChanges();    
  }


  getRef(id){
    return this.afs.collection(this.path).doc(id).ref;
  }

  updateComercio(data){
    this.update(data)
    this.commerceSubject.next(data)
  }



  public setSelectedCommerce(comercio){    
    localStorage.setItem('comercio_seleccionadoId',comercio.id);
    this.commerceSubject.next(comercio);    
  }

  public search(by,palabra,ultimo){      
    if(ultimo == ""){
      console.log("!!!!!! primero")     
      return this.afs.collection(this.path, ref => 
        ref.where('keywords','array-contains',palabra)
            .where('recibirPedidos','==',true)
            .orderBy(by)
            .limit(5)).snapshotChanges();
    }
    else{
      return this.afs.collection(this.path, ref => 
        ref.where('keywords','array-contains',palabra)
            .where('recibirPedidos','==',true)
            .orderBy(by)
            .startAfter(ultimo)
            .limit(5)).snapshotChanges();    
    }    
  }  

  
  getWoocommerceValue(){
    this.woocommerceSyncPath = this.path+'/'+this.commerceSubject.value.id+'/woocommerceSincData'
    return this.afs.collection(this.woocommerceSyncPath).doc("1").get()
    .pipe(
        map(doc => {
            if (doc.exists) {
        /* workaround until spread works with generic types */
                const data = doc.data() as any;
                const id = doc.id;
                data.fromCache = doc.metadata.fromCache;
                return { id, ...data };
            }
        })
    ); 
  }

  updateWoocommerceValues(values){
    this.woocommerceSyncPath = this.path+'/'+this.commerceSubject.value.id+'/woocommerceSincData'
    return this.afs.collection(this.woocommerceSyncPath).doc("1").set(values)
  }

  
  deleteWoocommerceValues(){
    this.woocommerceSyncPath = this.path+'/'+this.commerceSubject.value.id+'/woocommerceSincData'
    this.afs.collection(this.woocommerceSyncPath).doc("1").delete().then(data=>{
      console.log("Actualizados los valores de woocommerce")
    })
  }

  async obtenerActualizarNumeroPedido(){
/*
    var docRef =  this.afs.firestore.collection("comercios").doc(this.commerceSubject.value.id);

    let doc = await  this.afs.firestore.runTransaction(t => t.get(docRef));
 
    if (!doc.exists) {throw ("doc not found");}

    let fechaUltimo = new Date()
    if(doc.data().ultimoPedidoFecha)
      fechaUltimo = doc.data().ultimoPedidoFecha.toDate();    

    
    var countPedidoDia = Number(doc.data().countPedidoDia) + 1;

    let fecha = new Date();
    console.log(fecha.getDate()+" "+fechaUltimo.getDate())
    if(fecha.getDate() > fechaUltimo.getDate()){
      countPedidoDia = 0;
    }

    console.log(countPedidoDia)

    await doc.ref.update({ countPedidoDia: countPedidoDia, ultimoPedidoFecha:fecha });

    return countPedidoDia;*/

    return 0;

  }

}
