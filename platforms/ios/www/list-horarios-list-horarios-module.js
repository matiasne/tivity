(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-horarios-list-horarios-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/list-horarios/list-horarios.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/list-horarios/list-horarios.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Horarios</ion-title>\n  </ion-toolbar> \n</ion-header> \n\n<ion-content class=\"ion-padding\">\n  <ion-list lines=\"none\"> \n    <ion-text color=\"primary\">\n      <h4>Horarios Disponibles</h4>\n    </ion-text> \n\n    <div *ngIf=\"buscando\" class=\"mensaje FadeOut FadeIn\">\n      <img src=\"../../assets/img/buscando.fw.png\" alt=\"\">\n      <p>Cargando comandas, aguarde unos segundos por favor</p>\n    </div>\n  \n    <div *ngIf=\"!buscando && comercio.horarios.length == 0\" class=\"mensaje FadeOut FadeIn\">\n      <img src=\"../../assets/img/horarios.fw.png\" alt=\"\">\n      <p>No tienes horarios configurados.</p>\n    </div>\n\n    \n    <ion-item-sliding *ngFor=\"let horario of comercio.horarios;let i=index\" class=\"item-card\">\n\n      <ion-item>       \n        <ion-label>\n          {{horario.nombre}} desde  {{horario.desde | date: 'h:mm a'}} hasta {{horario.hasta | date: 'h:mm a'}}        \n        </ion-label> \n      </ion-item>    \n\n      <ion-item-options side=\"end\">\n        <ion-item-option (click)=\"eliminarHorario(i)\"><ion-icon name=\"trash\" ></ion-icon> Borrar</ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n    \n\n  </ion-list>\n\n  \n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"openAddHorario()\">\n    <ion-fab-button>\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n\n");

/***/ }),

/***/ "./src/app/list-horarios/list-horarios-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/list-horarios/list-horarios-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ListHorariosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListHorariosPageRoutingModule", function() { return ListHorariosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _list_horarios_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-horarios.page */ "./src/app/list-horarios/list-horarios.page.ts");




const routes = [
    {
        path: '',
        component: _list_horarios_page__WEBPACK_IMPORTED_MODULE_3__["ListHorariosPage"]
    }
];
let ListHorariosPageRoutingModule = class ListHorariosPageRoutingModule {
};
ListHorariosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ListHorariosPageRoutingModule);



/***/ }),

/***/ "./src/app/list-horarios/list-horarios.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/list-horarios/list-horarios.module.ts ***!
  \*******************************************************/
/*! exports provided: ListHorariosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListHorariosPageModule", function() { return ListHorariosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _list_horarios_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-horarios-routing.module */ "./src/app/list-horarios/list-horarios-routing.module.ts");
/* harmony import */ var _list_horarios_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-horarios.page */ "./src/app/list-horarios/list-horarios.page.ts");







let ListHorariosPageModule = class ListHorariosPageModule {
};
ListHorariosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _list_horarios_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListHorariosPageRoutingModule"]
        ],
        declarations: [_list_horarios_page__WEBPACK_IMPORTED_MODULE_6__["ListHorariosPage"]]
    })
], ListHorariosPageModule);



/***/ }),

/***/ "./src/app/list-horarios/list-horarios.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/list-horarios/list-horarios.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3QtaG9yYXJpb3MvbGlzdC1ob3Jhcmlvcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/list-horarios/list-horarios.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/list-horarios/list-horarios.page.ts ***!
  \*****************************************************/
/*! exports provided: ListHorariosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListHorariosPage", function() { return ListHorariosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _form_horario_form_horario_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../form-horario/form-horario.page */ "./src/app/form-horario/form-horario.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _Services_comercios_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/comercios.service */ "./src/app/Services/comercios.service.ts");
/* harmony import */ var _models_comercio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/comercio */ "./src/app/models/comercio.ts");






let ListHorariosPage = class ListHorariosPage {
    constructor(comercioService, modalController, alertController) {
        this.comercioService = comercioService;
        this.modalController = modalController;
        this.alertController = alertController;
        this.horarios = [];
        this.buscando = true;
        this.comercio = new _models_comercio__WEBPACK_IMPORTED_MODULE_5__["Comercio"]();
    }
    ngOnInit() {
        let comercio_seleccionadoId = localStorage.getItem('comercio_seleccionadoId');
        this.horariosSubs = this.comercioService.get(comercio_seleccionadoId).subscribe(snap => {
            this.comercio.asignarValores(snap.payload.data());
            this.comercio.id = snap.payload.id;
            this.buscando = false;
        });
    }
    ionViewDidLeave() {
        this.horariosSubs.unsubscribe();
    }
    openAddHorario() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let comercio_seleccionadoId = localStorage.getItem('comercio_seleccionadoId');
            const modal = yield this.modalController.create({
                component: _form_horario_form_horario_page__WEBPACK_IMPORTED_MODULE_2__["FormHorarioPage"],
                componentProps: {
                    comercioId: comercio_seleccionadoId
                }
            });
            modal.onDidDismiss()
                .then((retorno) => {
                if (retorno.data)
                    this.comercio.horarios.push(retorno.data);
                this.comercioService.update(this.comercio);
            });
            return yield modal.present();
        });
    }
    eliminarHorario(index) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Está seguro que desea eliminar el horario?',
                message: '',
                buttons: [
                    {
                        text: 'Cancelar',
                        handler: (blah) => {
                        }
                    }, {
                        text: 'Eliminar',
                        handler: () => {
                            console.log(index);
                            this.comercio.horarios.splice(index, 1);
                            this.comercioService.update(this.comercio);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
ListHorariosPage.ctorParameters = () => [
    { type: _Services_comercios_service__WEBPACK_IMPORTED_MODULE_4__["ComerciosService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
ListHorariosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-horarios',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./list-horarios.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/list-horarios/list-horarios.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./list-horarios.page.scss */ "./src/app/list-horarios/list-horarios.page.scss")).default]
    })
], ListHorariosPage);



/***/ })

}]);
//# sourceMappingURL=list-horarios-list-horarios-module.js.map