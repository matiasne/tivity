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
import { FormCardPaymentPage } from '../form-card-payment/form-card-payment.page';

@Component({
  selector: 'app-form-cobrar-pedido', 
  templateUrl: './form-cobrar-pedido.page.html',
  styleUrls: ['./form-cobrar-pedido.page.scss'],
})
export class FormCobrarPedidoPage implements OnInit {

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

  public pagoTotal = 0;
  public vuelto = 0;

  public ctasCorrientes =[];

  public metodoTexto =""; 
  public ctaCorrienteSelecccionada:any;
  public ctaCorrienteSelecccionadaId ="";
 
  public comentarios = [];

  public habilitadoFacturar = false;
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
    public afipService:AfipServiceService,
    private loadingService:LoadingService,
    private alertController:AlertController
  ) { 

  }

  ngOnInit() {

    if(this.comercio.afip.token !=""){
      this.habilitadoFacturar = true;
      this.facturar = (localStorage.getItem('facturar') === "true")
    }
    else{
      this.habilitadoFacturar = false;
    }
    console.log(this.facturar)

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


  setMontos(){

    if(this.metodoPagoSeleccionado.includes("efectivo")){
      this.pedido.montoPagoEfectivo = this.getTotal();
    }
    else if(this.metodoPagoSeleccionado.includes("debito")){
      this.pedido.montoPagoDebito = this.getTotal();
    }
    else if(this.metodoPagoSeleccionado.includes("credito")){
      this.pedido.montoPagoCredito = this.getTotal();
    }
    else if(this.metodoPagoSeleccionado.includes("ctaCorriente")){
      this.pedido.montoPagoCtaCorriente = this.getTotal();
    }
    else if(this.metodoPagoSeleccionado.includes("mercadopago")){
      this.pedido.montoPagoMercadoPago = this.getTotal();
    }
  }

  setPagoTotal(){
    this.pagoTotal = this.pedido.montoPagoEfectivo + this.pedido.montoPagoDebito + this.pedido.montoPagoCredito + this.pedido.montoPagoCtaCorriente +this.pedido.montoPagoMercadoPago
    this.vuelto = this.getTotal() - this.pagoTotal;
  }

  async ValidarMercadoPago(){

    if(this.metodoPagoSeleccionado.includes('mercadopago')){
      let modal = await this.modalController.create({
        id:'modal-mp',
        component: FormCardPaymentPage,
        componentProps: {
          pedido:this.pedido,
        }
      });

      modal.onDidDismiss()
        .then((retorno) => {
          if(retorno.data){
           if(retorno.data == "approved"){
             this.cobrar()
           }
          }
                  
      });
      
      return await modal.present();
    }
    else{
      this.cobrar()
    }
  

    
  }
 
  async cobrar(){

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
    if(this.metodoPagoSeleccionado.includes("efectivo") && this.pedido.montoPagoEfectivo === 0 || this.pedido.montoPagoEfectivo === null){
        this.toastServices.alert("Por favor ingrese el monto en efectivo","");
        return;     
    }  


    if(this.metodoPagoSeleccionado.includes("debito") && this.pedido.montoPagoDebito === 0 || this.pedido.montoPagoDebito === null){
      this.toastServices.alert("Por favor ingrese el monto en débito","");
      return;
    } 

    if(this.metodoPagoSeleccionado.includes("credito") && this.pedido.montoPagoCredito === 0 || this.pedido.montoPagoCredito === null){
      this.toastServices.alert("Por favor ingrese el monto en crédito","");
      return;
    }  
    
    if(this.metodoPagoSeleccionado.includes("ctaCorriente") && this.pedido.montoPagoCtaCorriente === 0 || this.pedido.montoPagoCredito === null){
      this.toastServices.alert("Por favor ingrese el monto en cuenta corriente","");
      return;
    }  

    if(this.metodoPagoSeleccionado.includes("mercadopago") && this.pedido.montoPagoMercadoPago === 0 || this.pedido.montoPagoMercadoPago === null){
      this.toastServices.alert("Por favor ingrese el monto a cobrar con Mercado Pago","");
      return;
    }  

    try{

      if(this.facturar){
        this.loadingService.presentLoadingText("Creando factura electrónica")
        let res:any = await this.afipService.facturarPedido(this.pedido.id)
        console.log(res);
        this.pedido.afipFactura = res.afipFactura //para poder imprimirlo
        this.loadingService.dismissLoading();
      } 

      this.cajaSeleccionada = this.cajas[this.cajaSeleccionadaIndex];
      console.log(this.cajaSeleccionada)

      if(this.pedido.items.length > 0){      
        this.pedido.items.forEach(p =>{    
          let deltaStock = 0;
          if(p.valorPor)
            deltaStock =  - (Number(p.cantidad) * Number(p.valorPor));
          else
            deltaStock = - Number(p.cantidad);          
          this.productosService.updateStock(deltaStock,p.id)
        })
    
        
        
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

              
              this.movimientosService.agregarMovimientoCaja(this.cajaSeleccionada.id,this.pedido.clienteId,this.enumTipoMovimientoCaja.pago,"",metodo, monto,
              "Venta de productos")

            }
            
              
          })
            
          if(this.metodoPagoSeleccionado.includes("ctaCorriente")){

            if(this.metodoPagoSeleccionado.includes("ctaCorriente")){     

              this.movimientosService.agregarMovimientoEnCtaCorriente(
                this.ctaCorrienteSelecccionadaId,
                this.pedido.clienteId,
                "",
                "",
                "",
                - this.pedido.montoPagoCtaCorriente,
                "Cobro de productos"
              )
            } 
           

          }
        }
      }         

      this.carritoService.vaciar()    

      this.pedido.statusCobro = this.cEstado.cobrado;
      this.pedido.metodoPago = this.metodoPagoSeleccionado; 
      this.pedido.cajaUtilizada = this.cajaSeleccionada.id;  
      this.pedido.total = this.getTotal();    

      if(this.pedido.id == ""){
        this.pedido.direccion = JSON.parse(JSON.stringify(this.pedido.direccion));
        this.pedidosService.add(this.pedido).then(data=>{
          console.log("agregado pedido")
          console.log(data)
        })
      }
      else{        
        //solamente actualizar estos valores!!!! así no pisa los que actualiza el backend
        let update = {
          afipFactura: this.pedido.afipFactura,
          statusCobro : this.cEstado.cobrado,
          metodoPago : this.metodoPagoSeleccionado, 
          montoPagoEfectivo:this.pedido.montoPagoEfectivo,
          montoPagoDebito:this.pedido.montoPagoDebito,
          montoPagoCredito:this.pedido.montoPagoCredito,
          montoPagoMercadoPago:this.pedido.montoPagoMercadoPago,
          montoPagoCtaCorriente:this.pedido.montoPagoCtaCorriente,
          cajaUtilizada : this.cajaSeleccionada.id,  
          total : this.getTotal()    
        }
        this.pedido.direccion = JSON.parse(JSON.stringify(this.pedido.direccion));
        this.pedidosService.setMerge(this.pedido.id,update).then(data=>{
          console.log(data)
        }) 
      }    

      this.imprimir()           
        
      this.modalNotificacion.success("Cobrado","El pedido ha sido cobrado.")
      this.modalController.dismiss("cobrado",'','form-cobrar')   
      
    }catch(err){
      console.log(err);
      this.mostrarError(err.error.message)
      
      this.loadingService.dismissLoading();
    }
    
   
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
      
      let cantidadMetodos = 0;
  
     
      
      if(this.cajas[this.cajaSeleccionadaIndex].debito){
        setear = "debito"; 
        this.metodoTexto = "Solo Débito";     
        cantidadMetodos++;
      }
  
      if(this.cajas[this.cajaSeleccionadaIndex].credito){
        setear = "credito";
        this.metodoTexto = "Solo Crédito";    
        cantidadMetodos++;
      }    
  
      if(this.cajas[this.cajaSeleccionadaIndex].efectivo){
        setear = "efectivo";
        this.metodoTexto = "Solo Efectivo";    
        cantidadMetodos++;
      }    
       
      this.metodoPagoSeleccionado =[];
      if(cantidadMetodos == 1){    
        this.metodoPagoSeleccionado.push(setear);    
      } 
  }


  public getTotal(){ 
    this.total =  this.pedidosService.getTotal(this.pedido) 
    return this.total
  }

  async imprimir(){
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
