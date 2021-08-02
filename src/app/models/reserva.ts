import { Localizacion } from "./localizacion";
import { ItemPedido } from "./itemPedido";
import { Descuento } from "./descuento";
import { Recargo } from "./recargo";

export enum EstadoReserva{
    cargada = 1,
    confirmada = 2,
    suspendida = 3
}

export class Reserva{
    public id ="";
    public desde:any;
    public hasta:any;

    public personalId ="";
    public personalNombre="";
    public personalEmail = "";

    public clienteId ="";
    public clienteNombre="";
    public clienteEmail = "";

    public mesaId ="";
    public mesaNombre="";
    public direccion:Localizacion;

    public descuentos:Descuento[] =[];
    public recargos:Recargo[]=[];
    public items:ItemPedido[] = [];

    public estado = EstadoReserva.cargada;

    public countMensajes = 0;
    
	constructor(
		public vendedorId:"", 
        public vendedorNombre:""
		){

            this.direccion = new Localizacion();
	}

    public asignarValores(init?: Partial<Reserva>) {
        Object.assign(this, init);
    }
}