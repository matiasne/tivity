(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~add-producto-venta-add-producto-venta-module~details-pedido-details-pedido-module~list-produ~ec5e586f"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-producto-venta/add-producto-venta.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-producto-venta/add-producto-venta.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <div class=\"container-producto\">       \n      <app-card-producto\n      [item]=\"producto\"\n      [multiplicador]=\"producto.cantidad\"\n      ></app-card-producto>        \n    </div>  \n  </ion-toolbar>\n</ion-header>\n\n<ion-content  class=\"ion-padding\">     \n\n  <ion-item class=\"form-card item-producto-cantidad\" lines=\"none\">\n    <ion-button class=\"button-block\" slot=\"start\" (click)=\"restarCantidad()\"><ion-icon name=\"remove\"></ion-icon></ion-button>\n    <b>\n      <span *ngIf=\"producto.valorPor && (producto.valorPor * producto.cantidad)==1 && producto.unidad == 'unidades'\">\n        {{producto.valorPor * producto.cantidad}} unidad \n      </span>\n\n      <span *ngIf=\"producto.valorPor && (producto.valorPor * producto.cantidad)==1 && producto.unidad != 'unidades'\">\n        {{producto.valorPor * producto.cantidad}}  {{producto.unidad}}\n      </span>\n\n      <span *ngIf=\"producto.valorPor && (producto.valorPor * producto.cantidad)!=1\">\n        <span *ngIf=\"producto.valorPor\">\n          {{producto.valorPor * producto.cantidad}}\n        </span>\n        <span *ngIf=\"producto.unidad\">\n          {{producto.unidad}}\n        </span> \n      </span>  \n    </b> \n    <ion-button class=\"button-block\"  slot=\"end\" (click)=\"sumarCantidad()\">\n      <ion-icon name=\"add\"> </ion-icon>\n    </ion-button> \n  </ion-item>\n  \n\n  <div *ngFor=\"let grupo of gruposOpciones; let grupoIndex=index\" class=\"form-card\">\n    <ion-text color=\"primary\" id=\"{{grupo.nombre}}\">\n      <h4>{{grupo.nombre}} </h4>\n    </ion-text> \n    <div *ngIf=\"grupo.maximo == 1\">      \n      <p>Seleccione una opción</p>\n      <ion-radio-group>        \n       \n          <ion-item *ngFor=\"let opcion of grupo.opciones;let i=index\" class=\"remove_inner_bottom\">\n            <ion-radio slot=\"start\" (click)=\"seleccionarOpcion(grupo,opcion)\"></ion-radio>                      \n            <ion-label text-wrap>\n              <b>{{opcion.nombre}}</b> \n              <span *ngIf=\"opcion.precioVariacion != 0\">\n                {{opcion.precioVariacion | currency}}  \n              </span>\n            </ion-label>\n          </ion-item>                  \n       \n      </ion-radio-group>\n    </div>\n\n    <div *ngIf=\"grupo.maximo > 1\">\n      <p>Seleccione de {{grupo.minimo}} a {{grupo.maximo}} opciones</p>\n      <ion-item *ngFor=\"let opcion of grupo.opciones; let i = index\" class=\"remove_inner_bottom\">\n        <ion-label> \n          {{opcion.nombre}}\n          <span *ngIf=\"opcion.precioVariacion != 0\">\n            {{opcion.precioVariacion | currency}}  \n          </span>\n        </ion-label>\n        <ion-button class=\"button-block-opcion\" color=\"light\" (click)=\"restarCantidadOpcion(grupoIndex,i)\" [disabled]=\"opcion.cantidad == 0\"><ion-icon name=\"remove\"></ion-icon></ion-button>\n        &nbsp;&nbsp;{{opcion.cantidad}}&nbsp;&nbsp;\n        <ion-button class=\"button-block-opcion\" color=\"light\" (click)=\"sumarCantidadOpcion(grupoIndex,i)\" [disabled]=\"!opcion.sumaHabilitada\"><ion-icon name=\"add\"></ion-icon></ion-button>\n    \n      </ion-item>\n    </div> \n  </div>\n\n  \n\n  <div class=\"form-card\">\n    <ion-text color=\"primary\">\n      <h4>Descripcion adicional</h4>\n    </ion-text> \n    \n    <ion-textarea [(ngModel)]=\"producto.descripcion_venta\"></ion-textarea>\n \n  </div>  \n\n  \n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" >\n\n    <ion-fab-button (click)=\"editarProducto()\">\n      <ion-icon name=\"create\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n</ion-content>\n<ion-footer class=\"ion-no-border ion-padding\">\n  <ion-toolbar>  \n    <ion-button class=\"button-rounded\" slot=\"end\" (click)=\"agregar()\">Agregar</ion-button>  \n    <ion-button class=\"button-rounded\" slot=\"start\"  color=\"light\" (click)=\"cancelar()\">Cancelar</ion-button>\n  </ion-toolbar>\n</ion-footer> \n");

