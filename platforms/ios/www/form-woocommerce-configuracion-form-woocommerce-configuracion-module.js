(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["form-woocommerce-configuracion-form-woocommerce-configuracion-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-woocommerce-configuracion/form-woocommerce-configuracion.page.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form-woocommerce-configuracion/form-woocommerce-configuracion.page.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title  size=\"small\">Integración Woocommerce</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n  <div class=\"form-card\">\n   \n    <ion-item>\n      <ion-label position=\"floating\" color=\"primary\">Usuario</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"woocommerceConnection.user\" (ionChange)=\"cambiado()\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\" color=\"primary\">Contraseña</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"woocommerceConnection.password\" (ionChange)=\"cambiado()\"></ion-input>\n    </ion-item>\n  </div>\n\n  <div class=\"form-card\">\n\n    \n    \n    <ion-item>\n      <ion-label position=\"floating\" color=\"primary\">URL del sitio web</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"woocommerceConnection.url\" (ionChange)=\"cambiado()\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\" color=\"primary\">Consumer Key</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"woocommerceConnection.consumerKey\" (ionChange)=\"cambiado()\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\" color=\"primary\">Consumer Secret</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"woocommerceConnection.consumerSecret\" (ionChange)=\"cambiado()\"></ion-input>\n    </ion-item>\n\n    <!--ion-button class=\"button-rounded\" slot=\"end\"  color=\"success\" (click)=\"guardar()\">Guardar</ion-button-->\n\n    <ion-button *ngIf=\"!woocommerceConnection.isOk\" class=\"button-rounded\" color=\"primary\" (click)=\"test()\">Conectar</ion-button>\n    <ion-button *ngIf=\"woocommerceConnection.isOk\" class=\"button-rounded\" color=\"success\" (click)=\"test()\">Conexion OK</ion-button>\n    <!--ion-grid>\n      <ion-row>\n        <ion-col>\n        \n        </ion-col>\n        \n      </ion-row>\n      <ion-row>\n          <ion-button class=\"button-rounded\" color=\"success\" (click)=\"sincronizar()\" [disabled]=\"progresoReceived != 0\" ><ion-icon name=\"sync-outline\"></ion-icon> Sincronizar</ion-button>\n      </ion-row>\n    </ion-grid-->\n    \n</div>  \n<ion-progress-bar *ngIf=\"progresoSend != 0\"  [value]=\"progresoReceived\" [buffer]=\"progresoSend\"></ion-progress-bar>\n    <p *ngIf=\"progresoSend != 0\">sincronizado: {{progresoReceived * 100}}%</p>\n  \n  \n</ion-content>\n<ion-footer>\n  <ion-toolbar>   \n    <ion-button class=\"button-rounded\" slot=\"start\"  color=\"light\" (click)=\"cancelar()\">Volver</ion-button>\n    <ion-button  class=\"button-rounded\" slot=\"end\" color=\"primary\" (click)=\"guardar()\">Guardar</ion-button>\n  </ion-toolbar> \n</ion-footer>\n");

/***/ }),

/***/ "./src/app/Services/woocommerce/webhooks.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/Services/woocommerce/webhooks.service.ts ***!
  \**********************************************************/
/*! exports provided: WebhooksService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebhooksService", function() { return WebhooksService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_models_woocommerce_webhook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/woocommerce/webhook */ "./src/app/models/woocommerce/webhook.ts");
/* harmony import */ var _comercios_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../comercios.service */ "./src/app/Services/comercios.service.ts");
/* harmony import */ var _wordpress_wordpress_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../wordpress/wordpress.service */ "./src/app/Services/wordpress/wordpress.service.ts");






