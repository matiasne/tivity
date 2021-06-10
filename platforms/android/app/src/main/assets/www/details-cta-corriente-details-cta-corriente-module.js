(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["details-cta-corriente-details-cta-corriente-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/details-cta-corriente/details-cta-corriente.page.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/details-cta-corriente/details-cta-corriente.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Detalles Cta. Corriente</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\" >\n\n  <ion-item class=\"form-select\"> \n    <ion-label position=\"floating\">Desde</ion-label>\n    <ion-select multiple=\"false\" (ionChange)=\"onChangeAtras($event)\">\n      <ion-select-option  [value]=\"1\" selected>Ayer</ion-select-option>\n      <ion-select-option  [value]=\"2\">2 días atras</ion-select-option>\n      <ion-select-option  [value]=\"7\">Una semana atrás</ion-select-option>\n    </ion-select>       \n  </ion-item> \n  \n  <ion-toolbar>  \n    <ion-text slot=\"start\" color=\"primary\">\n      <h4> {{ctaCorriente.montoTotal | currency}}</h4>        \n    </ion-text>\n    <ion-button slot=\"end\" color=\"danger\" size=\"large\" (click)=\"extraer()\"  expand=\"block\">Extraer</ion-button>\n    <ion-button slot=\"end\" color=\"success\" size=\"large\" (click)=\"depositar()\"  expand=\"block\">Depositar</ion-button>\n  </ion-toolbar> \n\n  \n  <ion-item >\n    <div slot=\"start\">\n      <ion-icon name=\"wallet-outline\"></ion-icon>\n    </div>      \n    <ion-label>\n      \n      <h2><b>{{ctaCorriente.nombre}}</b></h2>         \n      <p *ngFor=\"let cliente of clientes\">\n        {{cliente.nombre}} - DNI: {{cliente.documento}}\n      </p>           \n    </ion-label>  \n  </ion-item>\n\n\n  <ion-list lines=\"none\">   \n    <ion-item-sliding *ngFor=\"let item of items\" \n    [ngClass]=\"{\n      'item-card': true, \n      'pago-card': item.deposito,\n      'egreso-card': item.extraccion\n    }\"\n     >\n  <ion-item>\n    \n    <div style=\"color:#50b223\" *ngIf=\"item.deposito\">\n      <ion-icon name=\"caret-up-circle-outline\"></ion-icon>\n    </div> \n    \n    <div style=\"color:#b22323\" *ngIf=\"item.extraccion\">\n      <ion-icon name=\"caret-down-circle-outline\"></ion-icon>\n    </div>   \n\n    <ion-label *ngIf=\"item.deposito\">\n      <h2>Deposito: <b>{{item.monto | currency}}</b></h2> \n      <p>\n        {{item.motivo}}\n      </p>         \n      <p style=\"font-size: 12px;\">\n        {{item.vendedorNombre}} - {{item.createdAt.toDate() | date:'dd/MM/yyyy (EEE) - hh:mm aaa'}}\n      </p>           \n    </ion-label> \n\n    <ion-label *ngIf=\"item.extraccion\">\n      <h2>Extraccion: <b>{{item.monto | currency}}</b></h2>         \n      <p>\n        {{item.motivo}}\n      </p> \n      <p style=\"font-size: 12px;\">\n        {{item.vendedorNombre}} - {{item.createdAt.toDate() | date:'dd/MM/yyyy (EEE) - hh:mm aaa'}}\n      </p>           \n    </ion-label>   \n  </ion-item>\n  <ion-item-options side=\"end\">\n    <ion-item-option color=\"danger\" (click)=\"eliminar(item)\"><ion-icon name=\"trash\" ></ion-icon> Eliminar</ion-item-option>\n  </ion-item-options>\n\n</ion-item-sliding>\n</ion-list>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/Services/cta-corrientes.service.ts":
/*!****************************************************!*\
  !*** ./src/app/Services/cta-corrientes.service.ts ***!
  \****************************************************/
/*! exports provided: CtaCorrientesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CtaCorrientesService", function() { return CtaCorrientesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _clientes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./clientes.service */ "./src/app/Services/clientes.service.ts");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./base.service */ "./src/app/Services/base.service.ts");
/* harmony import */ var _comercios_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comercios.service */ "./src/app/Services/comercios.service.ts");







