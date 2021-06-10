(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["details-pedido-details-pedido-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/details-pedido/details-pedido.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/details-pedido/details-pedido.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Detalle Pedido</ion-title>    \n    <ion-button fill=\"clear\" (click)=\"preguntarVaciar()\" color=\"danger\" slot=\"end\">\n      <ion-icon name=\"trash\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">   \n    \n  <div *ngIf=\"comercio.config.comandas\">\n    <span *ngIf=\"pedido.statusComanda == pEstado.rechazado\" style=\"color: red;\">Rechazado por Cocina</span>\n    <span *ngIf=\"pedido.statusComanda == pEstado.tomado\" style=\"color: green;\">En Curso</span>\n    <span *ngIf=\"pedido.statusComanda == pEstado.solicitado\" style=\"color: blue;\"> Solicitado</span>\n  </div><br>\n  <span *ngIf=\"pedido.statusCobro == cEstado.pendiente\"> <b style=\"color: blue;\"> Pendiente </b></span>\n  <span *ngIf=\"pedido.statusCobro == cEstado.suspendido\"> <b style=\"color: red;\"> Suspendido </b></span>\n  <span *ngIf=\"pedido.statusCobro == cEstado.cobrado\"> <b style=\"color: green;\"> Cobrado ({{pedido.metodoPago}})</b></span> \n  <span *ngIf=\"pedido.statusCobro == cEstado.reembolsado\"> <b style=\"color: red;\"> Reembolsado </b></span> <br>  \n  \n    \n    \n    <div  class=\"form-card\" *ngIf=\"comentarios.length > 0\">\n      \n      <ion-text color=\"primary\">\n        <h4>Comentarios</h4>\n      </ion-text> \n      \n      <ion-list>                   \n        <ion-item *ngFor=\"let comentario of comentarios; let i = index\">\n          <ion-label text-wrap>\n            <h2>{{comentario.text}}</h2>\n            <p>\n              {{comentario.senderEmail}}   \n              \n                <ion-icon name=\"time-outline\"></ion-icon>\n                {{comentario.createdAt.toDate() | date:'hh:mm aaa - dd/MM'}}\n        \n               \n            </p>            \n          </ion-label>         \n        </ion-item>      \n      </ion-list>\n    </div>   \n\n    <div  class=\"form-card\" *ngIf=\"pedido.productos.length > 0\">\n      <ion-text color=\"primary\">\n        <h4>Productos</h4>\n      </ion-text>       \n    <ion-list> \n      <ion-item-sliding *ngFor=\"let producto of pedido.productos; let i = index\">           \n        <app-card-producto\n          [item]=\"producto\"  \n          [showStock]=\"false\" \n          [showImage]=\"false\"\n          [showEnCarrito]=\"false\"\n          [multiplicador]=\"1\" \n        ></app-card-producto>        \n        <ion-item-options side=\"end\" *ngIf=\"pedido.statusCobro == cEstado.pendiente\">\n          <ion-item-option *ngIf=\"pedido.id != '' &&  producto.suspendido == 0\" color=\"danger\" (click)=\"suspenderProducto(producto,i)\"><ion-icon name=\"trash\"></ion-icon>Suspender</ion-item-option>\n          <ion-item-option *ngIf=\"pedido.id == '' &&  producto.suspendido == 0\" color=\"danger\" (click)=\"suspenderProducto(producto,i)\"><ion-icon name=\"trash\"></ion-icon>Eliminar</ion-item-option>\n          \n          <ion-item-option *ngIf=\"producto.suspendido == 1\" (click)=\"reanudarProducto(producto)\"><ion-icon name=\"trash\"></ion-icon>Reanudar</ion-item-option>\n\n          \n        </ion-item-options> \n      </ion-item-sliding> \n\n      <ion-text color=\"primary\" *ngIf=\"pedido.descuentos.length > 0\">\n        <h4>Descuentos</h4>\n      </ion-text> \n  \n      <span *ngFor=\"let descuento of pedido.descuentos; let i = index\">\n        <ion-item-sliding>\n          <ion-item>\n            <ion-label>                \n              <h2>\n                <b><span *ngIf=\"descuento.tipo== enumTipo.porcentaje\">%</span> <span *ngIf=\"descuento.tipo== enumTipo.monto\">$</span> {{descuento.monto}}</b>  {{descuento.motivo}}             \n              </h2>\n            </ion-label>\n          </ion-item>\n          <ion-item-options side=\"end\">\n            <ion-item-option color=\"danger\" (click)=\"eliminarDescuento(i)\"><ion-icon name=\"trash\" ></ion-icon> Eliminar</ion-item-option>\n          </ion-item-options>\n    \n        </ion-item-sliding>\n      </span>\n  \n      <ion-text color=\"primary\" *ngIf=\"pedido.recargos.length > 0\">\n        <h4>Recargos</h4>\n      </ion-text> \n  \n      <span *ngFor=\"let recargo of pedido.recargos; let i = index\">\n        <ion-item-sliding>\n          <ion-item>\n            <ion-label>                \n              <h2>\n                <b><span *ngIf=\"recargo.tipo== enumTipo.porcentaje\">%</span> <span *ngIf=\"recargo.tipo== enumTipo.monto\">$</span> {{recargo.monto}}</b>  {{recargo.motivo}}             \n              </h2>\n            </ion-label>\n          </ion-item>\n          <ion-item-options side=\"end\">\n            <ion-item-option color=\"danger\" (click)=\"eliminarRecargo(i)\"><ion-icon name=\"trash\" ></ion-icon> Eliminar</ion-item-option>\n          </ion-item-options>\n    \n        </ion-item-sliding>\n      </span>\n\n      <ion-button *ngIf=\"pedido.statusCobro == cEstado.pendiente\" class=\"button-rounded\" color=\"light\" (click)=\"agregarItem()\"><ion-icon name=\"add\"></ion-icon> Item</ion-button>     \n    </ion-list>\n\n    \n\n    </div>\n\n    <ion-button class=\"button-rounded\" color=\"light\"  *ngIf=\"!cliente.id\" (click)=\"seleccionarCliente()\"><ion-icon name=\"add\"></ion-icon> Cliente</ion-button>    \n    <ion-item-sliding class=\"item-card\" *ngIf=\"cliente.id\">\n      <app-card-usuario\n        [cliente]=\"cliente\"\n        (select)=\"seleccionarCliente()\">\n      </app-card-usuario>\n      <ion-item-options side=\"end\">\n        <ion-item-option color=\"danger\" (click)=\"eliminarCliente()\"><ion-icon name=\"trash\" ></ion-icon> Eliminar</ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n\n    <ion-button class=\"button-rounded\" color=\"light\" *ngIf=\"!pedido.mesaId\" (click)=\"seleccionarMesa()\" ><ion-icon name=\"add\"></ion-icon> Mesa</ion-button>\n    <ion-item-sliding class=\"item-card\" *ngIf=\"pedido.mesaId\">\n      <ion-item>\n        <ion-avatar slot=\"start\" (click)=\"seleccionarMesa()\">\n          <ion-icon name=\"grid-outline\"></ion-icon>\n        </ion-avatar>\n        <ion-label (click)=\"seleccionarMesa()\">\n          <h2>{{pedido.mesaNombre}}</h2>\n        </ion-label>      \n      </ion-item>\n\n      <ion-item-options side=\"end\">\n        <ion-item-option color=\"danger\" (click)=\"eliminarMesa()\"><ion-icon name=\"trash\" ></ion-icon> Eliminar</ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n\n    <ion-button *ngIf=\"!pedido.direccion.street_name\" (click)=\"seleccionarUbicacion()\" class=\"button-rounded\" color=\"light\"><ion-icon name=\"add\"></ion-icon><ion-icon name=\"location-outline\"></ion-icon>Dirección</ion-button>\n    <ion-item-sliding class=\"item-card\" *ngIf=\"pedido.direccion.street_name\">  \n      <ion-item>\n        <ion-avatar slot=\"start\" (click)=\"seleccionarUbicacion()\">\n          <ion-icon name=\"location-outline\"></ion-icon>\n        </ion-avatar>\n        <ion-label (click)=\"seleccionarUbicacion()\">\n          <h2>{{pedido.direccion.street_name}} {{pedido.direccion.street_number}},{{pedido.direccion.locality}},{{pedido.direccion.state}}. <br>\n            <span *ngIf=\"pedido.direccion.piso\"> Piso: {{pedido.direccion.piso}}</span>\n            <span *ngIf=\"pedido.direccion.puerta\"> Puerta: {{pedido.direccion.puerta}}</span>\n            {{pedido.direccion.distanciaDelComercio}} Km.\n          </h2>\n        </ion-label>      \n      </ion-item>\n  \n      <ion-item-options side=\"end\">\n        <ion-item-option color=\"danger\" (click)=\"eliminarDireccion()\"><ion-icon name=\"trash\" ></ion-icon> Eliminar</ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" >\n     \n      <ion-fab-button *ngIf=\"pedido.id != ''\" (click)=\"agregarComentario()\">\n        <ion-icon name=\"chatbubble-outline\"></ion-icon>\n      </ion-fab-button>\n      <br>\n      <ion-fab-button (click)=\"imprimir()\">\n        <ion-icon name=\"print-outline\"></ion-icon>\n      </ion-fab-button>\n      <br>\n      <ion-fab-button (click)=\"facturar()\">\n        <ion-icon name=\"document-outline\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>   \n</ion-content> \n\n<ion-footer class=\"ion-no-border ion-padding\">  \n    \n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-item *ngIf=\"pedido.statusCobro == cEstado.pendiente && cajas.length > 0\" class=\"item-card\">\n          <ion-label position=\"floating\">Caja</ion-label>\n          <ion-select [(ngModel)]=\"cajaSeleccionadaIndex\" (ionChange)=\"setearCaja()\">\n            <span *ngFor=\"let caja of cajas;let i=index\">\n              <ion-select-option [value]=\"i\" selected>{{caja.nombre}}</ion-select-option>\n            </span>          \n          </ion-select> \n        </ion-item>\n       \n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-item class=\"item-card\" *ngIf=\"pedido.statusCobro == cEstado.pendiente && cajas[cajaSeleccionadaIndex]\">\n          <ion-label position=\"floating\">Método</ion-label>\n          <ion-select [(ngModel)]=\"metodoPagoSeleccionado\">\n            <ion-select-option *ngIf=\"cajas[cajaSeleccionadaIndex].efectivo\" [value]=\"'efectivo'\">Efectivo</ion-select-option>\n            <ion-select-option *ngIf=\"cajas[cajaSeleccionadaIndex].debito\" [value]=\"'debito'\">Débito</ion-select-option>\n            <ion-select-option *ngIf=\"cajas[cajaSeleccionadaIndex].credito\" [value]=\"'credito'\">Crédito</ion-select-option>\n            <ion-select-option *ngIf=\"ctasCorrientes.length > 0\" [value]=\"'ctaCorriente'\">Cta. Corriente</ion-select-option>\n          </ion-select>    \n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  \n  <ion-item class=\"item-card\" *ngIf=\"pedido.statusCobro == cEstado.pendiente && metodoPagoSeleccionado == 'ctaCorriente'\">\n    <ion-label position=\"floating\" >Cuenta Corriente:</ion-label>\n    <ion-select  [(ngModel)]=\"ctaCorrienteSelecccionadaId\">\n      <ion-select-option *ngFor=\"let cta of ctasCorrientes\" [value]=\"cta.id\">{{cta.nombre}}</ion-select-option>\n    </ion-select>\n  </ion-item> \n\n  <ion-toolbar>   \n    <ion-button *ngIf=\"pedido.statusCobro == cEstado.suspendido\" class=\"button-rounded\"  color=\"primary\" (click)=\"reanudar()\">Reanudar</ion-button>\n    <ion-button *ngIf=\"pedido.statusCobro == cEstado.cobrado\" class=\"button-rounded\"  color=\"danger\" (click)=\"devolverPedido()\">Reembolsar: ${{total}}</ion-button>\n    <ion-button slot=\"start\" *ngIf=\"!comercio.config.cobrarDirectamente && pedido.statusCobro != cEstado.cobrado && pedido.statusCobro != cEstado.suspendido\" class=\"button-rounded\"  color=\"danger\" (click)=\"suspender()\">Suspender</ion-button>\n    <ion-button slot=\"end\" *ngIf=\"pedido.statusCobro != cEstado.cobrado && pedido.statusCobro != cEstado.suspendido\" class=\"button-rounded\"  color=\"success\" (click)=\"cobrar()\">Cobrar: ${{total}}</ion-button>\n  </ion-toolbar> \n\n</ion-footer>\n");

/***/ }),

