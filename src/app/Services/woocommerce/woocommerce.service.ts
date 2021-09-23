import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Item } from 'src/app/models/item';
import { WCProduct } from 'src/app/models/woocommerce/product';
import { WoocommerceSyncData } from 'src/app/models/woocommerceSyncData';
import { CategoriasService } from '../categorias.service';
import { ComerciosService } from '../comercios.service';
import { FotoService } from '../fotos.service';
import { ProductosService } from '../productos.service';
import { WordpressService } from '../wordpress/wordpress.service';
import { CategoriesService } from './categories.service';

@Injectable({
  providedIn: 'root'
})
export class WoocommerceService {

  private comercio:any
  private apiUrl:string = '';
  private siteURL:string  = ''
  private woocommercePart:string = '/wp-json/wc/v3/';
  private tipoItem:string = "products";

  public progresoSend = new BehaviorSubject <any>(0);
  public progresoReceived = new BehaviorSubject <any>(0);

  private total = 0;
  private psend = 0;
  private preceived = 0;
  
  constructor( 
    private http:HttpClient,
    private comerciosService:ComerciosService,
    private productosServices:ProductosService,
    private wordpressService:WordpressService,
    private fotosService:FotoService,
    private categoriasService:CategoriasService
  ) {    
    
  }

  setPart(part:string){
    this.tipoItem = part;
  }

  obsProgresoSend(): Observable<any>{
    return this.progresoSend.asObservable();
  }

  obsProgresoReceived(): Observable<any>{
    return this.progresoReceived.asObservable();
  }

  async test(){
    
    let httpHeaders = new HttpHeaders({
       'Access-Control-Allow-Origin':'*',
       'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
       'Access-Control-Allow-Headers': 'Access-Control-Allow-Methods, Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers',
       'Content-Type' : 'application/json',
      //  'Authorization' : 'Bearer '+this.wordpressService.getToken()
     });      
     let options = {
       headers: httpHeaders
     };     
     
     let woocommerce:any =  await this.comerciosService.getWoocommerceValue().toPromise()
     console.log(woocommerce)
    this.apiUrl = woocommerce.url+this.woocommercePart+"system_status?consumer_key="+woocommerce.consumerKey+"&consumer_secret="+woocommerce.consumerSecret
    return this.http.get(this.apiUrl,options); 
  }

  
  async getAll(){
    let httpHeaders = new HttpHeaders({
    //   'Access-Control-Allow-Origin':'*',
    //   'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
    //   'Access-Control-Allow-Headers': 'Access-Control-Allow-Methods, Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers',
       'Content-Type' : 'application/json',
      //  'Authorization' : 'Bearer '+this.wordpressService.getToken()
     });      
     let options = {
       headers: httpHeaders
     };     
     console.log("test")
    let woocommerce:any =  await this.comerciosService.getWoocommerceValue().toPromise()
    console.log(woocommerce)
    this.apiUrl = woocommerce.url+this.woocommercePart+this.tipoItem+"?consumer_key="+woocommerce.consumerKey+"&consumer_secret="+woocommerce.consumerSecret
    return this.http.get(this.apiUrl,options).toPromise(); 
  }

  async getOne(id){
    let woocommerce:any =  await this.comerciosService.getWoocommerceValue().toPromise()
    console.log(woocommerce)
    this.apiUrl = woocommerce.url+this.woocommercePart+this.tipoItem+"/"+id+"?consumer_key="+woocommerce.consumerKey+"&consumer_secret="+woocommerce.consumerSecret

    let httpHeaders = new HttpHeaders({
    //  'Access-Control-Allow-Origin':'*',
    //  'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
    //  'Access-Control-Allow-Headers': 'Access-Control-Allow-Methods, Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers',
      'Content-Type' : 'application/json',
      // 'Authorization' : 'Bearer '+this.wordpressService.getToken()
    });      
    let options = {
      headers: httpHeaders
    };  
    return this.http.get(this.apiUrl,options).toPromise(); 
  }

  async postOne(data){    
    let woocommerce:any =  await this.comerciosService.getWoocommerceValue().toPromise()
    console.log(woocommerce)
    this.apiUrl = woocommerce.url+this.woocommercePart+this.tipoItem+"?consumer_key="+woocommerce.consumerKey+"&consumer_secret="+woocommerce.consumerSecret

    let httpHeaders = new HttpHeaders({
     // 'Access-Control-Allow-Origin':'*',
    //  'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
    //  'Access-Control-Allow-Headers': 'Access-Control-Allow-Methods, Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers',
      'Content-Type' : 'application/json',
      // 'Authorization' : 'Bearer '+this.wordpressService.getToken()
    });      
    let options = {
      headers: httpHeaders
    };     

    return this.http.post(this.apiUrl,data,options); 
  }