let CtaCorrientesService = class CtaCorrientesService extends _base_service__WEBPACK_IMPORTED_MODULE_5__["BaseService"] {
    constructor(firestore, clientesService, comerciosService) {
        super(firestore);
        this.firestore = firestore;
        this.clientesService = clientesService;
        this.comerciosService = comerciosService;
        this.comerciosService.getSelectedCommerce().subscribe(data => {
            // let comercio_seleccionadoId = localStorage.getItem('comercio_seleccionadoId'); 
            if (data) {
                this.setPath('comercios/' + data.id + '/ctascorrientes');
            }
        });
    }
    create(data) {
        data.id = this.firestore.createId();
        const param = JSON.parse(JSON.stringify(data));
        this.firestore.collection(this.path).add(Object.assign(Object.assign({}, param), { createdAt: firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"].FieldValue.serverTimestamp() }));
        data.coTitularesId.forEach(element => {
            this.clientesService.addCtaCorriente(element, data.id);
        });
    }
    get(documentId) {
        return this.firestore.collection(this.path).doc(documentId).snapshotChanges();
    }
    getByComercioCliente(cliente) {
        let comercio_seleccionadoId = localStorage.getItem('comercio_seleccionadoId');
        return this.firestore.collection(this.path, ref => ref.where('coTitularesId', 'array-contains', cliente.id)).snapshotChanges();
    }
    getByCliente(clienteId) {
        return this.firestore.collection(this.path, ref => ref.where('coTitularesId', 'array-contains', clienteId)).snapshotChanges();
    }
    getByClienteId(id) {
        return this.firestore.collection(this.path, ref => ref.where(id, "==", "clienteId")).snapshotChanges();
    }
};
CtaCorrientesService.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _clientes_service__WEBPACK_IMPORTED_MODULE_4__["ClientesService"] },
    { type: _comercios_service__WEBPACK_IMPORTED_MODULE_6__["ComerciosService"] }
];
CtaCorrientesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CtaCorrientesService);



/***/ }),

/***/ "./src/app/Services/movimientos.service.ts":
/*!*************************************************!*\
  !*** ./src/app/Services/movimientos.service.ts ***!
  \*************************************************/
/*! exports provided: MovimientosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovimientosService", function() { return MovimientosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _cta_corrientes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cta-corrientes.service */ "./src/app/Services/cta-corrientes.service.ts");
/* harmony import */ var _cajas_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cajas.service */ "./src/app/Services/cajas.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _models_ctacorriente__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/ctacorriente */ "./src/app/models/ctacorriente.ts");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./base.service */ "./src/app/Services/base.service.ts");
/* harmony import */ var _comercios_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./comercios.service */ "./src/app/Services/comercios.service.ts");









