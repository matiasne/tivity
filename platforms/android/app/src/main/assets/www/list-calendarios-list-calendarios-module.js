(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-calendarios-list-calendarios-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/list-calendarios/list-calendarios.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/list-calendarios/list-calendarios.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>list-calendarios</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/list-calendarios/list-calendarios-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/list-calendarios/list-calendarios-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: ListCalendariosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListCalendariosPageRoutingModule", function() { return ListCalendariosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _list_calendarios_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-calendarios.page */ "./src/app/list-calendarios/list-calendarios.page.ts");




const routes = [
    {
        path: '',
        component: _list_calendarios_page__WEBPACK_IMPORTED_MODULE_3__["ListCalendariosPage"]
    }
];
let ListCalendariosPageRoutingModule = class ListCalendariosPageRoutingModule {
};
ListCalendariosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ListCalendariosPageRoutingModule);



/***/ }),

/***/ "./src/app/list-calendarios/list-calendarios.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/list-calendarios/list-calendarios.module.ts ***!
  \*************************************************************/
/*! exports provided: ListCalendariosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListCalendariosPageModule", function() { return ListCalendariosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _list_calendarios_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-calendarios-routing.module */ "./src/app/list-calendarios/list-calendarios-routing.module.ts");
/* harmony import */ var _list_calendarios_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-calendarios.page */ "./src/app/list-calendarios/list-calendarios.page.ts");







let ListCalendariosPageModule = class ListCalendariosPageModule {
};
ListCalendariosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _list_calendarios_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListCalendariosPageRoutingModule"]
        ],
        declarations: [_list_calendarios_page__WEBPACK_IMPORTED_MODULE_6__["ListCalendariosPage"]]
    })
], ListCalendariosPageModule);



/***/ }),

/***/ "./src/app/list-calendarios/list-calendarios.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/list-calendarios/list-calendarios.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3QtY2FsZW5kYXJpb3MvbGlzdC1jYWxlbmRhcmlvcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/list-calendarios/list-calendarios.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/list-calendarios/list-calendarios.page.ts ***!
  \***********************************************************/
/*! exports provided: ListCalendariosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListCalendariosPage", function() { return ListCalendariosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _Services_servicios_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/servicios.service */ "./src/app/Services/servicios.service.ts");
/* harmony import */ var _Services_calendarios_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/calendarios.service */ "./src/app/Services/calendarios.service.ts");




let ListCalendariosPage = class ListCalendariosPage {
    constructor(serivicosServices, calendarioService) {
        this.serivicosServices = serivicosServices;
        this.calendarioService = calendarioService;
        this.calendarios = [];
    }
    ngOnInit() {
        this.serivicosServices.list().subscribe((servicios) => {
            servicios.forEach(servicio => {
                this.calendarioService.setPathIds(servicio.id);
                this.calendarioService.list().subscribe(calendarios => {
                    calendarios.forEach(cal => {
                        this.calendarios.push(cal);
                    });
                });
            });
        });
    }
};
ListCalendariosPage.ctorParameters = () => [
    { type: _Services_servicios_service__WEBPACK_IMPORTED_MODULE_2__["ServiciosService"] },
    { type: _Services_calendarios_service__WEBPACK_IMPORTED_MODULE_3__["CalendariosService"] }
];
ListCalendariosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-calendarios',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./list-calendarios.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/list-calendarios/list-calendarios.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./list-calendarios.page.scss */ "./src/app/list-calendarios/list-calendarios.page.scss")).default]
    })
], ListCalendariosPage);



/***/ })

}]);
//# sourceMappingURL=list-calendarios-list-calendarios-module.js.map