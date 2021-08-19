import { Injectable } from '@angular/core';
import { Comercio } from 'src/app/models/comercio';
import { EnumTipoDescuento } from 'src/app/models/descuento';
import { Pedido } from 'src/app/models/pedido';
import { EnumTipoRecargo } from 'src/app/models/recargo';
import { PedidoService } from '../pedido.service';
import { commands } from './printer-commands';
import EscPosEncoder from 'esc-pos-encoder-ionic';
import { ComerciosService } from '../comercios.service';

@Injectable({
  providedIn: 'root'
})
export class EscPosService {

  public largoDeLinea = 32;
  public comandos = commands
  public comercio:Comercio
  
  constructor(
    private pedidosService:PedidoService,
    private comercioService:ComerciosService
  ) { 
    this.comercio = new Comercio();
    this.comercioService.getSelectedCommerce().subscribe(data=>{
      console.log(data);
      this.comercio.asignarValores(data);
    });
  }

  async prueba(usuario){
    var cmds = '\x1B' + "@"; //Initializes the printer (ESC @)
    cmds += "\x1b\x61\x01\x1b\x45\x01\x1b\x2d\x02\x1b\x21\x10\x1b\x21\x20 Comanda \x1b\x2d\x00\x1b\x45\x00"
    cmds += '\x1B' + '\x1B';     
    return cmds;
  }

  async qr(texto){
    const encoder = new EscPosEncoder();
    let result = encoder.qrcode(texto,1,8,'l').encode()
    return result;
  } 


  async comanda(pedido:Pedido){

    var cmds = '\x1B' + "@"; //Initializes the printer (ESC @)
    cmds += "\x1b\x61\x01\x1b\x45\x01\x1b\x2d\x02\x1b\x21\x10\x1b\x21\x20Comanda\x1b\x2d\x00\x1b\x45\x00"
    
    cmds += "\x1b\x61\x00\x1b\x21\x00"
    cmds += "\n";
    cmds += "\n";

    if(pedido.mesaId){
      cmds += "\x1b\x61\x00\x1b\x21\x00 Mesa: "+ pedido.mesaNombre; //text to print
      cmds += "\n";
    }
     

    if(pedido.creadorEmail){
      cmds += "\x1b\x61\x00\x1b\x21\x00 Pedido por: "+ pedido.creadorEmail; //text to print
      cmds += "\n"
    }
     

    if(pedido.clienteNombre){
      cmds += "\x1b\x61\x00\x1b\x21\x00 Para por: "+ pedido.clienteNombre; //text to print
      cmds += "\n"
    }
      

    pedido.items.sort(function(a, b) {
      return Number(a.cocinaId) - Number(b.cocinaId);
    });


    let ultimaCocina = "";
    pedido.items.forEach(producto => { 

      let cocinaActual = producto.cocinaNombre;

      if(cocinaActual != ultimaCocina){
        cmds+='------------------------------'+ "\n";
        cmds += '  '+cocinaActual+':' + "\n";
      }
      
      let cantidad = producto.cantidad+"x";
      let nombre = producto.nombre;
      let total = producto.precioTotal+"$";      

      cmds += cantidad+' '+nombre;
      
      producto.opcionesSeleccionadas.forEach(opcion =>{
        cmds += "\n";
        cmds += '  '+opcion.cantidad+'x '+' '+opcion.nombre        
      })       
      cmds += "\n";

      cmds += producto.descripcion_venta
      cmds += "\n";

      ultimaCocina = producto.cocinaNombre
    });
    cmds += "\n";
    cmds += "\n";
    cmds += "\n";
    cmds += "\n";
    cmds += '\x1B' + '\x1B';     
    return cmds;

  }