let WebhooksService = class WebhooksService {
    constructor(http, comerciosService, wordpressService) {
        this.http = http;
        this.comerciosService = comerciosService;
        this.wordpressService = wordpressService;
        this.apiUrl = '';
        this.siteURL = '';
        this.woocommercePart = '/wp-json/wc/v3/';
        this.tipoItem = "webhooks";
    }
    getAll() {
        let httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.wordpressService.getToken()
        });
        let options = {
            headers: httpHeaders
        };
        this.comercio = this.comerciosService.getSelectedCommerceValue();
        this.apiUrl = this.comercio.woocommerce.url + this.woocommercePart + this.tipoItem + "?consumer_key=" + this.comercio.woocommerce.consumerKey + "&consumer_secret=" + this.comercio.woocommerce.consumerSecret;
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
    pause() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let webhooks = yield this.getAll().toPromise();
            for (let w of webhooks) {
                let webhook = new src_app_models_woocommerce_webhook__WEBPACK_IMPORTED_MODULE_3__["WebHook"]();
                webhook.asignarValores(w); //esto para que cargue las variables a los productos viejos aunque sea vacias
                console.log("pause");
                webhook.status = "paused";
                console.log(webhooks);
                try {
                    let resp = yield this.updateOne(webhook.id, webhook).toPromise();
                    console.log("Webhook pausado");
                }
                catch (err) {
                    console.log(err);
                }
            }
        });
    }
    enable() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let webhooks = yield this.getAll().toPromise();
            for (let w of webhooks) {
                let webhook = new src_app_models_woocommerce_webhook__WEBPACK_IMPORTED_MODULE_3__["WebHook"]();
                webhook.asignarValores(w); //esto para que cargue las variables a los productos viejos aunque sea vacias
                webhook.status = "active";
                try {
                    yield this.updateOne(webhook.id, webhook).toPromise();
                    console.log("webhook habilitado");
                }
                catch (err) {
                    console.log(err);
                }
            }
        });
    }
    sincronizar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let nuevoProducto = false;
            let nuevoPedido = false;
            try {
                let webhooks = yield this.getAll().toPromise();
                for (const wh of webhooks) {
                    if (wh.name == "Nuevo Pedido Firebase")
                        nuevoPedido = true;
                    if (wh.name == 'Nuevo Producto Firebase')
                        nuevoProducto = true;
                }
                /*
                     if(!nuevoProducto){
                      let webhook = new WebHook()
                      webhook.name = "Nuevo Producto Firebase"
                      webhook.status = "active"
                      webhook.topic ="product.created"
                      webhook.resource = "product"
                      webhook.event = "created"
                      webhook.delivery_url = "https://us-central1-comercios-admin-socialup.cloudfunctions.net/api/woocommerce/NuevoProducto?comercioId="+this.comerciosService.getSelectedCommerceValue().id
                      webhook.date_created = new Date().toDateString()
                      webhook.hooks=[
                        "woocommerce_process_product_meta",
                        "woocommerce_new_product",
                        "woocommerce_new_product_variation"
                      ]
                
                     
                        
                     }
                     else{
                      console.log("Webhook nuevo producto ya existe")
                    }*/
                if (!nuevoPedido) {
                    let webhook = new src_app_models_woocommerce_webhook__WEBPACK_IMPORTED_MODULE_3__["WebHook"]();
                    webhook.name = "Nuevo Pedido Firebase";
                    webhook.status = "active";
                    webhook.topic = "order.created";
                    webhook.resource = "order";
                    webhook.event = "created";
                    webhook.delivery_url = "https://us-central1-comercios-admin-socialup.cloudfunctions.net/api/woocommerce/NuevoPedido?comercioId=" + this.comerciosService.getSelectedCommerceValue().id;
                    webhook.date_created = new Date().toDateString();
                    webhook.hooks = [
                        "woocommerce_new_order"
                    ];
                    yield this.postOne(webhook).toPromise();
                }
                else {
                    console.log("Webhook nuevo pedido ya existe");
                }
            }
            catch (err) {
                console.log(err);
            }
        });
    }
};
WebhooksService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _comercios_service__WEBPACK_IMPORTED_MODULE_4__["ComerciosService"] },
    { type: _wordpress_wordpress_service__WEBPACK_IMPORTED_MODULE_5__["WordpressService"] }
];
WebhooksService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], WebhooksService);



/***/ }),

/***/ "./src/app/form-woocommerce-configuracion/form-woocommerce-configuracion-routing.module.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/form-woocommerce-configuracion/form-woocommerce-configuracion-routing.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: FormWoocommerceConfiguracionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormWoocommerceConfiguracionPageRoutingModule", function() { return FormWoocommerceConfiguracionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _form_woocommerce_configuracion_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-woocommerce-configuracion.page */ "./src/app/form-woocommerce-configuracion/form-woocommerce-configuracion.page.ts");




const routes = [
    {
        path: '',
        component: _form_woocommerce_configuracion_page__WEBPACK_IMPORTED_MODULE_3__["FormWoocommerceConfiguracionPage"]
    }
];
let FormWoocommerceConfiguracionPageRoutingModule = class FormWoocommerceConfiguracionPageRoutingModule {
};
FormWoocommerceConfiguracionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FormWoocommerceConfiguracionPageRoutingModule);



/***/ }),

