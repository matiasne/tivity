import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  AlertController, ModalController, NavController } from '@ionic/angular';
import { AngularFirestore } from 'angularfire2/firestore';
import { Caja } from '../models/caja';
import { Comercio } from '../models/comercio';
import { EnumTipoDescuento } from '../models/descuento';
import { Mesa } from '../models/mesa';
import { EnumTipoMovimientoCaja, MovimientoCaja } from '../models/movimientoCaja';
import { MovimientoCtaCorriente } from '../models/movimientoCtaCorriente';
import { EnumEstadoCocina, EnumEstadoCobro, Pedido } from '../models/pedido';
import { AfipServiceService } from '../Services/afip/afip-service.service';
import { AuthenticationService } from '../Services/authentication.service';
import { CajasService } from '../Services/cajas.service';
import { ClientesService } from '../Services/clientes.service';
import { ComerciosService } from '../Services/comercios.service';
import { CtaCorrientesService } from '../Services/cta-corrientes.service';
import { CarritoService } from '../Services/global/carrito.service';
import { ImpresoraService } from '../Services/impresora.service';
import { LoadingService } from '../Services/loading.service';
import { ModalNotificacionService } from '../Services/modal-notificacion.service';
import { MovimientosService } from '../Services/movimientos.service';
import { PedidoService } from '../Services/pedido.service';
import { ProductosService } from '../Services/productos.service';
import { ToastService } from '../Services/toast.service';

@Component({
  selector: 'app-form-devolver-pedido',
  templateUrl: './form-devolver-pedido.page.html',
  styleUrls: ['./form-devolver-pedido.page.scss'],
})
export class FormDevolverPedidoPage implements OnInit {

  private enumTipoMovimientoCaja = EnumTipoMovimientoCaja
  public pEstado = EnumEstadoCocina;
  public cEstado = EnumEstadoCobro
  public enumTipo = EnumTipoDescuento

  @Input() pedido:Pedido;
  @Input() subPedidos = []
  @Input() comercio:Comercio;
  
  public cajas = []
  public cajaSeleccionadaIndex=0;
  public cajaSeleccionada:Caja;
  public metodoPagoSeleccionado ="";
  public cantidadMetodos=0;

  public ctasCorrientes =[];

  public metodoTexto =""; 
  public ctaCorrienteSelecccionada:any;
  public ctaCorrienteSelecccionadaId ="";
 
  public comentarios = [];

  public facturar = false

  public total = 0;

  constructor(
    public comerciosService:ComerciosService,
    public cajasService:CajasService,
    private toastServices:ToastService,
    private router:Router,
    private modalController:ModalController,
    private authenticationService:AuthenticationService,
    private firestore: AngularFirestore,
    private movimientosService:MovimientosService,
    private pedidosService:PedidoService,
    private productosService:ProductosService,
    private impresoraService:ImpresoraService,
    private carritoService:CarritoService,
    private modalNotificacion:ModalNotificacionService,
    private ctasCorrientesService:CtaCorrientesService,
    private afipService:AfipServiceService,
    private loadingService:LoadingService,
    private alertController:AlertController
  ) { }

  ngOnInit() {

    if(localStorage.getItem('facturar') == "true")
      this.facturar = true


    console.log(this.pedido)
    this.cajasService.list().subscribe((cajas:any)=>{      
      for(let i=0;i <cajas.length;i++){
        if(cajas[i].estado == "abierta"){ 
          this.cajas.push(cajas[i]);
        }   
      }      
      console.log(this.cajas);
      if(this.cajas.length == 0){
        this.toastServices.alert("Debes tener al menos una caja abierta","");
        this.modalController.dismiss();
        this.router.navigate(['/list-cajas']);
      }
      else{
        this.setSavedCaja();
      }       
    });

    if(this.pedido.clienteId != ""){

      this.ctasCorrientesService.getByCliente(this.pedido.clienteId).subscribe(snapshot =>{
        snapshot.forEach(snap =>{
          let cta:any = snap.payload.doc.data();
          cta.id = snap.payload.doc.id;
          this.ctasCorrientes.push(cta);
          console.log(cta)
        })
      })
    }
  }

