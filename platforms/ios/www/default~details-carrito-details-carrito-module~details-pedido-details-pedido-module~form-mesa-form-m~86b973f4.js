(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~details-carrito-details-carrito-module~details-pedido-details-pedido-module~form-mesa-form-m~86b973f4"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-mesa/form-mesa.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form-mesa/form-mesa.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{titulo}}</ion-title>    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">  \n    <form [formGroup]=\"datosForm\">\n      <div [ngClass]=\"{'form-card': true, 'form-card-error': submitted && !datosForm.controls.nombre.valid}\">\n        <ion-text color=\"primary\">\n          <h4>Nombre *</h4>        \n        </ion-text>            \n        <ion-item>\n          <ion-input name=\"nombre\" type=\"text\" formControlName=\"nombre\" required></ion-input>\n        </ion-item>\n        <div *ngIf=\"submitted && f.nombre.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.nombre.errors.required\"><h5>Ingresa el nombre de la mesa</h5></div>\n        </div> \n      </div>\n    </form>\n    <a href=\"{{url}}\" target=\"_blank\">{{url}}</a> \n    <ion-card class=\"form-card\"> \n      <ngx-qrcode \n          [elementType]=\"elementType\" \n          [value] = \"value\"\n          cssClass = \"aclass\"\n          errorCorrectionLevel = \"L\">\n      </ngx-qrcode>\n    </ion-card>\n\n    <ion-item>\n      <ion-label>Habilitar Comandas Por Carta Digital</ion-label>\n      <ion-toggle [(ngModel)]=\"mesa.habilitarComandasApp\"></ion-toggle>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Habilitar Llamador de mozo</ion-label>\n      <ion-toggle [(ngModel)]=\"mesa.habilitarLlamadorMozoApp\"></ion-toggle>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Habilitar Notificaciones:</ion-label>\n      <ion-toggle [(ngModel)]=\"mesa.habilitarNotificaciones\"></ion-toggle>\n    </ion-item>\n\n    <div *ngIf=\"mesa.habilitarNotificaciones\">\n      <ion-item  class=\"item-card\">\n        <ion-button  size=\"large\" (click)=\"agregarEncargado()\"  expand=\"block\">Asignar Usuario * </ion-button>\n      </ion-item>\n\n      <ion-item-sliding *ngFor=\"let encargado of encargados;let i= index\" class=\"item-card\" >    \n        <ion-item>\n          <div slot=\"start\">\n            <ion-icon name=\"person-outline\"></ion-icon>\n          </div>   \n          <ion-label>\n            <h3>{{encargado.userEmail}}</h3>\n            <p>Estado invitacion: \n              <span *ngIf=\"encargado.estado == 'pendiente'\" style=\"color:blue\">{{encargado.estado}}</span>\n              <span *ngIf=\"encargado.estado == 'aceptado'\" style=\"color:green\">{{encargado.estado}}</span>\n              <span *ngIf=\"encargado.estado == 'rechazado'\" style=\"color:red\">{{encargado.estado}}</span>\n            </p>\n          </ion-label>            \n        </ion-item>\n        <ion-item-options side=\"end\">\n          <ion-item-option (click)=\"eliminarEncargado(i)\"><ion-icon name=\"trash\" ></ion-icon>Destituir</ion-item-option>\n        </ion-item-options>\n      </ion-item-sliding>\n    </div> \n    \n    <ion-button *ngIf=\"updating\" class=\"button-rounded\"  color=\"danger\" (click)=\"elimiar()\">Eliminar Mesa</ion-button>\n \n    \n</ion-content>\n<ion-footer class=\"ion-no-border ion-padding\">\n  <ion-toolbar>\n    <ion-button class=\"button-rounded\" slot=\"end\" (click)=\"guardar()\">Guardar</ion-button>    \n    <ion-button class=\"button-rounded\" slot=\"start\"  color=\"light\" (click)=\"cancelar()\">Cancelar</ion-button>\n  </ion-toolbar>\n</ion-footer>");

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

/***/ "./src/app/form-mesa/form-mesa.page.scss":
/*!***********************************************!*\
  !*** ./src/app/form-mesa/form-mesa.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0tbWVzYS9mb3JtLW1lc2EucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/form-mesa/form-mesa.page.ts":
/*!*********************************************!*\
  !*** ./src/app/form-mesa/form-mesa.page.ts ***!
  \*********************************************/
/*! exports provided: FormMesaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormMesaPage", function() { return FormMesaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _models_mesa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/mesa */ "./src/app/models/mesa.ts");
/* harmony import */ var _Services_mesas_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Services/mesas.service */ "./src/app/Services/mesas.service.ts");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _form_invitacion_form_invitacion_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../form-invitacion/form-invitacion.page */ "./src/app/form-invitacion/form-invitacion.page.ts");
/* harmony import */ var _Services_toast_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Services/toast.service */ "./src/app/Services/toast.service.ts");









