(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["impresiones-ticket-detalle-ticket-detalle-module"],{

/***/ "./src/app/impresiones/ticket-detalle/ticket-detalle-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/impresiones/ticket-detalle/ticket-detalle-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: TicketDetallePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketDetallePageRoutingModule", function() { return TicketDetallePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ticket_detalle_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ticket-detalle.page */ "./src/app/impresiones/ticket-detalle/ticket-detalle.page.ts");




const routes = [
    {
        path: '',
        component: _ticket_detalle_page__WEBPACK_IMPORTED_MODULE_3__["TicketDetallePage"]
    }
];
let TicketDetallePageRoutingModule = class TicketDetallePageRoutingModule {
};
TicketDetallePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TicketDetallePageRoutingModule);



/***/ }),

/***/ "./src/app/impresiones/ticket-detalle/ticket-detalle.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/impresiones/ticket-detalle/ticket-detalle.module.ts ***!
  \*********************************************************************/
/*! exports provided: TicketDetallePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketDetallePageModule", function() { return TicketDetallePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ticket_detalle_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ticket-detalle-routing.module */ "./src/app/impresiones/ticket-detalle/ticket-detalle-routing.module.ts");
/* harmony import */ var _ticket_detalle_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ticket-detalle.page */ "./src/app/impresiones/ticket-detalle/ticket-detalle.page.ts");
/* harmony import */ var src_app_Components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/Components/components.module */ "./src/app/Components/components.module.ts");








let TicketDetallePageModule = class TicketDetallePageModule {
};
TicketDetallePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_Components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ticket_detalle_routing_module__WEBPACK_IMPORTED_MODULE_5__["TicketDetallePageRoutingModule"]
        ],
        declarations: [_ticket_detalle_page__WEBPACK_IMPORTED_MODULE_6__["TicketDetallePage"]]
    })
], TicketDetallePageModule);



/***/ })

}]);
//# sourceMappingURL=impresiones-ticket-detalle-ticket-detalle-module.js.map