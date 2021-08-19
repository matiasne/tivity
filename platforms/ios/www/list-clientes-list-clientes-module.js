(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-clientes-list-clientes-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/list-clientes/list-clientes.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/list-clientes/list-clientes.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title  size=\"small\">Listado de Clientes</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content style=\"margin-top: 50px;\" class=\"ion-padding\"> \n  \n  <ion-searchbar animated \n    placeholder=\"Buscar nombre\"\n    animated=\"true\"\n    showCancelButton=\"never\" \n    color=\"light\" \n    autocomplete=\"on\"\n    enterkeyhint=\"send\"\n    inputmode=\"text\"\n    type=\"text\"\n    debounce=\"300\"\n    value=\"{{palabraFiltro}}\"\n    (ionChange)=\"onChange($event)\">\n  </ion-searchbar>\n\n  <div *ngIf=\"buscando\" class=\"mensaje FadeOut FadeIn\">\n    <img src=\"../../assets/img/buscando.fw.png\" alt=\"\">\n    <p>Cargando clientes, aguarde unos segundos por favor</p>\n  </div>\n\n  <div *ngIf=\"!buscando && itemsAll.length == 0\" class=\"mensaje FadeOut FadeIn\">\n    <img src=\"../../assets/img/clientes.fw.png\" alt=\"\">\n    <p>Aún no tienes clientes</p>\n  </div>\n\n  <div *ngIf=\"!buscando && itemsAll.length != 0 && itemsRenderizar.length == 0\" class=\"mensaje FadeOut FadeIn\">\n    <img src=\"../../assets/img/producto.png\" alt=\"\">\n    <p >No existe un cliente con ese nombre! Agrega uno nuevo.</p>\n  </div>\n\n  <ion-list lines=\"none\">   \n    \n    <ion-item-sliding *ngFor=\"let item of itemsRenderizar\" class=\"item-card\" >    \n\n        <ion-item (click)=\"seleccionar(item)\" >\n          <div slot=\"start\">\n            <img src=\"{{item.foto}}\" *ngIf=\"item.foto\">\n            <ion-icon name=\"person-outline\" *ngIf=\"!item.foto\"></ion-icon>\n          </div>      \n          <ion-label text-wrap>\n            <h2><b>{{item.nombre}}</b> </h2>   \n            <p>{{item.email}}</p>        \n            <p>{{item.documentoTipo}}: {{item.documento}}</p> \n            <p *ngIf=\"item.personaJuridica == 1\">Responsable Inscripto</p>\n            <p *ngIf=\"item.personaJuridica == 2\">Monotributista</p>\n            <p *ngIf=\"item.personaJuridica == 3\">Iva Exento</p>\n          </ion-label>  \n        </ion-item> \n      \n        <ion-item-options side=\"end\">\n          <ion-item-option (click)=\"editar(item)\"><ion-icon name=\"create\" ></ion-icon> Editar</ion-item-option>\n        </ion-item-options>\n      \n      </ion-item-sliding>\n\n      <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"verMas()\">\n        <ion-infinite-scroll-content\n          loadingSpinner=\"bubbles\"\n          loadingText=\"Cargando más productos...\">\n        </ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n\n  </ion-list>\n\n  \n  <!-- fab placed to the bottom end -->\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"nuevo()\">\n    <ion-fab-button>\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"verMas()\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Cargando más clientes...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n\n</ion-content>\n\n");

/***/ }),

/***/ "./src/app/list-clientes/list-clientes-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/list-clientes/list-clientes-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ListClientesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListClientesPageRoutingModule", function() { return ListClientesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _list_clientes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-clientes.page */ "./src/app/list-clientes/list-clientes.page.ts");




const routes = [
    {
        path: '',
        component: _list_clientes_page__WEBPACK_IMPORTED_MODULE_3__["ListClientesPage"]
    }
];
let ListClientesPageRoutingModule = class ListClientesPageRoutingModule {
};
ListClientesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ListClientesPageRoutingModule);



/***/ }),

/***/ "./src/app/list-clientes/list-clientes.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/list-clientes/list-clientes.module.ts ***!
  \*******************************************************/
/*! exports provided: ListClientesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListClientesPageModule", function() { return ListClientesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _list_clientes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-clientes-routing.module */ "./src/app/list-clientes/list-clientes-routing.module.ts");
/* harmony import */ var _list_clientes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-clientes.page */ "./src/app/list-clientes/list-clientes.page.ts");







let ListClientesPageModule = class ListClientesPageModule {
};
ListClientesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _list_clientes_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListClientesPageRoutingModule"]
        ],
        declarations: [_list_clientes_page__WEBPACK_IMPORTED_MODULE_6__["ListClientesPage"]]
    })
], ListClientesPageModule);



/***/ }),

/***/ "./src/app/list-clientes/list-clientes.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/list-clientes/list-clientes.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3QtY2xpZW50ZXMvbGlzdC1jbGllbnRlcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/list-clientes/list-clientes.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/list-clientes/list-clientes.page.ts ***!
  \*****************************************************/
/*! exports provided: ListClientesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListClientesPage", function() { return ListClientesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _Services_clientes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/clientes.service */ "./src/app/Services/clientes.service.ts");
/* harmony import */ var _form_cliente_form_cliente_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../form-cliente/form-cliente.page */ "./src/app/form-cliente/form-cliente.page.ts");
/* harmony import */ var _cambiar_plan_cambiar_plan_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../cambiar-plan/cambiar-plan.page */ "./src/app/cambiar-plan/cambiar-plan.page.ts");
/* harmony import */ var _Services_comercios_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Services/comercios.service */ "./src/app/Services/comercios.service.ts");
/* harmony import */ var _models_comercio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models/comercio */ "./src/app/models/comercio.ts");









