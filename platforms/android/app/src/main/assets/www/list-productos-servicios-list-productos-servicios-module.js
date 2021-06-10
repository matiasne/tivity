(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-productos-servicios-list-productos-servicios-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-descuento/form-descuento.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form-descuento/form-descuento.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Agregar Descuento</ion-title>    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n  <ion-item class=\"form-select\"> \n    <ion-label position=\"floating\">Tipo</ion-label>\n    <ion-select multiple=\"false\" [(ngModel)]=\"descuento.tipo\">\n      <ion-select-option  [value]=\"enumTipo.monto\" selected>Monto</ion-select-option>\n      <ion-select-option  [value]=\"enumTipo.porcentaje\">Porcentaje</ion-select-option> \n    </ion-select>       \n  </ion-item> \n\n  <div class=\"form-card\">\n    <ion-text color=\"primary\">\n      <h4>Monto *</h4> \n    </ion-text>            \n    <ion-item>\n      <ion-input name=\"monto\" type=\"number\" [(ngModel)]=\"descuento.monto\" required></ion-input>\n    </ion-item>   \n  </div>\n\n  <div class=\"form-card\">\n    <ion-text color=\"primary\">\n      <h4>Motivo *</h4> \n    </ion-text>            \n    <ion-item>\n      <ion-input name=\"motivo\" type=\"text\" [(ngModel)]=\"descuento.motivo\" required></ion-input>\n    </ion-item>   \n  </div>\n\n</ion-content>\n\n<ion-footer class=\"ion-no-border ion-padding\">\n  <ion-toolbar>  \n    <ion-button class=\"button-rounded\" slot=\"end\" (click)=\"agregar()\">Agregar</ion-button>  \n    <ion-button class=\"button-rounded\" slot=\"start\"  color=\"light\" (click)=\"cancelar()\">Cancelar</ion-button>\n  </ion-toolbar>\n</ion-footer> ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-recargo/form-recargo.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form-recargo/form-recargo.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Agregar Recargo</ion-title>    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n  <ion-item class=\"form-select\"> \n    <ion-label position=\"floating\">Tipo</ion-label>\n    <ion-select multiple=\"false\" [(ngModel)]=\"recargo.tipo\">\n      <ion-select-option  [value]=\"enumTipo.monto\" selected>Monto</ion-select-option>\n      <ion-select-option  [value]=\"enumTipo.porcentaje\">Porcentaje</ion-select-option> \n    </ion-select>       \n  </ion-item> \n\n  <div class=\"form-card\">\n    <ion-text color=\"primary\">\n      <h4>Monto *</h4> \n    </ion-text>            \n    <ion-item>\n      <ion-input name=\"monto\" type=\"number\" [(ngModel)]=\"recargo.monto\" required></ion-input>\n    </ion-item>   \n  </div>\n\n  <div class=\"form-card\">\n    <ion-text color=\"primary\">\n      <h4>Motivo *</h4> \n    </ion-text>            \n    <ion-item>\n      <ion-input name=\"motivo\" type=\"text\" [(ngModel)]=\"recargo.motivo\" required></ion-input>\n    </ion-item>   \n  </div>\n\n</ion-content>\n\n<ion-footer class=\"ion-no-border ion-padding\">\n  <ion-toolbar>  \n    <ion-button class=\"button-rounded\" slot=\"end\" (click)=\"agregar()\">Agregar</ion-button>  \n    <ion-button class=\"button-rounded\" slot=\"start\"  color=\"light\" (click)=\"cancelar()\">Cancelar</ion-button>\n  </ion-toolbar>\n</ion-footer> ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/list-productos-servicios/list-productos-servicios.page.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/list-productos-servicios/list-productos-servicios.page.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Catálogo</ion-title> \n    \n    <div slot=\"end\">\n      <ion-button id=\"notification-button\" fill=\"clear\" color=\"primary\" >\n        <ion-icon *ngIf=\"pedidosSolicitadosLength == 0\" name=\"document-text-outline\"></ion-icon>      \n        <ion-icon *ngIf=\"pedidosSolicitadosLength != 0\" name=\"document-text\"></ion-icon>          \n      </ion-button>\n      <ion-badge id=\"notifications-badge\" color=\"danger\">{{pedidosSolicitadosLength}}</ion-badge>  \n    </div>\n    \n    \n    <ion-button *ngIf=\"connectionStatus == 'offline'\" fill=\"clear\" color=\"danger\" slot=\"end\">\n      <ion-icon name=\"cloud-offline\"></ion-icon>\n    </ion-button>  \n    <ion-button *ngIf=\"connectionStatus == 'online'\" fill=\"clear\" color=\"success\" slot=\"end\">\n      <ion-icon name=\"cloud-done-outline\"></ion-icon>\n    </ion-button>    \n    \n    <ion-button *ngIf=\"countNotificaciones == 0\" fill=\"clear\" color=\"primary\" slot=\"end\">\n      <ion-icon name=\"notifications-outline\"></ion-icon>\n    </ion-button>  \n    <ion-button *ngIf=\"countNotificaciones != 0\" fill=\"clear\" color=\"primary\" slot=\"end\">\n      <ion-icon name=\"notifications\"></ion-icon>\n    </ion-button> \n\n    \n\n  </ion-toolbar>\n</ion-header> \n  \n<ion-content class=\"ion-padding\">  \n \n    <ion-searchbar animated *ngIf=\"showSearchBar && itemsAllProductos.length > 0\" class=\"FadeOut FadeIn\" #ionsearchbar\n      placeholder=\"Buscar por nombre o categoría\"\n      animated=\"true\"\n      showCancelButton=\"never\" \n      color=\"light\" \n      autocomplete=\"on\"\n      enterkeyhint=\"send\"\n      inputmode=\"text\"\n      type=\"text\"\n      debounce=\"50\"\n      value=\"{{palabraFiltro}}\"\n      (ionChange)=\"buscar($event)\">\n    </ion-searchbar> \n    \n    <ion-grid *ngIf=\"itemsAllProductos.length > 0\">       \n        <ion-row>          \n          <ion-col *ngIf=\"palabraFiltro == ''\" size=\"6\" size-xs=\"6\" size-sm=\"6\" size-md=\"4\" size-lg=\"3\">\n            <ion-item (click)=\"agregarDescuento()\" class=\"item-card remove_inner_bottom\">                  \n              <ion-label>                \n                <h2>\n                  Descuento \n                </h2>\n              </ion-label>  \n            </ion-item>\n          </ion-col>\n\n          <ion-col *ngIf=\"palabraFiltro == ''\" size=\"6\" size-xs=\"6\" size-sm=\"6\" size-md=\"4\" size-lg=\"3\">\n            <ion-item (click)=\"agregarRecargo()\" class=\"item-card remove_inner_bottom\">               \n              <ion-label>                \n                <h2>\n                  Recargo\n                </h2>\n              </ion-label>  \n            </ion-item>\n          </ion-col>          \n\n          <ion-col size=\"12\" size-xs=\"12\" size-sm=\"6\" size-md=\"4\" size-lg=\"3\" *ngFor=\"let producto of itemsRenderProductos\">           \n\n            <ion-item-sliding class=\"item-card fivePhasesFadeIn\" (ionDrag)=\"onDrag($event,producto)\"> \n              <app-card-producto   \n                [item]=\"producto\"\n                [multiplicador]=\"1\" \n                [showOpcionesSeleccionadas]=\"false\"\n                [showEstadoComanda]=\"false\"\n                (select)=\"agregarProducto(producto)\"\n              ></app-card-producto>    \n            \n              <ion-item-options side=\"end\">\n                <ion-item-option  (click)=\"editarProducto(producto)\"><ion-icon name=\"create\" ></ion-icon> Editar</ion-item-option>\n              </ion-item-options>\n        \n              <ion-item-options side=\"start\" (ionSwipe)=\"onDrop2(producto)\" (click)=\"agregarACarrito(producto)\">\n                <ion-item-option color=\"success\"><ion-icon name=\"add\" ></ion-icon>Agregar A Carrito</ion-item-option>\n              </ion-item-options>\n\n            </ion-item-sliding>\n          </ion-col>\n\n          \n  \n        </ion-row>\n    </ion-grid>\n \n\n  \n  <!-- fab placed to the bottom end -->\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" >\n\n    \n    <ion-fab-button *ngIf=\"palabraFiltro == ''\"  color=\"success\" (click)=\"focusBuscar()\">\n      <ion-icon name=\"search\"></ion-icon>\n    </ion-fab-button><br>\n\n    <span *ngIf=\"palabraFiltro == '' && isMobile\">\n      <ion-fab-button   color=\"success\" (click)=\"lectorDeCodigo()\">\n        <ion-icon name=\"barcode\"></ion-icon>\n      </ion-fab-button><br>\n    </span>\n    \n    <span  *ngIf=\"palabraFiltro == '' && isMobile\">\n      <ion-fab-button  color=\"success\" (click)=\"reconocimientoPorVoz()\">\n        <ion-icon name=\"mic-outline\"></ion-icon>\n      </ion-fab-button><br>\n    </span>    \n\n    <ion-fab-button *ngIf=\"palabraFiltro == '' || itemsProductos.length == 0\" (click)=\"nuevoProducto()\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <div *ngIf=\"buscandoProductos\" class=\"mensaje FadeOut FadeIn\">\n    <img src=\"../../assets/img/buscando.fw.png\" alt=\"\">\n    <p>Cargando productos, <br> aguarde unos segundos por favor</p>\n  </div>\n\n  <div *ngIf=\"!buscandoProductos && itemsAllProductos.length == 0\" class=\"mensaje FadeOut FadeIn\">\n    <img src=\"../../assets/img/producto.png\" alt=\"\">\n    <p >Aún no tienes productos agregados a tu comercio!</p>\n  </div>\n\n  <div *ngIf=\"buscandoProductos && itemsProductos.length != 0\" class=\"mensaje FadeOut FadeIn\">\n    <img src=\"../../assets/img/producto.png\" alt=\"\">\n    <p >No existe un producto con ese nombre! Agrega uno nuevo.</p>\n  </div>\n\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"verMas()\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Cargando más productos...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>\n\n<ion-footer class=\"ion-no-border ion-padding\" *ngIf=\"carrito.on\" style=\"padding: 0px;\"> \n  <ion-toolbar>\n    <ion-button class=\"margin0 button-rounded\" style=\"height: 60px;\" color=\"success\" (click)=\"siguiente()\">\n      <ion-icon name=\"cart-outline\"></ion-icon>{{carrito.productos.length}} = {{carritoService.getTotal() | currency}} <ion-icon name=\"arrow-forward\"></ion-icon>\n    </ion-button>\n  </ion-toolbar> \n</ion-footer>");

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
/* harmony import */ var _impresora_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../impresora.service */ "./src/app/Services/impresora.service.ts");











