import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import * as firebase from 'firebase';
import { Comercio } from 'src/app/models/comercio';
import { EnumEstadoCobro, Pedido } from 'src/app/models/pedido';
import { EnumEstadoCocina } from 'src/app/models/item';
import { ComerciosService } from 'src/app/Services/comercios.service';

@Component({
  selector: 'app-card-pedido',
  templateUrl: './card-pedido.component.html',
  styleUrls: ['./card-pedido.component.scss'],
})
export class CardPedidoComponent implements OnInit, OnDestroy {
 
  @Input() item:Pedido;
  @Output() select = new EventEmitter<any>();
  public pEstado = EnumEstadoCocina;
  public cEstado = EnumEstadoCobro;
  public comercio:Comercio

  public vencimiento:any 
  public minutosRestantes = 0;
  public interval:any
  public restantesPorcentaje = 100;

  constructor(
    private comercioService:ComerciosService
  ) {  
    this.item = new Pedido(); 
    this.item.createdAt = firebase.firestore.Timestamp
    this.comercio = new Comercio()
    this.comercio.asignarValores(this.comercioService.getSelectedCommerceValue())
   } 

  ngOnInit() {
    this.setVencimiento()
   
  }

  seleccionar(){
    this.select.emit();  
  }

  setVencimiento(){ 
    this.vencimiento = this.item.createdAt.toDate()
    if(this.item.comanda){
      if(this.item.comanda.demora > 0){
        this.vencimiento.setMinutes(this.item.createdAt.toDate().getMinutes() + this.item.comanda.demora);

        let fechaHoy = new Date()
        this.minutosRestantes = Math.round((this.vencimiento.getTime() - fechaHoy.getTime()) / (1000 * 60))

        if(this.minutosRestantes < 0){
          this.minutosRestantes = 0;
        }
        
        this.restantesPorcentaje = (this.minutosRestantes/this.item.comanda.demora)*100        
        console.log(this.minutosRestantes+" %"+this.restantesPorcentaje)

        this.interval = setInterval(()=>{
          
            
            let fechaHoy = new Date()
            this.minutosRestantes = Math.round((this.vencimiento.getTime() - fechaHoy.getTime()) / (1000 * 60))
            
            
            

            this.restantesPorcentaje = (this.minutosRestantes/this.item.comanda.demora)*100

            console.log(this.minutosRestantes+" %"+this.restantesPorcentaje)
          
        },60000)
      }
    }
    
    
  }

  ngOnDestroy(){ 
    console.log("destroy pedido")
    clearInterval(this.interval);
  }



}
