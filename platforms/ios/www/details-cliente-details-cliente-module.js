(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["details-cliente-details-cliente-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/details-cliente/details-cliente.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/details-cliente/details-cliente.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Detalle Cliente</ion-title>    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">   \n  <ion-segment (ionChange)=\"segmentChanged($event)\">\n    <ion-segment-button value=\"info\">\n      <ion-label>Info</ion-label>\n    </ion-segment-button>\n    <ion-segment-button  *ngIf=\"comercio.config.beneficiosClientes\" value=\"beneficios\">\n      <ion-label>Beneficios</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"seguimiento\">\n      <ion-label>Seguimiento</ion-label>\n    </ion-segment-button>\n  </ion-segment>  \n\n  <div *ngIf=\"seccionActiva == 'info'\">\n    <ion-item (click)=\"enviarMail()\" class=\"item-card\">\n      <div slot=\"start\">      \n        <ion-icon name=\"person-outline\"></ion-icon>\n      </div>      \n      <ion-label text-wrap>\n        <h2><b>{{cliente.nombre}}</b></h2>           \n        <p>documento: {{cliente.documento}}</p>  \n        <p>fecha nacimiento: {{cliente.fecha_nacimiento | date:'dd/MM/yyyy'}}</p>  \n        <!--p>Cliente desde: {{cliente.createdAt.toDate()}}</p-->    \n      </ion-label>  \n    </ion-item>\n  \n    <ion-item (click)=\"enviarMail()\" class=\"item-card\">\n      <div slot=\"start\">      \n        <ion-icon name=\"mail-outline\"></ion-icon>\n      </div>      \n      <ion-label>\n        <h2><b>{{cliente.email}}</b></h2>        \n      </ion-label>  \n    </ion-item>\n  \n    <ion-item (click)=\"llamar()\" class=\"item-card\">\n      <div slot=\"start\">      \n        <ion-icon name=\"call-outline\"></ion-icon>\n      </div>      \n      <ion-label>\n        <h2><b>{{cliente.telefono}}</b></h2>        \n      </ion-label>  \n    </ion-item>\n  \n    <ion-item class=\"item-card\">\n      <div slot=\"start\">      \n        <ion-icon name=\"location-outline\"></ion-icon>\n      </div>      \n      <ion-label>\n        <h2><b>{{cliente.direccion}}</b></h2>        \n      </ion-label>    \n    </ion-item>\n    \n    \n    <!--div id=\"mapA\" class=\"map\"></div-->\n    \n  \n    <ion-item class=\"item-card\"> \n      <div slot=\"start\">      \n        <ion-icon name=\"create-outline\"></ion-icon>\n      </div>       \n      <ion-label> \n        <h2><b>{{cliente.descripcion}}</b></h2>        \n      </ion-label>       \n    </ion-item>  \n\n    <h5>Cuentas Corrientes:</h5>\n    <ion-button *ngIf=\"ctasCorrientes.length == 0\" class=\"button-rounded\" color=\"primary\" (click)=\"crearCuentaCorriente()\">Crear Cuenta Corriente</ion-button>\n \n    \n    <div *ngIf=\"ctasCorrientes.length != 0\">\n      <ion-list lines=\"none\">\n        <ion-item-sliding  class=\"item-card\" *ngFor=\"let item of ctasCorrientes\">\n          <ion-item (click)=\"seleccionarCuentaCorriente(item)\">           \n            <ion-label>\n              <p>  \n                {{item.nombre}}\n              </p> \n              <p>\n                <b>{{item.montoTotal | currency}}</b> \n              </p>        \n            </ion-label>         \n          </ion-item> \n        <ion-item-options side=\"end\">\n          <ion-item-option color=\"primary\" (click)=\"editarCtaCorriente(item)\"><ion-icon name=\"trash\" ></ion-icon> Editar</ion-item-option>\n        </ion-item-options>\n  \n        </ion-item-sliding>\n      </ion-list>\n    </div>\n\n  </div>\n  <div *ngIf=\"seccionActiva == 'beneficios'\">\n    <ion-button  class=\"button-rounded\" color=\"primary\" (click)=\"agregarBeneficio()\">Agregar Beneficio</ion-button>\n    <ion-item-sliding *ngFor=\"let beneficio of beneficios\" class=\"item-card\">\n      <ion-item>  \n        <div slot=\"start\">\n          <ion-icon name=\"file-tray-full-outline\"></ion-icon>\n        </div>      \n        <ion-label>\n          <b>{{beneficio.descripcion}}</b>        \n        </ion-label> \n      </ion-item>  \n      <ion-item-options side=\"end\">\n        <ion-item-option (click)=\"cancelarBeneficio(beneficio)\"><ion-icon name=\"trash\" ></ion-icon>Eliminar</ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n  </div>\n  \n  <div *ngIf=\"seccionActiva == 'seguimiento'\">\n\n    <ion-item  class=\"item-card\">\n      <ion-label position=\"floating\">Estado</ion-label>\n      <ion-select [(ngModel)]=\"cliente.estado\" (ionChange)=\"cambioEstado()\">\n        <ion-select-option *ngFor=\"let estado of estadosClientes\" [value]=\"estado.id\">{{estado.nombre}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-button slot=\"end\" (click)=\"openAddEstado()\">Agregar Nuevo Estado</ion-button>\n    <ion-list lines=\"none\">\n      <ion-item-sliding  class=\"item-card\" *ngFor=\"let item of comentarios\">\n        <ion-item>           \n          <ion-label>\n            <p>  \n              {{item.text}}\n            </p>    \n            <p>{{item.senderEmail}} -  {{item.createdAt.toDate() | date:'dd/MM/yyyy hh:mm'}}</p>\n          </ion-label>         \n        </ion-item>\n      <ion-item-options side=\"end\">\n        <ion-item-option color=\"primary\" (click)=\"eliminarComentario(item)\"><ion-icon name=\"trash\" ></ion-icon> Remover</ion-item-option>\n      </ion-item-options>\n\n      </ion-item-sliding>\n    </ion-list>\n\n  </div>\n  \n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" >\n     \n    <ion-fab-button (click)=\"agregarComentario()\">\n      <ion-icon name=\"chatbubble-outline\"></ion-icon>\n    </ion-fab-button>\n   \n  </ion-fab>\n  \n  \n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/Services/cta-corrientes.service.ts":
/*!****************************************************!*\
  !*** ./src/app/Services/cta-corrientes.service.ts ***!
  \****************************************************/
/*! exports provided: CtaCorrientesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CtaCorrientesService", function() { return CtaCorrientesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _clientes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./clientes.service */ "./src/app/Services/clientes.service.ts");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./base.service */ "./src/app/Services/base.service.ts");
/* harmony import */ var _comercios_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comercios.service */ "./src/app/Services/comercios.service.ts");







