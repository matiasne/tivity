(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["form-servicio-form-servicio-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-servicio/form-servicio.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form-servicio/form-servicio.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{titulo}}</ion-title>    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  \n  <div class=\"icono-foto\">\n    <app-seleccionar-imagen\n      [aspectRatio] = \"1/1\"\n      [croppedImage]=\"croppedImageIcono\"\n      (onSelectValue)=imagenSeleccionadaIcono($event)>\n    </app-seleccionar-imagen>\n  </div>\n\n  <form [formGroup]=\"datosForm\">\n    <div class=\"form-card\">\n      <ion-text color=\"primary\">\n        <h4>Nombre *</h4>      \n      </ion-text>       \n      <ion-item [class.invalid]=\"submitted && !datosForm.controls.nombre.valid\">\n        <ion-input name=\"nombre\" type=\"text\" formControlName=\"nombre\" required></ion-input>\n      </ion-item>\n      <div *ngIf=\"submitted && f.nombre.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.nombre.errors.required\"><h5>Ingresa un nombre</h5></div>\n      </div>  \n    </div> \n\n    <div class=\"form-card\">\n      <ion-item [class.invalid]=\"submitted && !datosForm.controls.categorias.valid\">\n        <ion-label position=\"floating\">Categoría</ion-label>\n        <ion-select multiple=\"true\" formControlName=\"categorias\" cancelText=\"Cancelar\" okText=\"Listo\">\n          <ion-select-option *ngFor=\"let categoria of categorias\" [value]=\"categoria.id\" selected>{{categoria.nombre}}</ion-select-option>\n        </ion-select>\n        \n      </ion-item>   \n      <ion-button size=\"large\"   expand=\"block\" (click)=\"openAddCategoria()\">Agregar Nueva Categoria</ion-button>\n      <div *ngIf=\"submitted && f.categorias.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.categorias.errors.required\"><h5>Seleccione una o más categorías</h5></div>\n      </div>  \n    </div>  \n\n\n    <h4>Habilitar para:</h4>  \n       \n    <ion-item>\n      <ion-label>Subscripciones</ion-label>\n      <ion-toggle formControlName=\"recibirSubscripciones\"></ion-toggle>\n    </ion-item>\n    <div class=\"form-card\" *ngIf=\"datosForm.controls.recibirSubscripciones.value\">\n      <ion-text color=\"primary\">\n        <h4>Planes *</h4>      \n      </ion-text> \n      <ion-list lines=\"none\" class=\"item-card\">        \n        <ion-item  *ngFor=\"let plan of planes;let i=index\">       \n          <ion-label>\n            <b>{{plan.nombre}}</b> \n            <span *ngIf=\"plan.tipo == 'dias'\">\n              {{plan.dias}} días \n            </span>\n            <span *ngIf=\"plan.tipo == 'mensual'\">\n              Mensual \n            </span>\n            <span *ngIf=\"plan.tipo == 'anual'\">\n              Anual \n            </span>\n            por {{plan.precio | currency}}\n          </ion-label>\n          <ion-button color=\"primary\" slot=\"end\" (click)=\"editarPlan(plan,i)\"><ion-icon name=\"create\"></ion-icon></ion-button>                \n        </ion-item>    \n      </ion-list>   \n      <ion-button size=\"large\"   expand=\"block\" (click)=\"openNewPlan()\">Agregar Nuevo Plan</ion-button>\n    </div>\n\n    <ion-item>\n      <ion-label>Recibir Reservas</ion-label>\n      <ion-toggle formControlName=\"recibirReservas\"></ion-toggle>\n    </ion-item>\n    <div class=\"form-card\" *ngIf=\"datosForm.controls.recibirReservas.value\">\n      <ion-text color=\"primary\">\n        <h4>Calendarios *</h4>      \n      </ion-text> \n      <ion-list lines=\"none\" class=\"item-card\">        \n        <ion-item  *ngFor=\"let calendario of calendarios;let i=index\">       \n          <ion-label>\n            {{calendario.nombre}}\n          </ion-label>\n          <ion-button color=\"primary\" slot=\"end\" (click)=\"editarCalendario(calendario,i)\"><ion-icon name=\"create\"></ion-icon></ion-button>                \n        </ion-item>    \n      </ion-list>   \n      <ion-button size=\"large\"   expand=\"block\" (click)=\"openNewCalendario()\">Agregar Nuevo Calendario</ion-button>\n    </div>\n\n    <div class=\"form-card\">\n      <ion-text color=\"primary\">\n        <h4>Descripcion adicional</h4>      \n      </ion-text> \n      \n      <ion-item>\n        <ion-textarea formControlName=\"descripcion\"></ion-textarea>\n      </ion-item>\n    </div>\n   \n  </form>  \n\n  <div class=\"form-card\" *ngIf=\"updating\">\n    <ion-text color=\"danger\">\n      <h5 color=\"danger\">zona de riesgo</h5>\n    </ion-text>\n    \n    <ion-button  color=\"danger\" (click)=\"elimiar()\">Eliminar Servicio</ion-button>\n  </div>\n  <ion-toolbar>\n    <ion-button slot=\"end\" (click)=\"guardar()\">Guardar</ion-button>\n    \n    <ion-button slot=\"start\"  color=\"light\" (click)=\"cancelar()\">Cancelar</ion-button>\n  </ion-toolbar>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/form-servicio/form-servicio-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/form-servicio/form-servicio-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: FormServicioPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormServicioPageRoutingModule", function() { return FormServicioPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _form_servicio_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-servicio.page */ "./src/app/form-servicio/form-servicio.page.ts");




const routes = [
    {
        path: '',
        component: _form_servicio_page__WEBPACK_IMPORTED_MODULE_3__["FormServicioPage"]
    }
];
let FormServicioPageRoutingModule = class FormServicioPageRoutingModule {
};
FormServicioPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FormServicioPageRoutingModule);



/***/ }),

