(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-pedidos-list-pedidos-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/list-pedidos/list-pedidos.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/list-pedidos/list-pedidos.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Pedidos</ion-title>   \n    <ion-button *ngIf=\"connectionStatus == 'offline'\" fill=\"clear\" color=\"danger\" slot=\"end\">\n      <ion-icon name=\"cloud-offline-outline\"></ion-icon>\n    </ion-button>  \n    <ion-button *ngIf=\"connectionStatus == 'online'\" fill=\"clear\" color=\"success\" slot=\"end\">\n      <ion-icon name=\"cloud-done-outline\"></ion-icon>\n    </ion-button>     \n    \n  </ion-toolbar>\n</ion-header>\n \n<ion-content class=\"ion-padding\"> \n\n  <ion-searchbar animated *ngIf=\"showSearchBar\"  \n      placeholder=\"Buscar\"\n      animated=\"true\"\n      showCancelButton=\"never\" \n      color=\"light\"  \n      autocomplete=\"on\"\n      enterkeyhint=\"send\"\n      inputmode=\"text\"\n      type=\"text\"\n      debounce=\"300\"\n      value=\"{{palabraFiltro}}\"\n      (ionChange)=\"onChange($event)\">\n    </ion-searchbar>\n\n  <ion-row>\n    <ion-col size=\"6\"> \n      <ion-item>  \n        <ion-label position=\"floating\" >Estado</ion-label>\n        <ion-select multiple=\"false\" (ionChange)=\"segmentChanged($event)\">\n          <ion-select-option  value=\"{{cEstado.pendiente}}\" selected>Solicitado</ion-select-option>\n          <ion-select-option  value=\"{{cEstado.suspendido}}\">Suspendido</ion-select-option>\n          <ion-select-option  value=\"{{cEstado.cobrado}}\">Cobrado</ion-select-option>\n          <ion-select-option  value=\"{{cEstado.reembolsado}}\">Reembolsado</ion-select-option>\n        </ion-select>       \n      </ion-item>\n    </ion-col>    \n    <ion-col size=\"6\">\n      <ion-item>  \n        <ion-label position=\"floating\">Desde</ion-label>\n        <ion-select multiple=\"false\" (ionChange)=\"onChangeAtras($event)\">\n          <ion-select-option  [value]=\"1\" selected>Ayer</ion-select-option>\n          <ion-select-option  [value]=\"2\">2 días atras</ion-select-option>\n          <ion-select-option  [value]=\"7\">Una semana atrás</ion-select-option>\n        </ion-select>       \n      </ion-item>  \n    </ion-col>\n    \n  </ion-row>\n  <div *ngIf=\"buscando\" class=\"mensaje FadeOut FadeIn\">\n    <img src=\"../../assets/img/buscando.fw.png\" alt=\"\">\n    <p>Cargando comandas, aguarde unos segundos por favor</p>\n  </div>\n\n  <div *ngIf=\"!buscando && pedidosLocales.length == 0 && pedidosWoocommerce.length == 0\" class=\"mensaje FadeOut FadeIn\">\n    <img src=\"../../assets/img/pedidos.fw.png\" alt=\"\">\n    <p>No tienes pedidos.</p>\n  </div>\n\n  <ion-list lines=\"none\" >        \n    <ion-item-sliding *ngFor=\"let pedido of pedidosLocales\"  class=\"item-card\">\n      <app-card-pedido [item]=\"pedido\" (click)=\"seleccionar(pedido)\"></app-card-pedido>\n      <ion-item-options *ngIf=\"pedido.statusCobro == cEstado.pendiente\" side=\"end\">\n        <ion-item-option color=\"danger\" (click)=\"cancelar(pedido)\"><ion-icon name=\"trash\" ></ion-icon>Suspender</ion-item-option>\n      </ion-item-options> \n      <ion-item-options *ngIf=\"pedido.statusCobro == cEstado.suspendido\" side=\"end\">\n        <ion-item-option  (click)=\"reanudar(pedido)\"><ion-icon name=\"trash\" ></ion-icon>Reanudar</ion-item-option>\n      </ion-item-options> \n    </ion-item-sliding>  \n  </ion-list>\n\n  <ion-list lines=\"none\">        \n    <span *ngFor=\"let pedido of pedidosWoocommerce\"  >\n      <app-card-pedido-woocommerce [item]=\"pedido\" (click)=\"seleccionarPedidoWoocommerce(pedido)\"></app-card-pedido-woocommerce>\n    </span>  \n  </ion-list>\n  \n\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" >\n    <ion-fab-button *ngIf=\"palabraFiltro == ''\"  color=\"success\" (click)=\"focusBuscar()\">\n      <ion-icon name=\"search\"></ion-icon>\n    </ion-fab-button><br>\n    <ion-fab-button (click)=\"nuevoPedido()\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/list-pedidos/list-pedidos-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/list-pedidos/list-pedidos-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ListPedidosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPedidosPageRoutingModule", function() { return ListPedidosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _list_pedidos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-pedidos.page */ "./src/app/list-pedidos/list-pedidos.page.ts");




const routes = [
    {
        path: '',
        component: _list_pedidos_page__WEBPACK_IMPORTED_MODULE_3__["ListPedidosPage"]
    }
];
let ListPedidosPageRoutingModule = class ListPedidosPageRoutingModule {
};
ListPedidosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ListPedidosPageRoutingModule);



