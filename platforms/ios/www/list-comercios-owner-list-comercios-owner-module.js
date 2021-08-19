(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-comercios-owner-list-comercios-owner-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/list-comercios-owner/list-comercios-owner.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/list-comercios-owner/list-comercios-owner.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title  size=\"small\">list-comercios-owner</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row>\n    \n    <ion-input placeholder=\"Buscar\" style=\"border:1px solid rgb(206, 206, 206); border-radius: 5px;\"\n    [(ngModel)]=\"palabraFiltro\" (ionChange)=\"buscar()\"\n    ></ion-input>\n\n  </ion-row>\n\n  <ion-list lines=\"none\">   \n    \n    <ion-item-sliding *ngFor=\"let item of items\" class=\"item-card\">    \n\n      <ion-item (click)=\"seleccionar(item)\">\n        <div slot=\"start\">\n          <img src=\"{{item.photoURL}}\" *ngIf=\"item.foto\">\n          <ion-icon name=\"home-outline\" *ngIf=\"!item.foto\"></ion-icon>\n        </div>      \n        <ion-label text-wrap>\n          <h2><b>{{item.nombre}}</b> </h2>   \n          <p>{{item.direccion}}</p>         \n        </ion-label>  \n      </ion-item>\n    \n      <ion-item-options side=\"end\">\n        <ion-item-option (click)=\"editar(item)\"><ion-icon name=\"create\" ></ion-icon> Editar</ion-item-option>\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/list-comercios-owner/list-comercios-owner-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/list-comercios-owner/list-comercios-owner-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ListComerciosOwnerPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComerciosOwnerPageRoutingModule", function() { return ListComerciosOwnerPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _list_comercios_owner_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-comercios-owner.page */ "./src/app/list-comercios-owner/list-comercios-owner.page.ts");




const routes = [
    {
        path: '',
        component: _list_comercios_owner_page__WEBPACK_IMPORTED_MODULE_3__["ListComerciosOwnerPage"]
    }
];
let ListComerciosOwnerPageRoutingModule = class ListComerciosOwnerPageRoutingModule {
};
ListComerciosOwnerPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ListComerciosOwnerPageRoutingModule);



/***/ }),

/***/ "./src/app/list-comercios-owner/list-comercios-owner.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/list-comercios-owner/list-comercios-owner.module.ts ***!
  \*********************************************************************/
/*! exports provided: ListComerciosOwnerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComerciosOwnerPageModule", function() { return ListComerciosOwnerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _list_comercios_owner_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-comercios-owner-routing.module */ "./src/app/list-comercios-owner/list-comercios-owner-routing.module.ts");
/* harmony import */ var _list_comercios_owner_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-comercios-owner.page */ "./src/app/list-comercios-owner/list-comercios-owner.page.ts");







let ListComerciosOwnerPageModule = class ListComerciosOwnerPageModule {
};
ListComerciosOwnerPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _list_comercios_owner_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListComerciosOwnerPageRoutingModule"]
        ],
        declarations: [_list_comercios_owner_page__WEBPACK_IMPORTED_MODULE_6__["ListComerciosOwnerPage"]]
    })
], ListComerciosOwnerPageModule);



/***/ }),

/***/ "./src/app/list-comercios-owner/list-comercios-owner.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/list-comercios-owner/list-comercios-owner.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3QtY29tZXJjaW9zLW93bmVyL2xpc3QtY29tZXJjaW9zLW93bmVyLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/list-comercios-owner/list-comercios-owner.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/list-comercios-owner/list-comercios-owner.page.ts ***!
  \*******************************************************************/
/*! exports provided: ListComerciosOwnerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComerciosOwnerPage", function() { return ListComerciosOwnerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _Services_comercios_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/comercios.service */ "./src/app/Services/comercios.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _Services_roles_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Services/roles.service */ "./src/app/Services/roles.service.ts");
/* harmony import */ var _Services_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Services/loading.service */ "./src/app/Services/loading.service.ts");







let ListComerciosOwnerPage = class ListComerciosOwnerPage {
    constructor(modalController, loadingController, router, route, rolesServices, comerciosServices, modalCtrl, loadingService) {
        this.modalController = modalController;
        this.loadingController = loadingController;
        this.router = router;
        this.route = route;
        this.rolesServices = rolesServices;
        this.comerciosServices = comerciosServices;
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
                if (item.direccion.toLowerCase().includes(this.palabraFiltro.toLowerCase())) {
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
        this.loadingService.presentLoading();
        this.subsItems = this.rolesServices.getAllOwnerId().subscribe((snapshot) => {
            this.itemsAll = [];
            snapshot.forEach((snap) => {
                var item = snap.payload.doc.data();
                item.id = snap.payload.doc.id;
                this.comerciosServices.get(item.comercioId).subscribe(snap => {
                    console.log(snap.payload.data());
                    this.itemsAll.push(snap.payload.data());
                });
            });
            this.loadingService.dismissLoading();
            this.buscar();
        });
    }
    seleccionar(item) {
        this.modalCtrl.dismiss({
            'item': item
        });
    }
    editar(item) {
    }
};
ListComerciosOwnerPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _Services_roles_service__WEBPACK_IMPORTED_MODULE_5__["RolesService"] },
    { type: _Services_comercios_service__WEBPACK_IMPORTED_MODULE_2__["ComerciosService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _Services_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"] }
];
ListComerciosOwnerPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-comercios-owner',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./list-comercios-owner.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/list-comercios-owner/list-comercios-owner.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./list-comercios-owner.page.scss */ "./src/app/list-comercios-owner/list-comercios-owner.page.scss")).default]
    })
], ListComerciosOwnerPage);



/***/ })

}]);
//# sourceMappingURL=list-comercios-owner-list-comercios-owner-module.js.map