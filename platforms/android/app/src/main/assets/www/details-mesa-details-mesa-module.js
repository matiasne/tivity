(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["details-mesa-details-mesa-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/details-mesa/details-mesa.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/details-mesa/details-mesa.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button autoHide=\"false\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Mesa/{{mesa.nombre}}</ion-title>    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <h2 *ngIf=\"pedidos.length == 0\">No tienes pedidos cargado a esta mesa.</h2>\n\n  \n\n  <ion-list lines=\"none\">  \n    <h5>Pedidos ({{pedidos.length}})</h5>       \n    <ion-item-sliding *ngFor=\"let pedido of pedidos\" class=\"item-card\" (click)=\"seleccionar(pedido)\">\n      <app-card-pedido [item]=\"pedido\"></app-card-pedido>\n\n      \n\n     <ion-item-options side=\"end\"> \n        <ion-item-option (click)=\"cancelar(pedido)\"><ion-icon name=\"trash\" ></ion-icon>Cancelar</ion-item-option>\n      </ion-item-options> \n    </ion-item-sliding> \n  </ion-list> \n\n  <span *ngIf=\"productos.length > 0\">\n    <h5>Productos ({{productos.length}})</h5>  \n    <span *ngFor=\"let producto of productos; let i = index\">       \n      <app-card-producto\n        [item]=\"producto\" \n        [showStock]=\"false\"\n        [showImage]=\"false\"\n        [multiplicador]=\"1\"\n      ></app-card-producto>       \n    </span>\n  </span>\n  \n  <ion-text color=\"primary\" *ngIf=\"descuentos.length > 0\">\n    <h4>Descuentos</h4>\n  </ion-text> \n\n  <span *ngFor=\"let descuento of descuentos; let i = index\">\n      <ion-item>\n        <ion-label>                \n          <h2>\n            <b><span *ngIf=\"descuento.tipo== enumTipo.porcentaje\">%</span> <span *ngIf=\"descuento.tipo== enumTipo.monto\">$</span> {{descuento.monto}}</b>  {{descuento.motivo}}             \n          </h2>\n        </ion-label>\n      </ion-item>\n  </span>\n\n  <ion-text color=\"primary\" *ngIf=\"recargos.length > 0\">\n    <h4>Recargos</h4>\n  </ion-text> \n\n  <span *ngFor=\"let recargo of recargos; let i = index\">\n      <ion-item>\n        <ion-label>                \n          <h2>\n            <b><span *ngIf=\"recargo.tipo== enumTipo.porcentaje\">%</span> <span *ngIf=\"recargo.tipo== enumTipo.monto\">$</span> {{recargo.monto}}</b>  {{recargo.motivo}}             \n          </h2>\n        </ion-label>\n      </ion-item>\n  </span>\n\n</ion-content>\n<ion-footer *ngIf=\"pedidos.length != 0\" class=\"ion-no-border ion-padding\"> \n  <ion-toolbar>   \n    <ion-button class=\"button-rounded\" slot=\"start\"  color=\"danger\" (click)=\"cerrar()\">Cerrar</ion-button>\n  </ion-toolbar> \n</ion-footer>");

/***/ }),

/***/ "./src/app/Services/mesas.service.ts":
/*!*******************************************!*\
  !*** ./src/app/Services/mesas.service.ts ***!
  \*******************************************/
/*! exports provided: MesasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MesasService", function() { return MesasService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base.service */ "./src/app/Services/base.service.ts");
/* harmony import */ var _comercios_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comercios.service */ "./src/app/Services/comercios.service.ts");





let MesasService = class MesasService extends _base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] {
    constructor(afs, comerciosService) {
        super(afs);
        this.afs = afs;
        this.comerciosService = comerciosService;
        this.comerciosService.getSelectedCommerce().subscribe(data => {
            // let comercio_seleccionadoId = localStorage.getItem('comercio_seleccionadoId'); 
            if (data) {
                this.setPath('comercios/' + data.id + '/mesas');
            }
        });
    }
};
MesasService.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _comercios_service__WEBPACK_IMPORTED_MODULE_4__["ComerciosService"] }
];
MesasService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MesasService);