let MovimientosService = class MovimientosService extends _base_service__WEBPACK_IMPORTED_MODULE_7__["BaseService"] {
    constructor(afs, ctaCorrienteService, cajasService, comerciosService) {
        super(afs);
        this.afs = afs;
        this.ctaCorrienteService = ctaCorrienteService;
        this.cajasService = cajasService;
        this.comerciosService = comerciosService;
        this.comercioId = "";
        this.comerciosService.getSelectedCommerce().subscribe(data => {
            // let comercio_seleccionadoId = localStorage.getItem('comercio_seleccionadoId'); 
            if (data) {
                this.comercioId = data.id;
            }
        });
    }
    setearPath(cajaId) {
        this.setPath('comercios/' + this.comercioId + '/cajas/' + cajaId + '/movimientos');
    }
    getMovimientoCaja(cajaId, movId) {
        return this.afs.collection('comercios/' + this.comercioId + '/cajas/' + cajaId + '/movimientos').doc(movId).snapshotChanges();
    }
    getMovimientoCtaCorriente(ctaCorrienteId, movId, fechaDesde) {
        return this.afs.collection('comercios/' + this.comercioId + '/ctascorrientes/' + ctaCorrienteId + '/movimientos', ref => ref.where('createdAt', '>=', fechaDesde).orderBy('createdAt', "desc")).doc(movId).snapshotChanges();
    }
    getMovimientosCaja(cajaId, fechaDesde) {
        return this.afs.collection('comercios/' + this.comercioId + '/cajas/' + cajaId + '/movimientos', ref => ref.where('createdAt', '>=', fechaDesde).orderBy('createdAt', "desc")).snapshotChanges();
    }
    eliminarMovimientoCaja(caja, data) {
        this.afs.collection('comercios/' + this.comercioId + '/cajas/' + data.cajaId + '/movimientos').doc(data.id).delete();
        this.restarTotalCaja(data.cajaId, data.metodoPago, data.monto);
        if (data.depositoId != "") {
            console.log("Eliminando Deposito también " + data.ctaCorrienteId + " " + data.depositoId);
            this.restarTotalCtaCorriente(data.ctaCorrienteId, data.monto);
            this.afs.collection('comercios/' + this.comercioId + '/ctascorrientes/' + data.ctaCorrienteId + '/movimientos').doc(data.depositoId).delete();
        }
        if (data.extraccionId != "") {
            console.log("Eliminando Extracción también " + data.ctaCorrienteId + " " + data.extraccionId);
            this.restarTotalCtaCorriente(data.ctaCorrienteId, data.monto);
            this.afs.collection('comercios/' + this.comercioId + '/ctascorrientes/' + data.ctaCorrienteId + '/movimientos').doc(data.extraccionId).delete();
        }
    }
    restarTotalCaja(cajaId, metodo, monto) {
        const sfDocRef = this.afs.firestore.collection('comercios/' + this.comercioId + '/cajas').doc(cajaId);
        this.afs.firestore.runTransaction(transaction => 
        // This code may get re-run multiple times if there are conflicts.
        transaction.get(sfDocRef)
            .then(sfDoc => {
            // const newPopulation = sfDoc.data().population + 1;
            if (metodo == "efectivo") {
                transaction.update(sfDocRef, { totalEfectivo: sfDoc.data().totalEfectivo - monto });
            }
            if (metodo == "debito") {
                transaction.update(sfDocRef, { totalDebito: sfDoc.data().totalDebito - monto });
            }
            if (metodo == "credito") {
                transaction.update(sfDocRef, { totalCredito: sfDoc.data().totalCredito - monto });
            }
            if (metodo == "ctaCorriente") {
                transaction.update(sfDocRef, { totalCtaCorriente: sfDoc.data().totalCtaCorriente - monto });
            }
        }));
    }
    getMovimientosCtaCorriente(ctaCorrienteId) {
        return this.afs.collection('comercios/' + this.comercioId + '/ctascorrientes/' + ctaCorrienteId + '/movimientos/', ref => ref.orderBy('createdAt', "desc").limit(10)).snapshotChanges();
    }
    restarTotalCtaCorriente(ctaCorrienteId, monto) {
        const sfDocRef = this.afs.firestore.collection('comercios/' + this.comercioId + '/ctascorrientes').doc(ctaCorrienteId);
        this.afs.firestore.runTransaction(transaction => 
        // This code may get re-run multiple times if there are conflicts.
        transaction.get(sfDocRef)
            .then(sfDoc => {
            // const newPopulation = sfDoc.data().population + 1;
            transaction.update(sfDocRef, { montoTotal: sfDoc.data().montoTotal - monto });
        }));
    }
    crearMovimientoCtaCorriente(data) {
        console.log(data.ctaCorrienteId);
        this.afs.firestore.collection('comercios/' + this.comercioId + '/ctascorrientes').doc(data.ctaCorrienteId).get().then(doc => {
            let cta = new _models_ctacorriente__WEBPACK_IMPORTED_MODULE_6__["CtaCorriente"]("", "");
            cta.asignarValores(doc.data());
            cta.id = doc.id;
            data.fotoCtaCorriente = doc.data();
            cta.montoTotal = Number(cta.montoTotal) + Number(data.monto);
            const param1 = JSON.parse(JSON.stringify(cta));
            this.ctaCorrienteService.update(param1).then(data => {
            });
            const param2 = JSON.parse(JSON.stringify(data));
            this.afs.collection('comercios/' + this.comercioId + '/ctascorrientes/' + data.ctaCorrienteId + '/movimientos').doc(data.id).set(Object.assign(Object.assign({}, param2), { createdAt: firebase__WEBPACK_IMPORTED_MODULE_5__["firestore"].FieldValue.serverTimestamp() }));
        });
    }
    eliminarMovimientoCtaCorriente(data) {
        this.restarTotalCtaCorriente(data.ctaCorrienteId, data.monto);
        console.log(data);
        if (data.pagoId != "") {
            console.log("Eliminando Pago también" + data.cajaId + " " + data.pagoId);
            /* this.cajasService.get(this.comercioId,data.cajaId).subscribe(snap=>{
               var caja:Caja = new Caja();
               caja.asignarValores(snap.payload.data())
               caja.id = snap.payload.id;*/
            this.restarTotalCaja(data.cajaId, data.metodoPago, data.monto);
            this.afs.collection('comercios/' + this.comercioId + '/cajas/' + data.cajaId + '/movimientos').doc(data.pagoId).delete();
            //})        
        }
        const param = JSON.parse(JSON.stringify(data));
        this.afs.collection('comercios/' + this.comercioId + '/ctascorrientes/' + data.ctaCorrienteId + '/movimientos').doc(data.id).delete();
    }
};
MovimientosService.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _cta_corrientes_service__WEBPACK_IMPORTED_MODULE_3__["CtaCorrientesService"] },
    { type: _cajas_service__WEBPACK_IMPORTED_MODULE_4__["CajasService"] },
    { type: _comercios_service__WEBPACK_IMPORTED_MODULE_8__["ComerciosService"] }
];
MovimientosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MovimientosService);



