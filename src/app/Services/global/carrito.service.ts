import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthenticationService } from '../authentication.service';
import { Item } from 'src/app/models/item';
import { Descuento, EnumTipoDescuento } from 'src/app/models/descuento';
import { EnumTipoRecargo, Recargo } from 'src/app/models/recargo';
import { PedidoService } from '../pedido.service';
import { Pedido } from 'src/app/models/pedido';
import { Mesa } from 'src/app/models/mesa';
import { Cliente } from 'src/app/models/cliente';
import { ModalNotificacionService } from '../modal-notificacion.service';
import { ComentariosService } from '../comentarios.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { Comentario } from 'src/app/models/comentario';
import { ImpresoraService } from '../impresora/impresora.service';
import { ComerciosService } from '../comercios.service';
import { ItemPedido } from 'src/app/models/itemPedido';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  public carrito:Pedido;
  public comentario = "";  
  public actualCarritoSubject = new BehaviorSubject<any>("");

  constructor(
    private authenticationService:AuthenticationService,
    private pedidosService:PedidoService,
    private modalNotificacion:ModalNotificacionService,
    private comentariosService:ComentariosService,
    private firestore: AngularFirestore,
    private comerciosService:ComerciosService,
  ) { 
    this.carrito = new Pedido();
    this.actualCarritoSubject.next(this.carrito);
  }

  public getActualCarritoSubs(){ 
    return this.actualCarritoSubject.asObservable();
  }

  public agregarItem(item:Item){
    let itemCarrito = new ItemPedido()
    itemCarrito.asignarValores(item)         
    item.enCarrito += itemCarrito.cantidad;
    const p = JSON.parse(JSON.stringify(item));

    p.gruposOpciones =[];
    this.carrito.items.push(p);
    this.carrito.on = true;    

    this.modalNotificacion.success("Agregado",itemCarrito.cantidad+' '+itemCarrito.unidad+' de '+itemCarrito.nombre)
    this.actualCarritoSubject.next(this.carrito);    
  }

  public agregarDescuento(descuento:Descuento){

    const d = JSON.parse(JSON.stringify(descuento));

    this.carrito.descuentos.push(d)
    this.carrito.on = true;    
    this.actualCarritoSubject.next(this.carrito);    
  }

  public agregarRecargo(recargo:Recargo){

    const r = JSON.parse(JSON.stringify(recargo));

    this.carrito.recargos.push(r)
    this.carrito.on = true;    
    this.actualCarritoSubject.next(this.carrito);    
  }

  public eliminarDescuento(index){
    this.carrito.descuentos.splice(index,1)
    this.carrito.on = true;    
    this.actualCarritoSubject.next(this.carrito);    
  }

  public eliminarRecargo(index){
    this.carrito.recargos.splice(index,1)
    this.carrito.on = true;    
    this.actualCarritoSubject.next(this.carrito);    
  }

  public eliminarProducto(index){
    this.carrito.items.splice(index,1);
    if(this.carrito.items.length > 0)
      this.carrito.on = true;    
    else{
      this.carrito.on = false;
    }
    this.actualCarritoSubject.next(this.carrito);    
  }


  setearCliente(cliente:Cliente){
    this.carrito.clienteId = cliente.id
    this.carrito.clienteNombre = cliente.nombre
    this.carrito.clienteEmail = cliente.email
    this.carrito.clienteDocTipo = cliente.documentoTipo
    this.carrito.clienteDoc = cliente.documento
    this.carrito.clientePersonaJuridica = cliente.personaJuridica

    this.carrito.on = true;    
    this.actualCarritoSubject.next(this.carrito); 
  }

  setearMesa(mesa:Mesa){
    this.carrito.mesaId = mesa.id;
    this.carrito.mesaNombre = mesa.nombre
    this.actualCarritoSubject.next(this.carrito);
  }

  agregarComentario(){

  }

  

  vaciar(){ 
      this.carrito = new Pedido()
      this.carrito.setCreador(this.authenticationService.getUser())
      this.carrito.on = false;    
      this.actualCarritoSubject.next(this.carrito);       
  }

  getTotal(){
    return this.pedidosService.getTotal(this.carrito)
  }

  async crearPedido(){

    let c:any = new Pedido()  //NO borrar!!! importante para cuando está en modo offline!!!
    c.setCreador(this.authenticationService.getUser())
    Object.assign(c, this.carrito);
    this.vaciar(); 

    this.modalNotificacion.success("Cargado","El pedido ha sido cargado a la lista.")
    c.id = this.firestore.createId();
    c.comanda.numero = await this.comerciosService.obtenerActualizarNumeroPedido()
    c.total = this.getTotal()

    c.primerMensaje = this.comentario
    

    if(this.comentario != ""){ 
      this.comentariosService.setearPath("pedidos",c.id);      
      let comentario = new Comentario();
      comentario.text =this.comentario;
      comentario.senderId=this.authenticationService.getUID();
      comentario.senderEmail =this.authenticationService.getEmail();
      this.comentariosService.add(comentario).then(data=>{
        console.log("comentario agregado")
      })
      this.comentario = "";
    }   

     

    c.direccion = JSON.parse(JSON.stringify(c.direccion));
    
    console.log(c)

    this.pedidosService.set(c.id,c).then((data:any)=>{       
      console.log("!!!!!!"+data.fromCache)   
    });  
    
  }

  obtenerNumeroPedido(){
    
  }
}
