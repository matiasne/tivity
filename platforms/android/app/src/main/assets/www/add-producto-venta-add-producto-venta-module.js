(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-producto-venta-add-producto-venta-module"],{

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

/***/ "./src/app/add-producto-venta/add-producto-venta-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/add-producto-venta/add-producto-venta-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: AddProductoVentaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductoVentaPageRoutingModule", function() { return AddProductoVentaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _add_producto_venta_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-producto-venta.page */ "./src/app/add-producto-venta/add-producto-venta.page.ts");




const routes = [
    {
        path: '',
        component: _add_producto_venta_page__WEBPACK_IMPORTED_MODULE_3__["AddProductoVentaPage"]
    }
];
let AddProductoVentaPageRoutingModule = class AddProductoVentaPageRoutingModule {
};
AddProductoVentaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddProductoVentaPageRoutingModule);



/***/ }),

/***/ "./src/app/add-producto-venta/add-producto-venta.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/add-producto-venta/add-producto-venta.module.ts ***!
  \*****************************************************************/
/*! exports provided: AddProductoVentaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductoVentaPageModule", function() { return AddProductoVentaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _add_producto_venta_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-producto-venta-routing.module */ "./src/app/add-producto-venta/add-producto-venta-routing.module.ts");
/* harmony import */ var _add_producto_venta_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-producto-venta.page */ "./src/app/add-producto-venta/add-producto-venta.page.ts");
/* harmony import */ var _Components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Components/components.module */ "./src/app/Components/components.module.ts");








let AddProductoVentaPageModule = class AddProductoVentaPageModule {
};
AddProductoVentaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _Components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _add_producto_venta_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddProductoVentaPageRoutingModule"]
        ],
        declarations: [_add_producto_venta_page__WEBPACK_IMPORTED_MODULE_6__["AddProductoVentaPage"]]
    })
], AddProductoVentaPageModule);



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


/***/ })

}]);
//# sourceMappingURL=add-producto-venta-add-producto-venta-module.js.map