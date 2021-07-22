import { Component, OnInit } from '@angular/core';
import { Cliente } from '../models/cliente';
import { ModalController, NavController } from '@ionic/angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthenticationService } from '../Services/authentication.service';
import { Subscription } from 'rxjs';
import { CarritoService } from '../Services/global/carrito.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { CajasService } from '../Services/cajas.service';
import { ActivatedRoute } from '@angular/router';
import { Caja } from '../models/caja';
import { MovimientoCtaCorriente } from '../models/movimientoCtaCorriente';
import { EnumTipoMovimientoCaja, MovimientoCaja } from '../models/movimientoCaja';
import { MovimientosService } from '../Services/movimientos.service';
import { ToastService } from '../Services/toast.service';
import { SelectClientePage } from '../select-cliente/select-cliente.page';

@Component({
  selector: 'app-form-extraccion-cta-corriente',
  templateUrl: './form-extraccion-cta-corriente.page.html',
  styleUrls: ['./form-extraccion-cta-corriente.page.scss'],
})
export class FormExtraccionCtaCorrientePage implements OnInit {

  private enumTipoMovimientoCaja = EnumTipoMovimientoCaja
  
  public monto = 0;
  public motivo=""
  public cliente:Cliente;
  public cajas=[];
  public caja:Caja;
  public cajaSeleccionada:any;
  public submitted = false;

  public ctaSubs:Subscription;
  public clienteSubs:Subscription;

  public updating:boolean = false;
  public titulo = "Nuevo Cta. Corriente";

  public metodoPagoSeleccionado=[];

  public extraccionId ="";
  public ctaCorrienteId ="";

  public montoPagoEfectivo =  0;
  public montoPagoDebito = 0;
  public montoPagoCredito = 0;
  public montoPagoCtaCorriente = 0;

  constructor(
    private modalController:ModalController,
    private navCtrl:NavController,
    private formBuilder: FormBuilder,
    private authenticationService:AuthenticationService,
    private carritoService:CarritoService,
    private firestore:AngularFirestore,
    private cajasService:CajasService,
    public route:ActivatedRoute,
    private movimientosService:MovimientosService,
    private toastServices:ToastService
  ) { 

    
    this.extraccionId = this.firestore.createId();
    this.ctaCorrienteId = this.route.snapshot.params.id;

    this.cliente = new Cliente();
    this.caja = new Caja();
  }

  ngOnInit() {


    
    this.cajasService.list().subscribe((cajas:any)=>{                 
      this.cajas =cajas;
      
    });
    
  }

  ionViewDidEnter(){
    
  }

  setearCliente(cliente){
    this.cliente = cliente;
  }

  setearMetodoPago(){
    console.log(this.metodoPagoSeleccionado)
  }


  async seleccionarCliente(){
    const modal = await this.modalController.create({
      component: SelectClientePage      
    });
    modal.onDidDismiss()
    .then((retorno) => {
      if(retorno.data){
        
        this.setearCliente(retorno.data.item);
      }        
    });
    return await modal.present();
  }

  seleccionarCaja(){
    this.caja.asignarValores(this.cajaSeleccionada);
  }

  guardar(){   

    this.metodoPagoSeleccionado.forEach(metodo =>{     

      let monto = 0;
      if(metodo === "efectivo"){
        monto = this.montoPagoEfectivo;
      }
      if(metodo === "debito"){
        monto = this.montoPagoDebito;
      }
      if(metodo === "credito"){
        monto = this.montoPagoCredito;
      }

      this.movimientosService.agregarMovimientoEnCtaCorriente(
        this.ctaCorrienteId,
        this.cliente.id,
        this.cliente.nombre,
        this.caja.id,
        metodo,
        - monto,
        this.motivo
      )

    })

    this.navCtrl.back();
  }

  eliminarCliente(){
    this.cliente = new Cliente();
  }

  cancelar(){
    this.navCtrl.back();
  }

  

}
