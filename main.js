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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*{\\r\\n  margin:0;\\r\\n  padding:0;\\r\\n}    \\r\\n*,\\r\\n*::before,\\r\\n*::after{\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody{\\r\\n  padding-top: 100px;\\r\\n  font-family: Arial, Helvetica, sans-serif;\\r\\n  background-color: rgb(32, 32, 32);\\r\\n  color: white;\\r\\n}\\r\\n\\r\\nimg{\\r\\n  width: 100%;\\r\\n \\r\\n}\\r\\n\\r\\n.header{\\r\\n  background-color: rgb(201, 125, 125);\\r\\n  opacity: 0.95;\\r\\n  z-index: 1;\\r\\n  height: 80px;\\r\\n  gap: 20px;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  position: fixed;\\r\\n  right: 0;\\r\\n  left: 0;\\r\\n  top: 0px;\\r\\n}\\r\\n\\r\\n.header div:hover{\\r\\n  cursor: pointer;\\r\\n  color: orange;\\r\\n}\\r\\n\\r\\n\\r\\n.main-image-container{\\r\\n  margin: auto;\\r\\n  max-width: 400px;\\r\\n  \\r\\n}\\r\\n\\r\\n.page{ \\r\\n  max-width: 800px;\\r\\n  margin: auto;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  gap: 50px;\\r\\n  line-height: 30px;\\r\\n  font-size: 18px;\\r\\n}\\r\\n\\r\\n\\r\\n.img-container{  \\r\\n  width: max(350px, 100%)\\r\\n}\\r\\n\\r\\n.contact-container{\\r\\n  width: max(350px, 80%);\\r\\n  font-size: 30px;\\r\\n  line-height: 60px;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  color: black;\\r\\n  background-color: white;\\r\\n}\\r\\n\\r\\n.contact-github-cont{\\r\\n  width: 30px;\\r\\n}\\r\\n\\r\\na{\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"homePageContent\": () => (/* binding */ homePageContent)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\n\n// first reset the page content with empty textconent and then\n// use the Imported Element class to create the elements for the home page content\nlet homePageContent=function(){\n  _index_js__WEBPACK_IMPORTED_MODULE_0__.page.domEl.textContent=''\n  const descriptionFirst = new _index_js__WEBPACK_IMPORTED_MODULE_0__.ElementClass('p', _index_js__WEBPACK_IMPORTED_MODULE_0__.page, 'description-first', 'Wir in Nürnberg, im herzen der Südstadt können auf eine über 10 Jährige Erfahrung zurückblicken. Unser Ziel ist es mit unserer langjährigen Erfahrung euch das beste und optimale Geschmackserlebnis zu bieten. Cigköfte reicht auf eine traditionelle Herkunft von mehreren hundert Jahren zurück. Es ist eine herzhafte Paste, die aus Bulgur (Weizen), Tomatenmark, Paprikamark, zahlreiche Gewürze, gemahlene Nüsse und weitere Bestandteile besteht. Diese natürlichen Zutaten bieten nicht zuletzt deshalb einen exzellenten Geschmack' )\n  const descriptionSecond = new _index_js__WEBPACK_IMPORTED_MODULE_0__.ElementClass('p', _index_js__WEBPACK_IMPORTED_MODULE_0__.page, 'description-second','Bei uns kannst du dir die türkische Spezialität im Dürüm oder Portionsweise mit frischem Salat, Lavashbrot und unserer Hausgemachten Soße schmecken lassen, wahlweise auch zum mitnehmen. Neben Cigköfte bieten wir selbstverständlich viele verschiedene Vegane Spezialitäten an. Unser Hausgemachtes, Veganes Käsekuchen ist das Highlight für Naschkatzen. Ob Veganer oder nicht Veganer lass dich von unseren köstlichen Speisen überzeugen.') \n  \n  const openingHours = new _index_js__WEBPACK_IMPORTED_MODULE_0__.ElementClass('div', _index_js__WEBPACK_IMPORTED_MODULE_0__.page, 'opening-hours', ) \n  const openingTitle = new _index_js__WEBPACK_IMPORTED_MODULE_0__.ElementClass('h2', openingHours, 'opening-hours-title', 'Öffnungszeiten')\n  const monday = new _index_js__WEBPACK_IMPORTED_MODULE_0__.ElementClass('p', openingHours, 'opening-hours-monday', 'Montag: 12 Uhr - 21 Uhr')\n  const tuesday = new _index_js__WEBPACK_IMPORTED_MODULE_0__.ElementClass('p', openingHours, 'opening-hours-tuesday', 'Dienstag: 12 Uhr - 21 Uhr')\n  const wednesday = new _index_js__WEBPACK_IMPORTED_MODULE_0__.ElementClass('p', openingHours, 'opening-hours-wednesday', 'Mittwoch: 12 Uhr - 21 Uhr')\n  const thursday = new _index_js__WEBPACK_IMPORTED_MODULE_0__.ElementClass('p', openingHours, 'opening-hours-thursday', 'Donnerstag: 12 Uhr - 21 Uhr')\n  const friday = new _index_js__WEBPACK_IMPORTED_MODULE_0__.ElementClass('p', openingHours, 'opening-hours-friday', 'Freitag: 12 Uhr - 22 Uhr')\n  const saturday = new _index_js__WEBPACK_IMPORTED_MODULE_0__.ElementClass('p', openingHours, 'opening-hours-saturday', 'Samstag: 12 Uhr - 22 Uhr')\n  const sunday = new _index_js__WEBPACK_IMPORTED_MODULE_0__.ElementClass('p', openingHours, 'opening-hours-sunday', 'Sonntag: 12 Uhr - 21 Uhr')\n\n  const location = new _index_js__WEBPACK_IMPORTED_MODULE_0__.ElementClass('div', _index_js__WEBPACK_IMPORTED_MODULE_0__.page, 'location')\n  const locationTitle = new _index_js__WEBPACK_IMPORTED_MODULE_0__.ElementClass('h2', location, 'location-title', 'SCHAUT VORBEI')\n  const locationName = new _index_js__WEBPACK_IMPORTED_MODULE_0__.ElementClass('p', location, 'location-name', 'Cigköftem Nürnberg')\n  const locationAdress = new _index_js__WEBPACK_IMPORTED_MODULE_0__.ElementClass('p', location, 'locatin-adress', 'Schweiggerstraße 3')\n  const locationPostCode = new _index_js__WEBPACK_IMPORTED_MODULE_0__.ElementClass('p', location, 'locatin-postcode', '90478 Nürnberg')\n  const locationTel = new _index_js__WEBPACK_IMPORTED_MODULE_0__.ElementClass('p', location, 'locatin-tel', 'Tel: 0911 99 44 91 55')\n}  \n\n// export the home page content\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ElementClass\": () => (/* binding */ ElementClass),\n/* harmony export */   \"page\": () => (/* binding */ page)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _logos_cigkoftem_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logos/cigkoftem-logo.png */ \"./src/logos/cigkoftem-logo.png\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _kontakt_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./kontakt.js */ \"./src/kontakt.js\");\n// Import the main logo\n// Import the contents for the header elements\n\n\n\n\n\n\n\n\n// export the element class \n\n\n\n// Class for Creating an Element as object \n  // creates values such as element, parent, class name and textcontent\n  // automaticly pushes it to its parent array \n  // creates own childs as an array\n  // to get the element use this.domEl\nclass ElementClass { \n  constructor(element, parent, className, text){\n    this.element = element\n    this.parent = parent\n    this.className = className\n    this.text = text      \n    this.domEl = this.domElement()   \n    this.childs = []\n    if(parent === content){ parent.append(this.domEl)}\n    else {parent.domEl.append(this.domEl)}  \n    this.pushToParent()   \n  }\n  domElement(){\n    let newDomElement = document.createElement(this.element)\n    if(this.className){newDomElement.classList.add(this.className)}\n    if(this.text){newDomElement.textContent=this.text}\n    return newDomElement\n  }  \n  pushToParent(){\n    if(this.parent.childs){\n      this.parent.childs.push(this)\n    }\n  }\n}\n\n// get the Content div from html and\n// Create the Elements that are shown on every page such as header and the main image\nconst content = document.querySelector('#content')\n\nconst header = new ElementClass('div', content, 'header')\nconst home = new ElementClass('div', header, 'home', 'HOME')\nconst menu = new ElementClass('div', header, 'menu', 'MENU')\nconst kontakt = new ElementClass('div', header, 'kontakt', 'KONTAKT')\n\nconst mainImageContainer = new ElementClass('div', content, 'main-image-container')\nconst mainImage = new ElementClass('img', mainImageContainer, 'main-image')\nmainImage.domEl.src= _logos_cigkoftem_logo_png__WEBPACK_IMPORTED_MODULE_1__\n\nconst page =  new ElementClass('div', content, 'page', )  \n\n\n\n// inital the page with the home page content\n// add listeners to every clickable header element\n;(0,_home_js__WEBPACK_IMPORTED_MODULE_2__.homePageContent)()\nhome.domEl.addEventListener('click', _home_js__WEBPACK_IMPORTED_MODULE_2__.homePageContent)\n\nmenu.domEl.addEventListener('click', _menu_js__WEBPACK_IMPORTED_MODULE_3__.menuPageContent)\n\nkontakt.domEl.addEventListener('click', _kontakt_js__WEBPACK_IMPORTED_MODULE_4__.kontaktPageContent)\n\n\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/kontakt.js":
/*!************************!*\
  !*** ./src/kontakt.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"kontaktPageContent\": () => (/* binding */ kontaktPageContent)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n/* harmony import */ var _logos_githublogo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logos/githublogo.png */ \"./src/logos/githublogo.png\");\n\n\n\n// first reset the page content with empty textconent and then\n// use the imported element class to create the elements for the kontakt page content\nlet kontaktPageContent= function(){\n_index_js__WEBPACK_IMPORTED_MODULE_0__.page.domEl.textContent='' \nconst contactContainer = new _index_js__WEBPACK_IMPORTED_MODULE_0__.ElementClass('div', _index_js__WEBPACK_IMPORTED_MODULE_0__.page, 'contact-container')\nconst contactTitle = new _index_js__WEBPACK_IMPORTED_MODULE_0__.ElementClass('h2', contactContainer, 'contact-title', 'Contact me')\nconst contactPerson = new _index_js__WEBPACK_IMPORTED_MODULE_0__.ElementClass('div', contactContainer, 'contact-person', 'Özer Kip')\nconst contactMailCont = new _index_js__WEBPACK_IMPORTED_MODULE_0__.ElementClass('div', contactContainer, 'contact-mail-cont')\nconst contactMail = new _index_js__WEBPACK_IMPORTED_MODULE_0__.ElementClass('a', contactMailCont, 'contact-mail', 'ozerkip@hotmail.de')\ncontactMail.domEl.href ='mailto:ozerkip@hotmail.de'\nconst contactGitHubCont = new _index_js__WEBPACK_IMPORTED_MODULE_0__.ElementClass('div', contactContainer, 'contact-github-cont')\nconst contactGitHubLink = new _index_js__WEBPACK_IMPORTED_MODULE_0__.ElementClass('a', contactGitHubCont, 'contact-github-link')\ncontactGitHubLink.domEl.href = 'https://github.com/rezokip'\nconst contactGitHubLogo = new _index_js__WEBPACK_IMPORTED_MODULE_0__.ElementClass('img', contactGitHubLink, 'contact-github-log')\ncontactGitHubLogo.domEl.src=_logos_githublogo_png__WEBPACK_IMPORTED_MODULE_1__\n}\n\n// export the kontakt page content\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/kontakt.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menuPageContent\": () => (/* binding */ menuPageContent)\n/* harmony export */ });\n/* harmony import */ var _images_menu_pic2_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/menu-pic2.jpg */ \"./src/images/menu-pic2.jpg\");\n/* harmony import */ var _images_menu_pic3_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/menu-pic3.jpg */ \"./src/images/menu-pic3.jpg\");\n/* harmony import */ var _images_menu_pic4_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/menu-pic4.jpg */ \"./src/images/menu-pic4.jpg\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n// Import the menu pictures\n\n\n\n\n\n\n// first reset the page content with empty textconent and then\n// use the element class to create the elements\n// use the created image elements and asign its src to the imported images\n// make a nodelist for the image containers\n  // set the displays to none \n  // set the first images display to block\n  // listen for click on the images to change to next image\n    // if its the last image, then go back to the first image\nlet menuPageContent = function(){\n  _index_js__WEBPACK_IMPORTED_MODULE_3__.page.domEl.textContent=''\n  const menuImageContainer1 = new _index_js__WEBPACK_IMPORTED_MODULE_3__.ElementClass('div', _index_js__WEBPACK_IMPORTED_MODULE_3__.page, 'img-container')\n  const menuImageContainer2 = new _index_js__WEBPACK_IMPORTED_MODULE_3__.ElementClass('div', _index_js__WEBPACK_IMPORTED_MODULE_3__.page, 'img-container')\n  const menuImageContainer3 = new _index_js__WEBPACK_IMPORTED_MODULE_3__.ElementClass('div', _index_js__WEBPACK_IMPORTED_MODULE_3__.page, 'img-container')\n  const menuImg1 = new _index_js__WEBPACK_IMPORTED_MODULE_3__.ElementClass('img', menuImageContainer1, 'menu-img1')\n  const menuImg2 = new _index_js__WEBPACK_IMPORTED_MODULE_3__.ElementClass('img', menuImageContainer2, 'menu-img2')\n  const menuImg3 = new _index_js__WEBPACK_IMPORTED_MODULE_3__.ElementClass('img', menuImageContainer3, 'menu-img3')\n  menuImg1.domEl.src = _images_menu_pic2_jpg__WEBPACK_IMPORTED_MODULE_0__\n  menuImg2.domEl.src = _images_menu_pic3_jpg__WEBPACK_IMPORTED_MODULE_1__\n  menuImg3.domEl.src = _images_menu_pic4_jpg__WEBPACK_IMPORTED_MODULE_2__\n\n  let imgContainers = document.querySelectorAll('.img-container')\n\n  for(let image  of imgContainers){\n    image.style.display = 'none'\n  }\n  function renderImg(){\n    imgContainers[0].style.display = 'block'\n  }\n  renderImg()\n\n  for(let i =0; i<imgContainers.length; i++){\n    imgContainers[i].addEventListener('click', function(){\n   \n      this.style.display = 'none'\n      if(i+1<imgContainers.length){\n        imgContainers[i+1].style.display = 'block' \n      }\n      else{\n        imgContainers[0].style.display = 'block'\n      }\n    })\n  }\n}\n\n// export menu page content\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/images/menu-pic2.jpg":
/*!**********************************!*\
  !*** ./src/images/menu-pic2.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d68e28c0d16ef6c8e6f1.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/menu-pic2.jpg?");

/***/ }),

/***/ "./src/images/menu-pic3.jpg":
/*!**********************************!*\
  !*** ./src/images/menu-pic3.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4066b3d1ca2e1079fee5.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/menu-pic3.jpg?");

/***/ }),

/***/ "./src/images/menu-pic4.jpg":
/*!**********************************!*\
  !*** ./src/images/menu-pic4.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6e8f9359113d21e616c6.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/menu-pic4.jpg?");

/***/ }),

/***/ "./src/logos/cigkoftem-logo.png":
/*!**************************************!*\
  !*** ./src/logos/cigkoftem-logo.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6335b4fca868e489456a.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/logos/cigkoftem-logo.png?");

/***/ }),

/***/ "./src/logos/githublogo.png":
/*!**********************************!*\
  !*** ./src/logos/githublogo.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6269f114de85fa34f620.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/logos/githublogo.png?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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