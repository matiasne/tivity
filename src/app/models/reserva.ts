import { Localizacion } from "./localizacion";
import { ItemPedido } from "./itemPedido";
import { Descuento } from "./descuento";
import { Recargo } from "./recargo";
import { User } from "./user";
import { Cliente } from "./cliente";

export enum EstadoReserva{
    cargada = 1,
    confirmada = 2,
    suspendida = 3
}

export class Reserva{
    public id ="";
    public createdAt:any;

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
    public clienteDocTipo = ""
    public clienteDoc = ""
    public clientePersonaJuridica = ""
    public clienteDireccion = ""
    
    public mesaId ="";
    public divisionNombre="";
    public direccion:Localizacion;

    public descuentos:Descuento[] =[];
    public recargos:Recargo[]=[];
    public items:ItemPedido[] = [];

    public estado ={
        nombre:"",
        color:"",
    };

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

    public asignarCliente(cliente:Cliente) {
        this.clienteEmail = cliente.email
        this.clienteId = cliente.id;
        this.clienteNombre = cliente.nombre
        this.clienteDocTipo = cliente.documentoTipo
        this.clienteDoc = cliente.documento
        this.clientePersonaJuridica = cliente.personaJuridica
        this.clienteDireccion = JSON.parse(JSON.stringify(cliente.direccion))
    }
}