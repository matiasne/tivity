(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-subscripciones-dashboard-subscripciones-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard-subscripciones/dashboard-subscripciones.page.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard-subscripciones/dashboard-subscripciones.page.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title  size=\"small\">Dashboard Subscripciones</ion-title>    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  Datos y estadisticas de subscripciones\n</ion-content>\n");

/***/ }),

/***/ "./src/app/dashboard-subscripciones/dashboard-subscripciones-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/dashboard-subscripciones/dashboard-subscripciones-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: DashboardSubscripcionesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardSubscripcionesPageRoutingModule", function() { return DashboardSubscripcionesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _dashboard_subscripciones_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-subscripciones.page */ "./src/app/dashboard-subscripciones/dashboard-subscripciones.page.ts");




const routes = [
    {
        path: '',
        component: _dashboard_subscripciones_page__WEBPACK_IMPORTED_MODULE_3__["DashboardSubscripcionesPage"]
    }
];
let DashboardSubscripcionesPageRoutingModule = class DashboardSubscripcionesPageRoutingModule {
};
DashboardSubscripcionesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DashboardSubscripcionesPageRoutingModule);



/***/ }),

/***/ "./src/app/dashboard-subscripciones/dashboard-subscripciones.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/dashboard-subscripciones/dashboard-subscripciones.module.ts ***!
  \*****************************************************************************/
/*! exports provided: DashboardSubscripcionesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardSubscripcionesPageModule", function() { return DashboardSubscripcionesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _dashboard_subscripciones_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard-subscripciones-routing.module */ "./src/app/dashboard-subscripciones/dashboard-subscripciones-routing.module.ts");
/* harmony import */ var _dashboard_subscripciones_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard-subscripciones.page */ "./src/app/dashboard-subscripciones/dashboard-subscripciones.page.ts");







let DashboardSubscripcionesPageModule = class DashboardSubscripcionesPageModule {
};
DashboardSubscripcionesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _dashboard_subscripciones_routing_module__WEBPACK_IMPORTED_MODULE_5__["DashboardSubscripcionesPageRoutingModule"]
        ],
        declarations: [_dashboard_subscripciones_page__WEBPACK_IMPORTED_MODULE_6__["DashboardSubscripcionesPage"]]
    })
], DashboardSubscripcionesPageModule);



/***/ }),

/***/ "./src/app/dashboard-subscripciones/dashboard-subscripciones.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/dashboard-subscripciones/dashboard-subscripciones.page.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC1zdWJzY3JpcGNpb25lcy9kYXNoYm9hcmQtc3Vic2NyaXBjaW9uZXMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/dashboard-subscripciones/dashboard-subscripciones.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/dashboard-subscripciones/dashboard-subscripciones.page.ts ***!
  \***************************************************************************/
/*! exports provided: DashboardSubscripcionesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardSubscripcionesPage", function() { return DashboardSubscripcionesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _list_subscripciones_list_subscripciones_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../list-subscripciones/list-subscripciones.page */ "./src/app/list-subscripciones/list-subscripciones.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");





let DashboardSubscripcionesPage = class DashboardSubscripcionesPage {
    constructor(router, modalController) {
        this.router = router;
        this.modalController = modalController;
    }
    ngOnInit() {
    }
    buscar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _list_subscripciones_list_subscripciones_page__WEBPACK_IMPORTED_MODULE_2__["ListSubscripcionesPage"]
            });
            modal.onDidDismiss()
                .then((retorno) => {
                console.log(retorno.data.item);
                if (retorno.data)
                    this.router.navigate(['details-subscripcion', { "id": retorno.data.item.id }]);
            });
            return yield modal.present();
        });
    }
    nuevo() {
        this.router.navigate(['form-subscripcion']);
    }
};
DashboardSubscripcionesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
DashboardSubscripcionesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard-subscripciones',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./dashboard-subscripciones.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard-subscripciones/dashboard-subscripciones.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./dashboard-subscripciones.page.scss */ "./src/app/dashboard-subscripciones/dashboard-subscripciones.page.scss")).default]
    })
], DashboardSubscripcionesPage);



/***/ })

}]);
//# sourceMappingURL=dashboard-subscripciones-dashboard-subscripciones-module.js.map