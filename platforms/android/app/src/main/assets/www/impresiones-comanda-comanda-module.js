(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["impresiones-comanda-comanda-module"],{

/***/ "./src/app/impresiones/comanda/comanda-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/impresiones/comanda/comanda-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ComandaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComandaPageRoutingModule", function() { return ComandaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _comanda_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comanda.page */ "./src/app/impresiones/comanda/comanda.page.ts");




const routes = [
    {
        path: '',
        component: _comanda_page__WEBPACK_IMPORTED_MODULE_3__["ComandaPage"]
    }
];
let ComandaPageRoutingModule = class ComandaPageRoutingModule {
};
ComandaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ComandaPageRoutingModule);



/***/ }),

/***/ "./src/app/impresiones/comanda/comanda.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/impresiones/comanda/comanda.module.ts ***!
  \*******************************************************/
/*! exports provided: ComandaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComandaPageModule", function() { return ComandaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _comanda_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comanda-routing.module */ "./src/app/impresiones/comanda/comanda-routing.module.ts");
/* harmony import */ var _comanda_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comanda.page */ "./src/app/impresiones/comanda/comanda.page.ts");
/* harmony import */ var src_app_Components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/Components/components.module */ "./src/app/Components/components.module.ts");








let ComandaPageModule = class ComandaPageModule {
};
ComandaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_Components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _comanda_routing_module__WEBPACK_IMPORTED_MODULE_5__["ComandaPageRoutingModule"]
        ],
        declarations: [_comanda_page__WEBPACK_IMPORTED_MODULE_6__["ComandaPage"]]
    })
], ComandaPageModule);



/***/ })

}]);
//# sourceMappingURL=impresiones-comanda-comanda-module.js.map