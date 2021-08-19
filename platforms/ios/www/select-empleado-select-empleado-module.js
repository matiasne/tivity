(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["select-empleado-select-empleado-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/select-empleado/select-empleado.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/select-empleado/select-empleado.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>  \n  <ion-buttons slot=\"start\">\n    <ion-back-button></ion-back-button>\n  </ion-buttons>   \n  <ion-toolbar> \n    <ion-title  size=\"small\">Seleccionar Empleado</ion-title>    \n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content style=\"margin-top: 50px;\" class=\"ion-padding\">  \n  \n  <ion-row>    \n    <ion-input placeholder=\"Buscar\" style=\"border:1px solid rgb(206, 206, 206); border-radius: 5px;\"\n    [(ngModel)]=\"palabraFiltro\" (ionChange)=\"buscar()\"\n    ></ion-input>\n  </ion-row>\n  \n  <ion-list lines=\"none\">\n    <ion-item *ngFor=\"let item of items\" (click)=\"seleccionar(item)\" class=\"item-card\">\n      <div slot=\"start\">\n        <img src=\"{{item.foto}}\" *ngIf=\"item.foto\">\n        <ion-icon name=\"person-outline\" *ngIf=\"!item.foto\"></ion-icon>\n      </div>      \n      <ion-label text-wrap>\n        <h2><b>{{item.userEmail}}</b> </h2>   \n        <p>{{item.rol}}</p>         \n      </ion-label>  \n    </ion-item>\n  </ion-list>\n\n  <div class=\"space\">\n    \n  </div> \n  \n</ion-content>\n<ion-footer class=\"ion-no-border ion-padding\">\n  <ion-toolbar>    \n    <ion-button class=\"button-rounded\" slot=\"start\"  color=\"light\" (click)=\"cancelar()\">Cancelar</ion-button>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ "./src/app/select-empleado/select-empleado-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/select-empleado/select-empleado-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: SelectEmpleadoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectEmpleadoPageRoutingModule", function() { return SelectEmpleadoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _select_empleado_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select-empleado.page */ "./src/app/select-empleado/select-empleado.page.ts");




const routes = [
    {
        path: '',
        component: _select_empleado_page__WEBPACK_IMPORTED_MODULE_3__["SelectEmpleadoPage"]
    }
];
let SelectEmpleadoPageRoutingModule = class SelectEmpleadoPageRoutingModule {
};
SelectEmpleadoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SelectEmpleadoPageRoutingModule);



/***/ }),

/***/ "./src/app/select-empleado/select-empleado.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/select-empleado/select-empleado.module.ts ***!
  \***********************************************************/
/*! exports provided: SelectEmpleadoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectEmpleadoPageModule", function() { return SelectEmpleadoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _select_empleado_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./select-empleado-routing.module */ "./src/app/select-empleado/select-empleado-routing.module.ts");
/* harmony import */ var _select_empleado_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./select-empleado.page */ "./src/app/select-empleado/select-empleado.page.ts");







let SelectEmpleadoPageModule = class SelectEmpleadoPageModule {
};
SelectEmpleadoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _select_empleado_routing_module__WEBPACK_IMPORTED_MODULE_5__["SelectEmpleadoPageRoutingModule"]
        ],
        declarations: [_select_empleado_page__WEBPACK_IMPORTED_MODULE_6__["SelectEmpleadoPage"]]
    })
], SelectEmpleadoPageModule);



/***/ }),

/***/ "./src/app/select-empleado/select-empleado.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/select-empleado/select-empleado.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlbGVjdC1lbXBsZWFkby9zZWxlY3QtZW1wbGVhZG8ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/select-empleado/select-empleado.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/select-empleado/select-empleado.page.ts ***!
  \*********************************************************/
/*! exports provided: SelectEmpleadoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectEmpleadoPage", function() { return SelectEmpleadoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _Services_roles_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/roles.service */ "./src/app/Services/roles.service.ts");
/* harmony import */ var _Services_usuarios_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/usuarios.service */ "./src/app/Services/usuarios.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






let SelectEmpleadoPage = class SelectEmpleadoPage {
    constructor(rolesService, usuariosService, modalCtrl, router) {
        this.rolesService = rolesService;
        this.usuariosService = usuariosService;
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.items = [];
        this.itemsAll = [];
        this.palabraFiltro = "";
    }
    ngOnInit() {
        let comercio_seleccionadoId = localStorage.getItem('comercio_seleccionadoId');
        var rolSub = this.rolesService.getAllRolesbyComercio(comercio_seleccionadoId).subscribe(snapshot => {
            snapshot.forEach(snap => {
                var rol = snap.payload.doc.data();
                rol.id = snap.payload.doc.id;
                console.log(rol);
                this.itemsAll.push(rol);
            });
            this.buscar();
            rolSub.unsubscribe();
        });
    }
    buscar() {
        if (this.palabraFiltro != "") {
            this.items = [];
            this.itemsAll.forEach(item => {
                if (item.nombre.toLowerCase().includes(this.palabraFiltro.toLowerCase())) {
                    this.items.push(item);
                    return;
                }
                if (item.rol.toLowerCase().includes(this.palabraFiltro.toLowerCase())) {
                    this.items.push(item);
                    return;
                }
            });
        }
        else {
            this.items = this.itemsAll;
        }
    }
    seleccionar(item) {
        this.modalCtrl.dismiss({
            'item': item
        });
    }
    cancelar() {
        this.modalCtrl.dismiss();
    }
    invitar() {
        this.router.navigate(['form-invitacion']);
        this.modalCtrl.dismiss();
    }
};
SelectEmpleadoPage.ctorParameters = () => [
    { type: _Services_roles_service__WEBPACK_IMPORTED_MODULE_2__["RolesService"] },
    { type: _Services_usuarios_service__WEBPACK_IMPORTED_MODULE_3__["UsuariosService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
SelectEmpleadoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-select-empleado',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./select-empleado.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/select-empleado/select-empleado.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./select-empleado.page.scss */ "./src/app/select-empleado/select-empleado.page.scss")).default]
    })
], SelectEmpleadoPage);



/***/ })

}]);
//# sourceMappingURL=select-empleado-select-empleado-module.js.map