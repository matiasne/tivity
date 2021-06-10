(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-empleados-list-empleados-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/list-empleados/list-empleados.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/list-empleados/list-empleados.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>  \n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>  \n    <ion-title>Listado de Empleados</ion-title>    \n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content style=\"margin-top: 50px;\" class=\"ion-padding\">  \n  \n  <ion-row>    \n    <ion-input placeholder=\"Buscar\" style=\"border:1px solid rgb(206, 206, 206); border-radius: 5px;\"\n    [(ngModel)]=\"palabraFiltro\" (ionChange)=\"buscar()\"\n    ></ion-input>\n  </ion-row>\n\n  <div *ngIf=\"buscando\" class=\"mensaje FadeOut FadeIn\">\n    <img src=\"../../assets/img/buscando.fw.png\" alt=\"\">\n    <p>Cargando comandas, aguarde unos segundos por favor</p>\n  </div>\n\n  <div *ngIf=\"!buscando && items.length == 0\" class=\"mensaje FadeOut FadeIn\">\n    <img src=\"../../assets/img/ctasCorrientes.fw.png\" alt=\"\">\n    <p>Aún no tienes empleados.</p>\n  </div>\n\n  <ion-list lines=\"none\">\n    <ion-item-sliding *ngFor=\"let item of items\" class=\"item-card\" >    \n    \n      <ion-item>\n        <div slot=\"start\">\n          <img src=\"{{item.foto}}\" *ngIf=\"item.foto\">\n          <ion-icon name=\"person-outline\" *ngIf=\"!item.foto\"></ion-icon>\n        </div>      \n        <ion-label text-wrap>\n          <h2><b>{{item.userEmail}}</b> </h2>   \n          <p>{{item.rol}}</p>        \n        </ion-label>  \n      </ion-item>\n      <ion-item-options side=\"end\" *ngIf=\"user.email != item.userEmail\">\n        <ion-item-option color=\"danger\" (click)=\"desvincular(item)\"><ion-icon name=\"trash\" ></ion-icon>Desvincular</ion-item-option>\n      </ion-item-options>\n\n    </ion-item-sliding>\n  </ion-list>\n\n  <!-- fab placed to the bottom end -->\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"invitar()\">\n    <ion-fab-button>\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <div class=\"space\">\n    \n  </div> \n  \n</ion-content>\n\n");

/***/ }),

/***/ "./src/app/list-empleados/list-empleados-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/list-empleados/list-empleados-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ListEmpleadosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListEmpleadosPageRoutingModule", function() { return ListEmpleadosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _list_empleados_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-empleados.page */ "./src/app/list-empleados/list-empleados.page.ts");




const routes = [
    {
        path: '',
        component: _list_empleados_page__WEBPACK_IMPORTED_MODULE_3__["ListEmpleadosPage"]
    }
];
let ListEmpleadosPageRoutingModule = class ListEmpleadosPageRoutingModule {
};
ListEmpleadosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ListEmpleadosPageRoutingModule);



/***/ }),

/***/ "./src/app/list-empleados/list-empleados.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/list-empleados/list-empleados.module.ts ***!
  \*********************************************************/
/*! exports provided: ListEmpleadosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListEmpleadosPageModule", function() { return ListEmpleadosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _list_empleados_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-empleados-routing.module */ "./src/app/list-empleados/list-empleados-routing.module.ts");
/* harmony import */ var _list_empleados_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-empleados.page */ "./src/app/list-empleados/list-empleados.page.ts");







let ListEmpleadosPageModule = class ListEmpleadosPageModule {
};
ListEmpleadosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _list_empleados_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListEmpleadosPageRoutingModule"]
        ],
        declarations: [_list_empleados_page__WEBPACK_IMPORTED_MODULE_6__["ListEmpleadosPage"]]
    })
], ListEmpleadosPageModule);



/***/ }),

/***/ "./src/app/list-empleados/list-empleados.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/list-empleados/list-empleados.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3QtZW1wbGVhZG9zL2xpc3QtZW1wbGVhZG9zLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/list-empleados/list-empleados.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/list-empleados/list-empleados.page.ts ***!
  \*******************************************************/
/*! exports provided: ListEmpleadosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListEmpleadosPage", function() { return ListEmpleadosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _Services_roles_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/roles.service */ "./src/app/Services/roles.service.ts");
/* harmony import */ var _Services_usuarios_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/usuarios.service */ "./src/app/Services/usuarios.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _form_invitacion_form_invitacion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../form-invitacion/form-invitacion.page */ "./src/app/form-invitacion/form-invitacion.page.ts");
/* harmony import */ var _Services_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Services/authentication.service */ "./src/app/Services/authentication.service.ts");








let ListEmpleadosPage = class ListEmpleadosPage {
    constructor(authService, rolesService, usuariosService, modalCtrl, router) {
        this.authService = authService;
        this.rolesService = rolesService;
        this.usuariosService = usuariosService;
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.items = [];
        this.itemsAll = [];
        this.palabraFiltro = "";
        this.buscando = true;
    }
    ngOnInit() {
        this.user = this.authService.getActualUser();
        let comercio_seleccionadoId = localStorage.getItem('comercio_seleccionadoId');
        var rolSub = this.rolesService.getAllRolesbyComercio(comercio_seleccionadoId).subscribe(snapshot => {
            snapshot.forEach(snap => {
                var rol = snap.payload.doc.data();
                rol.id = snap.payload.doc.id;
                console.log(rol);
                this.itemsAll.push(rol);
            });
            this.buscando = false;
            this.buscar();
            rolSub.unsubscribe();
        });
    }
    buscar() {
        if (this.palabraFiltro != "") {
            this.items = [];
            this.itemsAll.forEach(item => {
                if (item.userEmail.toLowerCase().includes(this.palabraFiltro.toLowerCase())) {
                    this.items.push(item);
                    return;
                }
                if (item.rol.toLowerCase().includes(this.palabraFiltro.toLowerCase())) {
                    this.items.push(item);
                    return;
                }
            });
        }
        else {
            this.items = this.itemsAll;
        }
    }
    invitar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _form_invitacion_form_invitacion_page__WEBPACK_IMPORTED_MODULE_6__["FormInvitacionPage"],
                componentProps: {
                    rol: "owner"
                }
            });
            modal.onDidDismiss()
                .then((retorno) => {
                if (retorno.data) {
                    this.ngOnInit();
                }
            });
            return yield modal.present();
        });
    }
    desvincular(item) {
        //Acá segun el rol debo elimina el rol de base de datos y además buscar en el array correspondiente
        //rolComandatarios
        //etc...
    }
};
ListEmpleadosPage.ctorParameters = () => [
    { type: _Services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"] },
    { type: _Services_roles_service__WEBPACK_IMPORTED_MODULE_2__["RolesService"] },
    { type: _Services_usuarios_service__WEBPACK_IMPORTED_MODULE_3__["UsuariosService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
ListEmpleadosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-empleados',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./list-empleados.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/list-empleados/list-empleados.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./list-empleados.page.scss */ "./src/app/list-empleados/list-empleados.page.scss")).default]
    })
], ListEmpleadosPage);



/***/ })

}]);
//# sourceMappingURL=list-empleados-list-empleados-module.js.map