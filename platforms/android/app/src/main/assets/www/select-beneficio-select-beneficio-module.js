(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["select-beneficio-select-beneficio-module"],{

/***/ "./src/app/select-beneficio/select-beneficio-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/select-beneficio/select-beneficio-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: SelectBeneficioPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectBeneficioPageRoutingModule", function() { return SelectBeneficioPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _select_beneficio_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select-beneficio.page */ "./src/app/select-beneficio/select-beneficio.page.ts");




const routes = [
    {
        path: '',
        component: _select_beneficio_page__WEBPACK_IMPORTED_MODULE_3__["SelectBeneficioPage"]
    }
];
let SelectBeneficioPageRoutingModule = class SelectBeneficioPageRoutingModule {
};
SelectBeneficioPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SelectBeneficioPageRoutingModule);



/***/ }),

/***/ "./src/app/select-beneficio/select-beneficio.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/select-beneficio/select-beneficio.module.ts ***!
  \*************************************************************/
/*! exports provided: SelectBeneficioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectBeneficioPageModule", function() { return SelectBeneficioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _select_beneficio_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./select-beneficio-routing.module */ "./src/app/select-beneficio/select-beneficio-routing.module.ts");
/* harmony import */ var _select_beneficio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./select-beneficio.page */ "./src/app/select-beneficio/select-beneficio.page.ts");







let SelectBeneficioPageModule = class SelectBeneficioPageModule {
};
SelectBeneficioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _select_beneficio_routing_module__WEBPACK_IMPORTED_MODULE_5__["SelectBeneficioPageRoutingModule"]
        ],
        declarations: [_select_beneficio_page__WEBPACK_IMPORTED_MODULE_6__["SelectBeneficioPage"]]
    })
], SelectBeneficioPageModule);



/***/ })

}]);
//# sourceMappingURL=select-beneficio-select-beneficio-module.js.map