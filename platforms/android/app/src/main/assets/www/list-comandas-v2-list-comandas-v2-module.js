(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-comandas-v2-list-comandas-v2-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/list-comandas-v2/list-comandas-v2.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/list-comandas-v2/list-comandas-v2.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Comandas</ion-title>    \n  </ion-toolbar>\n</ion-header>\n<ion-toolbar [hidden]=\"devWidth > 576\">\n  <ion-segment (ionChange)=\"segmentChanged($event)\">\n    <ion-segment-button value=\"rechazados\">Rechazados ({{itemsRechazados.length}})</ion-segment-button>\n    <ion-segment-button value=\"pendientes\">Pendientes ({{itemsPendientes.length}})</ion-segment-button>\n    <ion-segment-button value=\"proceso\">En proceso ({{itemsProceso.length}})</ion-segment-button>\n    <ion-segment-button value=\"listas\">Listas ({{itemsListas.length}})</ion-segment-button>\n  </ion-segment>\n</ion-toolbar>\n\n<ion-content class=\"ion-padding\" style=\"margin-top: 50px;\">  \n  <ion-item class=\"form-select\"> \n    <ion-label position=\"floating\">Desde</ion-label>\n    <ion-select multiple=\"false\" (ionChange)=\"onChangeAtras($event)\">\n      <ion-select-option  [value]=\"1\" selected>Ayer</ion-select-option>\n      <ion-select-option  [value]=\"2\">2 días atras</ion-select-option>\n      <ion-select-option  [value]=\"7\">Una semana atrás</ion-select-option>\n    </ion-select>       \n  </ion-item> \n  <ion-row>\n    <ion-col size=\"8\"> \n      <ion-searchbar animated \n        placeholder=\"Buscar por cliente o mesa\"\n        animated=\"true\"\n        showCancelButton=\"never\" \n        color=\"light\" \n        autocomplete=\"on\"\n        enterkeyhint=\"send\"\n        inputmode=\"text\"\n        type=\"text\"\n        debounce=\"300\"\n        value=\"{{palabraFiltro}}\"\n        (ionChange)=\"onChange($event)\">\n      </ion-searchbar>\n    </ion-col>    \n    <ion-col size=\"4\">\n      <ion-item class=\"form-select\"> \n        <ion-label position=\"floating\">Cocina</ion-label>\n        <ion-select multiple=\"true\" (ionChange)=\"onChangeCocina($event)\" [(ngModel)]=\"cocinaFiltro\">\n          <ion-select-option *ngFor=\"let cocina of cocinas\" [value]=\"cocina.id\" selected>{{cocina.nombre}}</ion-select-option>\n        </ion-select>       \n      </ion-item>  \n    </ion-col>\n  </ion-row>\n  \n\n\n  <span [hidden]=\"devWidth > 576\">\n    \n    <ion-list lines=\"none\" *ngIf=\"seccionActiva == 'pendientes'\">     \n      <div *ngFor=\"let item of itemsPendientes\">   \n        <app-card-comanda-v2 [pedido]=\"item\"></app-card-comanda-v2>\n      </div>\n    </ion-list>\n\n    <ion-list lines=\"none\" *ngIf=\"seccionActiva == 'proceso'\">     \n      <div *ngFor=\"let item of itemsProceso\">   \n        <app-card-comanda-v2  [pedido]=\"item\"></app-card-comanda-v2>\n      </div>\n    </ion-list> \n\n    <ion-list lines=\"none\" *ngIf=\"seccionActiva == 'listas'\">     \n      <div *ngFor=\"let item of itemsListas\">   \n        <app-card-comanda-v2  [pedido]=\"item\"></app-card-comanda-v2>\n      </div>\n    </ion-list>\n\n    <ion-list lines=\"none\" *ngIf=\"seccionActiva == 'rechazados'\">     \n      <div *ngFor=\"let item of itemsRechazados\">   \n        <app-card-comanda-v2 [pedido]=\"item\"></app-card-comanda-v2>\n      </div>\n    </ion-list>\n\n  </span>\n\n  <span [hidden]=\"devWidth < 576\">\n    <ion-grid>\n      <ion-row>\n        \n        <ion-col>\n          <ion-list lines=\"none\">   \n            <h5>Pendientes ({{itemsPendientes.length}})</h5>  \n            <div *ngFor=\"let item of itemsPendientes\">   \n              <app-card-comanda-v2  [pedido]=\"item\"></app-card-comanda-v2>\n            </div>\n          </ion-list> \n        </ion-col>\n        <ion-col>\n          <ion-list lines=\"none\">  \n            <h5>En Proceso ({{itemsProceso.length}})</h5>    \n            <div *ngFor=\"let item of itemsProceso\">   \n              <app-card-comanda-v2  [pedido]=\"item\"></app-card-comanda-v2>\n            </div>\n          </ion-list> \n        </ion-col>\n        <ion-col> \n          <ion-list lines=\"none\">  \n            <h5>Listas  ({{itemsListas.length}})</h5>     \n            <div *ngFor=\"let item of itemsListas\">   \n              <app-card-comanda-v2  [pedido]=\"item\"></app-card-comanda-v2>\n            </div>\n          </ion-list> \n        </ion-col>\n        <ion-col>\n          <ion-list lines=\"none\">   \n            <h5>Suspendidos ({{itemsRechazados.length}})</h5>  \n            <div *ngFor=\"let item of itemsRechazados\">   \n              <app-card-comanda-v2  [pedido]=\"item\"></app-card-comanda-v2>\n            </div>\n          </ion-list> \n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </span>\n \n  \n  <div *ngIf=\"buscando\" class=\"mensaje FadeOut FadeIn\">\n    <img src=\"../../assets/img/buscando.fw.png\" alt=\"\">\n    <p>Cargando comandas, aguarde unos segundos por favor</p>\n  </div>\n\n  <div *ngIf=\"!buscando && pedidosAll.length == 0\" class=\"mensaje FadeOut FadeIn\">\n    <img src=\"../../assets/img/comandas.fw.png\" alt=\"\">\n    <p>Aún no tienes comandas</p>\n  </div>\n  \n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" >\n    <ion-fab-button (click)=\"nuevoPedido()\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n</ion-content>\n\n");

