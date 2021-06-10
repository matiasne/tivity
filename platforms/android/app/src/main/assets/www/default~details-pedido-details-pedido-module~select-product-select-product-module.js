(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~details-pedido-details-pedido-module~select-product-select-product-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-descuento/form-descuento.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form-descuento/form-descuento.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Agregar Descuento</ion-title>    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n  <ion-item class=\"form-select\"> \n    <ion-label position=\"floating\">Tipo</ion-label>\n    <ion-select multiple=\"false\" [(ngModel)]=\"descuento.tipo\">\n      <ion-select-option  [value]=\"enumTipo.monto\" selected>Monto</ion-select-option>\n      <ion-select-option  [value]=\"enumTipo.porcentaje\">Porcentaje</ion-select-option> \n    </ion-select>       \n  </ion-item> \n\n  <div class=\"form-card\">\n    <ion-text color=\"primary\">\n      <h4>Monto *</h4> \n    </ion-text>            \n    <ion-item>\n      <ion-input name=\"monto\" type=\"number\" [(ngModel)]=\"descuento.monto\" required></ion-input>\n    </ion-item>   \n  </div>\n\n  <div class=\"form-card\">\n    <ion-text color=\"primary\">\n      <h4>Motivo *</h4> \n    </ion-text>            \n    <ion-item>\n      <ion-input name=\"motivo\" type=\"text\" [(ngModel)]=\"descuento.motivo\" required></ion-input>\n    </ion-item>   \n  </div>\n\n</ion-content>\n\n<ion-footer class=\"ion-no-border ion-padding\">\n  <ion-toolbar>  \n    <ion-button class=\"button-rounded\" slot=\"end\" (click)=\"agregar()\">Agregar</ion-button>  \n    <ion-button class=\"button-rounded\" slot=\"start\"  color=\"light\" (click)=\"cancelar()\">Cancelar</ion-button>\n  </ion-toolbar>\n</ion-footer> ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-recargo/form-recargo.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form-recargo/form-recargo.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Agregar Recargo</ion-title>    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n  <ion-item class=\"form-select\"> \n    <ion-label position=\"floating\">Tipo</ion-label>\n    <ion-select multiple=\"false\" [(ngModel)]=\"recargo.tipo\">\n      <ion-select-option  [value]=\"enumTipo.monto\" selected>Monto</ion-select-option>\n      <ion-select-option  [value]=\"enumTipo.porcentaje\">Porcentaje</ion-select-option> \n    </ion-select>       \n  </ion-item> \n\n  <div class=\"form-card\">\n    <ion-text color=\"primary\">\n      <h4>Monto *</h4> \n    </ion-text>            \n    <ion-item>\n      <ion-input name=\"monto\" type=\"number\" [(ngModel)]=\"recargo.monto\" required></ion-input>\n    </ion-item>   \n  </div>\n\n  <div class=\"form-card\">\n    <ion-text color=\"primary\">\n      <h4>Motivo *</h4> \n    </ion-text>            \n    <ion-item>\n      <ion-input name=\"motivo\" type=\"text\" [(ngModel)]=\"recargo.motivo\" required></ion-input>\n    </ion-item>   \n  </div>\n\n</ion-content>\n\n<ion-footer class=\"ion-no-border ion-padding\">\n  <ion-toolbar>  \n    <ion-button class=\"button-rounded\" slot=\"end\" (click)=\"agregar()\">Agregar</ion-button>  \n    <ion-button class=\"button-rounded\" slot=\"start\"  color=\"light\" (click)=\"cancelar()\">Cancelar</ion-button>\n  </ion-toolbar>\n</ion-footer> ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/select-product/select-product.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/select-product/select-product.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <!--ion-title>Catálogo</ion-title-->   \n    <ion-searchbar animated *ngIf=\"itemsAllProductos.length > 0\" class=\"FadeOut FadeIn\"\n      placeholder=\"Buscar por nombre o categoría\"\n      animated=\"true\"\n      showCancelButton=\"never\" \n      color=\"light\" \n      autocomplete=\"on\"\n      enterkeyhint=\"send\"\n      inputmode=\"text\"\n      type=\"text\"\n      debounce=\"50\"\n      value=\"{{palabraFiltro}}\"\n      (ionChange)=\"buscar($event)\">\n    </ion-searchbar>        \n  </ion-toolbar>\n</ion-header> \n  \n<ion-content class=\"ion-padding\">  \n \n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\n      <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n\n    \n            <ion-item (click)=\"agregarDescuento()\" class=\"item-card\">\n                  \n              <ion-label>                \n                <h2>\n                  Descuento \n                </h2>\n              </ion-label>  \n            </ion-item>\n        \n            <ion-item (click)=\"agregarRecargo()\" class=\"item-card\">\n               \n              <ion-label>                \n                <h2>\n                  Recargo\n                </h2>\n              </ion-label>  \n            </ion-item> \n\n          <span *ngFor=\"let producto of itemsRenderProductos\">           \n\n           \n              <app-card-producto   \n                [item]=\"producto\"\n                [multiplicador]=\"1\" \n                [showOpcionesSeleccionadas]=\"false\"\n                [showEstadoComanda]=\"false\"\n                (select)=\"seleccionarProducto(producto)\"\n              ></app-card-producto>    \n            \n          </span>\n\n         \n\n  \n  \n\n  <div *ngIf=\"buscandoProductos\" class=\"mensaje FadeOut FadeIn\">\n    <img src=\"../../assets/img/buscando.fw.png\" alt=\"\">\n    <p>Cargando productos, <br> aguarde unos segundos por favor</p>\n  </div>\n\n  <div *ngIf=\"!buscandoProductos && itemsAllProductos.length == 0\" class=\"mensaje FadeOut FadeIn\">\n    <img src=\"../../assets/img/producto.png\" alt=\"\">\n    <p >Aún no tienes productos ni servicios agregados a tu comercio!</p>\n  </div>\n  \n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"verMas()\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Cargando más trabajos...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/Services/productos.service.ts":
/*!***********************************************!*\
  !*** ./src/app/Services/productos.service.ts ***!
  \***********************************************/
/*! exports provided: ProductosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductosService", function() { return ProductosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _models_variacionStock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/variacionStock */ "./src/app/models/variacionStock.ts");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./base.service */ "./src/app/Services/base.service.ts");
/* harmony import */ var _comercios_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comercios.service */ "./src/app/Services/comercios.service.ts");
/* harmony import */ var _variaciones_stocks_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./variaciones-stocks.service */ "./src/app/Services/variaciones-stocks.service.ts");








