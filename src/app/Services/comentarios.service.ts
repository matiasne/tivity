import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';
import { BaseService } from './base.service';
import { ComerciosService } from './comercios.service';

@Injectable({
  providedIn: 'root'
})
export class ComentariosService extends BaseService{

  private comercioId = "";
  constructor(
    protected afs: AngularFirestore,
    private comerciosService:ComerciosService
    ) {     
      super(afs); 
      this.comerciosService.getSelectedCommerce().subscribe(data=>{
        // let comercio_seleccionadoId = localStorage.getItem('comercio_seleccionadoId'); 
        if(data){
         this.comercioId = data.id
        }
        
      })
  }
  setearPath(tipo,id){
      this.setPath('comercios/'+this.comercioId +'/'+tipo+'/'+id+'/comentario');   
  }

  obtener() {
    console.log('[BaseService] list: '+this.path);    

    return this.afs.collection(this.path, ref =>ref.orderBy('createdAt',"asc"))
        .snapshotChanges()
        .pipe(
            map(changes => {
                return changes.map(a => {
                    const data:any = a.payload.doc.data();
                    data.id = a.payload.doc.id;
                    return data;
                });
            }),
        );          
  }    

  async incrementarNumeroMensajes(tipo,id){

    var docRef =  this.afs.firestore.collection('comercios/'+this.comercioId +'/'+tipo).doc(id);
    let doc = await  this.afs.firestore.runTransaction(t => t.get(docRef)); 
    if (!doc.exists) {throw ("doc not found");}
    
    var countMensajes = doc.data().countMensajes + 1;
    await doc.ref.update({ countMensajes: countMensajes });

    return countMensajes;

  }

  async decrementarNumeroMensajes(tipo,id){
    var docRef =  this.afs.firestore.collection('comercios/'+this.comercioId +'/'+tipo).doc(id);
    let doc = await  this.afs.firestore.runTransaction(t => t.get(docRef)); 
    if (!doc.exists) {throw ("doc not found");}
    
    var countMensajes = doc.data().countMensajes - 1;
    await doc.ref.update({ countMensajes: countMensajes });

    return countMensajes;
  }

}
