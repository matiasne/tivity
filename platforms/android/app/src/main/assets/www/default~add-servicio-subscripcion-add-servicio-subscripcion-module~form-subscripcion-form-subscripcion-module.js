(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~add-servicio-subscripcion-add-servicio-subscripcion-module~form-subscripcion-form-subscripcion-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-servicio-subscripcion/add-servicio-subscripcion.page.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-servicio-subscripcion/add-servicio-subscripcion.page.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-buttons slot=\"start\">\n    <ion-back-button></ion-back-button>\n  </ion-buttons>\n  <ion-toolbar>\n    <ion-title>Agregar Servicio</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n    <ion-list lines=\"none\" >     \n      <ion-item  class=\"list-item\">\n        <ion-avatar slot=\"start\">\n          <img src=\"{{servicio.foto}}\" *ngIf=\"servicio.foto\">\n          <ion-icon name=\"document-attach-outline\" *ngIf=\"!servicio.foto\"></ion-icon>\n        </ion-avatar>      \n        <ion-label>\n          <h2><b>{{servicio.nombre}}</b></h2>\n          <p>\n            {{servicio.descripcion}}\n          </p>           \n        </ion-label>         \n      </ion-item>    \n    </ion-list>\n\n\n    <form [formGroup]=\"datosForm\" >\n\n   \n\n    \n\n    <div>\n      <ion-item *ngIf=\"!cliente.id\" class=\"item-card\">\n        <ion-button  size=\"large\" (click)=\"seleccionarCliente()\"  expand=\"block\">Seleccionar Cliente * </ion-button>\n      </ion-item>\n\n      <ion-item *ngIf=\"cliente.id\" class=\"item-card\">\n        <ion-avatar slot=\"start\" (click)=\"seleccionarCliente()\">\n          <img src=\"{{cliente.foto}}\" *ngIf=\"cliente.foto\">\n          <ion-icon name=\"person\" *ngIf=\"!cliente.foto\"></ion-icon>\n        </ion-avatar>\n        <ion-label (click)=\"seleccionarCliente()\">\n          <h2>{{cliente.nombre}}</h2>\n          <h3>{{cliente.email}}</h3>\n        </ion-label>      \n        <ion-button color=\"danger\" slot=\"end\" (click)=\"eliminarCliente()\"><ion-icon name=\"trash\"></ion-icon></ion-button>       \n      </ion-item>\n    </div>\n\n    <div class=\"form-card\">\n      \n      <ion-radio-group formControlName=\"plan\">\n        <ion-text color=\"primary\">\n          <h4>Seleccione un plan *</h4>\n        </ion-text> \n        <ion-card *ngFor=\"let plan of planes;let i=index\">\n          <ion-item>\n            <ion-radio slot=\"start\" name =\"true\"  [value]=\"plan\" selected></ion-radio>                      \n            <ion-label text-wrap>\n              <b>{{plan.nombre}}</b> \n              <span *ngIf=\"plan.tipo == 'dias'\">\n                {{plan.dias}} días \n              </span>\n              <span *ngIf=\"plan.tipo == 'mensual'\">\n                Mensual \n              </span>\n              <span *ngIf=\"plan.tipo == 'anual'\">\n                Anual \n              </span>\n              por {{plan.precio | currency}}\n            </ion-label>\n          </ion-item>                  \n        </ion-card>\n        <ion-card>\n          <ion-item>\n            <ion-radio slot=\"start\" name =\"true\"  [value]=\"'personal'\" selected></ion-radio>                      \n            <ion-label text-wrap>\n              Presonalizado\n            </ion-label>\n          </ion-item>                  \n        </ion-card>\n      </ion-radio-group>\n\n      <div class=\"form-card\" *ngIf=\"datosForm.controls.plan.value == 'personal'\">\n        <ion-text color=\"primary\">\n          <h4>Seleccionar periodo</h4>\n        </ion-text> \n        \n        <h5></h5>  \n        <ion-item>                    \n          <ion-select  [(ngModel)]=\"subscripcion.tipo\" [ngModelOptions]=\"{standalone: true}\">        \n            <ion-select-option [value]=\"'mensual'\" selected>mensual</ion-select-option>\n            <ion-select-option [value]=\"'anual'\" selected>anual</ion-select-option>\n            <ion-select-option [value]=\"'dias'\" selected>dias</ion-select-option>\n          </ion-select>        \n        </ion-item>\n  \n        <div *ngIf=\"subscripcion.tipo == 'dias'\">\n          <ion-text color=\"primary\">\n            <h4>Cantidad de días *</h4>     \n          </ion-text> \n              \n          <ion-item>\n            <ion-input type=\"number\" [(ngModel)]=\"subscripcion.dias\" [ngModelOptions]=\"{standalone: true}\"></ion-input>\n          </ion-item>\n        </div>\n        \n  \n        <ion-text color=\"primary\">\n          <h4>Precio</h4>     \n        </ion-text>           \n        <ion-item>\n          <ion-input type=\"number\" [(ngModel)]=\"subscripcion.precio\" [ngModelOptions]=\"{standalone: true}\"></ion-input>\n        </ion-item>\n      </div>\n\n    \n      \n     \n      \n      <div *ngIf=\"submitted && f.pagoAdelantado.errors\" class=\"invalid-feedback\">\n        <div *ngIf=\"f.pagoAdelantado.errors.required\"><h5>Seleccione una de las opciones</h5></div>\n      </div>\n    </div>\n\n    <div class=\"form-card\">\n      <ion-radio-group formControlName=\"pagoAdelantado\">\n        <ion-text color=\"primary\">\n          <h4>Cuando es realizado el primer pago? *</h4>\n        </ion-text> \n        <ion-card>\n          <ion-item [class.invalid]=\"submitted && !datosForm.controls.pagoAdelantado.valid\">\n            <ion-radio slot=\"start\" name =\"true\"  value=\"true\" selected></ion-radio>                      \n            <ion-label>Adelantado</ion-label>\n          </ion-item>                  \n          <ion-card-content>\n              Seleccioná esta opción si el pago es realizado por adelantado\n          </ion-card-content>\n        </ion-card>\n        <ion-card>\n          <ion-item [class.invalid]=\"submitted && !datosForm.controls.pagoAdelantado.valid\">\n            <ion-radio slot=\"start\" name =\"false\"  value=\"false\"></ion-radio>                      \n            <ion-label>Final del periodo</ion-label>\n          </ion-item>                  \n          <ion-card-content>\n              Seleccioná esta opción si el pago es relizado al finalizar el periodo\n          </ion-card-content>\n        </ion-card>\n      </ion-radio-group>\n      <div *ngIf=\"submitted && f.pagoAdelantado.errors\" class=\"invalid-feedback\">\n        <div *ngIf=\"f.pagoAdelantado.errors.required\"><h5>Seleccione una de las opciones</h5></div>\n      </div>\n    </div>\n    \n    <div [ngClass]=\"{'form-card': true, 'form-card-error': submitted && !datosForm.controls.fechaInicio.valid}\">\n      <ion-text color=\"primary\">\n        <h4>Fecha de Inicio *</h4>\n      </ion-text>\n      \n      <ion-item>                  \n          <ion-datetime picker-format=\"YYYY-MM-DD\" formControlName=\"fechaInicio\"></ion-datetime>\n      </ion-item>\n      \n    </div>\n\n      <div class=\"form-card\">\n        <ion-text color=\"primary\">\n          <h4>Descripcion adicional</h4>\n        </ion-text>       \n        <ion-item>\n          <ion-textarea [(ngModel)]=\"servicio.descripcion_venta\" [ngModelOptions]=\"{standalone: true}\"></ion-textarea>\n        </ion-item>\n      </div>      \n    </form>\n    <ion-toolbar> \n      <ion-button slot=\"end\" (click)=\"agregar()\">Guardar</ion-button>  \n      <ion-button slot=\"start\"  color=\"light\" (click)=\"cancelar()\">Cancelar</ion-button>\n    </ion-toolbar>\n</ion-content>\n");

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

