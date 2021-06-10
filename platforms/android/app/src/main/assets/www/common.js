(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm/button-active-4927a4c1.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-4927a4c1.js ***!
  \*********************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ "./node_modules/@ionic/core/dist/esm/index-7a8b7a1c.js");
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./haptic-27b3f981.js */ "./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js");
/* harmony import */ var _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-f49d994d.js */ "./node_modules/@ionic/core/dist/esm/index-f49d994d.js");




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
    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.remove('ion-activated'));
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
  return Object(_index_f49d994d_js__WEBPACK_IMPORTED_MODULE_2__["createGesture"])({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["a"]),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["b"]),
    onEnd: () => {
      clearActiveButton(true);
      Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["h"])();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/framework-delegate-4392cd63.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4392cd63.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
/* harmony import */ var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-dd7e4b7b.js */ "./node_modules/@ionic/core/dist/esm/helpers-dd7e4b7b.js");


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
  await new Promise(resolve => Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["c"])(el, resolve));
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

/***/ "./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
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

/***/ "./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
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

/***/ "./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/details-image/details-image.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/details-image/details-image.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title></ion-title>    \n    <ion-button fill=\"clear\" (click)=\"eliminarImagen()\" color=\"danger\" slot=\"end\">\n      <ion-icon name=\"trash\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding text-center\">\n  <img src=\"{{url}}\" alt=\"\">\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-beneficio/form-beneficio.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form-beneficio/form-beneficio.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Beneficio</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content> \n\n  <ion-item class=\"item-card\">\n    <ion-label position=\"floating\">Disparador</ion-label>\n    <ion-select [(ngModel)]=\"beneficio.disparador\">\n      <ion-select-option [value]=\"enumBeneficioDisparador.sinDefinir\">No Definido</ion-select-option>\n      <ion-select-option [value]=\"enumBeneficioDisparador.compraMayorA\">Compra Mayor a un monto</ion-select-option>\n      <ion-select-option [value]=\"enumBeneficioDisparador.primerRegitro\">Primer Registro</ion-select-option>\n    </ion-select>    \n  </ion-item> \n\n  <div *ngIf=\"beneficio.disparador == enumBeneficioDisparador.compraMayorA\" class=\"form-card\">\n    \n    <p *ngIf=\"beneficio.disparador == enumBeneficioDisparador.compraMayorA\">El cliente recibirá un beneficio cada vez que realice una compra mayor al monto:</p>\n    \n    <p *ngIf=\"beneficio.disparador == enumBeneficioDisparador.primerRegitro\">El cliente recibirá un beneficio la primera vez que sea registrado en el sistema.</p>\n   \n    <ion-text color=\"primary\">\n      <h4>Monto *</h4> \n    </ion-text>             \n    <ion-input name=\"monto\" type=\"number\" [(ngModel)]=\"beneficio.monto\"></ion-input>\n  </div>\n  \n  <div class=\"form-card\">\n    <ion-text color=\"primary\">\n      <h4>Descripción</h4>    \n    </ion-text> \n    <ion-item>\n      <ion-textarea type=\"text\" name=\"descripcion\" [(ngModel)]=\"beneficio.descripcion\"></ion-textarea>\n    </ion-item>     \n  </div>\n  \n  \n  <ion-button class=\"button-rounded\" *ngIf=\"updating\"  color=\"danger\" (click)=\"eliminar()\">Eliminar</ion-button>\n    \n\n\n  \n\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-button class=\"button-rounded\" slot=\"end\" (click)=\"guardar()\">Guardar</ion-button>\n    \n    <ion-button class=\"button-rounded\" slot=\"start\"  color=\"light\" (click)=\"cancelar()\">Cancelar</ion-button>\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-calendario/form-calendario.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form-calendario/form-calendario.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Nuevo Calendario</ion-title>    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <form [formGroup]=\"datosForm\" >\n\n    <div [ngClass]=\"{'form-card': true, 'form-card-error': submitted && !datosForm.controls.nombre.valid}\">\n      <ion-text color=\"primary\">\n        <h4>Nombre *</h4>        \n      </ion-text>\n          \n      <ion-item>\n        <ion-input name=\"nombre\" type=\"text\" formControlName=\"nombre\" required></ion-input>\n      </ion-item>\n      <div *ngIf=\"submitted && f.nombre.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.nombre.errors.required\"><h5>Ingresa el nombre del calendario</h5></div>\n      </div> \n    </div>\n  </form>  \n\n  <div class=\"form-card\" *ngIf=\"canElimianr\">\n    <ion-text color=\"danger\">\n      <h5 color=\"danger\">zona de riesgo</h5>\n    </ion-text>      \n    <ion-button  color=\"danger\" (click)=\"eliminar()\">Eliminar Calendario</ion-button>\n  </div>\n\n  <ion-toolbar>\n    <ion-button slot=\"end\" (click)=\"guardar()\">Guardar</ion-button>\n    \n    <ion-button slot=\"start\"  color=\"light\" (click)=\"cancelar()\">Cancelar</ion-button>\n  </ion-toolbar>\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-cliente-estado/form-cliente-estado.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form-cliente-estado/form-cliente-estado.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{titulo}}</ion-title>    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\" style=\"margin-top:50px\">\n\n  <form [formGroup]=\"datosForm\">\n    <div [ngClass]=\"{'form-card': true, 'form-card-error': submitted && !datosForm.controls.nombre.valid}\">\n      <ion-text color=\"primary\">\n        <h4>Nombre *</h4>        \n      </ion-text>          \n      <ion-item>\n        <ion-input name=\"nombre\" type=\"text\" formControlName=\"nombre\" required></ion-input>\n      </ion-item>\n      <div *ngIf=\"submitted && f.nombre.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.nombre.errors.required\"><h5>Ingresa el nombre del estado</h5></div>\n      </div> \n    </div>\n  </form>\n  \n\n  <div class=\"form-card\" *ngIf=\"updating\">\n    <ion-text color=\"danger\">\n      <h5 color=\"danger\">zona de riesgo</h5>\n    </ion-text>    \n    <ion-button  color=\"danger\" (click)=\"elimiar()\">Eliminar Categoría</ion-button>\n  </div>\n  <ion-toolbar>\n    <ion-button slot=\"end\" (click)=\"guardar()\">Guardar</ion-button>\n    \n    <ion-button slot=\"start\"  color=\"light\" (click)=\"cancelar()\">Cancelar</ion-button>\n  </ion-toolbar>\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-filter-pedidos/form-filter-pedidos.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form-filter-pedidos/form-filter-pedidos.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Filtrar Pedidos</ion-title>    \n  </ion-toolbar>\n</ion-header>\n<ion-content>   \n  <!-- desde, -->\n    \n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-stock/form-stock.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form-stock/form-stock.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Stock</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <h5>Stock Actual: {{producto.stock}} {{producto.unidad}}</h5> \n  Agregar:\n  <ion-item>    \n    <ion-input type=\"number\" [(ngModel)]=\"nuevoStock\"></ion-input> {{producto.unidad}}\n  </ion-item>\n  <p>Stock Total: {{producto.stock + nuevoStock}} {{producto.unidad}}</p>\n</ion-content>\n<ion-footer class=\"ion-no-border ion-padding\">\n  <ion-toolbar> \n    <ion-button  class=\"button-rounded\" slot=\"end\" (click)=\"guardar()\">Guardar</ion-button>  \n    <ion-button class=\"button-rounded\" slot=\"start\"  color=\"light\" (click)=\"cancelar()\">Cancelar</ion-button>\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/list-subscripciones/list-subscripciones.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/list-subscripciones/list-subscripciones.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>List Subscripciones</ion-title>    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">  \n  \n  <ion-row>\n    <ion-col size=\"10\">\n      <ion-input placeholder=\"Buscar\" style=\"border:1px solid rgb(206, 206, 206); border-radius: 5px;\"\n      [(ngModel)]=\"palabraFiltro\"\n      ></ion-input>\n    </ion-col>\n    <ion-col size=\"2\">\n      <ion-button color=\"primary\" style=\"margin-top: -1px; height: 42px;\"  (click)=\"buscar()\">\n          <ion-icon name=\"search\"></ion-icon>\n      </ion-button>\n    </ion-col>\n  </ion-row>\n\n  <ion-list lines=\"none\">    \n    <div *ngFor=\"let item of itemsView\">\n      <app-card-subscription [item]=\"item\"></app-card-subscription>\n    </div>\n    \n  </ion-list>\n\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/select-beneficio/select-beneficio.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/select-beneficio/select-beneficio.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button  (click)=\"atras()\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Seleccione un beneficios</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item-sliding *ngFor=\"let beneficio of beneficios\" (click)=\"seleccionar(beneficio)\" class=\"item-card\">\n    <ion-item  class=\"item-card\">  \n      <div slot=\"start\">\n        <ion-icon name=\"file-tray-full-outline\"></ion-icon>\n      </div>      \n      <ion-label text-wrap>\n        <b>{{beneficio.descripcion}}</b>         \n      </ion-label> \n    </ion-item>  \n  </ion-item-sliding>  \n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/select-grupos-opciones/select-grupos-opciones.page.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/select-grupos-opciones/select-grupos-opciones.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>  \n  <ion-buttons slot=\"start\">\n    <ion-back-button></ion-back-button>\n  </ion-buttons>   \n  <ion-toolbar> \n    <ion-title>Seleccionar Grupo de Opciones</ion-title>    \n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content style=\"margin-top: 50px;\" class=\"ion-padding\">  \n  \n  <ion-searchbar animated \n    placeholder=\"Buscar\"\n    animated=\"true\"\n    showCancelButton=\"never\" \n    color=\"light\" \n    autocomplete=\"on\"\n    enterkeyhint=\"send\"\n    inputmode=\"text\"\n    type=\"text\"\n    debounce=\"300\"\n    value=\"{{palabraFiltro}}\"\n    (ionChange)=\"onChange($event)\">\n  </ion-searchbar>\n  \n  <ion-list lines=\"none\"> \n    <ion-item *ngFor=\"let item of items\" (click)=\"seleccionar(item)\" class=\"item-card\">  \n      <ion-label text-wrap>\n        <h2><b>{{item.nombre}}</b> </h2>   \n        <p *ngFor=\"let opcion of item.opciones\">\n          {{opcion.nombre}} {{opcion.precioVariacion}}$\n        </p>         \n      </ion-label>  \n    </ion-item>\n  </ion-list>\n\n  <div class=\"space\">\n    \n  </div> \n  \n</ion-content>\n<ion-footer class=\"ion-no-border ion-padding\">\n  <ion-toolbar>    \n    <ion-button class=\"button-rounded\" slot=\"start\"  color=\"light\" (click)=\"cancelar()\">Cancelar</ion-button>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/select-mesa/select-mesa.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/select-mesa/select-mesa.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>    \n    <ion-title>Seleccionar Mesa</ion-title>    \n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content style=\"margin-top: 50px;\" class=\"ion-padding\">  \n  <ion-row>     \n      <ion-input placeholder=\"Buscar\" style=\"border:1px solid rgb(206, 206, 206); border-radius: 5px;\"\n      [(ngModel)]=\"palabraFiltro\" (ionChange)=\"buscar()\"\n      ></ion-input> \n  </ion-row>\n\n  <ion-list lines=\"none\">   \n    \n    <ion-item-sliding *ngFor=\"let item of items\" class=\"item-card\" >    \n\n      <ion-item (click)=\"seleccionar(item)\" > \n        <ion-label text-wrap>\n          <h2><b>{{item.nombre}}</b></h2>\n        </ion-label>  \n      </ion-item>\n    \n      <ion-item-options side=\"end\">\n        <ion-item-option (click)=\"editar(item)\"><ion-icon name=\"create\" ></ion-icon> Editar</ion-item-option>\n      </ion-item-options>\n  \n    </ion-item-sliding>\n  </ion-list>\n\n \n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"nuevo()\">\n    <ion-fab-button>\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <div class=\"space\">\n    \n  </div> \n  \n</ion-content>\n<ion-footer class=\"ion-no-border ion-padding\">\n  <ion-toolbar>    \n    <ion-button class=\"button-rounded\" slot=\"start\"  color=\"light\" (click)=\"cancelar()\">Cancelar</ion-button>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ "./src/app/Services/calendarios.service.ts":
/*!*************************************************!*\
  !*** ./src/app/Services/calendarios.service.ts ***!
  \*************************************************/
