(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["form-egreso-caja-form-egreso-caja-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-egreso-caja/form-egreso-caja.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form-egreso-caja/form-egreso-caja.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title  size=\"small\">Egreso de caja</ion-title>    \n  </ion-toolbar>\n</ion-header>\n \n<ion-content  class=\"ion-padding\">\n\n  <ion-item class=\"item-card\">\n    <ion-label position=\"floating\">Caja</ion-label>\n    <ion-select [(ngModel)]=\"cajaSeleccionadaIndex\" (ionChange)=\"setearCaja()\">\n      <span *ngFor=\"let caja of cajas;let i=index\">\n        <ion-select-option [value]=\"i\">{{caja.nombre}}</ion-select-option>\n      </span>          \n    </ion-select> \n  </ion-item>\n\n  \n  <div class=\"form-card\">\n    <ion-text color=\"primary\">\n      <p>Total Efectivo {{totalActual | currency}}</p>\n    </ion-text> \n                \n    <ion-item>\n      <ion-label position=\"floating\">Monto *</ion-label>\n      <ion-input name=\"monto\" type=\"number\" [(ngModel)]=\"monto\" required></ion-input>\n    </ion-item>\n  </div>\n            \n  <div class=\"form-card\">\n    <ion-text color=\"primary\">\n      <h4>Motivo</h4>    \n    </ion-text> \n    <ion-item >\n      <ion-textarea [(ngModel)]=\"motivo\" required></ion-textarea>\n    </ion-item>     \n  </div>  \n\n  <ion-toolbar>\n    <ion-button class=\"button-rounded\" slot=\"end\" (click)=\"guardar()\">Guardar</ion-button>\n    \n    <ion-button class=\"button-rounded\" slot=\"start\"  color=\"light\" (click)=\"cancelar()\">Cancelar</ion-button>\n  </ion-toolbar>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/Services/clientes.service.ts":
/*!**********************************************!*\
  !*** ./src/app/Services/clientes.service.ts ***!
  \**********************************************/
/*! exports provided: ClientesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientesService", function() { return ClientesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _keyword_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./keyword.service */ "./src/app/Services/keyword.service.ts");
/* harmony import */ var _comercios_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comercios.service */ "./src/app/Services/comercios.service.ts");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./base.service */ "./src/app/Services/base.service.ts");








let ClientesService = class ClientesService extends _base_service__WEBPACK_IMPORTED_MODULE_7__["BaseService"] {
    constructor(afs, keywordService, comerciosService) {
        super(afs);
        this.afs = afs;
        this.keywordService = keywordService;
        this.comerciosService = comerciosService;
        this.comerciosService.getSelectedCommerce().subscribe(data => {
            // let comercio_seleccionadoId = localStorage.getItem('comercio_seleccionadoId'); 
            if (data) {
                console.log(data.id);
                this.setPath('comercios/' + data.id + '/clientes');
            }
        });
        this.collectionGroup = '/clientes';
    }
    create(data) {
        this.keywordService.agregarKeywords(data, [data.nombre, data.email]);
        const param = JSON.parse(JSON.stringify(data));
        return this.afs.collection(this.path).doc(data.id).set(Object.assign(Object.assign({}, param), { createdAt: firebase__WEBPACK_IMPORTED_MODULE_4__["firestore"].FieldValue.serverTimestamp() }));
    }
    getByEmail(email) {
        return this.afs.collection(this.path, ref => ref.where('email', '==', email)).valueChanges();
    }
    getByNombre(nombre) {
        return this.afs.collection(this.path, ref => ref.where('nombre', '==', nombre)).valueChanges();
    }
    getRef(id) {
        return this.afs.collection(this.path).doc(id).ref;
    }
    getAll() {
        return this.afs.collection(this.path).snapshotChanges();
    }
    update(cliente) {
        this.keywordService.agregarKeywords(cliente, [cliente.nombre, cliente.email]);
        console.log(cliente);
        const param = JSON.parse(JSON.stringify(cliente));
        return this.afs.collection(this.path).doc(cliente.id).set(Object.assign(Object.assign({}, param), { createdAt: firebase__WEBPACK_IMPORTED_MODULE_4__["firestore"].FieldValue.serverTimestamp() }));
    }
    delete(data) {
        //Debo eliminar primero cada subscripción
        if (data.subscripciones) {
            data.subscripciones.forEach(subscripcion => {
                this.afs.doc(subscripcion).delete();
            });
        }
        return this.afs.collection(this.path).doc(data.id).delete();
    }
    addCtaCorriente(clienteId, ctaCorrienteId) {
        let param = {
            ctaId: ctaCorrienteId
        };
        this.afs.collection(this.path + '/' + clienteId + '/ctasCorrientes').doc(ctaCorrienteId).set(param);
    }
    deleteCtaCorriente(clienteId, ctaCorrienteId) {
        this.afs.collection(this.path + '/' + clienteId + '/ctasCorrientes').doc(ctaCorrienteId).delete();
    }
    search(limit, orderBy, palabra, ultimo) {
        if (ultimo == "") {
            console.log("!!!!!! primero");
            console.log(palabra);
            console.log(orderBy);
            return this.afs.collection(this.path, ref => ref.where('keywords', 'array-contains', palabra)
                .orderBy(orderBy)
                .limit(limit)).snapshotChanges();
        }
        else {
            console.log(palabra);
            console.log(orderBy);
            return this.afs.collection(this.path, ref => ref.where('keywords', 'array-contains', palabra)
                .orderBy(orderBy)
                .startAfter(ultimo)
                .limit(limit)).snapshotChanges();
        }
    }
    //Esto para ver todos los beneficios o cuestiones del cliente particular en todo el entorno
    getAllClientesbyEmail(email) {
        return this.afs.collectionGroup(this.collectionGroup, ref => ref.where('email', '==', email)).get( /*{ source: 'server' }*/)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(actions => {
            const data = [];
            actions.forEach(a => {
                const item = a.data();
                item.id = a.id;
                data.push(item);
            });
            return data;
        }));
    }
};
ClientesService.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _keyword_service__WEBPACK_IMPORTED_MODULE_5__["KeywordService"] },
    { type: _comercios_service__WEBPACK_IMPORTED_MODULE_6__["ComerciosService"] }
];
ClientesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ClientesService);



