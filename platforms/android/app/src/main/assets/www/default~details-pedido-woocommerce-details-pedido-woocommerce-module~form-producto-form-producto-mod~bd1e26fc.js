(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~details-pedido-woocommerce-details-pedido-woocommerce-module~form-producto-form-producto-mod~bd1e26fc"],{

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

/***/ "./src/app/Services/wordpress/wordpress.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/Services/wordpress/wordpress.service.ts ***!
  \*********************************************************/
/*! exports provided: WordpressService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordpressService", function() { return WordpressService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _comercios_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../comercios.service */ "./src/app/Services/comercios.service.ts");




let WordpressService = class WordpressService {
    constructor(http, comercioService) {
        this.http = http;
        this.comercioService = comercioService;
        this.apiUrl = '';
        this.siteURL = 'http://laparrilladegerardo.com.ar';
        this.woocommercePart = '/wp-json/wp/v2/';
        this.tipoItem = "";
    }
    setPart(part) {
        this.tipoItem = part;
        this.apiUrl = this.siteURL + this.woocommercePart + this.tipoItem;
    }
    login() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.comercioService.getWoocommerceValue(this.comercioService.getSelectedCommerceValue().id).subscribe(values => {
                    let data = {
                        username: values.user,
                        password: values.password
                    };
                    let httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                        'Content-Type': 'application/json'
                    });
                    let options = {
                        headers: httpHeaders
                    };
                    this.apiUrl = values.url + "/wp-json/jwt-auth/v1/token";
                    try {
                        let response = this.http.post(this.apiUrl, data, options).toPromise();
                        resolve(response);
                    }
                    catch (err) {
                        reject(err);
                    }
                }, err => {
                    reject(err);
                });
            });
        });
    }
    obtainToken() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                let resp = yield this.login();
                localStorage.setItem('wordpress_token', resp.token);
            }
            catch (err) {
                localStorage.setItem('wordpress_token', "");
            }
        });
    }
    getToken() {
        return localStorage.getItem('wordpress_token');
    }
    getAll() {
        this.apiUrl = this.siteURL + this.woocommercePart + this.tipoItem;
        return this.http.get(this.apiUrl);
    }
    getOne(id) {
        this.apiUrl = this.siteURL + this.woocommercePart + this.tipoItem + "/" + id;
        let httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        let options = {
            headers: httpHeaders
        };
        console.log(this.apiUrl);
        return this.http.get(this.apiUrl);
    }
    postOne(data) {
        this.apiUrl = this.siteURL + this.woocommercePart + this.tipoItem;
        let httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        let options = {
            headers: httpHeaders
        };
        console.log(this.apiUrl);
        return this.http.post(this.apiUrl, data, options);
    }
    updateOne(id, data) {
        this.apiUrl = this.siteURL + this.woocommercePart + this.tipoItem + "/" + id;
        let httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        let options = {
            headers: httpHeaders
        };
        console.log(this.apiUrl);
        return this.http.put(this.apiUrl, data, options);
    }
    deleteOne(id) {
        this.apiUrl = this.siteURL + this.woocommercePart + this.tipoItem + "/" + id;
        console.log(this.apiUrl);
        return this.http.delete(this.apiUrl);
    }
};
WordpressService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _comercios_service__WEBPACK_IMPORTED_MODULE_3__["ComerciosService"] }
];
WordpressService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], WordpressService);



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
//# sourceMappingURL=default~details-pedido-woocommerce-details-pedido-woocommerce-module~form-producto-form-producto-mod~bd1e26fc.js.map