/*! exports provided: CalendariosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendariosService", function() { return CalendariosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base.service */ "./src/app/Services/base.service.ts");




let CalendariosService = class CalendariosService extends _base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] {
    constructor(afs) {
        super(afs);
        this.afs = afs;
        this.servicioId = "";
        this.calendarioId = "";
    }
    setPathIds(servicioId) {
        this.servicioId = servicioId;
        let comercioId = localStorage.getItem('comercio_seleccionadoId');
        console.log("comercios/" + comercioId + "/servicios/" + this.servicioId + "/calendarios");
        this.setPath("comercios/" + comercioId + "/servicios/" + this.servicioId + "/calendarios");
    }
    set(data) {
        this.servicioId = data.servicioId;
        const param = JSON.parse(JSON.stringify(data));
        let id = ""; //El id es el primer nombre! logica pensada para que reemplace al cambiarse el nombre del plan
        if (param.id != "") {
            id = param.id;
        }
        else {
            id = param.nombre;
        }
        console.log(id);
        console.log(param);
        console.log(this.path);
        return this.afs.collection(this.path).doc(id).set(param);
    }
};
CalendariosService.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
CalendariosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CalendariosService);



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

/***/ "./src/app/Services/global/navegacion-parametros.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/Services/global/navegacion-parametros.service.ts ***!
  \******************************************************************/
