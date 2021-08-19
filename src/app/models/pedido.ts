
import { Descuento } from './descuento';
import { Recargo } from './recargo';
import { Localizacion } from './localizacion';
import { ItemPedido } from './itemPedido';
import { User } from './user';

export enum EnumEstadoCobro {
    pendiente = 1, 
    suspendido = 2, 
    cobrado = 3,  
    reembolsado = 4
}

export class Pedido{      

    public id="";

    public statusCobro = EnumEstadoCobro.pendiente;    

    public comanda ={ 
        estado:2,
        demora:0,
        numero:0,
    }

    public creadorId = "";
    public creadorEmail="";
    public creadorNombre="";


    public personalId = "";
    public personalEmail="";
    public personalNombre="";

    public clienteId="";
	public clienteEmail="";
	public clienteNombre="";
    public clienteDocTipo="";
    public clienteDoc="";
    public clientePersonaJuridica ="";
    
    public mesaId = "";
    public mesaNombre = "";
  
    public on = false;
 
    public descuentos:Descuento[] =[];
    public recargos:Recargo[]=[];
    public items:ItemPedido[] = [];
	 
    public cantidadComentarios = 0;
    public createdAt:any

    public countListos = 0

    public metodoPago = [];
    public metodoDevolucion = []
    public reembolso ="";
    public cajaUtilizada ="";

    public montoPagoEfectivo =  0;
    public montoPagoDebito = 0;
    public montoPagoCredito = 0;
    public montoPagoCtaCorriente = 0;
    public montoPagoMercadoPago = 0;

    public direccion:Localizacion;
    public total = 0;
    public entregaEfectivo=0;
    

    public primerMensaje ="";
    public countMensajes = 0;

    public afipFactura = {
        emisorRazonSocial:"",
        emisorTipoDoc:"",
        emisorNroDoc:"",
        emisorPersonaJuridica:"",      
        ptoVenta:"",
        CbteLetra:"",
        CbteTipo:"",
        CAE:"",
        CAEFchVto:"",
        voucherNumber:"",      
        ingresosBrutos:"",  
        fechaEmision:""      
    }
    
	constructor(){
        this.direccion = new Localizacion();
    }

    public setCreador(usuario:User){
        this.creadorId = usuario.uid;
        this.creadorEmail = usuario.email;
        this.creadorNombre = usuario.displayName;
    }

    public asignarValores(init?: Partial<Pedido>) {
        Object.assign(this, init);
    }

    
}