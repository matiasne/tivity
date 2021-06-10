(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-clientes-list-clientes-module"],{

/***/ "./src/app/list-clientes/list-clientes-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/list-clientes/list-clientes-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ListClientesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListClientesPageRoutingModule", function() { return ListClientesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _list_clientes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-clientes.page */ "./src/app/list-clientes/list-clientes.page.ts");




const routes = [
    {
        path: '',
        component: _list_clientes_page__WEBPACK_IMPORTED_MODULE_3__["ListClientesPage"]
    }
];
let ListClientesPageRoutingModule = class ListClientesPageRoutingModule {
};
ListClientesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ListClientesPageRoutingModule);



/***/ }),

/***/ "./src/app/list-clientes/list-clientes.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/list-clientes/list-clientes.module.ts ***!
  \*******************************************************/
/*! exports provided: ListClientesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListClientesPageModule", function() { return ListClientesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _list_clientes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-clientes-routing.module */ "./src/app/list-clientes/list-clientes-routing.module.ts");






let ListClientesPageModule = class ListClientesPageModule {
};
ListClientesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _list_clientes_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListClientesPageRoutingModule"]
        ],
        declarations: []
    })
], ListClientesPageModule);



/***/ })

}]);
//# sourceMappingURL=list-clientes-list-clientes-module.js.map