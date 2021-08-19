(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["servicio-calendario-servicio-calendario-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/servicio-calendario/servicio-calendario.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/servicio-calendario/servicio-calendario.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title  size=\"small\">servicio-calendario</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-button color=\"light\" (click)=\"agregarEspacios()\">Agregar Espacios</ion-button>\n  <full-calendar #fullcalendar deepChangeDetection=\"true\" [options]=\"calendarOptions\"></full-calendar>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/servicio-calendario/servicio-calendario-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/servicio-calendario/servicio-calendario-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: ServicioCalendarioPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicioCalendarioPageRoutingModule", function() { return ServicioCalendarioPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _servicio_calendario_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./servicio-calendario.page */ "./src/app/servicio-calendario/servicio-calendario.page.ts");




const routes = [
    {
        path: '',
        component: _servicio_calendario_page__WEBPACK_IMPORTED_MODULE_3__["ServicioCalendarioPage"]
    }
];
let ServicioCalendarioPageRoutingModule = class ServicioCalendarioPageRoutingModule {
};
ServicioCalendarioPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ServicioCalendarioPageRoutingModule);



/***/ }),

/***/ "./src/app/servicio-calendario/servicio-calendario.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/servicio-calendario/servicio-calendario.module.ts ***!
  \*******************************************************************/
/*! exports provided: ServicioCalendarioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicioCalendarioPageModule", function() { return ServicioCalendarioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _servicio_calendario_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./servicio-calendario-routing.module */ "./src/app/servicio-calendario/servicio-calendario-routing.module.ts");
/* harmony import */ var _servicio_calendario_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./servicio-calendario.page */ "./src/app/servicio-calendario/servicio-calendario.page.ts");
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fullcalendar/angular */ "./node_modules/@fullcalendar/angular/__ivy_ngcc__/fesm2015/fullcalendar-angular.js");








let ServicioCalendarioPageModule = class ServicioCalendarioPageModule {
};
ServicioCalendarioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_7__["FullCalendarModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _servicio_calendario_routing_module__WEBPACK_IMPORTED_MODULE_5__["ServicioCalendarioPageRoutingModule"]
        ],
        declarations: [_servicio_calendario_page__WEBPACK_IMPORTED_MODULE_6__["ServicioCalendarioPage"]]
    })
], ServicioCalendarioPageModule);



/***/ }),

/***/ "./src/app/servicio-calendario/servicio-calendario.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/servicio-calendario/servicio-calendario.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2lvLWNhbGVuZGFyaW8vc2VydmljaW8tY2FsZW5kYXJpby5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/servicio-calendario/servicio-calendario.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/servicio-calendario/servicio-calendario.page.ts ***!
  \*****************************************************************/
/*! exports provided: ServicioCalendarioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicioCalendarioPage", function() { return ServicioCalendarioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _Services_comercios_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/comercios.service */ "./src/app/Services/comercios.service.ts");



let ServicioCalendarioPage = class ServicioCalendarioPage {
    constructor(comerciosService) {
        this.comerciosService = comerciosService;
        this.eventsCalendar = [];
        //used to store initial data
        this.events = [];
        this.calendarEvents = [];
        this.initialized = false;
        this.calendarOptions = {
            headerToolbar: {
                left: 'dayGridMonth,timeGridWeek,timeGridDay',
                center: 'title',
                right: 'prevYear,prev,next,nextYear'
            },
            initialView: 'timeGridWeek',
            slotDuration: '00:15:00',
            dayHeaderFormat: { weekday: 'short' },
            dateClick: this.handleDateClick.bind(this),
            events: this.events,
        };
        this.horarios = [];
    }
    ngOnInit() {
    }
    gotoDate() {
        //the if condition is to prevent possible error
        if (this.calendarApi) {
            this.calendarApi.gotoDate(new Date());
        }
    }
    ionViewDidEnter() {
        this.calendarApi = this.calendarComponent.getApi();
        if (this.calendarApi && !this.initialized) {
            this.initialized = true;
        }
        let comercio_seleccionadoId = localStorage.getItem('comercio_seleccionadoId');
        console.log(comercio_seleccionadoId);
        this.comerciosService.get(comercio_seleccionadoId).subscribe(snapshot => {
            let com = snapshot.payload.data();
            com.horarios.forEach((item) => {
                this.horarios.push(item);
                console.log(item);
            });
            console.log(this.horarios);
            this.agregarFranjasAbierto();
        });
    }
    agregarFranjasAbierto() {
        console.log(this.calendarApi.view.currentStart.getTime() + " " + this.calendarApi.view.currentEnd.getTime());
        for (let loop = this.calendarApi.view.currentStart.getTime(); loop <= this.calendarApi.view.currentEnd.getTime(); loop = loop + (24 * 60 * 60 * 1000)) {
            var test_date = new Date(loop);
            this.horarios.forEach(horario => {
                if (test_date.getDay() == horario.dia) {
                    // we're in Moday, create the event
                    let calendarevent = {
                        startEditable: true,
                        id: "asd",
                        title: "titulo",
                        start: horario.desde,
                        end: horario.hasta,
                        editable: true,
                        display: 'background'
                    };
                    this.calendarEvents = this.eventsCalendar;
                    this.eventsCalendar.push(calendarevent);
                    this.calendarApi.addEventSource(this.calendarEvents);
                }
            });
        }
    }
    handleDateClick(arg) {
        alert('date click! ' + arg.dateStr);
    }
    agregarEspacios() {
    }
    onEventClick(event) {
        console.log(event.param.target);
    }
};
ServicioCalendarioPage.ctorParameters = () => [
    { type: _Services_comercios_service__WEBPACK_IMPORTED_MODULE_2__["ComerciosService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("fullcalendar", { static: true })
], ServicioCalendarioPage.prototype, "calendarComponent", void 0);
ServicioCalendarioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-servicio-calendario',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./servicio-calendario.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/servicio-calendario/servicio-calendario.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./servicio-calendario.page.scss */ "./src/app/servicio-calendario/servicio-calendario.page.scss")).default]
    })
], ServicioCalendarioPage);



/***/ })

}]);
//# sourceMappingURL=servicio-calendario-servicio-calendario-module.js.map