let CarritoService = class CarritoService {
    constructor(authenticationService, pedidosService, modalNotificacion, comentariosService, firestore, impresoraService) {
        this.authenticationService = authenticationService;
        this.pedidosService = pedidosService;
        this.modalNotificacion = modalNotificacion;
        this.comentariosService = comentariosService;
        this.firestore = firestore;
        this.impresoraService = impresoraService;
        this.comentario = "";
        this.actualCarritoSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]("");
        this.carrito = new src_app_models_pedido__WEBPACK_IMPORTED_MODULE_5__["Pedido"]();
        this.actualCarritoSubject.next(this.carrito);
    }
    getActualCarritoSubs() {
        return this.actualCarritoSubject.asObservable();
    }
    agregarProducto(producto) {
        producto.enCarrito += producto.cantidad;
        const p = JSON.parse(JSON.stringify(producto));
        p.gruposOpciones = [];
        this.carrito.productos.push(p);
        this.carrito.on = true;
        this.modalNotificacion.success("Agregado", producto.cantidad + ' ' + producto.unidad + ' de ' + producto.nombre);
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
        this.carrito.productos.splice(index, 1);
        if (this.carrito.productos.length > 0 || this.carrito.servicios.length > 0)
            this.carrito.on = true;
        else {
            this.carrito.on = false;
        }
        this.actualCarritoSubject.next(this.carrito);
    }
    setearCliente(cliente) {
        this.carrito.cliente = cliente;
        this.carrito.clienteId = cliente.id;
        this.carrito.clienteNombre = cliente.nombre;
        this.carrito.clienteEmail = cliente.email;
        console.log(this.carrito.cliente);
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
        this.carrito.id = this.firestore.createId();
        this.carrito.personalId = this.authenticationService.getUID();
        this.carrito.personalEmail = this.authenticationService.getEmail();
        this.carrito.personalNombre = this.authenticationService.getNombre();
        this.impresoraService.impresionComanda(this.carrito);
        if (this.comentario != "") {
            this.comentariosService.setearPath("pedidos", this.carrito.id);
            let comentario = new src_app_models_comentario__WEBPACK_IMPORTED_MODULE_9__["Comentario"]();
            comentario.text = this.comentario;
            comentario.senderId = this.authenticationService.getUID();
            comentario.senderEmail = this.authenticationService.getEmail();
            this.comentariosService.add(comentario).then(data => {
                console.log("comentario agregado");
            });
        }
        let c = new src_app_models_pedido__WEBPACK_IMPORTED_MODULE_5__["Pedido"](); //NO borrar!!! importante para cuando está en modo offline!!!
        Object.assign(c, this.carrito);
        this.vaciar();
        c.direccion = JSON.parse(JSON.stringify(c.direccion));
        this.pedidosService.add(c).then((data) => {
            console.log("!!!!!!" + data.fromCache);
        });
        this.modalNotificacion.success("Cargado", "El pedido ha sido cargado a la lista.");
    }
};
CarritoService.ctorParameters = () => [
    { type: _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: _pedido_service__WEBPACK_IMPORTED_MODULE_4__["PedidoService"] },
    { type: _modal_notificacion_service__WEBPACK_IMPORTED_MODULE_6__["ModalNotificacionService"] },
    { type: _comentarios_service__WEBPACK_IMPORTED_MODULE_7__["ComentariosService"] },
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestore"] },
    { type: _impresora_service__WEBPACK_IMPORTED_MODULE_10__["ImpresoraService"] }
];
CarritoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CarritoService);



