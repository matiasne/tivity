(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-cajas-list-cajas-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/list-cajas/list-cajas.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/list-cajas/list-cajas.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Cajas</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  \n  \n  <div *ngIf=\"buscando\" class=\"mensaje FadeOut FadeIn\">\n    <img src=\"../../assets/img/buscando.fw.png\" alt=\"\">\n    <p>Cargando cajas, aguarde unos segundos por favor</p>\n  </div>\n\n  <div *ngIf=\"!buscando && cajas.length == 0\" class=\"mensaje FadeOut FadeIn\">\n    <img src=\"../../assets/img/caja.fw.png\" alt=\"\">\n    <p>Aún no tienes cajas, agrega una para hacer un seguimiento de tus egresos e ingresos.</p><br>\n    <ion-button class=\"button-rounded\"  color=\"primary\" (click)=\"openAddCaja()\">Agregar Caja</ion-button>\n  </div>\n\n  <ion-grid *ngIf=\"cajas.length > 0\">       \n    <ion-row>          \n      <ion-col size=\"12\" size-xs=\"12\" size-sm=\"6\" size-md=\"4\" size-lg=\"3\" *ngFor=\"let caja of cajas\">\n        <ion-item-sliding  class=\"item-card\">\n          <ion-item (click)=\"seleccionar(caja.id)\" class=\"remove_inner_bottom\">  \n            <div slot=\"start\">\n              <ion-icon name=\"file-tray-full-outline\"></ion-icon>\n            </div>      \n            <ion-label>\n              <b>{{caja.nombre}}</b>         \n            </ion-label> \n            <ion-badge color=\"success\" *ngIf=\"caja.estado == 'abierta'\" slot=\"end\">Abierta</ion-badge>\n            <ion-badge color=\"danger\" *ngIf=\"caja.estado == 'cerrada'\" slot=\"end\">Cerrada</ion-badge>\n          </ion-item>  \n    \n          \n    \n          <ion-item-options side=\"end\">\n            <ion-item-option (click)=\"openEditCaja(caja)\"><ion-icon name=\"create\" ></ion-icon> Editar</ion-item-option>\n          </ion-item-options>\n    \n        </ion-item-sliding>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-list lines=\"none\">        \n    \n      \n    \n  </ion-list>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"openAddCaja()\">\n    <ion-fab-button>\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/list-cajas/list-cajas-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/list-cajas/list-cajas-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ListCajasPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListCajasPageRoutingModule", function() { return ListCajasPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _list_cajas_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-cajas.page */ "./src/app/list-cajas/list-cajas.page.ts");




const routes = [
    {
        path: '',
        component: _list_cajas_page__WEBPACK_IMPORTED_MODULE_3__["ListCajasPage"]
    }
];
let ListCajasPageRoutingModule = class ListCajasPageRoutingModule {
};
ListCajasPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ListCajasPageRoutingModule);



/***/ }),

/***/ "./src/app/list-cajas/list-cajas.module.ts":
/*!*************************************************!*\
  !*** ./src/app/list-cajas/list-cajas.module.ts ***!
  \*************************************************/
/*! exports provided: ListCajasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListCajasPageModule", function() { return ListCajasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _list_cajas_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-cajas-routing.module */ "./src/app/list-cajas/list-cajas-routing.module.ts");
/* harmony import */ var _list_cajas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-cajas.page */ "./src/app/list-cajas/list-cajas.page.ts");







let ListCajasPageModule = class ListCajasPageModule {
};
ListCajasPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _list_cajas_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListCajasPageRoutingModule"]
        ],
        declarations: [_list_cajas_page__WEBPACK_IMPORTED_MODULE_6__["ListCajasPage"]]
    })
], ListCajasPageModule);



/***/ }),

/***/ "./src/app/list-cajas/list-cajas.page.scss":
/*!*************************************************!*\
  !*** ./src/app/list-cajas/list-cajas.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3QtY2FqYXMvbGlzdC1jYWphcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/list-cajas/list-cajas.page.ts":
/*!***********************************************!*\
  !*** ./src/app/list-cajas/list-cajas.page.ts ***!
  \***********************************************/
/*! exports provided: ListCajasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListCajasPage", function() { return ListCajasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _Services_cajas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/cajas.service */ "./src/app/Services/cajas.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _form_caja_form_caja_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../form-caja/form-caja.page */ "./src/app/form-caja/form-caja.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _Services_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Services/loading.service */ "./src/app/Services/loading.service.ts");
/* harmony import */ var _Services_comercios_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Services/comercios.service */ "./src/app/Services/comercios.service.ts");
/* harmony import */ var _models_comercio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models/comercio */ "./src/app/models/comercio.ts");
/* harmony import */ var _cambiar_plan_cambiar_plan_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../cambiar-plan/cambiar-plan.page */ "./src/app/cambiar-plan/cambiar-plan.page.ts");










let ListCajasPage = class ListCajasPage {
    constructor(cajasService, modalCtrl, router, loadingService, comercioService) {
        this.cajasService = cajasService;
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.loadingService = loadingService;
        this.comercioService = comercioService;
        this.cajas = [];
        this.buscando = true;
        this.comercio = new _models_comercio__WEBPACK_IMPORTED_MODULE_8__["Comercio"]();
        this.comercio.asignarValores(this.comercioService.getSelectedCommerceValue());
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.cajasService.setOrderBy("nombre", "desc");
        this.cajasSubs = this.cajasService.list().subscribe((caja) => {
            this.cajas = caja;
            this.buscando = false;
        });
    }
    ionViewDidLeave() {
        this.cajasSubs.unsubscribe();
    }
    seleccionar(cajaId) {
        this.router.navigate(['details-caja', {
                id: cajaId
            }]);
    }
    openAddCaja() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.cajas.length > this.comercio.config.productosMaxLength) {
                let modal = yield this.modalCtrl.create({
                    component: _cambiar_plan_cambiar_plan_page__WEBPACK_IMPORTED_MODULE_9__["CambiarPlanPage"],
                    componentProps: {
                        extraText: "Haz alcanzado el límite de cajas de tu plan: " + this.comercio.plan,
                        actualPlan: this.comercio.plan
                    }
                });
                return yield modal.present();
            }
            else {
                let comercio_seleccionadoId = localStorage.getItem('comercio_seleccionadoId');
                const modal = yield this.modalCtrl.create({
                    component: _form_caja_form_caja_page__WEBPACK_IMPORTED_MODULE_4__["FormCajaPage"],
                    componentProps: {
                        comercioId: comercio_seleccionadoId
                    }
                });
                return yield modal.present();
            }
        });
    }
    openEditCaja(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _form_caja_form_caja_page__WEBPACK_IMPORTED_MODULE_4__["FormCajaPage"],
                componentProps: {
                    caja: item
                }
            });
            return yield modal.present();
        });
    }
};
ListCajasPage.ctorParameters = () => [
    { type: _Services_cajas_service__WEBPACK_IMPORTED_MODULE_2__["CajasService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _Services_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"] },
    { type: _Services_comercios_service__WEBPACK_IMPORTED_MODULE_7__["ComerciosService"] }
];
ListCajasPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-cajas',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./list-cajas.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/list-cajas/list-cajas.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./list-cajas.page.scss */ "./src/app/list-cajas/list-cajas.page.scss")).default]
    })
], ListCajasPage);



/***/ })

}]);
//# sourceMappingURL=list-cajas-list-cajas-module.js.map