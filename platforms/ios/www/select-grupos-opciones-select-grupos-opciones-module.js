(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["select-grupos-opciones-select-grupos-opciones-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/select-grupos-opciones/select-grupos-opciones.page.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/select-grupos-opciones/select-grupos-opciones.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>  \n  <ion-buttons slot=\"start\">\n    <ion-back-button></ion-back-button>\n  </ion-buttons>   \n  <ion-toolbar> \n    <ion-title  size=\"small\">Seleccionar Grupo de Opciones</ion-title>    \n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content style=\"margin-top: 50px;\" class=\"ion-padding\">  \n  \n  <ion-searchbar animated \n    placeholder=\"Buscar\"\n    animated=\"true\"\n    showCancelButton=\"never\" \n    color=\"light\" \n    autocomplete=\"on\"\n    enterkeyhint=\"send\"\n    inputmode=\"text\"\n    type=\"text\"\n    debounce=\"300\"\n    value=\"{{palabraFiltro}}\"\n    (ionChange)=\"onChange($event)\">\n  </ion-searchbar>\n  \n  <ion-list lines=\"none\"> \n    <ion-item *ngFor=\"let item of items\" (click)=\"seleccionar(item)\" class=\"item-card\">  \n      <ion-label text-wrap>\n        <h2><b>{{item.nombre}}</b> </h2>   \n        <p *ngFor=\"let opcion of item.opciones\">\n          {{opcion.nombre}} {{opcion.precioVariacion}}$\n        </p>         \n      </ion-label>  \n    </ion-item>\n  </ion-list>\n\n  <div class=\"space\">\n    \n  </div> \n  \n</ion-content>\n<ion-footer class=\"ion-no-border ion-padding\">\n  <ion-toolbar>    \n    <ion-button class=\"button-rounded\" slot=\"start\"  color=\"light\" (click)=\"cancelar()\">Cancelar</ion-button>\n  </ion-toolbar>\n</ion-footer>\n");

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



/***/ }),

/***/ "./src/app/select-grupos-opciones/select-grupos-opciones.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/select-grupos-opciones/select-grupos-opciones.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlbGVjdC1ncnVwb3Mtb3BjaW9uZXMvc2VsZWN0LWdydXBvcy1vcGNpb25lcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/select-grupos-opciones/select-grupos-opciones.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/select-grupos-opciones/select-grupos-opciones.page.ts ***!
  \***********************************************************************/
/*! exports provided: SelectGruposOpcionesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectGruposOpcionesPage", function() { return SelectGruposOpcionesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _Services_grupo_opciones_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/grupo-opciones.service */ "./src/app/Services/grupo-opciones.service.ts");
/* harmony import */ var _Services_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Services/loading.service */ "./src/app/Services/loading.service.ts");






let SelectGruposOpcionesPage = class SelectGruposOpcionesPage {
    constructor(grupoOpcionesService, modalCtrl, router, loadingService) {
        this.grupoOpcionesService = grupoOpcionesService;
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.loadingService = loadingService;
        this.items = [];
        this.itemsAll = [];
        this.palabraFiltro = "";
    }
    ngOnInit() {
        this.grupoOpcionesService.list().subscribe(data => {
            this.itemsAll = data;
            this.buscar();
        });
    }
    onChange(event) {
        this.palabraFiltro = event.target.value;
        this.buscar();
    }
    buscar() {
        if (this.palabraFiltro != "") {
            this.items = [];
            this.itemsAll.forEach(item => {
                if (item.nombre.toLowerCase().includes(this.palabraFiltro.toLowerCase())) {
                    this.items.push(item);
                    return;
                }
                if (item.documento.toLowerCase().includes(this.palabraFiltro.toLowerCase())) {
                    this.items.push(item);
                    return;
                }
            });
        }
        else {
            this.items = this.itemsAll;
        }
    }
    obtenerTodos() {
        this.grupoOpcionesService.list().subscribe((mesas) => {
            this.itemsAll = mesas;
            console.log(this.items);
            this.loadingService.dismissLoading();
            this.buscar();
        });
    }
    seleccionar(item) {
        this.modalCtrl.dismiss({
            'item': item
        });
    }
    cancelar() {
        this.modalCtrl.dismiss();
    }
};
SelectGruposOpcionesPage.ctorParameters = () => [
    { type: _Services_grupo_opciones_service__WEBPACK_IMPORTED_MODULE_4__["GrupoOpcionesService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _Services_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"] }
];
SelectGruposOpcionesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-select-grupos-opciones',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./select-grupos-opciones.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/select-grupos-opciones/select-grupos-opciones.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./select-grupos-opciones.page.scss */ "./src/app/select-grupos-opciones/select-grupos-opciones.page.scss")).default]
    })
], SelectGruposOpcionesPage);



/***/ })

}]);
//# sourceMappingURL=select-grupos-opciones-select-grupos-opciones-module.js.map