let ProductosService = class ProductosService extends _base_service__WEBPACK_IMPORTED_MODULE_5__["BaseService"] {
    constructor(afs, comerciosService, variacionesStockService) {
        super(afs);
        this.afs = afs;
        this.comerciosService = comerciosService;
        this.variacionesStockService = variacionesStockService;
        this.woocommerceSyncPath = "";
        this.comerciosService.getSelectedCommerce().subscribe(data => {
            // let comercio_seleccionadoId = localStorage.getItem('comercio_seleccionadoId'); 
            if (data) {
                this.setPath('comercios/' + data.id + '/productos');
            }
        });
    }
    getWoocommerceValue(productoId) {
        this.woocommerceSyncPath = this.path + '/' + productoId + '/woocommerceSincData';
        return this.afs.collection(this.woocommerceSyncPath).doc("1").get()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(doc => {
            if (doc.exists) {
                /* workaround until spread works with generic types */
                const data = doc.data();
                const id = doc.id;
                data.fromCache = doc.metadata.fromCache;
                return Object.assign({ id }, data);
            }
        }));
    }
    updateWoocommerceValues(productoId, values) {
        this.woocommerceSyncPath = this.path + '/' + productoId + '/woocommerceSincData';
        this.afs.collection(this.woocommerceSyncPath).doc("1").set(values).then(data => {
            console.log("Actualizados los valores de woocommerce");
        });
    }
    deleteWoocommerceValues(id) {
        this.woocommerceSyncPath = this.path + '/' + id + '/woocommerceSincData';
        this.afs.collection(this.woocommerceSyncPath).doc("1").delete().then(data => {
            console.log("Actualizados los valores de woocommerce");
        });
    }
    getCollection() {
        let comercio_seleccionadoId = localStorage.getItem('comercio_seleccionadoId');
        return 'comercios/' + comercio_seleccionadoId + '/productos';
    }
    getByName(name) {
        return this.afs.collection(this.path, ref => ref.where("nombre", "==", name)).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(changes => {
            return changes.map(a => {
                const data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                data.fromCache = a.payload.doc.metadata.fromCache;
                return data;
            });
        }));
    }
    updateStock(delta, productoId) {
        var sfDocRef = this.afs.firestore.collection(this.path).doc(productoId);
        return this.afs.firestore.runTransaction((transaction) => {
            // This code may get re-run multiple times if there are conflicts.
            return transaction.get(sfDocRef).then((sfDoc) => {
                if (!sfDoc.exists) {
                    throw "Document does not exist!";
                }
                var newStock = sfDoc.data().stock + delta;
                transaction.update(sfDocRef, { stock: newStock });
                let vStock = new _models_variacionStock__WEBPACK_IMPORTED_MODULE_4__["variacionStock"]();
                vStock.productoId = productoId;
                vStock.stock = sfDoc.data().stock;
                this.variacionesStockService.setPathProducto(productoId);
                this.variacionesStockService.add(vStock).then(resp => {
                });
            });
        }).then(() => {
        }).catch((error) => {
            console.log("Transaction failed: ", error);
        });
    }
};
ProductosService.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _comercios_service__WEBPACK_IMPORTED_MODULE_6__["ComerciosService"] },
    { type: _variaciones_stocks_service__WEBPACK_IMPORTED_MODULE_7__["VariacionesStocksService"] }
];
ProductosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProductosService);



