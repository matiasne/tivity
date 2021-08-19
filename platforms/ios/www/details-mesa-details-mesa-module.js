(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["details-mesa-details-mesa-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/details-mesa/details-mesa.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/details-mesa/details-mesa.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button autoHide=\"false\"></ion-back-button>\n    </ion-buttons>\n    <ion-title  size=\"small\">Mesa/{{mesa.nombre}}</ion-title>    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <h2 *ngIf=\"pedidos.length == 0\">No tienes pedidos cargado a esta mesa.</h2>\n\n  <ion-list lines=\"none\">      \n    <app-card-pedido *ngFor=\"let pedido of pedidos\" [item]=\"pedido\" (click)=\"seleccionar(pedido)\"></app-card-pedido>      \n  </ion-list> \n\n</ion-content>\n");

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
/* harmony import */ var _details_pedido_details_pedido_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../details-pedido/details-pedido.page */ "./src/app/details-pedido/details-pedido.page.ts");
/* harmony import */ var _models_comercio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/comercio */ "./src/app/models/comercio.ts");
/* harmony import */ var _models_descuento__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/descuento */ "./src/app/models/descuento.ts");
/* harmony import */ var _models_mesa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/mesa */ "./src/app/models/mesa.ts");
/* harmony import */ var _models_pedido__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models/pedido */ "./src/app/models/pedido.ts");
/* harmony import */ var _Services_comercios_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Services/comercios.service */ "./src/app/Services/comercios.service.ts");
/* harmony import */ var _Services_global_navegacion_parametros_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Services/global/navegacion-parametros.service */ "./src/app/Services/global/navegacion-parametros.service.ts");
/* harmony import */ var _Services_loading_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Services/loading.service */ "./src/app/Services/loading.service.ts");
/* harmony import */ var _Services_mesas_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Services/mesas.service */ "./src/app/Services/mesas.service.ts");
/* harmony import */ var _Services_pedido_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Services/pedido.service */ "./src/app/Services/pedido.service.ts");














let DetailsMesaPage = class DetailsMesaPage {
    constructor(route, alertController, comercioService, mesasSerivce, loadingService, pedidosService, navCtrl, navParametrosService, router, modalController) {
        this.route = route;
        this.alertController = alertController;
        this.comercioService = comercioService;
        this.mesasSerivce = mesasSerivce;
        this.loadingService = loadingService;
        this.pedidosService = pedidosService;
        this.navCtrl = navCtrl;
        this.navParametrosService = navParametrosService;
        this.router = router;
        this.modalController = modalController;
        this.pedidos = [];
        this.cEstado = _models_pedido__WEBPACK_IMPORTED_MODULE_8__["EnumEstadoCobro"];
        this.enumTipo = _models_descuento__WEBPACK_IMPORTED_MODULE_6__["EnumTipoDescuento"];
        this.mesa = new _models_mesa__WEBPACK_IMPORTED_MODULE_7__["Mesa"]();
        this.comercio = new _models_comercio__WEBPACK_IMPORTED_MODULE_5__["Comercio"]();
    }
    ngOnInit() {
        this.comercio.asignarValores(this.comercioService.getSelectedCommerceValue());
        this.mesasSerivce.get(this.route.snapshot.params.id).subscribe(data => {
            this.mesa = data;
        });
        this.loadingService.presentLoading();
        this.pedidosService.getByMesa(this.route.snapshot.params.id).subscribe((pedidos) => {
            this.pedidos = [];
            pedidos.forEach(element => {
                if (element.statusCobro == this.cEstado.pendiente) {
                    this.pedidos.push(element);
                }
            });
            this.loadingService.dismissLoading();
        });
    }
    ionViewDidEnter() {
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
            let editarPedido = new _models_pedido__WEBPACK_IMPORTED_MODULE_8__["Pedido"]();
            editarPedido.asignarValores(item);
            this.navParametrosService.param = editarPedido;
            // this.router.navigate(['details-pedido'])
            const modal = yield this.modalController.create({
                component: _details_pedido_details_pedido_page__WEBPACK_IMPORTED_MODULE_4__["DetailsPedidoPage"],
                id: 'detail-pedido'
            });
            modal.onDidDismiss()
                .then((retorno) => {
            });
            yield modal.present();
        });
    }
};
DetailsMesaPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _Services_comercios_service__WEBPACK_IMPORTED_MODULE_9__["ComerciosService"] },
    { type: _Services_mesas_service__WEBPACK_IMPORTED_MODULE_12__["MesasService"] },
    { type: _Services_loading_service__WEBPACK_IMPORTED_MODULE_11__["LoadingService"] },
    { type: _Services_pedido_service__WEBPACK_IMPORTED_MODULE_13__["PedidoService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _Services_global_navegacion_parametros_service__WEBPACK_IMPORTED_MODULE_10__["NavegacionParametrosService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
];
DetailsMesaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-details-mesa',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./details-mesa.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/details-mesa/details-mesa.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./details-mesa.page.scss */ "./src/app/details-mesa/details-mesa.page.scss")).default]
    })
], DetailsMesaPage);



/***/ })

}]);
//# sourceMappingURL=details-mesa-details-mesa-module.js.map