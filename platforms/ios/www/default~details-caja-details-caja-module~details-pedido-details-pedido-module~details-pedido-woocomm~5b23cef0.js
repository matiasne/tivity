(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~details-caja-details-caja-module~details-pedido-details-pedido-module~details-pedido-woocomm~5b23cef0"],{

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


/***/ }),

/***/ "./src/app/models/movimientoCaja.ts":
/*!******************************************!*\
  !*** ./src/app/models/movimientoCaja.ts ***!
  \******************************************/
/*! exports provided: EnumTipoMovimientoCaja, MovimientoCaja */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnumTipoMovimientoCaja", function() { return EnumTipoMovimientoCaja; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovimientoCaja", function() { return MovimientoCaja; });
var EnumTipoMovimientoCaja;
(function (EnumTipoMovimientoCaja) {
    EnumTipoMovimientoCaja[EnumTipoMovimientoCaja["ingreso"] = 1] = "ingreso";
    EnumTipoMovimientoCaja[EnumTipoMovimientoCaja["egreso"] = 2] = "egreso";
    EnumTipoMovimientoCaja[EnumTipoMovimientoCaja["devolucion"] = 3] = "devolucion";
    EnumTipoMovimientoCaja[EnumTipoMovimientoCaja["pago"] = 4] = "pago";
    EnumTipoMovimientoCaja[EnumTipoMovimientoCaja["apertura"] = 5] = "apertura";
    EnumTipoMovimientoCaja[EnumTipoMovimientoCaja["cierre"] = 6] = "cierre";
})(EnumTipoMovimientoCaja || (EnumTipoMovimientoCaja = {}));
class MovimientoCaja {
    constructor(vendedorId, vendedorNombre) {
        this.vendedorId = vendedorId;
        this.vendedorNombre = vendedorNombre;
        this.id = "";
        this.clienteId = "";
        this.servicioId = "";
        this.cajaId = "";
        this.metodoPago = "";
        this.monto = 0;
        this.motivo = "";
        this.ventaId = "";
        this.pagareId = "";
        this.ctaCorrienteId = "";
        this.depositoId = "";
        this.extraccionId = "";
        this.createdAt = new Date();
        this.isCierre = false;
        this.isApertura = false;
    }
    asignarValores(init) {
        Object.assign(this, init);
    }
}


/***/ })

}]);
//# sourceMappingURL=default~details-caja-details-caja-module~details-pedido-details-pedido-module~details-pedido-woocomm~5b23cef0.js.map