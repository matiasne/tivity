(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["details-cocina-details-cocina-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/details-cocina/details-cocina.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/details-cocina/details-cocina.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>details-cocina</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/details-cocina/details-cocina-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/details-cocina/details-cocina-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: DetailsCocinaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsCocinaPageRoutingModule", function() { return DetailsCocinaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _details_cocina_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./details-cocina.page */ "./src/app/details-cocina/details-cocina.page.ts");




const routes = [
    {
        path: '',
        component: _details_cocina_page__WEBPACK_IMPORTED_MODULE_3__["DetailsCocinaPage"]
    }
];
let DetailsCocinaPageRoutingModule = class DetailsCocinaPageRoutingModule {
};
DetailsCocinaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DetailsCocinaPageRoutingModule);



/***/ }),

/***/ "./src/app/details-cocina/details-cocina.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/details-cocina/details-cocina.module.ts ***!
  \*********************************************************/
/*! exports provided: DetailsCocinaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsCocinaPageModule", function() { return DetailsCocinaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _details_cocina_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./details-cocina-routing.module */ "./src/app/details-cocina/details-cocina-routing.module.ts");
/* harmony import */ var _details_cocina_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./details-cocina.page */ "./src/app/details-cocina/details-cocina.page.ts");







let DetailsCocinaPageModule = class DetailsCocinaPageModule {
};
DetailsCocinaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _details_cocina_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailsCocinaPageRoutingModule"]
        ],
        declarations: [_details_cocina_page__WEBPACK_IMPORTED_MODULE_6__["DetailsCocinaPage"]]
    })
], DetailsCocinaPageModule);



/***/ }),

/***/ "./src/app/details-cocina/details-cocina.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/details-cocina/details-cocina.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbHMtY29jaW5hL2RldGFpbHMtY29jaW5hLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/details-cocina/details-cocina.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/details-cocina/details-cocina.page.ts ***!
  \*******************************************************/
/*! exports provided: DetailsCocinaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsCocinaPage", function() { return DetailsCocinaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let DetailsCocinaPage = class DetailsCocinaPage {
    constructor() { }
    ngOnInit() {
    }
};
DetailsCocinaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-details-cocina',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./details-cocina.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/details-cocina/details-cocina.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./details-cocina.page.scss */ "./src/app/details-cocina/details-cocina.page.scss")).default]
    })
], DetailsCocinaPage);



/***/ })

}]);
//# sourceMappingURL=details-cocina-details-cocina-module.js.map