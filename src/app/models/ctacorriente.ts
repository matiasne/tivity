
import { MovimientoCtaCorriente } from './movimientoCtaCorriente';
import { User } from './user';

export class CtaCorriente{
    public id ="";

    public creadorId = "";
    public creadorEmail="";
    public creadorNombre="";
    
    public comercioId= localStorage.getItem('comercio_seleccionadoId');   
    public nombre="";
    public coTitularesId=[];
    public montoActual=0;
    public montoTotal =0;

    public comercios = [];
    public clientes =[];


	constructor(){
    }

    public setCreador(usuario:User){
        this.creadorId = usuario.uid;
        this.creadorEmail = usuario.email;
        this.creadorNombre = usuario.displayName;
    }
    
    public asignarValores(init?: Partial<CtaCorriente>) {
        Object.assign(this, init);
    }
}