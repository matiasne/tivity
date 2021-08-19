(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-ventas-dashboard-ventas-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard-ventas/dashboard-ventas.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard-ventas/dashboard-ventas.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title  size=\"small\">Dashboard Ventas</ion-title>    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  Datos y estadisticas de ventas\n</ion-content>\n");

/***/ }),

/***/ "./src/app/dashboard-ventas/dashboard-ventas-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/dashboard-ventas/dashboard-ventas-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: DashboardVentasPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardVentasPageRoutingModule", function() { return DashboardVentasPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _dashboard_ventas_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-ventas.page */ "./src/app/dashboard-ventas/dashboard-ventas.page.ts");




const routes = [
    {
        path: '',
        component: _dashboard_ventas_page__WEBPACK_IMPORTED_MODULE_3__["DashboardVentasPage"]
    }
];
let DashboardVentasPageRoutingModule = class DashboardVentasPageRoutingModule {
};
DashboardVentasPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DashboardVentasPageRoutingModule);



/***/ }),

/***/ "./src/app/dashboard-ventas/dashboard-ventas.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/dashboard-ventas/dashboard-ventas.module.ts ***!
  \*************************************************************/
/*! exports provided: DashboardVentasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardVentasPageModule", function() { return DashboardVentasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _dashboard_ventas_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard-ventas-routing.module */ "./src/app/dashboard-ventas/dashboard-ventas-routing.module.ts");
/* harmony import */ var _dashboard_ventas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard-ventas.page */ "./src/app/dashboard-ventas/dashboard-ventas.page.ts");







let DashboardVentasPageModule = class DashboardVentasPageModule {
};
DashboardVentasPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _dashboard_ventas_routing_module__WEBPACK_IMPORTED_MODULE_5__["DashboardVentasPageRoutingModule"]
        ],
        declarations: [_dashboard_ventas_page__WEBPACK_IMPORTED_MODULE_6__["DashboardVentasPage"]]
    })
], DashboardVentasPageModule);



/***/ }),

/***/ "./src/app/dashboard-ventas/dashboard-ventas.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/dashboard-ventas/dashboard-ventas.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC12ZW50YXMvZGFzaGJvYXJkLXZlbnRhcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/dashboard-ventas/dashboard-ventas.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/dashboard-ventas/dashboard-ventas.page.ts ***!
  \***********************************************************/
/*! exports provided: DashboardVentasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardVentasPage", function() { return DashboardVentasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _Services_ventas_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/ventas.service */ "./src/app/Services/ventas.service.ts");





let DashboardVentasPage = class DashboardVentasPage {
    constructor(router, modalController, ventasService, loadingController) {
        this.router = router;
        this.modalController = modalController;
        this.ventasService = ventasService;
        this.loadingController = loadingController;
        this.items = [];
        this.palabraFiltro = "";
        this.ultimoItem = "";
        this.loadingActive = false;
    }
    ngOnInit() {
        this.buscar();
    }
    buscar() {
        this.palabraFiltro = this.palabraFiltro.toLowerCase();
        this.items = [];
        this.ultimoItem = "";
        this.presentLoading();
    }
    showMore(event) {
        console.log(this.ultimoItem);
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
};
DashboardVentasPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _Services_ventas_service__WEBPACK_IMPORTED_MODULE_4__["VentasService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] }
];
DashboardVentasPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard-ventas',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./dashboard-ventas.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard-ventas/dashboard-ventas.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./dashboard-ventas.page.scss */ "./src/app/dashboard-ventas/dashboard-ventas.page.scss")).default]
    })
], DashboardVentasPage);



/***/ })

}]);
//# sourceMappingURL=dashboard-ventas-dashboard-ventas-module.js.map