/***/ }),

/***/ "./src/app/Services/variaciones-stocks.service.ts":
/*!********************************************************!*\
  !*** ./src/app/Services/variaciones-stocks.service.ts ***!
  \********************************************************/
/*! exports provided: VariacionesStocksService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariacionesStocksService", function() { return VariacionesStocksService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./base.service */ "./src/app/Services/base.service.ts");
/* harmony import */ var _comercios_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comercios.service */ "./src/app/Services/comercios.service.ts");






let VariacionesStocksService = class VariacionesStocksService extends _base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"] {
    constructor(afs, comerciosService) {
        super(afs);
        this.afs = afs;
        this.comerciosService = comerciosService;
        this.comercioId = "";
        this.comerciosService.getSelectedCommerce().subscribe(data => {
            if (data) {
                this.comercioId = data.id;
            }
        });
    }
    setPathProducto(productoId) {
        this.setPath('comercios/' + this.comercioId + '/productos/' + productoId + '/variacionesStock');
    }
    getLast(productoId) {
        this.setPathProducto(productoId);
        return this.afs.collection(this.path, ref => ref.limit(1))
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(changes => {
            return changes.map(a => {
                const data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                data.fromCache = a.payload.doc.metadata.fromCache;
                if (data.createdAt instanceof String || Number) {
                    data.createdAt = new Date(Number(data.createdAt));
                }
                else {
                    data.createdAt = data.createdAt.toDate();
                }
                return data;
            });
        }));
    }
};
VariacionesStocksService.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _comercios_service__WEBPACK_IMPORTED_MODULE_5__["ComerciosService"] }
];
VariacionesStocksService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], VariacionesStocksService);



/***/ }),

/***/ "./src/app/form-descuento/form-descuento.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/form-descuento/form-descuento.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0tZGVzY3VlbnRvL2Zvcm0tZGVzY3VlbnRvLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/form-descuento/form-descuento.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/form-descuento/form-descuento.page.ts ***!
  \*******************************************************/
/*! exports provided: FormDescuentoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormDescuentoPage", function() { return FormDescuentoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _models_descuento__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/descuento */ "./src/app/models/descuento.ts");
/* harmony import */ var _Services_global_carrito_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/global/carrito.service */ "./src/app/Services/global/carrito.service.ts");