/***/ }),

/***/ "./src/app/details-mesa/details-mesa-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/details-mesa/details-mesa-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: DetailsMesaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsMesaPageRoutingModule", function() { return DetailsMesaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _details_mesa_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./details-mesa.page */ "./src/app/details-mesa/details-mesa.page.ts");




const routes = [
    {
        path: '',
        component: _details_mesa_page__WEBPACK_IMPORTED_MODULE_3__["DetailsMesaPage"]
    }
];
let DetailsMesaPageRoutingModule = class DetailsMesaPageRoutingModule {
};
DetailsMesaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DetailsMesaPageRoutingModule);



/***/ }),

/***/ "./src/app/details-mesa/details-mesa.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/details-mesa/details-mesa.module.ts ***!
  \*****************************************************/
/*! exports provided: DetailsMesaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsMesaPageModule", function() { return DetailsMesaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _details_mesa_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./details-mesa-routing.module */ "./src/app/details-mesa/details-mesa-routing.module.ts");
/* harmony import */ var _details_mesa_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./details-mesa.page */ "./src/app/details-mesa/details-mesa.page.ts");
/* harmony import */ var _Components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Components/components.module */ "./src/app/Components/components.module.ts");








let DetailsMesaPageModule = class DetailsMesaPageModule {
};
DetailsMesaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _Components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _details_mesa_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailsMesaPageRoutingModule"],
        ],
        declarations: [_details_mesa_page__WEBPACK_IMPORTED_MODULE_6__["DetailsMesaPage"]]
    })
], DetailsMesaPageModule);



/***/ }),

/***/ "./src/app/details-mesa/details-mesa.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/details-mesa/details-mesa.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbHMtbWVzYS9kZXRhaWxzLW1lc2EucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/details-mesa/details-mesa.page.ts":
/*!***************************************************!*\
  !*** ./src/app/details-mesa/details-mesa.page.ts ***!
  \***************************************************/
/*! exports provided: DetailsMesaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsMesaPage", function() { return DetailsMesaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _models_comercio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/comercio */ "./src/app/models/comercio.ts");
/* harmony import */ var _models_descuento__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/descuento */ "./src/app/models/descuento.ts");
/* harmony import */ var _models_mesa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/mesa */ "./src/app/models/mesa.ts");
/* harmony import */ var _models_pedido__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/pedido */ "./src/app/models/pedido.ts");
/* harmony import */ var _models_producto__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models/producto */ "./src/app/models/producto.ts");
/* harmony import */ var _Services_comercios_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Services/comercios.service */ "./src/app/Services/comercios.service.ts");
/* harmony import */ var _Services_global_navegacion_parametros_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Services/global/navegacion-parametros.service */ "./src/app/Services/global/navegacion-parametros.service.ts");
/* harmony import */ var _Services_loading_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Services/loading.service */ "./src/app/Services/loading.service.ts");
/* harmony import */ var _Services_mesas_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Services/mesas.service */ "./src/app/Services/mesas.service.ts");
/* harmony import */ var _Services_pedido_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Services/pedido.service */ "./src/app/Services/pedido.service.ts");














