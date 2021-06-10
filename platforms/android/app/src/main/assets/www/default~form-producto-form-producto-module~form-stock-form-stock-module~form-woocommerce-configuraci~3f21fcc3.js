(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~form-producto-form-producto-module~form-stock-form-stock-module~form-woocommerce-configuraci~3f21fcc3"],{

/***/ "./src/app/Services/woocommerce/woocommerce.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/Services/woocommerce/woocommerce.service.ts ***!
  \*************************************************************/
/*! exports provided: WoocommerceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WoocommerceService", function() { return WoocommerceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_models_producto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/producto */ "./src/app/models/producto.ts");
/* harmony import */ var src_app_models_woocommerce_product__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/woocommerce/product */ "./src/app/models/woocommerce/product.ts");
/* harmony import */ var src_app_models_woocommerceSyncData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/woocommerceSyncData */ "./src/app/models/woocommerceSyncData.ts");
/* harmony import */ var _categorias_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../categorias.service */ "./src/app/Services/categorias.service.ts");
/* harmony import */ var _comercios_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../comercios.service */ "./src/app/Services/comercios.service.ts");
/* harmony import */ var _fotos_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../fotos.service */ "./src/app/Services/fotos.service.ts");
/* harmony import */ var _productos_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../productos.service */ "./src/app/Services/productos.service.ts");
/* harmony import */ var _wordpress_wordpress_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../wordpress/wordpress.service */ "./src/app/Services/wordpress/wordpress.service.ts");












