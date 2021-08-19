(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["details-caja-details-caja-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/details-caja/details-caja.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/details-caja/details-caja.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>  \n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title  size=\"small\">Cajas</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  \n  \n\n  <ion-item>  \n    <div slot=\"start\">\n      <ion-icon name=\"file-tray-full-outline\"></ion-icon>\n    </div>      \n    <ion-label>\n      <b>{{caja.nombre}}</b> \n      <p>Efectivo: {{caja.totalEfectivo | currency}} <br> Débito: {{caja.totalDebito | currency}} <br> Crédito: {{caja.totalCredito | currency}}</p>        \n    </ion-label>   \n  </ion-item> \n  \n  <ion-toolbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-button *ngIf=\"caja.estado =='abierta'\" class=\"button-rounded\" (click)=\"irEgreso()\"  expand=\"block\">Egreso</ion-button>\n        </ion-col>\n        <ion-col>\n          <ion-button *ngIf=\"caja.estado =='abierta'\" class=\"button-rounded\" (click)=\"irIngreso()\"  expand=\"block\">Ingreso</ion-button>\n        </ion-col>\n        <ion-col>\n          <ion-button *ngIf=\"caja.estado =='abierta'\" class=\"button-rounded\" color=\"danger\" (click)=\"irCierre()\"  expand=\"block\">Cierre</ion-button>\n          <ion-button *ngIf=\"caja.estado =='cerrada'\" class=\"button-rounded\" color=\"primary\" (click)=\"irApertura()\"  expand=\"block\">Abrir</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>    \n  </ion-toolbar>\n\n  <ion-item class=\"form-select\" *ngIf=\"comercio.config.movimientosCajas\"> \n    <ion-label position=\"floating\">Desde</ion-label>\n    <ion-select multiple=false (ionChange)=\"onChangeAtras($event)\">\n      <ion-select-option  [value]=\"1\" selected>Ayer</ion-select-option>\n      <ion-select-option  [value]=\"2\">2 días atras</ion-select-option>\n      <ion-select-option  [value]=\"7\">Una semana atrás</ion-select-option>\n    </ion-select>       \n  </ion-item>  \n\n  <ion-list lines=\"none\"> \n    <div *ngFor=\"let item of items\" >\n    <ion-item-sliding \n    [ngClass]=\"{  \n      'item-card': true, \n      'pago-card': item.pago, \n      'cierre-card': item.cierre,\n      'egreso-card': item.egreso\n    }\"\n    >\n    <ion-item (click)=seleccionar(item)>\n      \n      <div style=\"color:#50b223\" *ngIf=\"item.tipo == enumTipoMovimientoCaja.pago\">\n        <ion-icon name=\"caret-up-circle-outline\"></ion-icon>\n      </div> \n\n      <div style=\"color:#50b223\" *ngIf=\"item.tipo == enumTipoMovimientoCaja.ingreso\">\n        <ion-icon name=\"caret-up-circle-outline\"></ion-icon>\n      </div> \n    \n      <div style=\"color:#b22323\" *ngIf=\"item.tipo == enumTipoMovimientoCaja.egreso\">\n        <ion-icon name=\"caret-down-circle-outline\"></ion-icon>\n      </div>  \n      \n      <div style=\"color:#b223b2\" *ngIf=\"item.tipo == enumTipoMovimientoCaja.cierre\">\n        <ion-icon name=\"caret-down-circle-outline\"></ion-icon>\n      </div>\n\n      <div style=\"color:#2350b2\" *ngIf=\"item.tipo == enumTipoMovimientoCaja.apertura\">\n        <ion-icon name=\"caret-down-circle-outline\"></ion-icon>\n      </div>\n\n      <ion-label *ngIf=\"item.tipo == enumTipoMovimientoCaja.pago\" class=\"ion-text-wrap\">\n        <h2>Pago: <b>{{item.monto | currency}}</b> en {{item.metodoPago}}</h2>     \n        <p>\n          {{item.motivo}}\n        </p>     \n        <p style=\"font-size: 12px;\" >\n          {{item.vendedorNombre}} - {{item.createdAt.toDate() | date:'dd/MM/yyyy (EEE) - hh:mm aaa'}}\n        </p>           \n      </ion-label>    \n\n      <ion-label *ngIf=\"item.tipo == enumTipoMovimientoCaja.ingreso\" class=\"ion-text-wrap\">\n        <h2>Ingreso: <b>{{item.monto | currency}}</b> en {{item.metodoPago}}</h2>     \n        <p>\n          {{item.motivo}}\n        </p>     \n        <p style=\"font-size: 12px;\" >\n          {{item.vendedorNombre}} - {{item.createdAt.toDate() | date:'dd/MM/yyyy (EEE) - hh:mm aaa'}}\n        </p>           \n      </ion-label> \n\n      <ion-label *ngIf=\"item.tipo == enumTipoMovimientoCaja.egreso\" class=\"ion-text-wrap\">\n        <h2>Egreso: <b>{{item.monto | currency}}</b> en {{item.metodoPago}}</h2>         \n        <p>\n          {{item.motivo}}\n        </p> \n        <p style=\"font-size: 12px;\" >\n          {{item.vendedorNombre}} - {{item.createdAt.toDate() | date:'dd/MM/yyyy (EEE) - hh:mm aaa'}}\n        </p>           \n      </ion-label>  \n\n      <ion-label *ngIf=\"item.tipo == enumTipoMovimientoCaja.cierre\" class=\"ion-text-wrap\">\n        <h2>Cierre: <b>{{item.monto | currency}}</b> \n          <span *ngIf=\"item.metodoPago == 'efectivo'\"> en efectivo</span>\n          <span *ngIf=\"item.metodoPago == 'debito'\"> en débito</span>\n          <span *ngIf=\"item.metodoPago == 'credito'\"> en crédito</span>\n        </h2>         \n        <p>\n          Cierer de Caja\n        </p> \n        <p style=\"font-size: 12px;\">\n          {{item.vendedorNombre}} - {{item.createdAt.toDate() | date:'dd/MM/yyyy (EEE) - hh:mm aaa'}}\n        </p>           \n      </ion-label>   \n\n\n      <ion-label *ngIf=\"item.tipo == enumTipoMovimientoCaja.apertura\" class=\"ion-text-wrap\">\n        <h2>Apertura: <b>{{item.monto | currency}}</b> \n          <span *ngIf=\"item.metodoPago == 'efectivo'\"> en efectivo</span>\n          <span *ngIf=\"item.metodoPago == 'debito'\"> en débito</span>\n          <span *ngIf=\"item.metodoPago == 'credito'\"> en crédito</span>\n        </h2>         \n        <p>\n          Apertura de Caja\n        </p> \n        <p style=\"font-size: 12px;\">\n          {{item.vendedorNombre}} - {{item.createdAt.toDate() | date:'dd/MM/yyyy (EEE) - hh:mm aaa'}}\n        </p>           \n      </ion-label>  \n\n\n    </ion-item>\n    <ion-item-options side=\"end\">\n      <ion-item-option color=\"danger\" (click)=\"eliminar(item)\"><ion-icon name=\"trash\" ></ion-icon> Eliminar</ion-item-option>\n    </ion-item-options>\n\n  </ion-item-sliding>\n</div>  \n  \n</ion-list>\n \n  \n</ion-content>");

/***/ }),