/***/ }),

/***/ "./src/app/details-cta-corriente/details-cta-corriente-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/details-cta-corriente/details-cta-corriente-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: DetailsCtaCorrientePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsCtaCorrientePageRoutingModule", function() { return DetailsCtaCorrientePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _details_cta_corriente_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./details-cta-corriente.page */ "./src/app/details-cta-corriente/details-cta-corriente.page.ts");




const routes = [
    {
        path: '',
        component: _details_cta_corriente_page__WEBPACK_IMPORTED_MODULE_3__["DetailsCtaCorrientePage"]
    }
];
let DetailsCtaCorrientePageRoutingModule = class DetailsCtaCorrientePageRoutingModule {
};
DetailsCtaCorrientePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DetailsCtaCorrientePageRoutingModule);



/***/ }),

/***/ "./src/app/details-cta-corriente/details-cta-corriente.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/details-cta-corriente/details-cta-corriente.module.ts ***!
  \***********************************************************************/
/*! exports provided: DetailsCtaCorrientePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsCtaCorrientePageModule", function() { return DetailsCtaCorrientePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _details_cta_corriente_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./details-cta-corriente-routing.module */ "./src/app/details-cta-corriente/details-cta-corriente-routing.module.ts");
/* harmony import */ var _details_cta_corriente_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./details-cta-corriente.page */ "./src/app/details-cta-corriente/details-cta-corriente.page.ts");







let DetailsCtaCorrientePageModule = class DetailsCtaCorrientePageModule {
};
DetailsCtaCorrientePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _details_cta_corriente_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailsCtaCorrientePageRoutingModule"]
        ],
        declarations: [_details_cta_corriente_page__WEBPACK_IMPORTED_MODULE_6__["DetailsCtaCorrientePage"]]
    })
], DetailsCtaCorrientePageModule);



/***/ }),

/***/ "./src/app/details-cta-corriente/details-cta-corriente.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/details-cta-corriente/details-cta-corriente.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbHMtY3RhLWNvcnJpZW50ZS9kZXRhaWxzLWN0YS1jb3JyaWVudGUucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/details-cta-corriente/details-cta-corriente.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/details-cta-corriente/details-cta-corriente.page.ts ***!
  \*********************************************************************/
/*! exports provided: DetailsCtaCorrientePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsCtaCorrientePage", function() { return DetailsCtaCorrientePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _Services_cta_corrientes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/cta-corrientes.service */ "./src/app/Services/cta-corrientes.service.ts");
/* harmony import */ var _models_ctacorriente__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/ctacorriente */ "./src/app/models/ctacorriente.ts");
/* harmony import */ var _Services_clientes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/clientes.service */ "./src/app/Services/clientes.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _Services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Services/authentication.service */ "./src/app/Services/authentication.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _Services_loading_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Services/loading.service */ "./src/app/Services/loading.service.ts");
/* harmony import */ var _Services_movimientos_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Services/movimientos.service */ "./src/app/Services/movimientos.service.ts");