/***/ }),

/***/ "./src/app/Services/cocinas.service.ts":
/*!*********************************************!*\
  !*** ./src/app/Services/cocinas.service.ts ***!
  \*********************************************/
/*! exports provided: CocinasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CocinasService", function() { return CocinasService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base.service */ "./src/app/Services/base.service.ts");
/* harmony import */ var _comercios_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comercios.service */ "./src/app/Services/comercios.service.ts");





let CocinasService = class CocinasService extends _base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] {
    constructor(afs, comerciosService) {
        super(afs);
        this.afs = afs;
        this.comerciosService = comerciosService;
        this.comerciosService.getSelectedCommerce().subscribe(data => {
            // let comercio_seleccionadoId = localStorage.getItem('comercio_seleccionadoId'); 
            if (data) {
                this.setPath('comercios/' + data.id + '/cocinas');
            }
        });
    }
};
CocinasService.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _comercios_service__WEBPACK_IMPORTED_MODULE_4__["ComerciosService"] }
];
CocinasService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CocinasService);



/***/ }),

/***/ "./src/app/list-comandas-v2/list-comandas-v2-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/list-comandas-v2/list-comandas-v2-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: ListComandasV2PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComandasV2PageRoutingModule", function() { return ListComandasV2PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _list_comandas_v2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-comandas-v2.page */ "./src/app/list-comandas-v2/list-comandas-v2.page.ts");




const routes = [
    {
        path: '',
        component: _list_comandas_v2_page__WEBPACK_IMPORTED_MODULE_3__["ListComandasV2Page"]
    }
];
let ListComandasV2PageRoutingModule = class ListComandasV2PageRoutingModule {
};
ListComandasV2PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ListComandasV2PageRoutingModule);



