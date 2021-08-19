(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-notificaciones-list-notificaciones-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/list-notificaciones/list-notificaciones.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/list-notificaciones/list-notificaciones.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title  size=\"small\">Mis Notificaciones</ion-title>    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n  <div *ngIf=\"buscando\" class=\"mensaje FadeOut FadeIn\">\n    <img src=\"../../assets/img/buscando.fw.png\" alt=\"\">\n    <p>Cargando comandas, aguarde unos segundos por favor</p>\n  </div>\n\n  <div *ngIf=\"!buscando && notificaciones.length == 0\" class=\"mensaje FadeOut FadeIn\">\n    <img src=\"../../assets/img/notificaciones.fw.png\" alt=\"\">\n    <p>Aún no tienes notificaciones.</p>\n  </div>\n\n    <ion-item *ngFor=\"let notificacion of notificaciones;let i=index\" class=\"item-card\">   \n      <!--div slot=\"start\">\n        <img src=\"{{notificacion.foto}}\" *ngIf=\"notificacion.foto\">\n        <ion-icon name=\"cube-outline\" *ngIf=\"!notificacion.foto\"></ion-icon>\n      </div-->          \n      <ion-label>\n        <p>{{notificacion.titulo}}</p>\n        <h3>{{notificacion.mensaje}}</h3>\n        <p>{{notificacion.createdAt.toDate() | date:'dd/MM/yyyy (EEE) - hh:mm aaa'}}</p>       \n      </ion-label> \n      <ion-button slot=\"end\" color=\"danger\" (click)=\"eliminar(notificacion)\"><ion-icon name=\"trash\" ></ion-icon></ion-button>\n     \n    </ion-item>  \n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/list-notificaciones/list-notificaciones-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/list-notificaciones/list-notificaciones-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: ListNotificacionesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListNotificacionesPageRoutingModule", function() { return ListNotificacionesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _list_notificaciones_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-notificaciones.page */ "./src/app/list-notificaciones/list-notificaciones.page.ts");




const routes = [
    {
        path: '',
        component: _list_notificaciones_page__WEBPACK_IMPORTED_MODULE_3__["ListNotificacionesPage"]
    }
];
let ListNotificacionesPageRoutingModule = class ListNotificacionesPageRoutingModule {
};
ListNotificacionesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ListNotificacionesPageRoutingModule);



/***/ }),

/***/ "./src/app/list-notificaciones/list-notificaciones.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/list-notificaciones/list-notificaciones.module.ts ***!
  \*******************************************************************/
/*! exports provided: ListNotificacionesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListNotificacionesPageModule", function() { return ListNotificacionesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _list_notificaciones_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-notificaciones-routing.module */ "./src/app/list-notificaciones/list-notificaciones-routing.module.ts");
/* harmony import */ var _list_notificaciones_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-notificaciones.page */ "./src/app/list-notificaciones/list-notificaciones.page.ts");







let ListNotificacionesPageModule = class ListNotificacionesPageModule {
};
ListNotificacionesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _list_notificaciones_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListNotificacionesPageRoutingModule"]
        ],
        declarations: [_list_notificaciones_page__WEBPACK_IMPORTED_MODULE_6__["ListNotificacionesPage"]]
    })
], ListNotificacionesPageModule);



/***/ }),

/***/ "./src/app/list-notificaciones/list-notificaciones.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/list-notificaciones/list-notificaciones.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3Qtbm90aWZpY2FjaW9uZXMvbGlzdC1ub3RpZmljYWNpb25lcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/list-notificaciones/list-notificaciones.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/list-notificaciones/list-notificaciones.page.ts ***!
  \*****************************************************************/
/*! exports provided: ListNotificacionesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListNotificacionesPage", function() { return ListNotificacionesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _Services_notifificaciones_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/notifificaciones-app.service */ "./src/app/Services/notifificaciones-app.service.ts");
/* harmony import */ var _Services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/authentication.service */ "./src/app/Services/authentication.service.ts");




let ListNotificacionesPage = class ListNotificacionesPage {
    constructor(notificacionesAppService, authService) {
        this.notificacionesAppService = notificacionesAppService;
        this.authService = authService;
        this.notificaciones = [];
        this.buscando = true;
    }
    ionViewDidEnter() {
        let usuario = this.authService.getActualUser();
        console.log(usuario);
        this.notiSub = this.notificacionesAppService.getAll(usuario.uid).subscribe(snapshot => {
            this.notificaciones = [];
            this.buscando = false;
            snapshot.forEach((snap) => {
                var item = snap.payload.doc.data();
                item.id = snap.payload.doc.id;
                this.notificaciones.push(item);
            });
            console.log(this.notificaciones);
        });
    }
    ionViewDidLeave() {
        this.notificaciones.forEach(element => {
            if (element.estado == "pendiente") {
                element.estado = "leida";
                this.notificacionesAppService.update(element);
            }
        });
        this.notiSub.unsubscribe();
    }
    eliminar(item) {
        this.notificacionesAppService.delete(item);
    }
    ngOnInit() {
    }
};
ListNotificacionesPage.ctorParameters = () => [
    { type: _Services_notifificaciones_app_service__WEBPACK_IMPORTED_MODULE_2__["NotifificacionesAppService"] },
    { type: _Services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
ListNotificacionesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-notificaciones',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./list-notificaciones.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/list-notificaciones/list-notificaciones.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./list-notificaciones.page.scss */ "./src/app/list-notificaciones/list-notificaciones.page.scss")).default]
    })
], ListNotificacionesPage);



/***/ })

}]);
//# sourceMappingURL=list-notificaciones-list-notificaciones-module.js.map