/***/ "./src/app/form-servicio/form-servicio.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/form-servicio/form-servicio.module.ts ***!
  \*******************************************************/
/*! exports provided: FormServicioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormServicioPageModule", function() { return FormServicioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _form_servicio_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-servicio-routing.module */ "./src/app/form-servicio/form-servicio-routing.module.ts");
/* harmony import */ var _form_servicio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form-servicio.page */ "./src/app/form-servicio/form-servicio.page.ts");
/* harmony import */ var _Components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Components/components.module */ "./src/app/Components/components.module.ts");








let FormServicioPageModule = class FormServicioPageModule {
};
FormServicioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _Components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _form_servicio_routing_module__WEBPACK_IMPORTED_MODULE_5__["FormServicioPageRoutingModule"]
        ],
        declarations: [_form_servicio_page__WEBPACK_IMPORTED_MODULE_6__["FormServicioPage"]]
    })
], FormServicioPageModule);



/***/ }),

/***/ "./src/app/form-servicio/form-servicio.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/form-servicio/form-servicio.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0tc2VydmljaW8vZm9ybS1zZXJ2aWNpby5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/form-servicio/form-servicio.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/form-servicio/form-servicio.page.ts ***!
  \*****************************************************/
/*! exports provided: FormServicioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormServicioPage", function() { return FormServicioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/crop/ngx */ "./node_modules/@ionic-native/crop/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _form_plan_form_plan_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../form-plan/form-plan.page */ "./src/app/form-plan/form-plan.page.ts");
/* harmony import */ var _Services_servicios_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Services/servicios.service */ "./src/app/Services/servicios.service.ts");
/* harmony import */ var _Services_categorias_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Services/categorias.service */ "./src/app/Services/categorias.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _Services_planes_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Services/planes.service */ "./src/app/Services/planes.service.ts");
/* harmony import */ var _models_servicio__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../models/servicio */ "./src/app/models/servicio.ts");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _form_categoria_form_categoria_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../form-categoria/form-categoria.page */ "./src/app/form-categoria/form-categoria.page.ts");
/* harmony import */ var _Services_loading_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../Services/loading.service */ "./src/app/Services/loading.service.ts");
/* harmony import */ var _Services_toast_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../Services/toast.service */ "./src/app/Services/toast.service.ts");
/* harmony import */ var _form_calendario_form_calendario_page__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../form-calendario/form-calendario.page */ "./src/app/form-calendario/form-calendario.page.ts");
/* harmony import */ var _Services_calendarios_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../Services/calendarios.service */ "./src/app/Services/calendarios.service.ts");




