let CtaCorrientesService = class CtaCorrientesService extends _base_service__WEBPACK_IMPORTED_MODULE_5__["BaseService"] {
    constructor(firestore, clientesService, comerciosService) {
        super(firestore);
        this.firestore = firestore;
        this.clientesService = clientesService;
        this.comerciosService = comerciosService;
        this.comerciosService.getSelectedCommerce().subscribe(data => {
            // let comercio_seleccionadoId = localStorage.getItem('comercio_seleccionadoId'); 
            if (data) {
                this.setPath('comercios/' + data.id + '/ctascorrientes');
            }
        });
    }
    create(data) {
        data.id = this.firestore.createId();
        const param = JSON.parse(JSON.stringify(data));
        this.firestore.collection(this.path).add(Object.assign(Object.assign({}, param), { createdAt: firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"].FieldValue.serverTimestamp() }));
        data.coTitularesId.forEach(element => {
            this.clientesService.addCtaCorriente(element, data.id);
        });
    }
    get(documentId) {
        return this.firestore.collection(this.path).doc(documentId).snapshotChanges();
    }
    getByComercioCliente(cliente) {
        let comercio_seleccionadoId = localStorage.getItem('comercio_seleccionadoId');
        return this.firestore.collection(this.path, ref => ref.where('coTitularesId', 'array-contains', cliente.id)).snapshotChanges();
    }
    getByCliente(clienteId) {
        return this.firestore.collection(this.path, ref => ref.where('coTitularesId', 'array-contains', clienteId)).snapshotChanges();
    }
    getByClienteId(id) {
        return this.firestore.collection(this.path, ref => ref.where(id, "==", "clienteId")).snapshotChanges();
    }
};
CtaCorrientesService.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _clientes_service__WEBPACK_IMPORTED_MODULE_4__["ClientesService"] },
    { type: _comercios_service__WEBPACK_IMPORTED_MODULE_6__["ComerciosService"] }
];
CtaCorrientesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CtaCorrientesService);



