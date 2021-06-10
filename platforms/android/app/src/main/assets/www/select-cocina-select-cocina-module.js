(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["select-cocina-select-cocina-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/select-cocina/select-cocina.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/select-cocina/select-cocina.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>    \n    <ion-title>Seleccionar Cocina</ion-title>    \n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content style=\"margin-top: 50px;\" class=\"ion-padding\">  \n  <ion-searchbar animated \n    placeholder=\"Buscar nombre\"\n    animated=\"true\"\n    showCancelButton=\"never\" \n    color=\"light\" \n    autocomplete=\"on\"\n    enterkeyhint=\"send\"\n    inputmode=\"text\"\n    type=\"text\"\n    debounce=\"300\"\n    value=\"{{palabraFiltro}}\"\n    (ionChange)=\"onChange($event)\">\n  </ion-searchbar>\n\n  <ion-list lines=\"none\">   \n    \n    <ion-item-sliding *ngFor=\"let item of clientes\" class=\"item-card\" >    \n\n        <ion-item (click)=\"seleccionar(item)\" >\n          <div slot=\"start\">\n            <img src=\"{{item.foto}}\" *ngIf=\"item.foto\">\n            <ion-icon name=\"person-outline\" *ngIf=\"!item.foto\"></ion-icon>\n          </div>      \n          <ion-label text-wrap>\n            <h2><b>{{item.nombre}}</b> </h2>\n          </ion-label>  \n        </ion-item>\n      \n        <ion-item-options side=\"end\">\n          <ion-item-option (click)=\"editar(item)\"><ion-icon name=\"create\" ></ion-icon> Editar</ion-item-option>\n        </ion-item-options>\n  \n      </ion-item-sliding>\n\n \n  </ion-list>\n  <!-- fab placed to the bottom end -->\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"nuevo()\">\n    <ion-fab-button>\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"verMas()\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Cargando más cocinas...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n  \n</ion-content>\n<ion-footer class=\"ion-no-border ion-padding\">\n  <ion-toolbar>    \n    <ion-button class=\"button-rounded\" slot=\"start\"  color=\"light\" (click)=\"cancelar()\">Cancelar</ion-button>\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "./src/app/select-cocina/select-cocina-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/select-cocina/select-cocina-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: SelectCocinaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectCocinaPageRoutingModule", function() { return SelectCocinaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _select_cocina_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select-cocina.page */ "./src/app/select-cocina/select-cocina.page.ts");




const routes = [
    {
        path: '',
        component: _select_cocina_page__WEBPACK_IMPORTED_MODULE_3__["SelectCocinaPage"]
    }
];
let SelectCocinaPageRoutingModule = class SelectCocinaPageRoutingModule {
};
SelectCocinaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SelectCocinaPageRoutingModule);



/***/ }),

/***/ "./src/app/select-cocina/select-cocina.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/select-cocina/select-cocina.module.ts ***!
  \*******************************************************/
/*! exports provided: SelectCocinaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectCocinaPageModule", function() { return SelectCocinaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _select_cocina_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./select-cocina-routing.module */ "./src/app/select-cocina/select-cocina-routing.module.ts");
/* harmony import */ var _select_cocina_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./select-cocina.page */ "./src/app/select-cocina/select-cocina.page.ts");







let SelectCocinaPageModule = class SelectCocinaPageModule {
};
SelectCocinaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _select_cocina_routing_module__WEBPACK_IMPORTED_MODULE_5__["SelectCocinaPageRoutingModule"]
        ],
        declarations: [_select_cocina_page__WEBPACK_IMPORTED_MODULE_6__["SelectCocinaPage"]]
    })
], SelectCocinaPageModule);



/***/ }),

/***/ "./src/app/select-cocina/select-cocina.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/select-cocina/select-cocina.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlbGVjdC1jb2NpbmEvc2VsZWN0LWNvY2luYS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/select-cocina/select-cocina.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/select-cocina/select-cocina.page.ts ***!
  \*****************************************************/