let FormServicioPage = class FormServicioPage {
    constructor(formBuilder, imagePicker, camera, crop, actionSheetController, file, modalController, serviciosService, categoriaService, route, alertController, navCtrl, planesServices, firestore, loadingService, toastServices, calendariosServices) {
        this.formBuilder = formBuilder;
        this.imagePicker = imagePicker;
        this.camera = camera;
        this.crop = crop;
        this.actionSheetController = actionSheetController;
        this.file = file;
        this.modalController = modalController;
        this.serviciosService = serviciosService;
        this.categoriaService = categoriaService;
        this.route = route;
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.planesServices = planesServices;
        this.firestore = firestore;
        this.loadingService = loadingService;
        this.toastServices = toastServices;
        this.calendariosServices = calendariosServices;
        this.croppedImagepath = "";
        this.isLoading = false;
        this.submitted = false;
        this.imagePickerOptions = {
            maximumImagesCount: 1,
            quality: 5
        };
        this.planes = [];
        this.categorias = [];
        this.calendarios = [];
        this.updating = false;
        this.titulo = "Nuevo Servicio";
        this.croppedImageIcono = "";
        this.servicio = new _models_servicio__WEBPACK_IMPORTED_MODULE_13__["Servicio"]();
        this.datosForm = this.formBuilder.group({
            nombre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            descripcion: [''],
            categorias: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            foto: [''],
            createdAt: [''],
            recibirReservas: [false],
            recibirSubscripciones: [false]
        });
        if (this.route.snapshot.params.id) {
            this.updating = true;
            this.titulo = "Editar Servicio";
            this.subs = this.serviciosService.get(this.route.snapshot.params.id).subscribe(resp => {
                this.loadingService.dismissLoading();
                this.datosForm.patchValue(resp);
                this.servicio.asignarValores(resp);
                this.croppedImageIcono = this.servicio.foto;
                this.obtnerPlanes();
                this.obtnerCalendarios();
            });
        }
        else {
            //  this.servicio.id = this.firestore.createId();
            //  this.obtnerPlanes();
            //  this.obtnerCalendarios();
        }
        let comercio_seleccionadoId = localStorage.getItem('comercio_seleccionadoId');
        this.categoriaService.getAll().subscribe((snapshot) => {
            this.categorias = [];
            snapshot.forEach((snap) => {
                var item = snap.payload.doc.data();
                item.id = snap.payload.doc.id;
                this.categorias.push(item);
            });
            console.log(this.categorias);
            this.loadingService.dismissLoading();
        });
        //obtener categorias del backend
    }
    obtnerPlanes() {
        this.loadingService.presentLoading();
        this.planesServices.setPathIds(this.servicio.id);
        this.planesServices.list().subscribe(items => {
            this.planes = items;
            this.loadingService.dismissLoading();
        });
    }
    obtnerCalendarios() {
        this.loadingService.presentLoading();
        this.calendariosServices.setPathIds(this.servicio.id);
        this.calendariosServices.list().subscribe(items => {
            this.calendarios = items;
            this.loadingService.dismissLoading();
        });
    }
    ionViewDidLeave() {
    }
    get f() { return this.datosForm.controls; }
    ngOnInit() {
    }
    guardar() {
        this.submitted = true;
        if (this.datosForm.invalid) {
            this.toastServices.alert('Por favor completar todos los campos marcados con * antes de continuar', "");
            return;
        }
        console.log("!!!!!!!!!!!!!!!!");
        this.servicio.asignarValores(this.datosForm.value);
        if (this.updating) {
            // const serv = JSON.parse(JSON.stringify(this.servicio));
            this.planes.forEach(plan => {
                plan.servicioId = this.servicio.id;
                console.log(plan);
                //  this.planesServices.set(plan);
            });
            this.serviciosService.update(this.servicio).then((data) => {
                this.calendarios.forEach(calendario => {
                    calendario.servicioId = data.id;
                    this.calendariosServices.set(calendario).then(data => {
                        console.log(data);
                    });
                });
            });
        }
        else {
            //const serv = JSON.parse(JSON.stringify(this.servicio));
            console.log(this.planes);
            this.serviciosService.add(this.servicio).then((data) => {
                console.log(data.id);
                this.planes.forEach(plan => {
                    plan.servicioId = data.id;
                    console.log(plan);
                    //    this.planesServices.set(plan);          
                });
                this.calendarios.forEach(calendarios => {
                    calendarios.servicioId = data.id;
                    this.calendariosServices.set(calendarios).then(data => {
                        console.log(data);
                    });
                });
            })
                .catch(err => {
                console.log(err);
            });
        }
        this.navCtrl.back();
    }
    openNewPlan() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _form_plan_form_plan_page__WEBPACK_IMPORTED_MODULE_8__["FormPlanPage"],
                componentProps: { servicioId: this.servicio.id }
            });
            modal.onDidDismiss().then((retorno) => {
                if (retorno.data) {
                    console.log("PUSH");
                    this.planes.push(retorno.data);
                }
                console.log(this.planes);
            });
            return yield modal.present();
        });
    }
    imagenSeleccionadaIcono(newValue) {
        console.log(newValue);
        this.datosForm.patchValue({
            foto: newValue
        });
    }
    editarPlan(plan, index) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _form_plan_form_plan_page__WEBPACK_IMPORTED_MODULE_8__["FormPlanPage"],
                componentProps: { plan: plan }
            });
            modal.onDidDismiss().then((retorno) => {
                if (retorno.data == 'eliminar') {
                    this.planesServices.delete(this.planes[index].id);
                }
                if (retorno.data) {
                    this.planes[index] = retorno.data;
                    console.log(this.planes);
                }
            });
            return yield modal.present();
        });
    }
    openNewCalendario() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _form_calendario_form_calendario_page__WEBPACK_IMPORTED_MODULE_18__["FormCalendarioPage"],
                componentProps: { servicioId: this.servicio.id }
            });
            modal.onDidDismiss().then((retorno) => {
                if (retorno.data) {
                    this.calendarios.push(retorno.data);
                }
            });
            return yield modal.present();
        });
    }
    editarCalendario(calendario, index) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _form_calendario_form_calendario_page__WEBPACK_IMPORTED_MODULE_18__["FormCalendarioPage"],
                componentProps: {
                    calendario: calendario,
                    servicioId: this.servicio.id
                }
            });
            modal.onDidDismiss().then((retorno) => {
                if (retorno.data == 'eliminar') {
                    this.calendariosServices.delete(this.calendarios[index].id);
                }
                if (retorno.data) {
                    this.calendarios[index] = retorno.data;
                    console.log(this.planes);
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
    openAddCategoria() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _form_categoria_form_categoria_page__WEBPACK_IMPORTED_MODULE_15__["FormCategoriaPage"],
                componentProps: {
                    comercioId: localStorage.getItem('comercio_seleccionadoId')
                }
            });
            return yield modal.present();
        });
    }
    presentAlertEliminar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Eliminar',
                message: 'Está seguro que desea eliminar el servicio?',
                buttons: [
                    {
                        text: 'Cancelar',
                        handler: (blah) => {
                        }
                    }, {
                        text: 'Eliminar',
                        handler: () => {
                            this.serviciosService.deleteS(this.route.snapshot.params.id);
                            this.navCtrl.back();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
FormServicioPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_3__["ImagePicker"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"] },
    { type: _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_4__["Crop"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__["File"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _Services_servicios_service__WEBPACK_IMPORTED_MODULE_9__["ServiciosService"] },
    { type: _Services_categorias_service__WEBPACK_IMPORTED_MODULE_10__["CategoriasService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _Services_planes_service__WEBPACK_IMPORTED_MODULE_12__["PlanesService"] },
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_14__["AngularFirestore"] },
    { type: _Services_loading_service__WEBPACK_IMPORTED_MODULE_16__["LoadingService"] },
    { type: _Services_toast_service__WEBPACK_IMPORTED_MODULE_17__["ToastService"] },
    { type: _Services_calendarios_service__WEBPACK_IMPORTED_MODULE_19__["CalendariosService"] }
];
FormServicioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-servicio',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./form-servicio.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-servicio/form-servicio.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./form-servicio.page.scss */ "./src/app/form-servicio/form-servicio.page.scss")).default]
    })
], FormServicioPage);



/***/ }),

/***/ "./src/app/models/servicio.ts":
/*!************************************!*\
  !*** ./src/app/models/servicio.ts ***!
  \************************************/
/*! exports provided: Servicio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Servicio", function() { return Servicio; });
class Servicio {
    constructor() {
        this.id = "";
        this.plan = {
            id: "",
            nombre: "",
            precio: 0,
            tipo: "",
            dias: ""
        };
        this.nombre = "";
        this.descripcion = "";
        this.categorias = [];
        this.profesionales = [];
        this.foto = "";
        this.createdAt = "";
        this.fechaInicio = "";
        this.pagoAdelantado = "true";
        this.descripcion_venta = "";
        this.recibirReservas = true;
        this.precio = 0;
        this.tipo = "";
        this.dias = "";
    }
    asignarValores(init) {
        Object.assign(this, init);
    }
}


/***/ })

}]);
//# sourceMappingURL=form-servicio-form-servicio-module.js.map