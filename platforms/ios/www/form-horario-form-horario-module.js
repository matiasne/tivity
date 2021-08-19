(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["form-horario-form-horario-module"],{

/***/ "./src/app/form-horario/form-horario-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/form-horario/form-horario-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: FormHorarioPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormHorarioPageRoutingModule", function() { return FormHorarioPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _form_horario_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-horario.page */ "./src/app/form-horario/form-horario.page.ts");




const routes = [
    {
        path: '',
        component: _form_horario_page__WEBPACK_IMPORTED_MODULE_3__["FormHorarioPage"]
    }
];
let FormHorarioPageRoutingModule = class FormHorarioPageRoutingModule {
};
FormHorarioPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FormHorarioPageRoutingModule);



/***/ }),

/***/ "./src/app/form-horario/form-horario.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/form-horario/form-horario.module.ts ***!
  \*****************************************************/
/*! exports provided: FormHorarioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormHorarioPageModule", function() { return FormHorarioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _form_horario_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-horario-routing.module */ "./src/app/form-horario/form-horario-routing.module.ts");
/* harmony import */ var _form_horario_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form-horario.page */ "./src/app/form-horario/form-horario.page.ts");







let FormHorarioPageModule = class FormHorarioPageModule {
};
FormHorarioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _form_horario_routing_module__WEBPACK_IMPORTED_MODULE_5__["FormHorarioPageRoutingModule"]
        ],
        declarations: [_form_horario_page__WEBPACK_IMPORTED_MODULE_6__["FormHorarioPage"]]
    })
], FormHorarioPageModule);



/***/ })

}]);
//# sourceMappingURL=form-horario-form-horario-module.js.map