(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["form-comentario-form-comentario-module"],{

/***/ "./src/app/form-comentario/form-comentario-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/form-comentario/form-comentario-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: FormComentarioPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComentarioPageRoutingModule", function() { return FormComentarioPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _form_comentario_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-comentario.page */ "./src/app/form-comentario/form-comentario.page.ts");




const routes = [
    {
        path: '',
        component: _form_comentario_page__WEBPACK_IMPORTED_MODULE_3__["FormComentarioPage"]
    }
];
let FormComentarioPageRoutingModule = class FormComentarioPageRoutingModule {
};
FormComentarioPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FormComentarioPageRoutingModule);



/***/ }),

/***/ "./src/app/form-comentario/form-comentario.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/form-comentario/form-comentario.module.ts ***!
  \***********************************************************/
/*! exports provided: FormComentarioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComentarioPageModule", function() { return FormComentarioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _form_comentario_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-comentario-routing.module */ "./src/app/form-comentario/form-comentario-routing.module.ts");
/* harmony import */ var _form_comentario_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form-comentario.page */ "./src/app/form-comentario/form-comentario.page.ts");







let FormComentarioPageModule = class FormComentarioPageModule {
};
FormComentarioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _form_comentario_routing_module__WEBPACK_IMPORTED_MODULE_5__["FormComentarioPageRoutingModule"]
        ],
        declarations: [_form_comentario_page__WEBPACK_IMPORTED_MODULE_6__["FormComentarioPage"]]
    })
], FormComentarioPageModule);



/***/ })

}]);
//# sourceMappingURL=form-comentario-form-comentario-module.js.map