/***/ }),

/***/ "./src/app/Services/carga-por-voz.service.ts":
/*!***************************************************!*\
  !*** ./src/app/Services/carga-por-voz.service.ts ***!
  \***************************************************/
/*! exports provided: CargaPorVozService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CargaPorVozService", function() { return CargaPorVozService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_speech_recognition_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/speech-recognition/ngx */ "./node_modules/@ionic-native/speech-recognition/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let CargaPorVozService = class CargaPorVozService {
    constructor(speechRecognition) {
        this.speechRecognition = speechRecognition;
        this.resultadoSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"];
        this.reconociendoPorVoz = false;
    }
    getActualResultadoSubs() {
        return this.resultadoSubject.asObservable();
    }
    getPermission() {
        //comprueba que la aplicación tiene permiso, de no ser así nos la pide
        this.speechRecognition.hasPermission().
            then((hasPermission) => {
            if (!hasPermission) {
                this.speechRecognition.requestPermission();
            }
        });
    }
    startReconocimiento() {
        let options = {
            language: "es-ES",
            matches: 1,
        };
        return this.speechRecognition.startListening(options);
    }
    stopReconocimiento() {
        this.speechRecognition.stopListening();
    }
};
CargaPorVozService.ctorParameters = () => [
    { type: _ionic_native_speech_recognition_ngx__WEBPACK_IMPORTED_MODULE_2__["SpeechRecognition"] }
];
CargaPorVozService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CargaPorVozService);



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

/***/ "./src/app/Services/modal-notificacion.service.ts":
/*!********************************************************!*\
  !*** ./src/app/Services/modal-notificacion.service.ts ***!
  \********************************************************/
/*! exports provided: ModalNotificacionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalNotificacionService", function() { return ModalNotificacionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _modal_notificacion_modal_notificacion_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modal-notificacion/modal-notificacion.page */ "./src/app/modal-notificacion/modal-notificacion.page.ts");




let ModalNotificacionService = class ModalNotificacionService {
    constructor(modalController) {
        this.modalController = modalController;
    }
    success(titulo, subtitulo) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modal_notificacion_modal_notificacion_page__WEBPACK_IMPORTED_MODULE_3__["ModalNotificacionPage"],
                componentProps: { titulo: titulo, subtitulo: subtitulo, iconOk: true },
                cssClass: 'modal-notificacion-wrapper moda-succes-border',
                id: "notificacion"
            });
            modal.present().then(() => {
                setTimeout(() => {
                    modal.dismiss();
                }, 500);
            });
        });
    }
    trash(titulo, subtitulo) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modal_notificacion_modal_notificacion_page__WEBPACK_IMPORTED_MODULE_3__["ModalNotificacionPage"],
                componentProps: { titulo: titulo, subtitulo: subtitulo, iconTrash: true, iconOk: false },
                cssClass: 'modal-notificacion-wrapper modal-error-border'
            });
            modal.present().then(() => {
                setTimeout(() => {
                    modal.dismiss();
                }, 300);
            });
        });
    }
};
ModalNotificacionService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
ModalNotificacionService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ModalNotificacionService);



/***/ }),

/***/ "./src/app/add-producto-venta/add-producto-venta.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/add-producto-venta/add-producto-venta.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1wcm9kdWN0by12ZW50YS9hZGQtcHJvZHVjdG8tdmVudGEucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/add-producto-venta/add-producto-venta.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/add-producto-venta/add-producto-venta.page.ts ***!
  \***************************************************************/
