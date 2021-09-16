import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CalendarOptions, EventAddArg, FullCalendarComponent, Calendar, EventInput } from '@fullcalendar/angular'; // useful for typechecking
import { ModalController } from '@ionic/angular';
import { FormReservaPage } from '../form-reserva/form-reserva.page';
import { Reserva } from '../models/reserva';
import { Subscripcion } from '../models/subscripcion';
import { NavegacionParametrosService } from '../Services/global/navegacion-parametros.service';
import { ReservasService } from '../Services/reservas.service';

@Component({
  selector: 'app-list-reservas-calendario',
  templateUrl: './list-reservas-calendario.page.html',
  styleUrls: ['./list-reservas-calendario.page.scss'],
})
export class ListReservasCalendarioPage implements OnInit {

  @ViewChild("fullcalendar", { static: true })
  calendarComponent: FullCalendarComponent;

  eventsCalendar: any[] = [];
  //used to store initial data
  events:any[] = [];

  calendarApi: Calendar;

  calendarEvents: EventInput[] = [
  ];

  initialized = false;

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


  constructor(
    private reservasService:ReservasService,
    private modalCtrl:ModalController,
    private navParametrosService:NavegacionParametrosService,
    private router:Router
  ) { }

  ionViewDidEnter(){
    this.calendarApi = this.calendarComponent.getApi();
    if (this.calendarApi && !this.initialized) {
      this.initialized = true;
    }
    this.calendarApi.gotoDate(new Date())

    this.reservasService.listReservas().subscribe((data:any)=>{
      console.log(data)
      this.itemsAll = data;      
      this.mostrar(this.itemsAll)
    })
    
    //this.calendarApi.addEvent()

  }

  ngOnInit() {
   
  }

  handleEventClick(info){
    console.log('Event: ' + info.event.title);
    console.log(info.event.extendedProps);
    let reserva = new Reserva()
    reserva.asignarValores(info.event.extendedProps)
    this.editarReserva(reserva)
  }
  
  handleDateClick(arg) {
    this.nuevaReserva(arg.dateStr)  
  }

  async editarReserva(reserva:Reserva){
    this.navParametrosService.param = reserva
    const modal = await this.modalCtrl.create({
      component: FormReservaPage,  
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
    this.navParametrosService.param = null
    const modal = await this.modalCtrl.create({
        component: FormReservaPage,
        componentProps:{
          fechaInicio:fechaInicio
        },     
        cssClass:'modal-custom-wrapper',

      });         

      modal.onDidDismiss()
      
      .then((retorno) => { 

        if(retorno.data){   
        this.reservasService.add(retorno.data).then(data=>{
          console.log("Reserva guardada")
        })
        }else{

        }     


      });

      await modal.present();
  }

  mostrar(arrayElementos){
    console.log(arrayElementos)
    this.itemsView = arrayElementos;
    this.calendarApi.removeAllEvents()
    this.itemsView.forEach(element => {
        let event = {
          id:element.id,
          title:"reserva",
          start:element.desde,
          end:element.hasta,
          color:element.estado.color,
          extendedProps:JSON.parse(JSON.stringify(element))          
        }
        console.log(event)
        this.calendarApi.addEvent(event)
        
        this.events.push(event);
    })
  }

  cambiarLista(){
    this.router.navigate(['list-reservas']);
  }



}
