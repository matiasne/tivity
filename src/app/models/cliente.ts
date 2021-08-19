import { Localizacion } from "./localizacion";
import { User } from "./user";

export class Cliente{

    public id="";
    public comercioId="";
    public nombre="";
    public documentoTipo ="";  
    public documento ="";  
    public personaJuridica ="";
    public fecha_nacimiento="";
    public telefono="";   
    public email="";   
    public descripcion="";   
    public foto="";
    public createdAt:any;
    public estado="";
    public keywords = [];

    public creadorId = "";
    public creadorEmail="";
    public creadorNombre="";

    public direccion:Localizacion;


    constructor(

    ){
        this.direccion = new Localizacion();
    }

    public setCreador(usuario:User){
        this.creadorId = usuario.uid;
        this.creadorEmail = usuario.email;
        this.creadorNombre = usuario.displayName;
    }

    
    
    public asignarValores(init?: Partial<Cliente>) {
        Object.assign(this, init);
    }
}
