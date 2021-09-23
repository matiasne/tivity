import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ComerciosService } from '../comercios.service';

@Injectable({
  providedIn: 'root'
})
export class WordpressService {

  public apiUrl:string = '';
  private siteURL:string  = 'http://laparrilladegerardo.com.ar'
  private woocommercePart:string = '/wp-json/wp/v2/';
  private tipoItem:string = "";
  public token = new BehaviorSubject <any>("");
 

  constructor( 
    public http:HttpClient,
    private comercioService:ComerciosService 
  ) { 
    if(localStorage.getItem('wordpress_token'))
      this.token.next(localStorage.getItem('wordpress_token'))
  }

  setPart(part:string){
    this.tipoItem = part;
    this.apiUrl = this.siteURL+this.woocommercePart+this.tipoItem;
  }

  check(){
    //Aca debe ver si hay token, si no hay intentar obtener,
    //si hay intentar conectar
    //si no conecta intentar obtener
  }

  async login(user,pass,url){   
    return new Promise((resolve,reject) =>{

      let data = {
        username:user,
        password:pass
      }
  
      let httpHeaders = new HttpHeaders({
        'Content-Type' : 'application/json'
      });     
      let options = {
        headers: httpHeaders
      };  

      this.apiUrl = url+"/wp-json/jwt-auth/v1/token"  
      try{
        let response:any = this.http.post(this.apiUrl,data,options).toPromise();
        this.token.next(response)
        localStorage.setItem('wordpress_token',response.token) 
      }  
      catch(err){
        reject(err)
      }     
    })  
  }


  obsToken(){
    return this.token.asObservable()
  }

  getToken(){
    return this.token.value
  }

  getAll(){
    this.apiUrl = this.siteURL+this.woocommercePart+this.tipoItem;
    return this.http.get(this.apiUrl); 
  }

  getOne(id){
    this.apiUrl = this.siteURL+this.woocommercePart+this.tipoItem+"/"+id;

    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json'
    });     
    let options = {
      headers: httpHeaders
    };     

    console.log(this.apiUrl)
    return this.http.get(this.apiUrl); 
  }

  postOne(data){
    this.apiUrl = this.siteURL+this.woocommercePart+this.tipoItem;

    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json'
    });     
    let options = {
      headers: httpHeaders
    };     

    console.log(this.apiUrl)
    return this.http.post(this.apiUrl,data,options); 

  }

  updateOne(id, data){
    this.apiUrl = this.siteURL+this.woocommercePart+this.tipoItem+"/"+id;

    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json'
    });     
    let options = {
      headers: httpHeaders
    };     

    console.log(this.apiUrl)
    return this.http.put(this.apiUrl,data,options); 
  }

  deleteOne(id){
    this.apiUrl = this.siteURL+this.woocommercePart+this.tipoItem+"/"+id;
    console.log(this.apiUrl)
    return this.http.delete(this.apiUrl); 
  }


}
