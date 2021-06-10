(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~form-cocina-form-cocina-module~list-cocinas-list-cocinas-module~select-cocina-select-cocina-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-cocina/form-cocina.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form-cocina/form-cocina.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{titulo}}</ion-title>    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\" style=\"margin-top:50px\">\n\n    <form [formGroup]=\"datosForm\" >\n\n      <div [ngClass]=\"{'form-card': true, 'form-card-error': submitted && !datosForm.controls.nombre.valid}\">\n        <ion-text color=\"primary\">\n          <h4>Nombre *</h4>        \n        </ion-text>\n            \n        <ion-item>\n          <ion-input name=\"nombre\" type=\"text\" formControlName=\"nombre\" required></ion-input>\n        </ion-item>\n        <div *ngIf=\"submitted && f.nombre.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.nombre.errors.required\"><h5>Ingresa el nombre de la categoría</h5></div>\n        </div> \n      </div>\n    </form>\n  \n    <ion-item  class=\"item-card\">\n      <ion-button  size=\"large\" (click)=\"agregarCocinero()\"  expand=\"block\">Agregar Cocinero *</ion-button>\n    </ion-item>\n\n    <ion-item-sliding *ngFor=\"let cocinero of cocineros;let i= index\" class=\"item-card\" >    \n      <ion-item>\n        <ion-label>\n          <h3>{{cocinero.userEmail}}</h3>\n          <p>Estado invitacion: \n            <span *ngIf=\"cocinero.estado == 'pendiente'\" style=\"color:blue\">{{cocinero.estado}}</span>\n            <span *ngIf=\"cocinero.estado == 'aceptado'\" style=\"color:green\">{{cocinero.estado}}</span>\n            <span *ngIf=\"cocinero.estado == 'rechazado'\" style=\"color:red\">{{cocinero.estado}}</span>\n           </p>\n        </ion-label>            \n      </ion-item>\n      <ion-item-options side=\"end\">\n        <ion-item-option (click)=\"eliminarCocinero(i)\"><ion-icon name=\"trash\" ></ion-icon>Destituir</ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n\n  \n    <ion-button  class=\"button-rounded\" *ngIf=\"updating\"  color=\"danger\" (click)=\"elimiar()\">Eliminar Cocina</ion-button>\n \n</ion-content>\n<ion-footer>\n\n  <ion-toolbar>\n    <ion-button slot=\"end\" (click)=\"guardar()\">Guardar</ion-button>\n    \n    <ion-button slot=\"start\"  color=\"light\" (click)=\"cancelar()\">Cancelar</ion-button>\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "./src/app/Services/cocinas.service.ts":
/*!*********************************************!*\
  !*** ./src/app/Services/cocinas.service.ts ***!
  \*********************************************/
/*! exports provided: CocinasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CocinasService", function() { return CocinasService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base.service */ "./src/app/Services/base.service.ts");
/* harmony import */ var _comercios_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comercios.service */ "./src/app/Services/comercios.service.ts");





let CocinasService = class CocinasService extends _base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] {
    constructor(afs, comerciosService) {
        super(afs);
        this.afs = afs;
        this.comerciosService = comerciosService;
        this.comerciosService.getSelectedCommerce().subscribe(data => {
            // let comercio_seleccionadoId = localStorage.getItem('comercio_seleccionadoId'); 
            if (data) {
                this.setPath('comercios/' + data.id + '/cocinas');
            }
        });
    }
};
CocinasService.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _comercios_service__WEBPACK_IMPORTED_MODULE_4__["ComerciosService"] }
];
CocinasService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CocinasService);



/***/ }),

/***/ "./src/app/form-cocina/form-cocina.page.scss":
/*!***************************************************!*\
  !*** ./src/app/form-cocina/form-cocina.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0tY29jaW5hL2Zvcm0tY29jaW5hLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/form-cocina/form-cocina.page.ts":
/*!*************************************************!*\
  !*** ./src/app/form-cocina/form-cocina.page.ts ***!
  \*************************************************/
/*! exports provided: FormCocinaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormCocinaPage", function() { return FormCocinaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _Services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Services/toast.service */ "./src/app/Services/toast.service.ts");
/* harmony import */ var _models_cocina__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/cocina */ "./src/app/models/cocina.ts");
/* harmony import */ var _Services_cocinas_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Services/cocinas.service */ "./src/app/Services/cocinas.service.ts");
/* harmony import */ var _form_invitacion_form_invitacion_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../form-invitacion/form-invitacion.page */ "./src/app/form-invitacion/form-invitacion.page.ts");
/* harmony import */ var _Services_roles_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Services/roles.service */ "./src/app/Services/roles.service.ts");