/***/ "./src/app/add-servicio-subscripcion/add-servicio-subscripcion.page.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/add-servicio-subscripcion/add-servicio-subscripcion.page.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1zZXJ2aWNpby1zdWJzY3JpcGNpb24vYWRkLXNlcnZpY2lvLXN1YnNjcmlwY2lvbi5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/add-servicio-subscripcion/add-servicio-subscripcion.page.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/add-servicio-subscripcion/add-servicio-subscripcion.page.ts ***!
  \*****************************************************************************/
/*! exports provided: AddServicioSubscripcionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddServicioSubscripcionPage", function() { return AddServicioSubscripcionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _Services_subscripciones_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Services/subscripciones.service */ "./src/app/Services/subscripciones.service.ts");
/* harmony import */ var _Services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Services/authentication.service */ "./src/app/Services/authentication.service.ts");
/* harmony import */ var _Services_planes_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Services/planes.service */ "./src/app/Services/planes.service.ts");
/* harmony import */ var _models_cliente__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models/cliente */ "./src/app/models/cliente.ts");
/* harmony import */ var _Services_global_carrito_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Services/global/carrito.service */ "./src/app/Services/global/carrito.service.ts");
/* harmony import */ var _Services_servicios_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Services/servicios.service */ "./src/app/Services/servicios.service.ts");
/* harmony import */ var _models_servicio__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../models/servicio */ "./src/app/models/servicio.ts");
/* harmony import */ var _Services_loading_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Services/loading.service */ "./src/app/Services/loading.service.ts");
/* harmony import */ var _form_plan_form_plan_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../form-plan/form-plan.page */ "./src/app/form-plan/form-plan.page.ts");
/* harmony import */ var _Services_toast_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Services/toast.service */ "./src/app/Services/toast.service.ts");
/* harmony import */ var _Services_clientes_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Services/clientes.service */ "./src/app/Services/clientes.service.ts");
/* harmony import */ var _models_subscripcion__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../models/subscripcion */ "./src/app/models/subscripcion.ts");
/* harmony import */ var _select_cliente_select_cliente_page__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../select-cliente/select-cliente.page */ "./src/app/select-cliente/select-cliente.page.ts");


