/***/ }),

/***/ "./src/app/form-descuento/form-descuento.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/form-descuento/form-descuento.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0tZGVzY3VlbnRvL2Zvcm0tZGVzY3VlbnRvLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/form-descuento/form-descuento.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/form-descuento/form-descuento.page.ts ***!
  \*******************************************************/
/*! exports provided: FormDescuentoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormDescuentoPage", function() { return FormDescuentoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _models_descuento__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/descuento */ "./src/app/models/descuento.ts");
/* harmony import */ var _Services_global_carrito_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/global/carrito.service */ "./src/app/Services/global/carrito.service.ts");





let FormDescuentoPage = class FormDescuentoPage {
    constructor(modalCtrl, carritoService) {
        this.modalCtrl = modalCtrl;
        this.carritoService = carritoService;
        this.enumTipo = _models_descuento__WEBPACK_IMPORTED_MODULE_3__["EnumTipoDescuento"];
        this.descuento = new _models_descuento__WEBPACK_IMPORTED_MODULE_3__["Descuento"]();
    }
    ngOnInit() {
    }
    cancelar() {
        this.modalCtrl.dismiss();
    }
    agregar() {
        if (this.descuento.monto) {
            this.modalCtrl.dismiss(this.descuento);
        }
        else {
            this.modalCtrl.dismiss();
        }
    }
};
FormDescuentoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _Services_global_carrito_service__WEBPACK_IMPORTED_MODULE_4__["CarritoService"] }
];
FormDescuentoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-descuento',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./form-descuento.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-descuento/form-descuento.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./form-descuento.page.scss */ "./src/app/form-descuento/form-descuento.page.scss")).default]
    })
], FormDescuentoPage);



/***/ }),

/***/ "./src/app/form-recargo/form-recargo.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/form-recargo/form-recargo.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0tcmVjYXJnby9mb3JtLXJlY2FyZ28ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/form-recargo/form-recargo.page.ts":
/*!***************************************************!*\
  !*** ./src/app/form-recargo/form-recargo.page.ts ***!
  \***************************************************/
