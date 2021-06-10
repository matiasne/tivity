(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["form-producto-form-producto-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-producto/form-producto.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form-producto/form-producto.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar> \n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{titulo}} <p class=\"header-subtitulo\">{{producto.nombre}}</p></ion-title>    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content  class=\"ion-padding\">\n\n  \n  <form [formGroup]=\"datosForm\">\n    <div class=\"form-card\">        \n      <ion-item [class.invalid]=\"submitted && !datosForm.controls.nombre.valid\">\n        <ion-label position=\"floating\">Nombre *</ion-label>\n        <ion-input name=\"nombre\" type=\"text\" formControlName=\"nombre\" required></ion-input>\n      </ion-item>\n      <div *ngIf=\"submitted && f.nombre.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.nombre.errors.required\"><h5>Ingresa un nombre</h5></div>\n      </div>  \n    </div> \n  \n    <div class=\"form-card\">\n      <ion-text color=\"primary\">\n        <h4>Descripcion</h4>    \n      </ion-text> \n          \n      <ion-item>\n        <ion-textarea formControlName=\"descripcion\"></ion-textarea>\n      </ion-item>\n    </div>\n\n    <ion-slides pager=\"true\" [options]=\"slideOpts\">\n      <ion-slide *ngFor=\"let imagen of producto.imagenes;let i=index\" (click)=\"verImagen(i,imagen)\">\n        <ion-card>\n          <img src=\"{{imagen.url}}\"/>\n          <!--ion-card-content>\n            <ion-button color=\"danger\" (click)=\"eliminarFoto(i)\">Eliminar</ion-button>\n          </ion-card-content-->\n        </ion-card>    \n      </ion-slide>  \n      <ion-slide *ngFor=\"let imagen of imagenesNuevas;let i=index\" (click)=\"verImagenNueva(i,imagen)\">\n        <ion-card>\n          <img src=\"{{imagen.url}}\"/>\n          <!--ion-card-content>\n            <ion-button color=\"danger\" (click)=\"eliminarFotoNueva(i)\">Eliminar</ion-button>\n          </ion-card-content-->\n        </ion-card>            \n      </ion-slide>  \n      <ion-slide>\n        <div class=\"btn-select-img\">\n            <app-seleccionar-imagen \n              [aspectRatio] = \"1/1\" \n              [showImageCroped] = \"false\"\n              (onSelectValue)=addFoto($event)>\n            </app-seleccionar-imagen>\n        </div>  \n      </ion-slide>\n      \n    </ion-slides>              \n            \n      \n          \n  \n    <div class=\"form-card\" *ngIf=\"comercio.config.stock\">\n      <p>Stock actual: {{producto.stock}}</p>\n      <ion-button size=\"large\" color=\"light\"  expand=\"block\" (click)=\"agregarStock()\">Agregar Stock</ion-button>\n    </div>  \n    \n    \n    \n    <div class=\"form-card\">\n      \n      \n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-item [class.invalid]=\"submitted && !datosForm.controls.precio.valid\">\n              <ion-label color=\"primary\" position=\"floating\">Precio *</ion-label>\n              <ion-input name=\"precio\" type=\"number\" formControlName=\"precio\" required></ion-input>              \n            </ion-item>\n            <div *ngIf=\"submitted && f.precio.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.precio.errors.required\"><h5>Ingresa un precio</h5></div>\n            </div>\n          </ion-col>\n          <ion-col>\n            <ion-item>\n              <ion-label color=\"primary\" position=\"floating\">Precio promocion</ion-label>\n              <ion-input name=\"promocion\" type=\"number\" formControlName=\"promocion\"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n        \n      <ion-grid>\n        <ion-row>\n          \n          <ion-col>\n            <ion-item>\n              <ion-label color=\"primary\" position=\"floating\">Precio por cantidad</ion-label>\n              <ion-input name=\"valorPor\" type=\"text\" formControlName=\"valorPor\"></ion-input>\n            </ion-item> \n          </ion-col>\n          <ion-col>\n            <ion-item [class.invalid]=\"submitted && !datosForm.controls.unidad.valid\">\n              <ion-label color=\"primary\" position=\"floating\">Unidad de medida</ion-label>\n              <ion-select formControlName=\"unidad\">\n                <ion-select-option [value]=\"'unidades'\" selected>Unidad</ion-select-option>\n                <ion-select-option [value]=\"'gr.'\">Gramos</ion-select-option>\n                <ion-select-option [value]=\"'Kg.'\" >Kilogramos</ion-select-option>\n                <ion-select-option [value]=\"'cm.'\" >Centímetros</ion-select-option>\n                <ion-select-option [value]=\"'metros'\" >Metros</ion-select-option>\n                <ion-select-option [value]=\"'ml.'\" >Mililitros</ion-select-option>\n                <ion-select-option [value]=\"'litros'\" >Litros</ion-select-option>\n              </ion-select>\n            </ion-item> \n            <div *ngIf=\"submitted && f.unidad.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.unidad.errors.required\"><h5>Seleccione una unidad</h5></div>\n            </div> \n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <!--ion-item>\n        <ion-label>Producto Destacado</ion-label>\n        <ion-toggle formControlName=\"destacado\"></ion-toggle>\n      </ion-item>\n      \n      <ion-text color=\"primary\">\n        <h4>Precio Promocion</h4>          \n      </ion-text-->        \n     \n    </div> \n    \n    <div class=\"form-card\">\n      <ion-item [class.invalid]=\"submitted && !datosForm.controls.categorias.valid\">\n        <ion-label position=\"floating\">Categorías</ion-label>\n        <ion-select multiple=\"true\" formControlName=\"categorias\" cancelText=\"Cancelar\" okText=\"Listo\">\n          <ion-select-option *ngFor=\"let categoria of categorias\" [value]=\"categoria\" selected>{{categoria.nombre}}</ion-select-option>\n        </ion-select>       \n      </ion-item> \n      <!--ion-button size=\"large\"   expand=\"block\" (click)=\"openAddCategoria()\">Agregar Nueva Categoria</ion-button-->  \n      <div *ngIf=\"submitted && f.categorias.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.categorias.errors.required\"><h5>Seleccione una o más categorías</h5></div>\n      </div>  \n    </div>\n\n    <div class=\"form-card\" *ngIf=\"comercio.config.comandas\">  \n      <ion-item [class.invalid]=\"submitted && !datosForm.controls.cocinaId.valid\">\n        <ion-label position=\"floating\">Cocina</ion-label>\n        <ion-select formControlName=\"cocinaId\" cancelText=\"Cancelar\" okText=\"Listo\">\n          <ion-select-option *ngFor=\"let cocina of cocinas\" [value]=\"cocina.id\" selected>{{cocina.nombre}}</ion-select-option>\n        </ion-select>        \n      </ion-item>  \n      <div *ngIf=\"submitted && f.cocinaId.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.cocinaId.errors.required\"><h5>Seleccione una cocina</h5></div>\n      </div>  \n    </div>\n    \n    \n\n    <div class=\"form-card\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"8\">\n            <ion-item>\n              <ion-label color=\"primary\" position=\"floating\">Código único</ion-label>\n              <ion-input name=\"barcode\" type=\"text\" formControlName=\"barcode\"></ion-input>\n            </ion-item>            \n          </ion-col>\n          <ion-col size=\"4\">\n            <ion-button class=\"button-rounded\" color=\"primary\" style=\"margin-top: -1px; height: 42px;\"  (click)=\"lectorDeCodigo()\">\n              <ion-icon name=\"barcode\"></ion-icon>\n            </ion-button>\n          </ion-col> \n        </ion-row>\n      </ion-grid>       \n    </div>\n\n  \n   \n    <div class=\"form-card\">\n      <ion-list lines=\"none\"> \n        <ion-item-sliding  *ngFor=\"let grupo of gruposOpciones;let i=index\" class=\"item-card\">\n           <ion-item>     \n             <ion-label>\n               {{grupo.nombre}}           \n             </ion-label>           \n           </ion-item>    \n           <ion-item-options side=\"end\"> \n             <ion-item-option color=\"danger\" (click)=\"eliminarGrupoOpciones(i)\"><ion-icon name=\"trash-outline\" ></ion-icon>Quitar</ion-item-option>\n           </ion-item-options>\n         </ion-item-sliding>       \n         <ion-button size=\"large\" color=\"light\"  expand=\"block\" (click)=\"openAddGrupoOpciones()\">Agregar Grupo de Opciones</ion-button>\n       </ion-list>\n    </div>\n   \n    <div class=\"form-card\" *ngIf=\"comercio.config.woocommerce\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"10\">\n            <p>\n              <b>sincronizar con woocommerce</b>\n            </p>\n          </ion-col>\n          <ion-col size=\"2\">\n            <ion-toggle [(ngModel)]=\"woocommerceSyncData.sincronizado\" [ngModelOptions]=\"{standalone: true}\"></ion-toggle>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <p></p>\n    </div>\n    \n    \n   \n   \n  </form>  \n\n  <ion-button *ngIf=\"updating\" class=\"button-rounded\"  color=\"danger\" (click)=\"elimiar()\">Eliminar Producto</ion-button>\n  \n\n</ion-content>\n<ion-footer>\n  <ion-toolbar> \n    <ion-button class=\"button-rounded\" slot=\"end\" color=\"success\" (click)=\"guardar()\">Guardar</ion-button>\n    \n    <ion-button class=\"button-rounded\" slot=\"start\"  color=\"light\" (click)=\"cancelar()\">Cancelar</ion-button>\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "./src/app/Services/cocinas.service.ts":
/*!*********************************************!*\
  !*** ./src/app/Services/cocinas.service.ts ***!
  \*********************************************/
/*! exports provided: CocinasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CocinasService", function() { return CocinasService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base.service */ "./src/app/Services/base.service.ts");
/* harmony import */ var _comercios_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comercios.service */ "./src/app/Services/comercios.service.ts");





