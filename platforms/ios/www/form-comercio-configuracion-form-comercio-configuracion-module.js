(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["form-comercio-configuracion-form-comercio-configuracion-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-comercio-configuracion/form-comercio-configuracion.page.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form-comercio-configuracion/form-comercio-configuracion.page.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title  size=\"small\">Configuración</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n\r\n  <!--ion-item *ngIf=\"rolActual == 'Administrador'\">\r\n    <ion-label>Habilitar Productos</ion-label>\r\n    <ion-toggle [(ngModel)]=\"comercio.config.productos\" (ionChange)=\"update()\"  [ngModelOptions]=\"{standalone: true}\"></ion-toggle>\r\n  </ion-item>\r\n\r\n  <ion-item *ngIf=\"rolActual == 'Administrador'\">\r\n    <ion-label>Habilitar Servicios</ion-label>\r\n    <ion-toggle [(ngModel)]=\"comercio.config.servicios\" (ionChange)=\"update()\"  [ngModelOptions]=\"{standalone: true}\"></ion-toggle>\r\n  </ion-item-->\r\n\r\n\r\n  <ion-button *ngIf=\"rolActual.rol == 'Administrador'\" class=\"button-rounded\"  (click)=\"editarComercio()\">Datos Comercio</ion-button>\r\n\r\n\r\n  <ion-button *ngIf=\"rolActual.rol != 'Administrador'\" class=\"button-rounded\"  color=\"danger\" (click)=\"desvincular()\"><ion-icon name=\"trash\" ></ion-icon>Desvincular</ion-button>\r\n\r\n  <ion-grid *ngIf=\"rolActual.rol == 'Administrador'\">\r\n    <ion-row>\r\n      <ion-col size=\"10\">\r\n        <p>\r\n          <b>Cobrar Sin realizar pedido</b><br>\r\n         Desde el catálogo podrás armar el carrito y cobrarlo directamente sin utilizar el panel de pedidos.\r\n        </p>\r\n      </ion-col>\r\n      <ion-col size=\"2\">\r\n        <ion-toggle [(ngModel)]=\"comercio.config.cobrarDirectamente\" (ionChange)=\"update()\"  [ngModelOptions]=\"{standalone: true}\"></ion-toggle>    \r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  \r\n  <ion-grid *ngIf=\"rolActual.rol == 'Administrador'\">\r\n    <ion-row>\r\n      <ion-col size=\"10\">\r\n        <p>\r\n          <b>Habilitar Mesas</b><br>\r\n          Podrá asignar una mesa a cada pedido y gestionar los mismos en base a este parámetro\r\n        </p>\r\n       \r\n      </ion-col>\r\n      <ion-col size=\"2\">\r\n        <ion-toggle [(ngModel)]=\"comercio.config.mesas\" (ionChange)=\"update()\"  [ngModelOptions]=\"{standalone: true}\"></ion-toggle>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-button *ngIf=\"comercio.config.mesas  && rolActual.rol == 'Administrador'\" class=\"button-rounded\"    (click)=\"openEditMesas()\">Editar Mesas</ion-button>\r\n  </ion-grid>\r\n\r\n  <ion-grid *ngIf=\"rolActual.rol == 'Administrador'\">\r\n    <ion-row>\r\n      <ion-col size=\"10\">\r\n        <p>\r\n          <b>Panel Comandas</b><br>\r\n          Desde un nuevo panel podrá gestionar el estado de sus pedidos. Ideal para una o varias cocinas\r\n        </p>\r\n        \r\n      </ion-col>\r\n      <ion-col size=\"2\">\r\n        <ion-toggle [(ngModel)]=\"comercio.config.comandas\" (ionChange)=\"update()\"  [ngModelOptions]=\"{standalone: true}\"></ion-toggle>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-button *ngIf=\"comercio.config.comandas && rolActual.rol == 'Administrador'\" class=\"button-rounded\"    (click)=\"openEditCocinas()\">Editar Cocinas</ion-button>\r\n  </ion-grid>\r\n\r\n  <ion-grid *ngIf=\"rolActual.rol == 'Administrador'\">\r\n    <ion-row>\r\n      <ion-col size=\"10\">\r\n        <p>\r\n          <b>Panel Reservas</b><br>\r\n          Realiza reservas asignables a cualquier personal con cualquier item de tu catálogo\r\n        </p>        \r\n      </ion-col>\r\n      <ion-col size=\"2\">\r\n        <ion-toggle [(ngModel)]=\"comercio.config.reservas\" (ionChange)=\"update()\"  [ngModelOptions]=\"{standalone: true}\"></ion-toggle>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-grid *ngIf=\"rolActual.rol == 'Administrador'\">\r\n    <ion-row>\r\n      <ion-col size=\"10\">\r\n        <p>\r\n          <b>Habilitar Gestión Stock</b><br>\r\n          Agregue stock a cada producto manualmente. El sistema resta automáticamente el stock cada vez que genera un pedido\r\n        </p>\r\n      </ion-col>\r\n      <ion-col size=\"2\">\r\n        <ion-toggle [(ngModel)]=\"comercio.config.stock\" (ionChange)=\"update()\"  [ngModelOptions]=\"{standalone: true}\"></ion-toggle>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-grid *ngIf=\"rolActual.rol == 'Administrador'\">\r\n    <ion-row>\r\n      <ion-col size=\"10\">\r\n        <p>\r\n          <b>Habilitar Clientes</b><br>\r\n          Realice un seguimiento de cada uno de sus clientes.\r\n        </p>\r\n      </ion-col>\r\n      <ion-col size=\"2\">\r\n        <ion-toggle [(ngModel)]=\"comercio.config.clientes\" (ionChange)=\"update()\"  [ngModelOptions]=\"{standalone: true}\"></ion-toggle>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n \r\n \r\n\r\n  <ion-grid *ngIf=\"rolActual.rol == 'Administrador' && comercio.config.clientes\">\r\n    <ion-row>\r\n      <ion-col size=\"10\">\r\n        <p>\r\n          <b>Habilitar Beneficios de clientes</b><br>\r\n          Genere y registre beneficios y descuentos a sus clientes.\r\n          \r\n        </p>\r\n      </ion-col>\r\n      <ion-col size=\"2\">\r\n        <ion-toggle [(ngModel)]=\"comercio.config.beneficiosClientes\" (ionChange)=\"update()\"  [ngModelOptions]=\"{standalone: true}\"></ion-toggle>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-button *ngIf=\"comercio.config.beneficiosClientes  && rolActual.rol == 'Administrador'\" class=\"button-rounded\"    (click)=\"openBeneficiosClientes()\">Editar Beneficios</ion-button>\r\n  </ion-grid>\r\n\r\n  <ion-grid *ngIf=\"rolActual.rol == 'Administrador' && comercio.config.clientes\">\r\n    <ion-row>\r\n      <ion-col size=\"10\">\r\n        <p>\r\n          <b>Habilitar Beneficio por puntaje</b><br>\r\n          Cree y administre su propio club de puntos con acciones automatizadas\r\n          \r\n        </p>\r\n      </ion-col>\r\n      <ion-col size=\"2\">\r\n        <ion-toggle [(ngModel)]=\"comercio.config.beneficiosPorPuntaje\" (ionChange)=\"update()\"  [ngModelOptions]=\"{standalone: true}\"></ion-toggle>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-button *ngIf=\"comercio.config.beneficiosPorPuntaje  && rolActual.rol == 'Administrador'\" class=\"button-rounded\"    (click)=\"openBeneficiosPuntaje()\">Editar Puntaje y Beneficios</ion-button>\r\n  </ion-grid>\r\n\r\n \r\n  <ion-grid *ngIf=\"rolActual.rol == 'Administrador'\">\r\n    <ion-row>\r\n      <ion-col size=\"10\">\r\n        <p>\r\n          <b>Habilitar Movimientos de Caja</b><br>\r\n          Obtenga un detalle de cada movimiento que se generó en las cajas de su local\r\n        </p>\r\n      </ion-col>\r\n      <ion-col size=\"2\">\r\n        <ion-toggle [(ngModel)]=\"comercio.config.movimientosCajas\" (ionChange)=\"update()\"  [ngModelOptions]=\"{standalone: true}\"></ion-toggle>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-grid *ngIf=\"rolActual.rol == 'Administrador'\">\r\n    <ion-row>\r\n      <ion-col size=\"10\">\r\n        <p>\r\n          <b>Sincronizar Productos con Woocommerce</b><br>\r\n          Sincronize su tienda online, gestione y reciba sus pedidos.\r\n          \r\n        </p>\r\n      </ion-col>\r\n      <ion-col size=\"2\">\r\n        <ion-toggle [(ngModel)]=\"comercio.config.woocommerce\" (ionChange)=\"update()\"  [ngModelOptions]=\"{standalone: true}\"></ion-toggle>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-button *ngIf=\"comercio.config.woocommerce\" class=\"button-rounded\" (click)=\"openEditWoocommerce()\">Configuración Woocommerce</ion-button>\r\n  </ion-grid>\r\n\r\n\r\n\r\n  <ion-button class=\"button-rounded\" (click)=\"openEditAfip()\">Configuración Afip</ion-button>\r\n\r\n  <ion-button class=\"button-rounded\" (click)=\"openEditMercadoPAgo()\">Configurar Mercado Pago</ion-button>\r\n\r\n  <ion-button class=\"button-rounded\" *ngIf=\"rolActual.rol == 'Administrador'\"    (click)=\"openEditOpciones()\">Editar Grupo Opciones</ion-button>\r\n  <!--ion-button class=\"button-rounded\" *ngIf=\"rolActual.rol == 'Administrador'\"    (click)=\"openEditPedidos()\">Configurar Pedidos</ion-button-->\r\n  <ion-button class=\"button-rounded\" *ngIf=\"rolActual.rol == 'Administrador'\"   (click)=\"openEditHorarios()\">Editar Horarios</ion-button>\r\n  \r\n  <ion-button class=\"button-rounded\" *ngIf=\"rolActual.rol == 'Administrador'\"   (click)=\"linkWhatsapp()\">Link Whatsapp</ion-button>\r\n  <ion-button class=\"button-rounded\" *ngIf=\"rolActual.rol == 'Administrador'\"   (click)=\"openEditCategorias()\">Editar Categorias</ion-button>\r\n  \r\n\r\n  <ion-button class=\"button-rounded\"    (click)=\"verImpresora()\">Impresora</ion-button>\r\n  \r\n  <ion-button *ngIf=\"rolActual.rol == 'Administrador'\"  class=\"button-rounded\" color=\"danger\" (click)=\"elimiar()\">Eliminar Comercio</ion-button>\r\n\r\n   \r\n</ion-content> \r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-configuracion-afip/form-configuracion-afip.page.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form-configuracion-afip/form-configuracion-afip.page.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title  size=\"small\">AFIP</ion-title>    \n    <ion-button fill=\"clear\" (click)=\"cerrar()\" color=\"primary\" slot=\"end\">\n      <ion-icon name=\"close-outline\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding ion-text-center\">\n\n  <img class=\"afip-logo\" src=\"../../assets/img/logo_afip.png\" alt=\"\">\n\n  <ion-item *ngIf=\"comercio.afip.token\" class=\"item-card\">\n    Conectado con el punto de venta: {{comercio.afip.puntoVenta}}\n  </ion-item>\n  \n \n  <ion-item *ngIf=\"!comercio.afip.token\" class=\"form-card\">\n    Contacta a nuestro equipo y solicita la activación del módulo de Afip\n  </ion-item>\n\n  <ion-button *ngIf=\"comercio.afip.token\" class=\"button-rounded\" color=\"danger\" (click)=\"desvincular()\">Desvincular Punto de Venta</ion-button>\n\n\n</ion-content>\n\n");

/***/ }),

