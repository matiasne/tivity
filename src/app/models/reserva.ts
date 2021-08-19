import { Localizacion } from "./localizacion";
import { ItemPedido } from "./itemPedido";
import { Descuento } from "./descuento";
import { Recargo } from "./recargo";
import { User } from "./user";

export enum EstadoReserva{
    cargada = 1,
    confirmada = 2,
    suspendida = 3
}

export class Reserva{
    public id ="";
    public desde:any;
    public hasta:any;

    public creadorId = "";
    public creadorEmail="";
    public creadorNombre="";

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
    ){
        
        this.direccion = new Localizacion();
    }

    public setCreador(usuario:User){
        this.creadorId = usuario.uid;
        this.creadorEmail = usuario.email;
        this.creadorNombre = usuario.displayName;
    }

    public asignarValores(init?: Partial<Reserva>) {
        Object.assign(this, init);
    }
}