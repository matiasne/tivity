import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CalendarOptions, EventAddArg, FullCalendarComponent, Calendar, EventInput } from '@fullcalendar/angular'; // useful for typechecking
import { ModalController } from '@ionic/angular';
import { CalendarModal, CalendarModalOptions } from 'ion2-calendar';
import { Comercio } from 'src/app/models/comercio';
import { ComerciosService } from 'src/app/Services/comercios.service';
import { FormReservaPage } from '../../form-reserva/form-reserva.page';
import { Reserva } from '../../models/reserva';
import { Subscripcion } from '../../models/subscripcion';
import { NavegacionParametrosService } from '../../Services/global/navegacion-parametros.service';
import { ReservasService } from '../../Services/reservas.service';

@Component({
  selector: 'app-list-reservas-manager',
  templateUrl: './list-reservas-manager.component.html',
  styleUrls: ['./list-reservas-manager.component.scss'],
})
export class ListReservasManagerComponent implements AfterViewInit , OnChanges {

  //Filtros externos
  @Input() clienteIdFiltro= "";
  @Input() divisionFiltro ="";
  
  public fechaDesde = new Date();
  public fechaHasta = new Date();

  @ViewChild("fullcalendar", { static: false })
  calendarComponent: FullCalendarComponent;
  calendarApi: Calendar;

  events:any[] = [];

 
  @Input() vistaLista = false;

  private comercio:Comercio

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    slotDuration: '00:15:00',
    dayHeaderFormat:{ weekday: 'short' },
    dateClick: this.handleDateClick.bind(this), // bind is important!
   // events: this.events,
    height:900,  
    eventClick: this.handleEventClick.bind(this),
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
  };



  public itemsAll:any[] = [];

  public itemsView:Reserva[] =[];

  public obsReserva:any;

  public initCalendar = true;

  constructor(
    private reservasService:ReservasService,
    private modalCtrl:ModalController,
    private navParametrosService:NavegacionParametrosService,
    private router:Router,
    private comercioService:ComerciosService,
  ) { }  

  ngAfterViewInit() {

    if(this.initCalendar){
      this.initCalendar = false
      this.calendarApi = this.calendarComponent.getApi();
      
    //  this.calendarApi.gotoDate(new Date())
    }
     
      
      this.obsReserva = this.reservasService.listReservas().subscribe((data:any)=>{
        this.itemsAll = data;      
        this.mostrar(this.itemsAll)
      })
      this.comercio = new Comercio()
      this.comercio.asignarValores(this.comercioService.getSelectedCommerceValue())
    
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("!!!!change")
    this.mostrar(this.itemsAll)        
  } 

  editar(reserva){
    this.editarReserva(reserva)
  }

  
  handleEventClick(info){
    console.log('Event: ' + info.event.title);
    console.log(info.event.extendedProps);
    let reserva = new Reserva()
    reserva.asignarValores(info.event.extendedProps)
    this.editarReserva(reserva)
  }
  
  handleDateClick(arg) {
    this.nuevaReserva(arg.date)  
  }


  async editarReserva(reserva){
    
    
    let res = new Reserva();
    res.asignarValores(reserva)

    this.navParametrosService.param = res
    const modal = await this.modalCtrl.create({
      component: FormReservaPage,  
      componentProps:{
        reserva:res
      },
      cssClass:'modal-custom-wrapper',
    });         

    modal.onDidDismiss()
    
    .then((retorno) => { 

      if(retorno.data){   
       
      this.reservasService.update(retorno.data).then(data=>{
        console.log("Reserva guardada")
      })
      }else{

      }     


    });

    await modal.present();
  }

  async nuevaReserva(fechaInicio = null){
    
    let res = new Reserva();

    if(fechaInicio){

      console.log(fechaInicio)
      let dateInicio = new Date(fechaInicio)  //Pot problemas con la hora que no viene en el calendario
      console.log(dateInicio)
      res.desde = dateInicio.toISOString();
    }


    if(this.divisionFiltro != ""){
      res.divisionNombre = this.divisionFiltro
    }

    if(this.clienteIdFiltro){
      res.asignarCliente(this.navParametrosService.param)
    }
    console.log(res)
    const modal = await this.modalCtrl.create({
      component: FormReservaPage,
      componentProps:{
        reserva: res,
     },     
      cssClass:'modal-custom-wrapper',

    });         

    modal.onDidDismiss()
    
    .then((retorno) => { 

      if(retorno.data){   
      this.reservasService.add(retorno.data).then(data=>{
        console.log("Reserva guardada")
        this.updateCalendar()
      })
      }else{

      }     
    });

    await modal.present();
  }


  mostrar(arrayElementos){
   
    console.log(arrayElementos.length);    
    this.itemsView = []  
    for(let i = 0; i < arrayElementos.length; i++){

        
        let encontrado = true;
        
        if(encontrado  && this.divisionFiltro){   
          encontrado = false;
          let retorno =  (arrayElementos[i].divisionNombre.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").indexOf(this.divisionFiltro.toLowerCase()) > -1);
          encontrado = retorno;          
        }
       

        if(encontrado && this.clienteIdFiltro){  
          encontrado = false; 
          if(arrayElementos[i].clienteId === this.clienteIdFiltro){
            encontrado = true;
          }
        }
        console.log(encontrado)
        if(encontrado && this.vistaLista){
          encontrado = false;
          let desdeReserva = new Date(arrayElementos[i].desde).getTime();
          if(desdeReserva > this.fechaDesde.getTime() && desdeReserva < this.fechaHasta.getTime())
            encontrado = true;
        }

        if(encontrado){
          
          
          
          this.itemsView.push(arrayElementos[i])


        }
    }

    this.updateCalendar();

    
  }

  borrarDatosComponente() { // debe ser llamado por la página que contiene el componente
    this.obsReserva.unsubscribe()
  }

  updateCalendar(){
    if(this.calendarApi){
      this.calendarApi.removeAllEvents()
      this.calendarApi.gotoDate(new Date())
      this.itemsView.forEach(element => {
        let event = {
          id:element.id,
          title:"reserva",
          start:element.desde,
          end:element.hasta,
          color:element.estado.color,
          extendedProps:JSON.parse(JSON.stringify(element))          
        }
        this.calendarApi.addEvent(event)
        
        this.events.push(event);
      })
    }
    
  }

 
  
  cambiarCalendario(){
    this.router.navigate(['list-reservas-calendario']);
  }

  async abrirSelectorFechas(){
    
    let comienzo = new Date();
    comienzo.setDate(comienzo.getDate() - this.comercio.config.memoriaDias);  
    const options: CalendarModalOptions = {
      title: '',
      from:comienzo,
      pickMode: 'range'
    };
 
    const myCalendar = await this.modalCtrl.create({
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
        this.mostrar(this.itemsAll)
      }       
    });
 
    myCalendar.present();

  }

  

}
