(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-comercio-dashboard-comercio-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard-comercio/dashboard-comercio.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard-comercio/dashboard-comercio.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title  size=\"small\">Dashboard Comercio</ion-title>    \r\n  </ion-toolbar>\r\n</ion-header> \r\n\r\n<ion-content class=\"ion-padding\">\r\n  <ion-button class=\"button-rounded\" size=\"large\" (click)=\"irServiciosProductos()\">Venta</ion-button>\r\n  <ion-button class=\"button-rounded\" size=\"large\" (click)=\"irEgresoCaja()\">Egreso</ion-button>   \r\n  <ion-button class=\"button-rounded\" color=\"light\" (click)=\"tarjeta()\">Form Tarjeta</ion-button>\r\n  <ion-button class=\"button-rounded\" color=\"light\" [href]=\"link\">Marketplace</ion-button>\r\n</ion-content>  \r\n");

/***/ }),

/***/ "./src/app/Services/global/carrito.service.ts":
/*!****************************************************!*\
  !*** ./src/app/Services/global/carrito.service.ts ***!
  \****************************************************/
/*! exports provided: CarritoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarritoService", function() { return CarritoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../authentication.service */ "./src/app/Services/authentication.service.ts");
/* harmony import */ var _pedido_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pedido.service */ "./src/app/Services/pedido.service.ts");
/* harmony import */ var src_app_models_pedido__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/pedido */ "./src/app/models/pedido.ts");
/* harmony import */ var _modal_notificacion_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modal-notificacion.service */ "./src/app/Services/modal-notificacion.service.ts");
/* harmony import */ var _comentarios_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../comentarios.service */ "./src/app/Services/comentarios.service.ts");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_app_models_comentario__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/models/comentario */ "./src/app/models/comentario.ts");
/* harmony import */ var _comercios_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../comercios.service */ "./src/app/Services/comercios.service.ts");
/* harmony import */ var src_app_models_itemPedido__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/models/itemPedido */ "./src/app/models/itemPedido.ts");












let CarritoService = class CarritoService {
    constructor(authenticationService, pedidosService, modalNotificacion, comentariosService, firestore, comerciosService) {
        this.authenticationService = authenticationService;
        this.pedidosService = pedidosService;
        this.modalNotificacion = modalNotificacion;
        this.comentariosService = comentariosService;
        this.firestore = firestore;
        this.comerciosService = comerciosService;
        this.comentario = "";
        this.actualCarritoSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]("");
        this.carrito = new src_app_models_pedido__WEBPACK_IMPORTED_MODULE_5__["Pedido"]();
        this.actualCarritoSubject.next(this.carrito);
    }
    getActualCarritoSubs() {
        return this.actualCarritoSubject.asObservable();
    }
    agregarItem(item) {
        let itemCarrito = new src_app_models_itemPedido__WEBPACK_IMPORTED_MODULE_11__["ItemPedido"]();
        itemCarrito.asignarValores(item);
        item.enCarrito += itemCarrito.cantidad;
        const p = JSON.parse(JSON.stringify(item));
        p.gruposOpciones = [];
        this.carrito.items.push(p);
        this.carrito.on = true;
        this.modalNotificacion.success("Agregado", itemCarrito.cantidad + ' ' + itemCarrito.unidad + ' de ' + itemCarrito.nombre);
        this.actualCarritoSubject.next(this.carrito);
    }
    agregarDescuento(descuento) {
        const d = JSON.parse(JSON.stringify(descuento));
        this.carrito.descuentos.push(d);
        this.carrito.on = true;
        this.actualCarritoSubject.next(this.carrito);
    }
    agregarRecargo(recargo) {
        const r = JSON.parse(JSON.stringify(recargo));
        this.carrito.recargos.push(r);
        this.carrito.on = true;
        this.actualCarritoSubject.next(this.carrito);
    }
    eliminarDescuento(index) {
        this.carrito.descuentos.splice(index, 1);
        this.carrito.on = true;
        this.actualCarritoSubject.next(this.carrito);
    }
    eliminarRecargo(index) {
        this.carrito.recargos.splice(index, 1);
        this.carrito.on = true;
        this.actualCarritoSubject.next(this.carrito);
    }
    eliminarProducto(index) {
        this.carrito.items.splice(index, 1);
        if (this.carrito.items.length > 0)
            this.carrito.on = true;
        else {
            this.carrito.on = false;
        }
        this.actualCarritoSubject.next(this.carrito);
    }
    setearCliente(cliente) {
        this.carrito.clienteId = cliente.id;
        this.carrito.clienteNombre = cliente.nombre;
        this.carrito.clienteEmail = cliente.email;
        this.carrito.clienteDocTipo = cliente.documentoTipo;
        this.carrito.clienteDoc = cliente.documento;
        this.carrito.clientePersonaJuridica = cliente.personaJuridica;
        this.carrito.on = true;
        this.actualCarritoSubject.next(this.carrito);
    }
    setearMesa(mesa) {
        this.carrito.mesaId = mesa.id;
        this.carrito.mesaNombre = mesa.nombre;
        this.actualCarritoSubject.next(this.carrito);
    }
    agregarComentario() {
    }
    vaciar() {
        this.carrito = new src_app_models_pedido__WEBPACK_IMPORTED_MODULE_5__["Pedido"]();
        this.carrito.on = false;
        this.actualCarritoSubject.next(this.carrito);
    }
    getTotal() {
        return this.pedidosService.getTotal(this.carrito);
    }
    crearPedido() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let c = new src_app_models_pedido__WEBPACK_IMPORTED_MODULE_5__["Pedido"](); //NO borrar!!! importante para cuando está en modo offline!!!
            Object.assign(c, this.carrito);
            this.vaciar();
            this.modalNotificacion.success("Cargado", "El pedido ha sido cargado a la lista.");
            c.id = this.firestore.createId();
            c.comanda.numero = yield this.comerciosService.obtenerActualizarNumeroPedido();
            c.personalId = this.authenticationService.getUID();
            c.personalEmail = this.authenticationService.getEmail();
            c.personalNombre = this.authenticationService.getNombre();
            c.total = this.getTotal();
            c.primerMensaje = this.comentario;
            if (this.comentario != "") {
                this.comentariosService.setearPath("pedidos", c.id);
                let comentario = new src_app_models_comentario__WEBPACK_IMPORTED_MODULE_9__["Comentario"]();
                comentario.text = this.comentario;
                comentario.senderId = this.authenticationService.getUID();
                comentario.senderEmail = this.authenticationService.getEmail();
                this.comentariosService.add(comentario).then(data => {
                    console.log("comentario agregado");
                });
                this.comentario = "";
            }
            c.direccion = JSON.parse(JSON.stringify(c.direccion));
            this.pedidosService.set(c.id, c).then((data) => {
                console.log("!!!!!!" + data.fromCache);
            });
        });
    }
    obtenerNumeroPedido() {
    }
};
CarritoService.ctorParameters = () => [
    { type: _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: _pedido_service__WEBPACK_IMPORTED_MODULE_4__["PedidoService"] },
    { type: _modal_notificacion_service__WEBPACK_IMPORTED_MODULE_6__["ModalNotificacionService"] },
    { type: _comentarios_service__WEBPACK_IMPORTED_MODULE_7__["ComentariosService"] },
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestore"] },
    { type: _comercios_service__WEBPACK_IMPORTED_MODULE_10__["ComerciosService"] }
];
CarritoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CarritoService);