/*! exports provided: NavegacionParametrosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavegacionParametrosService", function() { return NavegacionParametrosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let NavegacionParametrosService = class NavegacionParametrosService {
    constructor() { }
};
NavegacionParametrosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], NavegacionParametrosService);



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

/***/ "./src/app/details-image/details-image.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/details-image/details-image.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbHMtaW1hZ2UvZGV0YWlscy1pbWFnZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/details-image/details-image.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/details-image/details-image.page.ts ***!
  \*****************************************************/
/*! exports provided: DetailsImagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsImagePage", function() { return DetailsImagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



let DetailsImagePage = class DetailsImagePage {
    constructor(navParams, modalCtrl) {
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.url = "";
        this.url = this.navParams.get('url');
    }
    ngOnInit() {
    }
    cerrar() {
        this.modalCtrl.dismiss();
    }
    eliminarImagen() {
        this.modalCtrl.dismiss("eliminar");
    }
};
DetailsImagePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
DetailsImagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-details-image',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./details-image.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/details-image/details-image.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./details-image.page.scss */ "./src/app/details-image/details-image.page.scss")).default]
    })
], DetailsImagePage);



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

/***/ "./src/app/form-calendario/form-calendario.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/form-calendario/form-calendario.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0tY2FsZW5kYXJpby9mb3JtLWNhbGVuZGFyaW8ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/form-calendario/form-calendario.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/form-calendario/form-calendario.page.ts ***!
  \*********************************************************/