let CocinasService = class CocinasService extends _base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] {
    constructor(afs, comerciosService) {
        super(afs);
        this.afs = afs;
        this.comerciosService = comerciosService;
        this.comerciosService.getSelectedCommerce().subscribe(data => {
            // let comercio_seleccionadoId = localStorage.getItem('comercio_seleccionadoId'); 
            if (data) {
                this.setPath('comercios/' + data.id + '/cocinas');
            }
        });
    }
};
CocinasService.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _comercios_service__WEBPACK_IMPORTED_MODULE_4__["ComerciosService"] }
];
CocinasService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CocinasService);



/***/ }),

/***/ "./src/app/Services/grupo-opciones.service.ts":
/*!****************************************************!*\
  !*** ./src/app/Services/grupo-opciones.service.ts ***!
  \****************************************************/
/*! exports provided: GrupoOpcionesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrupoOpcionesService", function() { return GrupoOpcionesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base.service */ "./src/app/Services/base.service.ts");
/* harmony import */ var _comercios_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comercios.service */ "./src/app/Services/comercios.service.ts");





let GrupoOpcionesService = class GrupoOpcionesService extends _base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] {
    constructor(afs, comerciosService) {
        super(afs);
        this.afs = afs;
        this.comerciosService = comerciosService;
        this.comerciosService.getSelectedCommerce().subscribe(data => {
            // let comercio_seleccionadoId = localStorage.getItem('comercio_seleccionadoId'); 
            if (data) {
                this.setPath('comercios/' + data.id + '/grupoOpciones');
            }
        });
    }
};
GrupoOpcionesService.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _comercios_service__WEBPACK_IMPORTED_MODULE_4__["ComerciosService"] }
];
GrupoOpcionesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], GrupoOpcionesService);



