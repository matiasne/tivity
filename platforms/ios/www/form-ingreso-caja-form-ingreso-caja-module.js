(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["form-ingreso-caja-form-ingreso-caja-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-ingreso-caja/form-ingreso-caja.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form-ingreso-caja/form-ingreso-caja.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title  size=\"small\">Ingreso de caja</ion-title>    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content  class=\"ion-padding\">\n\n  <form [formGroup]=\"datosForm\">\n\n    <div class=\"form-card\">\n      <ion-text color=\"primary\">\n        <h4>Monto *</h4> \n      </ion-text> \n              \n      <ion-item [class.invalid]=\"submitted && !datosForm.controls.monto.valid\">\n        <ion-input name=\"monto\" type=\"number\" formControlName=\"monto\" required></ion-input>\n      </ion-item>\n      <div *ngIf=\"submitted && f.monto.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.monto.errors.required\"><h5>Ingresa un monto</h5></div>\n      </div>  \n    </div>\n\n    <div class=\"form-card\">\n      <ion-text color=\"primary\">\n        <h4>Motivo</h4>    \n      </ion-text> \n\n      <ion-item [class.invalid]=\"submitted && !datosForm.controls.motivo.valid\">\n        <ion-textarea formControlName=\"motivo\" required></ion-textarea>\n      </ion-item>\n      <div *ngIf=\"submitted && f.motivo.errors\" class=\"invalid-feedback\">\n        <div *ngIf=\"f.motivo.errors.required\"><h5>Ingresa un motivo</h5></div>\n      </div> \n    </div>  \n   \n   \n  </form>  \n\n  <ion-item class=\"item-card\">\n    <ion-label position=\"floating\">Método de Pago</ion-label>\n      <ion-select [(ngModel)]=\"metodoPagoSeleccionado\">\n        <ion-select-option  [value]=\"'efectivo'\">Efectivo</ion-select-option>\n        <ion-select-option  [value]=\"'debito'\">Débito</ion-select-option>\n        <ion-select-option  [value]=\"'credito'\">Crédito</ion-select-option>\n      </ion-select>    \n  </ion-item>\n\n  \n\n  <ion-toolbar>\n    <ion-button class=\"button-rounded\" slot=\"end\" (click)=\"guardar()\">Guardar</ion-button>\n    \n    <ion-button class=\"button-rounded\" slot=\"start\"  color=\"light\" (click)=\"cancelar()\">Cancelar</ion-button>\n  </ion-toolbar>\n\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/select-cliente/select-cliente.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/select-cliente/select-cliente.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>    \n    <ion-title  size=\"small\">Seleccionar Clientes</ion-title>  \n    <ion-button fill=\"clear\" (click)=\"cerrar()\" color=\"primary\" slot=\"end\">\n      <ion-icon name=\"close-outline\"></ion-icon>\n    </ion-button>  \n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content style=\"margin-top: 50px;\" class=\"ion-padding\">  \n  <ion-searchbar animated #search\n    placeholder=\"Buscar nombre\"\n    animated=\"true\"\n    showCancelButton=\"never\" \n    color=\"light\" \n    autocomplete=\"on\"\n    enterkeyhint=\"send\"\n    inputmode=\"text\"\n    type=\"text\"\n    debounce=\"300\"\n    value=\"{{palabraFiltro}}\"\n    (ionChange)=\"onChange($event)\">\n  </ion-searchbar>\n\n  <ion-list lines=\"none\">   \n    \n    <ion-item-sliding *ngFor=\"let item of clientes\" class=\"item-card\" >    \n\n      <ion-item (click)=\"seleccionar(item)\" >\n        <div slot=\"start\">\n          <img src=\"{{item.foto}}\" *ngIf=\"item.foto\">\n          <ion-icon name=\"person-outline\" *ngIf=\"!item.foto\"></ion-icon>\n        </div>      \n        <ion-label text-wrap>\n          <h2><b>{{item.nombre}}</b> </h2>   \n          <p>{{item.email}}</p>        \n          <p>{{item.documentoTipo}}: {{item.documento}}</p> \n          <p *ngIf=\"item.personaJuridica == 1\">Responsable Inscripto</p>\n          <p *ngIf=\"item.personaJuridica == 2\">Monotributista</p>\n          <p *ngIf=\"item.personaJuridica == 3\">Iva Exento</p>\n        </ion-label>  \n      </ion-item> \n      \n        <ion-item-options side=\"end\">\n          <ion-item-option (click)=\"editar(item)\"><ion-icon name=\"create\" ></ion-icon> Editar</ion-item-option>\n        </ion-item-options>\n  \n      </ion-item-sliding>\n\n \n  </ion-list>\n\n  <span *ngIf=\"clientes.length == 0\">\n    \n      No exite ningún cliente con ese Nombre o Email.\n      <ion-button color=\"primary\" (click)=\"nuevo()\">Crear Uno Nuevo!</ion-button>\n \n  </span>\n\n  <!-- fab placed to the bottom end -->\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"nuevo()\">\n    <ion-fab-button>\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"verMas()\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Cargando más trabajos...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n  \n</ion-content>");

/***/ }),