/***/ }),

/***/ "./src/app/details-cliente/details-cliente-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/details-cliente/details-cliente-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: DetailsClientePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsClientePageRoutingModule", function() { return DetailsClientePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _details_cliente_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./details-cliente.page */ "./src/app/details-cliente/details-cliente.page.ts");




const routes = [
    {
        path: '',
        component: _details_cliente_page__WEBPACK_IMPORTED_MODULE_3__["DetailsClientePage"]
    }
];
let DetailsClientePageRoutingModule = class DetailsClientePageRoutingModule {
};
DetailsClientePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DetailsClientePageRoutingModule);



/***/ }),

/***/ "./src/app/details-cliente/details-cliente.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/details-cliente/details-cliente.module.ts ***!
  \***********************************************************/
/*! exports provided: DetailsClientePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsClientePageModule", function() { return DetailsClientePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _details_cliente_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./details-cliente-routing.module */ "./src/app/details-cliente/details-cliente-routing.module.ts");
/* harmony import */ var _details_cliente_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./details-cliente.page */ "./src/app/details-cliente/details-cliente.page.ts");
/* harmony import */ var _Components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Components/components.module */ "./src/app/Components/components.module.ts");








let DetailsClientePageModule = class DetailsClientePageModule {
};
DetailsClientePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _Components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _details_cliente_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailsClientePageRoutingModule"]
        ],
        declarations: [_details_cliente_page__WEBPACK_IMPORTED_MODULE_6__["DetailsClientePage"]]
    })
], DetailsClientePageModule);



/***/ }),

/***/ "./src/app/details-cliente/details-cliente.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/details-cliente/details-cliente.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".perfil-foto {\n  margin-top: -50px;\n  margin-left: 30px;\n  color: white;\n  border-radius: 5px;\n  text-align: center;\n  width: 100px;\n  height: 100px;\n  background-color: grey;\n  font-size: 12px;\n  border: 5px solid white;\n  border-radius: 100px;\n}\n\n.item-card div {\n  width: 70px;\n  /* height: 70px; */\n  margin-right: 10px;\n  margin-left: -10px;\n  text-align: center;\n  line-height: 70px;\n  font-size: 30px;\n}\n\n.map {\n  width: 100%;\n  height: 150px;\n  position: relative !important;\n  left: 0;\n  top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWlscy1jbGllbnRlL0M6XFxQcm95ZWN0b3NcXFdlYiBBcHBcXHRpdml0eS9zcmNcXGFwcFxcZGV0YWlscy1jbGllbnRlXFxkZXRhaWxzLWNsaWVudGUucGFnZS5zY3NzIiwic3JjL2FwcC9kZXRhaWxzLWNsaWVudGUvZGV0YWlscy1jbGllbnRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtBQ0FKOztBREtBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDRko7O0FES0E7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7QUNGSiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbHMtY2xpZW50ZS9kZXRhaWxzLWNsaWVudGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5wZXJmaWwtZm90b3tcclxuICAgIG1hcmdpbi10b3A6IC01MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgYm9yZGVyOiA1cHggc29saWQgd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxufVxyXG5cclxuXHJcblxyXG4uaXRlbS1jYXJkIGRpdiB7XHJcbiAgICB3aWR0aDogNzBweDtcclxuICAgIC8qIGhlaWdodDogNzBweDsgKi9cclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiA3MHB4O1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcblxyXG4ubWFwe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gIH0iLCIucGVyZmlsLWZvdG8ge1xuICBtYXJnaW4tdG9wOiAtNTBweDtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBib3JkZXI6IDVweCBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG59XG5cbi5pdGVtLWNhcmQgZGl2IHtcbiAgd2lkdGg6IDcwcHg7XG4gIC8qIGhlaWdodDogNzBweDsgKi9cbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDcwcHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuLm1hcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE1MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/details-cliente/details-cliente.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/details-cliente/details-cliente.page.ts ***!
  \*********************************************************/
/*! exports provided: DetailsClientePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsClientePage", function() { return DetailsClientePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _Services_subscripciones_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/subscripciones.service */ "./src/app/Services/subscripciones.service.ts");
/* harmony import */ var _Services_clientes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/clientes.service */ "./src/app/Services/clientes.service.ts");
/* harmony import */ var _Services_servicios_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Services/servicios.service */ "./src/app/Services/servicios.service.ts");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/email-composer/ngx */ "./node_modules/@ionic-native/email-composer/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _Services_cta_corrientes_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Services/cta-corrientes.service */ "./src/app/Services/cta-corrientes.service.ts");
/* harmony import */ var _form_comentario_form_comentario_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../form-comentario/form-comentario.page */ "./src/app/form-comentario/form-comentario.page.ts");
/* harmony import */ var _Services_comentarios_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Services/comentarios.service */ "./src/app/Services/comentarios.service.ts");
/* harmony import */ var _form_cliente_estado_form_cliente_estado_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../form-cliente-estado/form-cliente-estado.page */ "./src/app/form-cliente-estado/form-cliente-estado.page.ts");
/* harmony import */ var _Services_clientes_estados_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Services/clientes-estados.service */ "./src/app/Services/clientes-estados.service.ts");
/* harmony import */ var _models_cliente__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../models/cliente */ "./src/app/models/cliente.ts");
/* harmony import */ var _models_comercio__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../models/comercio */ "./src/app/models/comercio.ts");
/* harmony import */ var _Services_comercios_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../Services/comercios.service */ "./src/app/Services/comercios.service.ts");
/* harmony import */ var _Services_beneficios_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../Services/beneficios.service */ "./src/app/Services/beneficios.service.ts");
/* harmony import */ var _select_beneficio_select_beneficio_page__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../select-beneficio/select-beneficio.page */ "./src/app/select-beneficio/select-beneficio.page.ts");



















