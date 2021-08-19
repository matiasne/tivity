(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["form-categoria-form-categoria-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-categoria/form-categoria.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form-categoria/form-categoria.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title  size=\"small\">{{titulo}}</ion-title>    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\" style=\"margin-top:50px\">\n\n  <div class=\"icono-foto-producto\">\n    <app-seleccionar-imagen\n      [aspectRatio] = \"1/1\"\n      [croppedImage]=\"categoria.foto\"\n      (onSelectValue)=imagenSeleccionadaIcono($event)>\n    </app-seleccionar-imagen>\n  </div>\n  \n  \n    <form [formGroup]=\"datosForm\" >\n\n      <div [ngClass]=\"{'form-card': true, 'form-card-error': submitted && !datosForm.controls.nombre.valid}\">\n        <ion-text color=\"primary\">\n          <h4>Nombre *</h4>        \n        </ion-text>\n            \n        <ion-item>\n          <ion-input name=\"nombre\" type=\"text\" formControlName=\"nombre\" required></ion-input>\n        </ion-item>\n        <div *ngIf=\"submitted && f.nombre.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.nombre.errors.required\"><h5>Ingresa el nombre de la categoría</h5></div>\n        </div> \n      </div>\n    </form>\n  \n    <ion-button  *ngIf=\"updating\" class=\"button-rounded\"  color=\"danger\" (click)=\"elimiar()\">Eliminar Categoría</ion-button>\n\n  \n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-button class=\"button-rounded\" slot=\"end\" (click)=\"guardar()\">Guardar</ion-button>\n    \n    <ion-button class=\"button-rounded\" slot=\"start\"  color=\"light\" (click)=\"cancelar()\">Cancelar</ion-button>\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "./src/app/Services/categorias.service.ts":
/*!************************************************!*\
  !*** ./src/app/Services/categorias.service.ts ***!
  \************************************************/
/*! exports provided: CategoriasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriasService", function() { return CategoriasService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base.service */ "./src/app/Services/base.service.ts");
/* harmony import */ var _comercios_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comercios.service */ "./src/app/Services/comercios.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let CategoriasService = class CategoriasService extends _base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] {
    constructor(afs, comerciosService) {
        super(afs);
        this.afs = afs;
        this.comerciosService = comerciosService;
        this.woocommerceSyncPath = "";
        this.comerciosService.getSelectedCommerce().subscribe(data => {
            // let comercio_seleccionadoId = localStorage.getItem('comercio_seleccionadoId'); 
            if (data) {
                this.setPath('comercios/' + data.id + '/categorias');
            }
        });
    }
    getByName(name) {
        return this.afs.collection(this.path, ref => ref.where("nombre", "==", name)).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(changes => {
            return changes.map(a => {
                const data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                data.fromCache = a.payload.doc.metadata.fromCache;
                return data;
            });
        }));
    }
    create(categoria) {
        const param = JSON.parse(JSON.stringify(categoria));
        return this.afs.collection(this.path).add(param);
    }
    get(documentId) {
        return this.afs.collection(this.path).doc(documentId).snapshotChanges();
    }
    getAll() {
        return this.afs.collection(this.path).snapshotChanges();
    }
    getWoocommerceValue(id) {
        this.woocommerceSyncPath = this.path + '/' + id + '/woocommerceSincData';
        return this.afs.collection(this.woocommerceSyncPath).doc("1").get()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(doc => {
            if (doc.exists) {
                /* workaround until spread works with generic types */
                const data = doc.data();
                const id = doc.id;
                data.fromCache = doc.metadata.fromCache;
                return Object.assign({ id }, data);
            }
        }));
    }
    updateWoocommerceValues(id, values) {
        this.woocommerceSyncPath = this.path + '/' + id + '/woocommerceSincData';
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
};
CategoriasService.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _comercios_service__WEBPACK_IMPORTED_MODULE_4__["ComerciosService"] }
];
CategoriasService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CategoriasService);



/***/ }),

