(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["details-whatsapp-details-whatsapp-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/details-whatsapp/details-whatsapp.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/details-whatsapp/details-whatsapp.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title  size=\"small\">Link Whatsapp</ion-title>    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n <a href=\"{{value}}\">{{value}}</a> \n <ngx-qrcode \n            [elementType]=\"elementType\" \n            [value] = \"value\"\n            cssClass = \"aclass\"\n            errorCorrectionLevel = \"L\">\n      </ngx-qrcode>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/details-whatsapp/details-whatsapp-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/details-whatsapp/details-whatsapp-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: DetailsWhatsappPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsWhatsappPageRoutingModule", function() { return DetailsWhatsappPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _details_whatsapp_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./details-whatsapp.page */ "./src/app/details-whatsapp/details-whatsapp.page.ts");




const routes = [
    {
        path: '',
        component: _details_whatsapp_page__WEBPACK_IMPORTED_MODULE_3__["DetailsWhatsappPage"]
    }
];
let DetailsWhatsappPageRoutingModule = class DetailsWhatsappPageRoutingModule {
};
DetailsWhatsappPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DetailsWhatsappPageRoutingModule);



/***/ }),

/***/ "./src/app/details-whatsapp/details-whatsapp.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/details-whatsapp/details-whatsapp.module.ts ***!
  \*************************************************************/
/*! exports provided: DetailsWhatsappPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsWhatsappPageModule", function() { return DetailsWhatsappPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _details_whatsapp_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./details-whatsapp-routing.module */ "./src/app/details-whatsapp/details-whatsapp-routing.module.ts");
/* harmony import */ var _details_whatsapp_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./details-whatsapp.page */ "./src/app/details-whatsapp/details-whatsapp.page.ts");
/* harmony import */ var ngx_qrcode2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-qrcode2 */ "./node_modules/ngx-qrcode2/__ivy_ngcc__/fesm2015/ngx-qrcode2.js");








let DetailsWhatsappPageModule = class DetailsWhatsappPageModule {
};
DetailsWhatsappPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            ngx_qrcode2__WEBPACK_IMPORTED_MODULE_7__["NgxQRCodeModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _details_whatsapp_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailsWhatsappPageRoutingModule"]
        ],
        declarations: [_details_whatsapp_page__WEBPACK_IMPORTED_MODULE_6__["DetailsWhatsappPage"]]
    })
], DetailsWhatsappPageModule);



/***/ }),

/***/ "./src/app/details-whatsapp/details-whatsapp.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/details-whatsapp/details-whatsapp.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbHMtd2hhdHNhcHAvZGV0YWlscy13aGF0c2FwcC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/details-whatsapp/details-whatsapp.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/details-whatsapp/details-whatsapp.page.ts ***!
  \***********************************************************/
/*! exports provided: DetailsWhatsappPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsWhatsappPage", function() { return DetailsWhatsappPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let DetailsWhatsappPage = class DetailsWhatsappPage {
    constructor() {
        this.link = "";
        this.title = 'app';
        this.elementType = 'url';
        this.value = 'Techiediaries';
    }
    ngOnInit() {
        let comercio_seleccionadoId = localStorage.getItem('comercio_seleccionadoId');
        this.value = "https://socialup.web.app/c/" + comercio_seleccionadoId;
    }
};
DetailsWhatsappPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-details-whatsapp',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./details-whatsapp.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/details-whatsapp/details-whatsapp.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./details-whatsapp.page.scss */ "./src/app/details-whatsapp/details-whatsapp.page.scss")).default]
    })
], DetailsWhatsappPage);



/***/ })

}]);
//# sourceMappingURL=details-whatsapp-details-whatsapp-module.js.map