let AddServicioSubscripcionPage = class AddServicioSubscripcionPage {
    constructor(formBuilder, planesService, authenticationService, subscripcionesService, modalController, carritoService, navCtrl, route, servicioService, loadingService, toastServices, clientesService) {
        this.formBuilder = formBuilder;
        this.planesService = planesService;
        this.authenticationService = authenticationService;
        this.subscripcionesService = subscripcionesService;
        this.modalController = modalController;
        this.carritoService = carritoService;
        this.navCtrl = navCtrl;
        this.route = route;
        this.servicioService = servicioService;
        this.loadingService = loadingService;
        this.toastServices = toastServices;
        this.clientesService = clientesService;
        this.planes = [];
        this.plan = "";
        this.subscripcionOn = false;
        this.submitted = false;
        this.subscripcion = new _models_subscripcion__WEBPACK_IMPORTED_MODULE_16__["Subscripcion"]("", "");
        this.cliente = new _models_cliente__WEBPACK_IMPORTED_MODULE_8__["Cliente"]();
        this.servicio = new _models_servicio__WEBPACK_IMPORTED_MODULE_11__["Servicio"]();
        console.log(this.servicio);
        this.datosForm = this.formBuilder.group({
            plan: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            pagoAdelantado: ['true', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            fechaInicio: [this.currentDate()]
        });
    }
    ionViewDidEnter() {
        this.datosForm.patchValue({
            subscripcionOn: "false"
        });
        this.datosForm.patchValue({
            pagoAdelantado: "true"
        });
        if (this.route.snapshot.params.id) {
            var subs = this.servicioService.get(this.route.snapshot.params.id).subscribe(servicio => {
                this.servicio.asignarValores(servicio);
                this.servicio.pagoAdelantado = "true";
                this.loadingService.dismissLoading();
                this.loadingService.presentLoading();
                this.planesService.setPathIds(this.servicio.id);
                this.planesService.list().subscribe(items => {
                    this.planes = items;
                    this.loadingService.dismissLoading();
                });
                subs.unsubscribe();
            });
        }
    }
    ionViewDidLeave() {
    }
    ngOnInit() {
    }
    seleccionarCliente() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _select_cliente_select_cliente_page__WEBPACK_IMPORTED_MODULE_17__["SelectClientePage"]
            });
            modal.onDidDismiss()
                .then((retorno) => {
                if (retorno.data)
                    this.cliente = retorno.data.item;
            });
            return yield modal.present();
        });
    }
    eliminarCliente() {
        this.cliente = new _models_cliente__WEBPACK_IMPORTED_MODULE_8__["Cliente"]();
    }
    currentDate() {
        const currentDate = new Date();
        return currentDate.toISOString().substring(0, 10);
    }
    crearNuevoPlan() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _form_plan_form_plan_page__WEBPACK_IMPORTED_MODULE_13__["FormPlanPage"],
                componentProps: { servicioId: this.servicio.id }
            });
            return yield modal.present();
        });
    }
    get f() { return this.datosForm.controls; }
    agregar() {
        this.submitted = true;
        if (this.datosForm.invalid) {
            this.toastServices.alert('Por favor completar todos los campos marcados con * antes de continuar', "");
            return;
        }
        if (this.cliente.id == "") {
            this.toastServices.alert("Por favor seleccione un cliente antes de continuar", "");
            return;
        }
        this.servicio.pagoAdelantado = this.datosForm.controls.pagoAdelantado.value;
        this.servicio.fechaInicio = this.datosForm.controls.fechaInicio.value;
        this.subscripcion.clienteId = this.cliente.id;
        this.subscripcion.clienteRef = this.clientesService.getRef(this.cliente.id);
        this.subscripcion.vendedorRef = this.authenticationService.getRef(this.authenticationService.getUID());
        this.subscripcion.vendedor_nombre = this.authenticationService.getEmail();
        this.subscripcion.servicioId = this.servicio.id;
        this.subscripcion.servicioRef = this.servicioService.getRef(this.servicio.id);
        this.subscripcion.fechaInicio = this.servicio.fechaInicio;
        if (this.datosForm.controls.plan.value != 'personal') {
            this.servicio.plan = this.datosForm.controls.plan.value;
            this.subscripcion.planRef = this.planesService.getRef(this.servicio.plan.id);
        }
        this.subscripcion.pagoAdelantado = this.servicio.pagoAdelantado;
        this.subscripcion.descipcion_venta = this.servicio.descripcion_venta;
        console.log(this.subscripcion);
        this.subscripcionesService.add(this.subscripcion).then(data => {
            console.log(data);
        });
        this.toastServices.mensaje("Subscripción creada!", "");
        if (this.servicio.pagoAdelantado == "true") {
            this.carritoService.setearCliente(this.cliente);
            if (this.datosForm.controls.plan.value == 'personal') {
                this.servicio.plan.nombre = 'Personal';
                this.servicio.plan.precio = this.subscripcion.precio;
                this.servicio.plan.tipo = this.subscripcion.tipo;
                this.servicio.plan.dias = this.subscripcion.dias;
            }
            this.toastServices.mensaje("Se agregó la primer cuota al carrito", "");
        }
        this.navCtrl.back();
    }
    cancelar() {
        this.navCtrl.back();
    }
};
AddServicioSubscripcionPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _Services_planes_service__WEBPACK_IMPORTED_MODULE_7__["PlanesService"] },
    { type: _Services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] },
    { type: _Services_subscripciones_service__WEBPACK_IMPORTED_MODULE_5__["SubscripcionesService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _Services_global_carrito_service__WEBPACK_IMPORTED_MODULE_9__["CarritoService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _Services_servicios_service__WEBPACK_IMPORTED_MODULE_10__["ServiciosService"] },
    { type: _Services_loading_service__WEBPACK_IMPORTED_MODULE_12__["LoadingService"] },
    { type: _Services_toast_service__WEBPACK_IMPORTED_MODULE_14__["ToastService"] },
    { type: _Services_clientes_service__WEBPACK_IMPORTED_MODULE_15__["ClientesService"] }
];
AddServicioSubscripcionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-servicio-subscripcion',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-servicio-subscripcion.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-servicio-subscripcion/add-servicio-subscripcion.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add-servicio-subscripcion.page.scss */ "./src/app/add-servicio-subscripcion/add-servicio-subscripcion.page.scss")).default]
    })
], AddServicioSubscripcionPage);



/***/ }),

/***/ "./src/app/models/servicio.ts":
/*!************************************!*\
  !*** ./src/app/models/servicio.ts ***!
  \************************************/
/*! exports provided: Servicio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Servicio", function() { return Servicio; });
class Servicio {
    constructor() {
        this.id = "";
        this.plan = {
            id: "",
            nombre: "",
            precio: 0,
            tipo: "",
            dias: ""
        };
        this.nombre = "";
        this.descripcion = "";
        this.categorias = [];
        this.profesionales = [];
        this.foto = "";
        this.createdAt = "";
        this.fechaInicio = "";
        this.pagoAdelantado = "true";
        this.descripcion_venta = "";
        this.recibirReservas = true;
        this.precio = 0;
        this.tipo = "";
        this.dias = "";
    }
    asignarValores(init) {
        Object.assign(this, init);
    }
}


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
//# sourceMappingURL=default~add-servicio-subscripcion-add-servicio-subscripcion-module~form-subscripcion-form-subscripcion-module.js.map