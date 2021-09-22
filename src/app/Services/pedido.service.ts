import { Injectable } from '@angular/core';
import { Pedido } from 'src/app/models/pedido';
import { BehaviorSubject } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';
import { BaseService } from './base.service';
import { map } from 'rxjs/operators';
import { EnumTipoDescuento } from '../models/descuento';
import { EnumTipoRecargo } from '../models/recargo';
import { ComerciosService } from './comercios.service';

@Injectable({
  providedIn: 'root'
})
export class PedidoService extends BaseService{

  private pedidoActual:Pedido = new Pedido();

  public actualPedidoSubject = new BehaviorSubject<Pedido>(this.pedidoActual);

  public pedidoCalificando:Pedido = new Pedido();
  public memoriaDias = 0;

  constructor(
    protected afs: AngularFirestore,
    private comerciosService:ComerciosService
    ) {     
      super(afs); 
      this.comerciosService.getSelectedCommerce().subscribe(data=>{
        if(data){
          this.memoriaDias = data.config.memoriaDias
          this.setPath('comercios/'+data.id+'/pedidos')   
         }        
      })
  }


  getByMesa(mesaId) {
        

    return this.afs.collection(this.path, ref => ref.where('mesaId', '==', mesaId).limit(40)).snapshotChanges()
        .pipe( 
            map(changes => {
                return changes.map(a => {
                    const data:any = a.payload.doc.data();
                    data.id = a.payload.doc.id;
                    data.fromCache = a.payload.doc.metadata.fromCache;
                    return data;
                });
            })
        );          
  }     

  listPedidos(){

    let fechaDiasMemoria = new Date();
    console.log(this.memoriaDias)
    fechaDiasMemoria.setDate(fechaDiasMemoria.getDate() - Number(this.memoriaDias));

    return this.afs.collection(this.path, ref => ref.where('createdAt', '>=', fechaDiasMemoria).orderBy('createdAt',"desc")).snapshotChanges()
    .pipe(
        map(changes => {
            return changes.map(a => {   
                const data:any = a.payload.doc.data();
                data.id = a.payload.doc.id;
                data.fromCache = a.payload.doc.metadata.fromCache;                     

            /*    if(this.memoriaDias > 0){
                //================= borra lo anterior a la fecha configurada de almacenamiento
                  var batch = this.afs.firestore.batch();

                  let fechaDiasMemoria = new Date();
                  fechaDiasMemoria.setDate(fechaDiasMemoria.getDate() - Number(this.memoriaDias));

                  let borrar = false;
                  if(data.createdAt.toDate().getTime() < fechaDiasMemoria.getTime()){
                    borrar = true
                    var pedidoRef:any = this.getRef(data.id)
                    batch.delete(pedidoRef)
                    console.log("borrando pedido id: "+data.id)
                  }

                  if(borrar){
                    batch.commit()
                  }
                }*/

                return data;
            });
        })
    );     
  }



  listFecha(fechaFrom,fechaTo){
 
    
  fechaTo.setDate(fechaTo.getDate() + 1);

    return this.afs.collection(this.path, ref => ref.where('createdAt', '>=', fechaFrom).orderBy('createdAt',"desc").limit(50)).snapshotChanges()
        .pipe(
            map(changes => {
              console.log("listFechaDEsdeHasta")
                return changes.map(a => {   
                    const data:any = a.payload.doc.data();
                    data.id = a.payload.doc.id;
                    data.fromCache = a.payload.doc.metadata.fromCache;                     

                    
                    

                    return data;
                });
            })
        );     
  }


  public listSolicitados(){

    return this.afs.collection(this.path).snapshotChanges()
        .pipe(
            map(changes => {
                return changes.filter((a:any) => {                 
                  
                  const data:any = a.payload.doc.data();
                  if(data.statusCobro == 1){
                    data.id = a.payload.doc.id;
                    data.fromCache = a.payload.doc.metadata.fromCache;  
                    return data;
                  }                    
                });
            })
        );    
  }

  public getTotal(pedido:Pedido){
 
   
    let total = 0;

    pedido.items.forEach(prod =>{
      total += prod.precioTotal
    })    

    let totalPorcentaje = 0;
    pedido.descuentos.forEach(descuento =>{
      if(descuento.tipo == EnumTipoDescuento.porcentaje){
        totalPorcentaje += Number(descuento.monto)
      }
    })

    let descontar = (total*totalPorcentaje)/100;

    total = total-descontar;

    let totalMonto = 0;
    pedido.descuentos.forEach(descuento =>{
      if(descuento.tipo == EnumTipoDescuento.monto){
        totalMonto += Number(descuento.monto)
      }
    })

    total = total-totalMonto;
    totalPorcentaje = 0;
    pedido.recargos.forEach(recargo =>{
      if(recargo.tipo == EnumTipoRecargo.porcentaje){
        totalPorcentaje += Number(recargo.monto)
      }
    })

    let sumar = (total*totalPorcentaje)/100;

    total = total+sumar;

    totalMonto = 0;
    pedido.recargos.forEach(recargo =>{
      if(recargo.tipo == EnumTipoRecargo.monto){
        totalMonto += Number(recargo.monto)
      }
    })

    total = total+totalMonto;
    return total;
  }

  async incrementarNumeroMensajes(id){

    var docRef =  this.afs.firestore.collection(this.path).doc(id);
    let doc = await  this.afs.firestore.runTransaction(t => t.get(docRef)); 
    if (!doc.exists) {throw ("doc not found");}
    
    var countMensajes = doc.data().countMensajes + 1;
    await doc.ref.update({ countMensajes: countMensajes });

    return countMensajes;

  }
  

  
}