let FormDescuentoPage = class FormDescuentoPage {
    constructor(modalCtrl, carritoService) {
        this.modalCtrl = modalCtrl;
        this.carritoService = carritoService;
        this.enumTipo = _models_descuento__WEBPACK_IMPORTED_MODULE_3__["EnumTipoDescuento"];
        this.descuento = new _models_descuento__WEBPACK_IMPORTED_MODULE_3__["Descuento"]();
    }
    ngOnInit() {
    }
    cancelar() {
        this.modalCtrl.dismiss();
    }
    agregar() {
        if (this.descuento.monto) {
            this.modalCtrl.dismiss(this.descuento);
        }
        else {
            this.modalCtrl.dismiss();
        }
    }
};
FormDescuentoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _Services_global_carrito_service__WEBPACK_IMPORTED_MODULE_4__["CarritoService"] }
];
FormDescuentoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-descuento',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./form-descuento.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-descuento/form-descuento.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./form-descuento.page.scss */ "./src/app/form-descuento/form-descuento.page.scss")).default]
    })
], FormDescuentoPage);



/***/ }),

/***/ "./src/app/form-recargo/form-recargo.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/form-recargo/form-recargo.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0tcmVjYXJnby9mb3JtLXJlY2FyZ28ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/form-recargo/form-recargo.page.ts":
/*!***************************************************!*\
  !*** ./src/app/form-recargo/form-recargo.page.ts ***!
  \***************************************************/
/*! exports provided: FormRecargoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormRecargoPage", function() { return FormRecargoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _models_recargo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/recargo */ "./src/app/models/recargo.ts");
/* harmony import */ var _Services_global_carrito_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/global/carrito.service */ "./src/app/Services/global/carrito.service.ts");





let FormRecargoPage = class FormRecargoPage {
    constructor(modalCtrl, carritoService) {
        this.modalCtrl = modalCtrl;
        this.carritoService = carritoService;
        this.enumTipo = _models_recargo__WEBPACK_IMPORTED_MODULE_3__["EnumTipoRecargo"];
        this.recargo = new _models_recargo__WEBPACK_IMPORTED_MODULE_3__["Recargo"]();
    }
    ngOnInit() {
    }
    cancelar() {
        this.modalCtrl.dismiss();
    }
    agregar() {
        if (this.recargo.monto) {
            this.modalCtrl.dismiss(this.recargo);
        }
        else {
            this.modalCtrl.dismiss();
        }
    }
};
FormRecargoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _Services_global_carrito_service__WEBPACK_IMPORTED_MODULE_4__["CarritoService"] }
];
FormRecargoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-recargo',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./form-recargo.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-recargo/form-recargo.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./form-recargo.page.scss */ "./src/app/form-recargo/form-recargo.page.scss")).default]
    })
], FormRecargoPage);



/***/ }),

/***/ "./src/app/models/variacionStock.ts":
/*!******************************************!*\
  !*** ./src/app/models/variacionStock.ts ***!
  \******************************************/
/*! exports provided: variacionStock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "variacionStock", function() { return variacionStock; });
class variacionStock {
    constructor() {
        this.productoId = "";
        this.stock = 0;
    }
    asignarValores(init) {
        Object.assign(this, init);
    }
}


/***/ }),

/***/ "./src/app/select-product/select-product.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/select-product/select-product.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlbGVjdC1wcm9kdWN0L3NlbGVjdC1wcm9kdWN0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/select-product/select-product.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/select-product/select-product.page.ts ***!
  \*******************************************************/
/*! exports provided: SelectProductPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectProductPage", function() { return SelectProductPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _Services_productos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/productos.service */ "./src/app/Services/productos.service.ts");
/* harmony import */ var _add_producto_venta_add_producto_venta_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../add-producto-venta/add-producto-venta.page */ "./src/app/add-producto-venta/add-producto-venta.page.ts");
/* harmony import */ var _Services_comercios_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Services/comercios.service */ "./src/app/Services/comercios.service.ts");
/* harmony import */ var _Services_loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Services/loading.service */ "./src/app/Services/loading.service.ts");
/* harmony import */ var _Services_categorias_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Services/categorias.service */ "./src/app/Services/categorias.service.ts");
/* harmony import */ var _models_comercio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../models/comercio */ "./src/app/models/comercio.ts");
/* harmony import */ var _Services_authentication_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Services/authentication.service */ "./src/app/Services/authentication.service.ts");
/* harmony import */ var _form_descuento_form_descuento_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../form-descuento/form-descuento.page */ "./src/app/form-descuento/form-descuento.page.ts");
/* harmony import */ var _form_recargo_form_recargo_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../form-recargo/form-recargo.page */ "./src/app/form-recargo/form-recargo.page.ts");














