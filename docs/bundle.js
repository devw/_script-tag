/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/email/email.scss":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/email/email.scss ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/components/email/email.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/popup/popup.scss":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/popup/popup.scss ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"div.account-popup {\\n  width: 100%;\\n  height: 100%;\\n  background-color: rgba(0, 0, 0, 0.7);\\n  position: absolute;\\n  top: 0;\\n  display: none;\\n  justify-content: center;\\n  align-items: center;\\n  z-index: 100;\\n}\\n\\ndiv.account-popup__close-popup {\\n  position: absolute;\\n  top: 0;\\n  right: 14px;\\n  font-size: 40px;\\n  transform: rotate(45deg);\\n  cursor: pointer;\\n}\\n\\ndiv.account-popup__content {\\n  width: 500px;\\n  background-color: white;\\n  border-radius: 4px;\\n  position: relative;\\n  padding: 22px;\\n  padding-bottom: 32px;\\n}\\n\\n.account-popup__image {\\n  width: 180px;\\n}\\n\\n.account-popup__checkbox {\\n  margin-right: 10px;\\n}\\n\\n.account-popup__subtitle {\\n  margin: 18px 0;\\n}\\n\\n.account-popup__mandatory-container {\\n  margin-top: 10px;\\n}\\n\\n.account-popup__checkbox-container {\\n  display: flex;\\n  align-items: center;\\n  margin-top: 14px;\\n}\\n\\n.account-popup__inputs-container {\\n  margin-bottom: 10px;\\n}\\n.account-popup__inputs-container .input-text {\\n  border-bottom: 1px solid;\\n  padding-left: 2px;\\n  margin-bottom: 13px;\\n}\\n.account-popup__inputs-container .input-text::placeholder {\\n  text-transform: uppercase;\\n}\\n\\n.z-h4,\\n.rte h4,\\n.section-page .rte h2,\\n.article .rte h2 {\\n  font-size: 1.875rem;\\n  letter-spacing: 0.59px;\\n  line-height: 36px;\\n}\\n\\n.account-popup__container .input-text {\\n  border-top-style: hidden;\\n  border-right-style: hidden;\\n  border-left-style: hidden;\\n  border-bottom-style: groove;\\n  width: 100%;\\n  font: 400 13.3333px Arial;\\n}\\n\\n.account-popup__container button {\\n  padding: 10px;\\n  width: 100%;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/components/popup/popup.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/register/register.scss":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/register/register.scss ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/components/register/register.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/signin/signin.scss":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/signin/signin.scss ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/components/signin/signin.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  }\n\n  if (options.maybeNeedQuotes && /[\\t\\n\\f\\r \"'=<>`]/.test(url)) {\n    return \"\\\"\".concat(url, \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/html-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/components/email/email.html":
/*!*****************************************!*\
  !*** ./src/components/email/email.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___ = __webpack_require__(/*! ../../../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\nvar ___HTML_LOADER_IMPORT_0___ = __webpack_require__(/*! ./images/chien-chat.png */ \"./src/components/email/images/chien-chat.png\");\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_0___);\nvar code = \"<img class=\\\"account-popup__image\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\">\\n<div class=\\\"account-popup__title z-h4 heading\\\">\\n    Connexion / Inscription.\\n</div>\\n<div class=\\\"account-popup__subtitle text t-4\\\">\\n    <p>Renseignez&nbsp;votre adresse email&nbsp;pour&nbsp;continuer.</p>\\n</div>\\n<div class=\\\"account-popup__error\\\" data-account-error=\\\"\\\"></div>\\n<div class=\\\"account-popup__inputs-container \\\">\\n    <input class=\\\"input-text\\\" data-email-input=\\\"\\\" placeholder=\\\"Votre email\\\" type=\\\"email\\\" value=\\\"antonio@studiozerance.fr\\\">\\n</div>\\n<div class=\\\"account-popup__button\\\">\\n    <button class=\\\"button button--full button--secondary\\\" data-email-button=\\\"\\\" disabled=\\\"\\\">Valider</button>\\n</div>\\n\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack:///./src/components/email/email.html?");

