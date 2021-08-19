(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["form-extraccion-cta-corriente-form-extraccion-cta-corriente-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-extraccion-cta-corriente/form-extraccion-cta-corriente.page.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form-extraccion-cta-corriente/form-extraccion-cta-corriente.page.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title  size=\"small\">Realizar Extracción</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  \n    \n\n    <ion-item class=\"item-card\">\n      <ion-label position=\"floating\">Caja</ion-label>\n      <ion-select [(ngModel)]=\"cajaSeleccionada\" (ionChange)=\"seleccionarCaja()\" [ngModelOptions]=\"{standalone: true}\">\n        <ion-select-option *ngFor=\"let caja of cajas\" [value]=\"caja\" selected>{{caja.nombre}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item class=\"item-card\">\n      <ion-label position=\"floating\">Método de Pago</ion-label>\n      <ion-select multiple=\"true\" [(ngModel)]=\"metodoPagoSeleccionado\" (ionChange)=\"setearMetodoPago()\" [ngModelOptions]=\"{standalone: true}\">\n        <ion-select-option *ngIf=\"caja.efectivo\" [value]=\"'efectivo'\">Efectivo</ion-select-option>\n        <ion-select-option *ngIf=\"caja.debito\" [value]=\"'debito'\">Débito</ion-select-option>\n        <ion-select-option *ngIf=\"caja.credito\" [value]=\"'credito'\">Crédito</ion-select-option>\n      </ion-select>    \n    </ion-item>\n\n    <ion-row *ngIf=\"metodoPagoSeleccionado.includes('efectivo')\">\n      <ion-col size=\"8\">\n        <ion-item class=\"item-card\">\n          <ion-label position=\"floating\" >Monto en efectivo</ion-label>\n          <ion-input type=\"number\" min=\"0\" [(ngModel)]=\"montoPagoEfectivo\"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  \n    <ion-row *ngIf=\"metodoPagoSeleccionado.includes('debito')\">\n      <ion-col size=\"8\">\n        <ion-item class=\"item-card\">\n          <ion-label position=\"floating\" >Monto en débito</ion-label>\n          <ion-input type=\"number\" min=\"0\" [(ngModel)]=\"montoPagoDebito\"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  \n    <ion-row *ngIf=\"metodoPagoSeleccionado.includes('credito')\">\n      <ion-col size=\"8\">\n        <ion-item class=\"item-card\">\n          <ion-label position=\"floating\" >Monto en crédito</ion-label>\n          <ion-input type=\"number\" min=\"0\" [(ngModel)]=\"montoPagoCredito\"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  \n    <ion-item class=\"item-card\" *ngIf=\"metodoPagoSeleccionado.includes('ctaCorriente')\">\n      <ion-label position=\"floating\" >Cuenta Corriente:</ion-label>\n      <ion-select  [(ngModel)]=\"ctaCorrienteSelecccionadaId\">\n        <ion-select-option *ngFor=\"let cta of ctasCorrientes\" [value]=\"cta.id\">{{cta.nombre}}</ion-select-option>\n      </ion-select>\n      <ion-col size=\"8\">\n        <ion-item class=\"item-card\">\n          <ion-label position=\"floating\" >Monto en cta. corriente</ion-label>\n          <ion-input type=\"number\" min=\"0\" [(ngModel)]=\"montoPagoCtaCorriente\"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-item>\n\n    <ion-item *ngIf=\"!cliente.id\" class=\"item-card\">\n      <ion-button  size=\"large\" (click)=\"seleccionarCliente()\"  expand=\"block\">Seleccionar Cliente * </ion-button>\n    </ion-item>\n    <ion-item *ngIf=\"cliente.id\" class=\"item-card\">\n      <ion-avatar slot=\"start\" (click)=\"seleccionarCliente()\">\n        <img src=\"{{cliente.foto}}\" *ngIf=\"cliente.foto\">\n        <ion-icon name=\"person\" *ngIf=\"!cliente.foto\"></ion-icon>\n      </ion-avatar>\n      <ion-label (click)=\"seleccionarCliente()\">\n        <h2>{{cliente.nombre}}</h2>\n        <h3>{{cliente.email}}</h3>\n      </ion-label>      \n      <ion-button color=\"danger\" slot=\"end\" (click)=\"eliminarCliente()\"><ion-icon name=\"trash\"></ion-icon></ion-button>       \n    </ion-item>\n\n    <div class=\"form-card\">\n      <ion-text color=\"primary\">\n        <h4>Motivo</h4>\n      </ion-text> \n      <ion-item>\n        <ion-textarea [(ngModel)]=\"motivo\"></ion-textarea>\n      </ion-item>     \n    </div>\n  \n  <ion-toolbar>\n    <ion-button slot=\"end\" (click)=\"guardar()\">Guardar</ion-button>    \n    <ion-button slot=\"start\"  color=\"light\" (click)=\"cancelar()\">Cancelar</ion-button>\n  </ion-toolbar>\n\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/select-cliente/select-cliente.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/select-cliente/select-cliente.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>    \n    <ion-title  size=\"small\">Seleccionar Clientes</ion-title>  \n    <ion-button fill=\"clear\" (click)=\"cerrar()\" color=\"primary\" slot=\"end\">\n      <ion-icon name=\"close-outline\"></ion-icon>\n    </ion-button>  \n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content style=\"margin-top: 50px;\" class=\"ion-padding\">  \n  <ion-searchbar animated #search\n    placeholder=\"Buscar nombre\"\n    animated=\"true\"\n    showCancelButton=\"never\" \n    color=\"light\" \n    autocomplete=\"on\"\n    enterkeyhint=\"send\"\n    inputmode=\"text\"\n    type=\"text\"\n    debounce=\"300\"\n    value=\"{{palabraFiltro}}\"\n    (ionChange)=\"onChange($event)\">\n  </ion-searchbar>\n\n  <ion-list lines=\"none\">   \n    \n    <ion-item-sliding *ngFor=\"let item of clientes\" class=\"item-card\" >    \n\n      <ion-item (click)=\"seleccionar(item)\" >\n        <div slot=\"start\">\n          <img src=\"{{item.foto}}\" *ngIf=\"item.foto\">\n          <ion-icon name=\"person-outline\" *ngIf=\"!item.foto\"></ion-icon>\n        </div>      \n        <ion-label text-wrap>\n          <h2><b>{{item.nombre}}</b> </h2>   \n          <p>{{item.email}}</p>        \n          <p>{{item.documentoTipo}}: {{item.documento}}</p> \n          <p *ngIf=\"item.personaJuridica == 1\">Responsable Inscripto</p>\n          <p *ngIf=\"item.personaJuridica == 2\">Monotributista</p>\n          <p *ngIf=\"item.personaJuridica == 3\">Iva Exento</p>\n        </ion-label>  \n      </ion-item> \n      \n        <ion-item-options side=\"end\">\n          <ion-item-option (click)=\"editar(item)\"><ion-icon name=\"create\" ></ion-icon> Editar</ion-item-option>\n        </ion-item-options>\n  \n      </ion-item-sliding>\n\n \n  </ion-list>\n\n  <span *ngIf=\"clientes.length == 0\">\n    \n      No exite ningún cliente con ese Nombre o Email.\n      <ion-button color=\"primary\" (click)=\"nuevo()\">Crear Uno Nuevo!</ion-button>\n \n  </span>\n\n  <!-- fab placed to the bottom end -->\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"nuevo()\">\n    <ion-fab-button>\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"verMas()\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Cargando más trabajos...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n  \n</ion-content>");

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

/***/ "./src/app/form-extraccion-cta-corriente/form-extraccion-cta-corriente-routing.module.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/form-extraccion-cta-corriente/form-extraccion-cta-corriente-routing.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: FormExtraccionCtaCorrientePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormExtraccionCtaCorrientePageRoutingModule", function() { return FormExtraccionCtaCorrientePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _form_extraccion_cta_corriente_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-extraccion-cta-corriente.page */ "./src/app/form-extraccion-cta-corriente/form-extraccion-cta-corriente.page.ts");




const routes = [
    {
        path: '',
        component: _form_extraccion_cta_corriente_page__WEBPACK_IMPORTED_MODULE_3__["FormExtraccionCtaCorrientePage"]
    }
];
let FormExtraccionCtaCorrientePageRoutingModule = class FormExtraccionCtaCorrientePageRoutingModule {
};
FormExtraccionCtaCorrientePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FormExtraccionCtaCorrientePageRoutingModule);



/***/ }),