  async updateOne(id, data){
    let woocommerce:any =  await this.comerciosService.getWoocommerceValue().toPromise()
    console.log(woocommerce)
    this.apiUrl = woocommerce.url+this.woocommercePart+this.tipoItem+"/"+id+"?consumer_key="+woocommerce.consumerKey+"&consumer_secret="+woocommerce.consumerSecret

    let httpHeaders = new HttpHeaders({
      // 'Access-Control-Allow-Origin':'*',
     //  'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
     //  'Access-Control-Allow-Headers': 'Access-Control-Allow-Methods, Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers',
       'Content-Type' : 'application/json',
      //  'Authorization' : 'Bearer '+this.wordpressService.getToken()
     });      
     let options = {
       headers: httpHeaders
     };     
    return this.http.put(this.apiUrl,data,options); 
  }

  async deleteOne(id){

    let httpHeaders = new HttpHeaders({
      // 'Access-Control-Allow-Origin':'*',
     //  'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
     //  'Access-Control-Allow-Headers': 'Access-Control-Allow-Methods, Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers',
       'Content-Type' : 'application/json',
      //  'Authorization' : 'Bearer '+this.wordpressService.getToken()
     });      
     let options = {
       headers: httpHeaders
     };     

     let woocommerce:any =  await this.comerciosService.getWoocommerceValue().toPromise()
     console.log(woocommerce)
    this.apiUrl = woocommerce.url+this.woocommercePart+this.tipoItem+"/"+id+"?consumer_key="+woocommerce.consumerKey+"&consumer_secret="+woocommerce.consumerSecret

    return this.http.delete(this.apiUrl,options); 
  }

  async updateStock(item:Item){

    if(item.woocommerce.id){
      let data = {
        stock: item.stock
      }  
      let woocommerce:any =  await this.comerciosService.getWoocommerceValue().toPromise()
      console.log(woocommerce)
      this.apiUrl = woocommerce.url+this.woocommercePart+this.tipoItem+"/"+item.id+"?consumer_key="+woocommerce.consumerKey+"&consumer_secret="+woocommerce.consumerSecret

      let httpHeaders = new HttpHeaders({
        'Content-Type' : 'application/json'
      });     
      let options = {
        headers: httpHeaders
      };     
      return this.http.put(this.apiUrl,data,options); 
   } 

  }

  convertWCtoFirebase(productoWC){


    let prod = new Item()
    prod.nombre = productoWC.name
    prod.precio = productoWC.regular_price
    prod.descripcion = productoWC.description
    prod.promocion = productoWC.price
    prod.barcode = productoWC.sku

    prod.updatedAt = new Date()
    
    if(productoWC.manage_stock)
      prod.stock = productoWC.stock_quantity   
    
    return prod;
  }

  async convertFirebasetoWC(item:Item){

   

    let wcProducto = new WCProduct();   
    wcProducto.name = item.nombre;
    wcProducto.regular_price = item.precio.toString();
    wcProducto.description = item.descripcion;
    wcProducto.price = item.promocion.toString();
    wcProducto.sku = item.barcode;   
    
    if(this.comercio.config.stock)
      wcProducto.manage_stock = true;
    else
      wcProducto.manage_stock = false;
      
    wcProducto.stock_quantity = item.stock.toString();
    wcProducto.images = []; 

    wcProducto.categories = []
    for(let cat of item.categorias){
                
      if(cat.woocommerce && cat.woocommerce.id){
          let categorie = {
              id:cat.woocommerce.id,
              name:cat.nombre
          }
          wcProducto.categories.push(categorie)
      }
      else{
          console.log("Categoria no sincronizada con woocommerce!!!");
      }
      
        
    }

    for(const img of item.imagenes){
        wcProducto.images.push({"src":img.url})
    }
    return wcProducto;

  }


  
  async crearProductoInWC(p:Item){  
   
    
      let producto = new Item()
      producto.asignarValores(p) //esto para que cargue las variables a los productos viejos aunque sea vacias
      console.log("creando en wc el producto id:"+producto.id)
      let wcProducto = await this.convertFirebasetoWC(producto);   
      
      wcProducto["meta_data"] = [{

      }]
      

      console.log("creando")
      this.incrementarEnvio();

      

      try{
        const data = JSON.parse(JSON.stringify(wcProducto));
        let resp:any = await this.postOne(data)
        this.incrementarRespuesta();

        p.woocommerce ={
          id:resp.id,
          lastUpdate:new Date(),
          sincronizado:true
        }     

        this.productosServices.update(p).then(data=>{
          console.log("LastUpdate de Woocommerce guardado")
        })
      }
      catch(err){
        console.log(err)
      }   
  }

