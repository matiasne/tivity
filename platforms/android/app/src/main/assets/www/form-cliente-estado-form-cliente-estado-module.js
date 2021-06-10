(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["form-cliente-estado-form-cliente-estado-module"],{

/***/ "./src/app/form-cliente-estado/form-cliente-estado-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/form-cliente-estado/form-cliente-estado-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: FormClienteEstadoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormClienteEstadoPageRoutingModule", function() { return FormClienteEstadoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _form_cliente_estado_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-cliente-estado.page */ "./src/app/form-cliente-estado/form-cliente-estado.page.ts");




const routes = [
    {
        path: '',
        component: _form_cliente_estado_page__WEBPACK_IMPORTED_MODULE_3__["FormClienteEstadoPage"]
    }
];
let FormClienteEstadoPageRoutingModule = class FormClienteEstadoPageRoutingModule {
};
FormClienteEstadoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FormClienteEstadoPageRoutingModule);



/***/ }),

/***/ "./src/app/form-cliente-estado/form-cliente-estado.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/form-cliente-estado/form-cliente-estado.module.ts ***!
  \*******************************************************************/
/*! exports provided: FormClienteEstadoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormClienteEstadoPageModule", function() { return FormClienteEstadoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _form_cliente_estado_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-cliente-estado-routing.module */ "./src/app/form-cliente-estado/form-cliente-estado-routing.module.ts");
/* harmony import */ var _form_cliente_estado_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form-cliente-estado.page */ "./src/app/form-cliente-estado/form-cliente-estado.page.ts");







let FormClienteEstadoPageModule = class FormClienteEstadoPageModule {
};
FormClienteEstadoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _form_cliente_estado_routing_module__WEBPACK_IMPORTED_MODULE_5__["FormClienteEstadoPageRoutingModule"]
        ],
        declarations: [_form_cliente_estado_page__WEBPACK_IMPORTED_MODULE_6__["FormClienteEstadoPage"]]
    })
], FormClienteEstadoPageModule);



/***/ })

}]);
//# sourceMappingURL=form-cliente-estado-form-cliente-estado-module.js.map