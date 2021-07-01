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
  ) { }

  async login(){
    let httpHeaders = new HttpHeaders({

    });      
    let options = {
      headers: httpHeaders
    };     

    let body ={
      comercioId:this.comerciosService.getSelectedCommerceValue().id,
      password:localStorage.getItem('AfipPassword'+this.comerciosService.getSelectedCommerceValue().id)
    }
    
    this.http.post(environment.afipUrl+"/login",body,options).subscribe((data:any)=>{
      localStorage.setItem('afipToken',data.token)
      this.voucherTypes()
    },err=>{
      console.log(err)
    })
    
   
  }

  getTiposFactura(): Observable<any>{
    return this.vTypes.asObservable();
  }

  async status(){
    let httpHeaders = new HttpHeaders({
      'Authorization' : 'Bearer '+localStorage.getItem('afipToken')
    });      

    let options = {
      headers: httpHeaders
    };          
    
    this.http.post(environment.afipUrl+"/status",{},options).subscribe((data:any)=>{
      console.log(data)
      
     
    },err=>{
      console.log(err)
      if(err.status == 403){
        this.login()
      }
    })
  }

  async voucherTypes(){
    let httpHeaders = new HttpHeaders({
      'Authorization' : 'Bearer '+localStorage.getItem('afipToken')
    });      

    let options = {
      headers: httpHeaders
    };          
    
    this.http.post(environment.afipUrl+"/voucherTypes",{},options).subscribe((data:any)=>{
      console.log(data)
      this.vTypes.next(data.voucherTypes);
    },err=>{
      console.log(err)
      if(err.status == 403){
        this.login()
      }
    })
  }

  async facturarPedido(pedidoId){
    let httpHeaders = new HttpHeaders({
      'Authorization' : 'Bearer '+localStorage.getItem('afipToken')
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

  async notaCreditoPedido(pedidoId){
    let httpHeaders = new HttpHeaders({
      'Authorization' : 'Bearer '+localStorage.getItem('afipToken')
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


}
