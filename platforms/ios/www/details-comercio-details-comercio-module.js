(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["details-comercio-details-comercio-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/details-comercio/details-comercio.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/details-comercio/details-comercio.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title  size=\"small\">Detalle Comercio</ion-title>    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/details-comercio/details-comercio-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/details-comercio/details-comercio-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: DetailsComercioPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComercioPageRoutingModule", function() { return DetailsComercioPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _details_comercio_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./details-comercio.page */ "./src/app/details-comercio/details-comercio.page.ts");




const routes = [
    {
        path: '',
        component: _details_comercio_page__WEBPACK_IMPORTED_MODULE_3__["DetailsComercioPage"]
    }
];
let DetailsComercioPageRoutingModule = class DetailsComercioPageRoutingModule {
};
DetailsComercioPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DetailsComercioPageRoutingModule);



/***/ }),

/***/ "./src/app/details-comercio/details-comercio.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/details-comercio/details-comercio.module.ts ***!
  \*************************************************************/
/*! exports provided: DetailsComercioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComercioPageModule", function() { return DetailsComercioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _details_comercio_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./details-comercio-routing.module */ "./src/app/details-comercio/details-comercio-routing.module.ts");
/* harmony import */ var _details_comercio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./details-comercio.page */ "./src/app/details-comercio/details-comercio.page.ts");







let DetailsComercioPageModule = class DetailsComercioPageModule {
};
DetailsComercioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _details_comercio_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailsComercioPageRoutingModule"]
        ],
        declarations: [_details_comercio_page__WEBPACK_IMPORTED_MODULE_6__["DetailsComercioPage"]]
    })
], DetailsComercioPageModule);



/***/ }),

/***/ "./src/app/details-comercio/details-comercio.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/details-comercio/details-comercio.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbHMtY29tZXJjaW8vZGV0YWlscy1jb21lcmNpby5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/details-comercio/details-comercio.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/details-comercio/details-comercio.page.ts ***!
  \***********************************************************/
/*! exports provided: DetailsComercioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComercioPage", function() { return DetailsComercioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let DetailsComercioPage = class DetailsComercioPage {
    constructor() { }
    ngOnInit() {
    }
};
DetailsComercioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-details-comercio',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./details-comercio.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/details-comercio/details-comercio.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./details-comercio.page.scss */ "./src/app/details-comercio/details-comercio.page.scss")).default]
    })
], DetailsComercioPage);



/***/ })

}]);
//# sourceMappingURL=details-comercio-details-comercio-module.js.map