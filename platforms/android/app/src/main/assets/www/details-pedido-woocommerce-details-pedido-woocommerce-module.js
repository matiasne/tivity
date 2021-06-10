(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["details-pedido-woocommerce-details-pedido-woocommerce-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/details-pedido-woocommerce/details-pedido-woocommerce.page.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/details-pedido-woocommerce/details-pedido-woocommerce.page.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Detalle Pedido</ion-title>    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <span *ngIf=\"order.statusCobro == cEstado.pendiente\"> <b style=\"color: blue;\"> Pendiente </b></span>\n  <span *ngIf=\"order.statusCobro == cEstado.suspendido\"> <b style=\"color: red;\"> Suspendido </b></span>\n  <span *ngIf=\"order.statusCobro == cEstado.cobrado\"> <b style=\"color: green;\"> Cobrado</b></span> \n  <span *ngIf=\"order.statusCobro == cEstado.reembolsado\"> <b style=\"color: red;\"> Reembolsado </b></span> <br>\n\n  <h5>Productos</h5>\n  <app-card-producto-woocommerce *ngFor=\"let producto of order.line_items \"\n          [item]=\"producto\"  \n  ></app-card-producto-woocommerce>\n  <h5>Datos de envío:</h5>\n  <p>\n    {{order.billing.first_name}} {{order.billing.last_name}}<br>\n    dirección: {{order.billing.address_1}}\n    <span *ngIf=\"order.billing.address_2\">\n      dirección 2: {{order.billing.address_2}}\n    </span><br>\n    ciudad:{{order.billing.city}}<br>\n    provincia:{{order.billing.state}}<br>\n    código postal:{{order.billing.postcode}}<br>\n    <ion-icon name=\"mail-outline\"></ion-icon><span (click)=\"enviarMail()\">email:{{order.billing.email}}</span> <br>\n    <ion-icon name=\"call-outline\"></ion-icon><span (click)=\"llamar()\" >phone:{{order.billing.phone}} </span>\n  </p>\n\n  <h5>Método de pago:</h5>\n  <p> {{order.payment_method_title}} </p>\n\n</ion-content>\n\n<ion-footer *ngIf=\"order.statusCobro != cEstado.reembolsado\" class=\"ion-no-border ion-padding\">    \n  <ion-grid *ngIf=\"order.payment_method == 'cod' && order.statusCobro != cEstado.suspendido\">\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-item *ngIf=\"cajas.length > 0\" class=\"item-card\">\n          <ion-label position=\"floating\">Caja</ion-label>\n          <ion-select [(ngModel)]=\"cajaSeleccionadaIndex\" (ionChange)=\"setearCaja()\">\n            <span *ngFor=\"let caja of cajas;let i=index\">\n              <ion-select-option [value]=\"i\" selected>{{caja.nombre}}</ion-select-option>\n            </span>          \n          </ion-select> \n        </ion-item>\n       \n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-item class=\"item-card\" *ngIf=\"cajas[cajaSeleccionadaIndex]\">\n          <ion-label position=\"floating\">Método</ion-label>\n          <ion-select [(ngModel)]=\"metodoPagoSeleccionado\">\n            <ion-select-option *ngIf=\"cajas[cajaSeleccionadaIndex].efectivo\" [value]=\"'efectivo'\">Efectivo</ion-select-option>\n            <ion-select-option *ngIf=\"cajas[cajaSeleccionadaIndex].debito\" [value]=\"'debito'\">Débito</ion-select-option>\n            <ion-select-option *ngIf=\"cajas[cajaSeleccionadaIndex].credito\" [value]=\"'credito'\">Crédito</ion-select-option>\n          </ion-select>    \n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n   \n  <ion-grid *ngIf=\"order.payment_method != 'cod'\">\n    <ion-row>\n      <ion-col size=\"6\">\n        El pedido ya ha sido cobrado.\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  \n  <ion-toolbar *ngIf=\"order.payment_method == 'cod' || order.payment_method == 'en_local'\">   \n    <ion-button *ngIf=\"order.statusCobro == cEstado.suspendido\" class=\"button-rounded\"  color=\"primary\" (click)=\"reanudar()\">Reanudar</ion-button>\n    <ion-button *ngIf=\"order.statusCobro == cEstado.cobrado\" class=\"button-rounded\"  color=\"danger\" (click)=\"reembolsar()\">Reembolsar: {{order.total | currency}}</ion-button>\n    <ion-button slot=\"start\" *ngIf=\"order.statusCobro != cEstado.cobrado && order.statusCobro != cEstado.suspendido\" class=\"button-rounded\"  color=\"danger\" (click)=\"suspender()\">Suspender</ion-button>\n    <ion-button slot=\"end\" *ngIf=\"order.statusCobro != cEstado.cobrado && order.statusCobro != cEstado.suspendido\" class=\"button-rounded\"  color=\"success\" (click)=\"cobrar()\">Cobrar: {{order.total | currency}}</ion-button>\n  </ion-toolbar>\n\n  <ion-toolbar *ngIf=\"order.payment_method != 'cod' && order.payment_method != 'en_local'\">   \n    <ion-button slot=\"start\" *ngIf=\"order.statusCobro != cEstado.cobrado && order.statusCobro != cEstado.suspendido\" class=\"button-rounded\"  color=\"danger\" (click)=\"suspender()\">Suspender</ion-button>\n    <ion-button slot=\"end\" *ngIf=\"order.statusCobro != cEstado.cobrado && order.statusCobro != cEstado.suspendido\" class=\"button-rounded\"  color=\"success\" (click)=\"completar()\">Completado</ion-button>\n  </ion-toolbar>\n  \n</ion-footer>");

/***/ }),

