import { Producto } from './producto';
import { Comercio } from './comercio';
import { Servicio } from './servicio';
import { MovimientoCtaCorriente } from './movimientoCtaCorriente';
import { Pagare } from './pagare';
import { Descuento } from './descuento';
import { Recargo } from './recargo';
import { Localizacion } from './localizacion';


export enum EnumEstadoCocina {
    rechazado = 1, 
    solicitado = 2, 
    tomado = 3,  
    completo = 4,
    finalizado = 5, 
    suspendido = 6
}

export enum EnumEstadoCobro {
    pendiente = 1, 
    suspendido = 2, 
    cobrado = 3,  
    reembolsado = 4
}

export class Pedido{      

    public id="";

    public statusComanda = EnumEstadoCocina.solicitado;
    public statusCobro = EnumEstadoCobro.pendiente;    

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

    public metodoPago = "";
    public metodoDevolucion = "";
    public reembolso ="";
    public cajaUtilizada ="";

    public direccion:Localizacion;
    public total = 0
    
	constructor(){
        this.direccion = new Localizacion();

    }

    public asignarValores(init?: Partial<Pedido>) {
        Object.assign(this, init);
    }

    
}