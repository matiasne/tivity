(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["form-estilo-configuracion-form-estilo-configuracion-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-estilo-configuracion/form-estilo-configuracion.page.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form-estilo-configuracion/form-estilo-configuracion.page.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title  size=\"small\">form-estilo-configuracion</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div>\n    <ion-text color=\"primary\">\n      <h4>Hexa Color Primary</h4> \n    </ion-text>             \n    <ion-item>\n      <ion-input type=\"color\" [(ngModel)]=\"comercio.colores.primary\" required></ion-input>\n    </ion-item>    \n  </div>\n\n  <div>\n    <ion-text color=\"primary\">\n      <h4>Hexa Color Secundary</h4> \n    </ion-text>             \n    <ion-item>\n      <ion-input type=\"color\" [(ngModel)]=\"comercio.colores.secondary\" required></ion-input>\n    </ion-item>    \n  </div>\n\n  <div>\n    <ion-text color=\"primary\">\n      <h4>Hexa Color Tertiary</h4> \n    </ion-text>             \n    <ion-item>\n      <ion-input type=\"color\" [(ngModel)]=\"comercio.colores.tertiary\" required></ion-input>\n    </ion-item>    \n  </div>\n\n  <div>\n    <ion-text color=\"primary\">\n      <h4>Hexa Color Success</h4> \n    </ion-text>             \n    <ion-item>\n      <ion-input type=\"color\" [(ngModel)]=\"comercio.colores.success\" required></ion-input>\n    </ion-item>    \n  </div>\n\n  <div>\n    <ion-text color=\"primary\">\n      <h4>Hexa Color Warning</h4> \n    </ion-text>             \n    <ion-item>\n      <ion-input type=\"color\" [(ngModel)]=\"comercio.colores.warning\" required></ion-input>\n    </ion-item>    \n  </div>\n\n\n  <div>\n    <ion-text color=\"primary\">\n      <h4>Hexa Color Danger</h4> \n    </ion-text>             \n    <ion-item>\n      <ion-input type=\"color\" [(ngModel)]=\"comercio.colores.danger\" required></ion-input>\n    </ion-item>    \n  </div>\n\n  <div>\n    <ion-text color=\"primary\">\n      <h4>Hexa Color Light</h4> \n    </ion-text>             \n    <ion-item>\n      <ion-input type=\"color\" [(ngModel)]=\"comercio.colores.light\" required></ion-input>\n    </ion-item>    \n  </div>\n\n  <div>\n    <ion-text color=\"primary\">\n      <h4>Hexa Color Medium</h4> \n    </ion-text>             \n    <ion-item>\n      <ion-input type=\"color\" [(ngModel)]=\"comercio.colores.medium\" required></ion-input>\n    </ion-item>    \n  </div>\n\n  <div>\n    <ion-text color=\"primary\">\n      <h4>Hexa Color Dark</h4> \n    </ion-text>             \n    <ion-item>\n      <ion-input type=\"color\" [(ngModel)]=\"comercio.colores.dark\" required></ion-input>\n    </ion-item>    \n  </div>\n\n</ion-content>\n<ion-footer class=\"ion-no-border ion-padding\">\n  <ion-toolbar> \n    <ion-button slot=\"end\" (click)=\"guardar()\">Guardar</ion-button>  \n    <ion-button slot=\"start\"  color=\"light\" (click)=\"cancelar()\">Cancelar</ion-button>\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "./src/app/form-estilo-configuracion/form-estilo-configuracion-routing.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/form-estilo-configuracion/form-estilo-configuracion-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: FormEstiloConfiguracionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormEstiloConfiguracionPageRoutingModule", function() { return FormEstiloConfiguracionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _form_estilo_configuracion_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-estilo-configuracion.page */ "./src/app/form-estilo-configuracion/form-estilo-configuracion.page.ts");




const routes = [
    {
        path: '',
        component: _form_estilo_configuracion_page__WEBPACK_IMPORTED_MODULE_3__["FormEstiloConfiguracionPage"]
    }
];
let FormEstiloConfiguracionPageRoutingModule = class FormEstiloConfiguracionPageRoutingModule {
};
FormEstiloConfiguracionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FormEstiloConfiguracionPageRoutingModule);



/***/ }),

/***/ "./src/app/form-estilo-configuracion/form-estilo-configuracion.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/form-estilo-configuracion/form-estilo-configuracion.module.ts ***!
  \*******************************************************************************/
/*! exports provided: FormEstiloConfiguracionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormEstiloConfiguracionPageModule", function() { return FormEstiloConfiguracionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _form_estilo_configuracion_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-estilo-configuracion-routing.module */ "./src/app/form-estilo-configuracion/form-estilo-configuracion-routing.module.ts");
/* harmony import */ var _form_estilo_configuracion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form-estilo-configuracion.page */ "./src/app/form-estilo-configuracion/form-estilo-configuracion.page.ts");







let FormEstiloConfiguracionPageModule = class FormEstiloConfiguracionPageModule {
};
FormEstiloConfiguracionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _form_estilo_configuracion_routing_module__WEBPACK_IMPORTED_MODULE_5__["FormEstiloConfiguracionPageRoutingModule"]
        ],
        declarations: [_form_estilo_configuracion_page__WEBPACK_IMPORTED_MODULE_6__["FormEstiloConfiguracionPage"]]
    })
], FormEstiloConfiguracionPageModule);



/***/ }),

/***/ "./src/app/form-estilo-configuracion/form-estilo-configuracion.page.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/form-estilo-configuracion/form-estilo-configuracion.page.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0tZXN0aWxvLWNvbmZpZ3VyYWNpb24vZm9ybS1lc3RpbG8tY29uZmlndXJhY2lvbi5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/form-estilo-configuracion/form-estilo-configuracion.page.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/form-estilo-configuracion/form-estilo-configuracion.page.ts ***!
  \*****************************************************************************/
/*! exports provided: FormEstiloConfiguracionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormEstiloConfiguracionPage", function() { return FormEstiloConfiguracionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _models_comercio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/comercio */ "./src/app/models/comercio.ts");
/* harmony import */ var _Services_comercios_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/comercios.service */ "./src/app/Services/comercios.service.ts");





let FormEstiloConfiguracionPage = class FormEstiloConfiguracionPage {
    constructor(comerciosService, navCtrl) {
        this.comerciosService = comerciosService;
        this.navCtrl = navCtrl;
        this.comercio = new _models_comercio__WEBPACK_IMPORTED_MODULE_3__["Comercio"]();
        this.comercio = this.comerciosService.comercio;
    }
    ngOnInit() {
    }
    guardar() {
        this.comerciosService.update(this.comercio);
        this.navCtrl.back();
    }
    cancelar() {
        this.navCtrl.back();
    }
};
FormEstiloConfiguracionPage.ctorParameters = () => [
    { type: _Services_comercios_service__WEBPACK_IMPORTED_MODULE_4__["ComerciosService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
FormEstiloConfiguracionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-estilo-configuracion',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./form-estilo-configuracion.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-estilo-configuracion/form-estilo-configuracion.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./form-estilo-configuracion.page.scss */ "./src/app/form-estilo-configuracion/form-estilo-configuracion.page.scss")).default]
    })
], FormEstiloConfiguracionPage);



/***/ })

}]);
//# sourceMappingURL=form-estilo-configuracion-form-estilo-configuracion-module.js.map