let ListClientesPage = class ListClientesPage {
    constructor(modalController, router, route, clientesService, modalCtrl, comercioService) {
        this.modalController = modalController;
        this.router = router;
        this.route = route;
        this.clientesService = clientesService;
        this.modalCtrl = modalCtrl;
        this.comercioService = comercioService;
        this.itemsFiltrados = [];
        this.itemsAll = [];
        this.itemsRenderizar = [];
        this.itemsPerPage = 20;
        this.itemsCountRenderizados = 0;
        this.palabraFiltro = "";
        this.buscando = false;
        this.comercio = new _models_comercio__WEBPACK_IMPORTED_MODULE_8__["Comercio"]();
        this.comercio.asignarValores(this.comercioService.getSelectedCommerceValue());
    }
    ngOnInit() {
        this.clientesService.list().subscribe(clientes => {
            this.itemsAll = clientes;
            this.buscar();
        });
    }
    ionViewDidEnter() {
        if (this.route.snapshot.params.filtro)
            this.palabraFiltro = this.route.snapshot.params.filtro;
    }
    ionViewDidLeave() {
    }
    onChange(event) {
        this.palabraFiltro = event.target.value;
        this.buscar();
    }
    verMas() {
        console.log("!!!!! Lazy");
        if (this.itemsCountRenderizados < this.itemsPerPage) {
            console.log("No hay más!!!" + this.itemsCountRenderizados);
            this.infiniteScroll.complete();
            this.infiniteScroll.disabled = true;
            return;
        }
        let start = this.itemsCountRenderizados;
        for (let i = start; i < start + this.itemsPerPage; i++) {
            if (this.itemsFiltrados[i] == undefined) {
                console.log("No hay más!!! fuera del array" + this.itemsCountRenderizados);
                this.infiniteScroll.complete();
                this.infiniteScroll.disabled = true;
                return;
            }
            if (this.itemsFiltrados[i].id) {
                this.itemsRenderizar.push(this.itemsFiltrados[i]);
                this.itemsCountRenderizados += 1;
                console.log("pushing to render");
            }
        }
        this.infiniteScroll.complete();
    }
    buscar() {
        this.itemsFiltrados = [];
        this.itemsRenderizar = [];
        var palabra = this.palabraFiltro.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        var retorno = false;
        if (this.palabraFiltro != "") {
            this.itemsAll.forEach((item) => {
                var encontrado = false;
                if (item.nombre) {
                    retorno = (item.nombre.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").indexOf(palabra.toLowerCase()) > -1);
                    if (retorno)
                        encontrado = true;
                }
                if (encontrado) {
                    this.itemsFiltrados.push(item);
                    if (this.itemsRenderizar.length < this.itemsPerPage) {
                        console.log("Renderizando" + item.id);
                        this.itemsRenderizar.push(item);
                        this.itemsCountRenderizados += 1;
                    }
                }
            });
        }
        else {
            this.itemsFiltrados = this.itemsAll;
            for (let i = 0; i < this.itemsPerPage; i++) {
                if (this.itemsFiltrados[i]) {
                    this.itemsRenderizar.push(this.itemsFiltrados[i]);
                    this.itemsCountRenderizados += 1;
                }
                else {
                    console.log("No hay más!!! fuera del array" + this.itemsCountRenderizados);
                    //   this.infiniteScroll.complete();
                    // this.infiniteScroll.disabled = true;
                    return;
                }
            }
        }
    }
    seleccionar(item) {
        this.router.navigate(['details-cliente', { "id": item.id }]);
    }
    nuevo() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.itemsAll.length > this.comercio.config.clientesMaxLength) {
                let modal = yield this.modalCtrl.create({
                    component: _cambiar_plan_cambiar_plan_page__WEBPACK_IMPORTED_MODULE_6__["CambiarPlanPage"],
                    componentProps: {
                        extraText: "Haz alcanzado el límite de clientes de tu plan: " + this.comercio.plan,
                        actualPlan: this.comercio.plan
                    }
                });
                return yield modal.present();
            }
            else {
                //  this.loadingService.presentLoading();
                const modal = yield this.modalController.create({
                    component: _form_cliente_form_cliente_page__WEBPACK_IMPORTED_MODULE_5__["FormClientePage"]
                });
                modal.present().then(() => {
                });
                return yield modal.present();
            }
        });
    }
    editar(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _form_cliente_form_cliente_page__WEBPACK_IMPORTED_MODULE_5__["FormClientePage"],
                componentProps: {
                    client: item
                }
            });
            modal.present().then(() => {
            });
            return yield modal.present();
        });
    }
};
ListClientesPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _Services_clientes_service__WEBPACK_IMPORTED_MODULE_4__["ClientesService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _Services_comercios_service__WEBPACK_IMPORTED_MODULE_7__["ComerciosService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInfiniteScroll"])
], ListClientesPage.prototype, "infiniteScroll", void 0);
ListClientesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-clientes',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./list-clientes.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/list-clientes/list-clientes.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./list-clientes.page.scss */ "./src/app/list-clientes/list-clientes.page.scss")).default]
    })
], ListClientesPage);



/***/ })

}]);
//# sourceMappingURL=list-clientes-list-clientes-module.js.map