let WoocommerceService = class WoocommerceService {
    constructor(http, comerciosService, productosServices, wordpressService, fotosService, categoriasService) {
        this.http = http;
        this.comerciosService = comerciosService;
        this.productosServices = productosServices;
        this.wordpressService = wordpressService;
        this.fotosService = fotosService;
        this.categoriasService = categoriasService;
        this.apiUrl = '';
        this.siteURL = '';
        this.woocommercePart = '/wp-json/wc/v3/';
        this.tipoItem = "products";
        this.progresoSend = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0);
        this.progresoReceived = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0);
        this.total = 0;
        this.psend = 0;
        this.preceived = 0;
    }
    setPart(part) {
        this.tipoItem = part;
    }
    obsProgresoSend() {
        return this.progresoSend.asObservable();
    }
    obsProgresoReceived() {
        return this.progresoReceived.asObservable();
    }
    test() {
        let httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
            'Access-Control-Allow-Headers': 'Access-Control-Allow-Methods, Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.wordpressService.getToken()
        });
        let options = {
            headers: httpHeaders
        };
        this.comercio = this.comerciosService.getSelectedCommerceValue();
        this.apiUrl = this.comercio.woocommerce.url + this.woocommercePart + "system_status?consumer_key=" + this.comercio.woocommerce.consumerKey + "&consumer_secret=" + this.comercio.woocommerce.consumerSecret;
        return this.http.get(this.apiUrl, options);
    }
    getAll() {
        let httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            //   'Access-Control-Allow-Origin':'*',
            //   'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
            //   'Access-Control-Allow-Headers': 'Access-Control-Allow-Methods, Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.wordpressService.getToken()
        });
        let options = {
            headers: httpHeaders
        };
        console.log("test");
        this.comercio = this.comerciosService.getSelectedCommerceValue();
        this.apiUrl = this.comercio.woocommerce.url + this.woocommercePart + this.tipoItem + "?consumer_key=" + this.comercio.woocommerce.consumerKey + "&consumer_secret=" + this.comercio.woocommerce.consumerSecret;
        return this.http.get(this.apiUrl, options).toPromise();
    }
    getOne(id) {
        this.comercio = this.comerciosService.getSelectedCommerceValue();
        this.apiUrl = this.comercio.woocommerce.url + this.woocommercePart + this.tipoItem + "/" + id + "?consumer_key=" + this.comercio.woocommerce.consumerKey + "&consumer_secret=" + this.comercio.woocommerce.consumerSecret;
        let httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            //  'Access-Control-Allow-Origin':'*',
            //  'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
            //  'Access-Control-Allow-Headers': 'Access-Control-Allow-Methods, Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.wordpressService.getToken()
        });
        let options = {
            headers: httpHeaders
        };
        return this.http.get(this.apiUrl, options);
    }
    postOne(data) {
        this.comercio = this.comerciosService.getSelectedCommerceValue();
        this.apiUrl = this.comercio.woocommerce.url + this.woocommercePart + this.tipoItem + "?consumer_key=" + this.comercio.woocommerce.consumerKey + "&consumer_secret=" + this.comercio.woocommerce.consumerSecret;
        let httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            // 'Access-Control-Allow-Origin':'*',
            //  'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
            //  'Access-Control-Allow-Headers': 'Access-Control-Allow-Methods, Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.wordpressService.getToken()
        });
        let options = {
            headers: httpHeaders
        };
        return this.http.post(this.apiUrl, data, options);
    }
    updateOne(id, data) {
        this.comercio = this.comerciosService.getSelectedCommerceValue();
        this.apiUrl = this.comercio.woocommerce.url + this.woocommercePart + this.tipoItem + "/" + id + "?consumer_key=" + this.comercio.woocommerce.consumerKey + "&consumer_secret=" + this.comercio.woocommerce.consumerSecret;
        let httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            // 'Access-Control-Allow-Origin':'*',
            //  'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
            //  'Access-Control-Allow-Headers': 'Access-Control-Allow-Methods, Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.wordpressService.getToken()
        });
        let options = {
            headers: httpHeaders
        };
        return this.http.put(this.apiUrl, data, options);
    }
    deleteOne(id) {
        let httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            // 'Access-Control-Allow-Origin':'*',
            //  'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
            //  'Access-Control-Allow-Headers': 'Access-Control-Allow-Methods, Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.wordpressService.getToken()
        });
        let options = {
            headers: httpHeaders
        };
        this.comercio = this.comerciosService.getSelectedCommerceValue();
        this.apiUrl = this.comercio.woocommerce.url + this.woocommercePart + this.tipoItem + "/" + id + "?consumer_key=" + this.comercio.woocommerce.consumerKey + "&consumer_secret=" + this.comercio.woocommerce.consumerSecret;
        return this.http.delete(this.apiUrl, options);
    }
    updateStock(producto) {
        if (producto.woocommerce.id) {
            let data = {
                stock: producto.stock
            };
            this.comercio = this.comerciosService.getSelectedCommerceValue();
            this.apiUrl = this.comercio.woocommerce.url + this.woocommercePart + this.tipoItem + "/" + producto.id + "?consumer_key=" + this.comercio.woocommerce.consumerKey + "&consumer_secret=" + this.comercio.woocommerce.consumerSecret;
            let httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            });
            let options = {
                headers: httpHeaders
            };
            return this.http.put(this.apiUrl, data, options);
        }
    }
    convertWCtoFirebase(productoWC) {
        this.comercio = this.comerciosService.getSelectedCommerceValue();
        let prod = new src_app_models_producto__WEBPACK_IMPORTED_MODULE_4__["Producto"]();
        prod.nombre = productoWC.name;
        prod.precio = productoWC.regular_price;
        prod.descripcion = productoWC.description;
        prod.promocion = productoWC.price;
        prod.barcode = productoWC.sku;
        prod.updatedAt = new Date();
        if (productoWC.manage_stock)
            prod.stock = productoWC.stock_quantity;
        return prod;
    }
    convertFirebasetoWC(producto) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.comercio = this.comerciosService.getSelectedCommerceValue();
            let wcProducto = new src_app_models_woocommerce_product__WEBPACK_IMPORTED_MODULE_5__["WCProduct"]();
            wcProducto.name = producto.nombre;
            wcProducto.regular_price = producto.precio.toString();
            wcProducto.description = producto.descripcion;
            wcProducto.price = producto.promocion.toString();
            wcProducto.sku = producto.barcode;
            if (this.comercio.config.stock)
                wcProducto.manage_stock = true;
            else
                wcProducto.manage_stock = false;
            wcProducto.stock_quantity = producto.stock.toString();
            wcProducto.images = [];
            wcProducto.categories = [];
            for (let cat of producto.categorias) {
                if (cat.woocommerce && cat.woocommerce.id) {
                    let categorie = {
                        id: cat.woocommerce.id,
                        name: cat.nombre
                    };
                    wcProducto.categories.push(categorie);
                }
                else {
                    console.log("Categoria no sincronizada con woocommerce!!!");
                }
            }
            for (const img of producto.imagenes) {
                wcProducto.images.push({ "src": img.url });
            }
            return wcProducto;
        });
    }
    crearProductoInWC(p) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let producto = new src_app_models_producto__WEBPACK_IMPORTED_MODULE_4__["Producto"]();
            producto.asignarValores(p); //esto para que cargue las variables a los productos viejos aunque sea vacias
            console.log("creando en wc el producto id:" + producto.id);
            let wcProducto = yield this.convertFirebasetoWC(producto);
            wcProducto["meta_data"] = [{}];
            console.log("creando");
            this.incrementarEnvio();
            try {
                const data = JSON.parse(JSON.stringify(wcProducto));
                let resp = yield this.postOne(data).toPromise();
                this.incrementarRespuesta();
                p.woocommerce = {
                    id: resp.id,
                    lastUpdate: new Date(),
                    sincronizado: true
                };
                this.productosServices.update(p).then(data => {
                    console.log("LastUpdate de Woocommerce guardado");
                });
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    actualizarProductoInWC(producto) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //busco el producto por id de woocommerce elimino todas las imágenes del mismo, elimino el producto. cargo el producto de nuevo
            this.incrementarEnvio();
            console.log("actualizando id:" + producto.woocommerce.id);
            try {
                yield this.getOne(producto.woocommerce.id).toPromise();
                let wcProducto = yield this.convertFirebasetoWC(producto);
                wcProducto.id = producto.woocommerce.id;
                try {
                    yield this.updateOne(wcProducto.id, wcProducto).toPromise();
                    console.log("Porducto actualizado en woocommerce");
                    producto.woocommerce.lastUpdate = new Date();
                }
                catch (err) {
                    console.log(err);
                }
            }
            catch (err) {
                console.log(err);
                if (err.error.code == "woocommerce_rest_product_invalid_id") {
                    console.log("El id del producto no se encuentra");
                    yield this.crearProductoInWC(producto);
                }
                if (err.error.code == "woocommerce_rest_cannot_edit") {
                    console.log("No tienes permiso para editar");
                }
            }
        });
    }
    syncFirebaseToWC() {
        this.productosServices.list().subscribe(productos => {
            productos.forEach(element => {
                let values = new src_app_models_woocommerceSyncData__WEBPACK_IMPORTED_MODULE_6__["WoocommerceSyncData"]();
                values.sincronizado = true;
                values.changeDate = new Date();
                this.productosServices.updateWoocommerceValues(element.id, values);
            });
        });
    }
    syncFirebaseToWC_OLD() {
        return new Promise((resolve, reject) => {
            this.psend = 0;
            this.preceived = 0;
            console.log("sincronizando...");
            let subsItemsProd = this.productosServices.list().subscribe((productos) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                subsItemsProd.unsubscribe();
                this.total = productos.length;
                for (let p of productos) {
                    let prod = new src_app_models_producto__WEBPACK_IMPORTED_MODULE_4__["Producto"]();
                    prod.asignarValores(p); //esto para que cargue las variables a los productos viejos aunque sea vacias
                    if (p.woocommerce.id == "") {
                        yield this.crearProductoInWC(prod);
                    }
                    else {
                        if (p.woocommerce.id) {
                            try {
                                console.log(prod.nombre);
                                let productos = yield this.getOne(p.woocommerce.id).toPromise();
                                prod.updatedAt = prod.updatedAt.toDate().setSeconds(prod.updatedAt.toDate().getSeconds());
                                p.woocommerce.lastUpdate = p.woocommerce.lastUpdate.toDate().setSeconds(p.woocommerce.lastUpdate.toDate().getSeconds() + 100);
                                console.log(p.woocommerce.lastUpdate);
                                console.log(prod.updatedAt);
                                if (prod.updatedAt > p.woocommerce.lastUpdate) {
                                    yield this.actualizarProductoInWC(prod);
                                }
                                else {
                                    console.log("Producto existe y está actualizado:");
                                }
                            }
                            catch (err) {
                                console.log(err);
                                if (err.error.code == "woocommerce_rest_term_invalid") {
                                    yield this.crearProductoInWC(prod);
                                }
                                if (err.error.code == "woocommerce_rest_product_invalid_id") {
                                    yield this.crearProductoInWC(prod);
                                }
                                if (err.error.code == "woocommerce_rest_cannot_edit") {
                                    console.log("No tienes permiso para editar");
                                }
                            }
                        }
                        else {
                            yield this.crearProductoInWC(prod);
                        }
                    }
                }
                resolve(true);
            }), err => {
                reject();
            });
        });
    }
    incrementarEnvio() {
        this.psend++;
        let progreso = this.psend / this.total;
        this.progresoSend.next(progreso);
    }
    incrementarRespuesta() {
        this.preceived++;
        let progreso = this.preceived / this.total;
        console.log(this.total + " " + this.preceived + " " + progreso + " " + this.progresoReceived.value);
        this.progresoReceived.next(progreso);
    }
};
WoocommerceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _comercios_service__WEBPACK_IMPORTED_MODULE_8__["ComerciosService"] },
    { type: _productos_service__WEBPACK_IMPORTED_MODULE_10__["ProductosService"] },
    { type: _wordpress_wordpress_service__WEBPACK_IMPORTED_MODULE_11__["WordpressService"] },
    { type: _fotos_service__WEBPACK_IMPORTED_MODULE_9__["FotoService"] },
    { type: _categorias_service__WEBPACK_IMPORTED_MODULE_7__["CategoriasService"] }
];
WoocommerceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], WoocommerceService);



/***/ })

}]);
//# sourceMappingURL=default~form-producto-form-producto-module~form-stock-form-stock-module~form-woocommerce-configuraci~3f21fcc3.js.map