(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["form-stock-form-stock-module"],{

/***/ "./src/app/form-stock/form-stock-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/form-stock/form-stock-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: FormStockPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormStockPageRoutingModule", function() { return FormStockPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _form_stock_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-stock.page */ "./src/app/form-stock/form-stock.page.ts");




const routes = [
    {
        path: '',
        component: _form_stock_page__WEBPACK_IMPORTED_MODULE_3__["FormStockPage"]
    }
];
let FormStockPageRoutingModule = class FormStockPageRoutingModule {
};
FormStockPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FormStockPageRoutingModule);



/***/ }),

/***/ "./src/app/form-stock/form-stock.module.ts":
/*!*************************************************!*\
  !*** ./src/app/form-stock/form-stock.module.ts ***!
  \*************************************************/
/*! exports provided: FormStockPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormStockPageModule", function() { return FormStockPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _form_stock_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-stock-routing.module */ "./src/app/form-stock/form-stock-routing.module.ts");
/* harmony import */ var _form_stock_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form-stock.page */ "./src/app/form-stock/form-stock.page.ts");
/* harmony import */ var _Components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Components/components.module */ "./src/app/Components/components.module.ts");








let FormStockPageModule = class FormStockPageModule {
};
FormStockPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _Components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _form_stock_routing_module__WEBPACK_IMPORTED_MODULE_5__["FormStockPageRoutingModule"]
        ],
        declarations: [_form_stock_page__WEBPACK_IMPORTED_MODULE_6__["FormStockPage"]]
    })
], FormStockPageModule);



/***/ })

}]);
//# sourceMappingURL=form-stock-form-stock-module.js.map