/***/ }),

/***/ "./src/app/list-comandas-v2/list-comandas-v2.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/list-comandas-v2/list-comandas-v2.module.ts ***!
  \*************************************************************/
/*! exports provided: ListComandasV2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComandasV2PageModule", function() { return ListComandasV2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _list_comandas_v2_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-comandas-v2-routing.module */ "./src/app/list-comandas-v2/list-comandas-v2-routing.module.ts");
/* harmony import */ var _list_comandas_v2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-comandas-v2.page */ "./src/app/list-comandas-v2/list-comandas-v2.page.ts");
/* harmony import */ var _Components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Components/components.module */ "./src/app/Components/components.module.ts");








let ListComandasV2PageModule = class ListComandasV2PageModule {
};
ListComandasV2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _Components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _list_comandas_v2_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListComandasV2PageRoutingModule"]
        ],
        declarations: [_list_comandas_v2_page__WEBPACK_IMPORTED_MODULE_6__["ListComandasV2Page"]]
    })
], ListComandasV2PageModule);



/***/ }),

/***/ "./src/app/list-comandas-v2/list-comandas-v2.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/list-comandas-v2/list-comandas-v2.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3QtY29tYW5kYXMtdjIvbGlzdC1jb21hbmRhcy12Mi5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/list-comandas-v2/list-comandas-v2.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/list-comandas-v2/list-comandas-v2.page.ts ***!
  \***********************************************************/
/*! exports provided: ListComandasV2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComandasV2Page", function() { return ListComandasV2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _Services_comentarios_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/comentarios.service */ "./src/app/Services/comentarios.service.ts");
/* harmony import */ var _Services_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/loading.service */ "./src/app/Services/loading.service.ts");
/* harmony import */ var _Services_pedido_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/pedido.service */ "./src/app/Services/pedido.service.ts");
/* harmony import */ var src_app_models_pedido__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/pedido */ "./src/app/models/pedido.ts");
/* harmony import */ var _Services_cocinas_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Services/cocinas.service */ "./src/app/Services/cocinas.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");