/*! exports provided: SelectCocinaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectCocinaPage", function() { return SelectCocinaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _form_cocina_form_cocina_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../form-cocina/form-cocina.page */ "./src/app/form-cocina/form-cocina.page.ts");
/* harmony import */ var _models_cocina__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/cocina */ "./src/app/models/cocina.ts");
/* harmony import */ var _Services_cocinas_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Services/cocinas.service */ "./src/app/Services/cocinas.service.ts");
/* harmony import */ var _Services_loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Services/loading.service */ "./src/app/Services/loading.service.ts");








let SelectCocinaPage = class SelectCocinaPage {
    constructor(modalController, loadingController, router, route, cocinasService, modalCtrl, loadingService) {
        this.modalController = modalController;
        this.loadingController = loadingController;
        this.router = router;
        this.route = route;
        this.cocinasService = cocinasService;
        this.modalCtrl = modalCtrl;
        this.loadingService = loadingService;
        this.items = [];
        this.itemsAll = [];
        this.palabraFiltro = "";
        this.ultimoItem = "";
        this.loadingActive = false;
        this.cocinas = [];
        this.clientes = [];
    }
    ngOnInit() {
        this.ultimoCocina = new _models_cocina__WEBPACK_IMPORTED_MODULE_5__["Cocina"]();
        this.cocinas = [];
        this.ultimoItem = "";
        this.verMas();
    }
    ionViewDidEnter() {
        if (this.route.snapshot.params.filtro)
            this.palabraFiltro = this.route.snapshot.params.filtro;
    }
    ionViewDidLeave() {
        this.subsItems.unsubscribe();
    }
    onChange(event) {
        this.palabraFiltro = event.target.value;
        this.ultimoCocina = new _models_cocina__WEBPACK_IMPORTED_MODULE_5__["Cocina"]();
        this.cocinas = [];
        this.verMas();
    }
    verMas() {
        let limit = 5;
        var palabra = this.palabraFiltro.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        this.cocinasSubs = this.cocinasService.search(limit, "nombre", palabra, this.ultimoCocina.nombre).subscribe((snapshot) => {
            this.loadingService.dismissLoading();
            snapshot.forEach((snap) => {
                var producto = snap.payload.doc.data();
                producto.id = snap.payload.doc.id;
                producto.enCarrito = 0;
                this.cocinas.push(producto);
            });
            this.ultimoCocina = this.cocinas[this.cocinas.length - 1];
            this.infiniteScroll.complete();
            this.infiniteScroll.disabled = false;
            if (this.cocinas.length < limit) {
                this.infiniteScroll.disabled = true;
            }
            console.log(this.cocinas);
            this.cocinasSubs.unsubscribe();
        });
    }
    seleccionar(item) {
        this.modalCtrl.dismiss({
            'item': item
        });
    }
    nuevo() {
        this.modalCtrl.dismiss("nuevo");
    }
    editar(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loadingService.presentLoading();
            const modal = yield this.modalController.create({
                component: _form_cocina_form_cocina_page__WEBPACK_IMPORTED_MODULE_4__["FormCocinaPage"],
                componentProps: {
                    id: item.id
                }
            });
            modal.present().then(() => {
            });
            modal.onDidDismiss()
                .then((retorno) => {
                if (retorno.data) {
                    this.palabraFiltro = retorno.data.item.nombre;
                }
                this.ultimoCocina = new _models_cocina__WEBPACK_IMPORTED_MODULE_5__["Cocina"]();
                this.cocinas = [];
                this.verMas();
            });
            return yield modal.present();
        });
    }
    cancelar() {
        this.modalCtrl.dismiss();
    }
};
SelectCocinaPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _Services_cocinas_service__WEBPACK_IMPORTED_MODULE_6__["CocinasService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _Services_loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInfiniteScroll"])
], SelectCocinaPage.prototype, "infiniteScroll", void 0);
SelectCocinaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-select-cocina',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./select-cocina.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/select-cocina/select-cocina.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./select-cocina.page.scss */ "./src/app/select-cocina/select-cocina.page.scss")).default]
    })
], SelectCocinaPage);



/***/ })

}]);
//# sourceMappingURL=select-cocina-select-cocina-module.js.map