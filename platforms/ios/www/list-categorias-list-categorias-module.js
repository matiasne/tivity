(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-categorias-list-categorias-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/list-categorias/list-categorias.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/list-categorias/list-categorias.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Categorías</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n \n\n  <ion-list lines=\"none\">\n\n    <ion-text color=\"primary\">\n      <h4>Categorías</h4>\n    </ion-text>    \n\n    <div *ngIf=\"buscando\" class=\"mensaje FadeOut FadeIn\">\n      <img src=\"../../assets/img/buscando.fw.png\" alt=\"\">\n      <p>Cargando comandas, aguarde unos segundos por favor</p>\n    </div>\n  \n    <div *ngIf=\"!buscando && categorias.length == 0\" class=\"mensaje FadeOut FadeIn\">\n      <img src=\"../../assets/img/categorias.fw.png\" alt=\"\">\n      <p>Aún no tienes categorias</p>\n    </div>\n\n    <ion-item-sliding *ngFor=\"let categoria of categorias;let i=index\" class=\"item-card\">\n      <ion-item>   \n        <div slot=\"start\">\n          <img src=\"{{categoria.foto}}\" *ngIf=\"categoria.foto\">\n          <ion-icon name=\"cube-outline\" *ngIf=\"!categoria.foto\"></ion-icon>\n        </div>          \n        <ion-label>\n          <b>{{categoria.nombre}}</b>         \n        </ion-label> \n      </ion-item>  \n  \n      <ion-item-options side=\"end\">\n        <ion-item-option (click)=\"openEditCategoria(categoria)\"><ion-icon name=\"create\" ></ion-icon> Editar</ion-item-option>\n      </ion-item-options>\n  \n    </ion-item-sliding>\n  </ion-list>\n  \n    \n  \n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"openAddCategoria()\">\n    <ion-fab-button>\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/list-categorias/list-categorias-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/list-categorias/list-categorias-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ListCategoriasPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListCategoriasPageRoutingModule", function() { return ListCategoriasPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _list_categorias_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-categorias.page */ "./src/app/list-categorias/list-categorias.page.ts");




const routes = [
    {
        path: '',
        component: _list_categorias_page__WEBPACK_IMPORTED_MODULE_3__["ListCategoriasPage"]
    }
];
let ListCategoriasPageRoutingModule = class ListCategoriasPageRoutingModule {
};
ListCategoriasPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ListCategoriasPageRoutingModule);



/***/ }),

/***/ "./src/app/list-categorias/list-categorias.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/list-categorias/list-categorias.module.ts ***!
  \***********************************************************/
/*! exports provided: ListCategoriasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListCategoriasPageModule", function() { return ListCategoriasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _list_categorias_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-categorias-routing.module */ "./src/app/list-categorias/list-categorias-routing.module.ts");
/* harmony import */ var _list_categorias_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-categorias.page */ "./src/app/list-categorias/list-categorias.page.ts");







let ListCategoriasPageModule = class ListCategoriasPageModule {
};
ListCategoriasPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _list_categorias_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListCategoriasPageRoutingModule"]
        ],
        declarations: [_list_categorias_page__WEBPACK_IMPORTED_MODULE_6__["ListCategoriasPage"]]
    })
], ListCategoriasPageModule);



/***/ }),

/***/ "./src/app/list-categorias/list-categorias.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/list-categorias/list-categorias.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3QtY2F0ZWdvcmlhcy9saXN0LWNhdGVnb3JpYXMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/list-categorias/list-categorias.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/list-categorias/list-categorias.page.ts ***!
  \*********************************************************/
/*! exports provided: ListCategoriasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListCategoriasPage", function() { return ListCategoriasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _Services_categorias_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/categorias.service */ "./src/app/Services/categorias.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _form_categoria_form_categoria_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../form-categoria/form-categoria.page */ "./src/app/form-categoria/form-categoria.page.ts");





let ListCategoriasPage = class ListCategoriasPage {
    constructor(categoriaServices, modalController) {
        this.categoriaServices = categoriaServices;
        this.modalController = modalController;
        this.categorias = [];
        this.buscando = true;
        let comercio_seleccionadoId = localStorage.getItem('comercio_seleccionadoId');
        this.categoriasSubs = this.categoriaServices.getAll().subscribe(snapshot => {
            this.categorias = [];
            this.buscando = false;
            snapshot.forEach((snap) => {
                var item = snap.payload.doc.data();
                item.id = snap.payload.doc.id;
                this.categorias.push(item);
            });
        });
    }
    ionViewDidLeave() {
        this.categoriasSubs.unsubscribe();
    }
    ngOnInit() {
    }
    openEditCategoria(categoria) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _form_categoria_form_categoria_page__WEBPACK_IMPORTED_MODULE_4__["FormCategoriaPage"],
                componentProps: {
                    categoria: categoria
                }
            });
            return yield modal.present();
        });
    }
    openAddCategoria() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let comercio_seleccionadoId = localStorage.getItem('comercio_seleccionadoId');
            const modal = yield this.modalController.create({
                component: _form_categoria_form_categoria_page__WEBPACK_IMPORTED_MODULE_4__["FormCategoriaPage"],
                componentProps: {
                    comercioId: comercio_seleccionadoId
                }
            });
            return yield modal.present();
        });
    }
};
ListCategoriasPage.ctorParameters = () => [
    { type: _Services_categorias_service__WEBPACK_IMPORTED_MODULE_2__["CategoriasService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
];
ListCategoriasPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-categorias',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./list-categorias.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/list-categorias/list-categorias.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./list-categorias.page.scss */ "./src/app/list-categorias/list-categorias.page.scss")).default]
    })
], ListCategoriasPage);



/***/ })

}]);
//# sourceMappingURL=list-categorias-list-categorias-module.js.map