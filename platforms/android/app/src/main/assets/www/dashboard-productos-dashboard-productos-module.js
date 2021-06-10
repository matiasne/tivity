(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-productos-dashboard-productos-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard-productos/dashboard-productos.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard-productos/dashboard-productos.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Dashboard Productos</ion-title>    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  \n</ion-content>\n");

/***/ }),

/***/ "./src/app/dashboard-productos/dashboard-productos-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/dashboard-productos/dashboard-productos-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: DashboardProductosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardProductosPageRoutingModule", function() { return DashboardProductosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _dashboard_productos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-productos.page */ "./src/app/dashboard-productos/dashboard-productos.page.ts");




const routes = [
    {
        path: '',
        component: _dashboard_productos_page__WEBPACK_IMPORTED_MODULE_3__["DashboardProductosPage"]
    }
];
let DashboardProductosPageRoutingModule = class DashboardProductosPageRoutingModule {
};
DashboardProductosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DashboardProductosPageRoutingModule);



/***/ }),

/***/ "./src/app/dashboard-productos/dashboard-productos.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/dashboard-productos/dashboard-productos.module.ts ***!
  \*******************************************************************/
/*! exports provided: DashboardProductosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardProductosPageModule", function() { return DashboardProductosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _dashboard_productos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard-productos-routing.module */ "./src/app/dashboard-productos/dashboard-productos-routing.module.ts");
/* harmony import */ var _dashboard_productos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard-productos.page */ "./src/app/dashboard-productos/dashboard-productos.page.ts");







let DashboardProductosPageModule = class DashboardProductosPageModule {
};
DashboardProductosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _dashboard_productos_routing_module__WEBPACK_IMPORTED_MODULE_5__["DashboardProductosPageRoutingModule"]
        ],
        declarations: [_dashboard_productos_page__WEBPACK_IMPORTED_MODULE_6__["DashboardProductosPage"]]
    })
], DashboardProductosPageModule);



/***/ }),

/***/ "./src/app/dashboard-productos/dashboard-productos.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/dashboard-productos/dashboard-productos.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC1wcm9kdWN0b3MvZGFzaGJvYXJkLXByb2R1Y3Rvcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/dashboard-productos/dashboard-productos.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/dashboard-productos/dashboard-productos.page.ts ***!
  \*****************************************************************/
/*! exports provided: DashboardProductosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardProductosPage", function() { return DashboardProductosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");




let DashboardProductosPage = class DashboardProductosPage {
    constructor(router, modalController, navCtrl) {
        this.router = router;
        this.modalController = modalController;
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
    }
    nuevo() {
        this.router.navigate(['form-producto']);
    }
};
DashboardProductosPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
];
DashboardProductosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard-productos',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./dashboard-productos.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard-productos/dashboard-productos.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./dashboard-productos.page.scss */ "./src/app/dashboard-productos/dashboard-productos.page.scss")).default]
    })
], DashboardProductosPage);



/***/ })

}]);
//# sourceMappingURL=dashboard-productos-dashboard-productos-module.js.map