/***/ }),

/***/ "./src/app/form-producto/form-producto-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/form-producto/form-producto-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: FormProductoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormProductoPageRoutingModule", function() { return FormProductoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _form_producto_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-producto.page */ "./src/app/form-producto/form-producto.page.ts");




const routes = [
    {
        path: '',
        component: _form_producto_page__WEBPACK_IMPORTED_MODULE_3__["FormProductoPage"]
    }
];
let FormProductoPageRoutingModule = class FormProductoPageRoutingModule {
};
FormProductoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FormProductoPageRoutingModule);



/***/ }),

/***/ "./src/app/form-producto/form-producto.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/form-producto/form-producto.module.ts ***!
  \*******************************************************/
/*! exports provided: FormProductoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormProductoPageModule", function() { return FormProductoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _form_producto_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-producto-routing.module */ "./src/app/form-producto/form-producto-routing.module.ts");
/* harmony import */ var _form_producto_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form-producto.page */ "./src/app/form-producto/form-producto.page.ts");
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-image-cropper */ "./node_modules/ngx-image-cropper/__ivy_ngcc__/fesm2015/ngx-image-cropper.js");
/* harmony import */ var _Components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Components/components.module */ "./src/app/Components/components.module.ts");









let FormProductoPageModule = class FormProductoPageModule {
};
FormProductoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _Components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            ngx_image_cropper__WEBPACK_IMPORTED_MODULE_7__["ImageCropperModule"],
            _form_producto_routing_module__WEBPACK_IMPORTED_MODULE_5__["FormProductoPageRoutingModule"]
        ],
        declarations: [
            _form_producto_page__WEBPACK_IMPORTED_MODULE_6__["FormProductoPage"]
        ]
    })
], FormProductoPageModule);



