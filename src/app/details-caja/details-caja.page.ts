import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ComerciosService } from '../Services/comercios.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CajasService } from '../Services/cajas.service';
import { VentasService } from '../Services/ventas.service';
import { LoadingService } from '../Services/loading.service';
import { AlertController, ModalController } from '@ionic/angular';
import { Caja } from '../models/caja';
import { EnumTipoMovimientoCaja, MovimientoCaja } from '../models/movimientoCaja';
import { MovimientosService } from '../Services/movimientos.service';
import { Comercio } from '../models/comercio';
import { PedidoService } from '../Services/pedido.service';
import { Pedido } from '../models/pedido';
import { NavegacionParametrosService } from '../Services/global/navegacion-parametros.service';
import { DetailsPedidoPage } from '../details-pedido/details-pedido.page';

@Component({
  selector: 'app-details-caja',
  templateUrl: './details-caja.page.html',
  styleUrls: ['./details-caja.page.scss'],
})
export class DetailsCajaPage implements OnInit {

  public enumTipoMovimientoCaja = EnumTipoMovimientoCaja
  
  public items:MovimientoCaja[] = [];
  public caja:Caja;
  
  public totalGeneral = 0;

  public optionCaja = "";

  public fechaDesde = new Date();

  public comercio:Comercio

  public totales = {
    efectivo: 0,
    debito:0,
    credito:0,
    ctaCorriente:0,
    general:0
  }
  constructor(
    public cajasService:CajasService,
    public ventasServices:VentasService,
    public router:Router,
    public loadingService:LoadingService,
    public alertController:AlertController,
    private movimientosService:MovimientosService,
    private route:ActivatedRoute,
    private comercioService:ComerciosService,
    private pedidosService:PedidoService,
    public navParametrosService:NavegacionParametrosService,
    private modalController:ModalController,
    public changeRef:ChangeDetectorRef,
  ) { 
    this.comercio = new Comercio()
    this.caja = new Caja();
    this.caja.id = this.route.snapshot.params.id;
    this.fechaDesde.setDate(this.fechaDesde.getDate() - 1);

    this.comercio = this.comercioService.getSelectedCommerceValue()
    if(this.comercio.config.movimientosCajas){
      this.movimientosService.setearPath(this.caja.id)
      this.movimientosService.getMovimientosCaja(this.caja.id,this.fechaDesde).subscribe(data =>{
      
        this.items = data;
        console.log(this.items)     
      }); 
    }

  }

  ngOnInit() {
    
  }

  onChangeAtras(event){
    this.fechaDesde.setDate(this.fechaDesde.getDate() - Number(event.target.value));
    this.refrescar()   
  }

  refrescar(){
    
    this.cajasService.get(this.caja.id).subscribe(data=>{
      this.caja.asignarValores(data);
      console.log(data)
      console.log("Cambiando valores de caja!")
      this.changeRef.detectChanges()   
    })
    
  }

  ionViewDidEnter(){    
    
    this.refrescar();        
          
  }


  ionViewDidLeave(){
    
  }
  
  irEgreso(){
    this.router.navigate(['form-egreso-caja',
    {
      cajaId:this.caja.id,
      totalActual: this.caja.totalEfectivo
    }
    ]);
  }

  irIngreso(){
    this.router.navigate(['form-ingreso-caja',
    {
      cajaId:this.caja.id
    }
    ]);
  }

  irCierre(){
    this.router.navigate(['form-cierre-caja',
      {
        cajaId:this.caja.id,
      }
    ]);
  }

  irApertura(){
    this.router.navigate(['form-apertura-caja',
      {
        cajaId:this.caja.id,
      }
    ]);
  }

  async eliminar(item){

    const alert = await this.alertController.create({
      header: 'Está seguro que desea eliminar el movimiento?',
      message: 'Se perderán los registros del mismo',
      buttons: [
        {
          text: 'Cancelar',
          handler: (blah) => {
            
          }
        }, {
          text: 'Eliminar',
          handler: () => {  

            
            this.movimientosService.eliminarMovimientoCaja(this.caja,item);
            this.refrescar();
          }
        }
      ]
    });
    await alert.present();    
  }

  seleccionar(item){
    if(item.pedidoId){
      let obs = this.pedidosService.get(item.pedidoId).subscribe(async data=>{

        let editarPedido = new Pedido();
        editarPedido.asignarValores(data);
        
        this.navParametrosService.param = editarPedido;
      // this.router.navigate(['details-pedido'])

        const modal = await this.modalController.create({
          component: DetailsPedidoPage,
          id:'detail-pedido'      
        });
        modal.onDidDismiss()
        .then((retorno) => {
          this.refrescar()
        })

        
        await modal.present();  
      })
    }
  }


}