/***/ "./src/app/Services/mercadopago.service.ts":
/*!*************************************************!*\
  !*** ./src/app/Services/mercadopago.service.ts ***!
  \*************************************************/
/*! exports provided: MercadopagoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MercadopagoService", function() { return MercadopagoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _comercios_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comercios.service */ "./src/app/Services/comercios.service.ts");






let MercadopagoService = class MercadopagoService {
    constructor(http, afs, comerciosService) {
        this.http = http;
        this.afs = afs;
        this.comerciosService = comerciosService;
        this.collection = this.afs.collection('mercadoPago');
    }
    procesarPago(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({});
            let options = {
                headers: httpHeaders
            };
            let body = data;
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].mercadoPagoUrl + "/procesarPago", body, options).toPromise();
        });
    }
    obtenerTiposDocumentos() {
        let httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({});
        let options = {
            headers: httpHeaders
        };
        let body = {
            comercioId: this.comerciosService.getSelectedCommerceId()
        };
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].mercadoPagoUrl + "/obtenerTiposDocumentos", body, options);
    }
    obtenerTiposPago() {
        let httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({});
        let options = {
            headers: httpHeaders
        };
        let body = {
            comercioId: this.comerciosService.getSelectedCommerceId()
        };
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].mercadoPagoUrl + "/obtenerTiposPago", body, options);
    }
    guardarKeys(privateKey, publicKey) {
        let data = {
            clavePrivada: privateKey,
            clavePublica: publicKey
        };
        let time = new Date();
        return this.collection.doc(this.comerciosService.getSelectedCommerceId()).set(Object.assign(Object.assign({}, data), { createdAt: time }));
    }
};
MercadopagoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] },
    { type: _comercios_service__WEBPACK_IMPORTED_MODULE_5__["ComerciosService"] }
];
MercadopagoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], MercadopagoService);