/***/ }),

/***/ "./src/app/Services/modal-notificacion.service.ts":
/*!********************************************************!*\
  !*** ./src/app/Services/modal-notificacion.service.ts ***!
  \********************************************************/
/*! exports provided: ModalNotificacionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalNotificacionService", function() { return ModalNotificacionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _modal_notificacion_modal_notificacion_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modal-notificacion/modal-notificacion.page */ "./src/app/modal-notificacion/modal-notificacion.page.ts");




let ModalNotificacionService = class ModalNotificacionService {
    constructor(modalController) {
        this.modalController = modalController;
    }
    success(titulo, subtitulo) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modal_notificacion_modal_notificacion_page__WEBPACK_IMPORTED_MODULE_3__["ModalNotificacionPage"],
                componentProps: { titulo: titulo, subtitulo: subtitulo, iconOk: true },
                cssClass: 'modal-notificacion-wrapper moda-succes-border',
                id: "notificacion"
            });
            modal.present().then(() => {
                setTimeout(() => {
                    modal.dismiss();
                }, 500);
            });
        });
    }
    trash(titulo, subtitulo) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modal_notificacion_modal_notificacion_page__WEBPACK_IMPORTED_MODULE_3__["ModalNotificacionPage"],
                componentProps: { titulo: titulo, subtitulo: subtitulo, iconTrash: true, iconOk: false },
                cssClass: 'modal-notificacion-wrapper modal-error-border'
            });
            modal.present().then(() => {
                setTimeout(() => {
                    modal.dismiss();
                }, 300);
            });
        });
    }
};
ModalNotificacionService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
ModalNotificacionService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ModalNotificacionService);



/***/ }),

/***/ "./src/app/dashboard-comercio/dashboard-comercio-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/dashboard-comercio/dashboard-comercio-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: DashboardComercioPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComercioPageRoutingModule", function() { return DashboardComercioPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _dashboard_comercio_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-comercio.page */ "./src/app/dashboard-comercio/dashboard-comercio.page.ts");




const routes = [
    {
        path: '',
        component: _dashboard_comercio_page__WEBPACK_IMPORTED_MODULE_3__["DashboardComercioPage"]
    }
];
let DashboardComercioPageRoutingModule = class DashboardComercioPageRoutingModule {
};
DashboardComercioPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DashboardComercioPageRoutingModule);



/***/ }),

/***/ "./src/app/dashboard-comercio/dashboard-comercio.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/dashboard-comercio/dashboard-comercio.module.ts ***!
  \*****************************************************************/
/*! exports provided: DashboardComercioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComercioPageModule", function() { return DashboardComercioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _dashboard_comercio_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard-comercio-routing.module */ "./src/app/dashboard-comercio/dashboard-comercio-routing.module.ts");
/* harmony import */ var _dashboard_comercio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard-comercio.page */ "./src/app/dashboard-comercio/dashboard-comercio.page.ts");







