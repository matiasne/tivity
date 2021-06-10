(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["details-subscripcion-details-subscripcion-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/details-subscripcion/details-subscripcion.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/details-subscripcion/details-subscripcion.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Detalle Subscripción</ion-title>    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <app-card-subscription [item]=\"subscripcion\"></app-card-subscription>\n  <ion-item *ngFor=\"let pagare of pagares\">\n    <ion-label>\n      {{pagare.createdAt | date:'dd/MM/yyyy'}} {{pagare.monto | currency}} \n    </ion-label>\n    \n\n      <ion-button  slot=\"end\" *ngIf=\"pagare.estado == 'debe'\" size=\"large\"  (click)=\"cobrar(pagare)\"  expand=\"block\">Cobrar</ion-button>\n\n  </ion-item>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/Services/pagares.service.ts":
/*!*********************************************!*\
  !*** ./src/app/Services/pagares.service.ts ***!
  \*********************************************/
/*! exports provided: PagaresService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagaresService", function() { return PagaresService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base.service */ "./src/app/Services/base.service.ts");
/* harmony import */ var _comercios_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comercios.service */ "./src/app/Services/comercios.service.ts");





let PagaresService = class PagaresService extends _base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] {
    constructor(afs, comerciosService) {
        super(afs);
        this.afs = afs;
        this.comerciosService = comerciosService;
        this.subsId = "";
        this.comercioId = "";
        this.comerciosService.getSelectedCommerce().subscribe(data => {
            // let comercio_seleccionadoId = localStorage.getItem('comercio_seleccionadoId'); 
            if (data) {
                this.comercioId = data.id;
            }
        });
    }
    setSubsId(id) {
        this.subsId = id;
        console.log("comercios/" + this.comercioId + "/subscripciones/" + this.subsId + "/pagares");
        this.setPath("comercios/" + this.comercioId + "/subscripciones/" + this.subsId + "/pagares");
    }
};
PagaresService.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _comercios_service__WEBPACK_IMPORTED_MODULE_4__["ComerciosService"] }
];
PagaresService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PagaresService);



/***/ }),

/***/ "./src/app/details-subscripcion/details-subscripcion-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/details-subscripcion/details-subscripcion-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: DetailsSubscripcionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsSubscripcionPageRoutingModule", function() { return DetailsSubscripcionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _details_subscripcion_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./details-subscripcion.page */ "./src/app/details-subscripcion/details-subscripcion.page.ts");




const routes = [
    {
        path: '',
        component: _details_subscripcion_page__WEBPACK_IMPORTED_MODULE_3__["DetailsSubscripcionPage"]
    }
];
let DetailsSubscripcionPageRoutingModule = class DetailsSubscripcionPageRoutingModule {
};
DetailsSubscripcionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DetailsSubscripcionPageRoutingModule);



/***/ }),

/***/ "./src/app/details-subscripcion/details-subscripcion.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/details-subscripcion/details-subscripcion.module.ts ***!
  \*********************************************************************/
/*! exports provided: DetailsSubscripcionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsSubscripcionPageModule", function() { return DetailsSubscripcionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _details_subscripcion_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./details-subscripcion-routing.module */ "./src/app/details-subscripcion/details-subscripcion-routing.module.ts");
/* harmony import */ var _details_subscripcion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./details-subscripcion.page */ "./src/app/details-subscripcion/details-subscripcion.page.ts");
/* harmony import */ var _Components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Components/components.module */ "./src/app/Components/components.module.ts");








let DetailsSubscripcionPageModule = class DetailsSubscripcionPageModule {
};
DetailsSubscripcionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _Components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _details_subscripcion_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailsSubscripcionPageRoutingModule"]
        ],
        declarations: [_details_subscripcion_page__WEBPACK_IMPORTED_MODULE_6__["DetailsSubscripcionPage"]]
    })
], DetailsSubscripcionPageModule);



/***/ }),

/***/ "./src/app/details-subscripcion/details-subscripcion.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/details-subscripcion/details-subscripcion.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbHMtc3Vic2NyaXBjaW9uL2RldGFpbHMtc3Vic2NyaXBjaW9uLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/details-subscripcion/details-subscripcion.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/details-subscripcion/details-subscripcion.page.ts ***!
  \*******************************************************************/
