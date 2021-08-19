(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["registro-registro-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/registro/registro.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/registro/registro.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content>\n  <ion-row style=\"height: 100%;\">\n    <ion-col size-md=\"8\" size-xs=\"0\" class=\"background\">\n      \n    </ion-col>\n    <ion-col size-md=\"4\" class=\"ion-padding\">\n      <form [formGroup]=\"datosForm\">\n        <img width=\"200px\" src=\"../../assets/img/logo.png\" alt=\"\">\n        <!--nombre-->\n        <ion-item [class.invalid]=\"submitted && !datosForm.controls.firstName.valid\">\n          <ion-label position=\"floating\">Nombre</ion-label>     \n          <ion-input name=\"nombre\" type=\"text\" formControlName=\"firstName\" \n                      required ></ion-input>\n          <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.firstName.errors.required\"><h5>Ingresa un Nombre</h5></div>\n          </div>\n        </ion-item>\n           \n        <!--apellido-->\n        <ion-item [class.invalid]=\"submitted && !datosForm.controls.lastName.valid\">\n          <ion-label position=\"floating\">Apellido</ion-label>\n          <ion-input name=\"apellido\" type=\"text\" formControlName=\"lastName\" required ></ion-input>\n          <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.lastName.errors.required\"><h5>Ingresa un Apellido</h5></div>\n          </div>\n        </ion-item>\n    \n        <!--email-->\n        <ion-item [class.invalid]=\"submitted && !datosForm.controls.email.valid\">\n          <ion-label position=\"floating\">E-mail</ion-label>\n          <ion-input name=\"email\" type=\"text\" formControlName=\"email\" required ></ion-input>\n          <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.email.errors.required\"><h5>Ingresa un Email</h5></div>\n          </div>\n        </ion-item> \n        <!--contraseña-->\n        <ion-item [class.invalid]=\"submitted && !datosForm.controls.password.valid\">\n          <ion-label position=\"floating\">Contraseña</ion-label>\n          <ion-input name=\"password\" [type]=\"passwordTypeInput1\" #passwordEyeRegister  \n                formControlName=\"password\" required clear-on-edit=\"true\"></ion-input>\n          <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.password.errors.required\"><h5>Ingresa una Contraseña</h5></div>\n          </div>\n          <button  item-end  class=\"btn_eye_icon\"  (click)=\"togglePasswordMode()\">\n            <ion-icon  [name]=\"iconpassword1\"></ion-icon>\n          </button>\n        </ion-item>    \n        <!--repetir contraseña-->\n        <ion-item [class.invalid]=\"submitted && !datosForm.controls.passwordConfirmation.valid\">\n          <ion-label position=\"floating\">Confirmación de contraseña</ion-label>\n          <ion-input name=\"passwordConfirmation\" [type]=\"passwordTypeInput2\"  #passwordEyeConfirmation \n                formControlName=\"passwordConfirmation\" required clear-on-edit=\"true\"></ion-input>\n          <button  item-end  class=\"btn_eye_icon\"  (click)=\"togglePasswordConfirmMode()\">\n            <ion-icon  [name]=\"iconpassword2\"></ion-icon>\n          </button>   \n          <div *ngIf=\"submitted && f.passwordConfirmation.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.passwordConfirmation.errors.required\"><h5>Ingresa una Contraseña</h5></div>\n          </div>  \n        </ion-item>\n        <p></p>\n        <!--acepto los terminos-->\n        <div [class.invalid]=\"submitted && !datosForm.controls.accepted.valid\">      \n          <ion-checkbox color=\"primary\" slot=\"start\" formControlName=\"accepted\"></ion-checkbox>\n          <ion-label> &nbsp;&nbsp; Acepto los Términos y Condiciones y la Política de Privacidad </ion-label>\n        </div>    \n        <div *ngIf=\"submitted && f.accepted.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.accepted.errors.required\">\n            <h5>Debes leer y aceptar los términos y condiciones</h5>\n          </div>\n        </div>\n        \n        <ion-button class=\"button-rounded\" type=\"submit\" expand=\"block\" (click)=\"registrar()\">Registrarme</ion-button>\n       \n        <div class=\"div100\">\n          <a routerLink=\"/login\" class=\"text-center\">Ya tengo cuenta creada</a>   \n        </div>      \n      </form>\n    </ion-col>\n  </ion-row>\n  \n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/registro/registro-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/registro/registro-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: RegistroPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroPageRoutingModule", function() { return RegistroPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _registro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registro.page */ "./src/app/registro/registro.page.ts");




const routes = [
    {
        path: '',
        component: _registro_page__WEBPACK_IMPORTED_MODULE_3__["RegistroPage"]
    }
];
let RegistroPageRoutingModule = class RegistroPageRoutingModule {
};
RegistroPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegistroPageRoutingModule);



/***/ }),