/***/ "./src/app/Services/notificaciones.service.ts":
/*!****************************************************!*\
  !*** ./src/app/Services/notificaciones.service.ts ***!
  \****************************************************/
/*! exports provided: NotificacionesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificacionesService", function() { return NotificacionesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _usuarios_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./usuarios.service */ "./src/app/Services/usuarios.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _roles_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./roles.service */ "./src/app/Services/roles.service.ts");
/* harmony import */ var _notifificaciones_app_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./notifificaciones-app.service */ "./src/app/Services/notifificaciones-app.service.ts");
/* harmony import */ var _models_notificacion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models/notificacion */ "./src/app/models/notificacion.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");










let NotificacionesService = class NotificacionesService {
    constructor(usuariosService, rolesService, httpClient, notificacionesAppService) {
        this.usuariosService = usuariosService;
        this.rolesService = rolesService;
        this.httpClient = httpClient;
        this.notificacionesAppService = notificacionesAppService;
        this.httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        });
        this.httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]({});
        this.options = {
            headers: this.httpHeaders,
            params: this.httpParams
        };
    }
    enviarByMail(email, titulo, mensaje) {
        let sub = this.usuariosService.getByEmail(email).subscribe(snapshot => {
            console.log(snapshot);
            snapshot.forEach(snap => {
                var usuario = snap.payload.doc.data();
                usuario.id = snap.payload.doc.id;
                console.log(usuario);
                if (usuario.notificationCelulartoken) {
                    this.enviarHttp(usuario.notificationCelulartoken, titulo, mensaje).subscribe(data => {
                        console.log(data);
                    });
                }
                else {
                    console.log("notification_token no existe en el usuario");
                }
                if (usuario.notificacionesWebToken) {
                    this.enviarHttp(usuario.notificacionesWebToken, titulo, mensaje).subscribe(data => {
                        console.log(data);
                    });
                }
                else {
                    console.log("notificacionesWebToken no existe en el usuario");
                }
                let notificacion = new _models_notificacion__WEBPACK_IMPORTED_MODULE_8__["Notificacion"]();
                notificacion.userId = usuario.id;
                notificacion.titulo = titulo;
                notificacion.mensaje = mensaje;
                notificacion.tipo = "simple";
                notificacion.estado = "pendiente";
                this.notificacionesAppService.create(notificacion);
            });
            sub.unsubscribe();
        });
    }
    enviarById(id, titulo, mensaje) {
        let sub = this.usuariosService.get(id).subscribe(snapshot => {
            var usuario = snapshot.payload.data();
            usuario.id = snapshot.payload.id;
            console.log(usuario);
            if (usuario.notificationCelulartoken)
                this.enviarHttp(usuario.notificationCelulartoken, titulo, mensaje).subscribe(data => {
                    console.log(data);
                });
            if (usuario.notificacionesWebToken)
                this.enviarHttp(usuario.notificacionesWebToken, titulo, mensaje).subscribe(data => {
                    console.log(data);
                });
            let notificacion = new _models_notificacion__WEBPACK_IMPORTED_MODULE_8__["Notificacion"]();
            notificacion.userId = usuario.id;
            notificacion.titulo = titulo;
            notificacion.mensaje = mensaje;
            notificacion.tipo = "simple";
            notificacion.estado = "pendiente";
            this.notificacionesAppService.create(notificacion);
            sub.unsubscribe();
        });
    }
    enviarByRolId(id, titulo, mensaje) {
        console.log("!!!!!!!!!!!!!!");
        let sub = this.rolesService.get(id).subscribe(snapshot => {
            var rol = snapshot.payload.data();
            if (rol) {
                rol.id = snapshot.payload.id;
                console.log(rol);
                if (rol.estado == "aceptado") {
                    this.enviarById(rol.userId, titulo, mensaje);
                }
            }
            sub.unsubscribe();
        });
    }
    enviarHttp(token, titulo, mensaje) {
        this.httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': 'key=' + src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].firebase.claveServidor
        });
        let options = {
            headers: this.httpHeaders
        };
        let body = {
            "notification": {
                "title": titulo,
                "body": mensaje
            },
            "to": token
        };
        console.log(body);
        return this.httpClient.post("https://fcm.googleapis.com/fcm/send", body, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    }
    // Handle API errors
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', JSON.parse(error.error.message));
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(`Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        var mensaje = "Ocurrió un error, por favor intente más tarde";
        if (error.status == 0) {
            mensaje = "Error al conectar con el servidor, por favor verifique su conexión a internet";
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(mensaje);
    }
    ;
};
NotificacionesService.ctorParameters = () => [
    { type: _usuarios_service__WEBPACK_IMPORTED_MODULE_2__["UsuariosService"] },
    { type: _roles_service__WEBPACK_IMPORTED_MODULE_6__["RolesService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _notifificaciones_app_service__WEBPACK_IMPORTED_MODULE_7__["NotifificacionesAppService"] }
];
NotificacionesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], NotificacionesService);



/***/ }),

/***/ "./src/app/details-pedido/details-pedido-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/details-pedido/details-pedido-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: DetailsPedidoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPedidoPageRoutingModule", function() { return DetailsPedidoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _details_pedido_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./details-pedido.page */ "./src/app/details-pedido/details-pedido.page.ts");




const routes = [
    {
        path: '',
        component: _details_pedido_page__WEBPACK_IMPORTED_MODULE_3__["DetailsPedidoPage"]
    }
];
let DetailsPedidoPageRoutingModule = class DetailsPedidoPageRoutingModule {
};
DetailsPedidoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DetailsPedidoPageRoutingModule);



/***/ }),

/***/ "./src/app/details-pedido/details-pedido.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/details-pedido/details-pedido.module.ts ***!
  \*********************************************************/
/*! exports provided: DetailsPedidoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPedidoPageModule", function() { return DetailsPedidoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _details_pedido_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./details-pedido-routing.module */ "./src/app/details-pedido/details-pedido-routing.module.ts");
/* harmony import */ var _details_pedido_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./details-pedido.page */ "./src/app/details-pedido/details-pedido.page.ts");
/* harmony import */ var _Components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Components/components.module */ "./src/app/Components/components.module.ts");








let DetailsPedidoPageModule = class DetailsPedidoPageModule {
};
DetailsPedidoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _Components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _details_pedido_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailsPedidoPageRoutingModule"]
        ],
        declarations: [_details_pedido_page__WEBPACK_IMPORTED_MODULE_6__["DetailsPedidoPage"]]
    })
], DetailsPedidoPageModule);



/***/ }),

/***/ "./src/app/details-pedido/details-pedido.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/details-pedido/details-pedido.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbHMtcGVkaWRvL2RldGFpbHMtcGVkaWRvLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/details-pedido/details-pedido.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/details-pedido/details-pedido.page.ts ***!
  \*******************************************************/
/*! exports provided: DetailsPedidoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPedidoPage", function() { return DetailsPedidoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _form_cliente_form_cliente_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../form-cliente/form-cliente.page */ "./src/app/form-cliente/form-cliente.page.ts");
/* harmony import */ var _form_comentario_form_comentario_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../form-comentario/form-comentario.page */ "./src/app/form-comentario/form-comentario.page.ts");
/* harmony import */ var _form_mesa_form_mesa_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../form-mesa/form-mesa.page */ "./src/app/form-mesa/form-mesa.page.ts");
/* harmony import */ var _modal_input_direccion_modal_input_direccion_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modal-input-direccion/modal-input-direccion.page */ "./src/app/modal-input-direccion/modal-input-direccion.page.ts");
/* harmony import */ var _models_cliente__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../models/cliente */ "./src/app/models/cliente.ts");
/* harmony import */ var _models_comercio__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../models/comercio */ "./src/app/models/comercio.ts");
/* harmony import */ var _models_descuento__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../models/descuento */ "./src/app/models/descuento.ts");
/* harmony import */ var _models_localizacion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../models/localizacion */ "./src/app/models/localizacion.ts");
/* harmony import */ var _models_mesa__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../models/mesa */ "./src/app/models/mesa.ts");
/* harmony import */ var _models_movimientoCaja__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../models/movimientoCaja */ "./src/app/models/movimientoCaja.ts");
/* harmony import */ var _models_movimientoCtaCorriente__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../models/movimientoCtaCorriente */ "./src/app/models/movimientoCtaCorriente.ts");
/* harmony import */ var _models_pedido__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../models/pedido */ "./src/app/models/pedido.ts");
/* harmony import */ var _models_producto__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../models/producto */ "./src/app/models/producto.ts");
/* harmony import */ var _models_recargo__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../models/recargo */ "./src/app/models/recargo.ts");
/* harmony import */ var _select_cliente_select_cliente_page__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../select-cliente/select-cliente.page */ "./src/app/select-cliente/select-cliente.page.ts");
/* harmony import */ var _select_mesa_select_mesa_page__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../select-mesa/select-mesa.page */ "./src/app/select-mesa/select-mesa.page.ts");
/* harmony import */ var _select_product_select_product_page__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../select-product/select-product.page */ "./src/app/select-product/select-product.page.ts");
/* harmony import */ var _Services_authentication_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../Services/authentication.service */ "./src/app/Services/authentication.service.ts");
/* harmony import */ var _Services_cajas_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../Services/cajas.service */ "./src/app/Services/cajas.service.ts");
/* harmony import */ var _Services_clientes_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../Services/clientes.service */ "./src/app/Services/clientes.service.ts");
/* harmony import */ var _Services_comentarios_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../Services/comentarios.service */ "./src/app/Services/comentarios.service.ts");
/* harmony import */ var _Services_comercios_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../Services/comercios.service */ "./src/app/Services/comercios.service.ts");
/* harmony import */ var _Services_cta_corrientes_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../Services/cta-corrientes.service */ "./src/app/Services/cta-corrientes.service.ts");
/* harmony import */ var _Services_global_carrito_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../Services/global/carrito.service */ "./src/app/Services/global/carrito.service.ts");
/* harmony import */ var _Services_global_navegacion_parametros_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../Services/global/navegacion-parametros.service */ "./src/app/Services/global/navegacion-parametros.service.ts");
/* harmony import */ var _Services_impresora_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../Services/impresora.service */ "./src/app/Services/impresora.service.ts");
/* harmony import */ var _Services_mesas_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../Services/mesas.service */ "./src/app/Services/mesas.service.ts");
/* harmony import */ var _Services_modal_notificacion_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../Services/modal-notificacion.service */ "./src/app/Services/modal-notificacion.service.ts");
/* harmony import */ var _Services_movimientos_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../Services/movimientos.service */ "./src/app/Services/movimientos.service.ts");
/* harmony import */ var _Services_notificaciones_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../Services/notificaciones.service */ "./src/app/Services/notificaciones.service.ts");
/* harmony import */ var _Services_pedido_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../Services/pedido.service */ "./src/app/Services/pedido.service.ts");
/* harmony import */ var _Services_productos_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../Services/productos.service */ "./src/app/Services/productos.service.ts");
/* harmony import */ var _Services_toast_service__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../Services/toast.service */ "./src/app/Services/toast.service.ts");
/* harmony import */ var _Services_variaciones_stocks_service__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../Services/variaciones-stocks.service */ "./src/app/Services/variaciones-stocks.service.ts");
/* harmony import */ var _Services_ventas_service__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../Services/ventas.service */ "./src/app/Services/ventas.service.ts");








































let DetailsPedidoPage = class DetailsPedidoPage {
    constructor(comerciosService, cajasService, toastServices, router, modalController, ctasCorrientesService, variacionesStockService, authenticationService, firestore, ventasService, movimientosService, notificacionesService, pedidosService, productosService, impresoraService, comentariosService, alertController, clientesService, mesasServices, navParamService, navCtrl, carritoService, modalNotificacion) {
        this.comerciosService = comerciosService;
        this.cajasService = cajasService;
        this.toastServices = toastServices;
        this.router = router;
        this.modalController = modalController;
        this.ctasCorrientesService = ctasCorrientesService;
        this.variacionesStockService = variacionesStockService;
        this.authenticationService = authenticationService;
        this.firestore = firestore;
        this.ventasService = ventasService;
        this.movimientosService = movimientosService;
        this.notificacionesService = notificacionesService;
        this.pedidosService = pedidosService;
        this.productosService = productosService;
        this.impresoraService = impresoraService;
        this.comentariosService = comentariosService;
        this.alertController = alertController;
        this.clientesService = clientesService;
        this.mesasServices = mesasServices;
        this.navParamService = navParamService;
        this.navCtrl = navCtrl;
        this.carritoService = carritoService;
        this.modalNotificacion = modalNotificacion;
        this.enumTipoMovimientoCaja = _models_movimientoCaja__WEBPACK_IMPORTED_MODULE_14__["EnumTipoMovimientoCaja"];
        this.subPedidos = [];
        this.cajas = [];
        this.cajaSeleccionadaIndex = 0;
        this.metodoPagoSeleccionado = "";
        this.cantidadMetodos = 0;
        this.ctasCorrientes = [];
        this.cliente = "";
        this.metodoTexto = "";
        this.ctaCorrienteSelecccionadaId = "";
        this.pEstado = _models_pedido__WEBPACK_IMPORTED_MODULE_16__["EnumEstadoCocina"];
        this.comentarios = [];
        this.cEstado = _models_pedido__WEBPACK_IMPORTED_MODULE_16__["EnumEstadoCobro"];
        this.enumTipo = _models_descuento__WEBPACK_IMPORTED_MODULE_11__["EnumTipoDescuento"];
        this.total = 0;
        this.comercio = new _models_comercio__WEBPACK_IMPORTED_MODULE_10__["Comercio"]();
        this.mesa = new _models_mesa__WEBPACK_IMPORTED_MODULE_13__["Mesa"]();
        this.pedido = new _models_pedido__WEBPACK_IMPORTED_MODULE_16__["Pedido"]();
        this.cliente = new _models_cliente__WEBPACK_IMPORTED_MODULE_9__["Cliente"]();
        this.subPedidos = [];
        this.comercio.asignarValores(this.comerciosService.getSelectedCommerceValue());
        console.log(this.comercio);
        this.pedido = new _models_pedido__WEBPACK_IMPORTED_MODULE_16__["Pedido"]();
        if (Array.isArray(this.navParamService.param)) { //si es un array de pedidos porque viene de cierre de mesa
            console.log("ARRAY");
            if (this.navParamService.param[0] instanceof _models_pedido__WEBPACK_IMPORTED_MODULE_16__["Pedido"]) {
                console.log("Pedido");
                this.pedido.productos = [];
                this.pedido.mesaId = this.navParamService.param[0].mesaId;
                this.pedido.mesaNombre = this.navParamService.param[0].mesaNombre;
                this.pedido.clienteId = this.navParamService.param[0].clienteId;
                this.pedido.clienteNombre = this.navParamService.param[0].clienteNombre;
                this.navParamService.param.forEach(pedido => {
                    this.subPedidos.push(pedido);
                    pedido.productos.forEach(element => {
                        this.pedido.productos.push(element);
                    });
                    pedido.descuentos.forEach(element => {
                        this.pedido.descuentos.push(element);
                    });
                    pedido.recargos.forEach(element => {
                        this.pedido.recargos.push(element);
                    });
                });
                this.getTotal();
                console.log(this.pedido);
            }
        }
        else if (this.navParamService.param instanceof _models_pedido__WEBPACK_IMPORTED_MODULE_16__["Pedido"]) { //si es un solo pedido 
            this.pedido.asignarValores(this.navParamService.param);
            console.log(this.pedido);
            this.getTotal();
        }
        else {
            this.pedido = new _models_pedido__WEBPACK_IMPORTED_MODULE_16__["Pedido"]();
        }
        this.cajasService.list().subscribe((cajas) => {
            for (let i = 0; i < cajas.length; i++) {
                if (cajas[i].estado == "abierta") {
                    this.cajas.push(cajas[i]);
                }
            }
            console.log(this.cajas);
            if (this.cajas.length == 0) {
                this.toastServices.alert("Debes tener al menos una caja abierta", "");
                this.modalController.dismiss();
                this.router.navigate(['/list-cajas']);
            }
            else {
                this.setSavedCaja();
            }
        });
        if (this.pedido.clienteId != "") {
            console.log(this.pedido.clienteId);
            this.clientesService.get(this.pedido.clienteId).subscribe(resp => {
                console.log(resp);
                if (resp)
                    this.cliente = resp;
            });
            this.ctasCorrientesService.getByCliente(this.pedido.clienteId).subscribe(snapshot => {
                snapshot.forEach(snap => {
                    let cta = snap.payload.doc.data();
                    cta.id = snap.payload.doc.id;
                    this.ctasCorrientes.push(cta);
                    console.log(cta);
                });
            });
        }
        if (this.pedido.mesaId) {
            this.mesasServices.get(this.pedido.mesaId).subscribe(resp => {
                this.mesa = resp;
            });
        }
        if (this.pedido.id) {
            this.comentariosService.setearPath("pedidos", this.pedido.id);
            let obs = this.comentariosService.list().subscribe(data => {
                this.comentarios = data;
                //obs.unsubscribe();
            });
        }
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
    }
    eliminarDescuento(i) {
        this.pedido.descuentos.splice(i, 1);
        this.actualizarPedido();
    }
    eliminarRecargo(i) {
        this.pedido.recargos.splice(i, 1);
        this.actualizarPedido();
    }
    eliminarCliente() {
        this.cliente = new _models_cliente__WEBPACK_IMPORTED_MODULE_9__["Cliente"]();
        this.pedido.clienteId = "";
        this.pedido.clienteEmail = "";
        this.pedido.clienteNombre = "";
        this.actualizarPedido();
    }
    eliminarProducto(p, i) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Está seguro que desea eliminar el producto' + p.nombre + '?',
                buttons: [
                    {
                        text: 'Cancelar',
                        handler: (blah) => {
                        }
                    }, {
                        text: 'Eliminar',
                        handler: () => {
                            this.pedido.productos.splice(i, 1);
                            if (this.pedido.productos.length > 0) {
                                this.actualizarPedido();
                            }
                            else {
                                this.pedidosService.delete(this.pedido.id).then(data => {
                                    console.log("Pedido Eliminado");
                                });
                            }
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    seleccionarCliente() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _select_cliente_select_cliente_page__WEBPACK_IMPORTED_MODULE_19__["SelectClientePage"],
                cssClass: 'modal-custom-wrapper'
            });
            modal.present().then(() => {
            });
            modal.onDidDismiss()
                .then((retorno) => {
                if (retorno.data) {
                    if (retorno.data == "nuevo") {
                        this.abrirNuevoCliente();
                    }
                    if (retorno.data != "nuevo") {
                        this.cliente = retorno.data.item;
                        this.pedido.clienteEmail = this.cliente.email;
                        this.pedido.clienteId = this.cliente.id;
                        this.pedido.clienteNombre = this.cliente.nombre;
                        this.actualizarPedido();
                    }
                }
            });
            return yield modal.present();
        });
    }
    abrirNuevoCliente() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _form_cliente_form_cliente_page__WEBPACK_IMPORTED_MODULE_5__["FormClientePage"],
                cssClass: 'modal-custom-wrapper'
            });
            modal.present().then(() => {
            });
            modal.onDidDismiss()
                .then((retorno) => {
                if (retorno.data) {
                    this.cliente = retorno.data.item;
                    this.pedido.clienteEmail = this.cliente.email;
                    this.pedido.clienteId = this.cliente.id;
                    this.pedido.clienteNombre = this.cliente.nombre;
                    this.actualizarPedido();
                }
            });
            return yield modal.present();
        });
    }
    seleccionarMesa() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _select_mesa_select_mesa_page__WEBPACK_IMPORTED_MODULE_20__["SelectMesaPage"],
                cssClass: 'modal-custom-wrapper'
            });
            modal.present().then(() => {
            });
            modal.onDidDismiss()
                .then((retorno) => {
                if (retorno.data) {
                    if (retorno.data == "nuevo") {
                    }
                    else {
                        this.mesa = retorno.data.item;
                        this.pedido.mesaId = this.mesa.id;
                        this.pedido.mesaNombre = this.mesa.nombre;
                        this.actualizarPedido();
                    }
                }
            });
            return yield modal.present();
        });
    }
    abrirNuevaMesa() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _form_mesa_form_mesa_page__WEBPACK_IMPORTED_MODULE_7__["FormMesaPage"],
                cssClass: 'modal-custom-wrapper'
            });
            modal.present().then(() => {
            });
            modal.onDidDismiss()
                .then((retorno) => {
                if (retorno.data) {
                    this.mesa = retorno.data.item;
                    this.pedido.mesaId = this.mesa.id;
                    this.pedido.mesaNombre = this.mesa.nombre;
                    this.actualizarPedido();
                }
            });
            return yield modal.present();
        });
    }
    eliminarMesa() {
        this.mesa = new _models_mesa__WEBPACK_IMPORTED_MODULE_13__["Mesa"]();
        this.pedido.mesaId = "";
        this.pedido.mesaNombre = "";
        this.actualizarPedido();
    }
    setSavedCaja() {
        this.cajaSeleccionadaIndex = Number(localStorage.getItem('cajaSeleccionadaIndex'));
        if (!this.cajaSeleccionadaIndex) {
            this.cajaSeleccionadaIndex = 0;
        }
        this.setearCaja();
    }
    devolverPedido() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Está seguro que desea devolver el dinero?',
                buttons: [
                    {
                        text: 'Cancelar',
                        handler: (blah) => {
                        }
                    }, {
                        text: 'Si',
                        handler: () => {
                            this.devolver();
                            this.navCtrl.back();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    setearCaja() {
        localStorage.setItem('cajaSeleccionadaIndex', this.cajaSeleccionadaIndex.toString());
        this.cajaSeleccionada = this.cajas[this.cajaSeleccionadaIndex];
        var setear = "";
        this.cantidadMetodos = 0;
        if (this.cajas[this.cajaSeleccionadaIndex].debito) {
            setear = "debito";
            this.metodoTexto = "Solo Débito";
            this.cantidadMetodos++;
        }
        if (this.cajas[this.cajaSeleccionadaIndex].credito) {
            setear = "credito";
            this.metodoTexto = "Solo Crédito";
            this.cantidadMetodos++;
        }
        if (this.cajas[this.cajaSeleccionadaIndex].efectivo) {
            setear = "efectivo";
            this.metodoTexto = "Solo Efectivo";
            this.cantidadMetodos++;
        }
        this.metodoPagoSeleccionado = "";
        if (this.cantidadMetodos == 1) {
            this.metodoPagoSeleccionado = setear;
        }
    }
    devolver() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.pedido.statusCobro == this.cEstado.cobrado) {
                this.cajaSeleccionada = this.cajas[this.cajaSeleccionadaIndex];
                if (this.pedido.productos.length > 0) {
                    let productosId = [];
                    this.pedido.productos.forEach(p => {
                        let deltaStock = 0;
                        if (p.valorPor)
                            deltaStock = (Number(p.cantidad) * Number(p.valorPor));
                        else
                            deltaStock = Number(p.cantidad);
                        this.productosService.updateStock(deltaStock, p.id);
                        productosId.push(p.id);
                    });
                    this.actualizarMontosCajaDevolucion();
                    if (this.comercio.config.movimientosCajas) {
                        if (this.metodoPagoSeleccionado != "ctaCorriente") {
                            var movimiento = new _models_movimientoCaja__WEBPACK_IMPORTED_MODULE_14__["MovimientoCaja"](this.authenticationService.getUID(), this.authenticationService.getNombre());
                            movimiento.tipo = this.enumTipoMovimientoCaja.pago;
                            movimiento.id = this.firestore.createId();
                            movimiento.clienteId = this.pedido.clienteId;
                            movimiento.cajaId = this.cajaSeleccionada.id;
                            movimiento.metodoPago = this.metodoPagoSeleccionado;
                            movimiento.monto = this.pedidosService.getTotal(this.pedido);
                            movimiento.ventaId = this.pedido.id;
                            movimiento.vendedorNombre = this.authenticationService.getNombre();
                            movimiento.motivo = "Venta de productos";
                            this.movimientosService.setearPath(this.cajaSeleccionada.id);
                            this.movimientosService.add(movimiento).then(data => {
                                console.log(data);
                            });
                        }
                        else {
                            var deposito = new _models_movimientoCtaCorriente__WEBPACK_IMPORTED_MODULE_15__["MovimientoCtaCorriente"](this.authenticationService.getUID(), this.authenticationService.getNombre());
                            deposito.id = this.firestore.createId();
                            deposito.clienteId = this.pedido.clienteId;
                            deposito.ctaCorrienteId = this.ctaCorrienteSelecccionadaId;
                            deposito.motivo = "Venta de productos";
                            deposito.monto = this.pedidosService.getTotal(this.pedido);
                            deposito.vendedorNombre = this.authenticationService.getNombre();
                            console.log(deposito.vendedorNombre);
                            deposito.ventaId = this.pedido.id;
                            this.movimientosService.crearMovimientoCtaCorriente(deposito);
                        }
                    }
                    this.pedido.statusCobro = this.cEstado.reembolsado;
                    if (this.subPedidos.length > 0) { //si es un array de pedidos porque viene de cierre de mesa                
                        this.subPedidos.forEach(pedido => {
                            pedido.statusCobro = this.cEstado.pendiente;
                            pedido.metodoPago = this.metodoPagoSeleccionado;
                            this.actualizarPedido();
                        });
                    }
                    else {
                        this.actualizarPedido();
                    }
                }
            }
        });
    }
    suspender() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Está seguro que desea suspender el pedido?',
                message: '',
                buttons: [
                    {
                        text: 'No',
                        handler: (blah) => {
                        }
                    }, {
                        text: 'Si',
                        handler: () => {
                            this.pedido.statusCobro = this.cEstado.suspendido;
                            this.modalNotificacion.trash("Suspendido", "El pedido ahora se encuentra en estado suspendido.");
                            this.actualizarPedido();
                            this.navCtrl.back();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    reanudar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Está seguro que desea reanudar el pedido?',
                message: '',
                buttons: [
                    {
                        text: 'No',
                        handler: (blah) => {
                        }
                    }, {
                        text: 'Si',
                        handler: () => {
                            this.modalNotificacion.success("Reanudado", "El pedido ahora se encuentra en estado pendiente.");
                            this.pedido.statusCobro = this.cEstado.pendiente;
                            this.actualizarPedido();
                            this.navCtrl.back();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    agregarItem() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _select_product_select_product_page__WEBPACK_IMPORTED_MODULE_21__["SelectProductPage"],
                cssClass: 'modal-custom-wrapper'
            });
            modal.onDidDismiss()
                .then((retorno) => {
                if (retorno.data) {
                    if (retorno.data instanceof _models_producto__WEBPACK_IMPORTED_MODULE_17__["Producto"]) {
                        const p = JSON.parse(JSON.stringify(retorno.data));
                        this.pedido.productos.push(p);
                        this.actualizarPedido();
                    }
                    if (retorno.data instanceof _models_descuento__WEBPACK_IMPORTED_MODULE_11__["Descuento"]) {
                        const p = JSON.parse(JSON.stringify(retorno.data));
                        this.pedido.descuentos.push(p);
                        this.actualizarPedido();
                    }
                    if (retorno.data instanceof _models_recargo__WEBPACK_IMPORTED_MODULE_18__["Recargo"]) {
                        const p = JSON.parse(JSON.stringify(retorno.data));
                        this.pedido.recargos.push(p);
                        this.actualizarPedido();
                    }
                    //sumar total productos
                    this.total = this.getTotal();
                }
                //  this.seleccionarProducto(retorno.data)
            });
            return yield modal.present();
        });
    }
    actualizarPedido() {
        if (this.pedido.id) {
            this.pedido.direccion = JSON.parse(JSON.stringify(this.pedido.direccion));
            this.pedidosService.update(this.pedido).then(data => {
                console.log(data);
            });
        }
    }
    cobrar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.cajas.length == 0) {
                this.toastServices.alert("Debe abrir una caja antes de continuar", "De este modo podrá tener un registro de los pagos");
                return;
            }
            if (this.metodoPagoSeleccionado == "") {
                this.toastServices.alert("Por favor seleccione un método de pago antes de continuar", "De este modo podrá tener un registro de los pagos");
                return;
            }
            if (this.metodoPagoSeleccionado == "ctaCorriente") {
                if (this.ctaCorrienteSelecccionadaId == "") {
                    this.toastServices.alert("Por favor seleccione una cuenta corriente antes de continuar", "");
                    return;
                }
            }
            this.carritoService.vaciar();
            this.cajaSeleccionada = this.cajas[this.cajaSeleccionadaIndex];
            console.log(this.cajaSeleccionada);
            if (this.pedido.productos.length > 0) {
                let productosId = [];
                this.pedido.productos.forEach(p => {
                    delete p.keywords;
                    let deltaStock = 0;
                    if (p.valorPor)
                        deltaStock = -(Number(p.cantidad) * Number(p.valorPor));
                    else
                        deltaStock = -Number(p.cantidad);
                    this.productosService.updateStock(deltaStock, p.id);
                    productosId.push(p.id);
                });
                console.log("!!!!!!!!!!!!!!!!!");
                this.actualizarMontosCaja();
                if (this.comercio.config.movimientosCajas) {
                    if (this.metodoPagoSeleccionado != "ctaCorriente") {
                        var pago = new _models_movimientoCaja__WEBPACK_IMPORTED_MODULE_14__["MovimientoCaja"](this.authenticationService.getUID(), this.authenticationService.getNombre());
                        pago.id = this.firestore.createId();
                        pago.tipo = this.enumTipoMovimientoCaja.pago;
                        pago.clienteId = this.pedido.clienteId;
                        pago.cajaId = this.cajaSeleccionada.id;
                        pago.metodoPago = this.metodoPagoSeleccionado;
                        pago.monto = this.getTotal();
                        pago.vendedorNombre = this.authenticationService.getNombre();
                        pago.motivo = "Venta de productos";
                        this.movimientosService.setearPath(this.cajaSeleccionada.id);
                        this.movimientosService.add(pago).then(data => {
                            console.log(data);
                        });
                    }
                    else {
                        var extraccion = new _models_movimientoCtaCorriente__WEBPACK_IMPORTED_MODULE_15__["MovimientoCtaCorriente"](this.authenticationService.getUID(), this.authenticationService.getNombre());
                        extraccion.id = this.firestore.createId();
                        extraccion.clienteId = this.pedido.clienteId;
                        extraccion.ctaCorrienteId = this.ctaCorrienteSelecccionadaId;
                        extraccion.motivo = "Venta de productos";
                        extraccion.monto = -Number(this.getTotal());
                        extraccion.vendedorNombre = this.authenticationService.getNombre();
                        console.log(extraccion.vendedorNombre);
                        this.movimientosService.crearMovimientoCtaCorriente(extraccion);
                    }
                }
            }
            this.pedido.statusCobro = this.cEstado.cobrado;
            this.pedido.metodoPago = this.metodoPagoSeleccionado;
            this.pedido.cajaUtilizada = this.cajaSeleccionada.id;
            if (this.subPedidos.length > 0) { //si es un array de pedidos porque viene de cierre de mesa      
                this.subPedidos.forEach(pedido => {
                    pedido.statusCobro = this.cEstado.cobrado;
                    pedido.metodoPago = this.metodoPagoSeleccionado;
                    this.actualizarPedido();
                });
            }
            else if (this.pedido.id == "") {
                this.pedido.direccion = JSON.parse(JSON.stringify(this.pedido.direccion));
                this.pedidosService.add(this.pedido).then(data => {
                    console.log("agregado pedido");
                    console.log(data);
                });
            }
            else {
                this.actualizarPedido();
            }
            console.log(this.pedido);
            if (this.comercio.config.cobrarDirectamente) {
                let impresora = this.impresoraService.obtenerImpresora();
                if (impresora.pedidosFinalizar) {
                    this.imprimir();
                }
            }
            this.modalNotificacion.success("Cobrado", "El pedido ha sido cobrado.");
            this.navCtrl.back();
        });
    }
    actualizarMontosCajaDevolucion() {
        if (this.metodoPagoSeleccionado == "efectivo") {
            this.cajaSeleccionada.totalEfectivo = Number(this.cajaSeleccionada.totalEfectivo) - Number(this.getTotal());
        }
        if (this.metodoPagoSeleccionado == "credito") {
            this.cajaSeleccionada.totalCredito = Number(this.cajaSeleccionada.totalCredito) - Number(this.getTotal());
        }
        if (this.metodoPagoSeleccionado == "debito") {
            this.cajaSeleccionada.totalDebito = Number(this.cajaSeleccionada.totalDebito) - Number(this.getTotal());
        }
        const param1 = JSON.parse(JSON.stringify(this.cajaSeleccionada));
        this.cajasService.update(param1);
    }
    actualizarMontosCaja() {
        if (this.metodoPagoSeleccionado == "efectivo") {
            this.cajaSeleccionada.totalEfectivo = Number(this.cajaSeleccionada.totalEfectivo) + Number(this.getTotal());
        }
        if (this.metodoPagoSeleccionado == "credito") {
            this.cajaSeleccionada.totalCredito = Number(this.cajaSeleccionada.totalCredito) + Number(this.getTotal());
        }
        if (this.metodoPagoSeleccionado == "debito") {
            this.cajaSeleccionada.totalDebito = Number(this.cajaSeleccionada.totalDebito) + Number(this.getTotal());
        }
        const param1 = JSON.parse(JSON.stringify(this.cajaSeleccionada));
        this.actualizarPedido();
    }
    suspenderProducto(producto, index) {
        producto.suspendido = 1;
        producto.estadoComanda = "Listo";
        console.log(producto);
        if (this.pedido.id != "") {
            this.actualizarPedido();
        }
        else { //significa que es un cobro directo
            this.carritoService.eliminarProducto(index);
        }
    }
    reanudarProducto(producto) {
        producto.suspendido = 0;
        console.log(producto);
        this.actualizarPedido();
    }
    imprimir() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.impresoraService.impresionTicket(this.pedido);
        });
    }
    agregarComentario() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _form_comentario_form_comentario_page__WEBPACK_IMPORTED_MODULE_6__["FormComentarioPage"],
                cssClass: 'modal-custom-wrapper',
                componentProps: {
                    comentableId: this.pedido.id,
                    comentableTipo: "pedidos"
                }
            });
            /*modal.onDidDismiss()
            .then((retorno) => {
              if(retorno.data)
                this.comentariosService.add(retorno.data).then(data=>{
                  console.log("comentario agregado");
                })
            });*/
            return yield modal.present();
        });
    }
    getTotal() {
        this.total = this.pedidosService.getTotal(this.pedido);
        console.log(this.total);
        return this.total;
    }
    preguntarVaciar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Está seguro que desea eliminar el pedido?',
                message: '',
                buttons: [
                    {
                        text: 'No',
                        handler: (blah) => {
                        }
                    }, {
                        text: 'Si',
                        handler: () => {
                            this.carritoService.vaciar();
                            if (this.pedido.id) {
                                this.pedidosService.delete(this.pedido.id).then(data => {
                                    console.log("Eliminado");
                                });
                                this.modalNotificacion.trash("Eliminado", "El pedido se ha eliminado por completo");
                            }
                            this.navCtrl.back();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    facturar() {
    }
    seleccionarUbicacion() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modal_input_direccion_modal_input_direccion_page__WEBPACK_IMPORTED_MODULE_8__["ModalInputDireccionPage"],
                componentProps: { localizacion: this.pedido.direccion },
                cssClass: 'modal-map'
            });
            modal.onDidDismiss()
                .then((retorno) => {
                if (retorno.data) {
                    this.pedido.direccion = retorno.data;
                    this.actualizarPedido();
                }
                console.log(this.pedido);
            });
            modal.present();
        });
    }
    eliminarDireccion() {
        this.pedido.direccion = new _models_localizacion__WEBPACK_IMPORTED_MODULE_12__["Localizacion"]();
        this.actualizarPedido();
    }
};
DetailsPedidoPage.ctorParameters = () => [
    { type: _Services_comercios_service__WEBPACK_IMPORTED_MODULE_26__["ComerciosService"] },
    { type: _Services_cajas_service__WEBPACK_IMPORTED_MODULE_23__["CajasService"] },
    { type: _Services_toast_service__WEBPACK_IMPORTED_MODULE_37__["ToastService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _Services_cta_corrientes_service__WEBPACK_IMPORTED_MODULE_27__["CtaCorrientesService"] },
    { type: _Services_variaciones_stocks_service__WEBPACK_IMPORTED_MODULE_38__["VariacionesStocksService"] },
    { type: _Services_authentication_service__WEBPACK_IMPORTED_MODULE_22__["AuthenticationService"] },
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] },
    { type: _Services_ventas_service__WEBPACK_IMPORTED_MODULE_39__["VentasService"] },
    { type: _Services_movimientos_service__WEBPACK_IMPORTED_MODULE_33__["MovimientosService"] },
    { type: _Services_notificaciones_service__WEBPACK_IMPORTED_MODULE_34__["NotificacionesService"] },
    { type: _Services_pedido_service__WEBPACK_IMPORTED_MODULE_35__["PedidoService"] },
    { type: _Services_productos_service__WEBPACK_IMPORTED_MODULE_36__["ProductosService"] },
    { type: _Services_impresora_service__WEBPACK_IMPORTED_MODULE_30__["ImpresoraService"] },
    { type: _Services_comentarios_service__WEBPACK_IMPORTED_MODULE_25__["ComentariosService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _Services_clientes_service__WEBPACK_IMPORTED_MODULE_24__["ClientesService"] },
    { type: _Services_mesas_service__WEBPACK_IMPORTED_MODULE_31__["MesasService"] },
    { type: _Services_global_navegacion_parametros_service__WEBPACK_IMPORTED_MODULE_29__["NavegacionParametrosService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _Services_global_carrito_service__WEBPACK_IMPORTED_MODULE_28__["CarritoService"] },
    { type: _Services_modal_notificacion_service__WEBPACK_IMPORTED_MODULE_32__["ModalNotificacionService"] }
];
DetailsPedidoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-details-pedido',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./details-pedido.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/details-pedido/details-pedido.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./details-pedido.page.scss */ "./src/app/details-pedido/details-pedido.page.scss")).default]
    })
], DetailsPedidoPage);



/***/ }),

/***/ "./src/app/models/notificacion.ts":
/*!****************************************!*\
  !*** ./src/app/models/notificacion.ts ***!
  \****************************************/
/*! exports provided: Notificacion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Notificacion", function() { return Notificacion; });
class Notificacion {
    constructor() {
        this.id = "";
        this.userId = "";
        this.foto = "";
        this.titulo = "";
        this.tipo = "";
        this.estado = "pendiente"; //pendiente-leida
    }
    asignarValores(init) {
        Object.assign(this, init);
    }
}


/***/ })

}]);
//# sourceMappingURL=details-pedido-details-pedido-module.js.map