let DetailsMesaPage = class DetailsMesaPage {
    constructor(route, modalController, alertController, comercioService, mesasSerivce, loadingService, pedidosService, navCtrl, navParametrosService, router) {
        this.route = route;
        this.modalController = modalController;
        this.alertController = alertController;
        this.comercioService = comercioService;
        this.mesasSerivce = mesasSerivce;
        this.loadingService = loadingService;
        this.pedidosService = pedidosService;
        this.navCtrl = navCtrl;
        this.navParametrosService = navParametrosService;
        this.router = router;
        this.pedidos = [];
        this.productos = [];
        this.descuentos = [];
        this.recargos = [];
        this.cEstado = _models_pedido__WEBPACK_IMPORTED_MODULE_7__["EnumEstadoCobro"];
        this.enumTipo = _models_descuento__WEBPACK_IMPORTED_MODULE_5__["EnumTipoDescuento"];
        this.mesa = new _models_mesa__WEBPACK_IMPORTED_MODULE_6__["Mesa"]();
        this.comercio = new _models_comercio__WEBPACK_IMPORTED_MODULE_4__["Comercio"]();
    }
    ngOnInit() {
        this.comercio.asignarValores(this.comercioService.getSelectedCommerceValue());
        this.mesasSerivce.get(this.route.snapshot.params.id).subscribe(data => {
            this.mesa = data;
        });
        this.loadingService.presentLoading();
        this.pedidosService.getByMesa(this.route.snapshot.params.id).subscribe((pedidos) => {
            this.pedidos = [];
            this.productos = [];
            pedidos.forEach(element => {
                if (element.statusCobro == this.cEstado.pendiente) {
                    let objPedido = new _models_pedido__WEBPACK_IMPORTED_MODULE_7__["Pedido"]();
                    objPedido.asignarValores(element);
                    this.pedidos.push(objPedido);
                    element.productos.forEach(element => {
                        let objProducto = new _models_producto__WEBPACK_IMPORTED_MODULE_8__["Producto"]();
                        objProducto.asignarValores(element);
                        this.productos.push(objProducto);
                    });
                    element.recargos.forEach(element => {
                        this.recargos.push(element);
                        console.log(element);
                    });
                    element.descuentos.forEach(element => {
                        this.descuentos.push(element);
                        console.log(element);
                    });
                }
            });
            this.loadingService.dismissLoading();
        });
    }
    ionViewDidEnter() {
    }
    cancelar(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
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
                            item.suspendido = 1;
                            this.pedidosService.update(item).then(data => {
                                console.log("El pedido ha sido suspendido");
                            });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    atras() {
        this.navCtrl.back();
    }
    cerrar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.navParametrosService.param = this.pedidos;
            this.router.navigate(['details-pedido']);
        });
    }
    seleccionar(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let editarPedido = new _models_pedido__WEBPACK_IMPORTED_MODULE_7__["Pedido"]();
            editarPedido.asignarValores(item);
            this.navParametrosService.param = editarPedido;
            this.router.navigate(['details-pedido']);
        });
    }
};
DetailsMesaPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _Services_comercios_service__WEBPACK_IMPORTED_MODULE_9__["ComerciosService"] },
    { type: _Services_mesas_service__WEBPACK_IMPORTED_MODULE_12__["MesasService"] },
    { type: _Services_loading_service__WEBPACK_IMPORTED_MODULE_11__["LoadingService"] },
    { type: _Services_pedido_service__WEBPACK_IMPORTED_MODULE_13__["PedidoService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _Services_global_navegacion_parametros_service__WEBPACK_IMPORTED_MODULE_10__["NavegacionParametrosService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
DetailsMesaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-details-mesa',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./details-mesa.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/details-mesa/details-mesa.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./details-mesa.page.scss */ "./src/app/details-mesa/details-mesa.page.scss")).default]
    })
], DetailsMesaPage);



/***/ }),

/***/ "./src/app/models/mesa.ts":
/*!********************************!*\
  !*** ./src/app/models/mesa.ts ***!
  \********************************/
/*! exports provided: Mesa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mesa", function() { return Mesa; });
class Mesa {
    constructor() {
        this.id = "";
        this.comercioId = "";
        this.nombre = "";
        this.foto = "";
        this.rolEncargados = [];
        this.habilitarNotificaciones = false;
        this.recibePedidosApp = false;
        this.habilitarLlamadorMozoApp = false;
        this.habilitarComandasApp = false;
        this.productos = [];
        this.cobrado = false;
    }
    asignarValores(init) {
        Object.assign(this, init);
    }
}


/***/ })

}]);
//# sourceMappingURL=details-mesa-details-mesa-module.js.map