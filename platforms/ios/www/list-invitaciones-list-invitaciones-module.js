(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-invitaciones-list-invitaciones-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/list-invitaciones/list-invitaciones.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/list-invitaciones/list-invitaciones.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title  size=\"small\">Invitaciones</ion-title>    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content style=\"margin-top: 50px;\">\n\n  <div *ngIf=\"buscando\" class=\"mensaje FadeOut FadeIn\">\n    <img src=\"../../assets/img/buscando.fw.png\" alt=\"\">\n    <p>Cargando comandas, aguarde unos segundos por favor</p>\n  </div>\n\n  <div *ngIf=\"!buscando && items.length == 0\" class=\"mensaje FadeOut FadeIn\">\n    <img src=\"../../assets/img/invitaciones.fw.png\" alt=\"\">\n    <p>Aún no tienes invitaciones.</p>\n  </div>\n\n  <ion-list lines=\"none\">     \n    <ion-item  class=\"item-card\" *ngFor=\"let item of items\">\n      <ion-avatar slot=\"start\">\n        <img src=\"{{item.foto}}\" *ngIf=\"item.foto\">\n        <ion-icon name=\"people-circle-outline\" *ngIf=\"!item.foto\"></ion-icon>\n      </ion-avatar>      \n      <ion-label text-wrap> \n        <ion-text>\n          El usuario <b>{{item.adminEmail}}</b> quiere invitarte al comercio <b>{{item.comercioNombre}}</b> como <b>{{item.rol}}</b>\n        </ion-text>\n        <ion-toolbar>\n          <ion-button slot=\"start\" color=\"danger\" size=\"large\" (click)=\"eliminarInvitacion(item)\"  expand=\"block\">Rechazar</ion-button>   \n        <ion-button slot=\"end\" color=\"success\" size=\"large\" (click)=\"aceptarInvitacion(item)\"  expand=\"block\">Aceptar</ion-button>              \n        </ion-toolbar>\n        \n      </ion-label>         \n    </ion-item>    \n  </ion-list>\n  \n    \n</ion-content>\n");

/***/ }),

/***/ "./src/app/list-invitaciones/list-invitaciones-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/list-invitaciones/list-invitaciones-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: ListInvitacionesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListInvitacionesPageRoutingModule", function() { return ListInvitacionesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _list_invitaciones_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-invitaciones.page */ "./src/app/list-invitaciones/list-invitaciones.page.ts");




const routes = [
    {
        path: '',
        component: _list_invitaciones_page__WEBPACK_IMPORTED_MODULE_3__["ListInvitacionesPage"]
    }
];
let ListInvitacionesPageRoutingModule = class ListInvitacionesPageRoutingModule {
};
ListInvitacionesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ListInvitacionesPageRoutingModule);



/***/ }),

/***/ "./src/app/list-invitaciones/list-invitaciones.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/list-invitaciones/list-invitaciones.module.ts ***!
  \***************************************************************/
/*! exports provided: ListInvitacionesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListInvitacionesPageModule", function() { return ListInvitacionesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _list_invitaciones_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-invitaciones-routing.module */ "./src/app/list-invitaciones/list-invitaciones-routing.module.ts");
/* harmony import */ var _list_invitaciones_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-invitaciones.page */ "./src/app/list-invitaciones/list-invitaciones.page.ts");







let ListInvitacionesPageModule = class ListInvitacionesPageModule {
};
ListInvitacionesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _list_invitaciones_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListInvitacionesPageRoutingModule"]
        ],
        declarations: [_list_invitaciones_page__WEBPACK_IMPORTED_MODULE_6__["ListInvitacionesPage"]]
    })
], ListInvitacionesPageModule);



/***/ }),

/***/ "./src/app/list-invitaciones/list-invitaciones.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/list-invitaciones/list-invitaciones.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3QtaW52aXRhY2lvbmVzL2xpc3QtaW52aXRhY2lvbmVzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/list-invitaciones/list-invitaciones.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/list-invitaciones/list-invitaciones.page.ts ***!
  \*************************************************************/
/*! exports provided: ListInvitacionesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListInvitacionesPage", function() { return ListInvitacionesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _Services_comercios_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/comercios.service */ "./src/app/Services/comercios.service.ts");
/* harmony import */ var _Services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Services/authentication.service */ "./src/app/Services/authentication.service.ts");
/* harmony import */ var _Services_roles_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Services/roles.service */ "./src/app/Services/roles.service.ts");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_7__);








let ListInvitacionesPage = class ListInvitacionesPage {
    constructor(modalController, loadingController, router, route, authService, rolesServices, firestore, comercioService, rolesService) {
        this.modalController = modalController;
        this.loadingController = loadingController;
        this.router = router;
        this.route = route;
        this.authService = authService;
        this.rolesServices = rolesServices;
        this.firestore = firestore;
        this.comercioService = comercioService;
        this.rolesService = rolesService;
        this.items = [];
        this.palabraFiltro = "";
        this.ultimoItem = "";
        this.loadingActive = false;
        this.buscando = true;
    }
    ngOnInit() {
        this.rolesService.getAllRolesbyEmail(this.authService.getActualUser().email).subscribe(roles => {
            this.items = [];
            roles.forEach(rol => {
                console.log(rol);
                if (rol.estado == "pendiente")
                    this.items.push(rol);
            });
            this.buscando = false;
        });
    }
    ionViewDidEnter() {
    }
    ionViewDidLeave() {
        this.subsItems.unsubscribe();
    }
    eliminarInvitacion(item) {
        item.estado = "rechazada";
        this.rolesService.setPath('comercios/' + item.comercioId + '/roles');
        this.rolesService.update(item).then(data => {
        });
    }
    aceptarInvitacion(item) {
        item.estado = "aceptada";
        this.rolesService.setPath('comercios/' + item.comercioId + '/roles');
        this.rolesService.update(item).then(data => {
        });
    }
};
ListInvitacionesPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _Services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
    { type: _Services_roles_service__WEBPACK_IMPORTED_MODULE_6__["RolesService"] },
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"] },
    { type: _Services_comercios_service__WEBPACK_IMPORTED_MODULE_4__["ComerciosService"] },
    { type: _Services_roles_service__WEBPACK_IMPORTED_MODULE_6__["RolesService"] }
];
ListInvitacionesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-invitaciones',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./list-invitaciones.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/list-invitaciones/list-invitaciones.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./list-invitaciones.page.scss */ "./src/app/list-invitaciones/list-invitaciones.page.scss")).default]
    })
], ListInvitacionesPage);



/***/ })

}]);
//# sourceMappingURL=list-invitaciones-list-invitaciones-module.js.map