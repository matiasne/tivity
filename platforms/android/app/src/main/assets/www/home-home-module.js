(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>    \n    <ion-title>Home</ion-title>    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <div *ngIf=\"buscandoComercios\" class=\"mensaje FadeOut FadeIn\">\n    <img src=\"../../assets/img/buscando.fw.png\" alt=\"\">\n    <p>Cargando comercios, aguarde unos segundos por favor</p>\n  </div>\n\n  <div *ngIf=\"!buscandoComercios && comercios.length == 0\" class=\"mensaje FadeOut FadeIn\">\n    <img src=\"../../assets/img/comercio.fw.png\" alt=\"\">\n    <p>Aún no tienes comercios! Agregar uno nuevo</p>\n  </div>\n  \n\n  <ion-list lines=\"none\">     \n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"6\" size-xs=\"6\" size-sm=\"6\" size-md=\"4\" size-lg=\"3\" *ngFor=\"let item of comercios\" >\n          <ion-card class=\"FadeOut FadeIn\" (click)=\"seleccionar(item)\">\n            <img *ngIf=\"item.icono.url !=''\" width=\"500px\" src=\"{{item.icono}}\"/>\n            <img *ngIf=\"item.icono.url == ''\" width=\"500px\" src=\"../../assets/img/empty-image.fw.png\"/>\n            <ion-card-content text-center>\n              <h2><b>{{item.nombre}}</b> </h2>\n              <p>\n                {{item.rol.rol}}\n              </p>  \n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>   \n  </ion-list>\n  <ion-fab *ngIf=\"!buscandoComercios\"  vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"nuevoComercio()\">\n    <ion-fab-button>\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab> \n</ion-content>\n");

/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _Components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Components/components.module */ "./src/app/Components/components.module.ts");








let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _Components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _Services_comercios_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/comercios.service */ "./src/app/Services/comercios.service.ts");
/* harmony import */ var _Services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/authentication.service */ "./src/app/Services/authentication.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _Services_roles_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Services/roles.service */ "./src/app/Services/roles.service.ts");
/* harmony import */ var _Services_loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Services/loading.service */ "./src/app/Services/loading.service.ts");
/* harmony import */ var _Services_usuarios_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Services/usuarios.service */ "./src/app/Services/usuarios.service.ts");
/* harmony import */ var _Services_toast_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Services/toast.service */ "./src/app/Services/toast.service.ts");
/* harmony import */ var _form_comercio_form_comercio_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../form-comercio/form-comercio.page */ "./src/app/form-comercio/form-comercio.page.ts");
/* harmony import */ var _cambiar_plan_cambiar_plan_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../cambiar-plan/cambiar-plan.page */ "./src/app/cambiar-plan/cambiar-plan.page.ts");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../models/user */ "./src/app/models/user.ts");













let HomePage = class HomePage {
    constructor(authService, comerciosService, rolesService, router, loadingService, alertController, usuariosService, AuthenticationService, toastService, modalCtrl, platform) {
        this.authService = authService;
        this.comerciosService = comerciosService;
        this.rolesService = rolesService;
        this.router = router;
        this.loadingService = loadingService;
        this.alertController = alertController;
        this.usuariosService = usuariosService;
        this.AuthenticationService = AuthenticationService;
        this.toastService = toastService;
        this.modalCtrl = modalCtrl;
        this.platform = platform;
        this.comercios = [];
        this.conexionEstado = "offline";
        this.habilitadoCrearComercio = true;
        this.buscandoComercios = true;
        this.user = new _models_user__WEBPACK_IMPORTED_MODULE_12__["User"]();
        this.platform.backButton.subscribeWithPriority(10, () => {
            console.log('Handler was called!');
        });
    }
    ngOnInit() {
    }
    refrescar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.comercios = [];
            //  this.user.asignarValores(this.authService.getActualUser());
            this.buscandoComercios = true;
            this.comercios = [];
            console.log("!entrando a home");
            let roles = yield this.rolesService.getAllRolesbyEmailGET(this.authService.getActualUser().email).toPromise();
            console.log(roles);
            for (let i = 0; i < roles.length; i++) {
                if (roles[i].comercioId) {
                    if (roles[i].estado != "pendiente" && roles[i].estado != "rechazada") {
                        let obs = this.comerciosService.get(roles[i].comercioId).subscribe(data => {
                            if (data) {
                                let comercio = data;
                                comercio.rol = roles[i];
                                console.log(comercio);
                                this.comercios.push(comercio);
                                obs.unsubscribe();
                            }
                        });
                    }
                }
            }
            console.log(this.comercios);
            this.buscandoComercios = false;
        });
    }
    getAfipStatus() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('Este es el estado del servidor:');
        });
    }
    refresh(event) {
        console.log('Begin async operation');
        setTimeout(() => {
            this.refrescar();
            event.target.complete();
        }, 500);
    }
    ionViewDidEnter() {
        this.refrescar();
    }
    ionViewDidLeave() {
    }
    imprimir() {
        this.router.navigate(['prueba']);
    }
    nuevoComercio() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.user = this.authService.getActualUser();
            if (this.user.plan == _models_user__WEBPACK_IMPORTED_MODULE_12__["EnumPlanes"].free && this.comercios.length > 0) {
                this.mostrartCambiarDePlan();
                return;
            }
            const modal = yield this.modalCtrl.create({
                component: _form_comercio_form_comercio_page__WEBPACK_IMPORTED_MODULE_10__["FormComercioPage"],
                componentProps: undefined
            });
            modal.onDidDismiss()
                .then((retorno) => {
                this.refrescar();
            });
            return yield modal.present();
        });
    }
    mostrartCambiarDePlan() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _cambiar_plan_cambiar_plan_page__WEBPACK_IMPORTED_MODULE_11__["CambiarPlanPage"],
                componentProps: undefined
            });
            return yield modal.present();
        });
    }
    seleccionar(comercio) {
        this.user = this.authService.getActualUser();
        this.comerciosService.setSelectedCommerce(comercio.id);
        this.authService.setRol(comercio.rol);
        this.router.navigate(['dashboard-comercio', { id: comercio.id }]);
        this.usuariosService.setComecioSeleccionado(this.authService.getActualUserId(), comercio.id);
    }
};
HomePage.ctorParameters = () => [
    { type: _Services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: _Services_comercios_service__WEBPACK_IMPORTED_MODULE_2__["ComerciosService"] },
    { type: _Services_roles_service__WEBPACK_IMPORTED_MODULE_6__["RolesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _Services_loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _Services_usuarios_service__WEBPACK_IMPORTED_MODULE_8__["UsuariosService"] },
    { type: _Services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: _Services_toast_service__WEBPACK_IMPORTED_MODULE_9__["ToastService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map