/***/ }),

/***/ "./src/app/list-pedidos/list-pedidos.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/list-pedidos/list-pedidos.module.ts ***!
  \*****************************************************/
/*! exports provided: ListPedidosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPedidosPageModule", function() { return ListPedidosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _list_pedidos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-pedidos-routing.module */ "./src/app/list-pedidos/list-pedidos-routing.module.ts");
/* harmony import */ var _list_pedidos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-pedidos.page */ "./src/app/list-pedidos/list-pedidos.page.ts");
/* harmony import */ var _Components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Components/components.module */ "./src/app/Components/components.module.ts");








let ListPedidosPageModule = class ListPedidosPageModule {
};
ListPedidosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _Components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _list_pedidos_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListPedidosPageRoutingModule"]
        ],
        declarations: [_list_pedidos_page__WEBPACK_IMPORTED_MODULE_6__["ListPedidosPage"]]
    })
], ListPedidosPageModule);



/***/ }),

/***/ "./src/app/list-pedidos/list-pedidos.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/list-pedidos/list-pedidos.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3QtcGVkaWRvcy9saXN0LXBlZGlkb3MucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/list-pedidos/list-pedidos.page.ts":
/*!***************************************************!*\
  !*** ./src/app/list-pedidos/list-pedidos.page.ts ***!
  \***************************************************/
/*! exports provided: ListPedidosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPedidosPage", function() { return ListPedidosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _form_filter_pedidos_form_filter_pedidos_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../form-filter-pedidos/form-filter-pedidos.page */ "./src/app/form-filter-pedidos/form-filter-pedidos.page.ts");
/* harmony import */ var _models_pedido__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/pedido */ "./src/app/models/pedido.ts");
/* harmony import */ var _models_woocommerce_order__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/woocommerce/order */ "./src/app/models/woocommerce/order.ts");
/* harmony import */ var _Services_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Services/authentication.service */ "./src/app/Services/authentication.service.ts");
/* harmony import */ var _Services_comentarios_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Services/comentarios.service */ "./src/app/Services/comentarios.service.ts");
/* harmony import */ var _Services_global_navegacion_parametros_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Services/global/navegacion-parametros.service */ "./src/app/Services/global/navegacion-parametros.service.ts");
/* harmony import */ var _Services_loading_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Services/loading.service */ "./src/app/Services/loading.service.ts");
/* harmony import */ var _Services_pedido_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Services/pedido.service */ "./src/app/Services/pedido.service.ts");
/* harmony import */ var _Services_pedidos_woocommerce_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Services/pedidos-woocommerce.service */ "./src/app/Services/pedidos-woocommerce.service.ts");
/* harmony import */ var _Services_usuarios_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Services/usuarios.service */ "./src/app/Services/usuarios.service.ts");