  async actualizarProductoInWC(producto:Item){
    //busco el producto por id de woocommerce elimino todas las imágenes del mismo, elimino el producto. cargo el producto de nuevo
    
      this.incrementarEnvio();
      
     
      console.log("actualizando id:"+producto.woocommerce.id)

      try{
        await this.getOne(producto.woocommerce.id)
        let wcProducto = await this.convertFirebasetoWC(producto);
        wcProducto.id = producto.woocommerce.id
      
        
        try{
          await this.updateOne(wcProducto.id,wcProducto)
          console.log("Porducto actualizado en woocommerce");
          producto.woocommerce.lastUpdate = new Date();


        }
        catch(err){
          console.log(err)
         
        }
      
      }
      catch(err){
        console.log(err)
        if(err.error.code == "woocommerce_rest_product_invalid_id"){
          console.log("El id del producto no se encuentra")
          await this.crearProductoInWC(producto)
        }
        if(err.error.code == "woocommerce_rest_cannot_edit"){
          console.log("No tienes permiso para editar")
        }
      }    
    
  }

  public syncFirebaseToWC(){
    this.productosServices.list().subscribe(productos =>{
      productos.forEach(element => {
        let values = new WoocommerceSyncData()
        values.sincronizado = true;
        values.changeDate = new Date()
        this.productosServices.updateWoocommerceValues(element.id,values)
      });
    })
  }

  public syncFirebaseToWC_OLD():Promise<any>{

    return new Promise((resolve,reject)=>{

      this.psend = 0;
      this.preceived = 0;

      console.log("sincronizando...")

      let subsItemsProd = this.productosServices.list().subscribe(async productos => { 
        subsItemsProd.unsubscribe();
        this.total = productos.length;

        for(let p of productos){        
        
          let prod = new Item()
          prod.asignarValores(p) //esto para que cargue las variables a los productos viejos aunque sea vacias

          if(p.woocommerce.id == ""){       
            await this.crearProductoInWC(prod);        
          }
          else{ 
    
            if(p.woocommerce.id){ 
    
              try{
                console.log(prod.nombre)
                let productos = await this.getOne(p.woocommerce.id)

                

                prod.updatedAt = prod.updatedAt.toDate().setSeconds(prod.updatedAt.toDate().getSeconds());
                p.woocommerce.lastUpdate = p.woocommerce.lastUpdate.toDate().setSeconds(p.woocommerce.lastUpdate.toDate().getSeconds() + 100);
      
                console.log(p.woocommerce.lastUpdate)
                console.log(prod.updatedAt)

                if(prod.updatedAt > p.woocommerce.lastUpdate){                     
                  await this.actualizarProductoInWC(prod);               
                } 
                else{
                  console.log("Producto existe y está actualizado:")                
                }  
              }
              catch(err){
                console.log(err)
                if(err.error.code == "woocommerce_rest_term_invalid"){
                  await this.crearProductoInWC(prod)  
                }
                if(err.error.code == "woocommerce_rest_product_invalid_id"){
                  await this.crearProductoInWC(prod)                    
                }
                if(err.error.code == "woocommerce_rest_cannot_edit"){                  
                  console.log("No tienes permiso para editar")
                }
              }                            
            }
            else{          
              await this.crearProductoInWC(prod)
            }
          }            
        }
        resolve(true)
        
      },err=>{
        reject()
      })


    })


    
    
  }



  private incrementarEnvio(){
    this.psend++;
    let progreso = this.psend/this.total
    this.progresoSend.next(progreso);
  }

  private incrementarRespuesta(){   
    this.preceived++;
    let progreso = this.preceived/this.total
    console.log(this.total+" "+this.preceived+" "+progreso+" "+this.progresoReceived.value)
    this.progresoReceived.next(progreso);
  }



}