/***/ "./src/app/registro/registro.module.ts":
/*!*********************************************!*\
  !*** ./src/app/registro/registro.module.ts ***!
  \*********************************************/
/*! exports provided: RegistroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroPageModule", function() { return RegistroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _registro_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registro-routing.module */ "./src/app/registro/registro-routing.module.ts");
/* harmony import */ var _registro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registro.page */ "./src/app/registro/registro.page.ts");







let RegistroPageModule = class RegistroPageModule {
};
RegistroPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _registro_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegistroPageRoutingModule"]
        ],
        declarations: [_registro_page__WEBPACK_IMPORTED_MODULE_6__["RegistroPage"]]
    })
], RegistroPageModule);



/***/ }),

/***/ "./src/app/registro/registro.page.scss":
/*!*********************************************!*\
  !*** ./src/app/registro/registro.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1 {\n  text-align: center;\n}\n\np {\n  text-align: center;\n}\n\n.div100 {\n  width: 100%;\n  text-align: center;\n}\n\n.h41 {\n  line-height: 40px;\n}\n\n.btn_eye_icon {\n  position: absolute;\n  right: 0;\n  bottom: 4px;\n  background: transparent;\n}\n\n.btn_eye_icon ion-icon {\n  font-size: 22px;\n  color: #757575;\n}\n\n.btn_eye_icon:focus {\n  outline: none !important;\n}\n\nion-content {\n  height: 100%;\n}\n\n.background {\n  background-image: url('h-3-01.jpg');\n}\n\n.btn_eye_icon {\n  position: absolute;\n  right: 0;\n  bottom: 4px;\n  background: transparent;\n}\n\n.btn_eye_icon ion-icon {\n  font-size: 22px;\n  color: #757575;\n}\n\nform {\n  padding: 30px;\n  text-align: center;\n  min-width: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0cm8vQzpcXFByb3llY3Rvc1xcV2ViQXBwc1xcdGl2aXR5L3NyY1xcYXBwXFxyZWdpc3Ryb1xccmVnaXN0cm8ucGFnZS5zY3NzIiwic3JjL2FwcC9yZWdpc3Ryby9yZWdpc3Ryby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtBQ0NKOztBREFJO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUNFUjs7QURFQTtFQUNJLHdCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxtQ0FBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0FDQ0o7O0FEQUk7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ0VSOztBREVBO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdHJvL3JlZ2lzdHJvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgxe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5we1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZGl2MTAwe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5oNDF7XHJcbiAgICBsaW5lLWhlaWdodDogNDBweDtcclxufVxyXG5cclxuLmJ0bl9leWVfaWNvbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGlvbi1pY29ue1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICBjb2xvcjojNzU3NTc1O1xyXG4gICAgfVxyXG59XHJcblxyXG4uYnRuX2V5ZV9pY29uOmZvY3Vze1xyXG4gICAgb3V0bGluZTogbm9uZSAgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWNvbnRlbnR7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5iYWNrZ3JvdW5ke1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvaC0zLTAxLmpwZyk7XHJcbn1cclxuXHJcbi5idG5fZXllX2ljb257XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogNHB4O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBpb24taWNvbntcclxuICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgY29sb3I6Izc1NzU3NTtcclxuICAgIH1cclxufVxyXG5cclxuZm9ybXtcclxuICAgIHBhZGRpbmc6MzBweDsgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xyXG59XHJcbiIsImgxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5wIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZGl2MTAwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmg0MSB7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xufVxuXG4uYnRuX2V5ZV9pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgYm90dG9tOiA0cHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLmJ0bl9leWVfaWNvbiBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgY29sb3I6ICM3NTc1NzU7XG59XG5cbi5idG5fZXllX2ljb246Zm9jdXMge1xuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1nL2gtMy0wMS5qcGcpO1xufVxuXG4uYnRuX2V5ZV9pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgYm90dG9tOiA0cHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLmJ0bl9leWVfaWNvbiBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgY29sb3I6ICM3NTc1NzU7XG59XG5cbmZvcm0ge1xuICBwYWRkaW5nOiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1pbi13aWR0aDogMzAwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/registro/registro.page.ts":
/*!*******************************************!*\
  !*** ./src/app/registro/registro.page.ts ***!
  \*******************************************/