/*! exports provided: FormCalendarioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormCalendarioPage", function() { return FormCalendarioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Services/toast.service */ "./src/app/Services/toast.service.ts");
/* harmony import */ var _Services_calendarios_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Services/calendarios.service */ "./src/app/Services/calendarios.service.ts");







let FormCalendarioPage = class FormCalendarioPage {
    constructor(formBuilder, navCtrl, modalCtrl, navParams, alertController, firestore, toastServices, calendarioService) {
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.alertController = alertController;
        this.firestore = firestore;
        this.toastServices = toastServices;
        this.calendarioService = calendarioService;
        this.submitted = false;
        this.canElimianr = false;
        this.comercioId = "";
        this.datosForm = this.formBuilder.group({
            id: ['', null],
            nombre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        if (this.navParams.get('calendario')) {
            this.datosForm.patchValue(this.navParams.get('calendario'));
            if (this.navParams.get('calendario').id)
                this.canElimianr = true;
        }
    }
    ngOnInit() {
    }
    get f() { return this.datosForm.controls; }
    guardar() {
        this.submitted = true;
        if (this.datosForm.invalid) {
            this.toastServices.alert('Por favor completar todos los campos marcados con * antes de continuar', "");
            return;
        }
        this.modalCtrl.dismiss(this.datosForm.value);
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
                            this.modalCtrl.dismiss('eliminar');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
FormCalendarioPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] },
    { type: _Services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
    { type: _Services_calendarios_service__WEBPACK_IMPORTED_MODULE_6__["CalendariosService"] }
];
FormCalendarioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-calendario',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./form-calendario.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-calendario/form-calendario.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./form-calendario.page.scss */ "./src/app/form-calendario/form-calendario.page.scss")).default]
    })
], FormCalendarioPage);



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

/***/ "./src/app/form-stock/form-stock.page.scss":
/*!*************************************************!*\
  !*** ./src/app/form-stock/form-stock.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0tc3RvY2svZm9ybS1zdG9jay5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/form-stock/form-stock.page.ts":
/*!***********************************************!*\
  !*** ./src/app/form-stock/form-stock.page.ts ***!
  \***********************************************/
