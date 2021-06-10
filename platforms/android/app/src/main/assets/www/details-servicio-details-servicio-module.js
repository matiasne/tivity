(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["details-servicio-details-servicio-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/details-servicio/details-servicio.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/details-servicio/details-servicio.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Detalle Servicio</ion-title>    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/details-servicio/details-servicio-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/details-servicio/details-servicio-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: DetailsServicioPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsServicioPageRoutingModule", function() { return DetailsServicioPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _details_servicio_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./details-servicio.page */ "./src/app/details-servicio/details-servicio.page.ts");




const routes = [
    {
        path: '',
        component: _details_servicio_page__WEBPACK_IMPORTED_MODULE_3__["DetailsServicioPage"]
    }
];
let DetailsServicioPageRoutingModule = class DetailsServicioPageRoutingModule {
};
DetailsServicioPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DetailsServicioPageRoutingModule);



/***/ }),

/***/ "./src/app/details-servicio/details-servicio.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/details-servicio/details-servicio.module.ts ***!
  \*************************************************************/
/*! exports provided: DetailsServicioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsServicioPageModule", function() { return DetailsServicioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _details_servicio_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./details-servicio-routing.module */ "./src/app/details-servicio/details-servicio-routing.module.ts");
/* harmony import */ var _details_servicio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./details-servicio.page */ "./src/app/details-servicio/details-servicio.page.ts");







let DetailsServicioPageModule = class DetailsServicioPageModule {
};
DetailsServicioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _details_servicio_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailsServicioPageRoutingModule"]
        ],
        declarations: [_details_servicio_page__WEBPACK_IMPORTED_MODULE_6__["DetailsServicioPage"]]
    })
], DetailsServicioPageModule);



/***/ }),

/***/ "./src/app/details-servicio/details-servicio.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/details-servicio/details-servicio.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbHMtc2VydmljaW8vZGV0YWlscy1zZXJ2aWNpby5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/details-servicio/details-servicio.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/details-servicio/details-servicio.page.ts ***!
  \***********************************************************/
/*! exports provided: DetailsServicioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsServicioPage", function() { return DetailsServicioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _Services_clientes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/clientes.service */ "./src/app/Services/clientes.service.ts");
/* harmony import */ var _Services_servicios_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/servicios.service */ "./src/app/Services/servicios.service.ts");
/* harmony import */ var _Services_subscripciones_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Services/subscripciones.service */ "./src/app/Services/subscripciones.service.ts");






let DetailsServicioPage = class DetailsServicioPage {
    constructor(route, clientesServices, serviciosServices, subscripcionesService, router) {
        this.route = route;
        this.clientesServices = clientesServices;
        this.serviciosServices = serviciosServices;
        this.subscripcionesService = subscripcionesService;
        this.router = router;
        this.clientes = [];
        var subsCliente = this.serviciosServices.get(this.route.snapshot.params.id).subscribe(resp => {
            this.servicio = resp.payload.data();
            /*this.subscripcionesService.getByServicio(this.route.snapshot.params.id).subscribe((snapshot) => {
              this.clientes = [];
              snapshot.forEach((snap: any) => {
                console.log(snap);
                this.clientesServices.get(snap.servicioId).subscribe((snapshot2)=>{
                  snap.servicio = snapshot2.payload.data();
                  this.clientes.push(snap);
                  console.log(this.clientes);
                });
              });
              subsCliente.unsubscribe();
            })*/
        });
    }
    ngOnInit() {
    }
};
DetailsServicioPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _Services_clientes_service__WEBPACK_IMPORTED_MODULE_3__["ClientesService"] },
    { type: _Services_servicios_service__WEBPACK_IMPORTED_MODULE_4__["ServiciosService"] },
    { type: _Services_subscripciones_service__WEBPACK_IMPORTED_MODULE_5__["SubscripcionesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
DetailsServicioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-details-servicio',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./details-servicio.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/details-servicio/details-servicio.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./details-servicio.page.scss */ "./src/app/details-servicio/details-servicio.page.scss")).default]
    })
], DetailsServicioPage);



/***/ })

}]);
//# sourceMappingURL=details-servicio-details-servicio-module.js.map