/***/ "./src/app/Services/woocommerce/orders.service.ts":
/*!********************************************************!*\
  !*** ./src/app/Services/woocommerce/orders.service.ts ***!
  \********************************************************/
/*! exports provided: OrdersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersService", function() { return OrdersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _comercios_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../comercios.service */ "./src/app/Services/comercios.service.ts");
/* harmony import */ var _wordpress_wordpress_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../wordpress/wordpress.service */ "./src/app/Services/wordpress/wordpress.service.ts");





let OrdersService = class OrdersService {
    constructor(http, comerciosService, wordpressService) {
        this.http = http;
        this.comerciosService = comerciosService;
        this.wordpressService = wordpressService;
        this.apiUrl = '';
        this.siteURL = '';
        this.woocommercePart = '/wp-json/wc/v3/';
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
        this.apiUrl = this.comercio.woocommerce.url + this.woocommercePart + "orders?consumer_key=" + this.comercio.woocommerce.consumerKey + "&consumer_secret=" + this.comercio.woocommerce.consumerSecret;
        return this.http.get(this.apiUrl, options);
    }
    getProcessing() {
        let httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.wordpressService.getToken()
        });
        let options = {
            headers: httpHeaders
        };
        this.comercio = this.comerciosService.getSelectedCommerceValue();
        this.apiUrl = this.comercio.woocommerce.url + this.woocommercePart + "orders?status=processing&consumer_key=" + this.comercio.woocommerce.consumerKey + "&consumer_secret=" + this.comercio.woocommerce.consumerSecret;
        return this.http.get(this.apiUrl, options);
    }
    updateStatus(order) {
        let httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.wordpressService.getToken()
        });
        let options = {
            headers: httpHeaders
        };
        this.comercio = this.comerciosService.getSelectedCommerceValue();
        this.apiUrl = this.comercio.woocommerce.url + this.woocommercePart + "orders/" + order.id + "?consumer_key=" + this.comercio.woocommerce.consumerKey + "&consumer_secret=" + this.comercio.woocommerce.consumerSecret;
        let body = {
            status: "processing"
        };
        return this.http.post(this.apiUrl, body, options);
    }
};
OrdersService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _comercios_service__WEBPACK_IMPORTED_MODULE_3__["ComerciosService"] },
    { type: _wordpress_wordpress_service__WEBPACK_IMPORTED_MODULE_4__["WordpressService"] }
];
OrdersService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], OrdersService);



