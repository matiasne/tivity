(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["select-mesa-select-mesa-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/select-mesa/select-mesa.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/select-mesa/select-mesa.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>    \n    <ion-title  size=\"small\">Seleccionar Mesa</ion-title>    \n    <ion-button fill=\"clear\" (click)=\"cerrar()\" color=\"primary\" slot=\"end\">\n      <ion-icon name=\"close-outline\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content style=\"margin-top: 50px;\" class=\"ion-padding\">  \n  <ion-row>     \n      <ion-input placeholder=\"Buscar\" style=\"border:1px solid rgb(206, 206, 206); border-radius: 5px;\"\n      [(ngModel)]=\"palabraFiltro\" (ionChange)=\"buscar()\"\n      ></ion-input> \n  </ion-row>\n\n  <ion-list lines=\"none\">   \n    \n    <ion-item-sliding *ngFor=\"let item of items\" class=\"item-card\" >    \n\n      <ion-item (click)=\"seleccionar(item)\" > \n        <ion-label text-wrap>\n          <h2><b>{{item.nombre}}</b></h2>\n        </ion-label>  \n      </ion-item>\n    \n      <ion-item-options side=\"end\">\n        <ion-item-option (click)=\"editar(item)\"><ion-icon name=\"create\" ></ion-icon> Editar</ion-item-option>\n      </ion-item-options>\n  \n    </ion-item-sliding>\n  </ion-list>\n\n \n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"nuevo()\">\n    <ion-fab-button>\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <div class=\"space\">\n    \n  </div> \n  \n</ion-content>\n");

/***/ }),

/***/ "./src/app/Services/mesas.service.ts":
/*!*******************************************!*\
  !*** ./src/app/Services/mesas.service.ts ***!
  \*******************************************/
/*! exports provided: MesasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MesasService", function() { return MesasService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base.service */ "./src/app/Services/base.service.ts");
/* harmony import */ var _comercios_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comercios.service */ "./src/app/Services/comercios.service.ts");





let MesasService = class MesasService extends _base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] {
    constructor(afs, comerciosService) {
        super(afs);
        this.afs = afs;
        this.comerciosService = comerciosService;
        this.comerciosService.getSelectedCommerce().subscribe(data => {
            // let comercio_seleccionadoId = localStorage.getItem('comercio_seleccionadoId'); 
            if (data) {
                this.setPath('comercios/' + data.id + '/mesas');
            }
        });
    }
};
MesasService.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _comercios_service__WEBPACK_IMPORTED_MODULE_4__["ComerciosService"] }
];
MesasService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MesasService);



/***/ }),

/***/ "./src/app/select-mesa/select-mesa-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/select-mesa/select-mesa-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: SelectMesaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectMesaPageRoutingModule", function() { return SelectMesaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _select_mesa_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select-mesa.page */ "./src/app/select-mesa/select-mesa.page.ts");




const routes = [
    {
        path: '',
        component: _select_mesa_page__WEBPACK_IMPORTED_MODULE_3__["SelectMesaPage"]
    }
];
let SelectMesaPageRoutingModule = class SelectMesaPageRoutingModule {
};
SelectMesaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SelectMesaPageRoutingModule);



/***/ }),

/***/ "./src/app/select-mesa/select-mesa.module.ts":
/*!***************************************************!*\
  !*** ./src/app/select-mesa/select-mesa.module.ts ***!
  \***************************************************/
/*! exports provided: SelectMesaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectMesaPageModule", function() { return SelectMesaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _select_mesa_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./select-mesa-routing.module */ "./src/app/select-mesa/select-mesa-routing.module.ts");
/* harmony import */ var _select_mesa_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./select-mesa.page */ "./src/app/select-mesa/select-mesa.page.ts");







let SelectMesaPageModule = class SelectMesaPageModule {
};
SelectMesaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _select_mesa_routing_module__WEBPACK_IMPORTED_MODULE_5__["SelectMesaPageRoutingModule"]
        ],
        declarations: [_select_mesa_page__WEBPACK_IMPORTED_MODULE_6__["SelectMesaPage"]]
    })
], SelectMesaPageModule);



/***/ }),

/***/ "./src/app/select-mesa/select-mesa.page.scss":
/*!***************************************************!*\
  !*** ./src/app/select-mesa/select-mesa.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlbGVjdC1tZXNhL3NlbGVjdC1tZXNhLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/select-mesa/select-mesa.page.ts":
/*!*************************************************!*\
  !*** ./src/app/select-mesa/select-mesa.page.ts ***!
  \*************************************************/
/*! exports provided: SelectMesaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectMesaPage", function() { return SelectMesaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _Services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/loading.service */ "./src/app/Services/loading.service.ts");
/* harmony import */ var _Services_mesas_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Services/mesas.service */ "./src/app/Services/mesas.service.ts");






let SelectMesaPage = class SelectMesaPage {
    constructor(router, route, mesaService, modalCtrl, loadingService) {
        this.router = router;
        this.route = route;
        this.mesaService = mesaService;
        this.modalCtrl = modalCtrl;
        this.loadingService = loadingService;
        this.items = [];
        this.itemsAll = [];
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
        this.obtenerTodos();
        setTimeout(() => {
            // Set the focus to the input box of the ion-Searchbar component
            this.input.setFocus();
        }, 100);
    }
    ionViewDidLeave() {
        this.subsItems.unsubscribe();
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
        this.subsItems = this.mesaService.list().subscribe((mesas) => {
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
    nuevo() {
        this.modalCtrl.dismiss("nuevo");
    }
    /*
    nuevo(){
      this.router.navigate(['form-mesa']);
      this.modalCtrl.dismiss();
    }*/
    editar(item) {
        this.router.navigate(['form-mesa', { id: item.id }]);
        this.modalCtrl.dismiss();
    }
    cerrar() {
        this.modalCtrl.dismiss();
    }
};
SelectMesaPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _Services_mesas_service__WEBPACK_IMPORTED_MODULE_5__["MesasService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _Services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInput"], { static: true })
], SelectMesaPage.prototype, "input", void 0);
SelectMesaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-select-mesa',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./select-mesa.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/select-mesa/select-mesa.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./select-mesa.page.scss */ "./src/app/select-mesa/select-mesa.page.scss")).default]
    })
], SelectMesaPage);



/***/ })

}]);
//# sourceMappingURL=select-mesa-select-mesa-module.js.map