  updateFacturar(event){
    console.log(event.target.checked)
    localStorage.setItem('facturar',event.target.checked)
  }

  async reembolsar(){

    if(this.cajas.length == 0){
      this.toastServices.alert("Debe abrir una caja antes de continuar","De este modo podrá tener un registro de los pagos");
      return;
    }
    
    if(this.metodoPagoSeleccionado == ""){
      this.toastServices.alert("Por favor seleccione un método de pago antes de continuar","De este modo podrá tener un registro de los pagos");
      return;
    }
    
    if(this.metodoPagoSeleccionado == "ctaCorriente"){
      if(this.ctaCorrienteSelecccionadaId == ""){
        this.toastServices.alert("Por favor seleccione una cuenta corriente antes de continuar","");
        return;
      }
    }  

    
    this.loadingService.presentLoadingText("Creando factura electrónica")

    try{

      if(this.facturar){
        let res = await this.afipService.notaCreditoPedido(this.pedido.id)
        console.log(res);
        this.loadingService.dismissLoading();
      }

      this.cajaSeleccionada = this.cajas[this.cajaSeleccionadaIndex];
      console.log(this.cajaSeleccionada)

      if(this.pedido.productos.length > 0){

        let productosId = [];
        this.pedido.productos.forEach(p =>{    
          delete p.keywords;     
          let deltaStock = 0;
          if(p.valorPor)
            deltaStock =  + (Number(p.cantidad) * Number(p.valorPor));
          else
            deltaStock = + Number(p.cantidad);
          
          this.productosService.updateStock(deltaStock,p.id)
          productosId.push(p.id);        
        })
      }
    
        
        
      if(this.comercio.config.movimientosCajas){

        if(this.metodoPagoSeleccionado != "ctaCorriente"){
          
          var pago = new MovimientoCaja(this.authenticationService.getUID(), this.authenticationService.getNombre());      
          pago.id = this.firestore.createId();
          pago.tipo = this.enumTipoMovimientoCaja.pago;
          pago.clienteId = this.pedido.clienteId;
          pago.cajaId = this.cajaSeleccionada.id;
          pago.metodoPago = this.metodoPagoSeleccionado;
          pago.monto= - this.getTotal();
          pago.vendedorNombre = this.authenticationService.getNombre();         
          pago.motivo="Devolucion de productos";

          this.movimientosService.setearPath(this.cajaSeleccionada.id)   
          this.movimientosService.add(pago).then(data=>{
            console.log(data)
          });
        }
        else{
          var deposito = new MovimientoCtaCorriente(this.authenticationService.getUID(), this.authenticationService.getNombre());
          deposito.id = this.firestore.createId();
          deposito.clienteId=this.pedido.clienteId;
          deposito.ctaCorrienteId=this.ctaCorrienteSelecccionadaId;
          deposito.motivo="Devolucion de productos";
          deposito.monto = Number(this.getTotal());
          deposito.vendedorNombre = this.authenticationService.getNombre();
          console.log(deposito.vendedorNombre);
          this.movimientosService.crearMovimientoCtaCorriente(deposito);
        }           
      }  
      
      this.pedido.statusCobro = this.cEstado.reembolsado;
      this.pedido.metodoDevolucion = this.metodoPagoSeleccionado; 
      this.pedido.cajaUtilizada = this.cajaSeleccionada.id;  
      this.pedido.total = this.getTotal();    

      if(this.subPedidos.length > 0){ //si es un array de pedidos porque viene de cierre de mesa      
          this.subPedidos.forEach(pedido => {       
          pedido.statusCobro = this.cEstado.reembolsado;
          pedido.metodoDevolucion = this.metodoPagoSeleccionado;  
          this.actualizarPedido()
        });      
      }
      else if(this.pedido.id == ""){
        this.pedido.direccion = JSON.parse(JSON.stringify(this.pedido.direccion));
        this.pedidosService.add(this.pedido).then(data=>{
          console.log("agregado pedido")
          console.log(data)
        })
      }
      else{        
        this.actualizarPedido()
      }
      console.log(this.pedido);
      this.actualizarMontosCaja()


      let impresora = this.impresoraService.obtenerImpresora();
      if(impresora.pedidosFinalizar){
        this.imprimir()
      }
      
        
      this.modalNotificacion.success("Devuelto","El pedido ha sido cobrado.")
      this.modalController.dismiss("cobrado")   
      
    }catch(err){
      console.log(err);
      this.mostrarError(err.error.message)
      
      this.loadingService.dismissLoading();
    }
    
   
  }  

