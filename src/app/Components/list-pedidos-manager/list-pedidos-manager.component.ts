import { AfterViewInit, ChangeDetectorRef, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonSearchbar, ModalController, NavController } from '@ionic/angular';
import Fuse from 'fuse.js'
import { Observable, Subscriber } from 'rxjs';
import { DetailsPedidoPage } from '../../details-pedido/details-pedido.page';
import { FormFilterPedidosPage } from '../../form-filter-pedidos/form-filter-pedidos.page';
import { EnumEstadoCobro, Pedido } from '../../models/pedido';
import { EnumEstadoCocina } from 'src/app/models/item';
import { WCOrder } from '../../models/woocommerce/order';
import { AuthenticationService } from '../../Services/authentication.service';
import { ComentariosService } from '../../Services/comentarios.service';
import { NavegacionParametrosService } from '../../Services/global/navegacion-parametros.service';
import { LoadingService } from '../../Services/loading.service';
import { PedidoService } from '../../Services/pedido.service';
import { PedidosWoocommerceService } from '../../Services/pedidos-woocommerce.service';
import { UsuariosService } from '../../Services/usuarios.service';
import { OrdersService } from '../../Services/woocommerce/orders.service';

import {
  CalendarModal,
  CalendarModalOptions,
  DayConfig,
  CalendarResult
} from 'ion2-calendar';
import { ComerciosService } from '../../Services/comercios.service';
import { Comercio } from '../../models/comercio';
import { Rol } from '../../models/rol';


@Component({
  selector: 'app-list-pedidos-manager',
  templateUrl: './list-pedidos-manager.component.html',
  styleUrls: ['./list-pedidos-manager.component.scss'],
})
export class ListPedidosManagerComponent implements AfterViewInit {
 
  
  @Input() clienteIdFiltro= "";
  @Input() divisionFiltro:any;

  @ViewChild(IonSearchbar, { static: false }) ionSearchbar: IonSearchbar;

  @ViewChild(IonSearchbar) set content(content: IonSearchbar) {
    if(content) { //initially setter gets called with undefined
        this.ionSearchbar = content;
    }
 }
 
  public pedidosLocalesAll:any = []
  public pedidosLocales:any =[]

  public pedidosWoocommerceAll:any = []
  public pedidosWoocommerce = []

  public palabraFiltro = "";

  public userRol:Rol;
  public fechaDesde = new Date();
  public fechaHasta = new Date();
  public estado = "";
  public fuente = "";

  public obsPedidos:any

  public cEstado = EnumEstadoCobro;
  public seccionActiva = 0; 

  public buscando = true;

  public pedidosObs:any

  public connectionStatus = "offline"

  public showSearchBar = false;

  private obsPedido:any;

  private comercio:Comercio

  constructor(
    private pedidosService:PedidoService,
    private alertController:AlertController,
    public router:Router,
    public modalController:ModalController,
    public loadingService:LoadingService,
    public comentariosService:ComentariosService,
    public authService:AuthenticationService,
    public changeRef:ChangeDetectorRef,
    public navParametrosService:NavegacionParametrosService,
    public pedidosWoocommerceService:PedidosWoocommerceService,
    private usuariosServices:UsuariosService,
    private comercioService:ComerciosService,
    private navCtrl: NavController,
  ) { 
    this.comercio = new Comercio();
  }

  ngAfterViewInit() {
    this.pedidosLocalesAll = []
    console.log(this.clienteIdFiltro)

    this.authService.userRol.subscribe(rol =>{
      this.userRol = rol; 
    })
    this.fechaDesde.setDate(this.fechaDesde.getDate() - 2);    
    this.fechaHasta.setDate(this.fechaHasta.getDate() + 1); 

 /*   this.usuariosServices.getConnectionStatus().subscribe(data=>{
      this.connectionStatus = data
    })
*/

    this.obsPedidos = this.pedidosService.listPedidos().subscribe((pedidos:any)=>{
      this.pedidosLocalesAll = pedidos; 
      console.log(this.pedidosLocalesAll)
      this.buscando = false;
      this.buscar(); 
    })

    this.comercio.asignarValores(this.comercioService.getSelectedCommerceValue())
    this.seccionActiva = 0

  }