/***/ }),

/***/ "./src/components/email/email.js":
/*!***************************************!*\
  !*** ./src/components/email/email.js ***!
  \***************************************/
/*! exports provided: emailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"emailComponent\", function() { return emailComponent; });\n/* harmony import */ var _email_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./email.scss */ \"./src/components/email/email.scss\");\n/* harmony import */ var _email_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_email_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _email_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./email.html */ \"./src/components/email/email.html\");\n/* harmony import */ var _email_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_email_html__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_change_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/change-component */ \"./src/services/change-component.js\");\n\n\n\n\nconst toggleButton = (e) => {\n    const btn = node.querySelector(\"button\");\n    const isEmail = /\\S+@\\S+\\.\\S+/.test(e.target.value);\n    isEmail\n        ? btn.removeAttribute(\"disabled\")\n        : btn.setAttribute(\"disabled\", \"true\");\n};\n\nconst email = () => node.querySelector(\"input\").value;\n\nconst init = (node) => {\n    node.querySelector(\".input-text\").addEventListener(\"input\", toggleButton);\n    node.querySelector(\"button\").addEventListener(\"click\", () => Object(_services_change_component__WEBPACK_IMPORTED_MODULE_2__[\"changeEmailView\"])(email()));\n};\n\nconst node = document.createElement(\"div\");\nnode.innerHTML = _email_html__WEBPACK_IMPORTED_MODULE_1___default.a;\n\nconst emailComponent = () => ({ dom: node, callback: init });\n\n\n//# sourceURL=webpack:///./src/components/email/email.js?");

/***/ }),

/***/ "./src/components/email/email.scss":
/*!*****************************************!*\
  !*** ./src/components/email/email.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./email.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/email/email.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/components/email/email.scss?");

/***/ }),

/***/ "./src/components/email/images/chien-chat.png":
/*!****************************************************!*\
  !*** ./src/components/email/images/chien-chat.png ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"https://devw.github.io/script-tag/331390584cb4fcf53d8ee930e76aaf05.png\";\n\n//# sourceURL=webpack:///./src/components/email/images/chien-chat.png?");

/***/ }),

/***/ "./src/components/popup/popup.html":
/*!*****************************************!*\
  !*** ./src/components/popup/popup.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Module\nvar code = \"<div class=\\\"account-popup relative\\\" data-account-state=\\\"\\\">\\n    <div class=\\\"account-popup__content\\\">\\n        <div class=\\\"cart__loader-container\\\" data-account-loader=\\\"\\\" style=\\\"display: none;\\\">\\n            <div class=\\\"lds-dual-ring\\\"></div>\\n        </div>\\n        <div class=\\\"account-popup__close-popup\\\">+</div>\\n        <div class=\\\"account-popup__container\\\"></div>\\n    </div>\\n</div>\\n\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack:///./src/components/popup/popup.html?");

/***/ }),

/***/ "./src/components/popup/popup.js":
/*!***************************************!*\
  !*** ./src/components/popup/popup.js ***!
  \***************************************/
/*! exports provided: popupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"popupComponent\", function() { return popupComponent; });\n/* harmony import */ var _popup_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup.scss */ \"./src/components/popup/popup.scss\");\n/* harmony import */ var _popup_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_popup_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _popup_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popup.html */ \"./src/components/popup/popup.html\");\n/* harmony import */ var _popup_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_popup_html__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst popupComponent = () => {\n    const element = document.createElement(\"div\");\n    element.innerHTML = _popup_html__WEBPACK_IMPORTED_MODULE_1___default.a;\n    return element;\n};\n\n\n//# sourceURL=webpack:///./src/components/popup/popup.js?");

/***/ }),

