(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["form-invitacion-form-invitacion-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-invitacion/form-invitacion.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form-invitacion/form-invitacion.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title  size=\"small\">Nueva Invitación</ion-title>    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n    \n    <div class=\"form-card\">\n      <ion-text color=\"primary\">\n        <h4>Email *</h4>      \n      </ion-text>           \n      ingresa el mail del usuario a quien quieres invitar!\n      <ion-item>\n        <ion-input name=\"email\" type=\"text\" [(ngModel)]=\"email\"></ion-input>\n      </ion-item>\n    </div>\n\n    <div class=\"form-card\">\n      <ion-item>\n        <ion-label position=\"floating\">Rol</ion-label>\n        <ion-select [(ngModel)]=\"rol\">\n          <ion-select-option *ngFor=\"let rol of roles\" [value]=\"rol\">{{rol}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n    </div>\n    \n  \n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-button class=\"button-rounded\" slot=\"end\" (click)=\"guardar()\">Enviar</ion-button>    \n    <ion-button class=\"button-rounded\" slot=\"start\"  color=\"light\" (click)=\"cancelar()\">Cancelar</ion-button>\n  </ion-toolbar>\n</ion-footer>\n\n");

/***/ }),

/***/ "./src/app/form-invitacion/form-invitacion-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/form-invitacion/form-invitacion-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: FormInvitacionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormInvitacionPageRoutingModule", function() { return FormInvitacionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _form_invitacion_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-invitacion.page */ "./src/app/form-invitacion/form-invitacion.page.ts");




const routes = [
    {
        path: '',
        component: _form_invitacion_page__WEBPACK_IMPORTED_MODULE_3__["FormInvitacionPage"]
    }
];
let FormInvitacionPageRoutingModule = class FormInvitacionPageRoutingModule {
};
FormInvitacionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FormInvitacionPageRoutingModule);



/***/ }),

/***/ "./src/app/form-invitacion/form-invitacion.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/form-invitacion/form-invitacion.module.ts ***!
  \***********************************************************/
/*! exports provided: FormInvitacionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormInvitacionPageModule", function() { return FormInvitacionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _form_invitacion_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-invitacion-routing.module */ "./src/app/form-invitacion/form-invitacion-routing.module.ts");
/* harmony import */ var _form_invitacion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form-invitacion.page */ "./src/app/form-invitacion/form-invitacion.page.ts");







let FormInvitacionPageModule = class FormInvitacionPageModule {
};
FormInvitacionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _form_invitacion_routing_module__WEBPACK_IMPORTED_MODULE_5__["FormInvitacionPageRoutingModule"]
        ],
        declarations: [_form_invitacion_page__WEBPACK_IMPORTED_MODULE_6__["FormInvitacionPage"]]
    })
], FormInvitacionPageModule);



/***/ }),

/***/ "./src/app/form-invitacion/form-invitacion.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/form-invitacion/form-invitacion.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0taW52aXRhY2lvbi9mb3JtLWludml0YWNpb24ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/form-invitacion/form-invitacion.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/form-invitacion/form-invitacion.page.ts ***!
  \*********************************************************/
/*! exports provided: FormInvitacionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormInvitacionPage", function() { return FormInvitacionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _Services_roles_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/roles.service */ "./src/app/Services/roles.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _Services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/authentication.service */ "./src/app/Services/authentication.service.ts");
/* harmony import */ var _Services_comercios_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Services/comercios.service */ "./src/app/Services/comercios.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _models_rol__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../models/rol */ "./src/app/models/rol.ts");
/* harmony import */ var _Services_toast_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Services/toast.service */ "./src/app/Services/toast.service.ts");











let FormInvitacionPage = class FormInvitacionPage {
    constructor(rolesService, formBuilder, authService, comercioService, navCtrl, route, modalCtrl, navParams, firestore, toastServices) {
        this.rolesService = rolesService;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.comercioService = comercioService;
        this.navCtrl = navCtrl;
        this.route = route;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.firestore = firestore;
        this.toastServices = toastServices;
        this.submitted = false;
        this.comercio = "";
        this.rol = "";
        this.email = "";
        this.roles = [
            "Cocinero",
            "Mesero",
            "Cajero"
        ];
        this.rolesTipos = [];
        this.rol = this.navParams.get('rol');
        var user = this.authService.getActualUser();
        this.datosForm = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    ngOnInit() {
    }
    guardar() {
        if (this.email == "") {
            this.toastServices.mensaje("Por favor ingrese un mail antes de continuar", "");
            return;
        }
        if (this.rol == "") {
            this.toastServices.mensaje("Por favor ingrese un rol antes de continuar", "");
            return;
        }
        let nuevoRol = new _models_rol__WEBPACK_IMPORTED_MODULE_9__["Rol"]();
        nuevoRol.id = this.firestore.createId();
        nuevoRol.userEmail = this.email;
        nuevoRol.adminEmail = this.authService.getEmail();
        nuevoRol.comercioNombre = this.comercioService.getSelectedCommerceValue().nombre;
        nuevoRol.rol = this.rol;
        nuevoRol.estado = "pendiente";
        nuevoRol.comercioId = this.comercioService.getSelectedCommerceValue().id;
        //    rol.comercioRef = this.comercioService.getRef(this.comercioService.getSelectedCommerceValue().id);
        this.rolesService.create(nuevoRol);
        this.modalCtrl.dismiss();
    }
    cancelar() {
        this.modalCtrl.dismiss();
    }
    cambioRol() {
        this.rol;
    }
};
FormInvitacionPage.ctorParameters = () => [
    { type: _Services_roles_service__WEBPACK_IMPORTED_MODULE_2__["RolesService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _Services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
    { type: _Services_comercios_service__WEBPACK_IMPORTED_MODULE_5__["ComerciosService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavParams"] },
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestore"] },
    { type: _Services_toast_service__WEBPACK_IMPORTED_MODULE_10__["ToastService"] }
];
FormInvitacionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-invitacion',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./form-invitacion.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-invitacion/form-invitacion.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./form-invitacion.page.scss */ "./src/app/form-invitacion/form-invitacion.page.scss")).default]
    })
], FormInvitacionPage);



/***/ }),

/***/ "./src/app/models/rol.ts":
/*!*******************************!*\
  !*** ./src/app/models/rol.ts ***!
  \*******************************/
/*! exports provided: Rol */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rol", function() { return Rol; });
class Rol {
    constructor() {
        this.id = "";
        this.estado = "";
        this.comercioId = "";
        this.userEmail = "";
        this.userId = "";
        this.rol = "";
        this.comercioNombre = "";
        this.adminEmail = "";
    }
    asignarValores(init) {
        Object.assign(this, init);
    }
}


/***/ })

}]);
//# sourceMappingURL=form-invitacion-form-invitacion-module.js.map