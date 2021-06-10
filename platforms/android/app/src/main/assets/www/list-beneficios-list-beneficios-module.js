(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-beneficios-list-beneficios-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/list-beneficios/list-beneficios.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/list-beneficios/list-beneficios.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Beneficios</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-item-sliding *ngFor=\"let beneficio of beneficios\" class=\"item-card\">\n    <ion-item  class=\"item-card\">  \n      <div slot=\"start\">\n        <ion-icon name=\"file-tray-full-outline\"></ion-icon>\n      </div>      \n      <ion-label text-wrap>\n        <p *ngIf=\"beneficio.disparador == enumBeneficioDisparador.compraMayorA\">El beneficio se generará si el cliente realiza una compra mayor a: {{beneficio.monto}}</p>\n        <p *ngIf=\"beneficio.disparador == enumBeneficioDisparador.primerRegitro\">El beneficio se generará al registrar por primera vez el cliente</p>\n        <b>{{beneficio.descripcion}}</b>         \n      </ion-label> \n    </ion-item>  \n    <ion-item-options side=\"end\">\n      <ion-item-option  (click)=\"editar(beneficio)\"><ion-icon name=\"create\" ></ion-icon>Editar</ion-item-option>\n    </ion-item-options>\n  </ion-item-sliding>\n  \n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"openAddBeneficio()\">\n    <ion-fab-button>\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/list-beneficios/list-beneficios-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/list-beneficios/list-beneficios-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ListBeneficiosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListBeneficiosPageRoutingModule", function() { return ListBeneficiosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _list_beneficios_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-beneficios.page */ "./src/app/list-beneficios/list-beneficios.page.ts");




const routes = [
    {
        path: '',
        component: _list_beneficios_page__WEBPACK_IMPORTED_MODULE_3__["ListBeneficiosPage"]
    }
];
let ListBeneficiosPageRoutingModule = class ListBeneficiosPageRoutingModule {
};
ListBeneficiosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ListBeneficiosPageRoutingModule);



/***/ }),

/***/ "./src/app/list-beneficios/list-beneficios.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/list-beneficios/list-beneficios.module.ts ***!
  \***********************************************************/
/*! exports provided: ListBeneficiosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListBeneficiosPageModule", function() { return ListBeneficiosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _list_beneficios_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-beneficios-routing.module */ "./src/app/list-beneficios/list-beneficios-routing.module.ts");
/* harmony import */ var _list_beneficios_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-beneficios.page */ "./src/app/list-beneficios/list-beneficios.page.ts");







let ListBeneficiosPageModule = class ListBeneficiosPageModule {
};
ListBeneficiosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _list_beneficios_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListBeneficiosPageRoutingModule"]
        ],
        declarations: [_list_beneficios_page__WEBPACK_IMPORTED_MODULE_6__["ListBeneficiosPage"]]
    })
], ListBeneficiosPageModule);



/***/ }),

/***/ "./src/app/list-beneficios/list-beneficios.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/list-beneficios/list-beneficios.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3QtYmVuZWZpY2lvcy9saXN0LWJlbmVmaWNpb3MucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/list-beneficios/list-beneficios.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/list-beneficios/list-beneficios.page.ts ***!
  \*********************************************************/
/*! exports provided: ListBeneficiosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListBeneficiosPage", function() { return ListBeneficiosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _form_beneficio_form_beneficio_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../form-beneficio/form-beneficio.page */ "./src/app/form-beneficio/form-beneficio.page.ts");
/* harmony import */ var _models_beneficio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/beneficio */ "./src/app/models/beneficio.ts");
/* harmony import */ var _Services_beneficios_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Services/beneficios.service */ "./src/app/Services/beneficios.service.ts");






let ListBeneficiosPage = class ListBeneficiosPage {
    constructor(beneficiosService, modalController) {
        this.beneficiosService = beneficiosService;
        this.modalController = modalController;
        this.enumBeneficioDisparador = _models_beneficio__WEBPACK_IMPORTED_MODULE_4__["EnumBeneficioDisparador"];
        this.beneficios = [];
        this.beneficiosService.list().subscribe(data => {
            this.beneficios = data;
        });
    }
    ngOnInit() {
    }
    editar(beneficio) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _form_beneficio_form_beneficio_page__WEBPACK_IMPORTED_MODULE_3__["FormBeneficioPage"],
                componentProps: {
                    beneficio: beneficio
                }
            });
            return yield modal.present();
        });
    }
    openAddBeneficio() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _form_beneficio_form_beneficio_page__WEBPACK_IMPORTED_MODULE_3__["FormBeneficioPage"]
            });
            return yield modal.present();
        });
    }
};
ListBeneficiosPage.ctorParameters = () => [
    { type: _Services_beneficios_service__WEBPACK_IMPORTED_MODULE_5__["BeneficiosService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
ListBeneficiosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-beneficios',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./list-beneficios.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/list-beneficios/list-beneficios.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./list-beneficios.page.scss */ "./src/app/list-beneficios/list-beneficios.page.scss")).default]
    })
], ListBeneficiosPage);



/***/ })

}]);
//# sourceMappingURL=list-beneficios-list-beneficios-module.js.map