/***/ "./src/app/details-caja/details-caja-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/details-caja/details-caja-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: DetailsCajaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsCajaPageRoutingModule", function() { return DetailsCajaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _details_caja_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./details-caja.page */ "./src/app/details-caja/details-caja.page.ts");




const routes = [
    {
        path: '',
        component: _details_caja_page__WEBPACK_IMPORTED_MODULE_3__["DetailsCajaPage"]
    }
];
let DetailsCajaPageRoutingModule = class DetailsCajaPageRoutingModule {
};
DetailsCajaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DetailsCajaPageRoutingModule);



/***/ }),

/***/ "./src/app/details-caja/details-caja.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/details-caja/details-caja.module.ts ***!
  \*****************************************************/
/*! exports provided: DetailsCajaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsCajaPageModule", function() { return DetailsCajaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _details_caja_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./details-caja-routing.module */ "./src/app/details-caja/details-caja-routing.module.ts");
/* harmony import */ var _details_caja_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./details-caja.page */ "./src/app/details-caja/details-caja.page.ts");







let DetailsCajaPageModule = class DetailsCajaPageModule {
};
DetailsCajaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _details_caja_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailsCajaPageRoutingModule"]
        ],
        declarations: [_details_caja_page__WEBPACK_IMPORTED_MODULE_6__["DetailsCajaPage"]]
    })
], DetailsCajaPageModule);



/***/ }),

/***/ "./src/app/details-caja/details-caja.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/details-caja/details-caja.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbHMtY2FqYS9kZXRhaWxzLWNhamEucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/details-caja/details-caja.page.ts":
/*!***************************************************!*\
  !*** ./src/app/details-caja/details-caja.page.ts ***!
  \***************************************************/
/*! exports provided: DetailsCajaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsCajaPage", function() { return DetailsCajaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _Services_comercios_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/comercios.service */ "./src/app/Services/comercios.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _Services_cajas_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/cajas.service */ "./src/app/Services/cajas.service.ts");
/* harmony import */ var _Services_ventas_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Services/ventas.service */ "./src/app/Services/ventas.service.ts");
/* harmony import */ var _Services_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Services/loading.service */ "./src/app/Services/loading.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _models_caja__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models/caja */ "./src/app/models/caja.ts");
/* harmony import */ var _models_movimientoCaja__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../models/movimientoCaja */ "./src/app/models/movimientoCaja.ts");
/* harmony import */ var _Services_movimientos_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Services/movimientos.service */ "./src/app/Services/movimientos.service.ts");
/* harmony import */ var _models_comercio__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../models/comercio */ "./src/app/models/comercio.ts");
/* harmony import */ var _Services_pedido_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Services/pedido.service */ "./src/app/Services/pedido.service.ts");
/* harmony import */ var _models_pedido__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../models/pedido */ "./src/app/models/pedido.ts");
/* harmony import */ var _Services_global_navegacion_parametros_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Services/global/navegacion-parametros.service */ "./src/app/Services/global/navegacion-parametros.service.ts");
/* harmony import */ var _details_pedido_details_pedido_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../details-pedido/details-pedido.page */ "./src/app/details-pedido/details-pedido.page.ts");
