/***/ "./src/app/form-categoria/form-categoria-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/form-categoria/form-categoria-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: FormCategoriaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormCategoriaPageRoutingModule", function() { return FormCategoriaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _form_categoria_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-categoria.page */ "./src/app/form-categoria/form-categoria.page.ts");




const routes = [
    {
        path: '',
        component: _form_categoria_page__WEBPACK_IMPORTED_MODULE_3__["FormCategoriaPage"]
    }
];
let FormCategoriaPageRoutingModule = class FormCategoriaPageRoutingModule {
};
FormCategoriaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FormCategoriaPageRoutingModule);



/***/ }),

/***/ "./src/app/form-categoria/form-categoria.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/form-categoria/form-categoria.module.ts ***!
  \*********************************************************/
/*! exports provided: FormCategoriaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormCategoriaPageModule", function() { return FormCategoriaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _form_categoria_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-categoria-routing.module */ "./src/app/form-categoria/form-categoria-routing.module.ts");
/* harmony import */ var _form_categoria_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form-categoria.page */ "./src/app/form-categoria/form-categoria.page.ts");
/* harmony import */ var _Components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Components/components.module */ "./src/app/Components/components.module.ts");








let FormCategoriaPageModule = class FormCategoriaPageModule {
};
FormCategoriaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _Components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _Components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _form_categoria_routing_module__WEBPACK_IMPORTED_MODULE_5__["FormCategoriaPageRoutingModule"]
        ],
        declarations: [_form_categoria_page__WEBPACK_IMPORTED_MODULE_6__["FormCategoriaPage"]]
    })
], FormCategoriaPageModule);



/***/ }),

/***/ "./src/app/form-categoria/form-categoria.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/form-categoria/form-categoria.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0tY2F0ZWdvcmlhL2Zvcm0tY2F0ZWdvcmlhLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/form-categoria/form-categoria.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/form-categoria/form-categoria.page.ts ***!
  \*******************************************************/
/*! exports provided: FormCategoriaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormCategoriaPage", function() { return FormCategoriaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _Services_categorias_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/categorias.service */ "./src/app/Services/categorias.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _models_categoria__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/categoria */ "./src/app/models/categoria.ts");
/* harmony import */ var _Services_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Services/toast.service */ "./src/app/Services/toast.service.ts");
/* harmony import */ var _models_woocommerceSyncData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models/woocommerceSyncData */ "./src/app/models/woocommerceSyncData.ts");
/* harmony import */ var _Services_comercios_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Services/comercios.service */ "./src/app/Services/comercios.service.ts");
/* harmony import */ var _models_comercio__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../models/comercio */ "./src/app/models/comercio.ts");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_11__);