let ListPedidosPage = class ListPedidosPage {
    constructor(pedidosService, alertController, router, modalController, loadingService, comentariosService, authService, changeRef, navParametrosService, pedidosWoocommerceService, usuariosServices) {
        this.pedidosService = pedidosService;
        this.alertController = alertController;
        this.router = router;
        this.modalController = modalController;
        this.loadingService = loadingService;
        this.comentariosService = comentariosService;
        this.authService = authService;
        this.changeRef = changeRef;
        this.navParametrosService = navParametrosService;
        this.pedidosWoocommerceService = pedidosWoocommerceService;
        this.usuariosServices = usuariosServices;
        this.pedidosLocalesAll = [];
        this.pedidosLocales = [];
        this.pedidosWoocommerceAll = [];
        this.pedidosWoocommerce = [];
        this.palabraFiltro = "";
        this.userRol = "";
        this.fechaDesde = new Date();
        this.fechaHasta = new Date();
        this.estado = "";
        this.fuente = "";
        this.cEstado = _models_pedido__WEBPACK_IMPORTED_MODULE_5__["EnumEstadoCobro"];
        this.seccionActiva = this.cEstado.pendiente;
        this.buscando = true;
        this.connectionStatus = "offline";
        this.showSearchBar = false;
    }
    set content(content) {
        if (content) { // initially setter gets called with undefined
            this.ionSearchbar = content;
        }
    }
    ngOnInit() {
        this.authService.userRol.subscribe(rol => {
            this.userRol = rol;
        });
        this.fechaDesde.setDate(this.fechaDesde.getDate() - 2);
        this.usuariosServices.getConnectionStatus().subscribe(data => {
            this.connectionStatus = data;
        });
    }
    ionViewDidEnter() {
        this.loadingService.presentLoadingText("Cargando Pedidos");
        this.refrescar();
        this.changeRef.detectChanges();
    }
    onChange(event) {
        this.palabraFiltro = event.target.value;
        this.buscar();
    }
    onChangeAtras(event) {
        this.fechaDesde = new Date();
        this.fechaDesde.setDate(this.fechaDesde.getDate() - Number(event.target.value));
        this.refrescar();
    }
    reanudar(item) {
        item.statusCobro = this.cEstado.pendiente;
        this.pedidosService.update(item).then(data => {
            console.log("El pedido ha sido suspendido");
            this.refrescar();
        });
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
                            item.statusCobro = this.cEstado.suspendido;
                            this.pedidosService.update(item).then(data => {
                                console.log("El pedido ha sido suspendido");
                                this.refrescar();
                            });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    seleccionar(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let editarPedido = new _models_pedido__WEBPACK_IMPORTED_MODULE_5__["Pedido"]();
            editarPedido.asignarValores(item);
            this.navParametrosService.param = editarPedido;
            this.router.navigate(['details-pedido']);
        });
    }
    buscarWoocommerce() {
        var retorno = false;
        this.pedidosWoocommerce = [];
        this.pedidosWoocommerceAll.forEach(item => {
            var encontrado = true;
            //Por ahora solo el administrador puede ver los pedidos de woocommerce
            if (this.userRol == "Administrador") {
                encontrado = true;
            }
            if (encontrado) {
                encontrado = false;
                if (this.palabraFiltro != "") {
                    encontrado = false;
                    var palabra = this.palabraFiltro.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                    if (item.shipping.first_name) {
                        retorno = (item.shipping.first_name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").indexOf(palabra.toLowerCase()) > -1);
                        if (retorno)
                            encontrado = true;
                    }
                    if (item.shipping.last_name) {
                        retorno = (item.shipping.last_name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").indexOf(palabra.toLowerCase()) > -1);
                        if (retorno)
                            encontrado = true;
                    }
                }
                else {
                    encontrado = true;
                }
            }
            if (encontrado) {
                if (this.seccionActiva == item.statusCobro) {
                    this.pedidosWoocommerce.push(item);
                }
                return true;
            }
        });
    }
    buscar() {
        var retorno = false;
        this.pedidosLocales = [];
        this.pedidosLocalesAll.forEach(item => {
            var encontrado = true;
            //si no es administrador solo ve los pedidos generados por el
            if (this.userRol == "Administrador") {
                encontrado = true;
            }
            else {
                if (this.authService.getActualUserId() == item.personalId)
                    encontrado = true;
            }
            if (encontrado) {
                encontrado = false;
                if (this.palabraFiltro != "") {
                    encontrado = false;
                    var palabra = this.palabraFiltro.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                    if (item.clienteNombre) {
                        retorno = (item.clienteNombre.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").indexOf(palabra.toLowerCase()) > -1);
                        if (retorno)
                            encontrado = true;
                    }
                    if (item.mesaNombre) {
                        retorno = (item.mesaNombre.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").indexOf(palabra.toLowerCase()) > -1);
                        if (retorno)
                            encontrado = true;
                    }
                    if (item.personalEmail) {
                        retorno = (item.personalEmail.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").indexOf(palabra.toLowerCase()) > -1);
                        if (retorno)
                            encontrado = true;
                    }
                    if (item.personalNombre) {
                        retorno = (item.personalNombre.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").indexOf(palabra.toLowerCase()) > -1);
                        if (retorno)
                            encontrado = true;
                    }
                }
                else {
                    encontrado = true;
                }
            }
            if (encontrado) {
                let countListos = 0;
                item.productos.forEach(element => {
                    if (element.estadoComanda == "Listo")
                        countListos++;
                });
                item.countListos = countListos;
                if (this.seccionActiva == item.statusCobro) {
                    this.pedidosLocales.push(item);
                }
                return true;
            }
        });
        this.loadingService.dismissLoading();
    }
    segmentChanged(event) {
        console.log(event.target.value);
        this.seccionActiva = event.target.value;
        this.pedidosLocalesAll = [];
        this.refrescar();
    }
    showFiltroAvanzado() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _form_filter_pedidos_form_filter_pedidos_page__WEBPACK_IMPORTED_MODULE_4__["FormFilterPedidosPage"]
            });
            modal.onDidDismiss()
                .then((retorno) => {
                if (retorno.data) {
                    this.fechaDesde = retorno.data.fechaDesde,
                        this.fechaHasta = retorno.data.fechaHasta;
                    this.estado = retorno.data.estado;
                    this.fuente = retorno.data.fuente;
                    this.refrescar();
                }
            });
            return yield modal.present();
        });
    }
    refrescar() {
        let date = new Date(this.fechaDesde);
        let fechaHasta = new Date();
        if (!this.obsPedidos)
            this.pedidosObs = this.pedidosService.listFechaDesde(date, fechaHasta).subscribe((pedidos) => {
                this.pedidosLocalesAll = pedidos;
                console.log(this.pedidosLocalesAll);
                this.buscando = false;
                this.buscar();
                this.pedidosObs.unsubscribe();
            });
        this.pedidosWoocommerceService.list().subscribe((pedidos) => {
            console.log(pedidos);
            this.pedidosWoocommerceAll = pedidos;
            this.buscarWoocommerce();
        });
    }
    nuevoPedido() {
        this.router.navigate(['list-productos-servicios', { carritoIntended: 'list-pedidos' }]);
    }
    seleccionarPedidoWoocommerce(order) {
        let o = new _models_woocommerce_order__WEBPACK_IMPORTED_MODULE_6__["WCOrder"]();
        o.asignarValores(order);
        this.navParametrosService.param = o;
        this.router.navigate(['details-pedido-woocommerce']);
    }
    focusBuscar() {
        this.showSearchBar = true;
        setTimeout(() => {
            // Set the focus to the input box of the ion-Searchbar component
            this.ionSearchbar.setFocus();
        }, 100);
    }
};
ListPedidosPage.ctorParameters = () => [
    { type: _Services_pedido_service__WEBPACK_IMPORTED_MODULE_11__["PedidoService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _Services_loading_service__WEBPACK_IMPORTED_MODULE_10__["LoadingService"] },
    { type: _Services_comentarios_service__WEBPACK_IMPORTED_MODULE_8__["ComentariosService"] },
    { type: _Services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _Services_global_navegacion_parametros_service__WEBPACK_IMPORTED_MODULE_9__["NavegacionParametrosService"] },
    { type: _Services_pedidos_woocommerce_service__WEBPACK_IMPORTED_MODULE_12__["PedidosWoocommerceService"] },
    { type: _Services_usuarios_service__WEBPACK_IMPORTED_MODULE_13__["UsuariosService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSearchbar"], { static: false })
], ListPedidosPage.prototype, "ionSearchbar", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSearchbar"])
], ListPedidosPage.prototype, "content", null);
ListPedidosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-pedidos',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./list-pedidos.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/list-pedidos/list-pedidos.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./list-pedidos.page.scss */ "./src/app/list-pedidos/list-pedidos.page.scss")).default]
    })
], ListPedidosPage);



/***/ })

}]);
//# sourceMappingURL=list-pedidos-list-pedidos-module.js.map