/***/ }),

/***/ "./src/app/form-comercio-configuracion/form-comercio-configuracion-routing.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/form-comercio-configuracion/form-comercio-configuracion-routing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: FormComercioConfiguracionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComercioConfiguracionPageRoutingModule", function() { return FormComercioConfiguracionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _form_comercio_configuracion_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-comercio-configuracion.page */ "./src/app/form-comercio-configuracion/form-comercio-configuracion.page.ts");




const routes = [
    {
        path: '',
        component: _form_comercio_configuracion_page__WEBPACK_IMPORTED_MODULE_3__["FormComercioConfiguracionPage"]
    }
];
let FormComercioConfiguracionPageRoutingModule = class FormComercioConfiguracionPageRoutingModule {
};
FormComercioConfiguracionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FormComercioConfiguracionPageRoutingModule);



/***/ }),

/***/ "./src/app/form-comercio-configuracion/form-comercio-configuracion.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/form-comercio-configuracion/form-comercio-configuracion.module.ts ***!
  \***********************************************************************************/
/*! exports provided: FormComercioConfiguracionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComercioConfiguracionPageModule", function() { return FormComercioConfiguracionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _form_comercio_configuracion_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-comercio-configuracion-routing.module */ "./src/app/form-comercio-configuracion/form-comercio-configuracion-routing.module.ts");
/* harmony import */ var _form_comercio_configuracion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form-comercio-configuracion.page */ "./src/app/form-comercio-configuracion/form-comercio-configuracion.page.ts");