/***/ "./src/app/form-woocommerce-configuracion/form-woocommerce-configuracion.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/form-woocommerce-configuracion/form-woocommerce-configuracion.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: FormWoocommerceConfiguracionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormWoocommerceConfiguracionPageModule", function() { return FormWoocommerceConfiguracionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _form_woocommerce_configuracion_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-woocommerce-configuracion-routing.module */ "./src/app/form-woocommerce-configuracion/form-woocommerce-configuracion-routing.module.ts");
/* harmony import */ var _form_woocommerce_configuracion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form-woocommerce-configuracion.page */ "./src/app/form-woocommerce-configuracion/form-woocommerce-configuracion.page.ts");







let FormWoocommerceConfiguracionPageModule = class FormWoocommerceConfiguracionPageModule {
};
FormWoocommerceConfiguracionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _form_woocommerce_configuracion_routing_module__WEBPACK_IMPORTED_MODULE_5__["FormWoocommerceConfiguracionPageRoutingModule"]
        ],
        declarations: [_form_woocommerce_configuracion_page__WEBPACK_IMPORTED_MODULE_6__["FormWoocommerceConfiguracionPage"]]
    })
], FormWoocommerceConfiguracionPageModule);



/***/ }),

/***/ "./src/app/form-woocommerce-configuracion/form-woocommerce-configuracion.page.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/form-woocommerce-configuracion/form-woocommerce-configuracion.page.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0td29vY29tbWVyY2UtY29uZmlndXJhY2lvbi9mb3JtLXdvb2NvbW1lcmNlLWNvbmZpZ3VyYWNpb24ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/form-woocommerce-configuracion/form-woocommerce-configuracion.page.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/form-woocommerce-configuracion/form-woocommerce-configuracion.page.ts ***!
  \***************************************************************************************/
/*! exports provided: FormWoocommerceConfiguracionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormWoocommerceConfiguracionPage", function() { return FormWoocommerceConfiguracionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _models_comercio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/comercio */ "./src/app/models/comercio.ts");
/* harmony import */ var _Services_categorias_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/categorias.service */ "./src/app/Services/categorias.service.ts");
/* harmony import */ var _Services_comercios_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Services/comercios.service */ "./src/app/Services/comercios.service.ts");
/* harmony import */ var _Services_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Services/loading.service */ "./src/app/Services/loading.service.ts");
/* harmony import */ var _Services_productos_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Services/productos.service */ "./src/app/Services/productos.service.ts");
/* harmony import */ var _Services_toast_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Services/toast.service */ "./src/app/Services/toast.service.ts");
/* harmony import */ var _Services_woocommerce_webhooks_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Services/woocommerce/webhooks.service */ "./src/app/Services/woocommerce/webhooks.service.ts");
/* harmony import */ var _Services_woocommerce_woocommerce_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Services/woocommerce/woocommerce.service */ "./src/app/Services/woocommerce/woocommerce.service.ts");
/* harmony import */ var _Services_wordpress_wordpress_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Services/wordpress/wordpress.service */ "./src/app/Services/wordpress/wordpress.service.ts");