/***/ "./src/app/form-ingreso-caja/form-ingreso-caja-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/form-ingreso-caja/form-ingreso-caja-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: FormIngresoCajaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormIngresoCajaPageRoutingModule", function() { return FormIngresoCajaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _form_ingreso_caja_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-ingreso-caja.page */ "./src/app/form-ingreso-caja/form-ingreso-caja.page.ts");




const routes = [
    {
        path: '',
        component: _form_ingreso_caja_page__WEBPACK_IMPORTED_MODULE_3__["FormIngresoCajaPage"]
    }
];
let FormIngresoCajaPageRoutingModule = class FormIngresoCajaPageRoutingModule {
};
FormIngresoCajaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FormIngresoCajaPageRoutingModule);



/***/ }),

/***/ "./src/app/form-ingreso-caja/form-ingreso-caja.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/form-ingreso-caja/form-ingreso-caja.module.ts ***!
  \***************************************************************/
/*! exports provided: FormIngresoCajaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormIngresoCajaPageModule", function() { return FormIngresoCajaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _form_ingreso_caja_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-ingreso-caja-routing.module */ "./src/app/form-ingreso-caja/form-ingreso-caja-routing.module.ts");
/* harmony import */ var _form_ingreso_caja_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form-ingreso-caja.page */ "./src/app/form-ingreso-caja/form-ingreso-caja.page.ts");







let FormIngresoCajaPageModule = class FormIngresoCajaPageModule {
};
FormIngresoCajaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _form_ingreso_caja_routing_module__WEBPACK_IMPORTED_MODULE_5__["FormIngresoCajaPageRoutingModule"]
        ],
        declarations: [_form_ingreso_caja_page__WEBPACK_IMPORTED_MODULE_6__["FormIngresoCajaPage"]]
    })
], FormIngresoCajaPageModule);



/***/ }),

/***/ "./src/app/form-ingreso-caja/form-ingreso-caja.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/form-ingreso-caja/form-ingreso-caja.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0taW5ncmVzby1jYWphL2Zvcm0taW5ncmVzby1jYWphLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/form-ingreso-caja/form-ingreso-caja.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/form-ingreso-caja/form-ingreso-caja.page.ts ***!
  \*************************************************************/
/*! exports provided: FormIngresoCajaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormIngresoCajaPage", function() { return FormIngresoCajaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _Services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/authentication.service */ "./src/app/Services/authentication.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _models_cliente__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/cliente */ "./src/app/models/cliente.ts");
/* harmony import */ var _Services_cta_corrientes_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Services/cta-corrientes.service */ "./src/app/Services/cta-corrientes.service.ts");
/* harmony import */ var _Services_loading_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Services/loading.service */ "./src/app/Services/loading.service.ts");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _models_movimientoCaja__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../models/movimientoCaja */ "./src/app/models/movimientoCaja.ts");
/* harmony import */ var _Services_cajas_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Services/cajas.service */ "./src/app/Services/cajas.service.ts");
/* harmony import */ var _Services_movimientos_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Services/movimientos.service */ "./src/app/Services/movimientos.service.ts");
/* harmony import */ var _models_caja__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../models/caja */ "./src/app/models/caja.ts");
/* harmony import */ var _Services_toast_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Services/toast.service */ "./src/app/Services/toast.service.ts");
/* harmony import */ var _select_cliente_select_cliente_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../select-cliente/select-cliente.page */ "./src/app/select-cliente/select-cliente.page.ts");
/* harmony import */ var _Services_comercios_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../Services/comercios.service */ "./src/app/Services/comercios.service.ts");
/* harmony import */ var _models_comercio__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../models/comercio */ "./src/app/models/comercio.ts");


