let FormComercioConfiguracionPageModule = class FormComercioConfiguracionPageModule {
};
FormComercioConfiguracionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _form_comercio_configuracion_routing_module__WEBPACK_IMPORTED_MODULE_5__["FormComercioConfiguracionPageRoutingModule"]
        ],
        declarations: [_form_comercio_configuracion_page__WEBPACK_IMPORTED_MODULE_6__["FormComercioConfiguracionPage"]]
    })
], FormComercioConfiguracionPageModule);



/***/ }),

/***/ "./src/app/form-comercio-configuracion/form-comercio-configuracion.page.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/form-comercio-configuracion/form-comercio-configuracion.page.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0tY29tZXJjaW8tY29uZmlndXJhY2lvbi9mb3JtLWNvbWVyY2lvLWNvbmZpZ3VyYWNpb24ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/form-comercio-configuracion/form-comercio-configuracion.page.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/form-comercio-configuracion/form-comercio-configuracion.page.ts ***!
  \*********************************************************************************/
/*! exports provided: FormComercioConfiguracionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComercioConfiguracionPage", function() { return FormComercioConfiguracionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _Services_comercios_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/comercios.service */ "./src/app/Services/comercios.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _models_comercio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/comercio */ "./src/app/models/comercio.ts");
/* harmony import */ var _Services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Services/authentication.service */ "./src/app/Services/authentication.service.ts");
/* harmony import */ var _form_comercio_form_comercio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../form-comercio/form-comercio.page */ "./src/app/form-comercio/form-comercio.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _Services_roles_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Services/roles.service */ "./src/app/Services/roles.service.ts");
/* harmony import */ var _form_configuracion_afip_form_configuracion_afip_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../form-configuracion-afip/form-configuracion-afip.page */ "./src/app/form-configuracion-afip/form-configuracion-afip.page.ts");
/* harmony import */ var _form_config_mercadopago_form_config_mercadopago_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../form-config-mercadopago/form-config-mercadopago.page */ "./src/app/form-config-mercadopago/form-config-mercadopago.page.ts");











