(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-grupos-opciones-list-grupos-opciones-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/list-grupos-opciones/list-grupos-opciones.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/list-grupos-opciones/list-grupos-opciones.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Grupo de Opciones</ion-title>\n  </ion-toolbar> \n</ion-header> \n \n<ion-content class=\"ion-padding\">\n\n  <div *ngIf=\"buscando\" class=\"mensaje FadeOut FadeIn\">\n    <img src=\"../../assets/img/buscando.fw.png\" alt=\"\">\n    <p>Cargando comandas, aguarde unos segundos por favor</p>\n  </div>\n\n  <div *ngIf=\"!buscando && grupos.length == 0\" class=\"mensaje FadeOut FadeIn\">\n    <img src=\"../../assets/img/gruposOpciones.fw.png\" alt=\"\">\n    <p>Aún no tienes grupos de opciones.</p>\n  </div>\n\n  <ion-list lines=\"none\">\n    <ion-item-sliding *ngFor=\"let grupo of grupos;let i=index\" class=\"item-card\">\n      <ion-item>        \n        <ion-label>\n          <b>{{grupo.nombre}}</b>         \n        </ion-label> \n      </ion-item>\n  \n      <ion-item-options side=\"end\">\n        <ion-item-option (click)=\"openEditGrupo(grupo)\"><ion-icon name=\"create\" ></ion-icon> Editar</ion-item-option>\n      </ion-item-options>\n  \n    </ion-item-sliding>\n  </ion-list>   \n  \n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"openAddGrupo()\">\n    <ion-fab-button>\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n</ion-content>");

/***/ }),

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

/***/ "./src/app/list-grupos-opciones/list-grupos-opciones-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/list-grupos-opciones/list-grupos-opciones-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ListGruposOpcionesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListGruposOpcionesPageRoutingModule", function() { return ListGruposOpcionesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _list_grupos_opciones_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-grupos-opciones.page */ "./src/app/list-grupos-opciones/list-grupos-opciones.page.ts");




const routes = [
    {
        path: '',
        component: _list_grupos_opciones_page__WEBPACK_IMPORTED_MODULE_3__["ListGruposOpcionesPage"]
    }
];
let ListGruposOpcionesPageRoutingModule = class ListGruposOpcionesPageRoutingModule {
};
ListGruposOpcionesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ListGruposOpcionesPageRoutingModule);



/***/ }),

/***/ "./src/app/list-grupos-opciones/list-grupos-opciones.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/list-grupos-opciones/list-grupos-opciones.module.ts ***!
  \*********************************************************************/
/*! exports provided: ListGruposOpcionesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListGruposOpcionesPageModule", function() { return ListGruposOpcionesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _list_grupos_opciones_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-grupos-opciones-routing.module */ "./src/app/list-grupos-opciones/list-grupos-opciones-routing.module.ts");
/* harmony import */ var _list_grupos_opciones_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-grupos-opciones.page */ "./src/app/list-grupos-opciones/list-grupos-opciones.page.ts");







let ListGruposOpcionesPageModule = class ListGruposOpcionesPageModule {
};
ListGruposOpcionesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _list_grupos_opciones_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListGruposOpcionesPageRoutingModule"]
        ],
        declarations: [_list_grupos_opciones_page__WEBPACK_IMPORTED_MODULE_6__["ListGruposOpcionesPage"]]
    })
], ListGruposOpcionesPageModule);



/***/ }),

/***/ "./src/app/list-grupos-opciones/list-grupos-opciones.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/list-grupos-opciones/list-grupos-opciones.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3QtZ3J1cG9zLW9wY2lvbmVzL2xpc3QtZ3J1cG9zLW9wY2lvbmVzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/list-grupos-opciones/list-grupos-opciones.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/list-grupos-opciones/list-grupos-opciones.page.ts ***!
  \*******************************************************************/
/*! exports provided: ListGruposOpcionesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListGruposOpcionesPage", function() { return ListGruposOpcionesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _form_producto_grupo_opciones_form_producto_grupo_opciones_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../form-producto-grupo-opciones/form-producto-grupo-opciones.page */ "./src/app/form-producto-grupo-opciones/form-producto-grupo-opciones.page.ts");
/* harmony import */ var _Services_grupo_opciones_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Services/grupo-opciones.service */ "./src/app/Services/grupo-opciones.service.ts");
/* harmony import */ var _Services_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Services/loading.service */ "./src/app/Services/loading.service.ts");







let ListGruposOpcionesPage = class ListGruposOpcionesPage {
    constructor(grupoOpcionesService, router, loadingService, modalController) {
        this.grupoOpcionesService = grupoOpcionesService;
        this.router = router;
        this.loadingService = loadingService;
        this.modalController = modalController;
        this.grupos = [];
        this.buscando = true;
    }
    ngOnInit() {
        this.loadingService.presentLoadingText("Cargando Grupos");
        this.grupoOpcionesService.list().subscribe(grupos => {
            this.loadingService.dismissLoading();
            this.grupos = grupos;
            this.buscando = false;
        });
    }
    ionViewDidEnter() {
    }
    openAddGrupo() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _form_producto_grupo_opciones_form_producto_grupo_opciones_page__WEBPACK_IMPORTED_MODULE_4__["FormProductoGrupoOpcionesPage"],
            });
            modal.onDidDismiss().then((retorno) => {
                if (retorno.data) {
                    this.grupoOpcionesService.add(retorno.data);
                }
            });
            return yield modal.present();
        });
    }
    openEditGrupo(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _form_producto_grupo_opciones_form_producto_grupo_opciones_page__WEBPACK_IMPORTED_MODULE_4__["FormProductoGrupoOpcionesPage"],
                componentProps: {
                    grupo: item
                }
            });
            modal.onDidDismiss().then((retorno) => {
                if (retorno.data) {
                    if (retorno.data == "eliminar") {
                        this.grupoOpcionesService.delete(retorno.data);
                    }
                    else
                        this.grupoOpcionesService.update(retorno.data);
                }
            });
            return yield modal.present();
        });
    }
};
ListGruposOpcionesPage.ctorParameters = () => [
    { type: _Services_grupo_opciones_service__WEBPACK_IMPORTED_MODULE_5__["GrupoOpcionesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _Services_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
];
ListGruposOpcionesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-grupos-opciones',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./list-grupos-opciones.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/list-grupos-opciones/list-grupos-opciones.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./list-grupos-opciones.page.scss */ "./src/app/list-grupos-opciones/list-grupos-opciones.page.scss")).default]
    })
], ListGruposOpcionesPage);



/***/ })

}]);
//# sourceMappingURL=list-grupos-opciones-list-grupos-opciones-module.js.map