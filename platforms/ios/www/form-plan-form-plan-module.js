(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["form-plan-form-plan-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-plan/form-plan.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form-plan/form-plan.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title  size=\"small\">Agregar Plan</ion-title>    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <form [formGroup]=\"datosForm\">\n\n    <div class=\"form-card\"> \n      <ion-text color=\"primary\">\n        <h4>Nombre *</h4>     \n      </ion-text> \n      \n          \n      <ion-item [class.invalid]=\"submitted && !datosForm.controls.nombre.valid\">\n        <ion-input name=\"nombre\" type=\"text\" formControlName=\"nombre\" required></ion-input>\n      </ion-item>\n      <div *ngIf=\"submitted && f.nombre.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.nombre.errors.required\"><h5>Ingresa un nombre</h5></div>\n      </div>\n    </div>\n\n    <div class=\"form-card\">\n      <ion-item [class.invalid]=\"submitted && !datosForm.controls.tipo.valid\" (ionChange)=\"tipoChange()\">  \n        <ion-label position=\"floating\">Periodo</ion-label>                  \n        <ion-select  formControlName=\"tipo\" value=\"datosForm.controls.tipo.value\">        \n          <ion-select-option [value]=\"'mensual'\" selected>mensual</ion-select-option>\n          <ion-select-option [value]=\"'anual'\" selected>anual</ion-select-option>\n          <ion-select-option [value]=\"'dias'\" selected>dias</ion-select-option>\n        </ion-select>        \n      </ion-item>\n      <div *ngIf=\"submitted && f.tipo.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.tipo.errors.required\"><h5>Seleccione un tipo</h5></div>\n      </div>\n    </div>\n    \n   \n    <div class=\"form-card\" *ngIf=\"datosForm.controls.tipo.value == 'dias'\">\n      <ion-text color=\"primary\">\n        <h4>Cantidad de días *</h4>     \n      </ion-text> \n          \n      <ion-item [class.invalid]=\"submitted && !datosForm.controls.dias.valid\">\n        <ion-input name=\"dias\" type=\"number\" formControlName=\"dias\" required></ion-input>\n      </ion-item>\n      <div *ngIf=\"submitted && f.dias.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.dias.errors.required\"><h5>Ingresa una cantidad de días</h5></div>\n      </div>\n    </div>\n    \n    \n    <div class=\"form-card\">\n      \n      <ion-text color=\"primary\">\n        <h4>Precio * </h4>  \n      </ion-text>  \n      <ion-item [class.invalid]=\"submitted && !datosForm.controls.precio.valid\">\n        <ion-input name=\"precio\" type=\"number\" formControlName=\"precio\" required></ion-input>\n      </ion-item>\n      <div *ngIf=\"submitted && f.precio.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.precio.errors.required\"><h5>Ingresa un precio</h5></div>\n      </div>\n    </div>\n    \n    <div class=\"form-card\" *ngIf=\"canEliminar\">\n      <ion-text color=\"danger\">\n        <h5 color=\"danger\">zona de riesgo</h5>\n      </ion-text>      \n      <ion-button  color=\"danger\" (click)=\"eliminar()\">Eliminar Plan</ion-button>\n    </div>\n\n   \n  </form>\n  <ion-toolbar>\n    <ion-button slot=\"end\" (click)=\"guardar()\">Guardar</ion-button>\n    \n    <ion-button slot=\"start\"  color=\"light\" (click)=\"cerrar()\">Cancelar</ion-button>\n  </ion-toolbar>\n</ion-content>\n\n");

/***/ }),

/***/ "./src/app/Services/planes.service.ts":
/*!********************************************!*\
  !*** ./src/app/Services/planes.service.ts ***!
  \********************************************/
/*! exports provided: PlanesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanesService", function() { return PlanesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base.service */ "./src/app/Services/base.service.ts");
/* harmony import */ var _comercios_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comercios.service */ "./src/app/Services/comercios.service.ts");





let PlanesService = class PlanesService extends _base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] {
    constructor(afs, comerciosService) {
        super(afs);
        this.afs = afs;
        this.comerciosService = comerciosService;
        this.servicioId = "";
        this.comercioId = "";
        this.comerciosService.getSelectedCommerce().subscribe(data => {
            // let comercio_seleccionadoId = localStorage.getItem('comercio_seleccionadoId'); 
            if (data) {
                this.comercioId = data.id;
            }
        });
    }
    setPathIds(servicioId) {
        this.servicioId = servicioId;
        console.log("comercios/" + this.comercioId + "/servicios/" + this.servicioId + "/planes");
        this.setPath("comercios/" + this.comercioId + "/servicios/" + this.servicioId + "/planes");
    }
};
PlanesService.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _comercios_service__WEBPACK_IMPORTED_MODULE_4__["ComerciosService"] }
];
PlanesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PlanesService);