let SelectProductPage = class SelectProductPage {
    constructor(productosService, modalCtrl, submodalCtrl, comerciosService, loadingService, changeRef, categoriasService, AuthenticationService, platform, router) {
        this.productosService = productosService;
        this.modalCtrl = modalCtrl;
        this.submodalCtrl = submodalCtrl;
        this.comerciosService = comerciosService;
        this.loadingService = loadingService;
        this.changeRef = changeRef;
        this.categoriasService = categoriasService;
        this.AuthenticationService = AuthenticationService;
        this.platform = platform;
        this.router = router;
        this.itemsAllProductos = [];
        this.itemsProductos = [];
        this.itemsRenderProductos = [];
        this.itemsPerPage = 20;
        this.itemsRenderizados = 0;
        this.categorias = [];
        this.palabraFiltro = "";
        this.ultimoItem = "";
        this.loadingActive = false;
        this.showProductos = true;
        this.buscandoProductos = true;
        this.isMobile = false;
        if (this.platform.is('mobile')) {
            this.isMobile = true;
        }
    }
    refresh(event) {
        console.log('Begin async operation');
        this.ngOnInit();
        setTimeout(() => {
            event.target.complete();
        }, 500);
    }
    ngOnInit() {
        this.itemsProductos = [];
        this.comercio = new _models_comercio__WEBPACK_IMPORTED_MODULE_9__["Comercio"]();
        this.comerciosService.getSelectedCommerce().subscribe(data => {
            this.comercio.asignarValores(data);
        });
        /*Mantener toda la lógica en el ngOninit para que solo se subscriba una vez y
        no demande al servidor todos los datso cda vez que se muestra esta pantalla*/
        let comercio_seleccionadoId = localStorage.getItem('comercio_seleccionadoId');
        var catSub = this.categoriasService.getAll().subscribe(snapshot => {
            this.categorias = [];
            snapshot.forEach((snap) => {
                var categoria = snap.payload.doc.data();
                categoria.id = snap.payload.doc.id;
                categoria.seleccionado = false;
                this.categorias.push(categoria);
            });
            catSub.unsubscribe();
        });
        this.obtenerTodo();
    }
    verMas() {
        console.log("!!!!! Lazy");
        if (this.itemsRenderizados < this.itemsPerPage) {
            console.log("No hay más!!!" + this.itemsRenderizados);
            this.infiniteScroll.complete();
            this.infiniteScroll.disabled = true;
            return;
        }
        let start = this.itemsRenderizados;
        for (let i = start; i < start + this.itemsPerPage; i++) {
            if (this.itemsProductos[i] == undefined) {
                console.log("No hay más!!! fuera del array" + this.itemsRenderizados);
                this.infiniteScroll.complete();
                this.infiniteScroll.disabled = true;
                return;
            }
            if (this.itemsProductos[i].id) {
                this.itemsRenderProductos.push(this.itemsProductos[i]);
                this.itemsRenderizados += 1;
                console.log("pushing to render");
            }
        }
        this.infiniteScroll.complete();
    }
    buscar(event) {
        this.itemsRenderProductos = [];
        this.itemsRenderizados = 0;
        this.infiniteScroll.disabled = false;
        if (event)
            this.palabraFiltro = event.target.value;
        if (this.palabraFiltro != "") {
            var palabra = this.palabraFiltro.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            var retorno = false;
            this.itemsProductos = [];
            this.itemsAllProductos.forEach(item => {
                var encontrado = false;
                if (item.nombre) {
                    retorno = (item.nombre.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").indexOf(palabra.toLowerCase()) > -1);
                    if (retorno)
                        encontrado = true;
                }
                if (item.descripcion) {
                    retorno = (item.descripcion.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").indexOf(palabra.toLowerCase()) > -1);
                    if (retorno)
                        encontrado = true;
                }
                if (item.barcode) {
                    if (item.barcode.includes(palabra)) {
                        //this.itemsProductos.push(item);
                        //return;
                        encontrado = true;
                    }
                }
                if (encontrado) {
                    console.log("agregado a itemsProducto " + item.id);
                    this.itemsProductos.push(item);
                    if (this.itemsRenderProductos.length < this.itemsPerPage) {
                        console.log("Renderizando" + item.id);
                        this.itemsRenderProductos.push(item);
                        this.itemsRenderizados += 1;
                    }
                    return true;
                }
            });
        }
        else {
            this.itemsProductos = this.itemsAllProductos;
            for (let i = 0; i < this.itemsPerPage; i++) {
                if (this.itemsProductos[i]) {
                    this.itemsRenderProductos.push(this.itemsProductos[i]);
                    this.itemsRenderizados += 1;
                }
                else {
                    console.log("No hay más!!! fuera del array" + this.itemsRenderizados);
                    this.infiniteScroll.complete();
                    this.infiniteScroll.disabled = true;
                    return;
                }
            }
        }
        this.changeRef.detectChanges();
    }
    obtenerTodo() {
        this.buscandoProductos = true;
        this.subsItemsProd = this.productosService.list().subscribe(productos => {
            this.itemsAllProductos = productos;
            this.buscandoProductos = false;
            this.itemsAllProductos.forEach(producto => {
                producto.producto = true;
                producto.enCarrito = 0;
            });
            this.buscar(undefined);
        });
    }
    seleccionarProducto(producto) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //this.modalCtrl.dismiss(producto)      
            const modal = yield this.submodalCtrl.create({
                component: _add_producto_venta_add_producto_venta_page__WEBPACK_IMPORTED_MODULE_5__["AddProductoVentaPage"],
                id: '1',
                componentProps: {
                    producto: producto
                }
            });
            modal.onDidDismiss().then((retorno) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (retorno.data) {
                    yield this.modalCtrl.dismiss(retorno.data, undefined, '1');
                    this.modalCtrl.dismiss(retorno.data);
                }
            }));
            return yield modal.present();
        });
    }
    agregarDescuento() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.submodalCtrl.create({
                component: _form_descuento_form_descuento_page__WEBPACK_IMPORTED_MODULE_11__["FormDescuentoPage"],
                id: '1'
            });
            modal.onDidDismiss().then((retorno) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (retorno.data) {
                    console.log(retorno.data);
                    yield this.modalCtrl.dismiss(retorno.data, undefined, '1');
                    this.modalCtrl.dismiss(retorno.data);
                }
            }));
            return yield modal.present();
        });
    }
    agregarRecargo() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.submodalCtrl.create({
                component: _form_recargo_form_recargo_page__WEBPACK_IMPORTED_MODULE_12__["FormRecargoPage"],
                id: '1'
            });
            modal.onDidDismiss().then((retorno) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (retorno.data) {
                    yield this.modalCtrl.dismiss(retorno.data, undefined, '1');
                    this.modalCtrl.dismiss(retorno.data);
                }
            }));
            return yield modal.present();
        });
    }
    verProductos(categoria) {
        if (categoria != '')
            this.palabraFiltro = categoria.nombre.toLowerCase();
        else
            this.palabraFiltro = "";
        if (categoria != '') {
            categoria.seleccionado = true;
        }
        else {
            this.palabraFiltro = '';
        }
    }
};
SelectProductPage.ctorParameters = () => [
    { type: _Services_productos_service__WEBPACK_IMPORTED_MODULE_4__["ProductosService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _Services_comercios_service__WEBPACK_IMPORTED_MODULE_6__["ComerciosService"] },
    { type: _Services_loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _Services_categorias_service__WEBPACK_IMPORTED_MODULE_8__["CategoriasService"] },
    { type: _Services_authentication_service__WEBPACK_IMPORTED_MODULE_10__["AuthenticationService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"])
], SelectProductPage.prototype, "infiniteScroll", void 0);
SelectProductPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-select-product',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./select-product.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/select-product/select-product.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./select-product.page.scss */ "./src/app/select-product/select-product.page.scss")).default]
    })
], SelectProductPage);



/***/ })

}]);
//# sourceMappingURL=default~details-pedido-details-pedido-module~select-product-select-product-module.js.map