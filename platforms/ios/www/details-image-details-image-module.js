(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["details-image-details-image-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/details-image/details-image.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/details-image/details-image.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title  size=\"small\"></ion-title>    \n    <ion-button fill=\"clear\" (click)=\"eliminarImagen()\" color=\"danger\" slot=\"end\">\n      <ion-icon name=\"trash\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding text-center\">\n  <img src=\"{{url}}\" alt=\"\">\n</ion-content>\n");

/***/ }),

/***/ "./src/app/details-image/details-image-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/details-image/details-image-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: DetailsImagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsImagePageRoutingModule", function() { return DetailsImagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _details_image_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./details-image.page */ "./src/app/details-image/details-image.page.ts");




const routes = [
    {
        path: '',
        component: _details_image_page__WEBPACK_IMPORTED_MODULE_3__["DetailsImagePage"]
    }
];
let DetailsImagePageRoutingModule = class DetailsImagePageRoutingModule {
};
DetailsImagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DetailsImagePageRoutingModule);



/***/ }),

/***/ "./src/app/details-image/details-image.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/details-image/details-image.module.ts ***!
  \*******************************************************/
/*! exports provided: DetailsImagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsImagePageModule", function() { return DetailsImagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _details_image_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./details-image-routing.module */ "./src/app/details-image/details-image-routing.module.ts");
/* harmony import */ var _details_image_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./details-image.page */ "./src/app/details-image/details-image.page.ts");







let DetailsImagePageModule = class DetailsImagePageModule {
};
DetailsImagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _details_image_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailsImagePageRoutingModule"]
        ],
        declarations: [_details_image_page__WEBPACK_IMPORTED_MODULE_6__["DetailsImagePage"]]
    })
], DetailsImagePageModule);



/***/ }),

/***/ "./src/app/details-image/details-image.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/details-image/details-image.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbHMtaW1hZ2UvZGV0YWlscy1pbWFnZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/details-image/details-image.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/details-image/details-image.page.ts ***!
  \*****************************************************/
/*! exports provided: DetailsImagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsImagePage", function() { return DetailsImagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



let DetailsImagePage = class DetailsImagePage {
    constructor(navParams, modalCtrl) {
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.url = "";
        this.url = this.navParams.get('url');
    }
    ngOnInit() {
    }
    cerrar() {
        this.modalCtrl.dismiss();
    }
    eliminarImagen() {
        this.modalCtrl.dismiss("eliminar");
    }
};
DetailsImagePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
DetailsImagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-details-image',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./details-image.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/details-image/details-image.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./details-image.page.scss */ "./src/app/details-image/details-image.page.scss")).default]
    })
], DetailsImagePage);



/***/ })

}]);
//# sourceMappingURL=details-image-details-image-module.js.map