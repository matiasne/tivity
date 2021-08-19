(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-venta-list-venta-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/list-venta/list-venta.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/list-venta/list-venta.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title  size=\"small\">List Ventas</ion-title>    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content style=\"margin-top: 50px;\">  \n  \n  <ion-row>\n    <ion-col size=\"10\">\n      <ion-input placeholder=\"Buscar\" style=\"border:1px solid rgb(206, 206, 206); border-radius: 5px;\"\n      [(ngModel)]=\"palabraFiltro\"\n      ></ion-input>\n    </ion-col>\n    <ion-col size=\"2\">\n      <ion-button color=\"primary\" style=\"margin-top: -1px; height: 42px;\"  (click)=\"buscar()\">\n          <ion-icon name=\"search\"></ion-icon>\n      </ion-button>\n    </ion-col>\n  </ion-row>\n\n  <ion-list lines=\"none\">     \n    <ion-item  class=\"list-item\" *ngFor=\"let item of items\" (click)=\"seleccionar(item)\">\n      <ion-avatar slot=\"start\">\n        <img src=\"{{item.foto}}\" *ngIf=\"item.foto\">\n        <ion-icon name=\"star\" *ngIf=\"!item.foto\"></ion-icon>\n      </ion-avatar>      \n      <ion-label>\n        <h2><b>{{item.nombre}}</b></h2>\n        <p>\n          {{item.descripcion}}\n        </p>           \n      </ion-label>         \n    </ion-item>    \n  </ion-list>\n  <!--ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"showMore($event)\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Cargando...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll-->\n  <div class=\"space\">\n    \n  </div> \n\n</ion-content>");

/***/ }),

/***/ "./src/app/list-venta/list-venta-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/list-venta/list-venta-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ListVentaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListVentaPageRoutingModule", function() { return ListVentaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _list_venta_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-venta.page */ "./src/app/list-venta/list-venta.page.ts");




const routes = [
    {
        path: '',
        component: _list_venta_page__WEBPACK_IMPORTED_MODULE_3__["ListVentaPage"]
    }
];
let ListVentaPageRoutingModule = class ListVentaPageRoutingModule {
};
ListVentaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ListVentaPageRoutingModule);



/***/ }),

/***/ "./src/app/list-venta/list-venta.module.ts":
/*!*************************************************!*\
  !*** ./src/app/list-venta/list-venta.module.ts ***!
  \*************************************************/
/*! exports provided: ListVentaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListVentaPageModule", function() { return ListVentaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _list_venta_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-venta-routing.module */ "./src/app/list-venta/list-venta-routing.module.ts");
/* harmony import */ var _list_venta_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-venta.page */ "./src/app/list-venta/list-venta.page.ts");







let ListVentaPageModule = class ListVentaPageModule {
};
ListVentaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _list_venta_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListVentaPageRoutingModule"]
        ],
        declarations: [_list_venta_page__WEBPACK_IMPORTED_MODULE_6__["ListVentaPage"]]
    })
], ListVentaPageModule);



/***/ }),

/***/ "./src/app/list-venta/list-venta.page.scss":
/*!*************************************************!*\
  !*** ./src/app/list-venta/list-venta.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3QtdmVudGEvbGlzdC12ZW50YS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/list-venta/list-venta.page.ts":
/*!***********************************************!*\
  !*** ./src/app/list-venta/list-venta.page.ts ***!
  \***********************************************/
/*! exports provided: ListVentaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListVentaPage", function() { return ListVentaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _Services_ventas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/ventas.service */ "./src/app/Services/ventas.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





let ListVentaPage = class ListVentaPage {
    constructor(loadingController, router, route, ventasServices, modalCtrl) {
        this.loadingController = loadingController;
        this.router = router;
        this.route = route;
        this.ventasServices = ventasServices;
        this.modalCtrl = modalCtrl;
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
    seleccionar(item) {
        this.modalCtrl.dismiss({
            'item': item
        });
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
    buscar() {
    }
};
ListVentaPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _Services_ventas_service__WEBPACK_IMPORTED_MODULE_2__["VentasService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
];
ListVentaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-venta',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./list-venta.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/list-venta/list-venta.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./list-venta.page.scss */ "./src/app/list-venta/list-venta.page.scss")).default]
    })
], ListVentaPage);



/***/ })

}]);
//# sourceMappingURL=list-venta-list-venta-module.js.map