/***/ "./src/app/form-extraccion-cta-corriente/form-extraccion-cta-corriente.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/form-extraccion-cta-corriente/form-extraccion-cta-corriente.module.ts ***!
  \***************************************************************************************/
/*! exports provided: FormExtraccionCtaCorrientePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormExtraccionCtaCorrientePageModule", function() { return FormExtraccionCtaCorrientePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _form_extraccion_cta_corriente_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-extraccion-cta-corriente-routing.module */ "./src/app/form-extraccion-cta-corriente/form-extraccion-cta-corriente-routing.module.ts");
/* harmony import */ var _form_extraccion_cta_corriente_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form-extraccion-cta-corriente.page */ "./src/app/form-extraccion-cta-corriente/form-extraccion-cta-corriente.page.ts");







let FormExtraccionCtaCorrientePageModule = class FormExtraccionCtaCorrientePageModule {
};
FormExtraccionCtaCorrientePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _form_extraccion_cta_corriente_routing_module__WEBPACK_IMPORTED_MODULE_5__["FormExtraccionCtaCorrientePageRoutingModule"]
        ],
        declarations: [_form_extraccion_cta_corriente_page__WEBPACK_IMPORTED_MODULE_6__["FormExtraccionCtaCorrientePage"]]
    })
], FormExtraccionCtaCorrientePageModule);



