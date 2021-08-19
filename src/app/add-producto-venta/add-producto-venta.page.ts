import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalController, NavParams, IonInput, IonContent } from '@ionic/angular';
import { ProductosService } from '../Services/productos.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CargaPorVozService } from '../Services/carga-por-voz.service';
import { ToastService } from '../Services/toast.service';
import { EnumEstadoCocina, Item } from '../models/item';
import { GrupoOpciones } from '../models/grupoOpciones';
import { Opcion } from '../models/opcion';
import { Subscription } from 'rxjs';
import { CocinasService } from '../Services/cocinas.service';
import { GrupoOpcionesService } from '../Services/grupo-opciones.service';
import { CarritoService } from '../Services/global/carrito.service';
import { LoadingService } from '../Services/loading.service';
import { ModalNotificacionService } from '../Services/modal-notificacion.service';
import { FormProductoPage } from '../form-producto/form-producto.page';
import { EnumEstadoCobro } from '../models/pedido';
import { ItemPedido } from '../models/itemPedido';
import { UsuariosService } from '../Services/usuarios.service';

@Component({
  selector: 'app-add-producto-venta',
  templateUrl: './add-producto-venta.page.html',
  styleUrls: ['./add-producto-venta.page.scss'],
})
export class AddProductoVentaPage implements OnInit {

  @ViewChild('cantidad',{static:false})  inputElement: IonInput;
  @ViewChild(IonContent, { static: false }) content: IonContent;

  item:Item;
  itemPedido:ItemPedido;

  datosForm: FormGroup;
  submitted = false;
  private opcionesSubs:Subscription;

  public totalCambiando = false;
  public precioShow = 0;
  public showOpcionesSeleccionadas = true;

  public gruposOpciones = [];

  constructor(
    public router:Router,
    private modalCtrl: ModalController,
    public route:ActivatedRoute,
    public productosServices:ProductosService,
    public cargaPorVoz:CargaPorVozService,
    public toastServices:ToastService,
    public productoService:ProductosService,
    private navParams:NavParams,
    private cocinasService:CocinasService,
    private gruposOpcionesService:GrupoOpcionesService,
    private loadingService:LoadingService,
  ) { }

  ngOnInit() {
    console.log("!!!")
    this.item = new Item();
    this.itemPedido = new ItemPedido();
    console.log(this.item)
    this.item.asignarValores(this.navParams.get('producto'));
    this.itemPedido.asignarValores(this.navParams.get('producto'))
    
    this.itemPedido.cantidad = 1;
    this.itemPedido.descripcion_venta = "";

    this.itemPedido.listoComanda = false;

    this.gruposOpciones = [];  
    
    if(this.item.gruposOpcionesId.length > 0)
      this.loadingService.presentLoadingText("Cargando Opciones")
      
    this.item.gruposOpcionesId.forEach(id =>{
      let sub = this.gruposOpcionesService.get(id).subscribe(data=>{
        data.opciones.forEach(opcion =>{
          opcion.cantidad = 0;
          opcion.sumaHabilitada = true;
        })

        this.gruposOpciones.push(data);
        sub.unsubscribe()
        this.loadingService.dismissLoading()
      })
    })

    this.itemPedido.opcionesSeleccionadas = [];

    


    console.log(this.item)

    this.addToTotal(0,this.item.precio,10);

    

  }

  

  
  sumarCantidad(){
    this.itemPedido.cantidad +=1;
    let precioViejo = this.itemPedido.precioTotal;
    this.itemPedido.precioTotal = this.valorTotal();
    this.addToTotal(precioViejo,this.itemPedido.precioTotal,1500);
  }

  restarCantidad(){ 
    this.itemPedido.cantidad-=1;
    if(this.itemPedido.cantidad < 1){
      this.itemPedido.cantidad = 1;
      return;
    }   
    
    let precioViejo = this.itemPedido.precioTotal;
    this.itemPedido.precioTotal = this.valorTotal();
    this.addToTotal(precioViejo,this.itemPedido.precioTotal,10);
  }

  ngAfterViewInit() {
     
  }

  ionViewDidLeave(){
    //this.opcionesSubs.unsubscribe();
  }