let FormIngresoCajaPage = class FormIngresoCajaPage {
    constructor(formBuilder, route, authenticationService, navCtrl, ctasCorrientesService, loadingService, modalController, firestore, cajasService, movimientosService, toastServices, comerciosService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.authenticationService = authenticationService;
        this.navCtrl = navCtrl;
        this.ctasCorrientesService = ctasCorrientesService;
        this.loadingService = loadingService;
        this.modalController = modalController;
        this.firestore = firestore;
        this.cajasService = cajasService;
        this.movimientosService = movimientosService;
        this.toastServices = toastServices;
        this.comerciosService = comerciosService;
        this.enumTipoMovimientoCaja = _models_movimientoCaja__WEBPACK_IMPORTED_MODULE_10__["EnumTipoMovimientoCaja"];
        this.submitted = false;
        this.totalActual = 0;
        this.metodoPagoSeleccionado = "efectivo";
        this.ctasCorrientes = [];
        this.ctaCorrienteSelecccionadaId = "";
        this.cliente = new _models_cliente__WEBPACK_IMPORTED_MODULE_6__["Cliente"]();
        this.caja = new _models_caja__WEBPACK_IMPORTED_MODULE_13__["Caja"]();
        this.comercio = new _models_comercio__WEBPACK_IMPORTED_MODULE_17__["Comercio"]();
        this.datosForm = this.formBuilder.group({
            cajaId: [this.route.snapshot.params.cajaId, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            monto: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            motivo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        let comercio_seleccionadoId = localStorage.getItem('comercio_seleccionadoId');
        this.cajasService.get(this.route.snapshot.params.cajaId).subscribe((caja) => {
            this.caja = caja;
        });
    }
    get f() { return this.datosForm.controls; }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.comercio.asignarValores(this.comerciosService.getSelectedCommerceValue());
    }
    setearCtaCorriente() {
        console.log(this.ctaCorrienteSelecccionadaId);
    }
    guardar() {
        this.submitted = true;
        if (this.datosForm.invalid) {
            this.toastServices.alert('Por favor completar todos los campos marcados con * antes de continuar', "");
            return;
        }
        console.log();
        if (this.datosForm.controls.monto.value > this.route.snapshot.params.totalActual) {
            alert("El monto de egreso no puede ser mayor al monto total de efectivo en caja");
            return;
        }
        this.movimientosService.agregarMovimientoCaja(this.caja.id, "", this.enumTipoMovimientoCaja.ingreso, "", "efectivo", this.datosForm.controls.monto.value, this.datosForm.controls.motivo.value);
        this.navCtrl.back();
    }
    seleccionarCliente() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loadingService.presentLoading();
            const modal = yield this.modalController.create({
                component: _select_cliente_select_cliente_page__WEBPACK_IMPORTED_MODULE_15__["SelectClientePage"]
            });
            modal.present().then(() => {
            });
            modal.onDidDismiss()
                .then((retorno) => {
                if (retorno.data) {
                    this.cliente.asignarValores(retorno.data.item);
                    this.getCuentasCorrientes(retorno.data.item);
                }
            });
            return yield modal.present();
        });
    }
    eliminarCliente() {
        this.cliente = new _models_cliente__WEBPACK_IMPORTED_MODULE_6__["Cliente"]();
    }
    getCuentasCorrientes(cliente) {
        this.ctasCorrientesService.getByCliente(cliente.id).subscribe(snapshot => {
            this.ctasCorrientes = [];
            snapshot.forEach((snap) => {
                var item = snap.payload.doc.data();
                item.id = snap.payload.doc.id;
                this.ctasCorrientes.push(item);
                console.log(this.ctasCorrientes);
            });
        });
    }
    cancelar() {
        this.navCtrl.back();
    }
};
FormIngresoCajaPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _Services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _Services_cta_corrientes_service__WEBPACK_IMPORTED_MODULE_7__["CtaCorrientesService"] },
    { type: _Services_loading_service__WEBPACK_IMPORTED_MODULE_8__["LoadingService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_9__["AngularFirestore"] },
    { type: _Services_cajas_service__WEBPACK_IMPORTED_MODULE_11__["CajasService"] },
    { type: _Services_movimientos_service__WEBPACK_IMPORTED_MODULE_12__["MovimientosService"] },
    { type: _Services_toast_service__WEBPACK_IMPORTED_MODULE_14__["ToastService"] },
    { type: _Services_comercios_service__WEBPACK_IMPORTED_MODULE_16__["ComerciosService"] }
];
FormIngresoCajaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-ingreso-caja',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./form-ingreso-caja.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-ingreso-caja/form-ingreso-caja.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./form-ingreso-caja.page.scss */ "./src/app/form-ingreso-caja/form-ingreso-caja.page.scss")).default]
    })
], FormIngresoCajaPage);



/***/ }),