/***/ }),

/***/ "./src/app/details-pedido-woocommerce/details-pedido-woocommerce-routing.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/details-pedido-woocommerce/details-pedido-woocommerce-routing.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: DetailsPedidoWoocommercePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPedidoWoocommercePageRoutingModule", function() { return DetailsPedidoWoocommercePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _details_pedido_woocommerce_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./details-pedido-woocommerce.page */ "./src/app/details-pedido-woocommerce/details-pedido-woocommerce.page.ts");




const routes = [
    {
        path: '',
        component: _details_pedido_woocommerce_page__WEBPACK_IMPORTED_MODULE_3__["DetailsPedidoWoocommercePage"]
    }
];
let DetailsPedidoWoocommercePageRoutingModule = class DetailsPedidoWoocommercePageRoutingModule {
};
DetailsPedidoWoocommercePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DetailsPedidoWoocommercePageRoutingModule);



/***/ }),

/***/ "./src/app/details-pedido-woocommerce/details-pedido-woocommerce.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/details-pedido-woocommerce/details-pedido-woocommerce.module.ts ***!
  \*********************************************************************************/
/*! exports provided: DetailsPedidoWoocommercePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPedidoWoocommercePageModule", function() { return DetailsPedidoWoocommercePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _details_pedido_woocommerce_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./details-pedido-woocommerce-routing.module */ "./src/app/details-pedido-woocommerce/details-pedido-woocommerce-routing.module.ts");
/* harmony import */ var _details_pedido_woocommerce_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./details-pedido-woocommerce.page */ "./src/app/details-pedido-woocommerce/details-pedido-woocommerce.page.ts");
/* harmony import */ var _Components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Components/components.module */ "./src/app/Components/components.module.ts");








let DetailsPedidoWoocommercePageModule = class DetailsPedidoWoocommercePageModule {
};
DetailsPedidoWoocommercePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _Components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _details_pedido_woocommerce_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailsPedidoWoocommercePageRoutingModule"]
        ],
        declarations: [_details_pedido_woocommerce_page__WEBPACK_IMPORTED_MODULE_6__["DetailsPedidoWoocommercePage"]]
    })
], DetailsPedidoWoocommercePageModule);



/***/ }),

/***/ "./src/app/details-pedido-woocommerce/details-pedido-woocommerce.page.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/details-pedido-woocommerce/details-pedido-woocommerce.page.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbHMtcGVkaWRvLXdvb2NvbW1lcmNlL2RldGFpbHMtcGVkaWRvLXdvb2NvbW1lcmNlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/details-pedido-woocommerce/details-pedido-woocommerce.page.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/details-pedido-woocommerce/details-pedido-woocommerce.page.ts ***!
  \*******************************************************************************/
/*! exports provided: DetailsPedidoWoocommercePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPedidoWoocommercePage", function() { return DetailsPedidoWoocommercePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _models_comercio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/comercio */ "./src/app/models/comercio.ts");
/* harmony import */ var _models_movimientoCaja__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/movimientoCaja */ "./src/app/models/movimientoCaja.ts");
/* harmony import */ var _models_pedido__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/pedido */ "./src/app/models/pedido.ts");
/* harmony import */ var _models_producto__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models/producto */ "./src/app/models/producto.ts");
/* harmony import */ var _models_woocommerce_order__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../models/woocommerce/order */ "./src/app/models/woocommerce/order.ts");
/* harmony import */ var _Services_authentication_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Services/authentication.service */ "./src/app/Services/authentication.service.ts");
/* harmony import */ var _Services_cajas_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Services/cajas.service */ "./src/app/Services/cajas.service.ts");
/* harmony import */ var _Services_comercios_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Services/comercios.service */ "./src/app/Services/comercios.service.ts");
/* harmony import */ var _Services_global_navegacion_parametros_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Services/global/navegacion-parametros.service */ "./src/app/Services/global/navegacion-parametros.service.ts");
/* harmony import */ var _Services_movimientos_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Services/movimientos.service */ "./src/app/Services/movimientos.service.ts");
/* harmony import */ var _Services_pedidos_woocommerce_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Services/pedidos-woocommerce.service */ "./src/app/Services/pedidos-woocommerce.service.ts");
/* harmony import */ var _Services_productos_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../Services/productos.service */ "./src/app/Services/productos.service.ts");
/* harmony import */ var _Services_toast_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../Services/toast.service */ "./src/app/Services/toast.service.ts");
/* harmony import */ var _Services_woocommerce_orders_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../Services/woocommerce/orders.service */ "./src/app/Services/woocommerce/orders.service.ts");



















