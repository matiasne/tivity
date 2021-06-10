(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["form-cocina-form-cocina-module"],{

/***/ "./src/app/form-cocina/form-cocina-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/form-cocina/form-cocina-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: FormCocinaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormCocinaPageRoutingModule", function() { return FormCocinaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _form_cocina_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-cocina.page */ "./src/app/form-cocina/form-cocina.page.ts");




const routes = [
    {
        path: '',
        component: _form_cocina_page__WEBPACK_IMPORTED_MODULE_3__["FormCocinaPage"]
    }
];
let FormCocinaPageRoutingModule = class FormCocinaPageRoutingModule {
};
FormCocinaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FormCocinaPageRoutingModule);



/***/ }),

/***/ "./src/app/form-cocina/form-cocina.module.ts":
/*!***************************************************!*\
  !*** ./src/app/form-cocina/form-cocina.module.ts ***!
  \***************************************************/
/*! exports provided: FormCocinaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormCocinaPageModule", function() { return FormCocinaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _form_cocina_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-cocina-routing.module */ "./src/app/form-cocina/form-cocina-routing.module.ts");
/* harmony import */ var _form_cocina_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form-cocina.page */ "./src/app/form-cocina/form-cocina.page.ts");
/* harmony import */ var _Components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Components/components.module */ "./src/app/Components/components.module.ts");








let FormCocinaPageModule = class FormCocinaPageModule {
};
FormCocinaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _Components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _form_cocina_routing_module__WEBPACK_IMPORTED_MODULE_5__["FormCocinaPageRoutingModule"]
        ],
        declarations: [_form_cocina_page__WEBPACK_IMPORTED_MODULE_6__["FormCocinaPage"]]
    })
], FormCocinaPageModule);



/***/ })

}]);
//# sourceMappingURL=form-cocina-form-cocina-module.js.map