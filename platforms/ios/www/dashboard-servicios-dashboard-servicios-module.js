(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-servicios-dashboard-servicios-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard-servicios/dashboard-servicios.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard-servicios/dashboard-servicios.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Daashboard Servicios</ion-title>    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-button size=\"large\" (click)=\"buscar()\"  expand=\"block\">Buscar</ion-button>\n  <ion-button size=\"large\" (click)=\"nuevo()\"  expand=\"block\">Agregar Nuevo</ion-button>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/dashboard-servicios/dashboard-servicios-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/dashboard-servicios/dashboard-servicios-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: DashboardServiciosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardServiciosPageRoutingModule", function() { return DashboardServiciosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _dashboard_servicios_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-servicios.page */ "./src/app/dashboard-servicios/dashboard-servicios.page.ts");




const routes = [
    {
        path: '',
        component: _dashboard_servicios_page__WEBPACK_IMPORTED_MODULE_3__["DashboardServiciosPage"]
    }
];
let DashboardServiciosPageRoutingModule = class DashboardServiciosPageRoutingModule {
};
DashboardServiciosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DashboardServiciosPageRoutingModule);



/***/ }),

/***/ "./src/app/dashboard-servicios/dashboard-servicios.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/dashboard-servicios/dashboard-servicios.module.ts ***!
  \*******************************************************************/
/*! exports provided: DashboardServiciosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardServiciosPageModule", function() { return DashboardServiciosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _dashboard_servicios_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard-servicios-routing.module */ "./src/app/dashboard-servicios/dashboard-servicios-routing.module.ts");
/* harmony import */ var _dashboard_servicios_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard-servicios.page */ "./src/app/dashboard-servicios/dashboard-servicios.page.ts");







let DashboardServiciosPageModule = class DashboardServiciosPageModule {
};
DashboardServiciosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _dashboard_servicios_routing_module__WEBPACK_IMPORTED_MODULE_5__["DashboardServiciosPageRoutingModule"]
        ],
        declarations: [_dashboard_servicios_page__WEBPACK_IMPORTED_MODULE_6__["DashboardServiciosPage"]]
    })
], DashboardServiciosPageModule);



/***/ }),

/***/ "./src/app/dashboard-servicios/dashboard-servicios.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/dashboard-servicios/dashboard-servicios.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC1zZXJ2aWNpb3MvZGFzaGJvYXJkLXNlcnZpY2lvcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/dashboard-servicios/dashboard-servicios.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/dashboard-servicios/dashboard-servicios.page.ts ***!
  \*****************************************************************/
/*! exports provided: DashboardServiciosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardServiciosPage", function() { return DashboardServiciosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _list_servicios_list_servicios_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../list-servicios/list-servicios.page */ "./src/app/list-servicios/list-servicios.page.ts");





let DashboardServiciosPage = class DashboardServiciosPage {
    constructor(router, modalController, navCtrl) {
        this.router = router;
        this.modalController = modalController;
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
    }
    buscar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _list_servicios_list_servicios_page__WEBPACK_IMPORTED_MODULE_4__["ListServiciosPage"]
            });
            modal.onDidDismiss()
                .then((retorno) => {
                if (retorno.data != undefined)
                    this.router.navigate(['details-servicio', { "id": retorno.data.item.id }]);
            });
            return yield modal.present();
        });
    }
    nuevo() {
        this.router.navigate(['form-servicio']);
    }
};
DashboardServiciosPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
];
DashboardServiciosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard-servicios',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./dashboard-servicios.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard-servicios/dashboard-servicios.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./dashboard-servicios.page.scss */ "./src/app/dashboard-servicios/dashboard-servicios.page.scss")).default]
    })
], DashboardServiciosPage);



/***/ })

}]);
//# sourceMappingURL=dashboard-servicios-dashboard-servicios-module.js.map