/***/ }),

/***/ "./src/app/form-plan/form-plan-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/form-plan/form-plan-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: FormPlanPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormPlanPageRoutingModule", function() { return FormPlanPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _form_plan_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-plan.page */ "./src/app/form-plan/form-plan.page.ts");




const routes = [
    {
        path: '',
        component: _form_plan_page__WEBPACK_IMPORTED_MODULE_3__["FormPlanPage"]
    }
];
let FormPlanPageRoutingModule = class FormPlanPageRoutingModule {
};
FormPlanPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FormPlanPageRoutingModule);



/***/ }),

/***/ "./src/app/form-plan/form-plan.module.ts":
/*!***********************************************!*\
  !*** ./src/app/form-plan/form-plan.module.ts ***!
  \***********************************************/
/*! exports provided: FormPlanPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormPlanPageModule", function() { return FormPlanPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _form_plan_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-plan-routing.module */ "./src/app/form-plan/form-plan-routing.module.ts");
/* harmony import */ var _form_plan_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form-plan.page */ "./src/app/form-plan/form-plan.page.ts");







let FormPlanPageModule = class FormPlanPageModule {
};
FormPlanPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _form_plan_routing_module__WEBPACK_IMPORTED_MODULE_5__["FormPlanPageRoutingModule"]
        ],
        declarations: [_form_plan_page__WEBPACK_IMPORTED_MODULE_6__["FormPlanPage"]]
    })
], FormPlanPageModule);



/***/ }),

/***/ "./src/app/form-plan/form-plan.page.scss":
/*!***********************************************!*\
  !*** ./src/app/form-plan/form-plan.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0tcGxhbi9mb3JtLXBsYW4ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/form-plan/form-plan.page.ts":
/*!*********************************************!*\
  !*** ./src/app/form-plan/form-plan.page.ts ***!
  \*********************************************/
/*! exports provided: FormPlanPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormPlanPage", function() { return FormPlanPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _Services_planes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/planes.service */ "./src/app/Services/planes.service.ts");
/* harmony import */ var _Services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Services/toast.service */ "./src/app/Services/toast.service.ts");






let FormPlanPage = class FormPlanPage {
    constructor(formBuilder, modalCtrl, navParams, alertController, planesServices, toastServices) {
        this.formBuilder = formBuilder;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.alertController = alertController;
        this.planesServices = planesServices;
        this.toastServices = toastServices;
        this.submitted = false;
        this.titulo = "Nuevo Plan";
        this.canEliminar = false;
        this.serviceId = "";
        this.datosForm = this.formBuilder.group({
            id: [''],
            nombre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            tipo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            dias: [''],
            precio: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        if (this.navParams.get('plan')) {
            this.datosForm.patchValue(this.navParams.get('plan'));
            if (this.navParams.get('plan').id)
                this.canEliminar = true;
            this.titulo = "Editar Plan";
        }
    }
    ngOnInit() {
    }
    tipoChange() {
        console.log("change");
        if (this.datosForm.controls.tipo.value == "dias") {
            this.datosForm.controls.tipo.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        }
        else {
            console.log("Dias no requerido");
            this.datosForm.controls.tipo.clearValidators();
        }
    }
    get f() { return this.datosForm.controls; }
    guardar() {
        this.submitted = true; // stop here if form is invalid
        if (this.datosForm.invalid) {
            this.toastServices.alert('Por favor completar todos los campos marcados con * antes de continuar', "");
            return;
        }
        this.modalCtrl.dismiss(this.datosForm.value);
    }
    cerrar() {
        this.modalCtrl.dismiss(null);
    }
    eliminar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Está seguro que desea eliminar el plan?',
                message: 'Se perderán todos las subscripciones asociadas con el mismo.',
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
FormPlanPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _Services_planes_service__WEBPACK_IMPORTED_MODULE_4__["PlanesService"] },
    { type: _Services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] }
];
FormPlanPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-plan',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./form-plan.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-plan/form-plan.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./form-plan.page.scss */ "./src/app/form-plan/form-plan.page.scss")).default]
    })
], FormPlanPage);



/***/ })

}]);
//# sourceMappingURL=form-plan-form-plan-module.js.map