/*! exports provided: FormRecargoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormRecargoPage", function() { return FormRecargoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _models_recargo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/recargo */ "./src/app/models/recargo.ts");
/* harmony import */ var _Services_global_carrito_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/global/carrito.service */ "./src/app/Services/global/carrito.service.ts");





let FormRecargoPage = class FormRecargoPage {
    constructor(modalCtrl, carritoService) {
        this.modalCtrl = modalCtrl;
        this.carritoService = carritoService;
        this.enumTipo = _models_recargo__WEBPACK_IMPORTED_MODULE_3__["EnumTipoRecargo"];
        this.recargo = new _models_recargo__WEBPACK_IMPORTED_MODULE_3__["Recargo"]();
    }
    ngOnInit() {
    }
    cancelar() {
        this.modalCtrl.dismiss();
    }
    agregar() {
        if (this.recargo.monto) {
            this.modalCtrl.dismiss(this.recargo);
        }
        else {
            this.modalCtrl.dismiss();
        }
    }
};
FormRecargoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _Services_global_carrito_service__WEBPACK_IMPORTED_MODULE_4__["CarritoService"] }
];
FormRecargoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-recargo',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./form-recargo.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-recargo/form-recargo.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./form-recargo.page.scss */ "./src/app/form-recargo/form-recargo.page.scss")).default]
    })
], FormRecargoPage);



/***/ }),

/***/ "./src/app/list-productos-servicios/list-productos-servicios-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/list-productos-servicios/list-productos-servicios-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: ListProductosServiciosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListProductosServiciosPageRoutingModule", function() { return ListProductosServiciosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _list_productos_servicios_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-productos-servicios.page */ "./src/app/list-productos-servicios/list-productos-servicios.page.ts");




const routes = [
    {
        path: '',
        component: _list_productos_servicios_page__WEBPACK_IMPORTED_MODULE_3__["ListProductosServiciosPage"]
    }
];
let ListProductosServiciosPageRoutingModule = class ListProductosServiciosPageRoutingModule {
};
ListProductosServiciosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ListProductosServiciosPageRoutingModule);



/***/ }),

/***/ "./src/app/list-productos-servicios/list-productos-servicios.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/list-productos-servicios/list-productos-servicios.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ListProductosServiciosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListProductosServiciosPageModule", function() { return ListProductosServiciosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _list_productos_servicios_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-productos-servicios-routing.module */ "./src/app/list-productos-servicios/list-productos-servicios-routing.module.ts");
/* harmony import */ var _list_productos_servicios_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-productos-servicios.page */ "./src/app/list-productos-servicios/list-productos-servicios.page.ts");
/* harmony import */ var _Components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Components/components.module */ "./src/app/Components/components.module.ts");








let ListProductosServiciosPageModule = class ListProductosServiciosPageModule {
};
ListProductosServiciosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _Components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _list_productos_servicios_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListProductosServiciosPageRoutingModule"]
        ],
        declarations: [_list_productos_servicios_page__WEBPACK_IMPORTED_MODULE_6__["ListProductosServiciosPage"]]
    })
], ListProductosServiciosPageModule);



/***/ }),

/***/ "./src/app/list-productos-servicios/list-productos-servicios.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/list-productos-servicios/list-productos-servicios.page.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-slide {\n  width: 106.667px;\n  background-color: lightgrey;\n  height: 30px;\n  font-size: 15px;\n  color: white;\n  border-radius: 15px;\n  line-height: 30px;\n  margin: 3px;\n}\n\n.seleccionado {\n  background-color: green;\n}\n\n#notifications-badge {\n  background-color: red;\n  border-radius: 100%;\n  margin: auto;\n  margin-left: -30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC1wcm9kdWN0b3Mtc2VydmljaW9zL0M6XFxQcm95ZWN0b3NcXFdlYiBBcHBcXHRpdml0eS9zcmNcXGFwcFxcbGlzdC1wcm9kdWN0b3Mtc2VydmljaW9zXFxsaXN0LXByb2R1Y3Rvcy1zZXJ2aWNpb3MucGFnZS5zY3NzIiwic3JjL2FwcC9saXN0LXByb2R1Y3Rvcy1zZXJ2aWNpb3MvbGlzdC1wcm9kdWN0b3Mtc2VydmljaW9zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ0FKOztBRElBO0VBQ0ksdUJBQUE7QUNESjs7QURLQTtFQUNJLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNGSiIsImZpbGUiOiJzcmMvYXBwL2xpc3QtcHJvZHVjdG9zLXNlcnZpY2lvcy9saXN0LXByb2R1Y3Rvcy1zZXJ2aWNpb3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmlvbi1zbGlkZXtcclxuICAgIHdpZHRoOiAxMDYuNjY3cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICBtYXJnaW46M3B4O1xyXG59XHJcblxyXG5cclxuLnNlbGVjY2lvbmFkb3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG59XHJcblxyXG5cclxuI25vdGlmaWNhdGlvbnMtYmFkZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi1sZWZ0OiAtMzBweDtcclxufVxyXG4iLCJpb24tc2xpZGUge1xuICB3aWR0aDogMTA2LjY2N3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XG4gIGhlaWdodDogMzBweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW46IDNweDtcbn1cblxuLnNlbGVjY2lvbmFkbyB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xufVxuXG4jbm90aWZpY2F0aW9ucy1iYWRnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tbGVmdDogLTMwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/list-productos-servicios/list-productos-servicios.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/list-productos-servicios/list-productos-servicios.page.ts ***!
  \***************************************************************************/
