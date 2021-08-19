import { User } from "./user";

export class Cocina{
    public id ="";
    public foto ="";
    public comercioId = "";
    public nombre:"";
    public cocineros = [];
	
    public creadorId = "";
    public creadorEmail="";
    public creadorNombre="";
    
    constructor(){
    }

    public setCreador(usuario:User){
        this.creadorId = usuario.uid;
        this.creadorEmail = usuario.email;
        this.creadorNombre = usuario.displayName;
    }

    
    public asignarValores(init?: Partial<Cocina>) {
        Object.assign(this, init);
    }
}