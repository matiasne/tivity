(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["form-descuento-form-descuento-module"],{

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

/***/ "./src/app/form-descuento/form-descuento-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/form-descuento/form-descuento-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: FormDescuentoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormDescuentoPageRoutingModule", function() { return FormDescuentoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _form_descuento_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-descuento.page */ "./src/app/form-descuento/form-descuento.page.ts");




const routes = [
    {
        path: '',
        component: _form_descuento_page__WEBPACK_IMPORTED_MODULE_3__["FormDescuentoPage"]
    }
];
let FormDescuentoPageRoutingModule = class FormDescuentoPageRoutingModule {
};
FormDescuentoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FormDescuentoPageRoutingModule);



/***/ }),

/***/ "./src/app/form-descuento/form-descuento.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/form-descuento/form-descuento.module.ts ***!
  \*********************************************************/
/*! exports provided: FormDescuentoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormDescuentoPageModule", function() { return FormDescuentoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _form_descuento_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-descuento-routing.module */ "./src/app/form-descuento/form-descuento-routing.module.ts");
/* harmony import */ var _form_descuento_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form-descuento.page */ "./src/app/form-descuento/form-descuento.page.ts");







let FormDescuentoPageModule = class FormDescuentoPageModule {
};
FormDescuentoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _form_descuento_routing_module__WEBPACK_IMPORTED_MODULE_5__["FormDescuentoPageRoutingModule"]
        ],
        declarations: [_form_descuento_page__WEBPACK_IMPORTED_MODULE_6__["FormDescuentoPage"]]
    })
], FormDescuentoPageModule);



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



/***/ })

}]);
//# sourceMappingURL=form-descuento-form-descuento-module.js.map