let ListComandasV2Page = class ListComandasV2Page {
    constructor(pedidosService, loadingService, comentariosService, cocinasService, alertController, router, platform) {
        this.pedidosService = pedidosService;
        this.loadingService = loadingService;
        this.comentariosService = comentariosService;
        this.cocinasService = cocinasService;
        this.alertController = alertController;
        this.router = router;
        this.platform = platform;
        this.pedidosAll = [];
        this.itemsComandas = [];
        this.itemsPedidos = [];
        this.itemsPendientes = [];
        this.itemsProceso = [];
        this.itemsListas = [];
        this.itemsRechazados = [];
        this.items = [];
        this.cocinas = [];
        this.seccionActiva = "pendientes";
        this.palabraFiltro = "";
        this.cocinaFiltro = [];
        this.todas = "";
        this.fechaDesde = new Date();
        this.buscando = true;
        this.devWidth = this.platform.width();
        this.fechaDesde.setDate(this.fechaDesde.getDate() - 1);
    }
    ngOnInit() {
        this.loadingService.presentLoadingText("Cargando Pedidos");
        this.cocinasService.list().subscribe((data) => {
            this.cocinas = data;
            if (this.cocinas.length == 0) {
                this.presentAlertCrearCocinas();
            }
        });
        this.refrescar();
    }
    refrescar() {
        if (this.obsPedidos) {
            this.obsPedidos.unsubscribe();
        }
        this.obsPedidos = this.pedidosService.listFechaDesde(this.fechaDesde, new Date()).subscribe((pedidos) => {
            this.buscando = false;
            this.itemsPendientes = [];
            this.itemsProceso = [];
            this.itemsListas = [];
            this.itemsRechazados = [];
            this.loadingService.dismissLoading();
            this.pedidosAll = pedidos;
            console.log(this.pedidosAll);
            this.filtrar();
        });
    }
    presentAlertCrearCocinas() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Agregar Cocina',
                message: 'Debes agregar una cocina antes de continuar',
                buttons: [
                    {
                        text: 'Ok',
                        handler: () => {
                            this.router.navigate(['list-cocinas']);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    onChangeAtras(event) {
        this.fechaDesde.setDate(this.fechaDesde.getDate() - Number(event.target.value));
        this.refrescar();
    }
    onChange(event) {
        this.palabraFiltro = event.target.value;
        this.refrescar();
    }
    onChangeCocina(event) {
        this.cocinaFiltro = event.target.value;
        this.refrescar();
    }
    segmentChanged(event) {
        console.log(event.target.value);
        this.seccionActiva = event.target.value;
    }
    filtrar() {
        this.itemsPendientes = [];
        this.itemsListas = [];
        this.itemsProceso = [];
        this.itemsRechazados = [];
        var retorno = false;
        this.pedidosAll.forEach(item => {
            var encontrado = false;
            this.cocinaFiltro.forEach(cocina => {
                console.log(cocina);
                item.productos.forEach(prod => {
                    console.log(prod.cocinaId);
                    if (prod.cocinaId == cocina) {
                        encontrado = true;
                    }
                });
            });
            console.log(encontrado);
            if (encontrado) {
                if (this.palabraFiltro != "") {
                    encontrado = false;
                    var palabra = this.palabraFiltro.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                    if (item.clienteNombre) {
                        retorno = (item.clienteNombre.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").indexOf(palabra.toLowerCase()) > -1);
                        if (retorno)
                            encontrado = true;
                    }
                    if (item.mesaNombre) {
                        retorno = (item.mesaNombre.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").indexOf(palabra.toLowerCase()) > -1);
                        if (retorno)
                            encontrado = true;
                    }
                    if (item.empleadoEmail) {
                        retorno = (item.empleadoEmail.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").indexOf(palabra.toLowerCase()) > -1);
                        if (retorno)
                            encontrado = true;
                    }
                }
                else {
                    encontrado = true;
                }
            }
            console.log(encontrado);
            if (encontrado) {
                console.log(item);
                // if(item.suspendido == 1){
                // this.itemsRechazados.push(item);
                //  } 
                //else{
                if (item.statusComanda == src_app_models_pedido__WEBPACK_IMPORTED_MODULE_5__["EnumEstadoCocina"].rechazado) {
                    this.itemsRechazados.push(item);
                }
                if (item.statusComanda == src_app_models_pedido__WEBPACK_IMPORTED_MODULE_5__["EnumEstadoCocina"].solicitado) {
                    this.itemsPendientes.push(item);
                }
                if (item.statusComanda == src_app_models_pedido__WEBPACK_IMPORTED_MODULE_5__["EnumEstadoCocina"].tomado) {
                    this.itemsProceso.push(item);
                }
                if (item.statusComanda == src_app_models_pedido__WEBPACK_IMPORTED_MODULE_5__["EnumEstadoCocina"].completo) {
                    this.itemsListas.push(item);
                }
                //  }    
                console.log(this.itemsPendientes);
                return true;
            }
        });
    }
    nuevoPedido() {
        this.router.navigate(['list-productos-servicios']);
    }
};
ListComandasV2Page.ctorParameters = () => [
    { type: _Services_pedido_service__WEBPACK_IMPORTED_MODULE_4__["PedidoService"] },
    { type: _Services_loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"] },
    { type: _Services_comentarios_service__WEBPACK_IMPORTED_MODULE_2__["ComentariosService"] },
    { type: _Services_cocinas_service__WEBPACK_IMPORTED_MODULE_6__["CocinasService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"] }
];
ListComandasV2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-comandas-v2',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./list-comandas-v2.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/list-comandas-v2/list-comandas-v2.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./list-comandas-v2.page.scss */ "./src/app/list-comandas-v2/list-comandas-v2.page.scss")).default]
    })
], ListComandasV2Page);



/***/ })

}]);
//# sourceMappingURL=list-comandas-v2-list-comandas-v2-module.js.map