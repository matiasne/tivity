(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm/button-active-5da929d4.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-5da929d4.js ***!
  \*********************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_92848855_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-92848855.js */ "./node_modules/@ionic/core/dist/esm/index-92848855.js");
/* harmony import */ var _index_eea61379_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-eea61379.js */ "./node_modules/@ionic/core/dist/esm/index-eea61379.js");
/* harmony import */ var _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./haptic-7b8ba70a.js */ "./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js");




const createButtonActiveGesture = (el, isButton) => {
    let currentTouchedButton;
    let initialTouchedButton;
    const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
        if (typeof document === 'undefined') {
            return;
        }
        const target = document.elementFromPoint(x, y);
        if (!target || !isButton(target)) {
            clearActiveButton();
            return;
        }
        if (target !== currentTouchedButton) {
            clearActiveButton();
            setActiveButton(target, hapticFeedbackFn);
        }
    };
    const setActiveButton = (button, hapticFeedbackFn) => {
        currentTouchedButton = button;
        if (!initialTouchedButton) {
            initialTouchedButton = currentTouchedButton;
        }
        const buttonToModify = currentTouchedButton;
        Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.add('ion-activated'));
        hapticFeedbackFn();
    };
    const clearActiveButton = (dispatchClick = false) => {
        if (!currentTouchedButton) {
            return;
        }
        const buttonToModify = currentTouchedButton;
        Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.remove('ion-activated'));
        /**
         * Clicking on one button, but releasing on another button
         * does not dispatch a click event in browsers, so we
         * need to do it manually here. Some browsers will
         * dispatch a click if clicking on one button, dragging over
         * another button, and releasing on the original button. In that
         * case, we need to make sure we do not cause a double click there.
         */
        if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
            currentTouchedButton.click();
        }
        currentTouchedButton = undefined;
    };
    return Object(_index_eea61379_js__WEBPACK_IMPORTED_MODULE_1__["createGesture"])({
        el,
        gestureName: 'buttonActiveDrag',
        threshold: 0,
        onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["a"]),
        onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["b"]),
        onEnd: () => {
            clearActiveButton(true);
            Object(_haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
            initialTouchedButton = undefined;
        }
    });
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
    if (delegate) {
        return delegate.attachViewToDom(container, component, componentProps, cssClasses);
    }
    if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
        throw new Error('framework delegate is missing');
    }
    const el = (typeof component === 'string')
        ? container.ownerDocument && container.ownerDocument.createElement(component)
        : component;
    if (cssClasses) {
        cssClasses.forEach(c => el.classList.add(c));
    }
    if (componentProps) {
        Object.assign(el, componentProps);
    }
    container.appendChild(el);
    if (el.componentOnReady) {
        await el.componentOnReady();
    }
    return el;
};
const detachComponent = (delegate, element) => {
    if (element) {
        if (delegate) {
            const container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
        }
        element.remove();
    }
    return Promise.resolve();
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelectionEnd; });
const HapticEngine = {
    getEngine() {
        const win = window;
        return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
    },
    available() {
        return !!this.getEngine();
    },
    isCordova() {
        return !!window.TapticEngine;
    },
    isCapacitor() {
        const win = window;
        return !!win.Capacitor;
    },
    impact(options) {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.impact({ style });
    },
    notification(options) {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.notification({ style });
    },
    selection() {
        this.impact({ style: 'light' });
    },
    selectionStart() {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        if (this.isCapacitor()) {
            engine.selectionStart();
        }
        else {
            engine.gestureSelectionStart();
        }
    },
    selectionChanged() {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        if (this.isCapacitor()) {
            engine.selectionChanged();
        }
        else {
            engine.gestureSelectionChanged();
        }
    },
    selectionEnd() {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        if (this.isCapacitor()) {
            engine.selectionEnd();
        }
        else {
            engine.gestureSelectionEnd();
        }
    }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
    HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
    HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
    HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
    HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
    HapticEngine.impact(options);
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
    'bubbles': {
        dur: 1000,
        circles: 9,
        fn: (dur, index, total) => {
            const animationDelay = `${(dur * index / total) - dur}ms`;
            const angle = 2 * Math.PI * index / total;
            return {
                r: 5,
                style: {
                    'top': `${9 * Math.sin(angle)}px`,
                    'left': `${9 * Math.cos(angle)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'circles': {
        dur: 1000,
        circles: 8,
        fn: (dur, index, total) => {
            const step = index / total;
            const animationDelay = `${(dur * step) - dur}ms`;
            const angle = 2 * Math.PI * step;
            return {
                r: 5,
                style: {
                    'top': `${9 * Math.sin(angle)}px`,
                    'left': `${9 * Math.cos(angle)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'circular': {
        dur: 1400,
        elmDuration: true,
        circles: 1,
        fn: () => {
            return {
                r: 20,
                cx: 48,
                cy: 48,
                fill: 'none',
                viewBox: '24 24 48 48',
                transform: 'translate(0,0)',
                style: {}
            };
        }
    },
    'crescent': {
        dur: 750,
        circles: 1,
        fn: () => {
            return {
                r: 26,
                style: {}
            };
        }
    },
    'dots': {
        dur: 750,
        circles: 3,
        fn: (_, index) => {
            const animationDelay = -(110 * index) + 'ms';
            return {
                r: 6,
                style: {
                    'left': `${9 - (9 * index)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'lines': {
        dur: 1000,
        lines: 12,
        fn: (dur, index, total) => {
            const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
            const animationDelay = `${(dur * index / total) - dur}ms`;
            return {
                y1: 17,
                y2: 29,
                style: {
                    'transform': transform,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'lines-small': {
        dur: 1000,
        lines: 12,
        fn: (dur, index, total) => {
            const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
            const animationDelay = `${(dur * index / total) - dur}ms`;
            return {
                y1: 12,
                y2: 20,
                style: {
                    'transform': transform,
                    'animation-delay': animationDelay,
                }
            };
        }
    }
};
const SPINNERS = spinners;




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/theme-5641d27f.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-5641d27f.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
    return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
    return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
    if (classes !== undefined) {
        const array = Array.isArray(classes) ? classes : classes.split(' ');
        return array
            .filter(c => c != null)
            .map(c => c.trim())
            .filter(c => c !== '');
    }
    return [];
};
const getClassMap = (classes) => {
    const map = {};
    getClassList(classes).forEach(c => map[c] = true);
    return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
    if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
        const router = document.querySelector('ion-router');
        if (router) {
            if (ev != null) {
                ev.preventDefault();
            }
            return router.push(url, direction, animation);
        }
    }
    return false;
};




/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cambiar-plan/cambiar-plan.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cambiar-plan/cambiar-plan.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title  size=\"small\">Estas listo para el siguiente paso?</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content class=\"ion-padding\">\n  <p>{{text}}</p>\n  <span *ngIf=\"plan == 'FREE'\">   \n    <p>Con el plan \"Básico\" podes:</p>\n    <ul>\n      <li>Crear hasta 4 cajas</li>\n      <li>Crear hasta 200 productos</li>\n      <li>Crear hasta 1000 clientes</li>\n      <li>Invitar hasta 5 empleados</li>\n    </ul>\n    <p>Todo esto por 200$ pesos mensuales</p>\n  </span>\n\n  <span *ngIf=\"plan == 'BASIC'\">   \n    <p>Con el plan \"STANDART\" podes:</p>\n    <ul>\n      <li>Crear hasta 4 cajas</li>\n      <li>Generar Factura Electrónica AFIP.</li>\n      <li>Crear Cuentas Corrientes para tus clientes</li>\n      <li>Llevar tus datos a una tienda online</li>\n      <li>Cargar hasta 3 sucursales o comercios</li>\n      <li>Cargar hasta 40 productos</li>\n      <li>Invitar hasta 5 empleados</li>\n      <li>2 horas de soporte online</li>\n      <li>Videos instructivos</li>    \n    </ul>\n    <p>Todo esto por 2899$ mensuales</p>\n  </span>\n\n  <span *ngIf=\"plan == 'STANDART'\">   \n    <p>Con el plan \"PREMIUM\" podes:</p>\n    <ul>\n      <li>Crear hasta 4 cajas</li>\n      <li>Generar Factura Electrónica AFIP.</li>\n      <li>Crear Cuentas Corrientes para tus clientes</li>\n      <li>Llevar tus datos a una tienda online</li>\n      <li>Cargar hasta 3 sucursales o comercios</li>\n      <li>Cargar hasta 40 productos</li>\n      <li>Invitar hasta 5 empleados</li>\n      <li>2 horas de soporte online</li>\n      <li>Videos instructivos</li>    \n    </ul>\n    <p>Todo esto por 2899$ mensuales</p>\n  </span>\n  \n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-button class=\"button-rounded\"  color=\"light\" (click)=\"cerrar()\" >No gracias</ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button class=\"button-rounded\"  color=\"primary\" >Siguiente Nivel!</ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-button class=\"button-rounded\"  color=\"success\" >Ver todos los planes</ion-button>\n    </ion-row>\n  </ion-grid>\n \n  \n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-beneficio/form-beneficio.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form-beneficio/form-beneficio.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title  size=\"small\">Beneficio</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content> \n\n  <ion-item class=\"item-card\">\n    <ion-label position=\"floating\">Disparador</ion-label>\n    <ion-select [(ngModel)]=\"beneficio.disparador\">\n      <ion-select-option [value]=\"enumBeneficioDisparador.sinDefinir\">No Definido</ion-select-option>\n      <ion-select-option [value]=\"enumBeneficioDisparador.compraMayorA\">Compra Mayor a un monto</ion-select-option>\n      <ion-select-option [value]=\"enumBeneficioDisparador.primerRegitro\">Primer Registro</ion-select-option>\n    </ion-select>    \n  </ion-item> \n\n  <div *ngIf=\"beneficio.disparador == enumBeneficioDisparador.compraMayorA\" class=\"form-card\">\n    \n    <p *ngIf=\"beneficio.disparador == enumBeneficioDisparador.compraMayorA\">El cliente recibirá un beneficio cada vez que realice una compra mayor al monto:</p>\n    \n    <p *ngIf=\"beneficio.disparador == enumBeneficioDisparador.primerRegitro\">El cliente recibirá un beneficio la primera vez que sea registrado en el sistema.</p>\n   \n    <ion-text color=\"primary\">\n      <h4>Monto *</h4> \n    </ion-text>             \n    <ion-input name=\"monto\" type=\"number\" [(ngModel)]=\"beneficio.monto\"></ion-input>\n  </div>\n  \n  <div class=\"form-card\">\n    <ion-text color=\"primary\">\n      <h4>Descripción</h4>    \n    </ion-text> \n    <ion-item>\n      <ion-textarea type=\"text\" name=\"descripcion\" [(ngModel)]=\"beneficio.descripcion\"></ion-textarea>\n    </ion-item>     \n  </div>\n  \n  \n  <ion-button class=\"button-rounded\" *ngIf=\"updating\"  color=\"danger\" (click)=\"eliminar()\">Eliminar</ion-button>\n    \n\n\n  \n\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-button class=\"button-rounded\" slot=\"end\" (click)=\"guardar()\">Guardar</ion-button>\n    \n    <ion-button class=\"button-rounded\" slot=\"start\"  color=\"light\" (click)=\"cancelar()\">Cancelar</ion-button>\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-caja/form-caja.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form-caja/form-caja.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title  size=\"small\">{{titulo}}</ion-title>    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <form [formGroup]=\"datosForm\" >\n\n    <div [ngClass]=\"{'form-card': true, 'form-card-error': submitted && !datosForm.controls.nombre.valid}\">\n      <ion-text color=\"primary\">\n        <h4>Nombre *</h4>        \n      </ion-text>\n          \n      <ion-item>\n        <ion-input name=\"nombre\" type=\"text\" formControlName=\"nombre\" required></ion-input>\n      </ion-item>\n      <div *ngIf=\"submitted && f.nombre.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.nombre.errors.required\"><h5>Ingresa el nombre de la caja</h5></div>\n      </div> \n    </div>\n  </form>\n  <h4>Con que métdoso de pago opera? *</h4>   \n    <ion-item>\n      <ion-label><h5>Efectivo</h5></ion-label>\n      <ion-toggle [(ngModel)]=\"caja.efectivo\"></ion-toggle>\n    </ion-item>\n\n    <ion-item>\n      <ion-label><h5>Débito</h5></ion-label>\n      <ion-toggle [(ngModel)]=\"caja.debito\"></ion-toggle>\n    </ion-item>\n\n    <ion-item>\n      <ion-label><h5>Crédito</h5></ion-label>\n      <ion-toggle [(ngModel)]=\"caja.credito\"></ion-toggle>\n    </ion-item>\n\n  \n \n    <ion-button class=\"button-rounded\" *ngIf=\"updating\"  color=\"danger\" (click)=\"eliminar()\">Eliminar Caja</ion-button>\n    \n\n  \n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-button class=\"button-rounded\" slot=\"end\" (click)=\"guardar()\">Guardar</ion-button>\n    \n    <ion-button class=\"button-rounded\" slot=\"start\"  color=\"light\" (click)=\"cancelar()\">Cancelar</ion-button>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-cliente-estado/form-cliente-estado.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form-cliente-estado/form-cliente-estado.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title  size=\"small\">{{titulo}}</ion-title>    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\" style=\"margin-top:50px\">\n\n  <form [formGroup]=\"datosForm\">\n    <div [ngClass]=\"{'form-card': true, 'form-card-error': submitted && !datosForm.controls.nombre.valid}\">\n      <ion-text color=\"primary\">\n        <h4>Nombre *</h4>        \n      </ion-text>          \n      <ion-item>\n        <ion-input name=\"nombre\" type=\"text\" formControlName=\"nombre\" required></ion-input>\n      </ion-item>\n      <div *ngIf=\"submitted && f.nombre.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.nombre.errors.required\"><h5>Ingresa el nombre del estado</h5></div>\n      </div> \n    </div>\n  </form>\n  \n\n  <div class=\"form-card\" *ngIf=\"updating\">\n    <ion-text color=\"danger\">\n      <h5 color=\"danger\">zona de riesgo</h5>\n    </ion-text>    \n    <ion-button  color=\"danger\" (click)=\"elimiar()\">Eliminar Categoría</ion-button>\n  </div>\n  <ion-toolbar>\n    <ion-button slot=\"end\" (click)=\"guardar()\">Guardar</ion-button>\n    \n    <ion-button slot=\"start\"  color=\"light\" (click)=\"cancelar()\">Cancelar</ion-button>\n  </ion-toolbar>\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-config-mercadopago/form-config-mercadopago.page.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form-config-mercadopago/form-config-mercadopago.page.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title  size=\"small\">Mercado Pago</ion-title>    \n    <ion-button fill=\"clear\" (click)=\"cerrar()\" color=\"primary\" slot=\"end\">\n      <ion-icon name=\"close-outline\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding ion-text-center\">\n\n  <img class=\"mp-logo\" src=\"../../assets/img/logo-mercadopago.png\" alt=\"\">\n\n  <ion-item *ngIf=\"comercio.mercadoPago.publicKey\" class=\"item-card\">\n    Conectado con cuenta: {{comercio.mercadoPago.nickname}}\n  </ion-item>\n  \n \n  <ion-item *ngIf=\"!comercio.mercadoPago.publicKey\" class=\"form-card\">\n    <ion-button class=\"button-rounded\" color=\"light\" [href]=\"link\" (click)=\"cerrar()\">Conectar Mercado Pago</ion-button>\n  </ion-item>\n\n  <ion-button *ngIf=\"comercio.mercadoPago.publicKey\" class=\"button-rounded\" color=\"danger\" (click)=\"desvincular()\">Desvincular Cuenta</ion-button>\n\n\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-filter-pedidos/form-filter-pedidos.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form-filter-pedidos/form-filter-pedidos.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title  size=\"small\">Filtrar Pedidos</ion-title>    \n  </ion-toolbar>\n</ion-header>\n<ion-content>   \n  <!-- desde, -->\n    \n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-horario/form-horario.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form-horario/form-horario.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title  size=\"small\">Agregar Horarios</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <form [formGroup]=\"datosForm\">\n    <ion-item class=\"form-card\"> \n    <ion-label position=\"floating\">Día *\n    </ion-label>\n    <ion-select formControlName=\"dia\" >\n      <ion-select-option [value]=\"1\">\n        Lunes\n      </ion-select-option>\n      <ion-select-option [value]=\"2\">\n        Martes\n      </ion-select-option>\n      <ion-select-option [value]=\"3\">\n        Miércoles\n      </ion-select-option>\n      <ion-select-option [value]=\"4\">\n        Jueves\n      </ion-select-option>\n      <ion-select-option [value]=\"5\">\n        Viernes\n      </ion-select-option>\n      <ion-select-option [value]=\"6\">\n        Sábado\n      </ion-select-option>\n      <ion-select-option [value]=\"0\">\n        Domingo\n      </ion-select-option>\n    </ion-select>\n  </ion-item>\n  <div *ngIf=\"submitted && f.dia.errors\" class=\"invalid-feedback\">\n    <div *ngIf=\"f.dia.errors.required\"><h5>Ingrese un día</h5></div>\n  </div>\n  <ion-row>\n    <ion-col class=\"form-card\">\n      <h4>Desde las</h4>\n      <ion-item [class.invalid]=\"submitted && !datosForm.controls.desde.valid\">\n        <ion-datetime  display-format=\"h:mm A\" picker-format=\"h:mm A\" formControlName=\"desde\"></ion-datetime>\n      </ion-item>\n      <div *ngIf=\"submitted && f.desde.errors\" class=\"invalid-feedback\">\n        <div *ngIf=\"f.desde.errors.required\"><h5>Ingrese un horario de comienzo</h5></div>\n      </div>\n    </ion-col>\n    <ion-col class=\"form-card\">\n      <h4>Hasta las</h4>\n      <ion-item [class.invalid]=\"submitted && !datosForm.controls.hasta.valid\">\n        <ion-datetime  display-format=\"h:mm A\" picker-format=\"h:mm A\" formControlName=\"hasta\"></ion-datetime>\n      </ion-item>\n      <div *ngIf=\"submitted && f.hasta.errors\" class=\"invalid-feedback\">\n        <div *ngIf=\"f.hasta.errors.required\"><h5>Ingrese un horario de final</h5></div>\n      </div>\n    </ion-col>\n  </ion-row>\n  </form>\n  \n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-button class=\"button-rounded\" slot=\"end\" (click)=\"guardar()\">Guardar</ion-button>\n    \n    <ion-button class=\"button-rounded\" slot=\"start\"  color=\"light\" (click)=\"cancelar()\">Cancelar</ion-button>\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-impresora/form-impresora.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form-impresora/form-impresora.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Impresora</ion-title>\n    <ion-button fill=\"clear\" (click)=\"cerrar()\" color=\"primary\" slot=\"end\">\n      <ion-icon name=\"close-outline\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item>    \n    <ion-label position=\"floating\">Nombre Impresora</ion-label>\n    <ion-input type=\"text\" [(ngModel)]=\"impresora.alias\"></ion-input> \n  </ion-item>\n\n  <ion-item> \n    <ion-label position=\"floating\">Ancho del Papel</ion-label>                   \n    <ion-select  [(ngModel)]=\"impresora.tamanoPapel\" [ngModelOptions]=\"{standalone: true}\">        \n      <ion-select-option [value]=\"'58'\">58 mm</ion-select-option>\n      <ion-select-option [value]=\"'80'\">80 mm</ion-select-option>\n      <ion-select-option [value]=\"'88'\">88 mm</ion-select-option>\n    </ion-select>        \n  </ion-item>\n  \n</ion-content>\n<ion-footer class=\"ion-no-border ion-padding\">\n  <ion-toolbar> \n    <ion-button  class=\"button-rounded\" slot=\"end\" (click)=\"guardar()\">Guardar</ion-button>  \n    <ion-button class=\"button-rounded\" slot=\"start\"  color=\"light\" (click)=\"cerrar()\">Cancelar</ion-button>\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/list-select-bluetooth-device/list-select-bluetooth-device.page.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/list-select-bluetooth-device/list-select-bluetooth-device.page.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Dispositivos Emparejados</ion-title>\n    <ion-button fill=\"clear\" (click)=\"cerrar()\" color=\"primary\" slot=\"end\">\n      <ion-icon name=\"close-outline\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <span *ngFor=\"let printer of impresoras\">\n    <app-item-bluetooth-device\n      [item] = \"printer\"\n      (seleccionar) = seleccionar(printer)\n    ></app-item-bluetooth-device>\n  </span>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/list-subscripciones/list-subscripciones.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/list-subscripciones/list-subscripciones.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title  size=\"small\">List Subscripciones</ion-title>    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">  \n  \n  <ion-row>\n    <ion-col size=\"10\">\n      <ion-input placeholder=\"Buscar\" style=\"border:1px solid rgb(206, 206, 206); border-radius: 5px;\"\n      [(ngModel)]=\"palabraFiltro\"\n      ></ion-input>\n    </ion-col>\n    <ion-col size=\"2\">\n      <ion-button color=\"primary\" style=\"margin-top: -1px; height: 42px;\"  (click)=\"buscar()\">\n          <ion-icon name=\"search\"></ion-icon>\n      </ion-button>\n    </ion-col>\n  </ion-row>\n\n  <ion-list lines=\"none\">    \n    <div *ngFor=\"let item of itemsView\">\n      <app-card-subscription [item]=\"item\"></app-card-subscription>\n    </div>\n    \n  </ion-list>\n\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/select-beneficio/select-beneficio.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/select-beneficio/select-beneficio.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button  (click)=\"atras()\"></ion-back-button>\n    </ion-buttons>\n    <ion-title  size=\"small\">Seleccione un beneficios</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item-sliding *ngFor=\"let beneficio of beneficios\" (click)=\"seleccionar(beneficio)\" class=\"item-card\">\n    <ion-item  class=\"item-card\">  \n      <div slot=\"start\">\n        <ion-icon name=\"file-tray-full-outline\"></ion-icon>\n      </div>      \n      <ion-label text-wrap>\n        <b>{{beneficio.descripcion}}</b>         \n      </ion-label> \n    </ion-item>  \n  </ion-item-sliding>  \n</ion-content>");

/***/ }),

/***/ "./src/app/Services/clientes-estados.service.ts":
/*!******************************************************!*\
  !*** ./src/app/Services/clientes-estados.service.ts ***!
  \******************************************************/
/*! exports provided: ClientesEstadosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientesEstadosService", function() { return ClientesEstadosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base.service */ "./src/app/Services/base.service.ts");
/* harmony import */ var _comercios_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comercios.service */ "./src/app/Services/comercios.service.ts");





let ClientesEstadosService = class ClientesEstadosService extends _base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] {
    constructor(afs, comerciosService) {
        super(afs);
        this.afs = afs;
        this.comerciosService = comerciosService;
        this.comerciosService.getSelectedCommerce().subscribe(data => {
            // let comercio_seleccionadoId = localStorage.getItem('comercio_seleccionadoId'); 
            if (data) {
                this.setPath('comercios/' + data.id + '/clientesEstados');
            }
        });
    }
};
ClientesEstadosService.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _comercios_service__WEBPACK_IMPORTED_MODULE_4__["ComerciosService"] }
];
ClientesEstadosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ClientesEstadosService);



/***/ }),

/***/ "./src/app/Services/horarios.service.ts":
/*!**********************************************!*\
  !*** ./src/app/Services/horarios.service.ts ***!
  \**********************************************/
/*! exports provided: HorariosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorariosService", function() { return HorariosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base.service */ "./src/app/Services/base.service.ts");
/* harmony import */ var _comercios_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comercios.service */ "./src/app/Services/comercios.service.ts");





let HorariosService = class HorariosService extends _base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] {
    constructor(firestore, comerciosService) {
        super(firestore);
        this.firestore = firestore;
        this.comerciosService = comerciosService;
        this.comerciosService.getSelectedCommerce().subscribe(data => {
            // let comercio_seleccionadoId = localStorage.getItem('comercio_seleccionadoId'); 
            if (data) {
                this.setPath('comercios/' + data.id + '/horarios');
            }
        });
    }
    getCollection(comercioId) {
        return 'comercios/' + comercioId + '/horarios';
    }
};
HorariosService.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _comercios_service__WEBPACK_IMPORTED_MODULE_4__["ComerciosService"] }
];
HorariosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HorariosService);



/***/ }),

/***/ "./src/app/Services/pedidos-woocommerce.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/Services/pedidos-woocommerce.service.ts ***!
  \*********************************************************/
/*! exports provided: PedidosWoocommerceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidosWoocommerceService", function() { return PedidosWoocommerceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./base.service */ "./src/app/Services/base.service.ts");
/* harmony import */ var _comercios_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comercios.service */ "./src/app/Services/comercios.service.ts");






let PedidosWoocommerceService = class PedidosWoocommerceService extends _base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"] {
    constructor(afs, comerciosService) {
        super(afs);
        this.afs = afs;
        this.comerciosService = comerciosService;
        this.comerciosService.getSelectedCommerce().subscribe(data => {
            if (data) {
                this.setPath('comercios/' + data.id + '/pedidosWoocommerce');
            }
        });
    }
    listFechaDesde(fechaFrom, fechaTo) {
        console.log(fechaFrom);
        console.log(fechaTo);
        return this.afs.collection(this.path, ref => ref.where('date_created', '>=', fechaFrom).where('date_created', '<=', fechaTo).orderBy('date_created', "desc").limit(50)).snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(changes => {
            return changes.map(a => {
                const data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                data.fromCache = a.payload.doc.metadata.fromCache;
                return data;
            });
        }));
    }
};
PedidosWoocommerceService.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _comercios_service__WEBPACK_IMPORTED_MODULE_5__["ComerciosService"] }
];
PedidosWoocommerceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PedidosWoocommerceService);



/***/ }),

/***/ "./src/app/Services/ventas.service.ts":
/*!********************************************!*\
  !*** ./src/app/Services/ventas.service.ts ***!
  \********************************************/
/*! exports provided: VentasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VentasService", function() { return VentasService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./base.service */ "./src/app/Services/base.service.ts");
/* harmony import */ var _comercios_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comercios.service */ "./src/app/Services/comercios.service.ts");






let VentasService = class VentasService extends _base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"] {
    constructor(firestore, comerciosService) {
        super(firestore);
        this.firestore = firestore;
        this.comerciosService = comerciosService;
        this.comerciosService.getSelectedCommerce().subscribe(data => {
            if (data) {
                this.setPath('comercios/' + data.id + '/ventas');
            }
        });
    }
    getRef(id) {
        return this.firestore.collection(this.path).doc(id).ref;
    }
    create(data) {
        const param = JSON.parse(JSON.stringify(data));
        console.log(param);
        this.firestore.collection(this.path).doc(data.id).set(Object.assign(Object.assign({}, param), { createdAt: firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"].FieldValue.serverTimestamp() }));
    }
    get(documentId) {
        return this.firestore.collection(this.path).doc(documentId).snapshotChanges();
    }
    getAll() {
        return this.firestore.collection(this.path).snapshotChanges();
    }
    getByCaja(cajaId, fecha) {
        if (fecha != null)
            return this.firestore.collection(this.path, ref => ref.where('cajaId', '==', cajaId).where('createdAt', '>', fecha)).snapshotChanges();
        else
            return this.firestore.collection(this.path, ref => ref.where('cajaId', '==', cajaId)).snapshotChanges();
    }
};
VentasService.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _comercios_service__WEBPACK_IMPORTED_MODULE_5__["ComerciosService"] }
];
VentasService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], VentasService);



/***/ }),

/***/ "./src/app/cambiar-plan/cambiar-plan.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/cambiar-plan/cambiar-plan.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbWJpYXItcGxhbi9jYW1iaWFyLXBsYW4ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/cambiar-plan/cambiar-plan.page.ts":
/*!***************************************************!*\
  !*** ./src/app/cambiar-plan/cambiar-plan.page.ts ***!
  \***************************************************/
/*! exports provided: CambiarPlanPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CambiarPlanPage", function() { return CambiarPlanPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



let CambiarPlanPage = class CambiarPlanPage {
    constructor(modalCtrl, navParams) {
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.text = "";
        this.plan = "";
        this.text = this.navParams.get('extraText');
        this.plan = this.navParams.get('actualPlan');
    }
    ngOnInit() {
        //si el usuario es plan free mustra una cosa
        //si el usuario es plan spark muestra otra cosa
    }
    cerrar() {
        this.modalCtrl.dismiss();
    }
};
CambiarPlanPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] }
];
CambiarPlanPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cambiar-plan',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./cambiar-plan.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cambiar-plan/cambiar-plan.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./cambiar-plan.page.scss */ "./src/app/cambiar-plan/cambiar-plan.page.scss")).default]
    })
], CambiarPlanPage);



/***/ }),

/***/ "./src/app/form-beneficio/form-beneficio.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/form-beneficio/form-beneficio.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0tYmVuZWZpY2lvL2Zvcm0tYmVuZWZpY2lvLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/form-beneficio/form-beneficio.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/form-beneficio/form-beneficio.page.ts ***!
  \*******************************************************/
/*! exports provided: FormBeneficioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormBeneficioPage", function() { return FormBeneficioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _models_beneficio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/beneficio */ "./src/app/models/beneficio.ts");
/* harmony import */ var _Services_beneficios_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/beneficios.service */ "./src/app/Services/beneficios.service.ts");





let FormBeneficioPage = class FormBeneficioPage {
    constructor(beneficiosService, navParams, modalCtrl, alertController) {
        this.beneficiosService = beneficiosService;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.alertController = alertController;
        this.enumBeneficioDisparador = _models_beneficio__WEBPACK_IMPORTED_MODULE_3__["EnumBeneficioDisparador"];
        this.updating = false;
        this.beneficio = new _models_beneficio__WEBPACK_IMPORTED_MODULE_3__["Beneficio"]();
        if (this.navParams.get('beneficio')) {
            this.beneficio.asignarValores(this.navParams.get('beneficio'));
            console.log(this.beneficio);
            this.updating = true;
        }
    }
    ngOnInit() {
    }
    guardar() {
        if (this.updating) {
            this.beneficiosService.update(this.beneficio).then(data => {
                console.log(data);
                this.modalCtrl.dismiss();
            });
        }
        else {
            this.beneficiosService.add(this.beneficio).then(data => {
                console.log(data);
                this.modalCtrl.dismiss();
            });
        }
    }
    cancelar() {
        this.modalCtrl.dismiss();
    }
    eliminar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Está seguro que desea eliminar el beneficio?',
                buttons: [
                    {
                        text: 'Cancelar',
                        handler: (blah) => {
                        }
                    }, {
                        text: 'Si',
                        handler: () => {
                            this.beneficiosService.delete(this.beneficio.id).then(data => {
                                console.log(data);
                            });
                            this.modalCtrl.dismiss();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
FormBeneficioPage.ctorParameters = () => [
    { type: _Services_beneficios_service__WEBPACK_IMPORTED_MODULE_4__["BeneficiosService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
FormBeneficioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-beneficio',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./form-beneficio.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-beneficio/form-beneficio.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./form-beneficio.page.scss */ "./src/app/form-beneficio/form-beneficio.page.scss")).default]
    })
], FormBeneficioPage);



/***/ }),

/***/ "./src/app/form-caja/form-caja.page.scss":
/*!***********************************************!*\
  !*** ./src/app/form-caja/form-caja.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0tY2FqYS9mb3JtLWNhamEucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/form-caja/form-caja.page.ts":
/*!*********************************************!*\
  !*** ./src/app/form-caja/form-caja.page.ts ***!
  \*********************************************/
/*! exports provided: FormCajaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormCajaPage", function() { return FormCajaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _Services_cajas_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/cajas.service */ "./src/app/Services/cajas.service.ts");
/* harmony import */ var _models_caja__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/caja */ "./src/app/models/caja.ts");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Services_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Services/toast.service */ "./src/app/Services/toast.service.ts");








let FormCajaPage = class FormCajaPage {
    constructor(formBuilder, navCtrl, cajasService, modalCtrl, navParams, alertController, firestore, toastServices) {
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.cajasService = cajasService;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.alertController = alertController;
        this.firestore = firestore;
        this.toastServices = toastServices;
        this.submitted = false;
        this.updating = false;
        this.titulo = "";
        this.comercioId = "";
        this.datosForm = this.formBuilder.group({
            nombre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.caja = new _models_caja__WEBPACK_IMPORTED_MODULE_5__["Caja"]();
        this.caja.id = this.firestore.createId();
        if (this.navParams.get('caja')) {
            this.caja = this.navParams.get('caja');
            this.updating = true;
            this.titulo = "Editar Caja";
            this.datosForm = this.formBuilder.group({
                nombre: [this.caja.nombre, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            });
        }
        else {
            this.titulo = "Nueva Caja";
            this.caja.comercioId = this.navParams.get('comercioId');
        }
        console.log(this.caja);
    }
    ngOnInit() {
    }
    get f() { return this.datosForm.controls; }
    guardar() {
        this.submitted = true;
        // stop here if form is invalid
        this.caja.nombre = this.datosForm.controls.nombre.value;
        if (this.caja.nombre == "") {
            this.toastServices.alert('Por favor completar todos los campos marcados con * antes de continuar', "");
            return;
        }
        var metodos = 0;
        if (this.caja.efectivo) {
            metodos++;
        }
        if (this.caja.debito) {
            metodos++;
        }
        if (this.caja.credito) {
            metodos++;
        }
        if (metodos == 0) {
            this.toastServices.alert('Por favor seleccionar al menos un método de pago', "");
            return;
        }
        if (this.updating)
            this.cajasService.update(this.caja);
        else {
            this.cajasService.add(this.caja);
        }
        this.modalCtrl.dismiss(this.caja);
    }
    cancelar() {
        this.modalCtrl.dismiss();
    }
    eliminar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Está seguro que desea eliminar la caja?',
                message: 'Se perderán todos los movimientos y pagos de la misma.',
                buttons: [
                    {
                        text: 'Cancelar',
                        handler: (blah) => {
                        }
                    }, {
                        text: 'Eliminar',
                        handler: () => {
                            this.cajasService.delete(this.caja.id).then(data => {
                                console.log(data);
                            });
                            this.modalCtrl.dismiss();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
FormCajaPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _Services_cajas_service__WEBPACK_IMPORTED_MODULE_4__["CajasService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"] },
    { type: _Services_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"] }
];
FormCajaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-caja',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./form-caja.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-caja/form-caja.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./form-caja.page.scss */ "./src/app/form-caja/form-caja.page.scss")).default]
    })
], FormCajaPage);



/***/ }),

/***/ "./src/app/form-cliente-estado/form-cliente-estado.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/form-cliente-estado/form-cliente-estado.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0tY2xpZW50ZS1lc3RhZG8vZm9ybS1jbGllbnRlLWVzdGFkby5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/form-cliente-estado/form-cliente-estado.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/form-cliente-estado/form-cliente-estado.page.ts ***!
  \*****************************************************************/
/*! exports provided: FormClienteEstadoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormClienteEstadoPage", function() { return FormClienteEstadoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _models_clienteEstado__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/clienteEstado */ "./src/app/models/clienteEstado.ts");
/* harmony import */ var _Services_clientes_estados_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Services/clientes-estados.service */ "./src/app/Services/clientes-estados.service.ts");
/* harmony import */ var _Services_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Services/toast.service */ "./src/app/Services/toast.service.ts");








let FormClienteEstadoPage = class FormClienteEstadoPage {
    constructor(formBuilder, navCtrl, clientesEstadoService, modalCtrl, route, alertController, navParams, toastServices) {
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.clientesEstadoService = clientesEstadoService;
        this.modalCtrl = modalCtrl;
        this.route = route;
        this.alertController = alertController;
        this.navParams = navParams;
        this.toastServices = toastServices;
        this.submitted = false;
        this.updating = false;
        this.comercioId = "";
        this.titulo = "";
        this.datosForm = this.formBuilder.group({
            nombre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    ngOnInit() {
        if (this.navParams.get('categoria')) {
            let categoria = this.navParams.get('categoria');
            console.log(categoria);
            this.updating = true;
            this.titulo = "Editar Categoria";
            this.datosForm = this.formBuilder.group({
                nombre: [categoria.nombre, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            });
            this.clienteEstado.nombre = categoria.nombre;
            this.clienteEstado.comercioId = categoria.comercioId;
            this.clienteEstado.id = categoria.id;
        }
        else {
            this.titulo = "Nueva Categoria";
            this.clienteEstado = new _models_clienteEstado__WEBPACK_IMPORTED_MODULE_5__["ClienteEstado"]();
            this.clienteEstado.comercioId = this.navParams.get('comercioId');
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
        this.clienteEstado.nombre = this.datosForm.controls.nombre.value;
        if (this.updating) {
            this.clientesEstadoService.update(this.clienteEstado);
        }
        else {
            this.clientesEstadoService.add(this.clienteEstado);
        }
        this.modalCtrl.dismiss();
    }
    cancelar() {
        this.modalCtrl.dismiss();
    }
    elimiar() {
        this.presentAlertEliminar();
    }
    presentAlertEliminar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Eliminar',
                message: 'Está seguro que desea eliminar el estado?',
                buttons: [
                    {
                        text: 'Cancelar',
                        handler: (blah) => {
                        }
                    }, {
                        text: 'Eliminar',
                        handler: () => {
                            this.clientesEstadoService.delete(this.clienteEstado.id);
                            this.modalCtrl.dismiss();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
FormClienteEstadoPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _Services_clientes_estados_service__WEBPACK_IMPORTED_MODULE_6__["ClientesEstadosService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"] },
    { type: _Services_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"] }
];
FormClienteEstadoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-cliente-estado',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./form-cliente-estado.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-cliente-estado/form-cliente-estado.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./form-cliente-estado.page.scss */ "./src/app/form-cliente-estado/form-cliente-estado.page.scss")).default]
    })
], FormClienteEstadoPage);



/***/ }),

/***/ "./src/app/form-config-mercadopago/form-config-mercadopago.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/form-config-mercadopago/form-config-mercadopago.page.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mp-logo {\n  width: 50%;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybS1jb25maWctbWVyY2Fkb3BhZ28vQzpcXFByb3llY3Rvc1xcV2ViQXBwc1xcdGl2aXR5L3NyY1xcYXBwXFxmb3JtLWNvbmZpZy1tZXJjYWRvcGFnb1xcZm9ybS1jb25maWctbWVyY2Fkb3BhZ28ucGFnZS5zY3NzIiwic3JjL2FwcC9mb3JtLWNvbmZpZy1tZXJjYWRvcGFnby9mb3JtLWNvbmZpZy1tZXJjYWRvcGFnby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZm9ybS1jb25maWctbWVyY2Fkb3BhZ28vZm9ybS1jb25maWctbWVyY2Fkb3BhZ28ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1wLWxvZ297XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59IiwiLm1wLWxvZ28ge1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW46IGF1dG87XG59Il19 */");

/***/ }),

/***/ "./src/app/form-config-mercadopago/form-config-mercadopago.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/form-config-mercadopago/form-config-mercadopago.page.ts ***!
  \*************************************************************************/
/*! exports provided: FormConfigMercadopagoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormConfigMercadopagoPage", function() { return FormConfigMercadopagoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _models_comercio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/comercio */ "./src/app/models/comercio.ts");
/* harmony import */ var _Services_comercios_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/comercios.service */ "./src/app/Services/comercios.service.ts");
/* harmony import */ var _Services_mercadopago_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Services/mercadopago.service */ "./src/app/Services/mercadopago.service.ts");






let FormConfigMercadopagoPage = class FormConfigMercadopagoPage {
    constructor(modalCtrl, mercadoPagoService, comercioService) {
        this.modalCtrl = modalCtrl;
        this.mercadoPagoService = mercadoPagoService;
        this.comercioService = comercioService;
        this.publicKey = "";
        this.privateKey = "";
        this.link = "";
    }
    ngOnInit() {
        this.comercio = new _models_comercio__WEBPACK_IMPORTED_MODULE_3__["Comercio"]();
        this.comercio.asignarValores(this.comercioService.getSelectedCommerceValue());
        this.link = "https://auth.mercadopago.com.ar/authorization?client_id=6782463642048642&response_type=code&platform_id=mp&state=id=" + this.comercio.id + "&redirect_uri=https://us-central1-tivity-socialup.cloudfunctions.net/api/mercadopago/marketplaceAuth";
    }
    ionViewDidEnter() {
        this.comercio.asignarValores(this.comercioService.getSelectedCommerceValue());
    }
    guardar() {
        this.mercadoPagoService.guardarKeys(this.privateKey, this.publicKey).then(data => {
            console.log(data);
        });
        this.modalCtrl.dismiss();
    }
    cerrar() {
        this.modalCtrl.dismiss();
    }
    desvincular() {
        this.comercio.mercadoPago = {
            publicKey: "",
            nickname: "",
            permalink: "",
        };
    }
};
FormConfigMercadopagoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _Services_mercadopago_service__WEBPACK_IMPORTED_MODULE_5__["MercadopagoService"] },
    { type: _Services_comercios_service__WEBPACK_IMPORTED_MODULE_4__["ComerciosService"] }
];
FormConfigMercadopagoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-config-mercadopago',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./form-config-mercadopago.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-config-mercadopago/form-config-mercadopago.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./form-config-mercadopago.page.scss */ "./src/app/form-config-mercadopago/form-config-mercadopago.page.scss")).default]
    })
], FormConfigMercadopagoPage);



/***/ }),

/***/ "./src/app/form-filter-pedidos/form-filter-pedidos.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/form-filter-pedidos/form-filter-pedidos.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0tZmlsdGVyLXBlZGlkb3MvZm9ybS1maWx0ZXItcGVkaWRvcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/form-filter-pedidos/form-filter-pedidos.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/form-filter-pedidos/form-filter-pedidos.page.ts ***!
  \*****************************************************************/
/*! exports provided: FormFilterPedidosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormFilterPedidosPage", function() { return FormFilterPedidosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let FormFilterPedidosPage = class FormFilterPedidosPage {
    constructor() { }
    ngOnInit() {
    }
};
FormFilterPedidosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-filter-pedidos',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./form-filter-pedidos.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-filter-pedidos/form-filter-pedidos.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./form-filter-pedidos.page.scss */ "./src/app/form-filter-pedidos/form-filter-pedidos.page.scss")).default]
    })
], FormFilterPedidosPage);



/***/ }),

/***/ "./src/app/form-horario/form-horario.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/form-horario/form-horario.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0taG9yYXJpby9mb3JtLWhvcmFyaW8ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/form-horario/form-horario.page.ts":
/*!***************************************************!*\
  !*** ./src/app/form-horario/form-horario.page.ts ***!
  \***************************************************/
/*! exports provided: FormHorarioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormHorarioPage", function() { return FormHorarioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_horario__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/horario */ "./src/app/models/horario.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _Services_horarios_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Services/horarios.service */ "./src/app/Services/horarios.service.ts");
/* harmony import */ var _Services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Services/toast.service */ "./src/app/Services/toast.service.ts");







let FormHorarioPage = class FormHorarioPage {
    constructor(formBuilder, modalCtrl, navParams, horarioService, toastServices) {
        this.formBuilder = formBuilder;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.horarioService = horarioService;
        this.toastServices = toastServices;
        this.submitted = false;
        this.updating = false;
        this.datosForm = this.formBuilder.group({
            dia: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            desde: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            hasta: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    ngOnInit() {
        if (this.navParams.get('horario')) {
            this.horario = this.navParams.get('horario');
            this.datosForm.patchValue(this.horario);
            this.updating = true;
        }
        else {
            this.horario = new _models_horario__WEBPACK_IMPORTED_MODULE_2__["Horario"]();
            this.horario.comercioId = this.navParams.get('comercioId');
        }
    }
    get f() { return this.datosForm.controls; }
    guardar() {
        this.submitted = true;
        if (this.datosForm.invalid) {
            this.toastServices.alert('Por favor completar todos los campos marcados con * antes de continuar', "");
            return;
        }
        switch (this.datosForm.controls.dia.value) {
            case 0:
                this.horario.nombre = "Domingo";
                break;
            case 1:
                this.horario.nombre = "Lunes";
                break;
            case 2:
                this.horario.nombre = "Martes";
                break;
            case 3:
                this.horario.nombre = "Miércoles";
                break;
            case 4:
                this.horario.nombre = "Jueves";
                break;
            case 5:
                this.horario.nombre = "Viernes";
                break;
            case 6:
                this.horario.nombre = "Sábado";
                break;
        }
        this.horario.dia = this.datosForm.controls.dia.value;
        this.horario.desde = this.datosForm.controls.desde.value;
        this.horario.hasta = this.datosForm.controls.hasta.value;
        /* console.log(this.horario);
         if(this.updating){
           this.horarioService.update(this.horario);
         }
         else{
           this.horarioService.create(this.horario);
         }*/
        this.modalCtrl.dismiss(this.horario);
    }
    cancelar() {
        this.modalCtrl.dismiss();
    }
};
FormHorarioPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"] },
    { type: _Services_horarios_service__WEBPACK_IMPORTED_MODULE_5__["HorariosService"] },
    { type: _Services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] }
];
FormHorarioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-horario',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./form-horario.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-horario/form-horario.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./form-horario.page.scss */ "./src/app/form-horario/form-horario.page.scss")).default]
    })
], FormHorarioPage);



/***/ }),

/***/ "./src/app/form-impresora/form-impresora.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/form-impresora/form-impresora.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0taW1wcmVzb3JhL2Zvcm0taW1wcmVzb3JhLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/form-impresora/form-impresora.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/form-impresora/form-impresora.page.ts ***!
  \*******************************************************/
/*! exports provided: FormImpresoraPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormImpresoraPage", function() { return FormImpresoraPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _models_bluetooth_impresora__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/bluetooth-impresora */ "./src/app/models/bluetooth-impresora.ts");




let FormImpresoraPage = class FormImpresoraPage {
    constructor(navParams, modalCtrl) {
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.impresora = new _models_bluetooth_impresora__WEBPACK_IMPORTED_MODULE_3__["BluettothImpresora"]();
        this.impresora.asignarValores(this.navParams.get('dispositivo'));
    }
    ngOnInit() {
    }
    cerrar() {
        this.modalCtrl.dismiss();
    }
    guardar() {
        this.modalCtrl.dismiss(this.impresora);
    }
};
FormImpresoraPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
FormImpresoraPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-impresora',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./form-impresora.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-impresora/form-impresora.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./form-impresora.page.scss */ "./src/app/form-impresora/form-impresora.page.scss")).default]
    })
], FormImpresoraPage);



/***/ }),

/***/ "./src/app/list-select-bluetooth-device/list-select-bluetooth-device.page.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/list-select-bluetooth-device/list-select-bluetooth-device.page.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3Qtc2VsZWN0LWJsdWV0b290aC1kZXZpY2UvbGlzdC1zZWxlY3QtYmx1ZXRvb3RoLWRldmljZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/list-select-bluetooth-device/list-select-bluetooth-device.page.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/list-select-bluetooth-device/list-select-bluetooth-device.page.ts ***!
  \***********************************************************************************/
/*! exports provided: ListSelectBluetoothDevicePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListSelectBluetoothDevicePage", function() { return ListSelectBluetoothDevicePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/bluetooth-serial/ngx */ "./node_modules/@ionic-native/bluetooth-serial/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");




let ListSelectBluetoothDevicePage = class ListSelectBluetoothDevicePage {
    constructor(bluetoothSerial, modalCtrl, platform) {
        this.bluetoothSerial = bluetoothSerial;
        this.modalCtrl = modalCtrl;
        this.platform = platform;
        this.impresoras = [];
        if (this.platform.is('cordova')) {
            this.bluetoothSerial.list().then((data) => {
                console.log("dispositivos emparejados");
                console.log(data);
                data.forEach(element => {
                    if (element.class == "1664") {
                        this.impresoras.push(element);
                    }
                });
            }, (error) => {
                console.log("could not find paired devices because: " + error);
                alert(error);
            });
        }
    }
    ngOnInit() {
    }
    seleccionar(dispositivo) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.modalCtrl.dismiss(dispositivo);
        });
    }
    cerrar() {
        this.modalCtrl.dismiss();
    }
};
ListSelectBluetoothDevicePage.ctorParameters = () => [
    { type: _ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_2__["BluetoothSerial"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] }
];
ListSelectBluetoothDevicePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-select-bluetooth-device',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./list-select-bluetooth-device.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/list-select-bluetooth-device/list-select-bluetooth-device.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./list-select-bluetooth-device.page.scss */ "./src/app/list-select-bluetooth-device/list-select-bluetooth-device.page.scss")).default]
    })
], ListSelectBluetoothDevicePage);



/***/ }),

/***/ "./src/app/list-subscripciones/list-subscripciones.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/list-subscripciones/list-subscripciones.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3Qtc3Vic2NyaXBjaW9uZXMvbGlzdC1zdWJzY3JpcGNpb25lcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/list-subscripciones/list-subscripciones.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/list-subscripciones/list-subscripciones.page.ts ***!
  \*****************************************************************/
/*! exports provided: ListSubscripcionesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListSubscripcionesPage", function() { return ListSubscripcionesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _Services_subscripciones_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/subscripciones.service */ "./src/app/Services/subscripciones.service.ts");





let ListSubscripcionesPage = class ListSubscripcionesPage {
    constructor(modalController, loadingController, route, subscripcionesService) {
        this.modalController = modalController;
        this.loadingController = loadingController;
        this.route = route;
        this.subscripcionesService = subscripcionesService;
        this.items = [];
        this.itemsView = [];
        this.palabraFiltro = "";
        this.ultimoItem = "";
        this.loadingActive = false;
    }
    ngOnInit() {
        this.ultimoItem = "";
        if (this.route.snapshot.params.filtro)
            this.palabraFiltro = this.route.snapshot.params.filtro;
        this.obtener();
    }
    ionViewDidEnter() {
    }
    ionViewDidLeave() {
    }
    buscar() {
        if (this.palabraFiltro != "") {
            this.itemsView = [];
            this.items.forEach(item => {
                if (item.cliente.nombre.toLowerCase().includes(this.palabraFiltro.toLowerCase())) {
                    console.log("ok");
                    this.itemsView.push(item);
                    return;
                }
                if (item.servicio.nombre.toLowerCase().includes(this.palabraFiltro.toLowerCase())) {
                    this.itemsView.push(item);
                    return;
                }
            });
        }
        else {
            console.log(this.itemsView);
            this.itemsView = this.items;
        }
    }
    obtener() {
        this.ultimoItem = "";
        this.subscripcionesService.list().subscribe(snapshot => {
            this.items = [];
            console.log(snapshot);
            snapshot.forEach((item) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.items.push(item);
            }));
            this.buscar();
        });
    }
    leapYear(year) {
        return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
    }
    dynamicSort(property) {
        var sortOrder = -1;
        if (property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a, b) {
            var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result * sortOrder;
        };
    }
};
ListSubscripcionesPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _Services_subscripciones_service__WEBPACK_IMPORTED_MODULE_4__["SubscripcionesService"] }
];
ListSubscripcionesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-subscripciones',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./list-subscripciones.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/list-subscripciones/list-subscripciones.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./list-subscripciones.page.scss */ "./src/app/list-subscripciones/list-subscripciones.page.scss")).default]
    })
], ListSubscripcionesPage);



/***/ }),

/***/ "./src/app/models/caja.ts":
/*!********************************!*\
  !*** ./src/app/models/caja.ts ***!
  \********************************/
/*! exports provided: Caja */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Caja", function() { return Caja; });
class Caja {
    constructor() {
        this.id = "";
        this.comercioId = "";
        this.nombre = "";
        this.totalEfectivo = 0;
        this.totalDebito = 0;
        this.totalCredito = 0;
        this.totalCtaCorriente = 0;
        this.estado = "abierta";
    }
    asignarValores(init) {
        Object.assign(this, init);
    }
}


/***/ }),

/***/ "./src/app/models/clienteEstado.ts":
/*!*****************************************!*\
  !*** ./src/app/models/clienteEstado.ts ***!
  \*****************************************/
/*! exports provided: ClienteEstado */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteEstado", function() { return ClienteEstado; });
class ClienteEstado {
    constructor() {
        this.id = "";
        this.foto = "";
        this.comercioId = "";
    }
    asignarValores(init) {
        Object.assign(this, init);
    }
}


/***/ }),

/***/ "./src/app/models/ctacorriente.ts":
/*!****************************************!*\
  !*** ./src/app/models/ctacorriente.ts ***!
  \****************************************/
/*! exports provided: CtaCorriente */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CtaCorriente", function() { return CtaCorriente; });
class CtaCorriente {
    constructor(vendedorId, vendedorNombre) {
        this.vendedorId = vendedorId;
        this.vendedorNombre = vendedorNombre;
        this.id = "";
        this.comercioId = localStorage.getItem('comercio_seleccionadoId');
        this.nombre = "";
        this.coTitularesId = [];
        this.montoActual = 0;
        this.montoTotal = 0;
        this.comercios = [];
        this.clientes = [];
    }
    asignarValores(init) {
        Object.assign(this, init);
    }
}


/***/ }),

/***/ "./src/app/models/horario.ts":
/*!***********************************!*\
  !*** ./src/app/models/horario.ts ***!
  \***********************************/
/*! exports provided: Horario */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Horario", function() { return Horario; });
class Horario {
    constructor() {
        this.id = "";
        this.comercioId = "";
        this.nombre = "";
        this.dia = 0;
        this.desde = "";
        this.hasta = "";
    }
}


/***/ }),

/***/ "./src/app/select-beneficio/select-beneficio.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/select-beneficio/select-beneficio.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlbGVjdC1iZW5lZmljaW8vc2VsZWN0LWJlbmVmaWNpby5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/select-beneficio/select-beneficio.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/select-beneficio/select-beneficio.page.ts ***!
  \***********************************************************/
/*! exports provided: SelectBeneficioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectBeneficioPage", function() { return SelectBeneficioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _Services_beneficios_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/beneficios.service */ "./src/app/Services/beneficios.service.ts");




let SelectBeneficioPage = class SelectBeneficioPage {
    constructor(modalCtrl, beneficiosService) {
        this.modalCtrl = modalCtrl;
        this.beneficiosService = beneficiosService;
        this.beneficios = [];
    }
    ngOnInit() {
        this.beneficiosService.list().subscribe(data => {
            this.beneficios = data;
        });
    }
    seleccionar(item) {
        this.modalCtrl.dismiss({
            'item': item
        });
    }
    atras() {
        this.modalCtrl.dismiss();
    }
};
SelectBeneficioPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _Services_beneficios_service__WEBPACK_IMPORTED_MODULE_3__["BeneficiosService"] }
];
SelectBeneficioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-select-beneficio',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./select-beneficio.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/select-beneficio/select-beneficio.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./select-beneficio.page.scss */ "./src/app/select-beneficio/select-beneficio.page.scss")).default]
    })
], SelectBeneficioPage);



/***/ })

}]);
//# sourceMappingURL=common.js.map