/***/ "./src/components/popup/popup.scss":
/*!*****************************************!*\
  !*** ./src/components/popup/popup.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./popup.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/popup/popup.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/components/popup/popup.scss?");

/***/ }),

/***/ "./src/components/register/images/Chien-16.png":
/*!*****************************************************!*\
  !*** ./src/components/register/images/Chien-16.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"https://devw.github.io/script-tag/2e440e3899d8b2376497eb6551c7cfeb.png\";\n\n//# sourceURL=webpack:///./src/components/register/images/Chien-16.png?");

/***/ }),

/***/ "./src/components/register/register.html":
/*!***********************************************!*\
  !*** ./src/components/register/register.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___ = __webpack_require__(/*! ../../../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\nvar ___HTML_LOADER_IMPORT_0___ = __webpack_require__(/*! ./images/Chien-16.png */ \"./src/components/register/images/Chien-16.png\");\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_0___);\nvar code = \"<img class=\\\"account-popup__image\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\">\\n<div class=\\\"account-popup__title z-h4 heading\\\">\\n    Création de compte.\\n</div>\\n<div class=\\\"account-popup__subtitle text t-4\\\">\\n    <p>Renseignez&nbsp;vos informations&nbsp;pour créer votre compte Franklin.</p>\\n</div>\\n<div class=\\\"account-popup__error\\\" data-account-error=\\\"\\\"></div>\\n<form class=\\\"account-popup__inputs-container \\\" data-register-form=\\\"\\\">\\n    <input class=\\\"input-text\\\" data-register-mail=\\\"\\\" name=\\\"email\\\" placeholder=\\\"Votre email\\\" type=\\\"email\\\">\\n    <input class=\\\"input-text\\\" name=\\\"firstName\\\" placeholder=\\\"Votre prénom\\\" type=\\\"text\\\">\\n    <input class=\\\"input-text\\\" name=\\\"lastName\\\" placeholder=\\\"Votre nom\\\" type=\\\"text\\\">\\n    <input class=\\\"input-text\\\" data-register-password=\\\"\\\" name=\\\"password\\\" placeholder=\\\"Votre mot de passe\\\" type=\\\"password\\\">\\n    <input class=\\\"input-text\\\" data-register-confirmation=\\\"\\\" name=\\\"confirmPassword\\\" placeholder=\\\"Confirmez votre mot de passe\\\" type=\\\"password\\\">\\n    <div class=\\\"account-popup__checkbox-container\\\">\\n        <input class=\\\"account-popup__checkbox\\\" data-register-newscheck=\\\"\\\" name=\\\"accepts_marketing\\\" type=\\\"checkbox\\\">\\n        <div class=\\\"text t-5 uppercase pointer\\\" data-register-newstext=\\\"\\\">\\n            Je m'inscris à la newsletter Franklin\\n        </div>\\n    </div>\\n</form>\\n<div class=\\\"account-popup__button\\\">\\n    <button class=\\\"button button--full button--secondary button--disabled\\\" data-register-button=\\\"\\\">Créer un compte</button>\\n</div>\\n\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack:///./src/components/register/register.html?");

/***/ }),

/***/ "./src/components/register/register.js":
/*!*********************************************!*\
  !*** ./src/components/register/register.js ***!
  \*********************************************/
/*! exports provided: registerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"registerComponent\", function() { return registerComponent; });\n/* harmony import */ var _register_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.scss */ \"./src/components/register/register.scss\");\n/* harmony import */ var _register_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_register_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _register_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.html */ \"./src/components/register/register.html\");\n/* harmony import */ var _register_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_register_html__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_storefront__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/storefront */ \"./src/services/storefront.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils.js */ \"./src/utils.js\");\n\n\n\n\n\nconst listener = () => {\n    const values = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__[\"serialize\"])(node.querySelector(\"form\"));\n    values.accepts_marketing = values.accepts_marketing === \"on\";\n    return Object(_services_storefront__WEBPACK_IMPORTED_MODULE_2__[\"registerUser\"])(values);\n};\n\nconst init = (node) =>\n    node.querySelector(\"button\").addEventListener(\"click\", listener);\n\nconst node = document.createElement(\"div\");\nnode.innerHTML = _register_html__WEBPACK_IMPORTED_MODULE_1___default.a;\n\nconst registerComponent = () => ({ dom: node, callback: init });\n\n\n//# sourceURL=webpack:///./src/components/register/register.js?");

