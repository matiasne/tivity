(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["form-comercio-configuracion-form-comercio-configuracion-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-comercio-configuracion/form-comercio-configuracion.page.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form-comercio-configuracion/form-comercio-configuracion.page.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Configuración</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n\r\n  <!--ion-item *ngIf=\"rolActual == 'Administrador'\">\r\n    <ion-label>Habilitar Productos</ion-label>\r\n    <ion-toggle [(ngModel)]=\"comercio.config.productos\" (ionChange)=\"update()\"  [ngModelOptions]=\"{standalone: true}\"></ion-toggle>\r\n  </ion-item>\r\n\r\n  <ion-item *ngIf=\"rolActual == 'Administrador'\">\r\n    <ion-label>Habilitar Servicios</ion-label>\r\n    <ion-toggle [(ngModel)]=\"comercio.config.servicios\" (ionChange)=\"update()\"  [ngModelOptions]=\"{standalone: true}\"></ion-toggle>\r\n  </ion-item-->\r\n\r\n\r\n  <ion-button *ngIf=\"rolActual.rol == 'Administrador'\" class=\"button-rounded\"  (click)=\"editarComercio()\">Datos Comercio</ion-button>\r\n\r\n\r\n  <ion-button *ngIf=\"rolActual.rol != 'Administrador'\" class=\"button-rounded\"  color=\"danger\" (click)=\"desvincular()\"><ion-icon name=\"trash\" ></ion-icon>Desvincular</ion-button>\r\n\r\n  <ion-grid *ngIf=\"rolActual.rol == 'Administrador'\">\r\n    <ion-row>\r\n      <ion-col size=\"10\">\r\n        <p>\r\n          <b>Cobrar Sin realizar pedido</b><br>\r\n         Desde el catálogo podrás armar el carrito y cobrarlo directamente sin utilizar el panel de pedidos.\r\n        </p>\r\n      </ion-col>\r\n      <ion-col size=\"2\">\r\n        <ion-toggle [(ngModel)]=\"comercio.config.cobrarDirectamente\" (ionChange)=\"update()\"  [ngModelOptions]=\"{standalone: true}\"></ion-toggle>    \r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  \r\n  <ion-grid *ngIf=\"rolActual.rol == 'Administrador'\">\r\n    <ion-row>\r\n      <ion-col size=\"10\">\r\n        <p>\r\n          <b>Habilitar Mesas</b><br>\r\n          Podrá asignar una mesa a cada pedido y gestionar los mismos en base a este parámetro\r\n        </p>\r\n       \r\n      </ion-col>\r\n      <ion-col size=\"2\">\r\n        <ion-toggle [(ngModel)]=\"comercio.config.mesas\" (ionChange)=\"update()\"  [ngModelOptions]=\"{standalone: true}\"></ion-toggle>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-button *ngIf=\"comercio.config.mesas  && rolActual.rol == 'Administrador'\" class=\"button-rounded\"    (click)=\"openEditMesas()\">Editar Mesas</ion-button>\r\n  </ion-grid>\r\n\r\n  <ion-grid *ngIf=\"rolActual.rol == 'Administrador'\">\r\n    <ion-row>\r\n      <ion-col size=\"10\">\r\n        <p>\r\n          <b>Panel Comandas</b><br>\r\n          Desde un nuevo panel podrá gestionar el estado de sus pedidos. Ideal para una o varias cocinas\r\n        </p>\r\n        \r\n      </ion-col>\r\n      <ion-col size=\"2\">\r\n        <ion-toggle [(ngModel)]=\"comercio.config.comandas\" (ionChange)=\"update()\"  [ngModelOptions]=\"{standalone: true}\"></ion-toggle>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-button *ngIf=\"comercio.config.comandas && rolActual.rol == 'Administrador'\" class=\"button-rounded\"    (click)=\"openEditCocinas()\">Editar Cocinas</ion-button>\r\n  </ion-grid>\r\n\r\n  <ion-grid *ngIf=\"rolActual.rol == 'Administrador'\">\r\n    <ion-row>\r\n      <ion-col size=\"10\">\r\n        <p>\r\n          <b>Habilitar Gestión Stock</b><br>\r\n          Agregue stock a cada producto manualmente. El sistema resta automáticamente el stock cada vez que genera un pedido\r\n        </p>\r\n      </ion-col>\r\n      <ion-col size=\"2\">\r\n        <ion-toggle [(ngModel)]=\"comercio.config.stock\" (ionChange)=\"update()\"  [ngModelOptions]=\"{standalone: true}\"></ion-toggle>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-grid *ngIf=\"rolActual.rol == 'Administrador'\">\r\n    <ion-row>\r\n      <ion-col size=\"10\">\r\n        <p>\r\n          <b>Habilitar Clientes</b><br>\r\n          Realice un seguimiento de cada uno de sus clientes.\r\n        </p>\r\n      </ion-col>\r\n      <ion-col size=\"2\">\r\n        <ion-toggle [(ngModel)]=\"comercio.config.clientes\" (ionChange)=\"update()\"  [ngModelOptions]=\"{standalone: true}\"></ion-toggle>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n \r\n \r\n\r\n  <ion-grid *ngIf=\"rolActual.rol == 'Administrador' && comercio.config.clientes\">\r\n    <ion-row>\r\n      <ion-col size=\"10\">\r\n        <p>\r\n          <b>Habilitar Beneficios de clientes</b><br>\r\n          Genere y registre beneficios y descuentos a sus clientes.\r\n          \r\n        </p>\r\n      </ion-col>\r\n      <ion-col size=\"2\">\r\n        <ion-toggle [(ngModel)]=\"comercio.config.beneficiosClientes\" (ionChange)=\"update()\"  [ngModelOptions]=\"{standalone: true}\"></ion-toggle>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-button *ngIf=\"comercio.config.beneficiosClientes  && rolActual.rol == 'Administrador'\" class=\"button-rounded\"    (click)=\"openBeneficiosClientes()\">Editar Beneficios</ion-button>\r\n  </ion-grid>\r\n\r\n  <ion-grid *ngIf=\"rolActual.rol == 'Administrador' && comercio.config.clientes\">\r\n    <ion-row>\r\n      <ion-col size=\"10\">\r\n        <p>\r\n          <b>Habilitar Beneficio por puntaje</b><br>\r\n          Cree y administre su propio club de puntos con acciones automatizadas\r\n          \r\n        </p>\r\n      </ion-col>\r\n      <ion-col size=\"2\">\r\n        <ion-toggle [(ngModel)]=\"comercio.config.beneficiosPorPuntaje\" (ionChange)=\"update()\"  [ngModelOptions]=\"{standalone: true}\"></ion-toggle>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-button *ngIf=\"comercio.config.beneficiosPorPuntaje  && rolActual.rol == 'Administrador'\" class=\"button-rounded\"    (click)=\"openBeneficiosPuntaje()\">Editar Puntaje y Beneficios</ion-button>\r\n  </ion-grid>\r\n\r\n \r\n  <ion-grid *ngIf=\"rolActual.rol == 'Administrador'\">\r\n    <ion-row>\r\n      <ion-col size=\"10\">\r\n        <p>\r\n          <b>Habilitar Movimientos de Caja</b><br>\r\n          Obtenga un detalle de cada movimiento que se generó en las cajas de su local\r\n        </p>\r\n      </ion-col>\r\n      <ion-col size=\"2\">\r\n        <ion-toggle [(ngModel)]=\"comercio.config.movimientosCajas\" (ionChange)=\"update()\"  [ngModelOptions]=\"{standalone: true}\"></ion-toggle>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n\r\n  <ion-grid *ngIf=\"rolActual.rol == 'Administrador'\">\r\n    <ion-row>\r\n      <ion-col size=\"10\">\r\n        <p>\r\n          <b>Habilitar Facturación AFIP</b><br>\r\n          Realize cuando quiera factuaras electrónicas de cada uno de sus pedidos.\r\n        </p>\r\n      </ion-col>\r\n      <ion-col size=\"2\">\r\n        <ion-toggle [(ngModel)]=\"comercio.config.afip\" (ionChange)=\"update()\"  [ngModelOptions]=\"{standalone: true}\"></ion-toggle>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n\r\n  <ion-grid *ngIf=\"rolActual.rol == 'Administrador'\">\r\n    <ion-row>\r\n      <ion-col size=\"10\">\r\n        <p>\r\n          <b>Sincronizar Productos con Woocommerce</b><br>\r\n          Sincronize su tienda online, gestione y reciba sus pedidos.\r\n          \r\n        </p>\r\n      </ion-col>\r\n      <ion-col size=\"2\">\r\n        <ion-toggle [(ngModel)]=\"comercio.config.woocommerce\" (ionChange)=\"update()\"  [ngModelOptions]=\"{standalone: true}\"></ion-toggle>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-button *ngIf=\"comercio.config.woocommerce\" class=\"button-rounded\" (click)=\"openEditWoocommerce()\">Configuración Woocommerce</ion-button>\r\n  </ion-grid>\r\n\r\n\r\n\r\n  <ion-button class=\"button-rounded\" *ngIf=\"rolActual.rol == 'Administrador'\"    (click)=\"openEditOpciones()\">Editar Grupo Opciones</ion-button>\r\n  <!--ion-button class=\"button-rounded\" *ngIf=\"rolActual.rol == 'Administrador'\"    (click)=\"openEditPedidos()\">Configurar Pedidos</ion-button-->\r\n  <ion-button class=\"button-rounded\" *ngIf=\"rolActual.rol == 'Administrador'\"   (click)=\"openEditHorarios()\">Editar Horarios</ion-button>\r\n  \r\n  <ion-button class=\"button-rounded\" *ngIf=\"rolActual.rol == 'Administrador'\"   (click)=\"linkWhatsapp()\">Link Whatsapp</ion-button>\r\n  <ion-button class=\"button-rounded\" *ngIf=\"rolActual.rol == 'Administrador'\"   (click)=\"openEditCategorias()\">Editar Categorias</ion-button>\r\n  \r\n\r\n  <ion-button class=\"button-rounded\"    (click)=\"verImpresora()\">Impresora</ion-button>\r\n  \r\n  <ion-button *ngIf=\"rolActual.rol == 'Administrador'\"  class=\"button-rounded\" color=\"danger\" (click)=\"elimiar()\">Eliminar Comercio</ion-button>\r\n\r\n   \r\n</ion-content> \r\n");

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









let FormComercioConfiguracionPage = class FormComercioConfiguracionPage {
    constructor(comerciosService, route, router, authService, modalCtrl, alertController, rolesService) {
        this.comerciosService = comerciosService;
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.modalCtrl = modalCtrl;
        this.alertController = alertController;
        this.rolesService = rolesService;
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
};
FormComercioConfiguracionPage.ctorParameters = () => [
    { type: _Services_comercios_service__WEBPACK_IMPORTED_MODULE_2__["ComerciosService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _Services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
    { type: _Services_roles_service__WEBPACK_IMPORTED_MODULE_8__["RolesService"] }
];
FormComercioConfiguracionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-comercio-configuracion',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./form-comercio-configuracion.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-comercio-configuracion/form-comercio-configuracion.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./form-comercio-configuracion.page.scss */ "./src/app/form-comercio-configuracion/form-comercio-configuracion.page.scss")).default]
    })
], FormComercioConfiguracionPage);



/***/ })

}]);
//# sourceMappingURL=form-comercio-configuracion-form-comercio-configuracion-module.js.map