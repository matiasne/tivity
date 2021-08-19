(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["form-stock-form-stock-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-stock/form-stock.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form-stock/form-stock.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title  size=\"small\">Stock</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <h5>Stock Actual: {{producto.stock}} {{producto.unidad}}</h5> \n  Agregar:\n  <ion-item>    \n    <ion-input type=\"number\" [(ngModel)]=\"nuevoStock\"></ion-input> {{producto.unidad}}\n  </ion-item>\n  <p>Stock Total: {{producto.stock + nuevoStock}} {{producto.unidad}}</p>\n</ion-content>\n<ion-footer class=\"ion-no-border ion-padding\">\n  <ion-toolbar> \n    <ion-button  class=\"button-rounded\" slot=\"end\" (click)=\"guardar()\">Guardar</ion-button>  \n    <ion-button class=\"button-rounded\" slot=\"start\"  color=\"light\" (click)=\"cancelar()\">Cancelar</ion-button>\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "./src/app/form-stock/form-stock-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/form-stock/form-stock-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: FormStockPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormStockPageRoutingModule", function() { return FormStockPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _form_stock_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-stock.page */ "./src/app/form-stock/form-stock.page.ts");




const routes = [
    {
        path: '',
        component: _form_stock_page__WEBPACK_IMPORTED_MODULE_3__["FormStockPage"]
    }
];
let FormStockPageRoutingModule = class FormStockPageRoutingModule {
};
FormStockPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FormStockPageRoutingModule);



/***/ }),

/***/ "./src/app/form-stock/form-stock.module.ts":
/*!*************************************************!*\
  !*** ./src/app/form-stock/form-stock.module.ts ***!
  \*************************************************/
/*! exports provided: FormStockPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormStockPageModule", function() { return FormStockPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _form_stock_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-stock-routing.module */ "./src/app/form-stock/form-stock-routing.module.ts");
/* harmony import */ var _form_stock_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form-stock.page */ "./src/app/form-stock/form-stock.page.ts");
/* harmony import */ var _Components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Components/components.module */ "./src/app/Components/components.module.ts");








let FormStockPageModule = class FormStockPageModule {
};
FormStockPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _Components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _form_stock_routing_module__WEBPACK_IMPORTED_MODULE_5__["FormStockPageRoutingModule"]
        ],
        declarations: [_form_stock_page__WEBPACK_IMPORTED_MODULE_6__["FormStockPage"]]
    })
], FormStockPageModule);



/***/ }),

/***/ "./src/app/form-stock/form-stock.page.scss":
/*!*************************************************!*\
  !*** ./src/app/form-stock/form-stock.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0tc3RvY2svZm9ybS1zdG9jay5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/form-stock/form-stock.page.ts":
/*!***********************************************!*\
  !*** ./src/app/form-stock/form-stock.page.ts ***!
  \***********************************************/
/*! exports provided: FormStockPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormStockPage", function() { return FormStockPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _models_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/item */ "./src/app/models/item.ts");
/* harmony import */ var _models_variacionStock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/variacionStock */ "./src/app/models/variacionStock.ts");
/* harmony import */ var _Services_productos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Services/productos.service */ "./src/app/Services/productos.service.ts");
/* harmony import */ var _Services_variaciones_stocks_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Services/variaciones-stocks.service */ "./src/app/Services/variaciones-stocks.service.ts");
/* harmony import */ var _Services_woocommerce_woocommerce_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Services/woocommerce/woocommerce.service */ "./src/app/Services/woocommerce/woocommerce.service.ts");








let FormStockPage = class FormStockPage {
    constructor(productosService, modalCtrl, navParams, variacionesStockService, woocommerceService) {
        this.productosService = productosService;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.variacionesStockService = variacionesStockService;
        this.woocommerceService = woocommerceService;
        this.nuevoStock = 0;
        this.item = new _models_item__WEBPACK_IMPORTED_MODULE_3__["Item"]();
        this.item.asignarValores(this.navParams.get('item'));
    }
    ngOnInit() {
    }
    cancelar() {
        this.modalCtrl.dismiss();
    }
    guardar() {
        this.item.stock = this.item.stock + this.nuevoStock;
        this.modalCtrl.dismiss();
        this.productosService.update(this.item).then(data => {
            console.log(data);
            this.woocommerceService.setPart("products");
            this.woocommerceService.actualizarProductoInWC(this.item);
        });
        let vStock = new _models_variacionStock__WEBPACK_IMPORTED_MODULE_4__["variacionStock"]();
        vStock.productoId = this.item.id;
        vStock.stock = this.item.stock;
        this.variacionesStockService.setPathProducto(this.item.id);
        this.variacionesStockService.add(vStock).then(resp => {
            console.log("variacion Guardada");
        });
        //guardar el registro del stock actual con fecha
    }
};
FormStockPage.ctorParameters = () => [
    { type: _Services_productos_service__WEBPACK_IMPORTED_MODULE_5__["ProductosService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
    { type: _Services_variaciones_stocks_service__WEBPACK_IMPORTED_MODULE_6__["VariacionesStocksService"] },
    { type: _Services_woocommerce_woocommerce_service__WEBPACK_IMPORTED_MODULE_7__["WoocommerceService"] }
];
FormStockPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-stock',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./form-stock.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-stock/form-stock.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./form-stock.page.scss */ "./src/app/form-stock/form-stock.page.scss")).default]
    })
], FormStockPage);



/***/ })

}]);
//# sourceMappingURL=form-stock-form-stock-module.js.map