/***/ }),

/***/ "./src/app/Services/keyword.service.ts":
/*!*********************************************!*\
  !*** ./src/app/Services/keyword.service.ts ***!
  \*********************************************/
/*! exports provided: KeywordService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeywordService", function() { return KeywordService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let KeywordService = class KeywordService {
    constructor() { }
    agregarKeywords(objeto, palabras) {
        objeto.keywords.push('');
        objeto.keywords.push(' ');
        console.log(palabras);
        palabras.forEach(palabra => {
            objeto.keywords.push(palabra);
            let p = palabra.toLowerCase().split(" ");
            p.forEach(element => {
                objeto.keywords = objeto.keywords.concat(this.createKeywords(element));
            });
        });
    }
    createKeywords(name) {
        const arrName = [];
        let curName = '';
        name.split('').forEach(letter => {
            curName += letter;
            arrName.push(curName);
        });
        return arrName;
    }
};
KeywordService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], KeywordService);



/***/ }),

/***/ "./src/app/form-egreso-caja/form-egreso-caja-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/form-egreso-caja/form-egreso-caja-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: FormEgresoCajaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormEgresoCajaPageRoutingModule", function() { return FormEgresoCajaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _form_egreso_caja_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-egreso-caja.page */ "./src/app/form-egreso-caja/form-egreso-caja.page.ts");




const routes = [
    {
        path: '',
        component: _form_egreso_caja_page__WEBPACK_IMPORTED_MODULE_3__["FormEgresoCajaPage"]
    }
];
let FormEgresoCajaPageRoutingModule = class FormEgresoCajaPageRoutingModule {
};
FormEgresoCajaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FormEgresoCajaPageRoutingModule);



/***/ }),

/***/ "./src/app/form-egreso-caja/form-egreso-caja.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/form-egreso-caja/form-egreso-caja.module.ts ***!
  \*************************************************************/
/*! exports provided: FormEgresoCajaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormEgresoCajaPageModule", function() { return FormEgresoCajaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _form_egreso_caja_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-egreso-caja-routing.module */ "./src/app/form-egreso-caja/form-egreso-caja-routing.module.ts");
/* harmony import */ var _form_egreso_caja_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form-egreso-caja.page */ "./src/app/form-egreso-caja/form-egreso-caja.page.ts");







let FormEgresoCajaPageModule = class FormEgresoCajaPageModule {
};
FormEgresoCajaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _form_egreso_caja_routing_module__WEBPACK_IMPORTED_MODULE_5__["FormEgresoCajaPageRoutingModule"]
        ],
        declarations: [_form_egreso_caja_page__WEBPACK_IMPORTED_MODULE_6__["FormEgresoCajaPage"]]
    })
], FormEgresoCajaPageModule);



/***/ }),

/***/ "./src/app/form-egreso-caja/form-egreso-caja.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/form-egreso-caja/form-egreso-caja.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0tZWdyZXNvLWNhamEvZm9ybS1lZ3Jlc28tY2FqYS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/form-egreso-caja/form-egreso-caja.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/form-egreso-caja/form-egreso-caja.page.ts ***!
  \***********************************************************/
