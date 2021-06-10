(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["form-subscripcion-form-subscripcion-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-subscripcion/form-subscripcion.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form-subscripcion/form-subscripcion.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Form Subscripción</ion-title>    \n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <div class=\"ion-padding\">\n    <form [formGroup]=\"datosForm\">\n     <ion-button size=\"large\" (click)=\"seleccionarCliente()\"  expand=\"block\">Seleccionar Cliente * </ion-button>\n     \n     <ion-button size=\"large\" (click)=\"seleccionarServicio()\"  expand=\"block\">Seleccionar Servicio * </ion-button>\n\n     <span *ngIf=\"cliente\">\n        {{cliente.nombre}}\n        <ion-button  (click)=\"eliminarCliente()\">Eliminar</ion-button>\n      </span>\n      <br>\n      <span *ngIf=\"servicio\">\n        > {{servicio.nombre}} <br>\n        {{servicio.planes[servicio.plan].nombre}}, {{servicio.planes[servicio.plan].dias}} días por {{servicio.planes[servicio.plan].precio}}<br>\n        {{servicio.descripcion_venta}}\n        <ion-button  (click)=\"eliminarServicio()\">Eliminar</ion-button>\n      </span>\n\n     <div *ngIf=\"servicio\">\n        \n      </div>\n     \n    </form>\n  </div>\n</ion-content>\n<ion-toolbar>\n  <ion-button size=\"large\" (click)=\"guardar()\"  expand=\"block\">Guardar</ion-button>\n  \n</ion-toolbar>");

/***/ }),

/***/ "./src/app/form-subscripcion/form-subscripcion-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/form-subscripcion/form-subscripcion-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: FormSubscripcionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormSubscripcionPageRoutingModule", function() { return FormSubscripcionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _form_subscripcion_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-subscripcion.page */ "./src/app/form-subscripcion/form-subscripcion.page.ts");




const routes = [
    {
        path: '',
        component: _form_subscripcion_page__WEBPACK_IMPORTED_MODULE_3__["FormSubscripcionPage"]
    }
];
let FormSubscripcionPageRoutingModule = class FormSubscripcionPageRoutingModule {
};
FormSubscripcionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FormSubscripcionPageRoutingModule);



/***/ }),

/***/ "./src/app/form-subscripcion/form-subscripcion.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/form-subscripcion/form-subscripcion.module.ts ***!
  \***************************************************************/
/*! exports provided: FormSubscripcionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormSubscripcionPageModule", function() { return FormSubscripcionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _form_subscripcion_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-subscripcion-routing.module */ "./src/app/form-subscripcion/form-subscripcion-routing.module.ts");
/* harmony import */ var _form_subscripcion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form-subscripcion.page */ "./src/app/form-subscripcion/form-subscripcion.page.ts");







let FormSubscripcionPageModule = class FormSubscripcionPageModule {
};
FormSubscripcionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _form_subscripcion_routing_module__WEBPACK_IMPORTED_MODULE_5__["FormSubscripcionPageRoutingModule"]
        ],
        declarations: [_form_subscripcion_page__WEBPACK_IMPORTED_MODULE_6__["FormSubscripcionPage"]]
    })
], FormSubscripcionPageModule);



/***/ }),

/***/ "./src/app/form-subscripcion/form-subscripcion.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/form-subscripcion/form-subscripcion.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0tc3Vic2NyaXBjaW9uL2Zvcm0tc3Vic2NyaXBjaW9uLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/form-subscripcion/form-subscripcion.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/form-subscripcion/form-subscripcion.page.ts ***!
  \*************************************************************/
/*! exports provided: FormSubscripcionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormSubscripcionPage", function() { return FormSubscripcionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _list_servicios_list_servicios_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../list-servicios/list-servicios.page */ "./src/app/list-servicios/list-servicios.page.ts");
/* harmony import */ var _Services_subscripciones_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Services/subscripciones.service */ "./src/app/Services/subscripciones.service.ts");
/* harmony import */ var _Services_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Services/authentication.service */ "./src/app/Services/authentication.service.ts");
/* harmony import */ var _add_servicio_subscripcion_add_servicio_subscripcion_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../add-servicio-subscripcion/add-servicio-subscripcion.page */ "./src/app/add-servicio-subscripcion/add-servicio-subscripcion.page.ts");
/* harmony import */ var _Services_toast_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Services/toast.service */ "./src/app/Services/toast.service.ts");
/* harmony import */ var _Services_clientes_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Services/clientes.service */ "./src/app/Services/clientes.service.ts");
/* harmony import */ var _Services_servicios_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Services/servicios.service */ "./src/app/Services/servicios.service.ts");
/* harmony import */ var _select_cliente_select_cliente_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../select-cliente/select-cliente.page */ "./src/app/select-cliente/select-cliente.page.ts");













