(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["recortar-imagen-recortar-imagen-module"],{

/***/ "./src/app/recortar-imagen/recortar-imagen-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/recortar-imagen/recortar-imagen-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: RecortarImagenPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecortarImagenPageRoutingModule", function() { return RecortarImagenPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _recortar_imagen_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recortar-imagen.page */ "./src/app/recortar-imagen/recortar-imagen.page.ts");




const routes = [
    {
        path: '',
        component: _recortar_imagen_page__WEBPACK_IMPORTED_MODULE_3__["RecortarImagenPage"]
    }
];
let RecortarImagenPageRoutingModule = class RecortarImagenPageRoutingModule {
};
RecortarImagenPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RecortarImagenPageRoutingModule);



/***/ }),

/***/ "./src/app/recortar-imagen/recortar-imagen.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/recortar-imagen/recortar-imagen.module.ts ***!
  \***********************************************************/
/*! exports provided: RecortarImagenPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecortarImagenPageModule", function() { return RecortarImagenPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _recortar_imagen_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recortar-imagen-routing.module */ "./src/app/recortar-imagen/recortar-imagen-routing.module.ts");
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-image-cropper */ "./node_modules/ngx-image-cropper/__ivy_ngcc__/fesm2015/ngx-image-cropper.js");







let RecortarImagenPageModule = class RecortarImagenPageModule {
};
RecortarImagenPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            ngx_image_cropper__WEBPACK_IMPORTED_MODULE_6__["ImageCropperModule"],
            _recortar_imagen_routing_module__WEBPACK_IMPORTED_MODULE_5__["RecortarImagenPageRoutingModule"]
        ],
        declarations: []
    })
], RecortarImagenPageModule);



/***/ })

}]);
//# sourceMappingURL=recortar-imagen-recortar-imagen-module.js.map