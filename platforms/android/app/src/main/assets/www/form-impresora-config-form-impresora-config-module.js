(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["form-impresora-config-form-impresora-config-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-impresora-config/form-impresora-config.page.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form-impresora-config/form-impresora-config.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button  (click)=\"atras()\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Impresora</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n  <ion-button class=\"button-rounded\" color=\"primary\" (click)=\"probar()\">Imprimir Prueba</ion-button> \n  \n  <div class=\"form-card\">        \n    <ion-item>\n      <ion-label>Conectar ESCPOS Bluetooth</ion-label>\n      <ion-toggle [(ngModel)]=\"impresora.escposBluetooth\" (ionChange)=\"guardar()\" [ngModelOptions]=\"{standalone: true}\"></ion-toggle>\n    </ion-item> \n            \n    <ion-item *ngIf=\"impresora.escposBluetooth\">\n      <ion-label position=\"floating\" >Mac *</ion-label>\n      <ion-input name=\"mac\" type=\"text\" (ionChange)=\"guardar()\" [(ngModel)]=\"impresora.mac\" required></ion-input>\n    </ion-item>  \n    \n  </div>\n\n\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"10\">\n        <p>\n          <b>Imprimir Comandas Automáticamente</b><br>\n          Automáticamente se imprimirá una comanda cada vez que se genere un pedido.\n        </p>\n      </ion-col>\n      <ion-col size=\"2\">\n        <ion-toggle [(ngModel)]=\"impresora.comandas\" (ionChange)=\"guardar()\" [ngModelOptions]=\"{standalone: true}\"></ion-toggle>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"10\">\n        <p>\n          <b>Imprimir Ticket Automáticamente </b><br>\n          Automáticamente se imprimirá un ticket al cobrar un pedido\n        </p>\n      </ion-col>\n      <ion-col size=\"2\">\n        <ion-toggle [(ngModel)]=\"impresora.pedidosFinalizar\" (ionChange)=\"guardar()\" [ngModelOptions]=\"{standalone: true}\"></ion-toggle>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  \n\n\n  <!--p>Para las siguientes configuraciones tener en cuenta que es necesario abrir la aplicación en un navegardor modo Kiosk</p>\n\n  <ion-item>\n    <ion-label>Subscripción Panel Comandas</ion-label>\n    <ion-toggle [(ngModel)]=\"impresora.subsComanda\"  [ngModelOptions]=\"{standalone: true}\"></ion-toggle>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Subscripción Panel Pedidos</ion-label>\n    <ion-toggle [(ngModel)]=\"impresora.subsPedido\"  [ngModelOptions]=\"{standalone: true}\"></ion-toggle>\n  </ion-item-->\n  \n  \n</ion-content>\n");

/***/ }),

/***/ "./src/app/Services/cocinas.service.ts":
/*!*********************************************!*\
  !*** ./src/app/Services/cocinas.service.ts ***!
  \*********************************************/
/*! exports provided: CocinasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CocinasService", function() { return CocinasService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base.service */ "./src/app/Services/base.service.ts");
/* harmony import */ var _comercios_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comercios.service */ "./src/app/Services/comercios.service.ts");





let CocinasService = class CocinasService extends _base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] {
    constructor(afs, comerciosService) {
        super(afs);
        this.afs = afs;
        this.comerciosService = comerciosService;
        this.comerciosService.getSelectedCommerce().subscribe(data => {
            // let comercio_seleccionadoId = localStorage.getItem('comercio_seleccionadoId'); 
            if (data) {
                this.setPath('comercios/' + data.id + '/cocinas');
            }
        });
    }
};
CocinasService.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _comercios_service__WEBPACK_IMPORTED_MODULE_4__["ComerciosService"] }
];
CocinasService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CocinasService);



/***/ }),

/***/ "./src/app/form-impresora-config/form-impresora-config-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/form-impresora-config/form-impresora-config-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: FormImpresoraConfigPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormImpresoraConfigPageRoutingModule", function() { return FormImpresoraConfigPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _form_impresora_config_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-impresora-config.page */ "./src/app/form-impresora-config/form-impresora-config.page.ts");