/***/ }),

/***/ "./src/components/register/register.scss":
/*!***********************************************!*\
  !*** ./src/components/register/register.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./register.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/register/register.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/components/register/register.scss?");

/***/ }),

/***/ "./src/components/signin/images/chat.png":
/*!***********************************************!*\
  !*** ./src/components/signin/images/chat.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"https://devw.github.io/script-tag/a53af018001d43d4aa79c9a4b7331f3b.png\";\n\n//# sourceURL=webpack:///./src/components/signin/images/chat.png?");

/***/ }),

/***/ "./src/components/signin/signin.html":
/*!*******************************************!*\
  !*** ./src/components/signin/signin.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___ = __webpack_require__(/*! ../../../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\nvar ___HTML_LOADER_IMPORT_0___ = __webpack_require__(/*! ./images/chat.png */ \"./src/components/signin/images/chat.png\");\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_0___);\nvar code = \"<div class=\\\"account-popup__container\\\">\\n    <img class=\\\"account-popup__image\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\">\\n    <div class=\\\"account-popup__title z-h4 heading\\\">\\n        Connexion.\\n    </div>\\n    <div class=\\\"account-popup__subtitle text t-4\\\">\\n        <p>Renseignez&nbsp;votre adresse email et votre mot de passe&nbsp;pour vous connecter.</p>\\n    </div>\\n    <div class=\\\"account-popup__error\\\" data-account-error=\\\"\\\"></div>\\n    <form class=\\\"account-popup__inputs-container\\\" data-signin-form=\\\"\\\">\\n        <input class=\\\"input-text\\\" data-signin-mail=\\\"\\\" name=\\\"email\\\" placeholder=\\\"Votre email\\\" type=\\\"email\\\">\\n        <input class=\\\"input-text\\\" data-signin-password=\\\"\\\" name=\\\"password\\\" placeholder=\\\"Votre mot de passe\\\" type=\\\"password\\\">\\n    </form>\\n    <div class=\\\"account-popup__button\\\">\\n        <button class=\\\"button button--full button--secondary\\\" data-signin-button=\\\"\\\">Se connecter</button>\\n    </div>\\n    <div class=\\\"account-popup__mandatory-container align-left\\\">\\n        <div class=\\\"text t-6 underline pointer\\\" data-signin-forgot=\\\"\\\">\\n            Mot de passe oublié\\n        </div>\\n    </div>\\n</div>\\n\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack:///./src/components/signin/signin.html?");

/***/ }),

/***/ "./src/components/signin/signin.js":
/*!*****************************************!*\
  !*** ./src/components/signin/signin.js ***!
  \*****************************************/
/*! exports provided: signinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"signinComponent\", function() { return signinComponent; });\n/* harmony import */ var _signin_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signin.scss */ \"./src/components/signin/signin.scss\");\n/* harmony import */ var _signin_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_signin_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _signin_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signin.html */ \"./src/components/signin/signin.html\");\n/* harmony import */ var _signin_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_signin_html__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst signinComponent = () => {\n    const element = document.createElement(\"div\");\n    element.innerHTML = _signin_html__WEBPACK_IMPORTED_MODULE_1___default.a;\n    return { dom: element, callback: () => {} };\n};\n\n\n//# sourceURL=webpack:///./src/components/signin/signin.js?");

/***/ }),