let DashboardComercioPageModule = class DashboardComercioPageModule {
};
DashboardComercioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _dashboard_comercio_routing_module__WEBPACK_IMPORTED_MODULE_5__["DashboardComercioPageRoutingModule"]
        ],
        declarations: [_dashboard_comercio_page__WEBPACK_IMPORTED_MODULE_6__["DashboardComercioPage"]]
    })
], DashboardComercioPageModule);



/***/ }),

/***/ "./src/app/dashboard-comercio/dashboard-comercio.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/dashboard-comercio/dashboard-comercio.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC1jb21lcmNpby9kYXNoYm9hcmQtY29tZXJjaW8ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/dashboard-comercio/dashboard-comercio.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/dashboard-comercio/dashboard-comercio.page.ts ***!
  \***************************************************************/
/*! exports provided: DashboardComercioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComercioPage", function() { return DashboardComercioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _models_comercio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/comercio */ "./src/app/models/comercio.ts");
/* harmony import */ var _Services_global_carrito_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/global/carrito.service */ "./src/app/Services/global/carrito.service.ts");
/* harmony import */ var _Services_afip_afip_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Services/afip/afip-service.service */ "./src/app/Services/afip/afip-service.service.ts");
/* harmony import */ var _Services_comercios_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Services/comercios.service */ "./src/app/Services/comercios.service.ts");
/* harmony import */ var _Services_loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Services/loading.service */ "./src/app/Services/loading.service.ts");
/* harmony import */ var _Services_impresora_impresora_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Services/impresora/impresora.service */ "./src/app/Services/impresora/impresora.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _form_card_payment_form_card_payment_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../form-card-payment/form-card-payment.page */ "./src/app/form-card-payment/form-card-payment.page.ts");











let DashboardComercioPage = class DashboardComercioPage {
    constructor(router, carritoService, comerciosService, afipService, loadingService, impresoraService, modalCtrl) {
        this.router = router;
        this.carritoService = carritoService;
        this.comerciosService = comerciosService;
        this.afipService = afipService;
        this.loadingService = loadingService;
        this.impresoraService = impresoraService;
        this.modalCtrl = modalCtrl;
        this.link = "";
        this.comercio = new _models_comercio__WEBPACK_IMPORTED_MODULE_3__["Comercio"]();
    }
    ngOnInit() {
        this.carritoService.vaciar();
        //  this.impresoraService.impresionPrueba("matias") 
    }
    ionViewDidEnter() {
        if (this.comercio.id == "") {
            this.loadingService.presentLoading();
        }
        this.comerciosService.getSelectedCommerce().subscribe(data => {
            this.loadingService.dismissLoading();
            this.comercio = new _models_comercio__WEBPACK_IMPORTED_MODULE_3__["Comercio"]();
            this.comercio.asignarValores(data);
            this.link = "https://auth.mercadopago.com.ar/authorization?client_id=6782463642048642&response_type=code&platform_id=mp&state=id=" + this.comercio.id + "&redirect_uri=https://us-central1-tivity-socialup.cloudfunctions.net/api/mercadopago/marketplaceAuth";
        });
    }
    irVentas() {
        this.router.navigate(['dashboard-ventas']);
    }
    irSubscripciones() {
        this.router.navigate(['dashboard-subscripciones']);
    }
    irClientes() {
        this.router.navigate(['dashboard-clientes']);
    }
    irProductos() {
        this.router.navigate(['dashboard-productos']);
    }
    irServicios() {
        this.router.navigate(['dashboard-servicios']);
    }
    irServiciosProductos() {
        this.router.navigate(['list-productos-servicios']);
    }
    irPersonal() {
        this.router.navigate(['list-personal']);
    }
    irEgresoCaja() {
        this.router.navigate(['form-egreso-caja']);
    }
    tarjeta() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let modal = yield this.modalCtrl.create({
                component: _form_card_payment_form_card_payment_page__WEBPACK_IMPORTED_MODULE_10__["FormCardPaymentPage"],
            });
            return yield modal.present();
        });
    }
};
DashboardComercioPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _Services_global_carrito_service__WEBPACK_IMPORTED_MODULE_4__["CarritoService"] },
    { type: _Services_comercios_service__WEBPACK_IMPORTED_MODULE_6__["ComerciosService"] },
    { type: _Services_afip_afip_service_service__WEBPACK_IMPORTED_MODULE_5__["AfipServiceService"] },
    { type: _Services_loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"] },
    { type: _Services_impresora_impresora_service__WEBPACK_IMPORTED_MODULE_8__["ImpresoraService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ModalController"] }
];
DashboardComercioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard-comercio',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./dashboard-comercio.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard-comercio/dashboard-comercio.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./dashboard-comercio.page.scss */ "./src/app/dashboard-comercio/dashboard-comercio.page.scss")).default]
    })
], DashboardComercioPage);



/***/ })

}]);
//# sourceMappingURL=dashboard-comercio-dashboard-comercio-module.js.map