const routes = [
    {
        path: '',
        component: _form_impresora_config_page__WEBPACK_IMPORTED_MODULE_3__["FormImpresoraConfigPage"]
    }
];
let FormImpresoraConfigPageRoutingModule = class FormImpresoraConfigPageRoutingModule {
};
FormImpresoraConfigPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FormImpresoraConfigPageRoutingModule);



/***/ }),

/***/ "./src/app/form-impresora-config/form-impresora-config.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/form-impresora-config/form-impresora-config.module.ts ***!
  \***********************************************************************/
/*! exports provided: FormImpresoraConfigPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormImpresoraConfigPageModule", function() { return FormImpresoraConfigPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _form_impresora_config_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-impresora-config-routing.module */ "./src/app/form-impresora-config/form-impresora-config-routing.module.ts");
/* harmony import */ var _form_impresora_config_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form-impresora-config.page */ "./src/app/form-impresora-config/form-impresora-config.page.ts");







let FormImpresoraConfigPageModule = class FormImpresoraConfigPageModule {
};
FormImpresoraConfigPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _form_impresora_config_routing_module__WEBPACK_IMPORTED_MODULE_5__["FormImpresoraConfigPageRoutingModule"]
        ],
        declarations: [_form_impresora_config_page__WEBPACK_IMPORTED_MODULE_6__["FormImpresoraConfigPage"]]
    })
], FormImpresoraConfigPageModule);



/***/ }),

/***/ "./src/app/form-impresora-config/form-impresora-config.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/form-impresora-config/form-impresora-config.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0taW1wcmVzb3JhLWNvbmZpZy9mb3JtLWltcHJlc29yYS1jb25maWcucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/form-impresora-config/form-impresora-config.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/form-impresora-config/form-impresora-config.page.ts ***!
  \*********************************************************************/
/*! exports provided: FormImpresoraConfigPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormImpresoraConfigPage", function() { return FormImpresoraConfigPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _models_impresora__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/impresora */ "./src/app/models/impresora.ts");
/* harmony import */ var _Services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/authentication.service */ "./src/app/Services/authentication.service.ts");
/* harmony import */ var _Services_cocinas_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Services/cocinas.service */ "./src/app/Services/cocinas.service.ts");
/* harmony import */ var _Services_impresora_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Services/impresora.service */ "./src/app/Services/impresora.service.ts");







let FormImpresoraConfigPage = class FormImpresoraConfigPage {
    constructor(cocinasService, impresoraService, authService, navCtrl) {
        this.cocinasService = cocinasService;
        this.impresoraService = impresoraService;
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.cocinas = [];
        this.conexionActual = false;
        this.impresora = new _models_impresora__WEBPACK_IMPORTED_MODULE_3__["Impresora"]();
        this.impresoraService.obsEstadoImpresora().subscribe(data => {
            this.conexionActual = data.conectada;
        });
    }
    ngOnInit() {
        this.cocinasService.list().subscribe((data) => {
            this.cocinas = data;
            this.impresora = this.impresoraService.obtenerImpresora();
            console.log(this.impresora);
        });
    }
    guardar() {
        if (this.impresora.escposBluetooth && this.impresora.mac == "") {
            alert("Ingrese un valor de MAC ADDRESS");
            return;
        }
        this.impresoraService.guardarImpresora(this.impresora);
    }
    atras() {
        this.navCtrl.back();
    }
    probar() {
        this.impresoraService.impresionPrueba(this.authService.getEmail());
    }
};
FormImpresoraConfigPage.ctorParameters = () => [
    { type: _Services_cocinas_service__WEBPACK_IMPORTED_MODULE_5__["CocinasService"] },
    { type: _Services_impresora_service__WEBPACK_IMPORTED_MODULE_6__["ImpresoraService"] },
    { type: _Services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
FormImpresoraConfigPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-impresora-config',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./form-impresora-config.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-impresora-config/form-impresora-config.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./form-impresora-config.page.scss */ "./src/app/form-impresora-config/form-impresora-config.page.scss")).default]
    })
], FormImpresoraConfigPage);



/***/ })

}]);
//# sourceMappingURL=form-impresora-config-form-impresora-config-module.js.map