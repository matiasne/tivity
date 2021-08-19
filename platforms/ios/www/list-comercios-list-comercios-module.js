(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-comercios-list-comercios-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/list-comercios/list-comercios.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/list-comercios/list-comercios.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title  size=\"small\">List Comercios</ion-title>    \n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content style=\"margin-top: 50px;\">  \n  \n  <ion-row>\n    <ion-col size=\"10\">\n      <ion-input placeholder=\"Buscar\" style=\"border:1px solid rgb(206, 206, 206); border-radius: 5px;\"\n      [(ngModel)]=\"palabraFiltro\"\n      ></ion-input>\n    </ion-col>\n    <ion-col size=\"2\">\n      <ion-button color=\"primary\" style=\"margin-top: -1px; height: 42px;\"  (click)=\"buscar()\">\n          <ion-icon name=\"search\"></ion-icon>\n      </ion-button>\n    </ion-col>\n  </ion-row>\n\n  <ion-list lines=\"none\"> \n    \n    <ion-item-sliding *ngFor=\"let item of items\" >    \n\n      <ion-item (click)=\"seleccionar(item)\" *ngIf=\"!item.producto\">\n        <ion-avatar slot=\"start\">\n          <img src=\"{{item.icono}}\" *ngIf=\"item.icono\">\n          <ion-icon name=\"star\" *ngIf=\"!item.icono\"></ion-icon>\n        </ion-avatar>      \n        <ion-label>\n          <h2><b>{{item.nombre}}</b> </h2>\n          <p>\n            {{item.descripcion}}\n          </p>           \n        </ion-label>  \n      </ion-item>\n    \n      <ion-item-options side=\"end\">\n        <ion-item-option (click)=\"editar(item)\"><ion-icon name=\"create\" ></ion-icon> Editar</ion-item-option>\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n   \n  </ion-list>\n\n  <div class=\"space\">\n    \n  </div> \n\n</ion-content>\n\n");

/***/ }),

/***/ "./src/app/list-comercios/list-comercios-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/list-comercios/list-comercios-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ListComerciosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComerciosPageRoutingModule", function() { return ListComerciosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _list_comercios_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-comercios.page */ "./src/app/list-comercios/list-comercios.page.ts");




const routes = [
    {
        path: '',
        component: _list_comercios_page__WEBPACK_IMPORTED_MODULE_3__["ListComerciosPage"]
    }
];
let ListComerciosPageRoutingModule = class ListComerciosPageRoutingModule {
};
ListComerciosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ListComerciosPageRoutingModule);



/***/ }),

/***/ "./src/app/list-comercios/list-comercios.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/list-comercios/list-comercios.module.ts ***!
  \*********************************************************/
/*! exports provided: ListComerciosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComerciosPageModule", function() { return ListComerciosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _list_comercios_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-comercios-routing.module */ "./src/app/list-comercios/list-comercios-routing.module.ts");
/* harmony import */ var _list_comercios_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-comercios.page */ "./src/app/list-comercios/list-comercios.page.ts");







let ListComerciosPageModule = class ListComerciosPageModule {
};
ListComerciosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _list_comercios_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListComerciosPageRoutingModule"]
        ],
        declarations: [_list_comercios_page__WEBPACK_IMPORTED_MODULE_6__["ListComerciosPage"]]
    })
], ListComerciosPageModule);



/***/ }),

/***/ "./src/app/list-comercios/list-comercios.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/list-comercios/list-comercios.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3QtY29tZXJjaW9zL2xpc3QtY29tZXJjaW9zLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/list-comercios/list-comercios.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/list-comercios/list-comercios.page.ts ***!
  \*******************************************************/
/*! exports provided: ListComerciosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComerciosPage", function() { return ListComerciosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _Services_comercios_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/comercios.service */ "./src/app/Services/comercios.service.ts");





let ListComerciosPage = class ListComerciosPage {
    constructor(modalController, loadingController, router, route, comerciosService) {
        this.modalController = modalController;
        this.loadingController = loadingController;
        this.router = router;
        this.route = route;
        this.comerciosService = comerciosService;
        this.items = [];
        this.palabraFiltro = "";
        this.ultimoItem = "";
        this.loadingActive = false;
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.ultimoItem = "";
        if (this.route.snapshot.params.filtro)
            this.palabraFiltro = this.route.snapshot.params.filtro;
    }
    ionViewDidLeave() {
        this.subsItems.unsubscribe();
    }
    presentLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loadingActive = true;
            const loading = yield this.loadingController.create({
                message: 'Cargando...',
            });
            yield loading.present();
        });
    }
    hideLoading() {
        if (this.loadingActive) {
            this.loadingController.dismiss();
            this.loadingActive = false;
        }
    }
    editar(item) {
    }
    seleccionar(item) {
    }
    buscar() {
    }
};
ListComerciosPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _Services_comercios_service__WEBPACK_IMPORTED_MODULE_4__["ComerciosService"] }
];
ListComerciosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-comercios',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./list-comercios.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/list-comercios/list-comercios.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./list-comercios.page.scss */ "./src/app/list-comercios/list-comercios.page.scss")).default]
    })
], ListComerciosPage);



/***/ })

}]);
//# sourceMappingURL=list-comercios-list-comercios-module.js.map