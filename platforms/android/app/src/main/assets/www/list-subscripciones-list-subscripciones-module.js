(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-subscripciones-list-subscripciones-module"],{

/***/ "./src/app/list-subscripciones/list-subscripciones-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/list-subscripciones/list-subscripciones-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: ListSubscripcionesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListSubscripcionesPageRoutingModule", function() { return ListSubscripcionesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _list_subscripciones_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-subscripciones.page */ "./src/app/list-subscripciones/list-subscripciones.page.ts");




const routes = [
    {
        path: '',
        component: _list_subscripciones_page__WEBPACK_IMPORTED_MODULE_3__["ListSubscripcionesPage"]
    }
];
let ListSubscripcionesPageRoutingModule = class ListSubscripcionesPageRoutingModule {
};
ListSubscripcionesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ListSubscripcionesPageRoutingModule);



/***/ }),

/***/ "./src/app/list-subscripciones/list-subscripciones.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/list-subscripciones/list-subscripciones.module.ts ***!
  \*******************************************************************/
/*! exports provided: ListSubscripcionesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListSubscripcionesPageModule", function() { return ListSubscripcionesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _list_subscripciones_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-subscripciones-routing.module */ "./src/app/list-subscripciones/list-subscripciones-routing.module.ts");
/* harmony import */ var _list_subscripciones_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-subscripciones.page */ "./src/app/list-subscripciones/list-subscripciones.page.ts");
/* harmony import */ var _Components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Components/components.module */ "./src/app/Components/components.module.ts");








let ListSubscripcionesPageModule = class ListSubscripcionesPageModule {
};
ListSubscripcionesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _Components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _list_subscripciones_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListSubscripcionesPageRoutingModule"]
        ],
        declarations: [_list_subscripciones_page__WEBPACK_IMPORTED_MODULE_6__["ListSubscripcionesPage"]]
    })
], ListSubscripcionesPageModule);



/***/ })

}]);
//# sourceMappingURL=list-subscripciones-list-subscripciones-module.js.map