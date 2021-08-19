(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-cocinas-list-cocinas-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/list-cocinas/list-cocinas.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/list-cocinas/list-cocinas.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title  size=\"small\">Cocinas</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n  <div *ngIf=\"buscando\" class=\"mensaje FadeOut FadeIn\">\n    <img src=\"../../assets/img/buscando.fw.png\" alt=\"\">\n    <p>Cargando comandas, aguarde unos segundos por favor</p>\n  </div>\n\n  <div *ngIf=\"!buscando && cocinas.length == 0\" class=\"mensaje FadeOut FadeIn\">\n    <img src=\"../../assets/img/cocinas.fw.png\" alt=\"\">\n    <p>Aún no tienes cocinas</p>\n  </div>\n\n  <ion-list lines=\"none\">        \n    <ion-item-sliding *ngFor=\"let cocina of cocinas\" class=\"item-card\">\n      <ion-item (click)=\"seleccionar(cocina.id)\">  \n        <div slot=\"start\">\n          <ion-icon name=\"file-tray-full-outline\"></ion-icon>\n        </div>      \n        <ion-label>\n          <b>{{cocina.nombre}}</b>         \n        </ion-label> \n       \n      </ion-item>  \n\n      \n\n      <ion-item-options side=\"end\">\n        <ion-item-option (click)=\"openEdit(cocina)\"><ion-icon name=\"create\" ></ion-icon> Editar</ion-item-option>\n      </ion-item-options>\n\n    </ion-item-sliding>\n      \n    \n  </ion-list>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"openAdd()\">\n    <ion-fab-button>\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/list-cocinas/list-cocinas-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/list-cocinas/list-cocinas-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ListCocinasPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListCocinasPageRoutingModule", function() { return ListCocinasPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _list_cocinas_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-cocinas.page */ "./src/app/list-cocinas/list-cocinas.page.ts");




const routes = [
    {
        path: '',
        component: _list_cocinas_page__WEBPACK_IMPORTED_MODULE_3__["ListCocinasPage"]
    }
];
let ListCocinasPageRoutingModule = class ListCocinasPageRoutingModule {
};
ListCocinasPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ListCocinasPageRoutingModule);



/***/ }),

/***/ "./src/app/list-cocinas/list-cocinas.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/list-cocinas/list-cocinas.module.ts ***!
  \*****************************************************/
/*! exports provided: ListCocinasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListCocinasPageModule", function() { return ListCocinasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _list_cocinas_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-cocinas-routing.module */ "./src/app/list-cocinas/list-cocinas-routing.module.ts");
/* harmony import */ var _list_cocinas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-cocinas.page */ "./src/app/list-cocinas/list-cocinas.page.ts");







let ListCocinasPageModule = class ListCocinasPageModule {
};
ListCocinasPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _list_cocinas_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListCocinasPageRoutingModule"]
        ],
        declarations: [_list_cocinas_page__WEBPACK_IMPORTED_MODULE_6__["ListCocinasPage"]]
    })
], ListCocinasPageModule);



/***/ }),

/***/ "./src/app/list-cocinas/list-cocinas.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/list-cocinas/list-cocinas.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3QtY29jaW5hcy9saXN0LWNvY2luYXMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/list-cocinas/list-cocinas.page.ts":
/*!***************************************************!*\
  !*** ./src/app/list-cocinas/list-cocinas.page.ts ***!
  \***************************************************/
/*! exports provided: ListCocinasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListCocinasPage", function() { return ListCocinasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _form_cocina_form_cocina_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../form-cocina/form-cocina.page */ "./src/app/form-cocina/form-cocina.page.ts");
/* harmony import */ var _Services_cocinas_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Services/cocinas.service */ "./src/app/Services/cocinas.service.ts");






let ListCocinasPage = class ListCocinasPage {
    constructor(cocinaService, modalController, router) {
        this.cocinaService = cocinaService;
        this.modalController = modalController;
        this.router = router;
        this.cocinas = [];
        this.buscando = true;
    }
    ngOnInit() {
        this.cocinasSubs = this.cocinaService.list().subscribe((cocinas) => {
            this.cocinas = cocinas;
            this.buscando = false;
        });
    }
    ionViewDidLeave() {
        this.cocinasSubs.unsubscribe();
    }
    seleccionar(cocinaId) {
        this.router.navigate(['details-cocina', {
                id: cocinaId
            }]);
    }
    openAdd() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let comercio_seleccionadoId = localStorage.getItem('comercio_seleccionadoId');
            const modal = yield this.modalController.create({
                component: _form_cocina_form_cocina_page__WEBPACK_IMPORTED_MODULE_4__["FormCocinaPage"],
                componentProps: {
                    comercioId: comercio_seleccionadoId
                }
            });
            return yield modal.present();
        });
    }
    openEdit(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _form_cocina_form_cocina_page__WEBPACK_IMPORTED_MODULE_4__["FormCocinaPage"],
                componentProps: {
                    cocina: item
                }
            });
            return yield modal.present();
        });
    }
};
ListCocinasPage.ctorParameters = () => [
    { type: _Services_cocinas_service__WEBPACK_IMPORTED_MODULE_5__["CocinasService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ListCocinasPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-cocinas',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./list-cocinas.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/list-cocinas/list-cocinas.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./list-cocinas.page.scss */ "./src/app/list-cocinas/list-cocinas.page.scss")).default]
    })
], ListCocinasPage);



/***/ })

}]);
//# sourceMappingURL=list-cocinas-list-cocinas-module.js.map