  borrarDatosComponente() { // debe ser llamado por la página que contiene el componente
    this.obsPedidos.unsubscribe()
  }


  ionViewDidEnter(){ 
    
  //  this.refrescar();
  //  this.changeRef.detectChanges()    
  }  

  onChange(event){
    this.palabraFiltro = event.target.value;    
    this.buscar();
  }

  onChangeAtras(event){
    this.fechaDesde = new Date();
    this.fechaDesde.setDate(this.fechaDesde.getDate() - Number(event.target.value));
    this.obsPedidos.unsubscribe()

    let date = new Date(this.fechaDesde) 
    let fechaHasta = new Date();

    this.obsPedidos = this.pedidosService.listFecha(date,fechaHasta).subscribe((pedidos:any)=>{
      this.pedidosLocalesAll = pedidos; 
      this.buscando = false;
      
      this.buscar(); 
    })
  }
 
  reanudar(item){ 
    item.statusCobro = this.cEstado.pendiente;
    this.pedidosService.update(item).then(data=>{
      console.log("El pedido ha sido suspendido");
      this.refrescar();
    })  
  }

  async cancelar(item){

    const alert = await this.alertController.create({
      header: 'Está seguro que desea suspender el pedido en curso?',
      message: '',
      buttons: [ 
        {
          text: 'No',
          handler: (blah) => {
            
          }
        }, { 
          text: 'Sí',
          handler: () => {               
            item.statusCobro = this.cEstado.suspendido;
            this.pedidosService.update(item).then(data=>{
              console.log("El pedido ha sido suspendido");
              this.refrescar();
            })     
          }
        }
      ]
    });
    await alert.present();   
  }

  async seleccionar(item){
   
    let editarPedido = new Pedido();
    editarPedido.asignarValores(item);

    const modal = await this.modalController.create({
      component: DetailsPedidoPage,
      componentProps:{
        pedido: editarPedido
      },
      id:'detail-pedido'      
    });
    modal.onDidDismiss()
    .then((retorno) => {
      this.refrescar()
    })

    
    await modal.present();    

  }