  seleccionarOpcion(grupo:GrupoOpciones,opcion:Opcion){
    console.log("seleccionada");
    grupo.opciones.forEach(element => {
      element.seleccionada = false;
      element.cantidad = 0;
    });
    opcion.seleccionada = true;
    opcion.cantidad = 1;
    this.itemPedido.precioTotal = this.valorTotal();
  }

  seleccionarOpcionCheck(grupo:GrupoOpciones, opcion:Opcion){
    if(opcion.seleccionada){
      opcion.seleccionada = false;
    }
    else{
      opcion.seleccionada = true;
    }
  }

  agregar(){

     
    var isOk = false;

    this.itemPedido.opcionesSeleccionadas = [];
    this.gruposOpciones.forEach(grupo =>{
      grupo.opciones.forEach(opcion => {
        if(opcion.cantidad > 0){               
          var opcionSeleccionada   = {
            nombreGrupo : grupo.nombre,
            nombre : opcion.nombre,
            precioVariacion : opcion.precioVariacion,
            cantidad : opcion.cantidad,
          } 
         
          this.itemPedido.opcionesSeleccionadas.push(opcionSeleccionada);
          opcion.cantidad = 0;
        }
      });
    })   

   
    if(this.gruposOpciones.length > 0){
      
      console.log("validando")
      for (var i = 0; i < this.gruposOpciones.length; ++i){
        var isOk = false;
        let grupo = this.gruposOpciones[i]
                
        if(grupo.minimo > 0){

          if(grupo.maximo == 1){
            grupo.opciones.forEach(opcion =>{
              if(opcion.seleccionada)
                isOk = true;
            })
          }
  
          if(grupo.maximo > 1){
            var cantidad = 0;
            console.log(grupo)
            grupo.opciones.forEach(opcion =>{
              if(opcion.cantidad)
                cantidad += opcion.cantidad;
            })
            console.log(cantidad)
            if(cantidad >= grupo.minimo){
              isOk = true;
            }

            if(cantidad > grupo.maximo){
              isOk = false;
            }
          }
        }
        else{
          isOk = true;
        }
  
        if(!isOk){
          this.toastServices.alert("Seleccione "+ grupo.minimo+" "+grupo.nombre,"");
          this.scrollTo(grupo.nombre);
          isOk = false;
          break;
        }
        
      }

      
      
    }
    else{
      isOk = true;
    } 

    console.log("!!!!!! isOK"+isOk)
    if(isOk){  
      if(this.item.cocinaId){
        this.cocinasService.get(this.item.cocinaId).subscribe(data=>{
          this.item.cocinaNombre = data.nombre;
        }) 
      }
      
      console.log(this.itemPedido)
      this.modalCtrl.dismiss(this.itemPedido); 
      
      //this.toastServices.mensaje('Agregado!', this.item.cantidad+' '+this.item.unidad+' de '+this.item.nombre);     
    }   
   
  }

  scrollTo(id) {
    if(id=='inicio'){
      this.content.scrollToPoint(0, 0, 500);    
    }
    else{
      let y = document.getElementById(id).offsetTop;
      console.log(y);
      this.content.scrollToPoint(0, y-100, 500);  
    }
     
  }

  cancelar(){
    this.modalCtrl.dismiss();
  }

