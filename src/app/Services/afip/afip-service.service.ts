import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ComerciosService } from '../comercios.service';
import { ToastService } from '../toast.service';

@Injectable({
  providedIn: 'root'
})
export class AfipServiceService {

  private comercio:any
  public vTypes = new BehaviorSubject <any>("");;

  constructor(
    private http:HttpClient,
    private comerciosService:ComerciosService,
    private toastService:ToastService
  ) {


   }

   getToken(){
     return this.comerciosService.getSelectedCommerceValue().afip.token
   }


/*
  async login(){
    let pass = localStorage.getItem('AfipPassword'+this.comerciosService.getSelectedCommerceValue().id)
    console.log(pass)
    if(pass == null){
      return
    } 

    let httpHeaders = new HttpHeaders({

    });      
    let options = {
      headers: httpHeaders
    };     

    let body ={
      comercioId:this.comerciosService.getSelectedCommerceValue().id,
      password:pass
    }
    
    this.http.post(environment.afipUrl+"/login",body,options).subscribe((data:any)=>{
      localStorage.setItem('afipToken',data.token)
      this.voucherTypes()
    },err=>{
      console.log(err)
    })  
  }*/

  getTiposFactura(): Observable<any>{
    return this.vTypes.asObservable();
  }

  

  async voucherTypes(){
    let httpHeaders = new HttpHeaders({
      'Authorization' : 'Bearer '+this.getToken()
    });      

    let options = {
      headers: httpHeaders
    };          
    
    this.http.post(environment.afipUrl+"/voucherTypes",{},options).subscribe((data:any)=>{
      console.log(data)
      this.vTypes.next(data.voucherTypes);
    },err=>{
      console.log(err)
    })
  }

  async facturarPedido(pedidoId){
    let httpHeaders = new HttpHeaders({
      'Authorization' : 'Bearer '+this.getToken()
    });      

    let options = {
      headers: httpHeaders
    };        
    
    let date = new Date()
    let fecha = this.formatDate(date);

    let body ={
      pedidoId:pedidoId,
      CbteFch:fecha
    }
    
    return this.http.post(environment.afipUrl+"/createFacturaFromPedido",body,options).toPromise()
  }

  async notaCreditoPedido(pedidoId,montoReembolso){
    let httpHeaders = new HttpHeaders({
      'Authorization' : 'Bearer '+this.getToken()
    });      

    let options = {
      headers: httpHeaders
    };        
    
    let date = new Date()
    let fecha = this.formatDate(date);

    let body ={
      pedidoId:pedidoId,
      CbteFch:fecha,
      montoReembolso:montoReembolso
    }
    
    return this.http.post(environment.afipUrl+"/createNotaCreditoFromPedido",body,options).toPromise()
  }

  formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

getURLforQR(pedido){

  let url = "https://www.afip.gob.ar/fe/qr/?p="

  let fecha = pedido.afipFactura.fechaEmision 
  //dar formato a fecha
  //let fechaFormateada = this.formatDate(pedido.afipFactura.fechaEmision.toDate())

  let fechaFormateada = fecha.substring(0,10)

  console.log(fechaFormateada)

  let json = {
    ver:1,
    fecha:"2021-10-13", //"2020-10-13"
    cuit:pedido.afipFactura.emisorNroDoc,
    ptoVta:pedido.afipFactura.ptoVenta,
    tipoCmp:pedido.afipFactura.CbteTipo,
    nroCmp:pedido.afipFactura.voucherNumber,
    importe:pedido.total,
    moneda:"ARS",
    ctz:1,
    tipoDocRec:pedido.clienteDoc,
    nroDocRec:pedido.clienteDocTipo,
    tipoCodAut:"E",
    codAut: pedido.afipFactura.CAE
  }  

  let base64string = btoa(JSON.stringify(json))
  console.log(atob(base64string))

  return url+base64string;
}



}