  async cancelarComanda(pedido:Pedido){
    
    var cmds = '\x1B' + "@"; //Initializes the printer (ESC @)
    cmds += "\x1b\x61\x01\x1b\x45\x01\x1b\x2d\x02\x1b\x21\x10\x1b\x21\x20Cancelar Comanda!\x1b\x2d\x00\x1b\x45\x00"
    
    cmds += "\x1b\x61\x00\x1b\x21\x00"
    cmds += "\n";
    cmds += "\n";

    if(pedido.mesaId){
      cmds += "\x1b\x61\x00\x1b\x21\x00 Mesa: "+ pedido.mesaNombre; //text to print
      cmds += "\n";
    }
     

    if(pedido.creadorEmail){
      cmds += "\x1b\x61\x00\x1b\x21\x00 Pedido por: "+ pedido.creadorEmail; //text to print
      cmds += "\n"
    }
     

    if(pedido.clienteNombre){
      cmds += "\x1b\x61\x00\x1b\x21\x00 Para por: "+ pedido.clienteNombre; //text to print
      cmds += "\n"
    }
      

    pedido.items.sort(function(a, b) {
      return Number(a.cocinaId) - Number(b.cocinaId);
    });


    let ultimaCocina = "";
    pedido.items.forEach(producto => { 

      let cocinaActual = producto.cocinaNombre;

      if(cocinaActual != ultimaCocina){
        cmds+='------------------------------'+ "\n";
        cmds += '  '+cocinaActual+':' + "\n";
      }
      
      let cantidad = producto.cantidad+"x";
      let nombre = producto.nombre;
      let total = producto.precioTotal+"$";      

      cmds += cantidad+' '+nombre;
      
      producto.opcionesSeleccionadas.forEach(opcion =>{
        cmds += "\n";
        cmds += '  '+opcion.cantidad+'x '+' '+opcion.nombre        
      })       
      cmds += "\n";

      cmds += producto.descripcion_venta
      cmds += "\n";

      ultimaCocina = producto.cocinaNombre
    });
    cmds += "\n";
    cmds += "\n";
    cmds += "\n";
    cmds += "\n";
    cmds += '\x1B' + '\x1B';     
    return cmds;

  }

  async reanudarComanda(pedido:Pedido){

  }

  

