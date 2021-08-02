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
import { EnumEstadoCobro, Pedido } from '../models/pedido';
import { EnumEstadoCocina } from 'src/app/models/item';
import { AfipServiceService } from '../Services/afip/afip-service.service';
import { AuthenticationService } from '../Services/authentication.service';
import { CajasService } from '../Services/cajas.service';
import { ClientesService } from '../Services/clientes.service';
import { ComerciosService } from '../Services/comercios.service';
import { CtaCorrientesService } from '../Services/cta-corrientes.service';
import { CarritoService } from '../Services/global/carrito.service';
import { ImpresoraService } from '../Services/impresora/impresora.service';
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
  @Input() comercio:Comercio;
  
  public cajas = []
  public cajaSeleccionadaIndex=0;
  public cajaSeleccionada:Caja;
  public metodoPagoSeleccionado =[];
  public cantidadMetodos=0;

  public ctasCorrientes =[];

  public metodoTexto =""; 
  public ctaCorrienteSelecccionada:any;
  public ctaCorrienteSelecccionadaId ="";
 
  public comentarios = [];

  public facturar = false

  public totalReembolso = 0;

  

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

    this.calcularReembolso()
  }

  updateFacturar(event){
    console.log(event.target.checked)
    localStorage.setItem('facturar',event.target.checked)
  }

  async reembolsar(){

    let seleccionReembolsado = false;
    this.pedido.items.forEach(p =>{    
      if(p.reembolsar){
        seleccionReembolsado = true;
      }
    })
    if(!seleccionReembolsado){
      this.toastServices.alert("Sebe seleccionar al menos un producto para reembolsar","");
      return;
    }

    if(this.cajas.length == 0){
      this.toastServices.alert("Debe abrir una caja antes de continuar","De este modo podrá tener un registro de los pagos");
      return;
    }
    
    if(this.metodoPagoSeleccionado.length == 0){
      this.toastServices.alert("Por favor seleccione un método de pago antes de continuar","De este modo podrá tener un registro de los pagos");
      return;
    }
    
    if(this.metodoPagoSeleccionado.includes("ctaCorriente")){
      if(this.ctaCorrienteSelecccionadaId == ""){
        this.toastServices.alert("Por favor seleccione una cuenta corriente antes de continuar","");
        return;
      }
    }  

    
    this.loadingService.presentLoadingText("Creando factura electrónica")

    try{

      if(this.facturar){
        let res = await this.afipService.notaCreditoPedido(this.pedido.id,this.totalReembolso)
        console.log(res);
        this.loadingService.dismissLoading();
      }

      this.cajaSeleccionada = this.cajas[this.cajaSeleccionadaIndex];
      console.log(this.cajaSeleccionada)

      if(this.pedido.items.length > 0){

        this.pedido.items.forEach(p =>{    
          if(p.reembolsar){ 
            let deltaStock = 0;
            if(p.valorPor)
              deltaStock =  + (Number(p.cantidad) * Number(p.valorPor));
            else
              deltaStock = + Number(p.cantidad);
            
            this.productosService.updateStock(deltaStock,p.id)
          }
                  
        })
      }
    
        
        
      if(this.comercio.config.movimientosCajas){

        
          
          this.metodoPagoSeleccionado.forEach(metodo =>{

            let monto = 0;
            if(metodo === "efectivo"){
              monto = this.pedido.montoPagoEfectivo;
            }
            if(metodo === "debito"){
              monto = this.pedido.montoPagoDebito;
            }
            if(metodo === "credito"){
              monto = this.pedido.montoPagoCredito;
            }
            if(metodo === "mercadopago"){
              monto = this.pedido.montoPagoMercadoPago;
            }

            if(metodo != "ctaCorriente"){
              var pago = new MovimientoCaja(
                this.firestore.createId(),
                this.enumTipoMovimientoCaja.devolucion,
                this.pedido.clienteId,
                this.cajaSeleccionada.id,
                metodo,
                - monto,
                "Reembolso de pedido",
                this.authenticationService.getUID(), 
                this.authenticationService.getNombre());      
              
    
              this.movimientosService.setearPath(this.cajaSeleccionada.id)   
              this.movimientosService.add(pago).then(data=>{
                console.log(data)
              });
            }
            
          })
          
        if(this.metodoPagoSeleccionado.includes("ctaCorriente")){     

            this.movimientosService.agregarMovimientoEnCtaCorriente(
              this.ctaCorrienteSelecccionadaId,
              this.pedido.clienteId,
              "",
              "",
              "",
              this.pedido.montoPagoCtaCorriente,
              "Devolucion de productos"
            )
        }           
      }  
      
      this.pedido.statusCobro = this.cEstado.reembolsado;
      this.pedido.metodoDevolucion = this.metodoPagoSeleccionado; 
      this.pedido.cajaUtilizada = this.cajaSeleccionada.id;  
      this.pedido.total = this.totalReembolso;    

      if(this.pedido.id == ""){
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

      this.imprimir()
      
      
        
      this.modalNotificacion.success("Devuelto","El pedido ha sido cobrado.")
      this.modalController.dismiss("cobrado")   
      
    }catch(err){
      console.log(err);
      this.mostrarError(err.error.message)
      this.pedido.items.forEach(p=>{
        p.reembolsar = false;
      })
      this.loadingService.dismissLoading();
    }
    
   
  }  

  actualizarMontosCaja(){
    if(this.metodoPagoSeleccionado.includes("efectivo")){
      this.cajaSeleccionada.totalEfectivo = Number(this.cajaSeleccionada.totalEfectivo)- Number(this.totalReembolso);
    }
    if(this.metodoPagoSeleccionado.includes("credito")){
      this.cajaSeleccionada.totalCredito = Number(this.cajaSeleccionada.totalCredito)- Number(this.totalReembolso);
    }
    if(this.metodoPagoSeleccionado.includes("debito")){
      this.cajaSeleccionada.totalDebito = Number(this.cajaSeleccionada.totalDebito) - Number(this.totalReembolso);
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
       
      this.metodoPagoSeleccionado =[];
      if(this.cantidadMetodos == 1){    
        this.metodoPagoSeleccionado.push(setear);    
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


  async imprimir(){
    alert("falta hacer")
  
  }

  cancelar(){
    this.pedido.items.forEach(p =>{    
      p.reembolsar = false;   
    })
    this.modalController.dismiss();
  }

  calcularReembolso(){
    this.totalReembolso = 0
    this.pedido.items.forEach(p =>{    
      if(p.reembolsar){
        this.totalReembolso += p.precioTotal   
      }      
    })
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
