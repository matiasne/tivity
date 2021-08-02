import { GrupoOpciones } from "./grupoOpciones";
import { TipoItem } from "./item";

export class ItemPedido {

    public tipo = TipoItem.producto

    public id="";
    public suspendido = 0;
    
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

    

	public constructor() {
        this.opcionesSeleccionadas =[];
    }

    public asignarValores(init?: Partial<ItemPedido>) {
        Object.assign(this, init);
    }
    
    
}