let DetailsCajaPage = class DetailsCajaPage {
    constructor(cajasService, ventasServices, router, loadingService, alertController, movimientosService, route, comercioService, pedidosService, navParametrosService, modalController, changeRef) {
        this.cajasService = cajasService;
        this.ventasServices = ventasServices;
        this.router = router;
        this.loadingService = loadingService;
        this.alertController = alertController;
        this.movimientosService = movimientosService;
        this.route = route;
        this.comercioService = comercioService;
        this.pedidosService = pedidosService;
        this.navParametrosService = navParametrosService;
        this.modalController = modalController;
        this.changeRef = changeRef;
        this.enumTipoMovimientoCaja = _models_movimientoCaja__WEBPACK_IMPORTED_MODULE_9__["EnumTipoMovimientoCaja"];
        this.items = [];
        this.totalGeneral = 0;
        this.optionCaja = "";
        this.fechaDesde = new Date();
        this.totales = {
            efectivo: 0,
            debito: 0,
            credito: 0,
            ctaCorriente: 0,
            general: 0
        };
        this.comercio = new _models_comercio__WEBPACK_IMPORTED_MODULE_11__["Comercio"]();
        this.caja = new _models_caja__WEBPACK_IMPORTED_MODULE_8__["Caja"]();
        this.caja.id = this.route.snapshot.params.id;
        this.fechaDesde.setDate(this.fechaDesde.getDate() - 1);
        this.comercio = this.comercioService.getSelectedCommerceValue();
        if (this.comercio.config.movimientosCajas) {
            this.movimientosService.setearPath(this.caja.id);
            this.movimientosService.getMovimientosCaja(this.caja.id, this.fechaDesde).subscribe(data => {
                this.items = data;
                console.log(this.items);
            });
        }
    }
    ngOnInit() {
    }
    onChangeAtras(event) {
        this.fechaDesde.setDate(this.fechaDesde.getDate() - Number(event.target.value));
        this.refrescar();
    }
    refrescar() {
        this.cajasService.get(this.caja.id).subscribe(data => {
            this.caja.asignarValores(data);
            console.log(data);
            console.log("Cambiando valores de caja!");
            this.changeRef.detectChanges();
        });
    }
    ionViewDidEnter() {
        this.refrescar();
    }
    ionViewDidLeave() {
    }
    irEgreso() {
        this.router.navigate(['form-egreso-caja',
            {
                cajaId: this.caja.id,
                totalActual: this.caja.totalEfectivo
            }
        ]);
    }
    irIngreso() {
        this.router.navigate(['form-ingreso-caja',
            {
                cajaId: this.caja.id
            }
        ]);
    }
    irCierre() {
        this.router.navigate(['form-cierre-caja',
            {
                cajaId: this.caja.id,
            }
        ]);
    }
    irApertura() {
        this.router.navigate(['form-apertura-caja',
            {
                cajaId: this.caja.id,
            }
        ]);
    }
    eliminar(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
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
                            this.movimientosService.eliminarMovimientoCaja(this.caja, item);
                            this.refrescar();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    seleccionar(item) {
        if (item.pedidoId) {
            let obs = this.pedidosService.get(item.pedidoId).subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                let editarPedido = new _models_pedido__WEBPACK_IMPORTED_MODULE_13__["Pedido"]();
                editarPedido.asignarValores(data);
                this.navParametrosService.param = editarPedido;
                // this.router.navigate(['details-pedido'])
                const modal = yield this.modalController.create({
                    component: _details_pedido_details_pedido_page__WEBPACK_IMPORTED_MODULE_15__["DetailsPedidoPage"],
                    id: 'detail-pedido'
                });
                modal.onDidDismiss()
                    .then((retorno) => {
                    this.refrescar();
                });
                yield modal.present();
            }));
        }
    }
};
DetailsCajaPage.ctorParameters = () => [
    { type: _Services_cajas_service__WEBPACK_IMPORTED_MODULE_4__["CajasService"] },
    { type: _Services_ventas_service__WEBPACK_IMPORTED_MODULE_5__["VentasService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _Services_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
    { type: _Services_movimientos_service__WEBPACK_IMPORTED_MODULE_10__["MovimientosService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _Services_comercios_service__WEBPACK_IMPORTED_MODULE_2__["ComerciosService"] },
    { type: _Services_pedido_service__WEBPACK_IMPORTED_MODULE_12__["PedidoService"] },
    { type: _Services_global_navegacion_parametros_service__WEBPACK_IMPORTED_MODULE_14__["NavegacionParametrosService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
DetailsCajaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-details-caja',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./details-caja.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/details-caja/details-caja.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./details-caja.page.scss */ "./src/app/details-caja/details-caja.page.scss")).default]
    })
], DetailsCajaPage);



/***/ })

}]);
//# sourceMappingURL=details-caja-details-caja-module.js.map