/*! exports provided: FormStockPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormStockPage", function() { return FormStockPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _models_producto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/producto */ "./src/app/models/producto.ts");
/* harmony import */ var _models_variacionStock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/variacionStock */ "./src/app/models/variacionStock.ts");
/* harmony import */ var _Services_productos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Services/productos.service */ "./src/app/Services/productos.service.ts");
/* harmony import */ var _Services_variaciones_stocks_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Services/variaciones-stocks.service */ "./src/app/Services/variaciones-stocks.service.ts");
/* harmony import */ var _Services_woocommerce_woocommerce_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Services/woocommerce/woocommerce.service */ "./src/app/Services/woocommerce/woocommerce.service.ts");








let FormStockPage = class FormStockPage {
    constructor(productosService, modalCtrl, navParams, variacionesStockService, woocommerceService) {
        this.productosService = productosService;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.variacionesStockService = variacionesStockService;
        this.woocommerceService = woocommerceService;
        this.nuevoStock = 0;
        this.producto = new _models_producto__WEBPACK_IMPORTED_MODULE_3__["Producto"]();
        this.producto.asignarValores(this.navParams.get('producto'));
    }
    ngOnInit() {
    }
    cancelar() {
        this.modalCtrl.dismiss();
    }
    guardar() {
        this.producto.stock = this.producto.stock + this.nuevoStock;
        this.modalCtrl.dismiss();
        this.productosService.update(this.producto).then(data => {
            console.log(data);
            this.woocommerceService.setPart("products");
            this.woocommerceService.actualizarProductoInWC(this.producto);
        });
        let vStock = new _models_variacionStock__WEBPACK_IMPORTED_MODULE_4__["variacionStock"]();
        vStock.productoId = this.producto.id;
        vStock.stock = this.producto.stock;
        this.variacionesStockService.setPathProducto(this.producto.id);
        this.variacionesStockService.add(vStock).then(resp => {
            console.log("variacion Guardada");
        });
        //guardar el registro del stock actual con fecha
    }
};
FormStockPage.ctorParameters = () => [
    { type: _Services_productos_service__WEBPACK_IMPORTED_MODULE_5__["ProductosService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
    { type: _Services_variaciones_stocks_service__WEBPACK_IMPORTED_MODULE_6__["VariacionesStocksService"] },
    { type: _Services_woocommerce_woocommerce_service__WEBPACK_IMPORTED_MODULE_7__["WoocommerceService"] }
];
FormStockPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-stock',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./form-stock.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-stock/form-stock.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./form-stock.page.scss */ "./src/app/form-stock/form-stock.page.scss")).default]
    })
], FormStockPage);



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



/***/ }),

/***/ "./src/app/select-grupos-opciones/select-grupos-opciones.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/select-grupos-opciones/select-grupos-opciones.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlbGVjdC1ncnVwb3Mtb3BjaW9uZXMvc2VsZWN0LWdydXBvcy1vcGNpb25lcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/select-grupos-opciones/select-grupos-opciones.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/select-grupos-opciones/select-grupos-opciones.page.ts ***!
  \***********************************************************************/
/*! exports provided: SelectGruposOpcionesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectGruposOpcionesPage", function() { return SelectGruposOpcionesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _Services_grupo_opciones_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/grupo-opciones.service */ "./src/app/Services/grupo-opciones.service.ts");
/* harmony import */ var _Services_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Services/loading.service */ "./src/app/Services/loading.service.ts");