/*! exports provided: DetailsSubscripcionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsSubscripcionPage", function() { return DetailsSubscripcionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _Services_subscripciones_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/subscripciones.service */ "./src/app/Services/subscripciones.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _models_subscripcion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/subscripcion */ "./src/app/models/subscripcion.ts");
/* harmony import */ var _models_cliente__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/cliente */ "./src/app/models/cliente.ts");
/* harmony import */ var _models_servicio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/servicio */ "./src/app/models/servicio.ts");
/* harmony import */ var _Services_pagares_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Services/pagares.service */ "./src/app/Services/pagares.service.ts");








let DetailsSubscripcionPage = class DetailsSubscripcionPage {
    constructor(route, subscripcionesService, pagaresService) {
        this.route = route;
        this.subscripcionesService = subscripcionesService;
        this.pagaresService = pagaresService;
        this.pagares = [];
        this.subscripcion = new _models_subscripcion__WEBPACK_IMPORTED_MODULE_4__["Subscripcion"]("", "");
        this.cliente = new _models_cliente__WEBPACK_IMPORTED_MODULE_5__["Cliente"]();
        this.servicio = new _models_servicio__WEBPACK_IMPORTED_MODULE_6__["Servicio"]();
    }
    ngOnInit() {
        this.subscripcionesService.get(this.route.snapshot.params.id).subscribe(data => {
            console.log(data);
            this.subscripcion.asignarValores(data);
            this.subscripcion.clienteRef.get().then(snap => {
                this.subscripcion["cliente"].nombre = snap.data().nombre;
            });
            this.subscripcion.servicioRef.get().then(snap => {
                if (snap)
                    this.subscripcion["servicio"].nombre = snap.data().nombre;
            });
            if (this.subscripcion.planRef) {
                this.subscripcion.planRef.get().then(snap => {
                    if (snap) {
                        this.subscripcion['plan'].nombre = snap.data().nombre;
                        this.subscripcion['plan'].precio = snap.data().precio;
                    }
                });
            }
            else {
                this.subscripcion['plan'] = {
                    precio: this.subscripcion.precio,
                    tipo: this.subscripcion.tipo,
                    dias: this.subscripcion.dias,
                    nombre: "Personalizado"
                };
            }
            let fechaActual = new Date();
            let fechaAMesActual = new Date(this.subscripcion.fechaInicio);
            fechaAMesActual.setMonth(fechaActual.getMonth());
            if (fechaActual > fechaAMesActual) {
                fechaAMesActual.setMonth(fechaActual.getMonth() + 1);
            }
            let fechaProximoPago = fechaAMesActual;
            this.subscripcion.proximoPago = fechaProximoPago;
            console.log(fechaProximoPago);
        });
        this.pagaresService.setSubsId(this.route.snapshot.params.id);
        this.pagaresService.list().subscribe(data => {
            console.log(data);
            this.pagares = data;
        });
    }
    cobrar(pagare) {
    }
};
DetailsSubscripcionPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _Services_subscripciones_service__WEBPACK_IMPORTED_MODULE_2__["SubscripcionesService"] },
    { type: _Services_pagares_service__WEBPACK_IMPORTED_MODULE_7__["PagaresService"] }
];
DetailsSubscripcionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-details-subscripcion',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./details-subscripcion.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/details-subscripcion/details-subscripcion.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./details-subscripcion.page.scss */ "./src/app/details-subscripcion/details-subscripcion.page.scss")).default]
    })
], DetailsSubscripcionPage);



/***/ }),

/***/ "./src/app/models/servicio.ts":
/*!************************************!*\
  !*** ./src/app/models/servicio.ts ***!
  \************************************/
/*! exports provided: Servicio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Servicio", function() { return Servicio; });
class Servicio {
    constructor() {
        this.id = "";
        this.plan = {
            id: "",
            nombre: "",
            precio: 0,
            tipo: "",
            dias: ""
        };
        this.nombre = "";
        this.descripcion = "";
        this.categorias = [];
        this.profesionales = [];
        this.foto = "";
        this.createdAt = "";
        this.fechaInicio = "";
        this.pagoAdelantado = "true";
        this.descripcion_venta = "";
        this.recibirReservas = true;
        this.precio = 0;
        this.tipo = "";
        this.dias = "";
    }
    asignarValores(init) {
        Object.assign(this, init);
    }
}


/***/ })

}]);
//# sourceMappingURL=details-subscripcion-details-subscripcion-module.js.map