(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["select-grupos-opciones-select-grupos-opciones-module"],{

/***/ "./src/app/Services/grupo-opciones.service.ts":
/*!****************************************************!*\
  !*** ./src/app/Services/grupo-opciones.service.ts ***!
  \****************************************************/
/*! exports provided: GrupoOpcionesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrupoOpcionesService", function() { return GrupoOpcionesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base.service */ "./src/app/Services/base.service.ts");
/* harmony import */ var _comercios_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comercios.service */ "./src/app/Services/comercios.service.ts");





let GrupoOpcionesService = class GrupoOpcionesService extends _base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] {
    constructor(afs, comerciosService) {
        super(afs);
        this.afs = afs;
        this.comerciosService = comerciosService;
        this.comerciosService.getSelectedCommerce().subscribe(data => {
            // let comercio_seleccionadoId = localStorage.getItem('comercio_seleccionadoId'); 
            if (data) {
                this.setPath('comercios/' + data.id + '/grupoOpciones');
            }
        });
    }
};
GrupoOpcionesService.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _comercios_service__WEBPACK_IMPORTED_MODULE_4__["ComerciosService"] }
];
GrupoOpcionesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], GrupoOpcionesService);



/***/ }),

/***/ "./src/app/select-grupos-opciones/select-grupos-opciones-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/select-grupos-opciones/select-grupos-opciones-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: SelectGruposOpcionesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectGruposOpcionesPageRoutingModule", function() { return SelectGruposOpcionesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _select_grupos_opciones_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select-grupos-opciones.page */ "./src/app/select-grupos-opciones/select-grupos-opciones.page.ts");




const routes = [
    {
        path: '',
        component: _select_grupos_opciones_page__WEBPACK_IMPORTED_MODULE_3__["SelectGruposOpcionesPage"]
    }
];
let SelectGruposOpcionesPageRoutingModule = class SelectGruposOpcionesPageRoutingModule {
};
SelectGruposOpcionesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SelectGruposOpcionesPageRoutingModule);



/***/ }),

/***/ "./src/app/select-grupos-opciones/select-grupos-opciones.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/select-grupos-opciones/select-grupos-opciones.module.ts ***!
  \*************************************************************************/
/*! exports provided: SelectGruposOpcionesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectGruposOpcionesPageModule", function() { return SelectGruposOpcionesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _select_grupos_opciones_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./select-grupos-opciones-routing.module */ "./src/app/select-grupos-opciones/select-grupos-opciones-routing.module.ts");
/* harmony import */ var _select_grupos_opciones_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./select-grupos-opciones.page */ "./src/app/select-grupos-opciones/select-grupos-opciones.page.ts");







let SelectGruposOpcionesPageModule = class SelectGruposOpcionesPageModule {
};
SelectGruposOpcionesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _select_grupos_opciones_routing_module__WEBPACK_IMPORTED_MODULE_5__["SelectGruposOpcionesPageRoutingModule"]
        ],
        declarations: [_select_grupos_opciones_page__WEBPACK_IMPORTED_MODULE_6__["SelectGruposOpcionesPage"]]
    })
], SelectGruposOpcionesPageModule);



/***/ })

}]);
//# sourceMappingURL=select-grupos-opciones-select-grupos-opciones-module.js.map