/*! exports provided: RegistroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroPage", function() { return RegistroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _Services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Services/authentication.service */ "./src/app/Services/authentication.service.ts");






let RegistroPage = class RegistroPage {
    constructor(formBuilder, toastCtrl, router, authFirestoreService) {
        this.formBuilder = formBuilder;
        this.toastCtrl = toastCtrl;
        this.router = router;
        this.authFirestoreService = authFirestoreService;
        this.tipoRegistro = 'cliente';
        //@ViewChild('btnCliente') btnCliente;
        //@ViewChild('btnAgente') btnAgente;
        // Seleccionamos el elemento con el nombre que le pusimos con el #
        this.passwordTypeInput1 = 'password';
        this.passwordTypeInput2 = 'password';
        // Variable para cambiar dinamicamente el tipo de Input que por defecto sera 'password'
        this.iconpassword1 = 'eye-off';
        this.iconpassword2 = 'eye-off';
        this.submitted = false;
        this.datosForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            passwordConfirmation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            accepted: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    ngOnInit() {
    }
    get f() { return this.datosForm.controls; }
    registrar() {
        this.submitted = true;
        if (this.f.password.value == '') {
            this.presentToast("Debe ingresar una contraseña");
            return;
        }
        if (this.f.password.value != this.f.passwordConfirmation.value) {
            this.presentToast("La contraseña y su confirmación no coinciden");
            return;
        }
        if (this.f.accepted.value != true) {
            this.presentToast("Debe leer y aceptar los términos y condiciones");
            return;
        }
        this.authFirestoreService.signup(this.datosForm.value);
    }
    presentToast(mensaje) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: mensaje,
                color: 'danger',
                duration: 3000
            });
            toast.present();
        });
    }
    /*segmentChanged(event){
      const registro: string = event.target.value;
      if(registro == 'Soy Agente inmobiliario'){
        this.tipoRegistro = 'agente';
        this.datosForm.addControl('cuit', new FormControl('', Validators.required));
      }else{
        this.tipoRegistro = 'cliente';
        this.datosForm.removeControl('cuit');
      }
    }*/
    // Esta función verifica si el tipo de campo es texto lo cambia a password y viceversa, 
    //además verificara el icono si es 'eye-off' lo cambiara a 'eye' y viceversa
    togglePasswordMode() {
        this.passwordTypeInput1 = this.passwordTypeInput1 === 'text' ? 'password' : 'text';
        this.iconpassword1 = this.iconpassword1 === 'eye-off' ? 'eye' : 'eye-off';
        this.passwordEye.el.setFocus();
    }
    togglePasswordConfirmMode() {
        this.passwordTypeInput2 = this.passwordTypeInput2 === 'text' ? 'password' : 'text';
        this.iconpassword2 = this.iconpassword2 === 'eye-off' ? 'eye' : 'eye-off';
        this.passwordEyeConfirm.el.setFocus();
    }
};
RegistroPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _Services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('passwordEyeRegister')
], RegistroPage.prototype, "passwordEye", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('passwordEyeConfirmation')
], RegistroPage.prototype, "passwordEyeConfirm", void 0);
RegistroPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-registro',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./registro.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/registro/registro.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./registro.page.scss */ "./src/app/registro/registro.page.scss")).default]
    })
], RegistroPage);



/***/ })

}]);
//# sourceMappingURL=registro-registro-module.js.map