/***/ }),

/***/ "./src/app/form-producto/form-producto.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/form-producto/form-producto.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0tcHJvZHVjdG8vZm9ybS1wcm9kdWN0by5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/form-producto/form-producto.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/form-producto/form-producto.page.ts ***!
  \*****************************************************/
/*! exports provided: FormProductoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormProductoPage", function() { return FormProductoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/crop/ngx */ "./node_modules/@ionic-native/crop/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _Services_categorias_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Services/categorias.service */ "./src/app/Services/categorias.service.ts");
/* harmony import */ var _Services_productos_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Services/productos.service */ "./src/app/Services/productos.service.ts");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _models_producto__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../models/producto */ "./src/app/models/producto.ts");
/* harmony import */ var _form_categoria_form_categoria_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../form-categoria/form-categoria.page */ "./src/app/form-categoria/form-categoria.page.ts");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _Services_toast_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Services/toast.service */ "./src/app/Services/toast.service.ts");
/* harmony import */ var _Services_cocinas_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../Services/cocinas.service */ "./src/app/Services/cocinas.service.ts");
/* harmony import */ var _select_grupos_opciones_select_grupos_opciones_page__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../select-grupos-opciones/select-grupos-opciones.page */ "./src/app/select-grupos-opciones/select-grupos-opciones.page.ts");
/* harmony import */ var _Services_grupo_opciones_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../Services/grupo-opciones.service */ "./src/app/Services/grupo-opciones.service.ts");
/* harmony import */ var _Services_fotos_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../Services/fotos.service */ "./src/app/Services/fotos.service.ts");
/* harmony import */ var _Services_comercios_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../Services/comercios.service */ "./src/app/Services/comercios.service.ts");
/* harmony import */ var _Services_images_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../Services/images.service */ "./src/app/Services/images.service.ts");
/* harmony import */ var _models_foto__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../models/foto */ "./src/app/models/foto.ts");
/* harmony import */ var _form_stock_form_stock_page__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../form-stock/form-stock.page */ "./src/app/form-stock/form-stock.page.ts");
/* harmony import */ var _models_comercio__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../models/comercio */ "./src/app/models/comercio.ts");
/* harmony import */ var _details_image_details_image_page__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../details-image/details-image.page */ "./src/app/details-image/details-image.page.ts");
/* harmony import */ var _Services_loading_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../Services/loading.service */ "./src/app/Services/loading.service.ts");
/* harmony import */ var _models_woocommerceSyncData__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../models/woocommerceSyncData */ "./src/app/models/woocommerceSyncData.ts");




