  actualizarMontosCaja(){
    if(this.metodoPagoSeleccionado == "efectivo"){
      this.cajaSeleccionada.totalEfectivo = Number(this.cajaSeleccionada.totalEfectivo)- Number(this.getTotal());
    }
    if(this.metodoPagoSeleccionado == "credito"){
      this.cajaSeleccionada.totalCredito = Number(this.cajaSeleccionada.totalCredito)- Number(this.getTotal());
    }
    if(this.metodoPagoSeleccionado == "debito"){
      this.cajaSeleccionada.totalDebito = Number(this.cajaSeleccionada.totalDebito) - Number(this.getTotal());
    }

    const param1 = JSON.parse(JSON.stringify(this.cajaSeleccionada));
    this.actualizarPedido()
  }

  setSavedCaja(){
    this.cajaSeleccionadaIndex = Number(localStorage.getItem('cajaSeleccionadaIndex'));
    if(!this.cajaSeleccionadaIndex){
      this.cajaSeleccionadaIndex = 0;
    }
    this.setearCaja();
  }

  setearCaja(){
    
    localStorage.setItem('cajaSeleccionadaIndex',this.cajaSeleccionadaIndex.toString());

    
      this.cajaSeleccionada = this.cajas[this.cajaSeleccionadaIndex];
 
      var setear = "";  
      
      this.cantidadMetodos = 0;
  
     
      
      if(this.cajas[this.cajaSeleccionadaIndex].debito){
        setear = "debito"; 
        this.metodoTexto = "Solo Débito";     
        this.cantidadMetodos++;
      }
  
      if(this.cajas[this.cajaSeleccionadaIndex].credito){
        setear = "credito";
        this.metodoTexto = "Solo Crédito";    
        this.cantidadMetodos++;
      }    
  
      if(this.cajas[this.cajaSeleccionadaIndex].efectivo){
        setear = "efectivo";
        this.metodoTexto = "Solo Efectivo";    
        this.cantidadMetodos++;
      }    
       
      this.metodoPagoSeleccionado ="";
      if(this.cantidadMetodos == 1){    
        this.metodoPagoSeleccionado = setear;    
      } 
  }

  actualizarPedido(){
    if(this.pedido.id){
      this.pedido.direccion = JSON.parse(JSON.stringify(this.pedido.direccion));
      this.pedidosService.setMerge(this.pedido.id,this.pedido).then(data=>{
        console.log(data)
      }) 
    }
  }  

  public getTotal(){ 
    this.total =  this.pedidosService.getTotal(this.pedido) 
    console.log(this.total)
    return this.total
  }

  async imprimir(){
    alert("falta hacer")
    await this.impresoraService.impresionTicket(this.pedido);    
  }

  cancelar(){
    this.modalController.dismiss();
  }


  async mostrarError(error){
    const alert = await this.alertController.create({
      header: 'Error al generar factura electrónica',
      message: error,
      buttons: [
        {
          text: 'OK',
          handler: () => {           
            this.modalController.dismiss()  
          }
        }
      ]
    });
    await alert.present();   
  }

}