/*! exports provided: AddProductoVentaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductoVentaPage", function() { return AddProductoVentaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _Services_productos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/productos.service */ "./src/app/Services/productos.service.ts");
/* harmony import */ var _Services_carga_por_voz_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Services/carga-por-voz.service */ "./src/app/Services/carga-por-voz.service.ts");
/* harmony import */ var _Services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Services/toast.service */ "./src/app/Services/toast.service.ts");
/* harmony import */ var _models_producto__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/producto */ "./src/app/models/producto.ts");
/* harmony import */ var _Services_cocinas_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Services/cocinas.service */ "./src/app/Services/cocinas.service.ts");
/* harmony import */ var _Services_grupo_opciones_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Services/grupo-opciones.service */ "./src/app/Services/grupo-opciones.service.ts");
/* harmony import */ var _Services_loading_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Services/loading.service */ "./src/app/Services/loading.service.ts");
/* harmony import */ var _Services_modal_notificacion_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Services/modal-notificacion.service */ "./src/app/Services/modal-notificacion.service.ts");












let AddProductoVentaPage = class AddProductoVentaPage {
    constructor(router, modalCtrl, route, productosServices, cargaPorVoz, toastServices, productoService, navParams, cocinasService, gruposOpcionesService, loadingService, modalNotificacion) {
        this.router = router;
        this.modalCtrl = modalCtrl;
        this.route = route;
        this.productosServices = productosServices;
        this.cargaPorVoz = cargaPorVoz;
        this.toastServices = toastServices;
        this.productoService = productoService;
        this.navParams = navParams;
        this.cocinasService = cocinasService;
        this.gruposOpcionesService = gruposOpcionesService;
        this.loadingService = loadingService;
        this.modalNotificacion = modalNotificacion;
        this.submitted = false;
        this.totalCambiando = false;
        this.precioShow = 0;
        this.showOpcionesSeleccionadas = true;
        this.gruposOpciones = [];
    }
    ngOnInit() {
        console.log("!!!");
        this.producto = new _models_producto__WEBPACK_IMPORTED_MODULE_7__["Producto"]();
        this.producto.asignarValores(this.navParams.get('producto'));
        this.producto.cantidad = 1;
        this.producto.descripcion_venta = "";
        this.gruposOpciones = [];
        if (this.producto.gruposOpcionesId.length > 0)
            this.loadingService.presentLoadingText("Cargando Opciones");
        this.producto.gruposOpcionesId.forEach(id => {
            let sub = this.gruposOpcionesService.get(id).subscribe(data => {
                data.opciones.forEach(opcion => {
                    opcion.cantidad = 0;
                    opcion.sumaHabilitada = true;
                });
                this.gruposOpciones.push(data);
                sub.unsubscribe();
                this.loadingService.dismissLoading();
            });
        });
        this.producto.opcionesSeleccionadas = [];
        console.log(this.producto);
        this.addToTotal(0, this.producto.precio, 10);
    }
    editarProducto() {
        this.modalCtrl.dismiss();
        this.router.navigate(['form-producto', { id: this.producto.id }]);
    }
    sumarCantidad() {
        this.producto.cantidad += 1;
        let precioViejo = this.producto.precioTotal;
        this.producto.precioTotal = this.valorTotal();
        this.addToTotal(precioViejo, this.producto.precioTotal, 1500);
    }
    restarCantidad() {
        this.producto.cantidad -= 1;
        if (this.producto.cantidad < 1) {
            this.producto.cantidad = 1;
            return;
        }
        let precioViejo = this.producto.precioTotal;
        this.producto.precioTotal = this.valorTotal();
        this.addToTotal(precioViejo, this.producto.precioTotal, 10);
    }
    ngAfterViewInit() {
    }
    ionViewDidLeave() {
        //this.opcionesSubs.unsubscribe();
    }
    seleccionarOpcion(grupo, opcion) {
        console.log("seleccionada");
        grupo.opciones.forEach(element => {
            element.seleccionada = false;
            element.cantidad = 0;
        });
        opcion.seleccionada = true;
        opcion.cantidad = 1;
        this.producto.precioTotal = this.valorTotal();
    }
    seleccionarOpcionCheck(grupo, opcion) {
        if (opcion.seleccionada) {
            opcion.seleccionada = false;
        }
        else {
            opcion.seleccionada = true;
        }
    }
    agregar() {
        var isOk = false;
        this.producto.opcionesSeleccionadas = [];
        this.gruposOpciones.forEach(grupo => {
            grupo.opciones.forEach(opcion => {
                if (opcion.cantidad > 0) {
                    var opcionSeleccionada = {
                        nombreGrupo: grupo.nombre,
                        nombre: opcion.nombre,
                        precioVariacion: opcion.precioVariacion,
                        cantidad: opcion.cantidad,
                    };
                    this.producto.opcionesSeleccionadas.push(opcionSeleccionada);
                    opcion.cantidad = 0;
                }
            });
        });
        if (this.gruposOpciones.length > 0) {
            console.log("validando");
            for (var i = 0; i < this.gruposOpciones.length; ++i) {
                var isOk = false;
                let grupo = this.gruposOpciones[i];
                if (grupo.minimo > 0) {
                    if (grupo.maximo == 1) {
                        grupo.opciones.forEach(opcion => {
                            if (opcion.seleccionada)
                                isOk = true;
                        });
                    }
                    if (grupo.maximo > 1) {
                        var cantidad = 0;
                        console.log(grupo);
                        grupo.opciones.forEach(opcion => {
                            if (opcion.cantidad)
                                cantidad += opcion.cantidad;
                        });
                        console.log(cantidad);
                        if (cantidad >= grupo.minimo) {
                            isOk = true;
                        }
                        if (cantidad > grupo.maximo) {
                            isOk = false;
                        }
                    }
                }
                else {
                    isOk = true;
                }
                if (!isOk) {
                    this.toastServices.alert("Seleccione " + grupo.minimo + " " + grupo.nombre, "");
                    this.scrollTo(grupo.nombre);
                    isOk = false;
                    break;
                }
            }
        }
        else {
            isOk = true;
        }
        console.log("!!!!!! isOK" + isOk);
        if (isOk) {
            if (this.producto.cocinaId) {
                this.cocinasService.get(this.producto.cocinaId).subscribe(data => {
                    this.producto.cocinaNombre = data.nombre;
                });
            }
            console.log(this.producto);
            this.modalCtrl.dismiss(this.producto);
            //this.toastServices.mensaje('Agregado!', this.producto.cantidad+' '+this.producto.unidad+' de '+this.producto.nombre);     
        }
    }
    scrollTo(id) {
        if (id == 'inicio') {
            this.content.scrollToPoint(0, 0, 500);
        }
        else {
            let y = document.getElementById(id).offsetTop;
            console.log(y);
            this.content.scrollToPoint(0, y - 100, 500);
        }
    }
    cancelar() {
        this.modalCtrl.dismiss();
    }
    restarCantidadOpcion(grupoIndex, i) {
        if (!this.gruposOpciones[grupoIndex].opciones[i].cantidad) {
            this.gruposOpciones[grupoIndex].opciones[i].cantidad = 0;
        }
        if (!this.gruposOpciones[grupoIndex].cantidadTotal) {
            this.gruposOpciones[grupoIndex].cantidadTotal = 0;
        }
        if (this.gruposOpciones[grupoIndex].opciones[i].cantidad <= 0) {
            this.gruposOpciones[grupoIndex].opciones[i].cantidad = 0;
            this.gruposOpciones[grupoIndex].opciones[i].seleccionada = false;
        }
        else {
            this.gruposOpciones[grupoIndex].opciones[i].cantidad -= 1;
            this.gruposOpciones[grupoIndex].cantidadTotal -= 1;
        }
        if (this.gruposOpciones[grupoIndex].cantidadTotal < 0) {
            this.gruposOpciones[grupoIndex].cantidadTotal = 0;
        }
        if (this.gruposOpciones[grupoIndex].cantidadTotal >= this.gruposOpciones[grupoIndex].maximo) {
            this.gruposOpciones[grupoIndex].opciones.forEach(opcion => {
                opcion.sumaHabilitada = false;
                if (opcion.cantidad >= opcion.maximaSeleccion) {
                    opcion.sumaHabilitada = false;
                }
                else {
                    opcion.sumaHabilitada = true;
                }
            });
        }
        else {
            this.gruposOpciones[grupoIndex].opciones.forEach(opcion => {
                opcion.sumaHabilitada = true;
                if (opcion.cantidad >= opcion.maximaSeleccion) {
                    opcion.sumaHabilitada = false;
                }
                else {
                    opcion.sumaHabilitada = true;
                }
            });
        }
        if (this.gruposOpciones[grupoIndex].opciones[i].cantidad == 0)
            this.gruposOpciones[grupoIndex].opciones[i].seleccionada = false;
        let precioViejo = this.producto.precioTotal;
        this.producto.precioTotal = this.valorTotal();
        this.addToTotal(precioViejo, this.producto.precioTotal, 10);
    }
    sumarCantidadOpcion(grupoIndex, i) {
        if (!this.gruposOpciones[grupoIndex].opciones[i].cantidad) {
            this.gruposOpciones[grupoIndex].opciones[i].cantidad = 0;
        }
        if (!this.gruposOpciones[grupoIndex].cantidadTotal) {
            this.gruposOpciones[grupoIndex].cantidadTotal = 0;
        }
        this.gruposOpciones[grupoIndex].opciones[i].cantidad += 1;
        this.gruposOpciones[grupoIndex].cantidadTotal += 1;
        if (this.gruposOpciones[grupoIndex].opciones[i].precioVariacion) {
        }
        this.gruposOpciones[grupoIndex].opciones[i].seleccionada = true;
        if (this.gruposOpciones[grupoIndex].cantidadTotal == this.gruposOpciones[grupoIndex].maximo) {
            this.toastServices.mensaje("Ya has seleccionado el máximo de: " + this.gruposOpciones[grupoIndex].nombre, "");
            this.gruposOpciones[grupoIndex].opciones.forEach(opcion => {
                opcion.sumaHabilitada = false;
            });
        }
        else {
            this.gruposOpciones[grupoIndex].opciones.forEach(opcion => {
                opcion.sumaHabilitada = true;
                if (opcion.cantidad >= opcion.maximaSeleccion) {
                    opcion.sumaHabilitada = false;
                }
                else {
                    opcion.sumaHabilitada = true;
                }
            });
        }
        let precioViejo = this.producto.precioTotal;
        this.producto.precioTotal = this.valorTotal();
        this.addToTotal(precioViejo, this.producto.precioTotal, 10);
        console.log(this.gruposOpciones[grupoIndex].maximo);
        console.log(this.gruposOpciones[grupoIndex].cantidadTotal);
        console.log(this.gruposOpciones[grupoIndex].opciones[i].cantidad);
    }
    valorTotal() {
        let valorUno = this.producto.precio;
        this.gruposOpciones.forEach(grupos => {
            grupos.opciones.forEach(opcion => {
                if (opcion.seleccionada || opcion.cantidad > 0)
                    valorUno += opcion.precioVariacion * opcion.cantidad;
            });
        });
        console.log(this.producto.cantidad + " " + valorUno);
        return this.producto.cantidad * valorUno;
    }
    addToTotal(start, end, duration) {
        this.producto.precioTotal = end;
        if (start == end) {
            this.totalCambiando = false;
            return;
        }
        this.totalCambiando = true;
        var range = end - start;
        var current = start;
        var increment = end > start ? 1 : -1;
        var stepTime = Math.abs(Math.floor(duration / range));
        console.log(stepTime);
        var timer = setInterval(() => {
            current += increment;
            this.precioShow = current;
            if (current == end) {
                this.totalCambiando = false;
                clearInterval(timer);
            }
        }, stepTime);
    }
};
AddProductoVentaPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _Services_productos_service__WEBPACK_IMPORTED_MODULE_4__["ProductosService"] },
    { type: _Services_carga_por_voz_service__WEBPACK_IMPORTED_MODULE_5__["CargaPorVozService"] },
    { type: _Services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] },
    { type: _Services_productos_service__WEBPACK_IMPORTED_MODULE_4__["ProductosService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"] },
    { type: _Services_cocinas_service__WEBPACK_IMPORTED_MODULE_8__["CocinasService"] },
    { type: _Services_grupo_opciones_service__WEBPACK_IMPORTED_MODULE_9__["GrupoOpcionesService"] },
    { type: _Services_loading_service__WEBPACK_IMPORTED_MODULE_10__["LoadingService"] },
    { type: _Services_modal_notificacion_service__WEBPACK_IMPORTED_MODULE_11__["ModalNotificacionService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('cantidad', { static: false })
], AddProductoVentaPage.prototype, "inputElement", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], { static: false })
], AddProductoVentaPage.prototype, "content", void 0);
AddProductoVentaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-producto-venta',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-producto-venta.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-producto-venta/add-producto-venta.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add-producto-venta.page.scss */ "./src/app/add-producto-venta/add-producto-venta.page.scss")).default]
    })
], AddProductoVentaPage);



/***/ })

}]);
//# sourceMappingURL=default~add-producto-venta-add-producto-venta-module~details-pedido-details-pedido-module~list-produ~ec5e586f.js.map