let FormProductoPage = class FormProductoPage {
    constructor(formBuilder, imagePicker, camera, crop, actionSheetController, file, modalController, productosService, categoriaService, barcodeScanner, route, alertController, navCtrl, router, firestore, toastServices, cocinasService, changeRef, gruposOpcionesService, fotosService, comercioService, imageService, modalCtrl, loadingService) {
        this.formBuilder = formBuilder;
        this.imagePicker = imagePicker;
        this.camera = camera;
        this.crop = crop;
        this.actionSheetController = actionSheetController;
        this.file = file;
        this.modalController = modalController;
        this.productosService = productosService;
        this.categoriaService = categoriaService;
        this.barcodeScanner = barcodeScanner;
        this.route = route;
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.router = router;
        this.firestore = firestore;
        this.toastServices = toastServices;
        this.cocinasService = cocinasService;
        this.changeRef = changeRef;
        this.gruposOpcionesService = gruposOpcionesService;
        this.fotosService = fotosService;
        this.comercioService = comercioService;
        this.imageService = imageService;
        this.modalCtrl = modalCtrl;
        this.loadingService = loadingService;
        this.isLoading = false;
        this.submitted = false;
        this.imagePickerOptions = {
            maximumImagesCount: 1,
            quality: 5
        };
        this.slideOpts = {
            slidesPerView: 2,
            initialSlide: 2,
            speed: 400
        };
        this.categorias = [];
        this.cocinas = [];
        this.gruposOpciones = [];
        this.updating = false;
        this.titulo = "Nuevo Producto";
        this.croppedImageIcono = "";
        this.imagenesNuevas = [];
        this.flagWoocommerce = false;
        this.comercio = new _models_comercio__WEBPACK_IMPORTED_MODULE_24__["Comercio"]();
        this.comercio.asignarValores(this.comercioService.getSelectedCommerceValue());
        this.producto = new _models_producto__WEBPACK_IMPORTED_MODULE_12__["Producto"]();
        this.woocommerceSyncData = new _models_woocommerceSyncData__WEBPACK_IMPORTED_MODULE_27__["WoocommerceSyncData"]();
        this.datosForm = this.formBuilder.group({
            nombre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            barcode: [''],
            destacado: [false],
            precio: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            promocion: [''],
            unidad: ['unidades', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            valorPor: [1],
            stock: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            descripcion: [''],
            cocinaId: [''],
            categorias: [''],
            foto: [''],
            createdAt: [''],
            recibirPedidos: [true]
        });
    }
    get f() { return this.datosForm.controls; }
    ngOnInit() {
    }
    ionViewDidEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loadingService.dismissLoading();
            if (this.route.snapshot.params.id) {
                this.updating = true;
                this.productosService.get(this.route.snapshot.params.id).subscribe(producto => {
                    this.titulo = "Editar Producto";
                    this.datosForm.patchValue(producto);
                    this.producto.asignarValores(producto);
                    this.gruposOpciones = [];
                    this.producto.gruposOpcionesId.forEach(id => {
                        let sub = this.gruposOpcionesService.get(id).subscribe(data => {
                            this.gruposOpciones.push(data);
                            sub.unsubscribe();
                        });
                    });
                    this.changeRef.detectChanges();
                });
                this.productosService.getWoocommerceValue(this.route.snapshot.params.id).subscribe(data => {
                    this.woocommerceSyncData.asignarValores(data);
                    console.log(data);
                });
            }
            else {
                this.producto.id = this.firestore.createId();
            }
            let comercio_seleccionadoId = localStorage.getItem('comercio_seleccionadoId');
            this.categoriaService.getAll().subscribe((snapshot) => {
                this.categorias = [];
                snapshot.forEach((snap) => {
                    var item = snap.payload.doc.data();
                    item.id = snap.payload.doc.id;
                    this.categorias.push(item);
                });
            });
            this.cocinasService.list().subscribe((data) => {
                this.cocinas = data;
                /*  if(this.cocinas.length == 0 && this.comercio.config.cocinas){
                    this.presentAlertCrearCocinas();
                  }*/
            });
        });
    }
    ionViewDidLeave() {
    }
    addFoto(newValue) {
        let archivo = new _models_foto__WEBPACK_IMPORTED_MODULE_22__["Archivo"]();
        archivo.url = newValue;
        this.imagenesNuevas.push(archivo);
    }
    agregarFoto(blob) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.fotosService.uploadImagen(this.producto.id, blob);
        });
    }
    eliminarFoto(index) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Está seguro que desea eliminar esta imagen?',
                message: '',
                buttons: [
                    {
                        text: 'No',
                        handler: (blah) => {
                        }
                    }, {
                        text: 'Si',
                        handler: () => {
                            this.producto.imagenes.splice(index, 1);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    verImagen(index, imagen) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _details_image_details_image_page__WEBPACK_IMPORTED_MODULE_25__["DetailsImagePage"],
                componentProps: {
                    url: imagen.url
                }
            });
            modal.onDidDismiss()
                .then((retorno) => {
                if (retorno.data == "eliminar") {
                    this.eliminarFoto(index);
                }
            });
            return yield modal.present();
        });
    }
    verImagenNueva(index, imagen) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _details_image_details_image_page__WEBPACK_IMPORTED_MODULE_25__["DetailsImagePage"],
                componentProps: {
                    url: imagen.url
                }
            });
            modal.onDidDismiss()
                .then((retorno) => {
                if (retorno.data == "eliminar") {
                    this.eliminarFotoNueva(index);
                }
            });
            return yield modal.present();
        });
    }
    eliminarFotoNueva(index) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Está seguro que desea eliminar esta imagen?',
                message: '',
                buttons: [
                    {
                        text: 'No',
                        handler: (blah) => {
                        }
                    }, {
                        text: 'Si',
                        handler: () => {
                            this.imagenesNuevas.splice(index, 1);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    openAddGrupoOpciones() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _select_grupos_opciones_select_grupos_opciones_page__WEBPACK_IMPORTED_MODULE_17__["SelectGruposOpcionesPage"]
            });
            modal.present().then(() => {
            });
            modal.onDidDismiss()
                .then((retorno) => {
                if (retorno.data) {
                    this.gruposOpciones.push(retorno.data.item);
                }
            });
            return yield modal.present();
        });
    }
    eliminarGrupoOpciones(index) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.gruposOpciones.splice(index, 1);
        });
    }
    guardar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.submitted = true;
            if (this.datosForm.invalid) {
                this.toastServices.alert('Por favor completar todos los campos marcados con * antes de continuar', "");
                return;
            }
            this.producto.gruposOpcionesId = [];
            this.gruposOpciones.forEach(grupo => {
                this.producto.gruposOpcionesId.push(grupo.id);
            });
            this.producto.asignarValores(this.datosForm.value);
            var palabras = [this.datosForm.controls.nombre.value, this.datosForm.controls.descripcion.value];
            if (this.producto.categorias) {
                if (this.producto.categorias.length > 0) {
                    this.producto.categorias.forEach(element => {
                        palabras.push(element);
                    });
                }
            }
            //Pasamos imagenes nuevas
            for (let i = 0; i < this.imagenesNuevas.length; i++) {
                let blob = this.imageService.getBlob(this.imagenesNuevas[i].url);
                let file = yield this.agregarFoto(blob);
                let json = JSON.parse(JSON.stringify(file));
                this.producto.imagenes.push(json);
            }
            if (this.comercio.config.woocommerce) {
                console.log(this.woocommerceSyncData);
                this.woocommerceSyncData.changeDate = new Date();
                let wSyncData = JSON.parse(JSON.stringify(this.woocommerceSyncData));
                this.productosService.updateWoocommerceValues(this.producto.id, wSyncData);
            }
            if (this.updating) {
                this.productosService.update(this.producto).then((data) => {
                });
            }
            else {
                this.productosService.set(this.producto.id, this.producto).then((data) => {
                });
            }
            this.navCtrl.back();
        });
    }
    lectorDeCodigo() {
        this.barcodeScanner.scan().then(barcodeData => {
            this.datosForm.patchValue({
                barcode: barcodeData.text,
            });
        }).catch(err => {
            alert(err);
        });
    }
    agregarStock() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _form_stock_form_stock_page__WEBPACK_IMPORTED_MODULE_23__["FormStockPage"],
                componentProps: {
                    producto: this.producto
                }
            });
            return yield modal.present();
        });
    }
    openAddCategoria() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _form_categoria_form_categoria_page__WEBPACK_IMPORTED_MODULE_13__["FormCategoriaPage"],
                componentProps: {
                    comercioId: localStorage.getItem('comercio_seleccionadoId')
                }
            });
            return yield modal.present();
        });
    }
    cancelar() {
        this.navCtrl.back();
    }
    elimiar() {
        this.presentAlertEliminar();
    }
    presentAlertEliminar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Eliminar',
                message: 'Está seguro que desea eliminar el producto?',
                buttons: [
                    {
                        text: 'Cancelar',
                        handler: (blah) => {
                        }
                    }, {
                        text: 'Eliminar',
                        handler: () => {
                            this.productosService.delete(this.route.snapshot.params.id);
                            this.productosService.deleteWoocommerceValues(this.route.snapshot.params.id);
                            this.navCtrl.back();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    presentAlertCrearCocinas() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Agregar Cocina',
                message: 'Debes agregar una cocina antes de continuar',
                buttons: [
                    {
                        text: 'Ok',
                        handler: () => {
                            this.router.navigate(['list-cocinas']);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
FormProductoPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_3__["ImagePicker"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"] },
    { type: _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_4__["Crop"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__["File"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _Services_productos_service__WEBPACK_IMPORTED_MODULE_9__["ProductosService"] },
    { type: _Services_categorias_service__WEBPACK_IMPORTED_MODULE_8__["CategoriasService"] },
    { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_10__["BarcodeScanner"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"] },
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_14__["AngularFirestore"] },
    { type: _Services_toast_service__WEBPACK_IMPORTED_MODULE_15__["ToastService"] },
    { type: _Services_cocinas_service__WEBPACK_IMPORTED_MODULE_16__["CocinasService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _Services_grupo_opciones_service__WEBPACK_IMPORTED_MODULE_18__["GrupoOpcionesService"] },
    { type: _Services_fotos_service__WEBPACK_IMPORTED_MODULE_19__["FotoService"] },
    { type: _Services_comercios_service__WEBPACK_IMPORTED_MODULE_20__["ComerciosService"] },
    { type: _Services_images_service__WEBPACK_IMPORTED_MODULE_21__["ImagesService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _Services_loading_service__WEBPACK_IMPORTED_MODULE_26__["LoadingService"] }
];
FormProductoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-producto',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./form-producto.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-producto/form-producto.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./form-producto.page.scss */ "./src/app/form-producto/form-producto.page.scss")).default]
    })
], FormProductoPage);



/***/ })

}]);
//# sourceMappingURL=form-producto-form-producto-module.js.map