(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["form-impresora-config-form-impresora-config-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-impresora-config/form-impresora-config.page.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form-impresora-config/form-impresora-config.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title  size=\"small\">Impresora</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"10\">\n        <p>\n          <b>Habilitar impresión</b><br>\n          Imprime tus comandas y facturas.\n        </p>\n      </ion-col>\n      <ion-col size=\"2\">\n        <ion-toggle [(ngModel)]=\"comercio.config.impresion\" (ionChange)=\"update()\"  [ngModelOptions]=\"{standalone: true}\"></ion-toggle>    \n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-button *ngIf=\"impresora.address == '' && comercio.config.impresion\" class=\"button-rounded\" color=\"primary\" (click)=\"agregarImpresora()\">Agregar Impresora Bluetooth</ion-button>\n\n  <span *ngIf=\"comercio.config.impresion && impresora.address!=''\">\n    <ion-item-sliding class=\"item-card fivePhasesFadeIn\"> \n      <app-item-bluetooth-printer\n        [item] = \"impresora\"\n        (seleccionar) = \"seleccionar(impresora)\"\n      ></app-item-bluetooth-printer>\n      <ion-item-options side=\"end\" (click)=\"eliminar()\">\n        <ion-item-option color=\"danger\"><ion-icon name=\"trash\" ></ion-icon>Eliminar</ion-item-option>\n      </ion-item-options>  \n    </ion-item-sliding>\n    <ion-button class=\"button-rounded\" color=\"primary\" (click)=\"conectar()\">Probar impresión</ion-button> \n  </span>\n    \n\n\n  \n</ion-content>\n");

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
/* harmony import */ var _Components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Components/components.module */ "./src/app/Components/components.module.ts");








let FormImpresoraConfigPageModule = class FormImpresoraConfigPageModule {
};
FormImpresoraConfigPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _Components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
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
/* harmony import */ var _form_impresora_form_impresora_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../form-impresora/form-impresora.page */ "./src/app/form-impresora/form-impresora.page.ts");
/* harmony import */ var _list_select_bluetooth_device_list_select_bluetooth_device_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../list-select-bluetooth-device/list-select-bluetooth-device.page */ "./src/app/list-select-bluetooth-device/list-select-bluetooth-device.page.ts");
/* harmony import */ var _models_bluetooth_impresora__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/bluetooth-impresora */ "./src/app/models/bluetooth-impresora.ts");
/* harmony import */ var _models_comercio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/comercio */ "./src/app/models/comercio.ts");
/* harmony import */ var _Services_comercios_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Services/comercios.service */ "./src/app/Services/comercios.service.ts");
/* harmony import */ var _Services_impresora_impresora_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Services/impresora/impresora.service */ "./src/app/Services/impresora/impresora.service.ts");









let FormImpresoraConfigPage = class FormImpresoraConfigPage {
    constructor(modalCtrl, impresoraService, comercioService) {
        this.modalCtrl = modalCtrl;
        this.impresoraService = impresoraService;
        this.comercioService = comercioService;
        this.cocinas = [];
        this.impresora = new _models_bluetooth_impresora__WEBPACK_IMPORTED_MODULE_5__["BluettothImpresora"]();
        this.impresora = this.impresoraService.getImpresora();
        console.log(this.impresora);
        this.comercio = new _models_comercio__WEBPACK_IMPORTED_MODULE_6__["Comercio"]();
        this.comercioService.getSelectedCommerce().subscribe(data => {
            // let comercio_seleccionadoId = localStorage.getItem('comercio_seleccionadoId'); 
            if (data) {
                this.comercio.asignarValores(data);
            }
        });
    }
    ngOnInit() {
    }
    seleccionar(printer) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _form_impresora_form_impresora_page__WEBPACK_IMPORTED_MODULE_3__["FormImpresoraPage"],
                componentProps: { dispositivo: printer }
            });
            modal.onDidDismiss()
                .then((retorno) => {
                if (retorno.data) {
                    this.impresora.asignarValores(retorno.data);
                    this.impresoraService.guardarImpresora(retorno.data);
                }
            });
            return yield modal.present();
        });
    }
    agregarImpresora() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _list_select_bluetooth_device_list_select_bluetooth_device_page__WEBPACK_IMPORTED_MODULE_4__["ListSelectBluetoothDevicePage"],
                id: 'list-impresoras'
            });
            modal.onDidDismiss()
                .then((retorno) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (retorno.data) {
                    const modal = yield this.modalCtrl.create({
                        component: _form_impresora_form_impresora_page__WEBPACK_IMPORTED_MODULE_3__["FormImpresoraPage"],
                        componentProps: { dispositivo: retorno.data }
                    });
                    modal.onDidDismiss()
                        .then((retorno) => {
                        this.impresora.asignarValores(retorno.data);
                        this.impresoraService.guardarImpresora(retorno.data);
                    });
                    return yield modal.present();
                }
            }));
            return yield modal.present();
        });
    }
    conectar() {
        this.impresoraService.impresionPrueba("usuario prueba");
    }
    update() {
        this.comercioService.update(this.comercio);
    }
    eliminar() {
        this.impresora = new _models_bluetooth_impresora__WEBPACK_IMPORTED_MODULE_5__["BluettothImpresora"]();
        this.impresoraService.eliminarImpresora();
    }
};
FormImpresoraConfigPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _Services_impresora_impresora_service__WEBPACK_IMPORTED_MODULE_8__["ImpresoraService"] },
    { type: _Services_comercios_service__WEBPACK_IMPORTED_MODULE_7__["ComerciosService"] }
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