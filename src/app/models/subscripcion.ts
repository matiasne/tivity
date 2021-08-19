import { DocumentReference } from 'angularfire2/firestore';
import { Descuento } from './descuento';
import { ItemPedido } from './itemPedido';
import { Recargo } from './recargo';
import { User } from './user';
export class Subscripcion{

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

    public descuentos:Descuento[] =[];
    public recargos:Recargo[]=[];
    public items:ItemPedido[] = [];

    public countMensajes = 0;

    public start_date ="";
    public end_date = "";
    public frequency = 1;
    public frequency_type ="months";
    public transaction_amount = 0;
    public currency_id = "ARS";
    public repetitions = 12;
    public billing_day = 10;
    public billing_day_proportional = false;
    public free_trial ={
        "frequency_type":"months",
        "frequency":"1"
    }
        
	constructor(){
    }

    public setCreador(usuario:User){
        this.creadorId = usuario.uid;
        this.creadorEmail = usuario.email;
        this.creadorNombre = usuario.displayName;
    }
    
    public asignarValores(init?: Partial<Subscripcion>) {
        Object.assign(this, init);
    }
}

