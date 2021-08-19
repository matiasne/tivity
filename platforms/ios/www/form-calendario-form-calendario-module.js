(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["form-calendario-form-calendario-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-calendario/form-calendario.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form-calendario/form-calendario.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title  size=\"small\">Nuevo Calendario</ion-title>    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <form [formGroup]=\"datosForm\" >\n\n    <div [ngClass]=\"{'form-card': true, 'form-card-error': submitted && !datosForm.controls.nombre.valid}\">\n      <ion-text color=\"primary\">\n        <h4>Nombre *</h4>        \n      </ion-text>\n          \n      <ion-item>\n        <ion-input name=\"nombre\" type=\"text\" formControlName=\"nombre\" required></ion-input>\n      </ion-item>\n      <div *ngIf=\"submitted && f.nombre.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.nombre.errors.required\"><h5>Ingresa el nombre del calendario</h5></div>\n      </div> \n    </div>\n  </form>  \n\n  <div class=\"form-card\" *ngIf=\"canElimianr\">\n    <ion-text color=\"danger\">\n      <h5 color=\"danger\">zona de riesgo</h5>\n    </ion-text>      \n    <ion-button  color=\"danger\" (click)=\"eliminar()\">Eliminar Calendario</ion-button>\n  </div>\n\n  <ion-toolbar>\n    <ion-button slot=\"end\" (click)=\"guardar()\">Guardar</ion-button>\n    \n    <ion-button slot=\"start\"  color=\"light\" (click)=\"cancelar()\">Cancelar</ion-button>\n  </ion-toolbar>\n</ion-content>");

/***/ }),

/***/ "./src/app/Services/calendarios.service.ts":
/*!*************************************************!*\
  !*** ./src/app/Services/calendarios.service.ts ***!
  \*************************************************/
/*! exports provided: CalendariosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendariosService", function() { return CalendariosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base.service */ "./src/app/Services/base.service.ts");




let CalendariosService = class CalendariosService extends _base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] {
    constructor(afs) {
        super(afs);
        this.afs = afs;
        this.servicioId = "";
        this.calendarioId = "";
    }
    setPathIds(servicioId) {
        this.servicioId = servicioId;
        let comercioId = localStorage.getItem('comercio_seleccionadoId');
        console.log("comercios/" + comercioId + "/servicios/" + this.servicioId + "/calendarios");
        this.setPath("comercios/" + comercioId + "/servicios/" + this.servicioId + "/calendarios");
    }
    set(data) {
        this.servicioId = data.servicioId;
        const param = JSON.parse(JSON.stringify(data));
        let id = ""; //El id es el primer nombre! logica pensada para que reemplace al cambiarse el nombre del plan
        if (param.id != "") {
            id = param.id;
        }
        else {
            id = param.nombre;
        }
        console.log(id);
        console.log(param);
        console.log(this.path);
        return this.afs.collection(this.path).doc(id).set(param);
    }
};
CalendariosService.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
CalendariosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CalendariosService);



/***/ }),

/***/ "./src/app/form-calendario/form-calendario-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/form-calendario/form-calendario-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: FormCalendarioPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormCalendarioPageRoutingModule", function() { return FormCalendarioPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _form_calendario_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-calendario.page */ "./src/app/form-calendario/form-calendario.page.ts");




const routes = [
    {
        path: '',
        component: _form_calendario_page__WEBPACK_IMPORTED_MODULE_3__["FormCalendarioPage"]
    }
];
let FormCalendarioPageRoutingModule = class FormCalendarioPageRoutingModule {
};
FormCalendarioPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FormCalendarioPageRoutingModule);



/***/ }),

/***/ "./src/app/form-calendario/form-calendario.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/form-calendario/form-calendario.module.ts ***!
  \***********************************************************/
/*! exports provided: FormCalendarioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormCalendarioPageModule", function() { return FormCalendarioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _form_calendario_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-calendario-routing.module */ "./src/app/form-calendario/form-calendario-routing.module.ts");
/* harmony import */ var _form_calendario_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form-calendario.page */ "./src/app/form-calendario/form-calendario.page.ts");







let FormCalendarioPageModule = class FormCalendarioPageModule {
};
FormCalendarioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _form_calendario_routing_module__WEBPACK_IMPORTED_MODULE_5__["FormCalendarioPageRoutingModule"]
        ],
        declarations: [_form_calendario_page__WEBPACK_IMPORTED_MODULE_6__["FormCalendarioPage"]]
    })
], FormCalendarioPageModule);



/***/ }),

/***/ "./src/app/form-calendario/form-calendario.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/form-calendario/form-calendario.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0tY2FsZW5kYXJpby9mb3JtLWNhbGVuZGFyaW8ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/form-calendario/form-calendario.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/form-calendario/form-calendario.page.ts ***!
  \*********************************************************/
/*! exports provided: FormCalendarioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormCalendarioPage", function() { return FormCalendarioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Services/toast.service */ "./src/app/Services/toast.service.ts");
/* harmony import */ var _Services_calendarios_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Services/calendarios.service */ "./src/app/Services/calendarios.service.ts");







let FormCalendarioPage = class FormCalendarioPage {
    constructor(formBuilder, navCtrl, modalCtrl, navParams, alertController, firestore, toastServices, calendarioService) {
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.alertController = alertController;
        this.firestore = firestore;
        this.toastServices = toastServices;
        this.calendarioService = calendarioService;
        this.submitted = false;
        this.canElimianr = false;
        this.comercioId = "";
        this.datosForm = this.formBuilder.group({
            id: ['', null],
            nombre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        if (this.navParams.get('calendario')) {
            this.datosForm.patchValue(this.navParams.get('calendario'));
            if (this.navParams.get('calendario').id)
                this.canElimianr = true;
        }
    }
    ngOnInit() {
    }
    get f() { return this.datosForm.controls; }
    guardar() {
        this.submitted = true;
        if (this.datosForm.invalid) {
            this.toastServices.alert('Por favor completar todos los campos marcados con * antes de continuar', "");
            return;
        }
        this.modalCtrl.dismiss(this.datosForm.value);
    }
    cancelar() {
        this.modalCtrl.dismiss();
    }
    eliminar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Está seguro que desea eliminar la caja?',
                message: 'Se perderán todos los movimientos y pagos de la misma.',
                buttons: [
                    {
                        text: 'Cancelar',
                        handler: (blah) => {
                        }
                    }, {
                        text: 'Eliminar',
                        handler: () => {
                            this.modalCtrl.dismiss('eliminar');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
FormCalendarioPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] },
    { type: _Services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
    { type: _Services_calendarios_service__WEBPACK_IMPORTED_MODULE_6__["CalendariosService"] }
];
FormCalendarioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-calendario',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./form-calendario.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-calendario/form-calendario.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./form-calendario.page.scss */ "./src/app/form-calendario/form-calendario.page.scss")).default]
    })
], FormCalendarioPage);



/***/ })

}]);
//# sourceMappingURL=form-calendario-form-calendario-module.js.map