/*! exports provided: ListProductosServiciosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListProductosServiciosPage", function() { return ListProductosServiciosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _Services_productos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/productos.service */ "./src/app/Services/productos.service.ts");
/* harmony import */ var _Services_servicios_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Services/servicios.service */ "./src/app/Services/servicios.service.ts");
/* harmony import */ var _add_producto_venta_add_producto_venta_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../add-producto-venta/add-producto-venta.page */ "./src/app/add-producto-venta/add-producto-venta.page.ts");
/* harmony import */ var _Services_global_carrito_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Services/global/carrito.service */ "./src/app/Services/global/carrito.service.ts");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _Services_comercios_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Services/comercios.service */ "./src/app/Services/comercios.service.ts");
/* harmony import */ var _Services_loading_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Services/loading.service */ "./src/app/Services/loading.service.ts");
/* harmony import */ var _Services_carga_por_voz_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Services/carga-por-voz.service */ "./src/app/Services/carga-por-voz.service.ts");
/* harmony import */ var _Services_toast_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Services/toast.service */ "./src/app/Services/toast.service.ts");
/* harmony import */ var _Services_categorias_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Services/categorias.service */ "./src/app/Services/categorias.service.ts");
/* harmony import */ var _models_comercio__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../models/comercio */ "./src/app/models/comercio.ts");
/* harmony import */ var _Services_authentication_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Services/authentication.service */ "./src/app/Services/authentication.service.ts");
/* harmony import */ var _Services_variaciones_stocks_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../Services/variaciones-stocks.service */ "./src/app/Services/variaciones-stocks.service.ts");
/* harmony import */ var _form_descuento_form_descuento_page__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../form-descuento/form-descuento.page */ "./src/app/form-descuento/form-descuento.page.ts");
/* harmony import */ var _form_recargo_form_recargo_page__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../form-recargo/form-recargo.page */ "./src/app/form-recargo/form-recargo.page.ts");
/* harmony import */ var _models_pedido__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../models/pedido */ "./src/app/models/pedido.ts");
/* harmony import */ var _impresiones_comanda_comanda_page__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../impresiones/comanda/comanda.page */ "./src/app/impresiones/comanda/comanda.page.ts");
/* harmony import */ var _cambiar_plan_cambiar_plan_page__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../cambiar-plan/cambiar-plan.page */ "./src/app/cambiar-plan/cambiar-plan.page.ts");
/* harmony import */ var _Services_global_navegacion_parametros_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../Services/global/navegacion-parametros.service */ "./src/app/Services/global/navegacion-parametros.service.ts");
/* harmony import */ var _Services_wordpress_wordpress_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../Services/wordpress/wordpress.service */ "./src/app/Services/wordpress/wordpress.service.ts");
/* harmony import */ var _Services_usuarios_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../Services/usuarios.service */ "./src/app/Services/usuarios.service.ts");
/* harmony import */ var _Services_notifificaciones_app_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../Services/notifificaciones-app.service */ "./src/app/Services/notifificaciones-app.service.ts");
/* harmony import */ var _Services_pedido_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../Services/pedido.service */ "./src/app/Services/pedido.service.ts");




























