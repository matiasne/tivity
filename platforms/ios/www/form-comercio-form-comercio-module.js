(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["form-comercio-form-comercio-module"],{

/***/ "./src/app/form-comercio/form-comercio-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/form-comercio/form-comercio-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: FormComercioPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComercioPageRoutingModule", function() { return FormComercioPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _form_comercio_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-comercio.page */ "./src/app/form-comercio/form-comercio.page.ts");




const routes = [
    {
        path: '',
        component: _form_comercio_page__WEBPACK_IMPORTED_MODULE_3__["FormComercioPage"]
    }
];
let FormComercioPageRoutingModule = class FormComercioPageRoutingModule {
};
FormComercioPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FormComercioPageRoutingModule);



/***/ }),

/***/ "./src/app/form-comercio/form-comercio.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/form-comercio/form-comercio.module.ts ***!
  \*******************************************************/
/*! exports provided: FormComercioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComercioPageModule", function() { return FormComercioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _form_comercio_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-comercio-routing.module */ "./src/app/form-comercio/form-comercio-routing.module.ts");
/* harmony import */ var _form_comercio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form-comercio.page */ "./src/app/form-comercio/form-comercio.page.ts");
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-image-cropper */ "./node_modules/ngx-image-cropper/__ivy_ngcc__/fesm2015/ngx-image-cropper.js");
/* harmony import */ var _Components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Components/components.module */ "./src/app/Components/components.module.ts");









let FormComercioPageModule = class FormComercioPageModule {
};
FormComercioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _Components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            ngx_image_cropper__WEBPACK_IMPORTED_MODULE_7__["ImageCropperModule"],
            _form_comercio_routing_module__WEBPACK_IMPORTED_MODULE_5__["FormComercioPageRoutingModule"]
        ],
        declarations: [
            _form_comercio_page__WEBPACK_IMPORTED_MODULE_6__["FormComercioPage"]
        ]
    })
], FormComercioPageModule);



/***/ })

}]);
//# sourceMappingURL=form-comercio-form-comercio-module.js.map