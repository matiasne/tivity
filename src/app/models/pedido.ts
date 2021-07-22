import { Producto } from './producto';
import { Comercio } from './comercio';
import { Servicio } from './servicio';
import { MovimientoCtaCorriente } from './movimientoCtaCorriente';
import { Pagare } from './pagare';
import { Descuento } from './descuento';
import { Recargo } from './recargo';
import { Localizacion } from './localizacion';




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
  
    public on=false;
 
    public descuentos:Descuento[] =[];
    public recargos:Recargo[]=[];
    public productos:Producto[] = [];
    public servicios:Servicio[] = [];
	 
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

    public asignarValores(init?: Partial<Pedido>) {
        Object.assign(this, init);
    }

    
}