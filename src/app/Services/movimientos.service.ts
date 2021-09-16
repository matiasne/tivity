import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { CtaCorrientesService } from './cta-corrientes.service';
import { CajasService } from './cajas.service';
import { EnumTipoMovimientoCaja, MovimientoCaja } from '../models/movimientoCaja';
import * as firebase from 'firebase';
import { MovimientoCtaCorriente } from '../models/movimientoCtaCorriente';
import { Mock } from 'protractor/built/driverProviders';
import { Caja } from '../models/caja';
import { CtaCorriente } from '../models/ctacorriente';
import { BaseService } from './base.service';
import { ComerciosService } from './comercios.service';
import { AuthenticationService } from './authentication.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovimientosService extends BaseService {

  private comercioId = "";
  public memoriaDias = 0;
  private enumTipoMovimientoCaja = EnumTipoMovimientoCaja
  
  constructor(
    protected afs: AngularFirestore,
    private ctaCorrienteService:CtaCorrientesService,
    private cajasService:CajasService,
    private comerciosService:ComerciosService,
    private firestore:AngularFirestore,
    private authenticationService:AuthenticationService
    ) {     
      super(afs); 
      this.comerciosService.getSelectedCommerce().subscribe(data=>{
        // let comercio_seleccionadoId = localStorage.getItem('comercio_seleccionadoId'); 
        if(data){
          this.memoriaDias = data.config.memoriaDias
          this.comercioId = data.id
           
         }
        
      })
  }

  listMovimientos() {
    console.log('[BaseService] list: '+this.path);    

    return this.collection
        .snapshotChanges()
        .pipe(
            map(changes => {
                

                return changes.map(a => {
                    const data = a.payload.doc.data();
                    data.id = a.payload.doc.id;
                    data.fromCache = a.payload.doc.metadata.fromCache;

                    //================= borra lo anterior a la fecha configurada de almacenamiento
                   
                    console.log(this.memoriaDias)
                    if(this.memoriaDias > 0){

                      var batch = this.afs.firestore.batch();

                      let fechaDiasMemoria = new Date();
                      
                      fechaDiasMemoria.setDate(fechaDiasMemoria.getDate() - Number(this.memoriaDias));
  
                      let borrar = false;
                      console.log(data.createdAt.toDate()+" "+fechaDiasMemoria)
                      if(data.createdAt.toDate().getTime() < fechaDiasMemoria.getTime()){
                        borrar = true
                        var pedidoRef:any = this.getRef(data.id)
                        batch.delete(pedidoRef)
                        console.log("borrando pedido id: "+data.id)
                      }
  
                      if(borrar){
                        batch.commit()
                      }
                    }
                    

                    return data;
                });
            })
        );          
  }    


  setearPath(cajaId){
      this.setPath('comercios/'+this.comercioId+'/cajas/'+cajaId+'/movimientos')   
  }

  getRefMovimientoCaja(cajaId,movId){
    return this.afs.collection('comercios/'+this.comercioId+'/cajas/'+cajaId+'/movimientos').doc(movId).ref
  }

  getMovimientoCaja(cajaId,movId){
    return this.afs.collection('comercios/'+this.comercioId+'/cajas/'+cajaId+'/movimientos').doc(movId).snapshotChanges();
  }

  getRefMovimientoCtaCorriente(ctaCorrienteId,movId){
    return this.afs.collection('comercios/'+this.comercioId+'/ctascorrientes/'+ctaCorrienteId+'/movimientos').doc(movId).ref
  }

  getMovimientoCtaCorriente(ctaCorrienteId,movId,fechaDesde){
    return this.afs.collection('comercios/'+this.comercioId+'/ctascorrientes/'+ctaCorrienteId+'/movimientos',ref=>ref.where('createdAt', '>=', fechaDesde).orderBy('createdAt',"desc")).doc(movId).snapshotChanges();
  }

 
  public getMovimientosCaja(cajaId,fechaDesde){
    return this.afs.collection('comercios/'+this.comercioId+'/cajas/'+cajaId+'/movimientos',ref=>ref.where('createdAt', '>=', fechaDesde).orderBy('createdAt',"desc")).snapshotChanges()
    
    .pipe(
      map(changes => {
          

          return changes.map(a => {
              const data:any = a.payload.doc.data();
              data.id = a.payload.doc.id;
              data.fromCache = a.payload.doc.metadata.fromCache;

              //================= borra lo anterior a la fecha configurada de almacenamiento
             
              console.log(this.memoriaDias)
              if(this.memoriaDias > 0){

                var batch = this.afs.firestore.batch();

                let fechaDiasMemoria = new Date();
                
                fechaDiasMemoria.setDate(fechaDiasMemoria.getDate() - Number(this.memoriaDias));

                let borrar = false;
                console.log(data.createdAt.toDate()+" "+fechaDiasMemoria)
                if(data.createdAt.toDate().getTime() < fechaDiasMemoria.getTime()){
                  borrar = true
                  var pedidoRef:any = this.getRef(data.id)
                  batch.delete(pedidoRef)
                  console.log("borrando pedido id: "+data.id)
                }

                if(borrar){
                  batch.commit()
                }
              }
              

              return data;
          });
      })
  );
  }


  

  eliminarMovimientoCaja(caja:Caja,data:MovimientoCaja){  

    var batch = this.afs.firestore.batch();

    var movimientoPagoRef:any = this.getRefMovimientoCaja(data.cajaId,data.id)        
    batch.delete(movimientoPagoRef)

    var cajaRef:any = this.cajasService.getRef(data.cajaId)
    if(data.metodoPago == "efectivo"){
      batch.update(cajaRef, "totalEfectivo", firebase.firestore.FieldValue.increment(-data.monto));
    }
    if(data.metodoPago == "debito"){
      batch.update(cajaRef, "totalDebito", firebase.firestore.FieldValue.increment(-data.monto));
    }
    if(data.metodoPago == "credito"){
      batch.update(cajaRef, "totalCredito", firebase.firestore.FieldValue.increment(-data.monto));
    }      

    batch.commit().then(() => {
      console.log("batch commit")
    });
    /*
    if(data.movimientoCtaCorrienteId != ""){  
      console.log("Eliminando Deposito también "+data.ctaCorrienteId+" "+data.movimientoCtaCorrienteId)
      this.actualizarTotalCtaCorriente(data.ctaCorrienteId,data.monto);       
      this.afs.collection('comercios/'+this.comercioId+'/ctascorrientes/'+data.ctaCorrienteId+'/movimientos').doc(data.movimientoCtaCorrienteId).delete();
    }*/


  }

  
 
  public actualizarTotalCaja(cajaId,metodo,monto){       
      
    const sfDocRef = this.afs.firestore.collection('comercios/'+this.comercioId+'/cajas').doc(cajaId);
    
      this.afs.firestore.runTransaction(transaction => 
        // This code may get re-run multiple times if there are conflicts.
        transaction.get(sfDocRef)
        .then(sfDoc => {
          // const newPopulation = sfDoc.data().population + 1;
          if(metodo == "efectivo"){
            transaction.update(sfDocRef, { totalEfectivo: sfDoc.data().totalEfectivo +monto });
          }
          if(metodo == "debito"){
            transaction.update(sfDocRef, { totalDebito: sfDoc.data().totalDebito +monto });
          }
          if(metodo == "credito"){
            transaction.update(sfDocRef, { totalCredito: sfDoc.data().totalCredito +monto });
          }
  
          if(metodo =="ctaCorriente"){
            transaction.update(sfDocRef, { totalCtaCorriente: sfDoc.data().totalCtaCorriente +monto });
          }
  
        }))
    }

    public getMovimientosCtaCorriente(ctaCorrienteId){
      return this.afs.collection('comercios/'+this.comercioId+'/ctascorrientes/'+ctaCorrienteId+'/movimientos/', ref=>ref.orderBy('createdAt',"desc").limit(10)).snapshotChanges()
      .pipe(
        map(changes => {
            
  
            return changes.map(a => {
                const data:any = a.payload.doc.data();
                data.id = a.payload.doc.id;
                data.fromCache = a.payload.doc.metadata.fromCache;
  
                //================= borra lo anterior a la fecha configurada de almacenamiento
               
                console.log(this.memoriaDias)
                if(this.memoriaDias > 0){
  
                  var batch = this.afs.firestore.batch();
  
                  let fechaDiasMemoria = new Date();
                  
                  fechaDiasMemoria.setDate(fechaDiasMemoria.getDate() - Number(this.memoriaDias));
  
                  let borrar = false;
                  console.log(data.createdAt.toDate()+" "+fechaDiasMemoria)
                  if(data.createdAt.toDate().getTime() < fechaDiasMemoria.getTime()){
                    borrar = true
                    var pedidoRef:any = this.getRef(data.id)
                    batch.delete(pedidoRef)
                    console.log("borrando pedido id: "+data.id)
                  }
  
                  if(borrar){
                    batch.commit()
                  }
                }
                
  
                return data;
            });
        })
    );
    }  
    
  
    public actualizarTotalCtaCorriente(ctaCorrienteId,monto){
        
        const sfDocRef = this.afs.firestore.collection('comercios/'+this.comercioId+'/ctascorrientes').doc(ctaCorrienteId);
      
        this.afs.firestore.runTransaction(transaction => 
          // This code may get re-run multiple times if there are conflicts.
          transaction.get(sfDocRef)
          .then(sfDoc => {
            // const newPopulation = sfDoc.data().population + 1;
           
            transaction.update(sfDocRef, { montoTotal: sfDoc.data().montoTotal + monto });
            
    
          }))
    }
  
  
    eliminarMovimientoCtaCorriente(data:MovimientoCtaCorriente){  
  
      let monto = data.monto;

      var batch = this.afs.firestore.batch();

      var movimientoCtaCorrientePagoRef:any = this.getRefMovimientoCtaCorriente(data.ctaCorrienteId,data.id)
      batch.delete(movimientoCtaCorrientePagoRef)

      

      var ctaCorrienteRef:any = this.ctaCorrienteService.getRef(data.ctaCorrienteId)
      batch.update(ctaCorrienteRef, "montoTotal", firebase.firestore.FieldValue.increment(-monto));

      if(data.cajaId){
        var movimientoPagoRef:any = this.getRefMovimientoCaja(data.cajaId,data.movimientoCajaId)        
        batch.delete(movimientoPagoRef)
  
        var cajaRef:any = this.cajasService.getRef(data.cajaId)
        if(data.metodo == "efectivo"){
          batch.update(cajaRef, "totalEfectivo", firebase.firestore.FieldValue.increment(monto));
        }
        if(data.metodo == "debito"){
          batch.update(cajaRef, "totalDebito", firebase.firestore.FieldValue.increment(monto));
        }
        if(data.metodo == "credito"){
          batch.update(cajaRef, "totalCredito", firebase.firestore.FieldValue.increment(monto));
        }
       
      }

      
      batch.commit().then(() => {
        console.log("batch commit")
      });
     
    } 


    agregarMovimientoEnCtaCorriente(ctaCorrienteId,clienteId,clienteNombre,cajaId,metodo,monto,motivo){
      
      var batch = this.afs.firestore.batch();

      let movCajaId = this.firestore.createId()
      let movCtaCorrienteId = this.firestore.createId();
      let time = new Date();
      
      let tipoMoCaja = this.enumTipoMovimientoCaja.egreso
      if(monto > 0){
        tipoMoCaja = this.enumTipoMovimientoCaja.ingreso
      }

      if(cajaId !=""){
        
        var movCaja = new MovimientoCaja(
          movCajaId,
          tipoMoCaja,
          clienteId,
          cajaId,
          metodo,
          monto,
          clienteNombre+" movimiento de cuenta corriente:"+motivo,
          this.authenticationService.getUID(), 
          this.authenticationService.getNombre());      
        
        movCaja.ctaCorrienteId = ctaCorrienteId;
        movCaja.movimientoCtaCorrienteId = movCtaCorrienteId;      
  
        var movimientoPagoRef:any = this.getRefMovimientoCaja(cajaId,movCajaId)        
        batch.set(movimientoPagoRef,{...movCaja, createdAt: time})

        var cajaRef:any = this.cajasService.getRef(cajaId)
        if(metodo == "efectivo"){
          batch.update(cajaRef, "totalEfectivo", firebase.firestore.FieldValue.increment(monto));
        }
        if(metodo == "debito"){
          batch.update(cajaRef, "totalDebito", firebase.firestore.FieldValue.increment(monto));
        }
        if(metodo == "credito"){
          batch.update(cajaRef, "totalCredito", firebase.firestore.FieldValue.increment(monto));
        }        
      }
      

      var movCtaCorriente = new MovimientoCtaCorriente(
        movCtaCorrienteId,
        clienteId,
        ctaCorrienteId,
        clienteNombre+" movimiento de cuenta corriente:"+motivo,
        metodo,
        monto,              
        this.authenticationService.getUID(), this.authenticationService.getNombre()
        );
        movCtaCorriente.cajaId = cajaId
        movCtaCorriente.movimientoCajaId = movCajaId
  
      var movimientoCtaCorrientePagoRef:any = this.getRefMovimientoCtaCorriente(ctaCorrienteId,movCtaCorrienteId)
      batch.set(movimientoCtaCorrientePagoRef,{...movCtaCorriente, createdAt: time})
    
      var ctaCorrienteRef:any = this.ctaCorrienteService.getRef(ctaCorrienteId)
      batch.update(ctaCorrienteRef, "montoTotal", firebase.firestore.FieldValue.increment(monto));

     
     
      batch.commit().then(() => {
          console.log("batch commit")
      });
  
    }

    agregarMovimientoCaja(cajaId,clienteId,tipo,ctaCorrienteId,metodo,monto,motivo){

      var batch = this.afs.firestore.batch();

      let time = new Date();
      let egresoId = this.firestore.createId();

      let egreso = new MovimientoCaja(
        egresoId,
        tipo,
        "",
        cajaId,
        metodo,
        monto,
        motivo,        
        this.authenticationService.getUID(), 
        this.authenticationService.getEmail());

        var movimientoPagoRef:any = this.getRefMovimientoCaja(cajaId,egresoId)        
        batch.set(movimientoPagoRef,{...egreso, createdAt: time})

        var cajaRef:any = this.cajasService.getRef(cajaId)
        if(metodo == "efectivo"){
          batch.update(cajaRef, "totalEfectivo", firebase.firestore.FieldValue.increment(monto));
        }
        if(metodo == "debito"){
          batch.update(cajaRef, "totalDebito", firebase.firestore.FieldValue.increment(monto));
        }
        if(metodo == "credito"){
          batch.update(cajaRef, "totalCredito", firebase.firestore.FieldValue.increment(monto));
        }

        batch.commit().then(() => {
          console.log("batch commit")
      });

    }
    

  }