  async ticket(pedido:Pedido){     
    
      let espacio = "                            ";
    //center,bold,underline - close underline, close bold
      let cmds = "\x1b\x61\x01\x1b\x45\x01\x1b\x2d\x02\x1b\x21\x10\x1b\x21\x20"+this.comercio.nombre+"\x1b\x2d\x00\x1b\x45\x00";
      cmds += "\n";
      if(pedido.afipFactura.emisorNroDoc != ""){
        cmds += "\x1b\x61\x01\x1b\x45\x01\x1b\x2d\x02\x1b\x21\x10\x1b\x21\x20"+pedido.afipFactura.emisorRazonSocial+"\x1b\x2d\x00\x1b\x45\x00";
        cmds += "\n";
        cmds += "\x1b\x21\x00"+pedido.afipFactura.emisorTipoDoc+" "+pedido.afipFactura.emisorNroDoc;
        cmds += "\n"; 
        cmds += "\x1b\x21\x00 Ingresos Brutos:"+pedido.afipFactura.ingresosBrutos+"\x1b\x2d\x00\x1b\x45\x00";
        cmds += "\n";
        //normal text
        if(this.comercio.direccion.state){
          cmds += "\x1b\x21\x00 "+this.comercio.direccion.state+", "+this.comercio.direccion.locality+", "+this.comercio.direccion.street_name+" "+this.comercio.direccion.street_number;
          cmds += "\n";
        }
        if(this.comercio.direccion.floor_number){
          cmds += "\x1b\x21\x00 "+this.comercio.direccion.floor_number+" "+this.comercio.direccion.street_number;
          cmds += "\n";
        }      
        //normal text
        if(this.comercio.telefono){
          cmds += "\x1b\x21\x00"+this.comercio.telefono;
          cmds += "\n";
        }
        cmds += "--------------------------------";
        cmds += "\n";

        cmds += "\x1b\x61\x00\x1b\x21\x00 Factura "+pedido.afipFactura.CbteLetra;
        cmds += "\n";
        cmds += "\x1b\x61\x00\x1b\x21\x00 Número de Factura "+pedido.afipFactura.voucherNumber;
        cmds += "\n";
        cmds += "\x1b\x61\x00\x1b\x21\x00 Fecha "+pedido.afipFactura.fechaEmision;
        cmds += "\n";
        cmds += "--------------------------------";
        cmds += "\n";

        cmds += "\x1b\x61\x00\x1b\x21\x00 Cliente: "+pedido.clienteNombre;
        cmds += "\n";
        if(pedido.clientePersonaJuridica === "1"){
          cmds += "\x1b\x61\x00\x1b\x21\x00 Monotributista";
        }
        else if(pedido.clientePersonaJuridica === "2"){
          cmds += "\x1b\x61\x00\x1b\x21\x00 Responsable Inscripto";
        }
        else if(pedido.clientePersonaJuridica === "3"){
          cmds += "\x1b\x61\x00\x1b\x21\x00 Iva Exento";
        }
        else{
          cmds += "\x1b\x61\x00\x1b\x21\x00 Consumidor Final";
        }
        cmds += "\n";
        cmds += "--------------------------------";
        cmds += "\n";
      }      
      
      if(pedido.afipFactura.emisorNroDoc == "" && pedido.clienteNombre != ""){
        cmds += "\x1b\x61\x00\x1b\x21\x00Cliente: "+ pedido.clienteNombre; //text to print
        cmds += "\n";     
      }
      
      if(pedido.mesaId){        
        
        cmds += "\x1b\x61\x00\x1b\x21\x00Mesa: "+ pedido.mesaNombre; //text to print   
        cmds += "\n";     
      }

      cmds += "\n";
      pedido.items.forEach(producto => {       
        if(producto.suspendido == 0){         

          let cantidad = producto.cantidad+"x";
          let nombre = producto.nombre;
          let total = producto.precioTotal+"$";   

          
          let productoLinea1 = (cantidad+' '+nombre+espacio).substring(0, 28);          
          let precioLinea1 = ("        "+total).slice(-total.length)

          cmds += "\x1b\x61\x00\x1b\x21\x00"+productoLinea1;
          //align right, normal text
          cmds += precioLinea1;
                  
          producto.opcionesSeleccionadas.forEach(opcion =>{
            cmds += "\n";
            cmds += '  '+opcion.cantidad+'x '+' '+opcion.nombre        
          })
          cmds += "\n";
          
        }
        
      });

      if(pedido.descuentos.length > 0){

        cmds += 'descuentos:';
        cmds += "\n";
        pedido.descuentos.forEach(descuento => {          
          let signo = "$"
          if(descuento.tipo == EnumTipoDescuento.porcentaje){
            signo = "%";
          }
          let monto = descuento.monto+signo;
          let motivo = descuento.motivo;       

          let motivoLinea1 = (motivo+espacio).substring(0, 28);
          let montoLinea1 = ("        "+monto).slice(-monto.length) 
          cmds += motivoLinea1+montoLinea1;
          cmds += "\n";             
        });
      }

      if(pedido.recargos.length > 0){

        cmds += 'Recargos:';
        cmds += "\n";
        pedido.recargos.forEach(recargo => {      
         
          let signo = "$"
          if(recargo.tipo == EnumTipoRecargo.porcentaje){
            signo = "%";
          }
          let monto = recargo.monto+signo;
          let motivo = recargo.motivo;        
          
          
          let motivoLinea1 = (motivo+espacio).substring(0, 28);
          let montoLinea1 = ("        "+monto).slice(-monto.length) 
          cmds += motivoLinea1+montoLinea1;
          cmds += "\n";          
        });
      }
      
      cmds += "\x1b\x45\x01"; //Emphasized + Double-height + Double-width mode selected (ESC ! (8 + 16 + 32)) 56 dec => 38 hex
      
     
      let totalLinea1 = ('TOTAL '+espacio).substring(0, 28);
      let t = this.pedidosService.getTotal(pedido)+"$"
      let precioLinea1 = ("        "+t).slice(-t.length)      
      cmds += totalLinea1+precioLinea1     
      cmds += "\n" + "\n";

      if(pedido.entregaEfectivo > this.pedidosService.getTotal(pedido)){
        cmds += "\x1b\x61\x00\x1b\x21\x00"
        let entregaLinea1 = ('paga con: '+espacio).substring(0, 28);
        let e = pedido.entregaEfectivo+"$"
        let montoEntregLinea1 = ("        "+e).slice(-e.length)      
        cmds += entregaLinea1+montoEntregLinea1     
        cmds += "\n";
  
        cmds += "\x1b\x61\x00\x1b\x21\x00"
        let cambioLinea1 = ('cambio: '+espacio).substring(0, 28);
        let c = Number(Number(pedido.entregaEfectivo)-Number(this.pedidosService.getTotal(pedido)))+"$"
        let montoCambioLinea1 = ("        "+c).slice(-c.length)      
        cmds += cambioLinea1+montoCambioLinea1     
        cmds += "\n";
      }

      
      
      cmds += "\n";
      cmds += "\n";
      cmds += "\n";
      cmds += '\x1B' + '\x1B';
     // alert("Imprimiendo")

     return cmds;

  }


  

 
}