let FormSubscripcionPage = class FormSubscripcionPage {
    constructor(formBuilder, modalController, router, subscripcionService, clientesService, servicioService, authService, toastServices, route) {
        this.formBuilder = formBuilder;
        this.modalController = modalController;
        this.router = router;
        this.subscripcionService = subscripcionService;
        this.clientesService = clientesService;
        this.servicioService = servicioService;
        this.authService = authService;
        this.toastServices = toastServices;
        this.route = route;
        this.submitted = false;
        this.titulo = "Nueva Subscripción";
        this.updating = false;
        this.datosForm = this.formBuilder.group({
            plan: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            pagoAdelantado: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            descipcion: [''],
            clienteRef: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            servicioRef: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            vendedorRef: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            vendedor_nombre: [''],
            createdAt: [''],
            fechaInicio: ['']
        });
        if (this.route.snapshot.params.id) {
            this.updating = true;
            this.titulo = "Editar Subscripción";
            this.subs = this.subscripcionService.get(this.route.snapshot.params.id).subscribe(data => {
                this.datosForm.patchValue(data.payload.data());
            });
        }
        else {
        }
    }
    ngOnInit() {
    }
    seleccionarCliente() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _select_cliente_select_cliente_page__WEBPACK_IMPORTED_MODULE_12__["SelectClientePage"]
            });
            modal.onDidDismiss()
                .then((retorno) => {
                if (retorno.data)
                    this.cliente = retorno.data.item;
            });
            return yield modal.present();
        });
    }
    seleccionarServicio() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _list_servicios_list_servicios_page__WEBPACK_IMPORTED_MODULE_5__["ListServiciosPage"]
            });
            modal.onDidDismiss()
                .then((retorno) => {
                if (retorno.data) {
                    console.log(retorno.data);
                    if (retorno.data) {
                        this.agregarServicio(retorno.data.item);
                    }
                }
            });
            return yield modal.present();
        });
    }
    agregarServicio(servicio) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _add_servicio_subscripcion_add_servicio_subscripcion_page__WEBPACK_IMPORTED_MODULE_8__["AddServicioSubscripcionPage"],
                componentProps: { servicio: servicio }
            });
            modal.onDidDismiss()
                .then((retorno) => {
                if (retorno.data) {
                    this.servicio = retorno.data.item;
                }
            });
            return yield modal.present();
        });
    }
    eliminarCliente() {
        this.cliente = "";
    }
    eliminarServicio() {
        this.servicio = "";
    }
    get f() { return this.datosForm.controls; }
    guardar() {
        this.submitted = true;
        var vendedorId = this.authService.getUID();
        console.log(vendedorId);
        this.datosForm.patchValue({
            vendedorRef: this.authService.getRef(vendedorId)
        });
        this.datosForm.patchValue({
            servicioRef: this.servicioService.getRef(this.servicio.id)
        });
        this.datosForm.patchValue({
            clienteRef: this.clientesService.getRef(this.cliente.id)
        });
        this.datosForm.patchValue({
            planRef: this.clientesService.getRef(this.servicio.plan.id)
        });
        this.datosForm.patchValue({
            pagoAdelantado: this.servicio.pagoAdelantado
        });
        this.datosForm.patchValue({
            descipcion_venta: this.servicio.descripcion_venta
        });
        this.datosForm.patchValue({
            fechaInicio: this.servicio.fechaInicio
        });
        var vendedor_nombre = this.authService.getNombre();
        console.log(vendedorId);
        this.datosForm.patchValue({
            vendedor_nombre: vendedor_nombre
        });
        console.log(this.datosForm.value);
        if (this.datosForm.invalid) {
            this.toastServices.alert('Por favor completar todos los campos marcados con * antes de continuar', "");
            return;
        }
        this.subscripcionService.add(this.datosForm.value).then(data => {
            console.log(data);
        });
    }
};
FormSubscripcionPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _Services_subscripciones_service__WEBPACK_IMPORTED_MODULE_6__["SubscripcionesService"] },
    { type: _Services_clientes_service__WEBPACK_IMPORTED_MODULE_10__["ClientesService"] },
    { type: _Services_servicios_service__WEBPACK_IMPORTED_MODULE_11__["ServiciosService"] },
    { type: _Services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"] },
    { type: _Services_toast_service__WEBPACK_IMPORTED_MODULE_9__["ToastService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
FormSubscripcionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-subscripcion',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./form-subscripcion.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-subscripcion/form-subscripcion.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./form-subscripcion.page.scss */ "./src/app/form-subscripcion/form-subscripcion.page.scss")).default]
    })
], FormSubscripcionPage);



/***/ })

}]);
//# sourceMappingURL=form-subscripcion-form-subscripcion-module.js.map