let FormWoocommerceConfiguracionPage = class FormWoocommerceConfiguracionPage {
    constructor(comerciosService, navCtrl, productosServices, woocommerceService, wordpressService, alertController, loadingService, categoriasService, webhooksService, toastService) {
        this.comerciosService = comerciosService;
        this.navCtrl = navCtrl;
        this.productosServices = productosServices;
        this.woocommerceService = woocommerceService;
        this.wordpressService = wordpressService;
        this.alertController = alertController;
        this.loadingService = loadingService;
        this.categoriasService = categoriasService;
        this.webhooksService = webhooksService;
        this.toastService = toastService;
        this.productos = [];
        this.progresoReceived = 0;
        this.progresoSend = 0;
        this.actualizar = false;
        this.conexionOk = false;
        this.woocommerceConnection = {
            comercioId: "",
            user: "",
            password: "",
            url: "",
            consumerKey: "",
            consumerSecret: "",
            isOk: "false"
        };
        this.comercio = new _models_comercio__WEBPACK_IMPORTED_MODULE_3__["Comercio"]();
    }
    ngOnInit() {
        this.comercio = this.comerciosService.getSelectedCommerceValue();
        this.comerciosService.getWoocommerceValue(this.comercio.id).subscribe(data => {
            this.woocommerceConnection = data;
            this.woocommerceConnection.comercioId = this.comercio.id;
            console.log(this.woocommerceConnection);
        });
    }
    cancelar() {
        this.navCtrl.back();
    }
    guardar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.comerciosService.updateWoocommerceValues(this.comercio.id, this.woocommerceConnection).then(data => {
                console.log("Guardados");
            });
        });
    }
    test() {
        this.comerciosService.updateWoocommerceValues(this.comercio.id, this.woocommerceConnection).then(data => {
            this.conectar();
        }, err => {
            console.log("No se pudo guardar");
        });
    }
    conectar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.wordpressService.login();
            }
            catch (err) {
                console.log(err);
                if (err.status == 0) {
                    this.toastService.alert("Error", "No se puede conectar con la URL");
                }
                else {
                    this.toastService.alert("Error", err.error.message);
                }
                this.woocommerceConnection.isOk = "false";
                this.comerciosService.updateWoocommerceValues(this.comercio.id, this.woocommerceConnection).then(data => {
                    console.log("Update");
                });
                return false;
            }
            this.loadingService.presentLoadingText("Probando conexión...");
            this.woocommerceService.getAll().then(data => {
                console.log(data);
                this.conexionOk = true;
                this.woocommerceConnection.isOk = "true";
                this.comerciosService.updateWoocommerceValues(this.comercio.id, this.woocommerceConnection).then(data => {
                    console.log("Update");
                });
                this.loadingService.dismissLoading();
                let obs = this.categoriasService.list().subscribe(categorias => {
                    obs.unsubscribe();
                    categorias.forEach(cat => {
                        this.categoriasService.updateWoocommerceValues(cat.id, { sincronizado: true });
                    });
                });
            }, err => {
                console.log(err);
                if (err.status == 0) {
                    this.toastService.alert("Error", "No se puede conectar con la URL");
                    this.woocommerceConnection.isOk = "false";
                    this.comerciosService.updateWoocommerceValues(this.comercio.id, this.woocommerceConnection).then(data => {
                        console.log("Update");
                    });
                }
                else {
                    this.toastService.alert("Error", err.error.message);
                    this.woocommerceConnection.isOk = "false";
                    this.comerciosService.updateWoocommerceValues(this.comercio.id, this.woocommerceConnection).then(data => {
                        console.log("Update");
                    });
                }
                this.conexionOk = false;
                this.woocommerceConnection.isOk = "false";
                this.comerciosService.updateWoocommerceValues(this.comercio.id, this.woocommerceConnection).then(data => {
                    console.log("Update");
                });
                this.loadingService.dismissLoading();
            });
        });
    }
    /* async sincronizar(){
       this.actualizar = false;
       this.progresoReceived = 0;
       this.progresoSend = 0;
       
       await this.webhooksService.pause()
       await this.webhooksService.sincronizar()
   
       let resp = await this.WCCategoriesService.syncFirebaseToWC()
      // console.log(resp)
       resp = await this.woocommerceService.syncFirebaseToWC()
     //  console.log(resp)
       await this.webhooksService.enable()
       
     }*/
    downloadData() {
    }
    cambiado() {
        this.actualizar = true;
    }
    mostrarMensaje(mensaje) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Resultado',
                message: mensaje,
                buttons: [
                    {
                        text: 'Ok',
                        handler: () => {
                        }
                    }
                ]
            });
            alert.onDidDismiss().then(() => {
            });
            yield alert.present();
        });
    }
};
FormWoocommerceConfiguracionPage.ctorParameters = () => [
    { type: _Services_comercios_service__WEBPACK_IMPORTED_MODULE_5__["ComerciosService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _Services_productos_service__WEBPACK_IMPORTED_MODULE_7__["ProductosService"] },
    { type: _Services_woocommerce_woocommerce_service__WEBPACK_IMPORTED_MODULE_10__["WoocommerceService"] },
    { type: _Services_wordpress_wordpress_service__WEBPACK_IMPORTED_MODULE_11__["WordpressService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _Services_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"] },
    { type: _Services_categorias_service__WEBPACK_IMPORTED_MODULE_4__["CategoriasService"] },
    { type: _Services_woocommerce_webhooks_service__WEBPACK_IMPORTED_MODULE_9__["WebhooksService"] },
    { type: _Services_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"] }
];
FormWoocommerceConfiguracionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-woocommerce-configuracion',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./form-woocommerce-configuracion.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-woocommerce-configuracion/form-woocommerce-configuracion.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./form-woocommerce-configuracion.page.scss */ "./src/app/form-woocommerce-configuracion/form-woocommerce-configuracion.page.scss")).default]
    })
], FormWoocommerceConfiguracionPage);



/***/ }),

/***/ "./src/app/models/woocommerce/webhook.ts":
/*!***********************************************!*\
  !*** ./src/app/models/woocommerce/webhook.ts ***!
  \***********************************************/
/*! exports provided: WebHook */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebHook", function() { return WebHook; });
class WebHook {
    constructor() {
        this.hooks = [];
    }
    asignarValores(init) {
        Object.assign(this, init);
    }
}


/***/ })

}]);
//# sourceMappingURL=form-woocommerce-configuracion-form-woocommerce-configuracion-module.js.map