(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-cta-corrientes-list-cta-corrientes-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/list-cta-corrientes/list-cta-corrientes.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/list-cta-corrientes/list-cta-corrientes.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>  \n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title  size=\"small\">Cuentas Corrientes</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding ion-text-wrap\"> \n\n  <ion-row>\n    <ion-col size=\"10\">\n      <ion-input placeholder=\"Buscar\" style=\"border:1px solid rgb(206, 206, 206); border-radius: 5px;\"\n      [(ngModel)]=\"palabraFiltro\"\n      ></ion-input>\n    </ion-col>\n    <ion-col size=\"2\">\n      <ion-button color=\"primary\" style=\"margin-top: -1px; height: 42px;\"  (click)=\"buscar()\">\n          <ion-icon name=\"search\"></ion-icon>\n      </ion-button>\n    </ion-col>\n  </ion-row>\n\n  <div *ngIf=\"buscando\" class=\"mensaje FadeOut FadeIn\">\n    <img src=\"../../assets/img/buscando.fw.png\" alt=\"\">\n    <p>Cargando comandas, aguarde unos segundos por favor</p>\n  </div>\n\n  <div *ngIf=\"!buscando && itemsView.length == 0\" class=\"mensaje FadeOut FadeIn\">\n    <img src=\"../../assets/img/ctasCorrientes.fw.png\" alt=\"\">\n    <p>Aún no tienes cuentas corrientes.</p>\n  </div>\n\n  <ion-item-sliding *ngFor=\"let item of itemsView\" class=\"item-card\">\n    \n    <ion-item (click)=\"seleccionar(item)\">\n      <div slot=\"start\">\n        <ion-icon name=\"wallet-outline\" *ngIf=\"!item.foto\"></ion-icon>\n      </div>      \n      <ion-label>\n        <h2><b>{{item.nombre}}</b> {{item.montoTotal | currency}}</h2>         \n        <p *ngFor=\"let cliente of item.clientes\">\n          {{cliente.nombre}} - DNI: {{cliente.documento}}\n        </p>           \n      </ion-label>  \n    </ion-item>     \n  \n    <ion-item-options side=\"end\">\n      <ion-item-option (click)=\"editarCtaCorriente(item)\"><ion-icon name=\"create\" ></ion-icon> Editar</ion-item-option>\n    </ion-item-options>\n\n  </ion-item-sliding>\n\n  <!-- fab placed to the bottom end -->\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"nuevaCtaCorriente()\">\n    <ion-fab-button>\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n</ion-content>\n");

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

/***/ "./src/app/list-cta-corrientes/list-cta-corrientes-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/list-cta-corrientes/list-cta-corrientes-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: ListCtaCorrientesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListCtaCorrientesPageRoutingModule", function() { return ListCtaCorrientesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _list_cta_corrientes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-cta-corrientes.page */ "./src/app/list-cta-corrientes/list-cta-corrientes.page.ts");




const routes = [
    {
        path: '',
        component: _list_cta_corrientes_page__WEBPACK_IMPORTED_MODULE_3__["ListCtaCorrientesPage"]
    }
];
let ListCtaCorrientesPageRoutingModule = class ListCtaCorrientesPageRoutingModule {
};
ListCtaCorrientesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ListCtaCorrientesPageRoutingModule);



/***/ }),

/***/ "./src/app/list-cta-corrientes/list-cta-corrientes.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/list-cta-corrientes/list-cta-corrientes.module.ts ***!
  \*******************************************************************/
/*! exports provided: ListCtaCorrientesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListCtaCorrientesPageModule", function() { return ListCtaCorrientesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _list_cta_corrientes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-cta-corrientes-routing.module */ "./src/app/list-cta-corrientes/list-cta-corrientes-routing.module.ts");
/* harmony import */ var _list_cta_corrientes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-cta-corrientes.page */ "./src/app/list-cta-corrientes/list-cta-corrientes.page.ts");







let ListCtaCorrientesPageModule = class ListCtaCorrientesPageModule {
};
ListCtaCorrientesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _list_cta_corrientes_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListCtaCorrientesPageRoutingModule"]
        ],
        declarations: [_list_cta_corrientes_page__WEBPACK_IMPORTED_MODULE_6__["ListCtaCorrientesPage"]]
    })
], ListCtaCorrientesPageModule);