let DetailsPedidoWoocommercePage = class DetailsPedidoWoocommercePage {
    constructor(navParamService, cajasService, ordersService, pedidosWoocommerceService, toastServices, router, authenticationService, firestore, movimientosService, navCtrl, productosService, comerciosService, alertController) {
        this.navParamService = navParamService;
        this.cajasService = cajasService;
        this.ordersService = ordersService;
        this.pedidosWoocommerceService = pedidosWoocommerceService;
        this.toastServices = toastServices;
        this.router = router;
        this.authenticationService = authenticationService;
        this.firestore = firestore;
        this.movimientosService = movimientosService;
        this.navCtrl = navCtrl;
        this.productosService = productosService;
        this.comerciosService = comerciosService;
        this.alertController = alertController;
        this.enumTipoMovimientoCaja = _models_movimientoCaja__WEBPACK_IMPORTED_MODULE_6__["EnumTipoMovimientoCaja"];
        this.cajas = [];
        this.cajaSeleccionadaIndex = 0;
        this.metodoPagoSeleccionado = "";
        this.cantidadMetodos = 0;
        this.metodoTexto = "";
        this.cEstado = _models_pedido__WEBPACK_IMPORTED_MODULE_7__["EnumEstadoCobro"];
        this.order = new _models_woocommerce_order__WEBPACK_IMPORTED_MODULE_9__["WCOrder"]();
        this.comercio = new _models_comercio__WEBPACK_IMPORTED_MODULE_5__["Comercio"]();
        this.comercio.asignarValores(this.comerciosService.getSelectedCommerceValue());
        if (this.navParamService.param instanceof _models_woocommerce_order__WEBPACK_IMPORTED_MODULE_9__["WCOrder"]) {
            this.order.asignarValores(this.navParamService.param);
            console.log(this.order);
        }
        this.cajasService.list().subscribe((cajas) => {
            for (let i = 0; i < cajas.length; i++) {
                if (cajas[i].estado == "abierta") {
                    this.cajas.push(cajas[i]);
                }
            }
            console.log(this.cajas);
            if (this.cajas.length == 0) {
                this.toastServices.alert("Debes tener al menos una caja abierta", "");
                this.router.navigate(['/list-cajas']);
            }
            else {
                this.setSavedCaja();
            }
        });
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
    }
    setSavedCaja() {
        this.cajaSeleccionadaIndex = Number(localStorage.getItem('cajaSeleccionadaIndex'));
        if (!this.cajaSeleccionadaIndex) {
            this.cajaSeleccionadaIndex = 0;
        }
        this.setearCaja();
    }
    llamar() {
    }
    enviarMail() {
    }
    setearCaja() {
        localStorage.setItem('cajaSeleccionadaIndex', this.cajaSeleccionadaIndex.toString());
        this.cajaSeleccionada = this.cajas[this.cajaSeleccionadaIndex];
        var setear = "";
        this.cantidadMetodos = 0;
        if (this.cajas[this.cajaSeleccionadaIndex].debito) {
            setear = "debito";
            this.metodoTexto = "Solo Débito";
            this.cantidadMetodos++;
        }
        if (this.cajas[this.cajaSeleccionadaIndex].credito) {
            setear = "credito";
            this.metodoTexto = "Solo Crédito";
            this.cantidadMetodos++;
        }
        if (this.cajas[this.cajaSeleccionadaIndex].efectivo) {
            setear = "efectivo";
            this.metodoTexto = "Solo Efectivo";
            this.cantidadMetodos++;
        }
        this.metodoPagoSeleccionado = "";
        if (this.cantidadMetodos == 1) {
            this.metodoPagoSeleccionado = setear;
        }
    }
    cobrar() {
        this.order.statusCobro = this.cEstado.cobrado;
        this.order.status = "completed";
        this.pedidosWoocommerceService.update(this.order).then(data => {
            console.log("Actualizado en firebase");
        });
        this.ordersService.updateStatus(this.order).subscribe(data => {
        });
        this.navCtrl.back();
        this.restarStock();
        //cargar en caja    
    }
    reanudar() {
        this.order.statusCobro = this.cEstado.pendiente;
        this.order.status = "processing";
        this.pedidosWoocommerceService.update(this.order).then(data => {
            console.log("Actualizado en firebase");
        });
        this.ordersService.updateStatus(this.order).subscribe(data => {
            //restar stock de productos 
        });
        this.navCtrl.back();
    }
    reembolsar() {
        this.order.statusCobro = this.cEstado.reembolsado;
        this.order.status = "refunded";
        this.pedidosWoocommerceService.update(this.order).then(data => {
            console.log("Actualizado en firebase");
        });
        this.ordersService.updateStatus(this.order).subscribe(data => {
            //restar stock de productos 
        });
        var reembolso = new _models_movimientoCaja__WEBPACK_IMPORTED_MODULE_6__["MovimientoCaja"](this.authenticationService.getUID(), this.authenticationService.getEmail());
        reembolso.tipo = this.enumTipoMovimientoCaja.devolucion;
        reembolso.cajaId = this.cajaSeleccionada.id;
        reembolso.metodoPago = this.metodoPagoSeleccionado;
        reembolso.monto = -Number(this.order.total);
        reembolso.motivo = "Pago de pedido Web id:" + this.order.id;
        this.movimientosService.setearPath(this.cajaSeleccionada.id);
        this.movimientosService.add(reembolso);
        this.navCtrl.back();
    }
    suspender() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Está seguro que desea suspender el pedido?',
                message: '',
                buttons: [
                    {
                        text: 'No',
                        handler: (blah) => {
                        }
                    }, {
                        text: 'Si',
                        handler: () => {
                            this.order.statusCobro = this.cEstado.suspendido;
                            this.order.status = "cancelled";
                            this.pedidosWoocommerceService.update(this.order).then(data => {
                                console.log("Actualizado en firebase");
                            });
                            this.ordersService.updateStatus(this.order).subscribe(data => {
                                this.sumarStock();
                            });
                            this.navCtrl.back();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    completar() {
        this.order.status = "completed";
        this.pedidosWoocommerceService.update(this.order).then(data => {
            console.log("Actualizado en firebase");
        });
        this.ordersService.updateStatus(this.order).subscribe(data => {
        });
        var pago = new _models_movimientoCaja__WEBPACK_IMPORTED_MODULE_6__["MovimientoCaja"](this.authenticationService.getUID(), this.authenticationService.getEmail());
        pago.tipo = this.enumTipoMovimientoCaja.pago;
        pago.cajaId = this.cajaSeleccionada.id;
        pago.metodoPago = this.metodoPagoSeleccionado;
        pago.monto = Number(this.order.total);
        pago.motivo = "Pago de pedido Web id:" + this.order.id;
        this.movimientosService.setearPath(this.cajaSeleccionada.id);
        this.movimientosService.add(pago);
        this.navCtrl.back();
    }
    /*
      mantenerStock(){ //esto se hace para asegurar que en woocommerce y en firebase existe el mismo stock
        this.order.line_items.forEach(item =>{
          console.log(item)
          let obs = this.productosService.getByName(item.name).subscribe((data:any)=>{
           obs.unsubscribe()
            console.log(data)
            let prod= new Producto()
            prod.asignarValores(data[0])
            prod.stock = Number(item.quantity)
            this.productosService.update(prod).then(data=>{
              console.log("Stock restado")
            })
          })
        })
      }*/
    sumarStock() {
        if (this.comercio.config.stock) {
            this.order.line_items.forEach(item => {
                console.log(item);
                let obs = this.productosService.getByName(item.name).subscribe((data) => {
                    obs.unsubscribe();
                    console.log(data);
                    let prod = new _models_producto__WEBPACK_IMPORTED_MODULE_8__["Producto"]();
                    prod.asignarValores(data[0]);
                    let deltaStock = 0;
                    if (prod.valorPor)
                        deltaStock = (Number(item.quantity) * Number(prod.valorPor));
                    else
                        deltaStock = Number(item.quantity);
                    this.productosService.updateStock(deltaStock, prod.id);
                });
            });
        }
    }
    restarStock() {
        if (this.comercio.config.stock) {
            this.order.line_items.forEach(item => {
                console.log(item);
                let obs = this.productosService.getByName(item.name).subscribe((data) => {
                    obs.unsubscribe();
                    console.log(data);
                    let prod = new _models_producto__WEBPACK_IMPORTED_MODULE_8__["Producto"]();
                    prod.asignarValores(data[0]);
                    let deltaStock = 0;
                    if (prod.valorPor)
                        deltaStock = -(Number(item.quantity) * Number(prod.valorPor));
                    else
                        deltaStock = -Number(item.quantity);
                    this.productosService.updateStock(deltaStock, prod.id);
                });
            });
        }
    }
};
DetailsPedidoWoocommercePage.ctorParameters = () => [
    { type: _Services_global_navegacion_parametros_service__WEBPACK_IMPORTED_MODULE_13__["NavegacionParametrosService"] },
    { type: _Services_cajas_service__WEBPACK_IMPORTED_MODULE_11__["CajasService"] },
    { type: _Services_woocommerce_orders_service__WEBPACK_IMPORTED_MODULE_18__["OrdersService"] },
    { type: _Services_pedidos_woocommerce_service__WEBPACK_IMPORTED_MODULE_15__["PedidosWoocommerceService"] },
    { type: _Services_toast_service__WEBPACK_IMPORTED_MODULE_17__["ToastService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _Services_authentication_service__WEBPACK_IMPORTED_MODULE_10__["AuthenticationService"] },
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] },
    { type: _Services_movimientos_service__WEBPACK_IMPORTED_MODULE_14__["MovimientosService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _Services_productos_service__WEBPACK_IMPORTED_MODULE_16__["ProductosService"] },
    { type: _Services_comercios_service__WEBPACK_IMPORTED_MODULE_12__["ComerciosService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
DetailsPedidoWoocommercePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-details-pedido-woocommerce',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./details-pedido-woocommerce.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/details-pedido-woocommerce/details-pedido-woocommerce.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./details-pedido-woocommerce.page.scss */ "./src/app/details-pedido-woocommerce/details-pedido-woocommerce.page.scss")).default]
    })
], DetailsPedidoWoocommercePage);



/***/ })

}]);
//# sourceMappingURL=details-pedido-woocommerce-details-pedido-woocommerce-module.js.map