  restarCantidadOpcion(grupoIndex,i){
    
    if(!this.gruposOpciones[grupoIndex].opciones[i].cantidad){
      this.gruposOpciones[grupoIndex].opciones[i].cantidad = 0;
    }

    if(!this.gruposOpciones[grupoIndex].cantidadTotal){
      this.gruposOpciones[grupoIndex].cantidadTotal = 0;
    }   

    if(this.gruposOpciones[grupoIndex].opciones[i].cantidad <= 0){
      this.gruposOpciones[grupoIndex].opciones[i].cantidad = 0;
      this.gruposOpciones[grupoIndex].opciones[i].seleccionada = false;
    }
    else{
      
      this.gruposOpciones[grupoIndex].opciones[i].cantidad -=1;
      this.gruposOpciones[grupoIndex].cantidadTotal -=1;      
    }

    if(this.gruposOpciones[grupoIndex].cantidadTotal < 0){
      this.gruposOpciones[grupoIndex].cantidadTotal = 0;
    }
    

    if(this.gruposOpciones[grupoIndex].cantidadTotal >= this.gruposOpciones[grupoIndex].maximo){
      this.gruposOpciones[grupoIndex].opciones.forEach(opcion=>{
        opcion.sumaHabilitada = false;  
        if(opcion.cantidad >= opcion.maximaSeleccion){
          opcion.sumaHabilitada = false;
        }
        else{
          opcion.sumaHabilitada = true;
        }       
      });
     
    }
    else{
      this.gruposOpciones[grupoIndex].opciones.forEach(opcion=>{
        opcion.sumaHabilitada = true;     
        if(opcion.cantidad >= opcion.maximaSeleccion){
          opcion.sumaHabilitada = false;
        }
        else{
          opcion.sumaHabilitada = true;
        }     
      });
      
     
    }    

    if(this.gruposOpciones[grupoIndex].opciones[i].cantidad == 0)
      this.gruposOpciones[grupoIndex].opciones[i].seleccionada = false;
    

    let precioViejo = this.itemPedido.precioTotal;
    this.itemPedido.precioTotal = this.valorTotal();
    this.addToTotal(precioViejo,this.itemPedido.precioTotal,10);
    

   
  }

  sumarCantidadOpcion(grupoIndex,i){

    if(!this.gruposOpciones[grupoIndex].opciones[i].cantidad){
      this.gruposOpciones[grupoIndex].opciones[i].cantidad = 0;
    }

    if(!this.gruposOpciones[grupoIndex].cantidadTotal){
      this.gruposOpciones[grupoIndex].cantidadTotal = 0;
    }     
    this.gruposOpciones[grupoIndex].opciones[i].cantidad +=1;
    this.gruposOpciones[grupoIndex].cantidadTotal +=1;

    
    if(this.gruposOpciones[grupoIndex].opciones[i].precioVariacion){
        
    }
    this.gruposOpciones[grupoIndex].opciones[i].seleccionada = true;

   

    if(this.gruposOpciones[grupoIndex].cantidadTotal == this.gruposOpciones[grupoIndex].maximo){
      this.toastServices.mensaje("Ya has seleccionado el máximo de: "+this.gruposOpciones[grupoIndex].nombre,"");
      
         
      
      this.gruposOpciones[grupoIndex].opciones.forEach(opcion=>{
        opcion.sumaHabilitada = false;
      })     
    }
    else{
      this.gruposOpciones[grupoIndex].opciones.forEach(opcion=>{
        opcion.sumaHabilitada = true;
        if(opcion.cantidad >= opcion.maximaSeleccion){
          opcion.sumaHabilitada = false;
        }
        else{
          opcion.sumaHabilitada = true;
        }     
    
      });
       
    }


    let precioViejo = this.itemPedido.precioTotal;
    this.itemPedido.precioTotal = this.valorTotal();
    this.addToTotal(precioViejo,this.itemPedido.precioTotal,10);

    console.log(this.gruposOpciones[grupoIndex].maximo)
    console.log(this.gruposOpciones[grupoIndex].cantidadTotal)
    console.log(this.gruposOpciones[grupoIndex].opciones[i].cantidad)
  }

  valorTotal(){
    let valorUno = this.item.precio;
    if(this.item.promocion)
      valorUno = this.item.promocion
    
    this.gruposOpciones.forEach(grupos =>{
      grupos.opciones.forEach (opcion =>{
        if(opcion.seleccionada || opcion.cantidad > 0)
          valorUno += opcion.precioVariacion * opcion.cantidad;
      })
    });
    console.log(this.itemPedido.cantidad+" "+valorUno)
    return this.itemPedido.cantidad * valorUno;
  }


  addToTotal(start, end, duration) {

    this.itemPedido.precioTotal = end;

    if(start == end){
      this.totalCambiando = false;
      return;     
    }
    this.totalCambiando = true;
    var range = end - start;
    var current = start;
    var increment = end > start? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    console.log(stepTime);
    var timer = setInterval(() => {
        current += increment;
        this.precioShow = current;
        if (current == end) {
            this.totalCambiando = false;
            clearInterval(timer);
        }
    }, stepTime);
  }

  cerrar(){
    this.modalCtrl.dismiss();
  }

}