let ListProductosServiciosPage = class ListProductosServiciosPage {
    constructor(loadingController, router, route, productosService, variacionesStockService, serviciosService, modalCtrl, carritoService, barcodeScanner, alertController, comerciosService, loadingService, cargaPorVoz, changeRef, toastServices, categoriasService, AuthenticationService, modalController, authenticationService, navParametrosService, platform, wordpressService, usuariosServices, notificacionesAppService, pedidosService) {
        this.loadingController = loadingController;
        this.router = router;
        this.route = route;
        this.productosService = productosService;
        this.variacionesStockService = variacionesStockService;
        this.serviciosService = serviciosService;
        this.modalCtrl = modalCtrl;
        this.carritoService = carritoService;
        this.barcodeScanner = barcodeScanner;
        this.alertController = alertController;
        this.comerciosService = comerciosService;
        this.loadingService = loadingService;
        this.cargaPorVoz = cargaPorVoz;
        this.changeRef = changeRef;
        this.toastServices = toastServices;
        this.categoriasService = categoriasService;
        this.AuthenticationService = AuthenticationService;
        this.modalController = modalController;
        this.authenticationService = authenticationService;
        this.navParametrosService = navParametrosService;
        this.platform = platform;
        this.wordpressService = wordpressService;
        this.usuariosServices = usuariosServices;
        this.notificacionesAppService = notificacionesAppService;
        this.pedidosService = pedidosService;
        this.itemsAllProductos = [];
        this.itemsProductos = [];
        this.itemsRenderProductos = [];
        this.itemsPerPage = 30;
        this.itemsRenderizados = 0;
        this.itemsSeparadosAlfabeticamente = [];
        this.categorias = [];
        this.palabraFiltro = "";
        this.ultimoItem = "";
        this.loadingActive = false;
        this.showProductos = true;
        this.cajaSeleccionada = "";
        this.reconociendoPorVoz = false;
        this.seteandoProducto = false;
        this.permisos = {
            canAgregar: false,
            canCarrito: false,
        };
        this.buscandoProductos = true;
        this.buscandoBarCode = false;
        this.isMobile = false;
        this.dragAgregar = false;
        this.connectionStatus = "offline";
        this.countNotificaciones = 0;
        this.showSearchBar = false;
        this.pedidosSolicitadosLength = 0;
        console.log(this.ionSearchbar);
        this.notificacionesAppService.getSinLeer(this.usuariosServices.usuarioLogueado).subscribe(snapshot => {
            console.log(snapshot.length);
            this.countNotificaciones = snapshot.length;
        });
        this.usuariosServices.getConnectionStatus().subscribe(data => {
            this.connectionStatus = data;
        });
        this.AuthenticationService.observeRol().subscribe(data => {
            if (data == "Administrador") {
                this.permisos.canAgregar = true;
                this.permisos.canCarrito = true;
            }
            if (data == "Cajero") {
                this.permisos.canAgregar = false;
                this.permisos.canCarrito = true;
            }
        });
        if (this.platform.is('mobile')) {
            this.isMobile = true;
        }
    }
    set content(content) {
        if (content) { // initially setter gets called with undefined
            this.ionSearchbar = content;
        }
    }
    refresh(event) {
        console.log('Begin async operation');
        this.ngOnInit();
        setTimeout(() => {
            event.target.complete();
        }, 500);
    }
    ngOnInit() {
        this.loadingService.presentLoadingText("Cargnado Productos");
        this.itemsProductos = [];
        this.comercio = new _models_comercio__WEBPACK_IMPORTED_MODULE_14__["Comercio"]();
        this.comerciosService.getSelectedCommerce().subscribe(data => {
            this.comercio.asignarValores(data);
        });
        this.cargaPorVoz.getPermission();
        this.carritoSubs = this.carritoService.getActualCarritoSubs().subscribe(data => {
            this.carrito = data;
        });
        this.pedidosService.listSolicitadosUltimosDosDias().subscribe((pedidos) => {
            this.pedidosSolicitadosLength = pedidos.length;
            console.log(this.pedidosSolicitadosLength);
        });
        /*Mantener toda la lógica en el ngOninit para que solo se subscriba una vez y
        no demande al servidor todos los datso cda vez que se muestra esta pantalla*/
        let comercio_seleccionadoId = localStorage.getItem('comercio_seleccionadoId');
        var catSub = this.categoriasService.getAll().subscribe(snapshot => {
            this.categorias = [];
            this.loadingService.dismissLoading();
            snapshot.forEach((snap) => {
                var categoria = snap.payload.doc.data();
                categoria.id = snap.payload.doc.id;
                categoria.seleccionado = false;
                this.categorias.push(categoria);
            });
            catSub.unsubscribe();
        });
        if (this.route.snapshot.params.filtro) {
            this.palabraFiltro = this.route.snapshot.params.filtro;
            this.deseleccionarCategorias();
        }
        this.obtenerTodo();
    }
    ionViewDidEnter() {
        console.log("DidEnter");
        //this.marcarEnCarrito();
        this.wordpressService.obtainToken();
        console.log(this.carrito.productos);
        this.validarEnCarrito();
    }
    ionViewWillEnter() {
    }
    ionViewDidLeave() {
        //this.subsItemsProd.unsubscribe();
    }
    validarEnCarrito() {
        this.itemsProductos.forEach(element => {
            element.enCarrito = 0;
            this.carrito.productos.forEach(prod => {
                if (prod.id == element.id) {
                    element.enCarrito += prod.cantidad;
                }
            });
        });
    }
    verMas() {
        console.log("!!!!! Lazy");
        if (this.itemsRenderizados < this.itemsPerPage) {
            console.log("No hay más!!!" + this.itemsRenderizados);
            this.infiniteScroll.complete();
            this.infiniteScroll.disabled = true;
            return;
        }
        let start = this.itemsRenderizados;
        for (let i = start; i < start + this.itemsPerPage; i++) {
            if (this.itemsProductos[i] == undefined) {
                console.log("No hay más!!! fuera del array" + this.itemsRenderizados);
                this.infiniteScroll.complete();
                this.infiniteScroll.disabled = true;
                return;
            }
            if (this.itemsProductos[i].id) {
                this.itemsRenderProductos.push(this.itemsProductos[i]);
                this.itemsRenderizados += 1;
                console.log("pushing to render");
            }
        }
        this.infiniteScroll.complete();
    }
    buscar(event) {
        this.itemsRenderProductos = [];
        this.itemsRenderizados = 0;
        this.infiniteScroll.disabled = false;
        if (event)
            this.palabraFiltro = event.target.value;
        if (this.palabraFiltro != "") {
            var palabra = this.palabraFiltro.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            var retorno = false;
            this.itemsProductos = [];
            this.itemsAllProductos.forEach((item) => {
                var encontrado = false;
                if (item.nombre) {
                    retorno = (item.nombre.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").indexOf(palabra.toLowerCase()) > -1);
                    if (retorno)
                        encontrado = true;
                }
                if (item.descripcion) {
                    retorno = (item.descripcion.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").indexOf(palabra.toLowerCase()) > -1);
                    if (retorno)
                        encontrado = true;
                }
                if (item.barcode) {
                    if (item.barcode.includes(palabra)) {
                        encontrado = true;
                    }
                }
                if (encontrado) {
                    console.log("agregado a itemsProducto " + item.id);
                    this.itemsProductos.push(item);
                    if (this.itemsRenderProductos.length < this.itemsPerPage) {
                        console.log("Renderizando" + item.id);
                        this.itemsRenderProductos.push(item);
                        this.itemsRenderizados += 1;
                    }
                    return true;
                }
            });
            if (this.buscandoBarCode) {
                this.buscandoBarCode = false;
                if (this.itemsProductos.length == 1) {
                    this.agregarProducto(this.itemsProductos[0]);
                    this.toastServices.mensaje("Se seleccionó el producto: " + this.itemsProductos[0].nombre, "");
                }
            }
            if (this.cargaPorVoz.reconociendoPorVoz) {
                this.cargaPorVoz.reconociendoPorVoz = false;
                if (this.itemsProductos.length == 1) {
                    this.agregarProducto(this.itemsProductos[0]);
                    this.toastServices.mensaje("Se seleccionó el producto: " + this.itemsProductos[0].nombre, "");
                }
            }
        }
        else {
            this.itemsProductos = this.itemsAllProductos;
            for (let i = 0; i < this.itemsPerPage; i++) {
                if (this.itemsProductos[i]) {
                    this.itemsRenderProductos.push(this.itemsProductos[i]);
                    this.itemsRenderizados += 1;
                }
                else {
                    console.log("No hay más!!! fuera del array" + this.itemsRenderizados);
                    this.infiniteScroll.complete();
                    this.infiniteScroll.disabled = true;
                    return;
                }
            }
        }
        this.changeRef.detectChanges();
    }
    editarProducto(item) {
        this.loadingService.presentLoading();
        this.router.navigate(['form-producto', { id: item.id }]);
    }
    show() {
    }
    showMore() {
    }
    obtenerTodo() {
        this.buscandoProductos = true;
        this.subsItemsProd = this.productosService.list().subscribe(productos => {
            this.itemsAllProductos = productos;
            this.buscandoProductos = false;
            this.itemsAllProductos.forEach(producto => {
                producto.producto = true;
                producto.enCarrito = 0;
            });
            this.buscar(undefined);
        });
    }
    vaciarCarrito() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Está seguro que desea vaciar todo el carrito?',
                message: '',
                buttons: [
                    {
                        text: 'No',
                        handler: (blah) => {
                        }
                    }, {
                        text: 'Si',
                        handler: () => {
                            this.itemsAllProductos.forEach(element => {
                                element.enCarrito = 0;
                            });
                            this.carritoService.vaciar();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    onDrag(event, producto) {
        event.target.getSlidingRatio().then(res => {
            if (res < -0.8) {
                this.dragAgregar = true;
                this.dragEvent = event.target;
            }
            if (res == -1) {
                this.onDrop2(producto);
            }
        });
    }
    onDrop1(producto) {
        console.log("onDropEnd");
    }
    agregarACarrito(producto) {
        producto.precioTotal = producto.precio;
        this.carritoService.agregarProducto(producto);
    }
    onDrop2(producto) {
        if (this.dragAgregar) {
            this.dragAgregar = false;
            producto.precioTotal = producto.precio;
            this.carritoService.agregarProducto(producto);
            this.dragEvent.close().then(data => {
            });
        }
    }
    reconocimientoPorVoz() {
        if (!this.cargaPorVoz.reconociendoPorVoz) {
            this.cargaPorVoz.reconociendoPorVoz = true;
            this.cargaPorVoz.startReconocimiento().subscribe(matches => {
                let message = matches[0]; //Guarda la primera frase que ha interpretado en nuestra variable     
                this.palabraFiltro = message;
                this.buscar(undefined);
            }, (onerror) => {
                if (onerror == 0) {
                    this.toastServices.mensaje("Reconocimiento por voz finalizado", "");
                    this.palabraFiltro = "";
                    this.buscar(undefined);
                }
            });
        }
        else {
            this.cargaPorVoz.reconociendoPorVoz = false;
            this.cargaPorVoz.stopReconocimiento();
        }
    }
    lectorDeCodigo() {
        this.buscandoBarCode = true;
        this.barcodeScanner.scan().then(barcodeData => {
            //var codeBar:any =JSON.stringify(barcodeData);
            this.palabraFiltro = barcodeData.text;
            this.buscar(undefined);
        }).catch(err => {
        });
    }
    irDashboardProductos() {
        this.router.navigate(['dashboard-productos']);
    }
    agregarProducto(producto) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _add_producto_venta_add_producto_venta_page__WEBPACK_IMPORTED_MODULE_6__["AddProductoVentaPage"],
                cssClass: 'modal-custom-wrapper',
                componentProps: {
                    producto: producto
                }
            });
            modal.onDidDismiss()
                .then((retorno) => {
                if (retorno.data) {
                    producto.enCarrito += retorno.data.cantidad;
                    delete retorno.data.keywords;
                    //producto.cantidad = retorno.data.cantidad
                    //producto.opcionesSeleccionadas = retorno.data.opcionesSeleccionadas
                    this.carritoService.agregarProducto(retorno.data);
                    //this.marcarEnCarrito();         
                }
                else {
                }
            });
            yield modal.present();
            this.palabraFiltro = "";
        });
    }
    agregarDescuento() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _form_descuento_form_descuento_page__WEBPACK_IMPORTED_MODULE_17__["FormDescuentoPage"],
                cssClass: 'modal-custom-wrapper'
            });
            modal.onDidDismiss().then((retorno) => {
                if (retorno.data) {
                    this.carritoService.agregarDescuento(retorno.data);
                }
            });
            return yield modal.present();
        });
    }
    agregarRecargo() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _form_recargo_form_recargo_page__WEBPACK_IMPORTED_MODULE_18__["FormRecargoPage"],
                cssClass: 'modal-custom-wrapper'
            });
            modal.onDidDismiss().then((retorno) => {
                if (retorno.data) {
                    this.carritoService.agregarRecargo(retorno.data);
                }
            });
            return yield modal.present();
        });
    }
    siguiente() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.comercio.config.cobrarDirectamente)
                this.cobrarDirectamente();
            else
                this.verCarrito();
        });
    }
    verCarrito() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(this.route.snapshot.params.carritoIntended);
            this.router.navigate(['details-carrito', { carritoIntended: this.route.snapshot.params.carritoIntended }]);
        });
    }
    cobrarDirectamente() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let pedido = new _models_pedido__WEBPACK_IMPORTED_MODULE_19__["Pedido"]();
            pedido.asignarValores(this.carrito);
            pedido.personalId = this.authenticationService.getUID();
            pedido.personalEmail = this.authenticationService.getEmail();
            pedido.personalNombre = this.authenticationService.getNombre();
            let editarPedido = new _models_pedido__WEBPACK_IMPORTED_MODULE_19__["Pedido"]();
            editarPedido.asignarValores(pedido);
            this.navParametrosService.param = editarPedido;
            this.router.navigate(['details-pedido']);
        });
    }
    imprimirComanda(pedido) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _impresiones_comanda_comanda_page__WEBPACK_IMPORTED_MODULE_20__["ComandaPage"],
                componentProps: {
                    pedido: pedido,
                }
            });
            return yield modal.present();
        });
    }
    verProductos(categoria) {
        if (categoria != '')
            this.palabraFiltro = categoria.nombre.toLowerCase();
        else
            this.palabraFiltro = "";
        this.deseleccionarCategorias();
        if (categoria != '') {
            categoria.seleccionado = true;
        }
        else {
            this.palabraFiltro = '';
        }
    }
    deseleccionarCategorias() {
        /*this.categorias.forEach(c =>{
          c.seleccionado = false;
        })*/
    }
    nuevoServicio() {
        this.router.navigate(['form-servicio']);
    }
    nuevoProducto() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.itemsAllProductos.length > this.comercio.config.productosMaxLength) {
                let modal = yield this.modalCtrl.create({
                    component: _cambiar_plan_cambiar_plan_page__WEBPACK_IMPORTED_MODULE_21__["CambiarPlanPage"],
                    componentProps: {
                        extraText: "Haz alcanzado el límite de productos de tu plan: " + this.comercio.plan,
                        actualPlan: this.comercio.plan
                    }
                });
                return yield modal.present();
            }
            else {
                this.router.navigate(['form-producto']);
            }
        });
    }
    focusBuscar() {
        this.showSearchBar = true;
        setTimeout(() => {
            // Set the focus to the input box of the ion-Searchbar component
            this.ionSearchbar.setFocus();
        }, 100);
    }
};
ListProductosServiciosPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _Services_productos_service__WEBPACK_IMPORTED_MODULE_4__["ProductosService"] },
    { type: _Services_variaciones_stocks_service__WEBPACK_IMPORTED_MODULE_16__["VariacionesStocksService"] },
    { type: _Services_servicios_service__WEBPACK_IMPORTED_MODULE_5__["ServiciosService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _Services_global_carrito_service__WEBPACK_IMPORTED_MODULE_7__["CarritoService"] },
    { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_8__["BarcodeScanner"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _Services_comercios_service__WEBPACK_IMPORTED_MODULE_9__["ComerciosService"] },
    { type: _Services_loading_service__WEBPACK_IMPORTED_MODULE_10__["LoadingService"] },
    { type: _Services_carga_por_voz_service__WEBPACK_IMPORTED_MODULE_11__["CargaPorVozService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _Services_toast_service__WEBPACK_IMPORTED_MODULE_12__["ToastService"] },
    { type: _Services_categorias_service__WEBPACK_IMPORTED_MODULE_13__["CategoriasService"] },
    { type: _Services_authentication_service__WEBPACK_IMPORTED_MODULE_15__["AuthenticationService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _Services_authentication_service__WEBPACK_IMPORTED_MODULE_15__["AuthenticationService"] },
    { type: _Services_global_navegacion_parametros_service__WEBPACK_IMPORTED_MODULE_22__["NavegacionParametrosService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _Services_wordpress_wordpress_service__WEBPACK_IMPORTED_MODULE_23__["WordpressService"] },
    { type: _Services_usuarios_service__WEBPACK_IMPORTED_MODULE_24__["UsuariosService"] },
    { type: _Services_notifificaciones_app_service__WEBPACK_IMPORTED_MODULE_25__["NotifificacionesAppService"] },
    { type: _Services_pedido_service__WEBPACK_IMPORTED_MODULE_26__["PedidoService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"])
], ListProductosServiciosPage.prototype, "infiniteScroll", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSearchbar"], { static: false })
], ListProductosServiciosPage.prototype, "ionSearchbar", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSearchbar"])
], ListProductosServiciosPage.prototype, "content", null);
ListProductosServiciosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-productos-servicios',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./list-productos-servicios.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/list-productos-servicios/list-productos-servicios.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./list-productos-servicios.page.scss */ "./src/app/list-productos-servicios/list-productos-servicios.page.scss")).default]
    })
], ListProductosServiciosPage);



/***/ })

}]);
//# sourceMappingURL=list-productos-servicios-list-productos-servicios-module.js.map