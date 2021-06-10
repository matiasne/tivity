(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["details-producto-details-producto-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/details-producto/details-producto.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/details-producto/details-producto.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Detalle Producto</ion-title>    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/details-producto/details-producto-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/details-producto/details-producto-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: DetailsProductoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsProductoPageRoutingModule", function() { return DetailsProductoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _details_producto_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./details-producto.page */ "./src/app/details-producto/details-producto.page.ts");




const routes = [
    {
        path: '',
        component: _details_producto_page__WEBPACK_IMPORTED_MODULE_3__["DetailsProductoPage"]
    }
];
let DetailsProductoPageRoutingModule = class DetailsProductoPageRoutingModule {
};
DetailsProductoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DetailsProductoPageRoutingModule);



/***/ }),

/***/ "./src/app/details-producto/details-producto.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/details-producto/details-producto.module.ts ***!
  \*************************************************************/
/*! exports provided: DetailsProductoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsProductoPageModule", function() { return DetailsProductoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _details_producto_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./details-producto-routing.module */ "./src/app/details-producto/details-producto-routing.module.ts");
/* harmony import */ var _details_producto_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./details-producto.page */ "./src/app/details-producto/details-producto.page.ts");







let DetailsProductoPageModule = class DetailsProductoPageModule {
};
DetailsProductoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _details_producto_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailsProductoPageRoutingModule"]
        ],
        declarations: [_details_producto_page__WEBPACK_IMPORTED_MODULE_6__["DetailsProductoPage"]]
    })
], DetailsProductoPageModule);



/***/ }),

/***/ "./src/app/details-producto/details-producto.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/details-producto/details-producto.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbHMtcHJvZHVjdG8vZGV0YWlscy1wcm9kdWN0by5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/details-producto/details-producto.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/details-producto/details-producto.page.ts ***!
  \***********************************************************/
/*! exports provided: DetailsProductoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsProductoPage", function() { return DetailsProductoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let DetailsProductoPage = class DetailsProductoPage {
    constructor() { }
    ngOnInit() {
    }
};
DetailsProductoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-details-producto',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./details-producto.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/details-producto/details-producto.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./details-producto.page.scss */ "./src/app/details-producto/details-producto.page.scss")).default]
    })
], DetailsProductoPage);



/***/ })

}]);
//# sourceMappingURL=details-producto-details-producto-module.js.map