let FormComercioConfiguracionPage = class FormComercioConfiguracionPage {
    constructor(comerciosService, route, router, authService, modalCtrl, alertController, rolesService, modalController) {
        this.comerciosService = comerciosService;
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.modalCtrl = modalCtrl;
        this.alertController = alertController;
        this.rolesService = rolesService;
        this.modalController = modalController;
        this.cajas = [];
        this.horarios = [];
        this.categorias = [];
        this.rolActual = "";
        this.comercio = new _models_comercio__WEBPACK_IMPORTED_MODULE_4__["Comercio"]();
        this.comerciosService.getSelectedCommerce().subscribe(data => {
            this.comercio.asignarValores(data);
        });
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        let obs = this.authService.observeRol().subscribe(data => {
            this.rolActual = data;
            console.log(this.rolActual);
            //Aca setea todos los shows
            obs.unsubscribe();
        });
    }
    editarComercio() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // this.seleccionar(item);
            const modal = yield this.modalCtrl.create({
                component: _form_comercio_form_comercio_page__WEBPACK_IMPORTED_MODULE_6__["FormComercioPage"],
                componentProps: {
                    comercio: this.comercio
                }
            });
            return yield modal.present();
        });
    }
    desvincular() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Eliminar',
                message: 'Está seguro que desea desvincularse del comercio?',
                buttons: [
                    {
                        text: 'Cancelar',
                        handler: (blah) => {
                        }
                    }, {
                        text: 'Desvincular',
                        handler: () => {
                            this.rolesService.setPath('comercios/' + this.comercio.id + '/roles');
                            this.rolesService.delete(this.rolActual.id);
                            this.router.navigate(['home']);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    openEditOpciones() {
        this.router.navigate(['list-grupos-opciones']);
    }
    openEditCategorias() {
        this.router.navigate(['list-categorias']);
    }
    openEditCajas() {
        this.router.navigate(['list-cajas']);
    }
    openEditHorarios() {
        this.router.navigate(['list-horarios']);
    }
    openEditMesas() {
        this.router.navigate(['list-mesas']);
    }
    openEditCocinas() {
        this.router.navigate(['list-cocinas']);
    }
    openEditComandas() {
        this.router.navigate(['form-comanda-configuracion']);
    }
    openEditPedidos() {
        this.router.navigate(['form-pedidos-configuracion']);
    }
    verPersonal() {
        this.router.navigate(['list-personal']);
    }
    linkWhatsapp() {
        this.router.navigate(['details-whatsapp']);
    }
    verImpresora() {
        this.router.navigate(['form-impresora-config']);
    }
    openEditWoocommerce() {
        this.router.navigate(['form-woocommerce-configuracion']);
    }
    openBeneficiosClientes() {
        this.router.navigate(['list-beneficios']);
    }
    openBeneficiosPuntaje() {
    }
    update() {
        if (!this.comercio.config.clientes) {
            this.comercio.config.beneficiosClientes = false;
            this.comercio.config.beneficiosPorPuntaje = false;
        }
        this.comerciosService.update(this.comercio);
    }
    elimiar() {
        this.presentAlertEliminar();
    }
    presentAlertEliminar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Eliminar',
                message: 'Está seguro que desea eliminar el comercio?',
                buttons: [
                    {
                        text: 'Cancelar',
                        handler: (blah) => {
                        }
                    }, {
                        text: 'Eliminar',
                        handler: () => {
                            this.comerciosService.delete(this.comercio.id);
                            this.modalCtrl.dismiss();
                            this.router.navigate(['home']);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    openEditAfip() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _form_configuracion_afip_form_configuracion_afip_page__WEBPACK_IMPORTED_MODULE_9__["FormConfiguracionAfipPage"],
            });
            modal.present().then(() => {
            });
        });
    }
    openEditMercadoPAgo() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _form_config_mercadopago_form_config_mercadopago_page__WEBPACK_IMPORTED_MODULE_10__["FormConfigMercadopagoPage"],
            });
            modal.present().then(() => {
            });
        });
    }
};
FormComercioConfiguracionPage.ctorParameters = () => [
    { type: _Services_comercios_service__WEBPACK_IMPORTED_MODULE_2__["ComerciosService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _Services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
    { type: _Services_roles_service__WEBPACK_IMPORTED_MODULE_8__["RolesService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] }
];
FormComercioConfiguracionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-comercio-configuracion',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./form-comercio-configuracion.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-comercio-configuracion/form-comercio-configuracion.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./form-comercio-configuracion.page.scss */ "./src/app/form-comercio-configuracion/form-comercio-configuracion.page.scss")).default]
    })
], FormComercioConfiguracionPage);



