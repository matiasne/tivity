(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["details-comanda-details-comanda-module"],{

/***/ "./src/app/details-comanda/details-comanda-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/details-comanda/details-comanda-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: DetailsComandaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComandaPageRoutingModule", function() { return DetailsComandaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _details_comanda_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./details-comanda.page */ "./src/app/details-comanda/details-comanda.page.ts");




const routes = [
    {
        path: '',
        component: _details_comanda_page__WEBPACK_IMPORTED_MODULE_3__["DetailsComandaPage"]
    }
];
let DetailsComandaPageRoutingModule = class DetailsComandaPageRoutingModule {
};
DetailsComandaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DetailsComandaPageRoutingModule);



/***/ }),

/***/ "./src/app/details-comanda/details-comanda.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/details-comanda/details-comanda.module.ts ***!
  \***********************************************************/
/*! exports provided: DetailsComandaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComandaPageModule", function() { return DetailsComandaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _details_comanda_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./details-comanda-routing.module */ "./src/app/details-comanda/details-comanda-routing.module.ts");
/* harmony import */ var _details_comanda_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./details-comanda.page */ "./src/app/details-comanda/details-comanda.page.ts");
/* harmony import */ var _Components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Components/components.module */ "./src/app/Components/components.module.ts");








let DetailsComandaPageModule = class DetailsComandaPageModule {
};
DetailsComandaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _Components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _details_comanda_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailsComandaPageRoutingModule"]
        ],
        declarations: [_details_comanda_page__WEBPACK_IMPORTED_MODULE_6__["DetailsComandaPage"]]
    })
], DetailsComandaPageModule);



/***/ })

}]);
//# sourceMappingURL=details-comanda-details-comanda-module.js.map