/***/ }),

/***/ "./src/app/list-cta-corrientes/list-cta-corrientes.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/list-cta-corrientes/list-cta-corrientes.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3QtY3RhLWNvcnJpZW50ZXMvbGlzdC1jdGEtY29ycmllbnRlcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/list-cta-corrientes/list-cta-corrientes.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/list-cta-corrientes/list-cta-corrientes.page.ts ***!
  \*****************************************************************/
/*! exports provided: ListCtaCorrientesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListCtaCorrientesPage", function() { return ListCtaCorrientesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _Services_cta_corrientes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/cta-corrientes.service */ "./src/app/Services/cta-corrientes.service.ts");
/* harmony import */ var _Services_clientes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/clientes.service */ "./src/app/Services/clientes.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _models_ctacorriente__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/ctacorriente */ "./src/app/models/ctacorriente.ts");
/* harmony import */ var _Services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Services/authentication.service */ "./src/app/Services/authentication.service.ts");
/* harmony import */ var _Services_loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Services/loading.service */ "./src/app/Services/loading.service.ts");








let ListCtaCorrientesPage = class ListCtaCorrientesPage {
    constructor(ctasCorreintesService, clientesServices, router, authenticationService, loadingService) {
        this.ctasCorreintesService = ctasCorreintesService;
        this.clientesServices = clientesServices;
        this.router = router;
        this.authenticationService = authenticationService;
        this.loadingService = loadingService;
        this.items = [];
        this.palabraFiltro = "";
        this.itemsView = [];
        this.buscando = true;
        this.ctasCorreintesService.list().subscribe(cuentas => {
            this.items = [];
            this.buscando = false;
            cuentas.forEach((cta) => {
                var item = new _models_ctacorriente__WEBPACK_IMPORTED_MODULE_5__["CtaCorriente"](this.authenticationService.getUID(), this.authenticationService.getNombre());
                item.asignarValores(cta);
                item.coTitularesId.forEach((clienteId) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    console.log(clienteId);
                    if (clienteId)
                        yield this.clientesServices.get(clienteId).subscribe(cliente => {
                            item.clientes.push(cliente);
                        });
                }));
                this.items.push(item);
                console.log(item);
            });
            this.buscar();
        });
    }
    ngOnInit() {
    }
    buscar() {
        if (this.palabraFiltro != "") {
            this.itemsView = [];
            this.items.forEach(item => {
                item.clientes.forEach(cliente => {
                    if (cliente.nombre.toLowerCase().includes(this.palabraFiltro.toLowerCase())) {
                        this.itemsView.push(item);
                        return;
                    }
                });
                item.clientes.forEach(cliente => {
                    if (cliente.documento.toLowerCase().includes(this.palabraFiltro.toLowerCase())) {
                        this.itemsView.push(item);
                        return;
                    }
                });
            });
        }
        else {
            console.log(this.itemsView);
            this.itemsView = this.items;
        }
    }
    seleccionar(item) {
        this.router.navigate(['details-cta-corriente', {
                id: item.id
            }]);
    }
    nuevaCtaCorriente() {
        this.router.navigate(['form-cta-corriente']);
    }
    editarCtaCorriente(item) {
        this.router.navigate(['form-cta-corriente', {
                id: item.id
            }]);
    }
};
ListCtaCorrientesPage.ctorParameters = () => [
    { type: _Services_cta_corrientes_service__WEBPACK_IMPORTED_MODULE_2__["CtaCorrientesService"] },
    { type: _Services_clientes_service__WEBPACK_IMPORTED_MODULE_3__["ClientesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _Services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] },
    { type: _Services_loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"] }
];
ListCtaCorrientesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-cta-corrientes',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./list-cta-corrientes.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/list-cta-corrientes/list-cta-corrientes.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./list-cta-corrientes.page.scss */ "./src/app/list-cta-corrientes/list-cta-corrientes.page.scss")).default]
    })
], ListCtaCorrientesPage);



/***/ })

}]);
//# sourceMappingURL=list-cta-corrientes-list-cta-corrientes-module.js.map