let SelectGruposOpcionesPage = class SelectGruposOpcionesPage {
    constructor(grupoOpcionesService, modalCtrl, router, loadingService) {
        this.grupoOpcionesService = grupoOpcionesService;
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.loadingService = loadingService;
        this.items = [];
        this.itemsAll = [];
        this.palabraFiltro = "";
    }
    ngOnInit() {
        this.grupoOpcionesService.list().subscribe(data => {
            this.itemsAll = data;
            this.buscar();
        });
    }
    onChange(event) {
        this.palabraFiltro = event.target.value;
        this.buscar();
    }
    buscar() {
        if (this.palabraFiltro != "") {
            this.items = [];
            this.itemsAll.forEach(item => {
                if (item.nombre.toLowerCase().includes(this.palabraFiltro.toLowerCase())) {
                    this.items.push(item);
                    return;
                }
                if (item.documento.toLowerCase().includes(this.palabraFiltro.toLowerCase())) {
                    this.items.push(item);
                    return;
                }
            });
        }
        else {
            this.items = this.itemsAll;
        }
    }
    obtenerTodos() {
        this.grupoOpcionesService.list().subscribe((mesas) => {
            this.itemsAll = mesas;
            console.log(this.items);
            this.loadingService.dismissLoading();
            this.buscar();
        });
    }
    seleccionar(item) {
        this.modalCtrl.dismiss({
            'item': item
        });
    }
    cancelar() {
        this.modalCtrl.dismiss();
    }
};
SelectGruposOpcionesPage.ctorParameters = () => [
    { type: _Services_grupo_opciones_service__WEBPACK_IMPORTED_MODULE_4__["GrupoOpcionesService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _Services_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"] }
];
SelectGruposOpcionesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-select-grupos-opciones',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./select-grupos-opciones.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/select-grupos-opciones/select-grupos-opciones.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./select-grupos-opciones.page.scss */ "./src/app/select-grupos-opciones/select-grupos-opciones.page.scss")).default]
    })
], SelectGruposOpcionesPage);



/***/ }),

/***/ "./src/app/select-mesa/select-mesa.page.scss":
/*!***************************************************!*\
  !*** ./src/app/select-mesa/select-mesa.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlbGVjdC1tZXNhL3NlbGVjdC1tZXNhLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/select-mesa/select-mesa.page.ts":
/*!*************************************************!*\
  !*** ./src/app/select-mesa/select-mesa.page.ts ***!
  \*************************************************/
/*! exports provided: SelectMesaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectMesaPage", function() { return SelectMesaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _Services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/loading.service */ "./src/app/Services/loading.service.ts");
/* harmony import */ var _Services_mesas_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Services/mesas.service */ "./src/app/Services/mesas.service.ts");






let SelectMesaPage = class SelectMesaPage {
    constructor(router, route, mesaService, modalCtrl, loadingService) {
        this.router = router;
        this.route = route;
        this.mesaService = mesaService;
        this.modalCtrl = modalCtrl;
        this.loadingService = loadingService;
        this.items = [];
        this.itemsAll = [];
        this.palabraFiltro = "";
        this.ultimoItem = "";
        this.loadingActive = false;
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.ultimoItem = "";
        if (this.route.snapshot.params.filtro)
            this.palabraFiltro = this.route.snapshot.params.filtro;
        this.obtenerTodos();
        setTimeout(() => {
            // Set the focus to the input box of the ion-Searchbar component
            this.input.setFocus();
        }, 100);
    }
    ionViewDidLeave() {
        this.subsItems.unsubscribe();
    }
    buscar() {
        if (this.palabraFiltro != "") {
            this.items = [];
            this.itemsAll.forEach(item => {
                if (item.nombre.toLowerCase().includes(this.palabraFiltro.toLowerCase())) {
                    this.items.push(item);
                    return;
                }
                if (item.documento.toLowerCase().includes(this.palabraFiltro.toLowerCase())) {
                    this.items.push(item);
                    return;
                }
            });
        }
        else {
            this.items = this.itemsAll;
        }
    }
    obtenerTodos() {
        this.subsItems = this.mesaService.list().subscribe((mesas) => {
            this.itemsAll = mesas;
            console.log(this.items);
            this.loadingService.dismissLoading();
            this.buscar();
        });
    }
    seleccionar(item) {
        this.modalCtrl.dismiss({
            'item': item
        });
    }
    nuevo() {
        this.modalCtrl.dismiss("nuevo");
    }
    /*
    nuevo(){
      this.router.navigate(['form-mesa']);
      this.modalCtrl.dismiss();
    }*/
    editar(item) {
        this.router.navigate(['form-mesa', { id: item.id }]);
        this.modalCtrl.dismiss();
    }
    cancelar() {
        this.modalCtrl.dismiss();
    }
};
SelectMesaPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _Services_mesas_service__WEBPACK_IMPORTED_MODULE_5__["MesasService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _Services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInput"], { static: true })
], SelectMesaPage.prototype, "input", void 0);
SelectMesaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-select-mesa',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./select-mesa.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/select-mesa/select-mesa.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./select-mesa.page.scss */ "./src/app/select-mesa/select-mesa.page.scss")).default]
    })
], SelectMesaPage);



/***/ })

}]);
//# sourceMappingURL=common.js.map