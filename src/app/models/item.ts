import { GrupoOpciones } from './grupoOpciones';
import { Opcion } from './opcion';
import { OpcionSeleccionada } from './opcionSeleccionada';

export enum EnumEstadoCocina {
    rechazado = 1, 
    solicitado = 2, 
    tomado = 3,  
    completo = 4,
    finalizado = 5, 
    suspendido = 6
}

export enum TipoItem{
    producto = 1,
    servicio = 2
}

export class Item {

    public tipo = TipoItem.producto

    public id="";
    public suspendido = 0;
    
    public nombre = "";
    public barcode="";
    public cocinaId ="";
    public cocinaNombre =""; //Se rellena cuando se pide el producto
    public precio = 0;    
    public promocion=0;
  //  public precioTotal = 0;
    public destacado = false;
    public unidad="";
    public valorPor = 0;
    public stock = 0;
    public descripcion="";
    public categorias=[];
    public createdAt="";  
    public updatedAt:any;
  //  public cantidad =0;
  //  public descripcion_venta="";
    public recibirPedidos=true;
    public gruposOpcionesId = [];
    public gruposOpciones:GrupoOpciones[];

   // public opcionesSeleccionadas =[];
    public keywords = [];
   // public listoComanda = false;
    public impuestoPorcentaje = "0.21";
    public enCarrito = 0
    public reembolsar = false 

    public imagenes = []

    public woocommerce = {
        sincronizado:true,
        id:"",
        lastUpdate:undefined
    }
    
    

	public constructor() {
        this.woocommerce["lastUpdate"] = new Date()
        this.gruposOpciones = [];
     //   this.opcionesSeleccionadas =[];
    }

    public asignarValores(init?: Partial<Item>) {
        Object.assign(this, init);
    }
    
    
}