let DetailsClientePage = class DetailsClientePage {
    constructor(route, clientesServices, serviciosServices, subscripcionesService, router, callNumber, emailComposer, alertController, ctasCorreintesService, modalController, comentarioService, clientesEstadosService, comerciosService, beneficiosService) {
        this.route = route;
        this.clientesServices = clientesServices;
        this.serviciosServices = serviciosServices;
        this.subscripcionesService = subscripcionesService;
        this.router = router;
        this.callNumber = callNumber;
        this.emailComposer = emailComposer;
        this.alertController = alertController;
        this.ctasCorreintesService = ctasCorreintesService;
        this.modalController = modalController;
        this.comentarioService = comentarioService;
        this.clientesEstadosService = clientesEstadosService;
        this.comerciosService = comerciosService;
        this.beneficiosService = beneficiosService;
        this.markers = [];
        this.subscripciones = [];
        this.mostrarMapa = false;
        this.seccionActiva = "info";
        this.ctasCorrientes = [];
        this.comentarios = [];
        this.estadosClientes = [];
        this.beneficios = [];
        this.cliente = new _models_cliente__WEBPACK_IMPORTED_MODULE_14__["Cliente"]();
        this.comercio = new _models_comercio__WEBPACK_IMPORTED_MODULE_15__["Comercio"]();
        this.comercio.asignarValores(this.comerciosService.getSelectedCommerceValue());
    }
    ngOnInit() {
        this.subsCliente = this.clientesServices.get(this.route.snapshot.params.id).subscribe((resp) => {
            this.cliente.asignarValores(resp.payload.data());
            this.cliente.id = resp.payload.id;
            console.log(this.cliente);
            this.comentarioService.setearPath("clientes", this.route.snapshot.params.id);
            this.comentarioService.list().subscribe(data => {
                this.comentarios = data;
                this.comentarios.forEach(item => {
                    console.log(item);
                });
            });
        });
        this.clientesEstadosService.list().subscribe((data) => {
            this.estadosClientes = data;
        });
        this.beneficiosService.getByCliente(this.route.snapshot.params.id).subscribe(data => {
            this.beneficios = data;
        });
        this.ctasCorreintesService.list().subscribe(cuentas => {
            this.ctasCorrientes = cuentas;
            console.log(this.ctasCorrientes);
        });
    }
    openAddEstado() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _form_cliente_estado_form_cliente_estado_page__WEBPACK_IMPORTED_MODULE_12__["FormClienteEstadoPage"],
                componentProps: {
                    comercioId: localStorage.getItem('comercio_seleccionadoId')
                }
            });
            return yield modal.present();
        });
    }
    cambioEstado() {
        this.clientesServices.update(this.cliente).then(data => {
            console.log(data);
        });
    }
    agregarBeneficio() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _select_beneficio_select_beneficio_page__WEBPACK_IMPORTED_MODULE_18__["SelectBeneficioPage"]
            });
            modal.onDidDismiss()
                .then((retorno) => {
                if (retorno.data)
                    this.beneficiosService.agregarBeneficioAUsuario(this.cliente, retorno.data.item).then(data => {
                        console.log(data);
                    });
            });
            return yield modal.present();
        });
    }
    cancelarBeneficio(beneficio) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Está seguro?',
                message: '',
                buttons: [
                    {
                        text: 'No',
                        handler: (blah) => {
                        }
                    }, {
                        text: 'Si',
                        handler: () => {
                            this.beneficiosService.eliminarBeneficioAUsuario(this.cliente, beneficio).then(data => {
                                console.log(data);
                            });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    crearCuentaCorriente() {
        this.router.navigate(['form-cta-corriente']);
    }
    seleccionarCuentaCorriente(item) {
        this.router.navigate(['details-cta-corriente', {
                id: item.id
            }]);
    }
    verDetallesSubscripcion(id) {
        this.router.navigate(['details-subscripcion', { id: id }]);
    }
    ionViewDidLeave() {
        this.subsCliente.unsubscribe();
    }
    llamar() {
        this.callNumber.callNumber(this.cliente.telefono, true)
            .then(res => console.log('Launched dialer!', res))
            .catch(err => console.log('Error launching dialer', err));
    }
    enviarMail() {
        let email = {
            to: this.cliente.email,
        };
        // Send a text message using default options
        this.emailComposer.open(email);
    }
    editar() {
        this.router.navigate(['form-cliente', { id: this.route.snapshot.params.id }]);
    }
    cobrar(pagare) {
    }
    editarCtaCorriente(item) {
        this.router.navigate(['form-cta-corriente', {
                id: item.id
            }]);
    }
    eliminarSubscripcion(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Está seguro que desea eliminar la subscripción?',
                message: 'Se perderán todos los movimientos y pagos de la misma.',
                buttons: [
                    {
                        text: 'Cancelar',
                        handler: (blah) => {
                        }
                    }, {
                        text: 'Eliminar',
                        handler: () => {
                            this.subscripcionesService.delete(item.id);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    segmentChanged(event) {
        console.log(event.target.value);
        this.seccionActiva = event.target.value;
    }
    agregarComentario() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _form_comentario_form_comentario_page__WEBPACK_IMPORTED_MODULE_10__["FormComentarioPage"],
                componentProps: {
                    comentableId: this.route.snapshot.params.id,
                    comentableTipo: "clientes"
                }
            });
            modal.onDidDismiss()
                .then((retorno) => {
                if (retorno.data)
                    this.cliente.asignarValores(retorno.data.item);
            });
            return yield modal.present();
        });
    }
    eliminarComentario(item) {
        this.comentarioService.delete(item.id);
    }
};
DetailsClientePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _Services_clientes_service__WEBPACK_IMPORTED_MODULE_4__["ClientesService"] },
    { type: _Services_servicios_service__WEBPACK_IMPORTED_MODULE_5__["ServiciosService"] },
    { type: _Services_subscripciones_service__WEBPACK_IMPORTED_MODULE_3__["SubscripcionesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_6__["CallNumber"] },
    { type: _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_7__["EmailComposer"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"] },
    { type: _Services_cta_corrientes_service__WEBPACK_IMPORTED_MODULE_9__["CtaCorrientesService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"] },
    { type: _Services_comentarios_service__WEBPACK_IMPORTED_MODULE_11__["ComentariosService"] },
    { type: _Services_clientes_estados_service__WEBPACK_IMPORTED_MODULE_13__["ClientesEstadosService"] },
    { type: _Services_comercios_service__WEBPACK_IMPORTED_MODULE_16__["ComerciosService"] },
    { type: _Services_beneficios_service__WEBPACK_IMPORTED_MODULE_17__["BeneficiosService"] }
];
DetailsClientePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-details-cliente',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./details-cliente.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/details-cliente/details-cliente.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./details-cliente.page.scss */ "./src/app/details-cliente/details-cliente.page.scss")).default]
    })
], DetailsClientePage);



/***/ })

}]);
//# sourceMappingURL=details-cliente-details-cliente-module.js.map