let FormMesaPage = class FormMesaPage {
    constructor(formBuilder, modalCtrl, alertController, mesasServices, firestore, toastServices, navParams) {
        this.formBuilder = formBuilder;
        this.modalCtrl = modalCtrl;
        this.alertController = alertController;
        this.mesasServices = mesasServices;
        this.firestore = firestore;
        this.toastServices = toastServices;
        this.navParams = navParams;
        this.submitted = false;
        this.updating = false;
        this.comercioId = "";
        //public mesa:Mesa;
        this.title = 'app';
        this.elementType = 'url';
        this.value = 'Techiediaries';
        this.encargados = [];
        this.rolesNuevos = [];
        this.titulo = "";
        this.url = "";
        this.datosForm = this.formBuilder.group({
            nombre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    ngOnInit() {
        this.mesa = new _models_mesa__WEBPACK_IMPORTED_MODULE_4__["Mesa"]();
        let comercio_seleccionadoId = localStorage.getItem('comercio_seleccionadoId');
        this.comercioId = comercio_seleccionadoId;
        this.datosForm = this.formBuilder.group({
            nombre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        if (this.navParams.get('mesa')) {
            this.mesa.asignarValores(this.navParams.get('mesa'));
            console.log(this.mesa);
            this.datosForm = this.formBuilder.group({
                nombre: [this.mesa.nombre, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            });
            this.updating = true;
            this.titulo = "Editar Mesa";
            this.url = "https://socialup.web.app/details-comercio;id=" + comercio_seleccionadoId + ";mesaId=" + this.mesa.id;
            this.create(this.url);
        }
        else {
            this.titulo = "Nueva Mesa";
            this.mesa.id = this.firestore.createId();
            this.mesa.comercioId = comercio_seleccionadoId;
            this.value = "https://socialup.web.app";
            this.create("https://socialup.web.app/details-comercio;id=" + comercio_seleccionadoId + ";mesaId=" + this.mesa.id);
        }
    }
    agregarEncargado() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _form_invitacion_form_invitacion_page__WEBPACK_IMPORTED_MODULE_7__["FormInvitacionPage"],
                componentProps: {
                    rol: "encargado"
                }
            });
            modal.onDidDismiss()
                .then((retorno) => {
                if (retorno.data) {
                }
            });
            return yield modal.present();
        });
    }
    eliminarEncargado(index) {
    }
    create(data) {
        this.value = data;
    }
    get f() { return this.datosForm.controls; }
    guardar() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.datosForm.invalid) {
            this.toastServices.alert('Por favor completar todos los campos marcados con * antes de continuar', "");
            return;
        }
        this.mesa.nombre = this.datosForm.controls.nombre.value;
        if (this.updating) {
            this.mesasServices.update(this.mesa);
        }
        else {
            this.mesasServices.set(this.mesa.id, this.mesa);
        }
        this.modalCtrl.dismiss({
            'item': this.mesa
        });
    }
    cancelar() {
        this.modalCtrl.dismiss();
    }
    elimiar() {
        this.presentAlertEliminar();
    }
    presentAlertEliminar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Eliminar',
                message: 'Está seguro que desea eliminar la mesa?',
                buttons: [
                    {
                        text: 'Cancelar',
                        handler: (blah) => {
                        }
                    }, {
                        text: 'Eliminar',
                        handler: () => {
                            this.mesasServices.delete(this.mesa.id);
                            this.modalCtrl.dismiss();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
FormMesaPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _Services_mesas_service__WEBPACK_IMPORTED_MODULE_5__["MesasService"] },
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"] },
    { type: _Services_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FormMesaPage.prototype, "mesa", void 0);
FormMesaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-mesa',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./form-mesa.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-mesa/form-mesa.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./form-mesa.page.scss */ "./src/app/form-mesa/form-mesa.page.scss")).default]
    })
], FormMesaPage);



/***/ }),

/***/ "./src/app/models/mesa.ts":
/*!********************************!*\
  !*** ./src/app/models/mesa.ts ***!
  \********************************/
/*! exports provided: Mesa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mesa", function() { return Mesa; });
class Mesa {
    constructor() {
        this.id = "";
        this.comercioId = "";
        this.nombre = "";
        this.foto = "";
        this.rolEncargados = [];
        this.habilitarNotificaciones = false;
        this.recibePedidosApp = false;
        this.habilitarLlamadorMozoApp = false;
        this.habilitarComandasApp = false;
        this.productos = [];
        this.cobrado = false;
    }
    asignarValores(init) {
        Object.assign(this, init);
    }
}


/***/ })

}]);
//# sourceMappingURL=default~details-carrito-details-carrito-module~details-pedido-details-pedido-module~form-mesa-form-m~86b973f4.js.map