  buscarWoocommerce(){

    var retorno = false;
    this.pedidosWoocommerce = []; 
    this.pedidosWoocommerceAll.forEach(item => {  

      var encontrado = true;    
      
      //Por ahora solo el administrador puede ver los pedidos de woocommerce
      if(this.userRol.rol == "Administrador"){
        encontrado = true;
      }
     
      if(encontrado){
        encontrado = false;

        if(this.palabraFiltro != ""){

          encontrado = false;
          var palabra = this.palabraFiltro.normalize("NFD").replace(/[\u0300-\u036f]/g, "")      
        
          if(item.shipping.first_name){
            retorno =  (item.shipping.first_name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").indexOf(palabra.toLowerCase()) > -1);
            if(retorno)
              encontrado = true;
          }

          if(item.shipping.last_name){
            retorno =  (item.shipping.last_name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").indexOf(palabra.toLowerCase()) > -1);
            if(retorno)
              encontrado = true;
          }   
        }
        else{
          encontrado = true; 
        }
      }

      if(encontrado){        
        if(this.seccionActiva == item.statusCobro){
          this.pedidosWoocommerce.push(item)
        }                 
        return true;
      }
    });
  }


  buscar(){ 

    this.pedidosLocales = [];

    
    for(let i=0;i< this.pedidosLocalesAll.length;i++){
      let encontrado = true
      if(this.userRol.rol == "Administrador"){
        encontrado = true;
      }
      else{
        if(this.authService.getActualUserId() == this.pedidosLocalesAll[i].creadorId)
          encontrado = true;
        else
          encontrado = false;
      } 
     

      if(this.divisionFiltro){       
          encontrado = false;
          let retorno =  (this.pedidosLocalesAll[i].divisionNombre.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").indexOf(this.divisionFiltro.toLowerCase()) > -1);
          encontrado = retorno;
      }
     
      

      if(this.clienteIdFiltro){
          if(this.pedidosLocalesAll[i].clienteId === this.clienteIdFiltro)
            encontrado = true;
          else
            encontrado = false;
        
        
      }
      
      
      if(encontrado){
        encontrado = false;
        if(this.pedidosLocalesAll[i].createdAt.toDate().getTime() > this.fechaDesde.getTime() && this.pedidosLocalesAll[i].createdAt.toDate().getTime() < this.fechaHasta.getTime())
          encontrado = true;
      }
       
      if(encontrado){  
        console.log(this.seccionActiva)
        if(this.seccionActiva == 0){
          this.pedidosLocales.push(this.pedidosLocalesAll[i])
        }                
        else if(this.seccionActiva == this.pedidosLocalesAll[i].statusCobro){          
          this.pedidosLocales.push(this.pedidosLocalesAll[i])
        }
        
      }
    }


    const options = {
      keys: [
        "clienteNombre",
        "divisionNombre",
        "creadorEmail",
        "creadorNombre",
        "comanda.numero"
      ]
    };
    
    const fuse = new Fuse(this.pedidosLocales, options);
    
    let result:any = fuse.search(this.palabraFiltro)

    result.forEach(element => {
      this.pedidosLocales.push(element.item)
    }); 
    
   
  }

  async abrirSelectorFechas(){
    
    let comienzo = new Date();
    comienzo.setDate(comienzo.getDate() - this.comercio.config.memoriaDias);  
    const options: CalendarModalOptions = {
      title: '',
      from:comienzo,
      to:new Date(),
      pickMode: 'range'
    };
 
    const myCalendar = await this.modalController.create({
      component: CalendarModal,
      componentProps: { options }
    });

    myCalendar.onDidDismiss()
    .then((retorno) => {
      console.log(retorno)
      if(retorno.data){
        this.fechaDesde = retorno.data.from.dateObj,
        this.fechaHasta = retorno.data.to.dateObj
        this.fechaHasta.setDate(this.fechaHasta.getDate() + 1); 
        this.refrescar()
      }       
    });
 
    myCalendar.present();

  }

  segmentChanged(event){
    console.log(event.target.value);
    this.seccionActiva = event.target.value;
    this.buscar();
  } 

  async showFiltroAvanzado(){
    const modal = await this.modalController.create({
      component: FormFilterPedidosPage      
    });
    modal.onDidDismiss()
    .then((retorno) => {
      if(retorno.data){
        this.fechaDesde = retorno.data.fechaDesde,
        this.fechaHasta = retorno.data.fechaHasta
        this.estado = retorno.data.estado
        this.fuente = retorno.data.fuente
        this.refrescar()
      }       
    });
    return await modal.present();    
  }
 
  refrescar(){ 

    this.buscar()
   /* if(!this.obsPedidos)
    this.pedidosObs = this.pedidosService.listFechaDesde(date,fechaHasta).subscribe((pedidos:any)=>{
      this.pedidosLocalesAll = pedidos; 
      console.log(this.pedidosLocalesAll)
      this.buscando = false;
      this.buscar(); 
      this.pedidosObs.unsubscribe()
    })*/  

    this.pedidosWoocommerceService.list().subscribe((pedidos:any) =>{
      console.log(pedidos)
      this.pedidosWoocommerceAll = pedidos;
      this.buscarWoocommerce();      
    })
  }

  

  seleccionarPedidoWoocommerce(order){
    let o = new WCOrder();
    o.asignarValores(order);
    
    this.navParametrosService.param = o;
    this.router.navigate(['details-pedido-woocommerce'])
  }

  /*
  focusBuscar(){
    this.showSearchBar = true;
    setTimeout(() => {
          // Set the focus to the input box of the ion-Searchbar component
    this.ionSearchbar.setFocus();
    },100);
  
  }*/


}