/***/ "./src/components/signin/signin.scss":
/*!*******************************************!*\
  !*** ./src/components/signin/signin.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./signin.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/signin/signin.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/components/signin/signin.scss?");

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n    IMAGE_URL: \"https://devw.github.io/script-tag/\",\n    STOREFRONT_URL: \"https://paso2020.myshopify.com/api/graphql\",\n    STOREFRONT_TOKEN: \"fcff98a27bb929d313f8bf1e7c1e8594\",\n    AWS: \"https://cldw0t4rik.execute-api.eu-west-1.amazonaws.com\",\n};\n\n\n//# sourceURL=webpack:///./src/config.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_popup_popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/popup/popup */ \"./src/components/popup/popup.js\");\n/* harmony import */ var _services_storefront__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/storefront */ \"./src/services/storefront.js\");\n/* harmony import */ var _services_aws__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/aws */ \"./src/services/aws.js\");\n/* harmony import */ var _services_change_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/change-component */ \"./src/services/change-component.js\");\n\n\n\n\n\ndocument.body.appendChild(Object(_components_popup_popup__WEBPACK_IMPORTED_MODULE_0__[\"popupComponent\"])());\n\nwindow[\"AP\"] = Object.assign(_services_change_component__WEBPACK_IMPORTED_MODULE_3__[\"changeComponent\"], _services_storefront__WEBPACK_IMPORTED_MODULE_1__[\"storefront\"], _services_aws__WEBPACK_IMPORTED_MODULE_2__[\"aws\"]);\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/queries/mutations.js":
/*!**********************************!*\
  !*** ./src/queries/mutations.js ***!
  \**********************************/
/*! exports provided: customerCreate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"customerCreate\", function() { return customerCreate; });\nconst customerCreate = `mutation customerCreate($input: CustomerCreateInput!) {\n  customerCreate(input: $input) {\n    customer {\n      id\n    }\n    customerUserErrors {\n      code\n      field\n      message\n    }\n  }\n}`;\n\n\n//# sourceURL=webpack:///./src/queries/mutations.js?");

/***/ }),

/***/ "./src/services/aws.js":
/*!*****************************!*\
  !*** ./src/services/aws.js ***!
  \*****************************/
/*! exports provided: aws */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"aws\", function() { return aws; });\nconst config = __webpack_require__(/*! ../config.js */ \"./src/config.js\");\n\nconst postData = async (url, data) => {\n    const response = await fetch(url, {\n        method: \"POST\",\n        mode: \"cors\",\n        cache: \"no-cache\",\n        credentials: \"same-origin\",\n        headers: {\n            \"Content-Type\": \"application/json\",\n        },\n        redirect: \"follow\",\n        referrerPolicy: \"no-referrer\",\n        body: JSON.stringify(data),\n    });\n    return response.json();\n};\n\nconst aws = {\n    validateEmail: async (email) => {\n        const resp = await postData(`${config.AWS}/prod/customers/search`, {\n            email: email,\n        });\n        return resp.data;\n    },\n};\n\n\n//# sourceURL=webpack:///./src/services/aws.js?");

/***/ }),

/***/ "./src/services/change-component.js":
/*!******************************************!*\
  !*** ./src/services/change-component.js ***!
  \******************************************/