let DetailsCtaCorrientePage = class DetailsCtaCorrientePage {
    constructor(ctasCorreintesService, clientesServices, route, router, authenticationSerivce, alertController, loadingService, movimientosService) {
        this.ctasCorreintesService = ctasCorreintesService;
        this.clientesServices = clientesServices;
        this.route = route;
        this.router = router;
        this.authenticationSerivce = authenticationSerivce;
        this.alertController = alertController;
        this.loadingService = loadingService;
        this.movimientosService = movimientosService;
        this.clientes = [];
        this.palabraFiltro = "";
        this.items = [];
        this.fechaDesde = new Date();
        this.ctaCorriente = new _models_ctacorriente__WEBPACK_IMPORTED_MODULE_3__["CtaCorriente"](this.authenticationSerivce.getUID(), this.authenticationSerivce.getNombre());
        this.fechaDesde.setDate(this.fechaDesde.getDate() - 1);
    }
    ngOnInit() {
    }
    onChangeAtras(event) {
        this.fechaDesde.setDate(this.fechaDesde.getDate() - Number(event.target.value));
        this.refrescar();
    }
    ionViewDidEnter() {
        this.loadingService.presentLoading();
        this.ctaSubs = this.ctasCorreintesService.get(this.route.snapshot.params.id).subscribe(snapshot => {
            this.ctaCorriente.asignarValores(snapshot.payload.data());
            this.ctaCorriente.id = snapshot.payload.id;
            this.loadingService.dismissLoading();
            this.clientes = [];
            this.ctaCorriente.coTitularesId.forEach(titularId => {
                this.clienteSubs = this.clientesServices.get(titularId).subscribe(snap => {
                    let client = snap.payload.data();
                    client.id = snap.payload.id;
                    this.clientes.push(client);
                });
            });
        });
        this.refrescar();
    }
    refrescar() {
        this.loadingService.presentLoading();
        this.movSubs = this.movimientosService.getMovimientosCtaCorriente(this.route.snapshot.params.id).subscribe(snapshot => {
            this.loadingService.dismissLoading();
            this.items = [];
            snapshot.forEach((snap) => {
                var item = snap.payload.doc.data();
                item.id = snap.payload.doc.id;
                if (item.monto < 0)
                    item.extraccion = "true";
                else
                    item.deposito = "true";
                this.items.push(item);
            });
        });
    }
    ionViewDidLeave() {
        if (this.ctaSubs)
            this.ctaSubs.unsubscribe();
        if (this.movSubs)
            this.movSubs.unsubscribe();
        if (this.clienteSubs)
            this.clienteSubs.unsubscribe();
    }
    depositar() {
        this.router.navigate(['form-deposito-cta-corriente', {
                id: this.ctaCorriente.id
            }]);
    }
    extraer() {
        this.router.navigate(['form-extraccion-cta-corriente', {
                id: this.ctaCorriente.id
            }]);
    }
    eliminar(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Está seguro que desea eliminar?',
                message: 'Se perderán el registro del mismo',
                buttons: [
                    {
                        text: 'Cancelar',
                        handler: (blah) => {
                        }
                    }, {
                        text: 'Eliminar',
                        handler: () => {
                            this.movimientosService.eliminarMovimientoCtaCorriente(item);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
DetailsCtaCorrientePage.ctorParameters = () => [
    { type: _Services_cta_corrientes_service__WEBPACK_IMPORTED_MODULE_2__["CtaCorrientesService"] },
    { type: _Services_clientes_service__WEBPACK_IMPORTED_MODULE_4__["ClientesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _Services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
    { type: _Services_loading_service__WEBPACK_IMPORTED_MODULE_8__["LoadingService"] },
    { type: _Services_movimientos_service__WEBPACK_IMPORTED_MODULE_9__["MovimientosService"] }
];
DetailsCtaCorrientePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-details-cta-corriente',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./details-cta-corriente.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/details-cta-corriente/details-cta-corriente.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./details-cta-corriente.page.scss */ "./src/app/details-cta-corriente/details-cta-corriente.page.scss")).default]
    })
], DetailsCtaCorrientePage);



/***/ }),

/***/ "./src/app/models/ctacorriente.ts":
/*!****************************************!*\
  !*** ./src/app/models/ctacorriente.ts ***!
  \****************************************/
/*! exports provided: CtaCorriente */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CtaCorriente", function() { return CtaCorriente; });
class CtaCorriente {
    constructor(vendedorId, vendedorNombre) {
        this.vendedorId = vendedorId;
        this.vendedorNombre = vendedorNombre;
        this.id = "";
        this.comercioId = localStorage.getItem('comercio_seleccionadoId');
        this.nombre = "";
        this.coTitularesId = [];
        this.montoActual = 0;
        this.montoTotal = 0;
        this.comercios = [];
        this.clientes = [];
    }
    asignarValores(init) {
        Object.assign(this, init);
    }
}


/***/ })

}]);
//# sourceMappingURL=details-cta-corriente-details-cta-corriente-module.js.map