/***/ }),

/***/ "./src/app/form-extraccion-cta-corriente/form-extraccion-cta-corriente.page.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/form-extraccion-cta-corriente/form-extraccion-cta-corriente.page.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0tZXh0cmFjY2lvbi1jdGEtY29ycmllbnRlL2Zvcm0tZXh0cmFjY2lvbi1jdGEtY29ycmllbnRlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/form-extraccion-cta-corriente/form-extraccion-cta-corriente.page.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/form-extraccion-cta-corriente/form-extraccion-cta-corriente.page.ts ***!
  \*************************************************************************************/
/*! exports provided: FormExtraccionCtaCorrientePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormExtraccionCtaCorrientePage", function() { return FormExtraccionCtaCorrientePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_cliente__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/cliente */ "./src/app/models/cliente.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _Services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Services/authentication.service */ "./src/app/Services/authentication.service.ts");
/* harmony import */ var _Services_global_carrito_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Services/global/carrito.service */ "./src/app/Services/global/carrito.service.ts");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Services_cajas_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Services/cajas.service */ "./src/app/Services/cajas.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _models_caja__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../models/caja */ "./src/app/models/caja.ts");
/* harmony import */ var _models_movimientoCaja__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../models/movimientoCaja */ "./src/app/models/movimientoCaja.ts");
/* harmony import */ var _Services_movimientos_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Services/movimientos.service */ "./src/app/Services/movimientos.service.ts");
/* harmony import */ var _Services_toast_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Services/toast.service */ "./src/app/Services/toast.service.ts");
/* harmony import */ var _select_cliente_select_cliente_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../select-cliente/select-cliente.page */ "./src/app/select-cliente/select-cliente.page.ts");















