import { GrupoOpciones } from "./grupoOpciones";
import { TipoItem } from "./item";
import { User } from "./user";

export class ItemPedido {

    public tipo = TipoItem.producto

    public id="";
    public suspendido = 0;

    public creadorId = "";
    public creadorEmail="";
    public creadorNombre="";
    
    public nombre = "";
    public barcode="";
    public cocinaId ="";
    public cocinaNombre =""; //Se rellena cuando se pide el producto
    public precio = 0;    
    public promocion=0;
    public precioTotal = 0;
    public destacado = false;
    public unidad="";
    public valorPor = 0;
    public stock = 0;
    public descripcion="";
    public cantidad =0;
    public descripcion_venta="";
    public recibirPedidos=true;

    public opcionesSeleccionadas =[];
    public listoComanda = false;
    public impuestoPorcentaje = "0.21";
    public reembolsar = false 

    constructor(){
        this.opcionesSeleccionadas =[];
    }

    public setCreador(usuario:User){
        this.creadorId = usuario.uid;
        this.creadorEmail = usuario.email;
        this.creadorNombre = usuario.displayName;
    }


    public asignarValores(init?: Partial<ItemPedido>) {
        Object.assign(this, init);
    }
    
    
}