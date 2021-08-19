(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["form-producto-opcion-form-producto-opcion-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-producto-opcion/form-producto-opcion.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form-producto-opcion/form-producto-opcion.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title  size=\"small\">Nueva Opción</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <form [formGroup]=\"datosForm\">\n    <div class=\"form-card\">\n      <ion-text color=\"primary\">\n        <h4>Nombre *</h4> \n      </ion-text>              \n      <ion-item [class.invalid]=\"submitted && !datosForm.controls.nombre.valid\">\n        <ion-input name=\"nombre\" type=\"text\" formControlName=\"nombre\" required></ion-input>\n      </ion-item>\n      <div *ngIf=\"submitted && f.nombre.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.nombre.errors.required\"><h5>Ingresa un nombre</h5></div>\n      </div>  \n    </div>\n    <div class=\"form-card\">\n      <ion-text color=\"primary\">\n        <h4>Variación al precio del producto: *</h4> \n      </ion-text>              \n      <ion-item [class.invalid]=\"submitted && !datosForm.controls.precioVariacion.valid\">\n        <ion-input name=\"precioVariacion\" type=\"number\" formControlName=\"precioVariacion\"></ion-input>\n      </ion-item>\n      <div *ngIf=\"submitted && f.precioVariacion.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.nombre.errors.required\"><h5>Ingresa un Numero</h5></div>\n      </div>  \n    </div>\n    <div class=\"form-card\">\n      <ion-text color=\"primary\">\n        <h4>Numero máximo de veces que se puede seleccionar</h4> \n      </ion-text>              \n      <ion-item [class.invalid]=\"submitted && !datosForm.controls.maximaSeleccion.valid\">\n        <ion-input name=\"maximaSeleccion\" type=\"number\" formControlName=\"maximaSeleccion\"></ion-input>\n      </ion-item>\n      <div *ngIf=\"submitted && f.maximaSeleccion.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.nombre.errors.required\"><h5>Ingresa un Numero</h5></div>\n      </div>  \n    </div>\n  </form>\n  <ion-toolbar>\n    <ion-button class=\"button-rounded\" slot=\"end\" (click)=\"guardar()\">Guardar</ion-button>\n    \n    <ion-button class=\"button-rounded\" slot=\"start\"  color=\"light\" (click)=\"cancelar()\">Cancelar</ion-button>\n  </ion-toolbar>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/form-producto-opcion/form-producto-opcion-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/form-producto-opcion/form-producto-opcion-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: FormProductoOpcionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormProductoOpcionPageRoutingModule", function() { return FormProductoOpcionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _form_producto_opcion_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-producto-opcion.page */ "./src/app/form-producto-opcion/form-producto-opcion.page.ts");




const routes = [
    {
        path: '',
        component: _form_producto_opcion_page__WEBPACK_IMPORTED_MODULE_3__["FormProductoOpcionPage"]
    }
];
let FormProductoOpcionPageRoutingModule = class FormProductoOpcionPageRoutingModule {
};
FormProductoOpcionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FormProductoOpcionPageRoutingModule);



/***/ }),

/***/ "./src/app/form-producto-opcion/form-producto-opcion.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/form-producto-opcion/form-producto-opcion.module.ts ***!
  \*********************************************************************/
/*! exports provided: FormProductoOpcionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormProductoOpcionPageModule", function() { return FormProductoOpcionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _form_producto_opcion_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-producto-opcion-routing.module */ "./src/app/form-producto-opcion/form-producto-opcion-routing.module.ts");
/* harmony import */ var _form_producto_opcion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form-producto-opcion.page */ "./src/app/form-producto-opcion/form-producto-opcion.page.ts");







let FormProductoOpcionPageModule = class FormProductoOpcionPageModule {
};
FormProductoOpcionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _form_producto_opcion_routing_module__WEBPACK_IMPORTED_MODULE_5__["FormProductoOpcionPageRoutingModule"]
        ],
        declarations: [_form_producto_opcion_page__WEBPACK_IMPORTED_MODULE_6__["FormProductoOpcionPage"]]
    })
], FormProductoOpcionPageModule);



/***/ }),

/***/ "./src/app/form-producto-opcion/form-producto-opcion.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/form-producto-opcion/form-producto-opcion.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0tcHJvZHVjdG8tb3BjaW9uL2Zvcm0tcHJvZHVjdG8tb3BjaW9uLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/form-producto-opcion/form-producto-opcion.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/form-producto-opcion/form-producto-opcion.page.ts ***!
  \*******************************************************************/
/*! exports provided: FormProductoOpcionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormProductoOpcionPage", function() { return FormProductoOpcionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _Services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/toast.service */ "./src/app/Services/toast.service.ts");





let FormProductoOpcionPage = class FormProductoOpcionPage {
    constructor(formBuilder, modalCtrl, toastServices) {
        this.formBuilder = formBuilder;
        this.modalCtrl = modalCtrl;
        this.toastServices = toastServices;
        this.submitted = false;
        this.datosForm = this.formBuilder.group({
            nombre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            precioVariacion: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            maximaSeleccion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            habilitado: ['true']
        });
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
};
FormProductoOpcionPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _Services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"] }
];
FormProductoOpcionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-producto-opcion',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./form-producto-opcion.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-producto-opcion/form-producto-opcion.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./form-producto-opcion.page.scss */ "./src/app/form-producto-opcion/form-producto-opcion.page.scss")).default]
    })
], FormProductoOpcionPage);



/***/ })

}]);
//# sourceMappingURL=form-producto-opcion-form-producto-opcion-module.js.map