/*! exports provided: FormEgresoCajaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormEgresoCajaPage", function() { return FormEgresoCajaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _Services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Services/authentication.service */ "./src/app/Services/authentication.service.ts");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Services_cajas_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Services/cajas.service */ "./src/app/Services/cajas.service.ts");
/* harmony import */ var _models_movimientoCaja__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models/movimientoCaja */ "./src/app/models/movimientoCaja.ts");
/* harmony import */ var _Services_movimientos_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Services/movimientos.service */ "./src/app/Services/movimientos.service.ts");
/* harmony import */ var _models_caja__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../models/caja */ "./src/app/models/caja.ts");
/* harmony import */ var _Services_toast_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Services/toast.service */ "./src/app/Services/toast.service.ts");
/* harmony import */ var _models_comercio__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../models/comercio */ "./src/app/models/comercio.ts");
/* harmony import */ var _Services_comercios_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Services/comercios.service */ "./src/app/Services/comercios.service.ts");














let FormEgresoCajaPage = class FormEgresoCajaPage {
    constructor(formBuilder, navCtrl, route, cajasService, authenticationService, firestore, movimientosService, toastServices, comerciosService, router) {
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.route = route;
        this.cajasService = cajasService;
        this.authenticationService = authenticationService;
        this.firestore = firestore;
        this.movimientosService = movimientosService;
        this.toastServices = toastServices;
        this.comerciosService = comerciosService;
        this.router = router;
        this.enumTipoMovimientoCaja = _models_movimientoCaja__WEBPACK_IMPORTED_MODULE_8__["EnumTipoMovimientoCaja"];
        this.submitted = false;
        this.totalActual = 0;
        this.cajas = [];
        this.cajaSeleccionadaIndex = -1;
        this.monto = 0;
        this.motivo = 0;
        this.metodoPagoSeleccionado = "efectivo";
        this.comercio = new _models_comercio__WEBPACK_IMPORTED_MODULE_12__["Comercio"]();
        this.caja = new _models_caja__WEBPACK_IMPORTED_MODULE_10__["Caja"]();
    }
    get f() { return this.datosForm.controls; }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.comercio.asignarValores(this.comerciosService.getSelectedCommerceValue());
        this.cajas = [];
        this.cajasService.list().subscribe((cajas) => {
            for (let i = 0; i < cajas.length; i++) {
                if (cajas[i].estado == "abierta") {
                    this.cajas.push(cajas[i]);
                }
            }
            console.log(this.cajas);
            if (this.cajas.length == 0) {
                this.toastServices.alert("Debes tener al menos una caja abierta", "");
                this.router.navigate(['/list-cajas']);
            }
            else {
                this.setCaja();
            }
        });
    }
    setCaja() {
        for (let i = 0; i < this.cajas.length; i++) {
            if (this.cajas[i].id == this.route.snapshot.params.cajaId) {
                this.cajaSeleccionadaIndex = i;
                this.caja = this.cajas[i];
                this.totalActual = this.cajas[i].totalEfectivo;
            }
        }
    }
    setearCaja() {
        this.caja = this.cajas[this.cajaSeleccionadaIndex];
        this.totalActual = this.caja[this.cajaSeleccionadaIndex].totalEfectivo;
    }
    guardar() {
        this.submitted = true;
        if (this.metodoPagoSeleccionado == "efectivo" && this.caja.id == "") {
            this.toastServices.alert('Por favor seleccione una caja antes de continuar', "");
            return;
        }
        if (this.metodoPagoSeleccionado == "efectivo" && this.monto > this.totalActual) {
            this.toastServices.alert("El monto de egreso no puede ser mayor al monto total de efectivo en caja", "");
            return;
        }
        this.movimientosService.agregarMovimientoCaja(this.caja.id, "", this.enumTipoMovimientoCaja.egreso, "", "efectivo", -this.monto, this.motivo);
        this.navCtrl.back();
    }
    cancelar() {
        this.navCtrl.back();
    }
};
FormEgresoCajaPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _Services_cajas_service__WEBPACK_IMPORTED_MODULE_7__["CajasService"] },
    { type: _Services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"] },
    { type: _Services_movimientos_service__WEBPACK_IMPORTED_MODULE_9__["MovimientosService"] },
    { type: _Services_toast_service__WEBPACK_IMPORTED_MODULE_11__["ToastService"] },
    { type: _Services_comercios_service__WEBPACK_IMPORTED_MODULE_13__["ComerciosService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
FormEgresoCajaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-egreso-caja',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./form-egreso-caja.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-egreso-caja/form-egreso-caja.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./form-egreso-caja.page.scss */ "./src/app/form-egreso-caja/form-egreso-caja.page.scss")).default]
    })
], FormEgresoCajaPage);



/***/ })

}]);
//# sourceMappingURL=form-egreso-caja-form-egreso-caja-module.js.map