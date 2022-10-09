/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ElementClass\": () => (/* binding */ ElementClass),\n/* harmony export */   \"page\": () => (/* binding */ page)\n/* harmony export */ });\n/* harmony import */ var _cigkoftem_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cigkoftem-logo.png */ \"./src/cigkoftem-logo.png\");\n/* harmony import */ var _kontakt_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./kontakt.js */ \"./src/kontakt.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n\nconst CigkoftemLogo = new Image()\nCigkoftemLogo.src = _cigkoftem_logo_png__WEBPACK_IMPORTED_MODULE_0__\n\n;\n\n\n\nclass ElementClass { \n  constructor(element, parent, className, text){\n    this.element = element\n    this.parent = parent\n    this.className = className\n    this.text = text      \n    this.domEl = this.domElement()   \n    this.childs = []\n    if(parent === content){ parent.append(this.domEl)}\n    else {parent.domEl.append(this.domEl)}  \n    this.pushToParent()   \n  }\n  domElement(){\n    let newDomElement = document.createElement(this.element)\n    if(this.className){newDomElement.classList.add(this.className)}\n    if(this.text){newDomElement.textContent=this.text}\n    return newDomElement\n  }  \n  pushToParent(){\n    if(this.parent.childs){\n      this.parent.childs.push(this)\n    }\n  }\n}\n\n\n\nconst content = document.querySelector('#content')\nconst imageContainer = new ElementClass('div', content, 'image-container')\nimageContainer.domEl.appendChild(CigkoftemLogo)\nlet header = new ElementClass('div', content, 'header')\nlet home = new ElementClass('div', header, 'home', 'HOME')\nlet menu = new ElementClass('div', header, 'menu', 'MENU')\nlet kontakt = new ElementClass('div', header, 'kontakt', 'KONTAKT')\nlet page =  new ElementClass('div', content, 'page', )  \n\nlet homePageContent=function(){\n  let descriptionFirst = new ElementClass('p', page, 'description-first', 'Wir in Nürnberg, im herzen der Südstadt können auf eine über 10 Jährige Erfahrung zurückblicken. Unser Ziel ist es mit unserer langjährigen Erfahrung euch das beste und optimale Geschmackserlebnis zu bieten. Cigköfte reicht auf eine traditionelle Herkunft von mehreren hundert Jahren zurück. Es ist eine herzhafte Paste, die aus Bulgur (Weizen), Tomatenmark, Paprikamark, zahlreiche Gewürze, gemahlene Nüsse und weitere Bestandteile besteht. Diese natürlichen Zutaten bieten nicht zuletzt deshalb einen exzellenten Geschmack' )\n  let descriptionSecond = new ElementClass('p', page, 'description-second','Bei uns kannst du dir die türkische Spezialität im Dürüm oder Portionsweise mit frischem Salat, Lavashbrot und unserer Hausgemachten Soße schmecken lassen, wahlweise auch zum mitnehmen. Neben Cigköfte bieten wir selbstverständlich viele verschiedene Vegane Spezialitäten an. Unser Hausgemachtes, Veganes Käsekuchen ist das Highlight für Naschkatzen. Ob Veganer oder nicht Veganer lass dich von unseren köstlichen Speisen überzeugen.') \n  \n  let openingHours = new ElementClass('div', page, 'opening-hours', ) \n  let openingTitle = new ElementClass('h2', openingHours, 'opening-hours-title', 'Öffnungszeiten')\n  let monday = new ElementClass('p', openingHours, 'opening-hours-monday', 'Montag: 12 Uhr - 21 Uhr')\n  let tuesday = new ElementClass('p', openingHours, 'opening-hours-tuesday', 'Dienstag: 12 Uhr - 21 Uhr')\n  let wednesday = new ElementClass('p', openingHours, 'opening-hours-monday', 'Mittwoch: 12 Uhr - 21 Uhr')\n  let thursday = new ElementClass('p', openingHours, 'opening-hours-monday', 'Donnerstag: 12 Uhr - 21 Uhr')\n  let friday = new ElementClass('p', openingHours, 'opening-hours-monday', 'Freitag: 12 Uhr - 22 Uhr')\n  let saturday = new ElementClass('p', openingHours, 'opening-hours-monday', 'Samstag: 12 Uhr - 22 Uhr')\n  let sunday = new ElementClass('p', openingHours, 'opening-hours-monday', 'Sonntag: 12 Uhr - 21 Uhr')\n\n  let location = new ElementClass('div', page, 'location')\n  let locationTitle = new ElementClass('h2', location, 'location-title', 'SCHAUT VORBEI')\n  let locationName = new ElementClass('p', location, 'location-name', 'Cigköftem Nürnberg')\n  let locationAdress = new ElementClass('p', location, 'locatin-adress', 'Schweiggerstraße 3')\n  let locationPostCode = new ElementClass('p', location, 'locatin-postcode', '90478 Nürnberg')\n  let locationTel = new ElementClass('p', location, 'locatin-tel', 'Tel: 0911 99 44 91 55')\n\n}  \n\nhomePageContent()\nhome.domEl.addEventListener('click', function(){\n  page.domEl.textContent= ''\n  ;(0,_kontakt_js__WEBPACK_IMPORTED_MODULE_1__.kontaktPageContent)()\n})\n\nmenu.domEl.addEventListener('click', function(){\n  page.domEl.textContent=''\n  ;(0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.menuPageContent)()\n})\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/kontakt.js":
/*!************************!*\
  !*** ./src/kontakt.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"kontaktPageContent\": () => (/* binding */ kontaktPageContent)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\n\n\nlet kontaktPageContent= function(){\n \nlet openingHours = new _index_js__WEBPACK_IMPORTED_MODULE_0__.ElementClass('div', _index_js__WEBPACK_IMPORTED_MODULE_0__.page, 'opening-hours', ) \nlet openingTitle = new _index_js__WEBPACK_IMPORTED_MODULE_0__.ElementClass('h2', openingHours, 'opening-hours-title', 'Öffnungszeiten')\nlet monday = new _index_js__WEBPACK_IMPORTED_MODULE_0__.ElementClass('p', openingHours, 'opening-hours-monday', 'Montag: 12 Uhr - 21 Uhr')\nlet tuesday = new _index_js__WEBPACK_IMPORTED_MODULE_0__.ElementClass('p', openingHours, 'opening-hours-tuesday', 'Dienstag: 12 Uhr - 21 Uhr')\nlet wednesday = new _index_js__WEBPACK_IMPORTED_MODULE_0__.ElementClass('p', openingHours, 'opening-hours-monday', 'Mittwoch: 12 Uhr - 21 Uhr')\nlet thursday = new _index_js__WEBPACK_IMPORTED_MODULE_0__.ElementClass('p', openingHours, 'opening-hours-monday', 'Donnerstag: 12 Uhr - 21 Uhr')\nlet friday = new _index_js__WEBPACK_IMPORTED_MODULE_0__.ElementClass('p', openingHours, 'opening-hours-monday', 'Freitag: 12 Uhr - 22 Uhr')\nlet saturday = new _index_js__WEBPACK_IMPORTED_MODULE_0__.ElementClass('p', openingHours, 'opening-hours-monday', 'Samstag: 12 Uhr - 22 Uhr')\nlet sunday = new _index_js__WEBPACK_IMPORTED_MODULE_0__.ElementClass('p', openingHours, 'opening-hours-monday', 'Sonntag: 12 Uhr - 21 Uhr')\n}\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/kontakt.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menuPageContent\": () => (/* binding */ menuPageContent)\n/* harmony export */ });\n\nlet menuPageContent = function(){\n\nlet imgContainers = document.querySelectorAll('.img-container')\n\n\nfor(let i =0; i<imgContainers.length; i++){\n  imgContainers[i].style.display = 'none'\n}\n\nfunction renderImg(){\n  imgContainers[0].style.display = 'block'\n}\n\nrenderImg()\n\n\n\nfor(let i =0; i<imgContainers.length; i++){\n  \n  imgContainers[i].addEventListener('click', function(){\n \n    console.log(imgContainers[i]) \n    this.style.display = 'none'\n    if(i+1<imgContainers.length){\n      imgContainers[i+1].style.display = 'block' \n    }\n    else{\n      imgContainers[0].style.display = 'block'\n    }\n  })\n}\n\n\n}\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/cigkoftem-logo.png":
/*!********************************!*\
  !*** ./src/cigkoftem-logo.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6335b4fca868e489456a.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/cigkoftem-logo.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;