/*! exports provided: changeComponent, changeEmailView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"changeComponent\", function() { return changeComponent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"changeEmailView\", function() { return changeEmailView; });\n/* harmony import */ var _components_email_email__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/email/email */ \"./src/components/email/email.js\");\n/* harmony import */ var _components_register_register__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/register/register */ \"./src/components/register/register.js\");\n/* harmony import */ var _components_signin_signin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/signin/signin */ \"./src/components/signin/signin.js\");\n/* harmony import */ var _load_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./load-component */ \"./src/services/load-component.js\");\n/* harmony import */ var _aws__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./aws */ \"./src/services/aws.js\");\n\n\n\n\n\n\nconst changeComponent = {\n    email: () => Object(_load_component__WEBPACK_IMPORTED_MODULE_3__[\"loadComponent\"])(Object(_components_email_email__WEBPACK_IMPORTED_MODULE_0__[\"emailComponent\"])()),\n    register: () => Object(_load_component__WEBPACK_IMPORTED_MODULE_3__[\"loadComponent\"])(Object(_components_register_register__WEBPACK_IMPORTED_MODULE_1__[\"registerComponent\"])()),\n    signin: () => Object(_load_component__WEBPACK_IMPORTED_MODULE_3__[\"loadComponent\"])(Object(_components_signin_signin__WEBPACK_IMPORTED_MODULE_2__[\"signinComponent\"])()),\n};\n\nconst changeEmailView = async (email) => {\n    const isValidEmail = await _aws__WEBPACK_IMPORTED_MODULE_4__[\"aws\"].validateEmail(email);\n    isValidEmail ? changeComponent.signin() : changeComponent.register();\n};\n\n\n//# sourceURL=webpack:///./src/services/change-component.js?");

/***/ }),

/***/ "./src/services/load-component.js":
/*!****************************************!*\
  !*** ./src/services/load-component.js ***!
  \****************************************/
/*! exports provided: loadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadComponent\", function() { return loadComponent; });\nconst popupContainer = \".account-popup__container\";\nconst popup = \".account-popup\";\nconst popupClose = \".account-popup__close-popup\";\n\nconst init = (node) => {\n    node.querySelector(popupContainer).innerHTML = \"\";\n    node.style.display = \"flex\";\n    node.querySelector(popupClose).addEventListener(\"click\", () => {\n        node.style.display = \"none\";\n    });\n};\n\nconst loadComponent = ({ dom, callback }) => {\n    const node = document.querySelector(popup);\n    init(node);\n    node.querySelector(popupContainer).appendChild(dom);\n    callback(node);\n};\n\n\n//# sourceURL=webpack:///./src/services/load-component.js?");

/***/ }),

/***/ "./src/services/storefront.js":
/*!************************************!*\
  !*** ./src/services/storefront.js ***!
  \************************************/
/*! exports provided: registerUser, activateAccount, storefront */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"registerUser\", function() { return registerUser; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"activateAccount\", function() { return activateAccount; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"storefront\", function() { return storefront; });\n/* harmony import */ var _queries_mutations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../queries/mutations */ \"./src/queries/mutations.js\");\n\n\nconst config = __webpack_require__(/*! ../config.js */ \"./src/config.js\");\n\nconst getParams = ({ query, input }) => ({\n    query: query,\n    variables: {\n        input: input,\n    },\n});\n\nconst getHeader = (params) => ({\n    method: \"post\",\n    headers: {\n        \"Content-Type\": \"application/json\",\n        Accept: \"application/json\",\n        \"X-Shopify-Storefront-Access-Token\": config.STOREFRONT_TOKEN,\n    },\n    body: JSON.stringify(params),\n});\n\nconst registerUser = async (input) => {\n    delete input.confirmPassword; // TO improve\n    const params = getParams({ query: _queries_mutations__WEBPACK_IMPORTED_MODULE_0__[\"customerCreate\"], input: input });\n    console.log(params);\n    // const response = await fetch(config.STOREFRONT_URL, getHeader(params));\n    // const data = await response.json();\n    // console.log(JSON.stringify(data));\n};\nconst activateAccount = async () => {\n    const response = await fetch(config.STOREFRONT_URL, getHeader(params));\n    const data = await response.json();\n    console.log(JSON.stringify(data));\n};\n\nconst storefront = {\n    activateAccount: activateAccount,\n    registerUser: registerUser,\n};\n\n\n//# sourceURL=webpack:///./src/services/storefront.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: serialize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"serialize\", function() { return serialize; });\nconst serialize = (form) => {\n    const reducer = (acc, cur) => Object.assign(acc, { [cur[0]]: cur[1] });\n    return Array.from(new FormData(form)).reduce(reducer, {});\n};\n\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });