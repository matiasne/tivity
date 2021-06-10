(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["details-carrito-details-carrito-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/details-carrito/details-carrito.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/details-carrito/details-carrito.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button  (click)=\"cancelar()\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Detalle Carrito</ion-title>    \r\n    <ion-button fill=\"clear\" (click)=\"preguntarVaciar()\" color=\"danger\" slot=\"end\">\r\n      <ion-icon name=\"trash\"></ion-icon>\r\n    </ion-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">   \r\n   \r\n    <div  class=\"form-card\" *ngIf=\"carrito.productos.length > 0\">\r\n      <ion-text color=\"primary\">\r\n        <h4>Productos</h4>\r\n      </ion-text> \r\n   \r\n      \r\n    <ion-list>                   \r\n      <span *ngFor=\"let producto of carrito.productos; let i = index\">\r\n        <ion-item-sliding>\r\n          <app-card-producto\r\n            [item]=\"producto\"\r\n            [showStock]=\"false\"\r\n            [showEnCarrito] = \"false\"\r\n            [multiplicador]=\"1\"\r\n          ></app-card-producto>  \r\n          <ion-item-options side=\"end\">\r\n            <ion-item-option color=\"danger\" (click)=\"eliminarProducto(i)\"><ion-icon name=\"trash\" ></ion-icon> Eliminar</ion-item-option>\r\n          </ion-item-options>\r\n    \r\n        </ion-item-sliding>\r\n      </span>\r\n\r\n      <ion-text color=\"primary\" *ngIf=\"carrito.descuentos.length > 0\">\r\n        <h4>Descuentos</h4>\r\n      </ion-text> \r\n\r\n      <span *ngFor=\"let item of carrito.descuentos; let i = index\">\r\n        <ion-item-sliding>\r\n          <ion-item>\r\n            <ion-label>                \r\n              <h2>\r\n                <b><span *ngIf=\"item.tipo== enumTipo.porcentaje\">%</span> <span *ngIf=\"item.tipo== enumTipo.monto\">$</span> {{item.monto}}</b>  {{item.motivo}}             \r\n              </h2>\r\n            </ion-label>\r\n          </ion-item>\r\n          <ion-item-options side=\"end\">\r\n            <ion-item-option color=\"danger\" (click)=\"eliminarDescuento(i)\"><ion-icon name=\"trash\" ></ion-icon> Eliminar</ion-item-option>\r\n          </ion-item-options>\r\n    \r\n        </ion-item-sliding>\r\n      </span>\r\n\r\n      <ion-text color=\"primary\" *ngIf=\"carrito.recargos.length > 0\">\r\n        <h4>Recargos</h4>\r\n      </ion-text> \r\n\r\n      <span *ngFor=\"let item of carrito.recargos; let i = index\">\r\n        <ion-item-sliding >\r\n          <ion-item>\r\n            <ion-label>                \r\n              <h2>\r\n                <b><span *ngIf=\"item.tipo== enumTipo.porcentaje\">%</span> <span *ngIf=\"item.tipo== enumTipo.monto\">$</span> {{item.monto}}</b>  {{item.motivo}}             \r\n              </h2>\r\n            </ion-label>\r\n          </ion-item>\r\n          <ion-item-options side=\"end\">\r\n            <ion-item-option color=\"danger\" (click)=\"eliminarRecargo(i)\"><ion-icon name=\"trash\" ></ion-icon> Eliminar</ion-item-option>\r\n          </ion-item-options>\r\n    \r\n        </ion-item-sliding>\r\n      </span>\r\n      \r\n    \r\n    </ion-list>\r\n    </div>\r\n\r\n   \r\n \r\n    <div class=\"form-card\">\r\n      <h5>Comentario: </h5>      \r\n      <ion-textarea [(ngModel)]=\"carritoService.comentario\"></ion-textarea>   \r\n    </div>\r\n\r\n    \r\n\r\n    <ion-button *ngIf=\"!carrito.mesaId && comercio.config.mesas\" (click)=\"seleccionarMesa()\" class=\"button-rounded\" color=\"light\" ><ion-icon name=\"add\"></ion-icon><ion-icon name=\"grid-outline\"></ion-icon>  Mesa</ion-button>\r\n    <ion-item-sliding class=\"item-card\" *ngIf=\"carrito.mesaId && comercio.config.mesas\">  \r\n      <ion-item>\r\n        <ion-avatar slot=\"start\" (click)=\"seleccionarMesa()\">\r\n          <ion-icon name=\"grid-outline\"></ion-icon>\r\n        </ion-avatar>\r\n        <ion-label (click)=\"seleccionarMesa()\">\r\n          <h2>{{carrito.mesaNombre}}</h2>\r\n        </ion-label>      \r\n      </ion-item>\r\n  \r\n      <ion-item-options side=\"end\">\r\n        <ion-item-option color=\"danger\" (click)=\"eliminarMesa()\"><ion-icon name=\"trash\" ></ion-icon> Eliminar</ion-item-option>\r\n      </ion-item-options>\r\n    </ion-item-sliding>\r\n\r\n\r\n    <ion-button class=\"button-rounded\" color=\"light\"  *ngIf=\"!carrito.clienteId\" (click)=\"seleccionarCliente()\"><ion-icon name=\"add\"></ion-icon><ion-icon name=\"person-outline\"></ion-icon>  Cliente</ion-button>\r\n    <ion-item-sliding class=\"item-card\" *ngIf=\"carrito.clienteId && comercio.config.clientes\">\r\n      <app-card-usuario\r\n        [cliente]=\"carrito.cliente\"\r\n        (select)=\"seleccionarCliente()\">\r\n      </app-card-usuario>\r\n      <ion-item-options side=\"end\">\r\n        <ion-item-option color=\"danger\" (click)=\"eliminarCliente()\"><ion-icon name=\"trash\" ></ion-icon> Eliminar</ion-item-option>\r\n      </ion-item-options>\r\n    </ion-item-sliding>\r\n\r\n    <ion-button *ngIf=\"!carrito.direccion.street_name\" (click)=\"seleccionarUbicacion()\" class=\"button-rounded\" color=\"light\"><ion-icon name=\"add\"></ion-icon><ion-icon name=\"location-outline\"></ion-icon>Dirección</ion-button>\r\n    <ion-item-sliding class=\"item-card\" *ngIf=\"carrito.direccion.street_name\">  \r\n      <ion-item>\r\n        <ion-avatar slot=\"start\" (click)=\"seleccionarUbicacion()\">\r\n          <ion-icon name=\"location-outline\"></ion-icon>\r\n        </ion-avatar>\r\n        <ion-label (click)=\"seleccionarUbicacion()\">\r\n          <h2>{{carrito.direccion.street_name}} {{carrito.direccion.street_number}},{{carrito.direccion.locality}},{{carrito.direccion.state}}. <br>\r\n            <span *ngIf=\"carrito.direccion.piso\"> Piso: {{carrito.direccion.piso}}</span>\r\n            <span *ngIf=\"carrito.direccion.puerta\"> Puerta: {{carrito.direccion.puerta}}</span>\r\n            {{carrito.direccion.distanciaDelComercio}} Km.\r\n          </h2>\r\n        </ion-label>      \r\n      </ion-item>\r\n  \r\n      <ion-item-options side=\"end\">\r\n        <ion-item-option color=\"danger\" (click)=\"eliminarDireccion()\"><ion-icon name=\"trash\" ></ion-icon> Eliminar</ion-item-option>\r\n      </ion-item-options>\r\n    </ion-item-sliding>\r\n\r\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" >\r\n   \r\n      <ion-fab-button (click)=\"imprimir()\">\r\n        <ion-icon name=\"print-outline\"></ion-icon>\r\n      </ion-fab-button>\r\n      <br>\r\n      \r\n    </ion-fab>   \r\n\r\n</ion-content> \r\n\r\n<ion-footer class=\"ion-no-border ion-padding\"> \r\n  <ion-toolbar>   \r\n    <!--ion-button class=\"button-rounded\" slot=\"start\"  color=\"danger\" (click)=\"cancelar()\">Cancelar</ion-button-->\r\n    <ion-button class=\"button-rounded\"  color=\"success\" (click)=\"continuar()\">Cargar Pedido</ion-button>\r\n  </ion-toolbar>\r\n</ion-footer> \r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/select-cliente/select-cliente.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/select-cliente/select-cliente.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>    \n    <ion-title>Seleccionar Clientes</ion-title>    \n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content style=\"margin-top: 50px;\" class=\"ion-padding\">  \n  <ion-searchbar animated #search\n    placeholder=\"Buscar nombre\"\n    animated=\"true\"\n    showCancelButton=\"never\" \n    color=\"light\" \n    autocomplete=\"on\"\n    enterkeyhint=\"send\"\n    inputmode=\"text\"\n    type=\"text\"\n    debounce=\"300\"\n    value=\"{{palabraFiltro}}\"\n    (ionChange)=\"onChange($event)\">\n  </ion-searchbar>\n\n  <ion-list lines=\"none\">   \n    \n    <ion-item-sliding *ngFor=\"let item of clientes\" class=\"item-card\" >    \n\n        <ion-item (click)=\"seleccionar(item)\" >\n          <div slot=\"start\">\n            <img src=\"{{item.foto}}\" *ngIf=\"item.foto\">\n            <ion-icon name=\"person-outline\" *ngIf=\"!item.foto\"></ion-icon>\n          </div>      \n          <ion-label text-wrap>\n            <h2><b>{{item.nombre}}</b> </h2>   \n            <p>{{item.email}}</p>         \n          </ion-label>  \n        </ion-item>\n      \n        <ion-item-options side=\"end\">\n          <ion-item-option (click)=\"editar(item)\"><ion-icon name=\"create\" ></ion-icon> Editar</ion-item-option>\n        </ion-item-options>\n  \n      </ion-item-sliding>\n\n \n  </ion-list>\n\n  <span *ngIf=\"clientes.length == 0\">\n    \n      No exite ningún cliente con ese Nombre o Email.\n      <ion-button color=\"primary\" (click)=\"nuevo()\">Crear Uno Nuevo!</ion-button>\n \n  </span>\n\n  <!-- fab placed to the bottom end -->\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"nuevo()\">\n    <ion-fab-button>\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"verMas()\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Cargando más trabajos...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n  \n</ion-content>\n<ion-footer class=\"ion-no-border ion-padding\">\n  <ion-toolbar>    \n    <ion-button class=\"button-rounded\" slot=\"start\"  color=\"light\" (click)=\"cancelar()\">Cancelar</ion-button>\n  </ion-toolbar>\n</ion-footer>");

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

/***/ "./src/app/details-carrito/details-carrito-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/details-carrito/details-carrito-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: DetailsCarritoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsCarritoPageRoutingModule", function() { return DetailsCarritoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _details_carrito_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./details-carrito.page */ "./src/app/details-carrito/details-carrito.page.ts");




const routes = [
    {
        path: '',
        component: _details_carrito_page__WEBPACK_IMPORTED_MODULE_3__["DetailsCarritoPage"]
    }
];
let DetailsCarritoPageRoutingModule = class DetailsCarritoPageRoutingModule {
};
DetailsCarritoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DetailsCarritoPageRoutingModule);



/***/ }),

/***/ "./src/app/details-carrito/details-carrito.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/details-carrito/details-carrito.module.ts ***!
  \***********************************************************/
/*! exports provided: DetailsCarritoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsCarritoPageModule", function() { return DetailsCarritoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _details_carrito_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./details-carrito-routing.module */ "./src/app/details-carrito/details-carrito-routing.module.ts");
/* harmony import */ var _details_carrito_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./details-carrito.page */ "./src/app/details-carrito/details-carrito.page.ts");
/* harmony import */ var _Components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Components/components.module */ "./src/app/Components/components.module.ts");








let DetailsCarritoPageModule = class DetailsCarritoPageModule {
};
DetailsCarritoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _Components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _details_carrito_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailsCarritoPageRoutingModule"]
        ],
        declarations: [_details_carrito_page__WEBPACK_IMPORTED_MODULE_6__["DetailsCarritoPage"]]
    })
], DetailsCarritoPageModule);



/***/ }),

/***/ "./src/app/details-carrito/details-carrito.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/details-carrito/details-carrito.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbHMtY2Fycml0by9kZXRhaWxzLWNhcnJpdG8ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/details-carrito/details-carrito.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/details-carrito/details-carrito.page.ts ***!
  \*********************************************************/
/*! exports provided: DetailsCarritoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsCarritoPage", function() { return DetailsCarritoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _Services_global_carrito_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/global/carrito.service */ "./src/app/Services/global/carrito.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _Services_comercios_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/comercios.service */ "./src/app/Services/comercios.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _Services_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Services/loading.service */ "./src/app/Services/loading.service.ts");
/* harmony import */ var _Services_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Services/toast.service */ "./src/app/Services/toast.service.ts");
/* harmony import */ var _select_cliente_select_cliente_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../select-cliente/select-cliente.page */ "./src/app/select-cliente/select-cliente.page.ts");
/* harmony import */ var _select_mesa_select_mesa_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../select-mesa/select-mesa.page */ "./src/app/select-mesa/select-mesa.page.ts");
/* harmony import */ var _form_cliente_form_cliente_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../form-cliente/form-cliente.page */ "./src/app/form-cliente/form-cliente.page.ts");
/* harmony import */ var _models_mesa__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../models/mesa */ "./src/app/models/mesa.ts");
/* harmony import */ var _models_cliente__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../models/cliente */ "./src/app/models/cliente.ts");
/* harmony import */ var _models_comercio__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../models/comercio */ "./src/app/models/comercio.ts");
/* harmony import */ var _models_pedido__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../models/pedido */ "./src/app/models/pedido.ts");
/* harmony import */ var _Services_authentication_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Services/authentication.service */ "./src/app/Services/authentication.service.ts");
/* harmony import */ var _Services_impresora_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../Services/impresora.service */ "./src/app/Services/impresora.service.ts");
/* harmony import */ var _models_descuento__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../models/descuento */ "./src/app/models/descuento.ts");
/* harmony import */ var _Services_modal_notificacion_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../Services/modal-notificacion.service */ "./src/app/Services/modal-notificacion.service.ts");
/* harmony import */ var _modal_input_direccion_modal_input_direccion_page__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../modal-input-direccion/modal-input-direccion.page */ "./src/app/modal-input-direccion/modal-input-direccion.page.ts");
/* harmony import */ var _models_localizacion__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../models/localizacion */ "./src/app/models/localizacion.ts");
/* harmony import */ var _form_mesa_form_mesa_page__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../form-mesa/form-mesa.page */ "./src/app/form-mesa/form-mesa.page.ts");






















let DetailsCarritoPage = class DetailsCarritoPage {
    constructor(authenticationService, carritoService, navCtrl, modalController, comerciosService, loadingService, toastServices, impresoraService, route, router, alertController, modalNotificacion) {
        this.authenticationService = authenticationService;
        this.carritoService = carritoService;
        this.navCtrl = navCtrl;
        this.modalController = modalController;
        this.comerciosService = comerciosService;
        this.loadingService = loadingService;
        this.toastServices = toastServices;
        this.impresoraService = impresoraService;
        this.route = route;
        this.router = router;
        this.alertController = alertController;
        this.modalNotificacion = modalNotificacion;
        this.carrito = new _models_pedido__WEBPACK_IMPORTED_MODULE_14__["Pedido"]();
        this.cliente = new _models_cliente__WEBPACK_IMPORTED_MODULE_12__["Cliente"]();
        this.enumTipo = _models_descuento__WEBPACK_IMPORTED_MODULE_17__["EnumTipoDescuento"];
        this.back = "";
        this.impresora = this.impresoraService.obtenerImpresora();
        this.comercio = new _models_comercio__WEBPACK_IMPORTED_MODULE_13__["Comercio"]();
        this.carrito = new _models_pedido__WEBPACK_IMPORTED_MODULE_14__["Pedido"]();
        this.loadingService.presentLoading();
        this.comerciosService.getSelectedCommerce().subscribe(data => {
            this.comercio.asignarValores(data);
            console.log(this.comercio);
        });
        this.back = this.route.snapshot.params.carritoIntended;
        this.subsCarrio = this.carritoService.getActualCarritoSubs().subscribe(data => {
            this.carrito = data;
            this.loadingService.dismissLoading();
        });
    }
    ionViewDidEnter() {
    }
    ngOnInit() {
    }
    ionViewDidLeave() {
        this.subsCarrio.unsubscribe();
    }
    atras() {
        if (this.back == "undefined") {
            console.log("!!!!!!!");
            let options = {
                animationDirection: 'forward',
            };
            this.navCtrl.back(options);
        }
        else {
            this.router.navigate([this.back]);
        }
    }
    cancelar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //this.modalController.dismiss();
            this.navCtrl.back();
        });
    }
    continuar() {
        if (this.comercio.config.servicios && this.carrito.servicios.length == 0 && this.carrito.productos.length == 0) {
            this.toastServices.alert("Debes ingresar al menos un producto o servicio", "");
            return;
        }
        this.crearPedido();
    }
    crearPedido() {
        this.carritoService.crearPedido();
        this.atras();
    }
    imprimir() {
        this.impresoraService.impresionComanda(this.carrito);
    }
    eliminarDescuento(i) {
        this.carritoService.eliminarDescuento(i);
        this.toastServices.mensaje("Descuento eliminado!", "");
    }
    eliminarRecargo(i) {
        this.carritoService.eliminarRecargo(i);
        this.toastServices.mensaje("Recargo eliminado!", "");
    }
    eliminarProducto(i) {
        this.carritoService.eliminarProducto(i);
        if (this.carrito.productos.length == 0 && this.carrito.descuentos.length == 0 && this.carrito.recargos.length == 0) {
            this.navCtrl.back();
        }
        this.modalNotificacion.trash("Eliminado del pedido", "El producto " + i.nombre + " ha sido eliminado del pedido");
    }
    eliminarCliente() {
        this.carritoService.setearCliente(new _models_cliente__WEBPACK_IMPORTED_MODULE_12__["Cliente"]());
        this.toastServices.mensaje("Cliente desasignado!", "");
    }
    eliminarMesa() {
        this.carritoService.setearMesa(new _models_mesa__WEBPACK_IMPORTED_MODULE_11__["Mesa"]());
        this.toastServices.mensaje("Mesa desasiganada!", "");
    }
    seleccionarCliente() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loadingService.presentLoading();
            const modal = yield this.modalController.create({
                component: _select_cliente_select_cliente_page__WEBPACK_IMPORTED_MODULE_8__["SelectClientePage"],
                cssClass: 'modal-custom-wrapper',
            });
            modal.present().then(() => {
            });
            modal.onDidDismiss()
                .then((retorno) => {
                if (retorno.data) {
                    if (retorno.data == "nuevo") {
                        this.abrirNuevoCliente();
                    }
                    if (retorno.data != "nuevo") {
                        this.toastServices.mensaje("Cliente Agregado!", "");
                        this.carritoService.setearCliente(retorno.data.item);
                    }
                }
            });
            return yield modal.present();
        });
    }
    abrirNuevoCliente() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _form_cliente_form_cliente_page__WEBPACK_IMPORTED_MODULE_10__["FormClientePage"],
                cssClass: 'modal-custom-wrapper',
            });
            modal.present().then(() => {
            });
            modal.onDidDismiss()
                .then((retorno) => {
                if (retorno.data) {
                    this.cliente = retorno.data.item;
                    this.carritoService.setearCliente(retorno.data.item);
                }
            });
            return yield modal.present();
        });
    }
    seleccionarMesa() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loadingService.presentLoading();
            const modal = yield this.modalController.create({
                component: _select_mesa_select_mesa_page__WEBPACK_IMPORTED_MODULE_9__["SelectMesaPage"],
                cssClass: 'modal-custom-wrapper',
            });
            modal.present().then(() => {
            });
            modal.onDidDismiss()
                .then((retorno) => {
                if (retorno.data == "nuevo") {
                    this.abrirNuevaMesa();
                }
                else {
                    this.carritoService.setearMesa(retorno.data.item);
                }
            });
            return yield modal.present();
        });
    }
    abrirNuevaMesa() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _form_mesa_form_mesa_page__WEBPACK_IMPORTED_MODULE_21__["FormMesaPage"],
                cssClass: 'modal-custom-wrapper'
            });
            modal.present().then(() => {
            });
            modal.onDidDismiss()
                .then((retorno) => {
                console.log(retorno.data.item);
                if (retorno.data) {
                    this.carritoService.setearMesa(retorno.data.item);
                }
            });
            return yield modal.present();
        });
    }
    preguntarVaciar() {
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
                            this.carritoService.vaciar();
                            this.modalNotificacion.trash("Vaciado", "El carrito ahora se encuentra completamente vacío.");
                            this.atras();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    seleccionarUbicacion() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modal_input_direccion_modal_input_direccion_page__WEBPACK_IMPORTED_MODULE_19__["ModalInputDireccionPage"],
                componentProps: { localizacion: this.carrito.direccion },
                cssClass: 'modal-map'
            });
            modal.onDidDismiss()
                .then((retorno) => {
                if (retorno.data) {
                    this.carrito.direccion = retorno.data;
                }
                console.log(this.carrito);
            });
            modal.present();
        });
    }
    eliminarDireccion() {
        this.carrito.direccion = new _models_localizacion__WEBPACK_IMPORTED_MODULE_20__["Localizacion"]();
    }
};
DetailsCarritoPage.ctorParameters = () => [
    { type: _Services_authentication_service__WEBPACK_IMPORTED_MODULE_15__["AuthenticationService"] },
    { type: _Services_global_carrito_service__WEBPACK_IMPORTED_MODULE_2__["CarritoService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _Services_comercios_service__WEBPACK_IMPORTED_MODULE_4__["ComerciosService"] },
    { type: _Services_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"] },
    { type: _Services_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"] },
    { type: _Services_impresora_service__WEBPACK_IMPORTED_MODULE_16__["ImpresoraService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _Services_modal_notificacion_service__WEBPACK_IMPORTED_MODULE_18__["ModalNotificacionService"] }
];
DetailsCarritoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-details-carrito',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./details-carrito.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/details-carrito/details-carrito.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./details-carrito.page.scss */ "./src/app/details-carrito/details-carrito.page.scss")).default]
    })
], DetailsCarritoPage);



/***/ }),

