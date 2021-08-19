(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["select-product-select-product-module"],{

/***/ "./src/app/select-product/select-product-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/select-product/select-product-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: SelectProductPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectProductPageRoutingModule", function() { return SelectProductPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _select_product_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select-product.page */ "./src/app/select-product/select-product.page.ts");




const routes = [
    {
        path: '',
        component: _select_product_page__WEBPACK_IMPORTED_MODULE_3__["SelectProductPage"]
    }
];
let SelectProductPageRoutingModule = class SelectProductPageRoutingModule {
};
SelectProductPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SelectProductPageRoutingModule);



/***/ }),

/***/ "./src/app/select-product/select-product.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/select-product/select-product.module.ts ***!
  \*********************************************************/
/*! exports provided: SelectProductPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectProductPageModule", function() { return SelectProductPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _select_product_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./select-product-routing.module */ "./src/app/select-product/select-product-routing.module.ts");
/* harmony import */ var _select_product_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./select-product.page */ "./src/app/select-product/select-product.page.ts");
/* harmony import */ var _Components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Components/components.module */ "./src/app/Components/components.module.ts");








let SelectProductPageModule = class SelectProductPageModule {
};
SelectProductPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _Components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _select_product_routing_module__WEBPACK_IMPORTED_MODULE_5__["SelectProductPageRoutingModule"]
        ],
        declarations: [_select_product_page__WEBPACK_IMPORTED_MODULE_6__["SelectProductPage"]]
    })
], SelectProductPageModule);



/***/ })

}]);
//# sourceMappingURL=select-product-select-product-module.js.map