let FormCategoriaPage = class FormCategoriaPage {
    constructor(formBuilder, navCtrl, categoriasService, modalCtrl, route, alertController, navParams, toastServices, comerciosService, firestore) {
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.categoriasService = categoriasService;
        this.modalCtrl = modalCtrl;
        this.route = route;
        this.alertController = alertController;
        this.navParams = navParams;
        this.toastServices = toastServices;
        this.comerciosService = comerciosService;
        this.firestore = firestore;
        this.submitted = false;
        this.updating = false;
        this.comercioId = "";
        this.titulo = "";
        this.datosForm = this.formBuilder.group({
            nombre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.woocommerceSyncData = new _models_woocommerceSyncData__WEBPACK_IMPORTED_MODULE_8__["WoocommerceSyncData"]();
        this.comercio = new _models_comercio__WEBPACK_IMPORTED_MODULE_10__["Comercio"]();
        this.comercio.asignarValores(this.comerciosService.getSelectedCommerceValue());
    }
    ngOnInit() {
        this.datosForm = this.formBuilder.group({
            nombre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        if (this.navParams.get('categoria')) {
            let categoria = this.navParams.get('categoria');
            console.log(categoria);
            this.updating = true;
            this.titulo = "Editar Categoria";
            this.datosForm = this.formBuilder.group({
                nombre: [categoria.nombre, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            });
            this.categoria.nombre = categoria.nombre;
            this.categoria.comercioId = categoria.comercioId;
            this.categoria.id = categoria.id;
            this.categoria.foto = categoria.foto;
        }
        else {
            this.titulo = "Nueva Categoria";
            this.categoria = new _models_categoria__WEBPACK_IMPORTED_MODULE_6__["Categoria"]();
            this.categoria.id = this.firestore.createId();
            this.categoria.comercioId = this.navParams.get('comercioId');
        }
    }
    get f() { return this.datosForm.controls; }
    guardar() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.datosForm.invalid) {
            this.toastServices.alert('Por favor completar todos los campos marcados con * antes de continuar', "");
            return;
        }
        this.categoria.nombre = this.datosForm.controls.nombre.value;
        if (this.updating) {
            this.categoriasService.update(this.categoria).then(data => {
                console.log("categoria update");
            });
        }
        else {
            this.categoriasService.set(this.categoria.id, this.categoria).then(data => {
                console.log("categoria creada");
            });
        }
        if (this.comercio.config.woocommerce) {
            console.log(this.woocommerceSyncData);
            this.woocommerceSyncData.changeDate = new Date();
            this.woocommerceSyncData.sincronizado = true;
            let wSyncData = JSON.parse(JSON.stringify(this.woocommerceSyncData));
            this.categoriasService.updateWoocommerceValues(this.categoria.id, wSyncData);
        }
        this.modalCtrl.dismiss();
    }
    cancelar() {
        this.modalCtrl.dismiss();
    }
    elimiar() {
        this.presentAlertEliminar();
    }
    imagenSeleccionadaIcono(newValue) {
        console.log(newValue);
        this.categoria.foto = newValue;
    }
    presentAlertEliminar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Eliminar',
                message: 'Está seguro que desea eliminar la categoría?',
                buttons: [
                    {
                        text: 'Cancelar',
                        handler: (blah) => {
                        }
                    }, {
                        text: 'Eliminar',
                        handler: () => {
                            this.categoriasService.delete(this.categoria.id);
                            if (this.comercio.config.woocommerce) {
                                console.log(this.woocommerceSyncData);
                                this.woocommerceSyncData.changeDate = new Date();
                                this.woocommerceSyncData.sincronizado = false;
                                let wSyncData = JSON.parse(JSON.stringify(this.woocommerceSyncData));
                                this.categoriasService.deleteWoocommerceValues(this.categoria.id);
                            }
                            this.modalCtrl.dismiss();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
FormCategoriaPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _Services_categorias_service__WEBPACK_IMPORTED_MODULE_4__["CategoriasService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"] },
    { type: _Services_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"] },
    { type: _Services_comercios_service__WEBPACK_IMPORTED_MODULE_9__["ComerciosService"] },
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_11__["AngularFirestore"] }
];
FormCategoriaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-categoria',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./form-categoria.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-categoria/form-categoria.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./form-categoria.page.scss */ "./src/app/form-categoria/form-categoria.page.scss")).default]
    })
], FormCategoriaPage);



/***/ }),

/***/ "./src/app/models/categoria.ts":
/*!*************************************!*\
  !*** ./src/app/models/categoria.ts ***!
  \*************************************/
/*! exports provided: Categoria */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Categoria", function() { return Categoria; });
class Categoria {
    constructor() {
        this.id = "";
        this.foto = "";
        this.comercioId = "";
        this.descripcion = "";
    }
    asignarValores(init) {
        Object.assign(this, init);
    }
}


/***/ }),

/***/ "./src/app/models/woocommerceSyncData.ts":
/*!***********************************************!*\
  !*** ./src/app/models/woocommerceSyncData.ts ***!
  \***********************************************/
/*! exports provided: WoocommerceSyncData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WoocommerceSyncData", function() { return WoocommerceSyncData; });
class WoocommerceSyncData {
    constructor() {
        this.id = "";
        this.sincronizado = true;
    }
    asignarValores(init) {
        Object.assign(this, init);
    }
}


/***/ })

}]);
//# sourceMappingURL=form-categoria-form-categoria-module.js.map