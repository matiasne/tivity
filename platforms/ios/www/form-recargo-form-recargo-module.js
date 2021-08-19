(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["form-recargo-form-recargo-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-recargo/form-recargo.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form-recargo/form-recargo.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title  size=\"small\">Agregar Recargo</ion-title>    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n  <ion-item class=\"form-select\"> \n    <ion-label position=\"floating\">Tipo</ion-label>\n    <ion-select multiple=false [(ngModel)]=\"recargo.tipo\">\n      <ion-select-option  [value]=\"enumTipo.monto\" selected>Monto</ion-select-option>\n      <ion-select-option  [value]=\"enumTipo.porcentaje\">Porcentaje</ion-select-option> \n    </ion-select>       \n  </ion-item> \n\n  <div class=\"form-card\">\n    <ion-text color=\"primary\">\n      <h4>Monto *</h4> \n    </ion-text>            \n    <ion-item>\n      <ion-input name=\"monto\" type=\"number\" [(ngModel)]=\"recargo.monto\" required></ion-input>\n    </ion-item>   \n  </div>\n\n  <div class=\"form-card\">\n    <ion-text color=\"primary\">\n      <h4>Motivo *</h4> \n    </ion-text>            \n    <ion-item>\n      <ion-input name=\"motivo\" type=\"text\" [(ngModel)]=\"recargo.motivo\" required></ion-input>\n    </ion-item>   \n  </div>\n\n</ion-content>\n\n<ion-footer class=\"ion-no-border ion-padding\">\n  <ion-toolbar>  \n    <ion-button class=\"button-rounded\" slot=\"end\" (click)=\"agregar()\">Agregar</ion-button>  \n    <ion-button class=\"button-rounded\" slot=\"start\"  color=\"light\" (click)=\"cancelar()\">Cancelar</ion-button>\n  </ion-toolbar>\n</ion-footer> ");

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

/***/ "./src/app/form-recargo/form-recargo-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/form-recargo/form-recargo-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: FormRecargoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormRecargoPageRoutingModule", function() { return FormRecargoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _form_recargo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-recargo.page */ "./src/app/form-recargo/form-recargo.page.ts");




const routes = [
    {
        path: '',
        component: _form_recargo_page__WEBPACK_IMPORTED_MODULE_3__["FormRecargoPage"]
    }
];
let FormRecargoPageRoutingModule = class FormRecargoPageRoutingModule {
};
FormRecargoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FormRecargoPageRoutingModule);



/***/ }),

/***/ "./src/app/form-recargo/form-recargo.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/form-recargo/form-recargo.module.ts ***!
  \*****************************************************/
/*! exports provided: FormRecargoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormRecargoPageModule", function() { return FormRecargoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _form_recargo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-recargo-routing.module */ "./src/app/form-recargo/form-recargo-routing.module.ts");
/* harmony import */ var _form_recargo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form-recargo.page */ "./src/app/form-recargo/form-recargo.page.ts");







let FormRecargoPageModule = class FormRecargoPageModule {
};
FormRecargoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _form_recargo_routing_module__WEBPACK_IMPORTED_MODULE_5__["FormRecargoPageRoutingModule"]
        ],
        declarations: [_form_recargo_page__WEBPACK_IMPORTED_MODULE_6__["FormRecargoPage"]]
    })
], FormRecargoPageModule);



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
/* harmony import */ var _Services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Services/toast.service */ "./src/app/Services/toast.service.ts");






let FormRecargoPage = class FormRecargoPage {
    constructor(modalCtrl, carritoService, toastService) {
        this.modalCtrl = modalCtrl;
        this.carritoService = carritoService;
        this.toastService = toastService;
        this.enumTipo = _models_recargo__WEBPACK_IMPORTED_MODULE_3__["EnumTipoRecargo"];
        this.recargo = new _models_recargo__WEBPACK_IMPORTED_MODULE_3__["Recargo"]();
    }
    ngOnInit() {
    }
    cancelar() {
        this.modalCtrl.dismiss();
    }
    agregar() {
        if (this.recargo.monto == "") {
            this.toastService.alert("Faltan datos", "Por favor agregue un monto");
            return;
        }
        if (this.recargo.motivo == "") {
            this.toastService.alert("Faltan datos", "Por favor agregue un motivo");
            return;
        }
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
    { type: _Services_global_carrito_service__WEBPACK_IMPORTED_MODULE_4__["CarritoService"] },
    { type: _Services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] }
];
FormRecargoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-recargo',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./form-recargo.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-recargo/form-recargo.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./form-recargo.page.scss */ "./src/app/form-recargo/form-recargo.page.scss")).default]
    })
], FormRecargoPage);



/***/ })

}]);
//# sourceMappingURL=form-recargo-form-recargo-module.js.map