/***/ "./src/app/select-cliente/select-cliente.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/select-cliente/select-cliente.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlbGVjdC1jbGllbnRlL3NlbGVjdC1jbGllbnRlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/select-cliente/select-cliente.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/select-cliente/select-cliente.page.ts ***!
  \*******************************************************/
/*! exports provided: SelectClientePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectClientePage", function() { return SelectClientePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _Services_clientes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/clientes.service */ "./src/app/Services/clientes.service.ts");
/* harmony import */ var _models_cliente__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/cliente */ "./src/app/models/cliente.ts");
/* harmony import */ var _Services_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Services/loading.service */ "./src/app/Services/loading.service.ts");
/* harmony import */ var _form_cliente_form_cliente_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../form-cliente/form-cliente.page */ "./src/app/form-cliente/form-cliente.page.ts");








let SelectClientePage = class SelectClientePage {
    constructor(modalController, loadingController, router, route, clientesService, modalCtrl, loadingService) {
        this.modalController = modalController;
        this.loadingController = loadingController;
        this.router = router;
        this.route = route;
        this.clientesService = clientesService;
        this.modalCtrl = modalCtrl;
        this.loadingService = loadingService;
        this.items = [];
        this.itemsAll = [];
        this.palabraFiltro = "";
        this.ultimoItem = "";
        this.loadingActive = false;
        this.clientes = [];
    }
    ngOnInit() {
        this.ultimoCliente = new _models_cliente__WEBPACK_IMPORTED_MODULE_5__["Cliente"]();
        this.clientes = [];
        this.ultimoItem = "";
        this.verMas();
    }
    ionViewDidEnter() {
        if (this.route.snapshot.params.filtro)
            this.palabraFiltro = this.route.snapshot.params.filtro;
        setTimeout(() => {
            // Set the focus to the input box of the ion-Searchbar component
            this.ionSearchbar.setFocus();
        }, 100);
    }
    ionViewDidLeave() {
        this.subsItems.unsubscribe();
    }
    onChange(event) {
        this.palabraFiltro = event.target.value;
        this.ultimoCliente = new _models_cliente__WEBPACK_IMPORTED_MODULE_5__["Cliente"]();
        this.clientes = [];
        this.verMas();
    }
    verMas() {
        let limit = 5;
        var palabra = this.palabraFiltro.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        this.clientesSubs = this.clientesService.search(limit, "nombre", palabra, this.ultimoCliente.nombre).subscribe((snapshot) => {
            this.loadingService.dismissLoading();
            snapshot.forEach((snap) => {
                var producto = snap.payload.doc.data();
                producto.id = snap.payload.doc.id;
                producto.enCarrito = 0;
                this.clientes.push(producto);
            });
            this.ultimoCliente = this.clientes[this.clientes.length - 1];
            this.infiniteScroll.complete();
            this.infiniteScroll.disabled = false;
            if (this.clientes.length < limit) {
                this.infiniteScroll.disabled = true;
            }
            console.log(this.clientes);
            this.clientesSubs.unsubscribe();
        });
    }
    seleccionar(item) {
        this.modalCtrl.dismiss({
            'item': item
        });
    }
    nuevo() {
        this.modalCtrl.dismiss("nuevo");
    }
    editar(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loadingService.presentLoading();
            const modal = yield this.modalController.create({
                component: _form_cliente_form_cliente_page__WEBPACK_IMPORTED_MODULE_7__["FormClientePage"],
                componentProps: {
                    cliente: item
                }
            });
            modal.present().then(() => {
            });
            modal.onDidDismiss()
                .then((retorno) => {
                if (retorno.data) {
                    this.palabraFiltro = retorno.data.item.nombre;
                }
                this.ultimoCliente = new _models_cliente__WEBPACK_IMPORTED_MODULE_5__["Cliente"]();
                this.clientes = [];
                this.verMas();
            });
            return yield modal.present();
        });
    }
    cancelar() {
        this.modalCtrl.dismiss();
    }
};
SelectClientePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _Services_clientes_service__WEBPACK_IMPORTED_MODULE_4__["ClientesService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _Services_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInfiniteScroll"])
], SelectClientePage.prototype, "infiniteScroll", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSearchbar"], { static: true })
], SelectClientePage.prototype, "ionSearchbar", void 0);
SelectClientePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-select-cliente',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./select-cliente.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/select-cliente/select-cliente.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./select-cliente.page.scss */ "./src/app/select-cliente/select-cliente.page.scss")).default]
    })
], SelectClientePage);



/***/ })

}]);
//# sourceMappingURL=details-carrito-details-carrito-module.js.map