let FormExtraccionCtaCorrientePage = class FormExtraccionCtaCorrientePage {
    constructor(modalController, navCtrl, formBuilder, authenticationService, carritoService, firestore, cajasService, route, movimientosService, toastServices) {
        this.modalController = modalController;
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.authenticationService = authenticationService;
        this.carritoService = carritoService;
        this.firestore = firestore;
        this.cajasService = cajasService;
        this.route = route;
        this.movimientosService = movimientosService;
        this.toastServices = toastServices;
        this.enumTipoMovimientoCaja = _models_movimientoCaja__WEBPACK_IMPORTED_MODULE_11__["EnumTipoMovimientoCaja"];
        this.monto = 0;
        this.motivo = "";
        this.cajas = [];
        this.submitted = false;
        this.updating = false;
        this.titulo = "Nuevo Cta. Corriente";
        this.metodoPagoSeleccionado = [];
        this.extraccionId = "";
        this.ctaCorrienteId = "";
        this.montoPagoEfectivo = 0;
        this.montoPagoDebito = 0;
        this.montoPagoCredito = 0;
        this.montoPagoCtaCorriente = 0;
        this.extraccionId = this.firestore.createId();
        this.ctaCorrienteId = this.route.snapshot.params.id;
        this.cliente = new _models_cliente__WEBPACK_IMPORTED_MODULE_2__["Cliente"]();
        this.caja = new _models_caja__WEBPACK_IMPORTED_MODULE_10__["Caja"]();
    }
    ngOnInit() {
        this.cajasService.list().subscribe((cajas) => {
            this.cajas = cajas;
        });
    }
    ionViewDidEnter() {
    }
    setearCliente(cliente) {
        this.cliente = cliente;
    }
    setearMetodoPago() {
        console.log(this.metodoPagoSeleccionado);
    }
    seleccionarCliente() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _select_cliente_select_cliente_page__WEBPACK_IMPORTED_MODULE_14__["SelectClientePage"]
            });
            modal.onDidDismiss()
                .then((retorno) => {
                if (retorno.data) {
                    this.setearCliente(retorno.data.item);
                }
            });
            return yield modal.present();
        });
    }
    seleccionarCaja() {
        this.caja.asignarValores(this.cajaSeleccionada);
    }
    guardar() {
        this.metodoPagoSeleccionado.forEach(metodo => {
            let monto = 0;
            if (metodo === "efectivo") {
                monto = this.montoPagoEfectivo;
            }
            if (metodo === "debito") {
                monto = this.montoPagoDebito;
            }
            if (metodo === "credito") {
                monto = this.montoPagoCredito;
            }
            this.movimientosService.agregarMovimientoEnCtaCorriente(this.ctaCorrienteId, this.cliente.id, this.cliente.nombre, this.caja.id, metodo, -monto, this.motivo);
        });
        this.navCtrl.back();
    }
    eliminarCliente() {
        this.cliente = new _models_cliente__WEBPACK_IMPORTED_MODULE_2__["Cliente"]();
    }
    cancelar() {
        this.navCtrl.back();
    }
};
FormExtraccionCtaCorrientePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _Services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
    { type: _Services_global_carrito_service__WEBPACK_IMPORTED_MODULE_6__["CarritoService"] },
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"] },
    { type: _Services_cajas_service__WEBPACK_IMPORTED_MODULE_8__["CajasService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] },
    { type: _Services_movimientos_service__WEBPACK_IMPORTED_MODULE_12__["MovimientosService"] },
    { type: _Services_toast_service__WEBPACK_IMPORTED_MODULE_13__["ToastService"] }
];
FormExtraccionCtaCorrientePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-extraccion-cta-corriente',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./form-extraccion-cta-corriente.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-extraccion-cta-corriente/form-extraccion-cta-corriente.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./form-extraccion-cta-corriente.page.scss */ "./src/app/form-extraccion-cta-corriente/form-extraccion-cta-corriente.page.scss")).default]
    })
], FormExtraccionCtaCorrientePage);



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
    cerrar() {
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
//# sourceMappingURL=form-extraccion-cta-corriente-form-extraccion-cta-corriente-module.js.map