/***/ }),

/***/ "./src/app/form-configuracion-afip/form-configuracion-afip.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/form-configuracion-afip/form-configuracion-afip.page.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".afip-logo {\n  width: 80%;\n  text-align: center;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybS1jb25maWd1cmFjaW9uLWFmaXAvQzpcXFByb3llY3Rvc1xcV2ViQXBwc1xcdGl2aXR5L3NyY1xcYXBwXFxmb3JtLWNvbmZpZ3VyYWNpb24tYWZpcFxcZm9ybS1jb25maWd1cmFjaW9uLWFmaXAucGFnZS5zY3NzIiwic3JjL2FwcC9mb3JtLWNvbmZpZ3VyYWNpb24tYWZpcC9mb3JtLWNvbmZpZ3VyYWNpb24tYWZpcC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9mb3JtLWNvbmZpZ3VyYWNpb24tYWZpcC9mb3JtLWNvbmZpZ3VyYWNpb24tYWZpcC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWZpcC1sb2dve1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogYXV0bztcclxufSIsIi5hZmlwLWxvZ28ge1xuICB3aWR0aDogODAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogYXV0bztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/form-configuracion-afip/form-configuracion-afip.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/form-configuracion-afip/form-configuracion-afip.page.ts ***!
  \*************************************************************************/
/*! exports provided: FormConfiguracionAfipPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormConfiguracionAfipPage", function() { return FormConfiguracionAfipPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _models_comercio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/comercio */ "./src/app/models/comercio.ts");
/* harmony import */ var _Services_afip_afip_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/afip/afip-service.service */ "./src/app/Services/afip/afip-service.service.ts");
/* harmony import */ var _Services_comercios_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Services/comercios.service */ "./src/app/Services/comercios.service.ts");
/* harmony import */ var _Services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Services/toast.service */ "./src/app/Services/toast.service.ts");







let FormConfiguracionAfipPage = class FormConfiguracionAfipPage {
    constructor(modalCtrl, afipService, toastService, comercioService) {
        this.modalCtrl = modalCtrl;
        this.afipService = afipService;
        this.toastService = toastService;
        this.comercioService = comercioService;
        this.password = "";
        this.comercio = new _models_comercio__WEBPACK_IMPORTED_MODULE_3__["Comercio"]();
        this.comercio.asignarValores(this.comercioService.getSelectedCommerceValue());
    }
    ngOnInit() {
    }
    cerrar() {
        this.modalCtrl.dismiss();
    }
    validar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.modalCtrl.dismiss();
                this.toastService.mensaje("Conectado correctamente", "");
            }
            catch (err) {
                this.toastService.alert("Verificar Clave", "No se pudo conectar");
            }
        });
    }
    update() {
        this.comercioService.update(this.comercio);
    }
    desvincular() {
        this.comercio.afip = {
            token: "",
            puntoVenta: ""
        };
        this.comercioService.update(this.comercio);
    }
};
FormConfiguracionAfipPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _Services_afip_afip_service_service__WEBPACK_IMPORTED_MODULE_4__["AfipServiceService"] },
    { type: _Services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] },
    { type: _Services_comercios_service__WEBPACK_IMPORTED_MODULE_5__["ComerciosService"] }
];
FormConfiguracionAfipPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-configuracion-afip',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./form-configuracion-afip.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-configuracion-afip/form-configuracion-afip.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./form-configuracion-afip.page.scss */ "./src/app/form-configuracion-afip/form-configuracion-afip.page.scss")).default]
    })
], FormConfiguracionAfipPage);



/***/ })

}]);
//# sourceMappingURL=form-comercio-configuracion-form-comercio-configuracion-module.js.map