let FormCocinaPage = class FormCocinaPage {
    constructor(formBuilder, navCtrl, cocinasService, modalCtrl, route, alertController, navParams, toastServices, rolesServices) {
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.cocinasService = cocinasService;
        this.modalCtrl = modalCtrl;
        this.route = route;
        this.alertController = alertController;
        this.navParams = navParams;
        this.toastServices = toastServices;
        this.rolesServices = rolesServices;
        this.submitted = false;
        this.updating = false;
        this.comercioId = "";
        this.cocineros = [];
        this.titulo = "Editar Cocina";
        this.datosForm = this.formBuilder.group({
            nombre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.datosForm = this.formBuilder.group({
            nombre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        if (this.navParams.get('cocina')) {
            this.cocina = new _models_cocina__WEBPACK_IMPORTED_MODULE_6__["Cocina"]();
            console.log(this.navParams.get('cocina'));
            this.cocina.asignarValores(this.navParams.get('cocina'));
            this.updating = true;
            this.titulo = "Editar Cocina";
            this.datosForm = this.formBuilder.group({
                nombre: [this.cocina.nombre, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            });
            this.cocina.cocineros.forEach(rolId => {
                console.log(rolId);
                var sub = this.rolesServices.get(rolId).subscribe(snap => {
                    var cocinero = snap.payload.data();
                    if (cocinero)
                        this.cocineros.push(cocinero);
                    sub.unsubscribe();
                });
            });
        }
        else {
            this.titulo = "Nueva Cocina";
            this.cocina = new _models_cocina__WEBPACK_IMPORTED_MODULE_6__["Cocina"]();
            this.cocina.comercioId = this.navParams.get('comercioId');
        }
    }
    get f() { return this.datosForm.controls; }
    guardar() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.datosForm.invalid) {
            this.toastServices.alert('Por favor completar todos los campos marcados con * antes de continuar', "");
            return;
        }
        this.cocina.nombre = this.datosForm.controls.nombre.value;
        if (this.updating) {
            this.cocinasService.update(this.cocina);
        }
        else {
            this.cocinasService.add(this.cocina).then(data => {
                console.log(data);
            });
        }
        this.modalCtrl.dismiss();
    }
    agregarCocinero() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _form_invitacion_form_invitacion_page__WEBPACK_IMPORTED_MODULE_8__["FormInvitacionPage"],
                componentProps: {
                    rol: "cocinero"
                }
            });
            modal.onDidDismiss()
                .then((retorno) => {
                if (retorno.data) {
                    this.cocina.cocineros.push(retorno.data);
                }
            });
            return yield modal.present();
        });
    }
    eliminarCocinero(index) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Está seguro que desea desvincular?',
                message: 'Se perderán los registros del mismo',
                buttons: [
                    {
                        text: 'Cancelar',
                        handler: (blah) => {
                        }
                    }, {
                        text: 'Desvincular',
                        handler: () => {
                            this.eliminarC(index);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    eliminarC(index) {
        console.log("Eliminando Cocinero");
        this.rolesServices.delete(this.cocina.cocineros[index]);
        this.cocina.cocineros.splice(index, 1);
        this.cocineros.splice(index, 1);
    }
    cancelar() {
        this.modalCtrl.dismiss();
    }
    elimiar() {
        this.presentAlertEliminar();
    }
    imagenSeleccionadaIcono(newValue) {
        console.log(newValue);
        this.cocina.foto = newValue;
    }
    presentAlertEliminar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Eliminar',
                message: 'Está seguro que desea eliminar la categoría?',
                buttons: [
                    {
                        text: 'Cancelar',
                        handler: (blah) => {
                        }
                    }, {
                        text: 'Eliminar',
                        handler: () => {
                            this.cocinasService.delete(this.cocina.id);
                            this.modalCtrl.dismiss();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
FormCocinaPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _Services_cocinas_service__WEBPACK_IMPORTED_MODULE_7__["CocinasService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"] },
    { type: _Services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
    { type: _Services_roles_service__WEBPACK_IMPORTED_MODULE_9__["RolesService"] }
];
FormCocinaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-cocina',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./form-cocina.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-cocina/form-cocina.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./form-cocina.page.scss */ "./src/app/form-cocina/form-cocina.page.scss")).default]
    })
], FormCocinaPage);



/***/ }),

/***/ "./src/app/models/cocina.ts":
/*!**********************************!*\
  !*** ./src/app/models/cocina.ts ***!
  \**********************************/
/*! exports provided: Cocina */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cocina", function() { return Cocina; });
class Cocina {
    constructor() {
        this.id = "";
        this.foto = "";
        this.comercioId = "";
        this.cocineros = [];
    }
    asignarValores(init) {
        Object.assign(this, init);
    }
}


/***/ })

}]);
//# sourceMappingURL=default~form-cocina-form-cocina-module~list-cocinas-list-cocinas-module~select-cocina-select-cocina-module.js.map