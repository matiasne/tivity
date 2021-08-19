(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["select-beneficio-select-beneficio-module"],{

/***/ "./src/app/Services/beneficios.service.ts":
/*!************************************************!*\
  !*** ./src/app/Services/beneficios.service.ts ***!
  \************************************************/
/*! exports provided: BeneficiosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeneficiosService", function() { return BeneficiosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _models_beneficio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/beneficio */ "./src/app/models/beneficio.ts");
/* harmony import */ var _models_cliente__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/cliente */ "./src/app/models/cliente.ts");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./base.service */ "./src/app/Services/base.service.ts");
/* harmony import */ var _comercios_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./comercios.service */ "./src/app/Services/comercios.service.ts");
/* harmony import */ var _pedido_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pedido.service */ "./src/app/Services/pedido.service.ts");









let BeneficiosService = class BeneficiosService extends _base_service__WEBPACK_IMPORTED_MODULE_6__["BaseService"] {
    constructor(afs, pedidosService, comerciosService) {
        super(afs);
        this.afs = afs;
        this.pedidosService = pedidosService;
        this.comerciosService = comerciosService;
        this.comercioId = "";
        this.setPath('beneficios');
    }
    activarBeneficiosMonto(pedido) {
        let enumDisp = _models_beneficio__WEBPACK_IMPORTED_MODULE_4__["EnumBeneficioDisparador"];
        if (pedido.clienteId) {
            let obs = this.list().subscribe(data => {
                data.forEach((beneficio) => {
                    if (beneficio.disparador == enumDisp.compraMayorA.toString()) {
                        if (this.pedidosService.getTotal(pedido) > Number(beneficio.monto)) {
                            let cliente = new _models_cliente__WEBPACK_IMPORTED_MODULE_5__["Cliente"]();
                            cliente.id = pedido.clienteId;
                            cliente.email = pedido.clienteEmail;
                            this.agregarBeneficioAUsuario(cliente, beneficio);
                        }
                    }
                });
                obs.unsubscribe();
            });
        }
    }
    activarBeneficioRegistro(cliente) {
        let enumDisp = _models_beneficio__WEBPACK_IMPORTED_MODULE_4__["EnumBeneficioDisparador"];
        let obs = this.list().subscribe(data => {
            data.forEach((beneficio) => {
                if (beneficio.disparador == enumDisp.primerRegitro.toString()) {
                    this.agregarBeneficioAUsuario(cliente, beneficio);
                }
            });
        });
    }
    agregarBeneficioAUsuario(cliente, beneficio) {
        beneficio.comercioId = this.comerciosService.getSelectedCommerceId();
        beneficio.clienteId = cliente.id;
        return this.afs.collection("comercios/" + this.comerciosService.getSelectedCommerceId() + "/clientes/" + cliente.id + "/beneficiosAdquiridos").add(beneficio);
    }
    eliminarBeneficioAUsuario(cliente, beneficio) {
        return this.afs.collection("comercios/" + this.comerciosService.getSelectedCommerceId() + "/clientes/" + cliente.id + "/beneficiosAdquiridos").doc(beneficio.id).delete();
    }
    getByCliente(id) {
        return this.afs.collection("comercios/" + this.comerciosService.getSelectedCommerceId() + "/clientes/" + id + "/beneficiosAdquiridos").snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(changes => {
            return changes.map(a => {
                const data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                data.fromCache = a.payload.doc.metadata.fromCache;
                return data;
            });
        }));
    }
};
BeneficiosService.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _pedido_service__WEBPACK_IMPORTED_MODULE_8__["PedidoService"] },
    { type: _comercios_service__WEBPACK_IMPORTED_MODULE_7__["ComerciosService"] }
];
BeneficiosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BeneficiosService);



/***/ }),

/***/ "./src/app/models/beneficio.ts":
/*!*************************************!*\
  !*** ./src/app/models/beneficio.ts ***!
  \*************************************/
/*! exports provided: EnumBeneficioDisparador, Beneficio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnumBeneficioDisparador", function() { return EnumBeneficioDisparador; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Beneficio", function() { return Beneficio; });
var EnumBeneficioDisparador;
(function (EnumBeneficioDisparador) {
    EnumBeneficioDisparador[EnumBeneficioDisparador["sinDefinir"] = 0] = "sinDefinir";
    EnumBeneficioDisparador[EnumBeneficioDisparador["compraMayorA"] = 1] = "compraMayorA";
    EnumBeneficioDisparador[EnumBeneficioDisparador["primerRegitro"] = 3] = "primerRegitro";
})(EnumBeneficioDisparador || (EnumBeneficioDisparador = {}));
class Beneficio {
    constructor() {
        this.id = "";
        this.monto = "";
        this.descripcion = "";
        this.comercioId = ""; //esto se agrega cuando es un adquirido
        this.clienteId = ""; //esto se agrega cuando es un adquirido
    }
    asignarValores(init) {
        Object.assign(this, init);
    }
}


/***/ }),

/***/ "./src/app/models/cliente.ts":
/*!***********************************!*\
  !*** ./src/app/models/cliente.ts ***!
  \***********************************/
/*! exports provided: Cliente */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cliente", function() { return Cliente; });
/* harmony import */ var _localizacion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localizacion */ "./src/app/models/localizacion.ts");

class Cliente {
    constructor() {
        this.id = "";
        this.comercioId = "";
        this.nombre = "";
        this.documentoTipo = "";
        this.documento = "";
        this.personaJuridica = "";
        this.fecha_nacimiento = "";
        this.telefono = "";
        this.email = "";
        this.descripcion = "";
        this.foto = "";
        this.vendedorId = "";
        this.estado = "";
        this.keywords = [];
        this.direccion = new _localizacion__WEBPACK_IMPORTED_MODULE_0__["Localizacion"]();
    }
    asignarValores(init) {
        Object.assign(this, init);
    }
}


/***/ }),

/***/ "./src/app/select-beneficio/select-beneficio-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/select-beneficio/select-beneficio-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: SelectBeneficioPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectBeneficioPageRoutingModule", function() { return SelectBeneficioPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _select_beneficio_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select-beneficio.page */ "./src/app/select-beneficio/select-beneficio.page.ts");




const routes = [
    {
        path: '',
        component: _select_beneficio_page__WEBPACK_IMPORTED_MODULE_3__["SelectBeneficioPage"]
    }
];
let SelectBeneficioPageRoutingModule = class SelectBeneficioPageRoutingModule {
};
SelectBeneficioPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SelectBeneficioPageRoutingModule);



/***/ }),

/***/ "./src/app/select-beneficio/select-beneficio.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/select-beneficio/select-beneficio.module.ts ***!
  \*************************************************************/
/*! exports provided: SelectBeneficioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectBeneficioPageModule", function() { return SelectBeneficioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _select_beneficio_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./select-beneficio-routing.module */ "./src/app/select-beneficio/select-beneficio-routing.module.ts");
/* harmony import */ var _select_beneficio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./select-beneficio.page */ "./src/app/select-beneficio/select-beneficio.page.ts");







let SelectBeneficioPageModule = class SelectBeneficioPageModule {
};
SelectBeneficioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _select_beneficio_routing_module__WEBPACK_IMPORTED_MODULE_5__["SelectBeneficioPageRoutingModule"]
        ],
        declarations: [_select_beneficio_page__WEBPACK_IMPORTED_MODULE_6__["SelectBeneficioPage"]]
    })
], SelectBeneficioPageModule);



/***/ })

}]);
//# sourceMappingURL=select-beneficio-select-beneficio-module.js.map