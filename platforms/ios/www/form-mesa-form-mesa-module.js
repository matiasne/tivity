(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["form-mesa-form-mesa-module"],{

/***/ "./src/app/form-mesa/form-mesa-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/form-mesa/form-mesa-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: FormMesaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormMesaPageRoutingModule", function() { return FormMesaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _form_mesa_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-mesa.page */ "./src/app/form-mesa/form-mesa.page.ts");




const routes = [
    {
        path: '',
        component: _form_mesa_page__WEBPACK_IMPORTED_MODULE_3__["FormMesaPage"]
    }
];
let FormMesaPageRoutingModule = class FormMesaPageRoutingModule {
};
FormMesaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FormMesaPageRoutingModule);



/***/ }),

/***/ "./src/app/form-mesa/form-mesa.module.ts":
/*!***********************************************!*\
  !*** ./src/app/form-mesa/form-mesa.module.ts ***!
  \***********************************************/
/*! exports provided: FormMesaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormMesaPageModule", function() { return FormMesaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _form_mesa_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-mesa-routing.module */ "./src/app/form-mesa/form-mesa-routing.module.ts");
/* harmony import */ var _form_mesa_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form-mesa.page */ "./src/app/form-mesa/form-mesa.page.ts");
/* harmony import */ var ngx_qrcode2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-qrcode2 */ "./node_modules/ngx-qrcode2/__ivy_ngcc__/fesm2015/ngx-qrcode2.js");







 //import this
let FormMesaPageModule = class FormMesaPageModule {
};
FormMesaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            ngx_qrcode2__WEBPACK_IMPORTED_MODULE_7__["NgxQRCodeModule"],
            _form_mesa_routing_module__WEBPACK_IMPORTED_MODULE_5__["FormMesaPageRoutingModule"]
        ],
        declarations: [_form_mesa_page__WEBPACK_IMPORTED_MODULE_6__["FormMesaPage"]]
    })
], FormMesaPageModule);



/***/ })

}]);
//# sourceMappingURL=form-mesa-form-mesa-module.js.map