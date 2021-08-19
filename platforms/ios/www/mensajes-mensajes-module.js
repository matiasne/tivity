(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mensajes-mensajes-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/mensajes/mensajes.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mensajes/mensajes.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title  size=\"small\">mensajes</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/mensajes/mensajes-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/mensajes/mensajes-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: MensajesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MensajesPageRoutingModule", function() { return MensajesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _mensajes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mensajes.page */ "./src/app/mensajes/mensajes.page.ts");




const routes = [
    {
        path: '',
        component: _mensajes_page__WEBPACK_IMPORTED_MODULE_3__["MensajesPage"]
    }
];
let MensajesPageRoutingModule = class MensajesPageRoutingModule {
};
MensajesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MensajesPageRoutingModule);



/***/ }),

/***/ "./src/app/mensajes/mensajes.module.ts":
/*!*********************************************!*\
  !*** ./src/app/mensajes/mensajes.module.ts ***!
  \*********************************************/
/*! exports provided: MensajesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MensajesPageModule", function() { return MensajesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _mensajes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mensajes-routing.module */ "./src/app/mensajes/mensajes-routing.module.ts");
/* harmony import */ var _mensajes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mensajes.page */ "./src/app/mensajes/mensajes.page.ts");







let MensajesPageModule = class MensajesPageModule {
};
MensajesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _mensajes_routing_module__WEBPACK_IMPORTED_MODULE_5__["MensajesPageRoutingModule"]
        ],
        declarations: [_mensajes_page__WEBPACK_IMPORTED_MODULE_6__["MensajesPage"]]
    })
], MensajesPageModule);



/***/ }),

/***/ "./src/app/mensajes/mensajes.page.scss":
/*!*********************************************!*\
  !*** ./src/app/mensajes/mensajes.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnNhamVzL21lbnNhamVzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/mensajes/mensajes.page.ts":
/*!*******************************************!*\
  !*** ./src/app/mensajes/mensajes.page.ts ***!
  \*******************************************/
/*! exports provided: MensajesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MensajesPage", function() { return MensajesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let MensajesPage = class MensajesPage {
    constructor() { }
    ngOnInit() {
    }
};
MensajesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mensajes',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./mensajes.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/mensajes/mensajes.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./mensajes.page.scss */ "./src/app/mensajes/mensajes.page.scss")).default]
    })
], MensajesPage);



/***/ })

}]);
//# sourceMappingURL=mensajes-mensajes-module.js.map