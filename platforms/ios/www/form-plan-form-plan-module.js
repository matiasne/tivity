(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["form-plan-form-plan-module"],{

/***/ "./src/app/form-plan/form-plan-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/form-plan/form-plan-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: FormPlanPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormPlanPageRoutingModule", function() { return FormPlanPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _form_plan_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-plan.page */ "./src/app/form-plan/form-plan.page.ts");




const routes = [
    {
        path: '',
        component: _form_plan_page__WEBPACK_IMPORTED_MODULE_3__["FormPlanPage"]
    }
];
let FormPlanPageRoutingModule = class FormPlanPageRoutingModule {
};
FormPlanPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FormPlanPageRoutingModule);



/***/ }),

/***/ "./src/app/form-plan/form-plan.module.ts":
/*!***********************************************!*\
  !*** ./src/app/form-plan/form-plan.module.ts ***!
  \***********************************************/
/*! exports provided: FormPlanPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormPlanPageModule", function() { return FormPlanPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _form_plan_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-plan-routing.module */ "./src/app/form-plan/form-plan-routing.module.ts");






let FormPlanPageModule = class FormPlanPageModule {
};
FormPlanPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _form_plan_routing_module__WEBPACK_IMPORTED_MODULE_5__["FormPlanPageRoutingModule"]
        ],
        declarations: []
    })
], FormPlanPageModule);



/***/ })

}]);
//# sourceMappingURL=form-plan-form-plan-module.js.map