/***/ "./src/app/select-cliente/select-cliente.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/select-cliente/select-cliente.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlbGVjdC1jbGllbnRlL3NlbGVjdC1jbGllbnRlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/select-cliente/select-cliente.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/select-cliente/select-cliente.page.ts ***!
  \*******************************************************/
/*! exports provided: SelectClientePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectClientePage", function() { return SelectClientePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _Services_clientes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/clientes.service */ "./src/app/Services/clientes.service.ts");
/* harmony import */ var _models_cliente__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/cliente */ "./src/app/models/cliente.ts");
/* harmony import */ var _Services_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Services/loading.service */ "./src/app/Services/loading.service.ts");
/* harmony import */ var _form_cliente_form_cliente_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../form-cliente/form-cliente.page */ "./src/app/form-cliente/form-cliente.page.ts");








let SelectClientePage = class SelectClientePage {
    constructor(modalController, loadingController, router, route, clientesService, modalCtrl, loadingService) {
        this.modalController = modalController;
        this.loadingController = loadingController;
        this.router = router;
        this.route = route;
        this.clientesService = clientesService;
        this.modalCtrl = modalCtrl;
        this.loadingService = loadingService;
        this.items = [];
        this.itemsAll = [];
        this.palabraFiltro = "";
        this.ultimoItem = "";
        this.loadingActive = false;
        this.clientes = [];
    }
    ngOnInit() {
        this.ultimoCliente = new _models_cliente__WEBPACK_IMPORTED_MODULE_5__["Cliente"]();
        this.clientes = [];
        this.ultimoItem = "";
        this.verMas();
    }
    ionViewDidEnter() {
        if (this.route.snapshot.params.filtro)
            this.palabraFiltro = this.route.snapshot.params.filtro;
        setTimeout(() => {
            // Set the focus to the input box of the ion-Searchbar component
            this.ionSearchbar.setFocus();
        }, 100);
    }
    ionViewDidLeave() {
        this.subsItems.unsubscribe();
    }
    onChange(event) {
        this.palabraFiltro = event.target.value;
        this.ultimoCliente = new _models_cliente__WEBPACK_IMPORTED_MODULE_5__["Cliente"]();
        this.clientes = [];
        this.verMas();
    }
    verMas() {
        let limit = 5;
        var palabra = this.palabraFiltro.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        this.clientesSubs = this.clientesService.search(limit, "nombre", palabra, this.ultimoCliente.nombre).subscribe((snapshot) => {
            this.loadingService.dismissLoading();
            snapshot.forEach((snap) => {
                var producto = snap.payload.doc.data();
                producto.id = snap.payload.doc.id;
                producto.enCarrito = 0;
                this.clientes.push(producto);
            });
            this.ultimoCliente = this.clientes[this.clientes.length - 1];
            this.infiniteScroll.complete();
            this.infiniteScroll.disabled = false;
            if (this.clientes.length < limit) {
                this.infiniteScroll.disabled = true;
            }
            console.log(this.clientes);
            this.clientesSubs.unsubscribe();
        });
    }
    seleccionar(item) {
        this.modalCtrl.dismiss({
            'item': item
        });
    }
    nuevo() {
        this.modalCtrl.dismiss("nuevo");
    }
    editar(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loadingService.presentLoading();
            const modal = yield this.modalController.create({
                component: _form_cliente_form_cliente_page__WEBPACK_IMPORTED_MODULE_7__["FormClientePage"],
                componentProps: {
                    cliente: item
                }
            });
            modal.present().then(() => {
            });
            modal.onDidDismiss()
                .then((retorno) => {
                if (retorno.data) {
                    this.palabraFiltro = retorno.data.item.nombre;
                }
                this.ultimoCliente = new _models_cliente__WEBPACK_IMPORTED_MODULE_5__["Cliente"]();
                this.clientes = [];
                this.verMas();
            });
            return yield modal.present();
        });
    }
    cerrar() {
        this.modalCtrl.dismiss();
    }
};
SelectClientePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _Services_clientes_service__WEBPACK_IMPORTED_MODULE_4__["ClientesService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _Services_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInfiniteScroll"])
], SelectClientePage.prototype, "infiniteScroll", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSearchbar"], { static: true })
], SelectClientePage.prototype, "ionSearchbar", void 0);
SelectClientePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-select-cliente',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./select-cliente.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/select-cliente/select-cliente.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./select-cliente.page.scss */ "./src/app/select-cliente/select-cliente.page.scss")).default]
    })
], SelectClientePage);



/***/ })

}]);
//# sourceMappingURL=form-ingreso-caja-form-ingreso-caja-module.js.map