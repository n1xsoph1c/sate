/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["React"], factory);
	else if(typeof exports === 'object')
		exports["sate-editor"] = factory(require("react"));
	else
		root["sate-editor"] = factory(root["React"]);
})(self, function(__WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/core/decoder.tsx":
/*!******************************!*\
  !*** ./src/core/decoder.tsx ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ \"./src/core/types.ts\");\n\n\nfunction Collapsible(_a) {\n    var heading = _a.heading, children = _a.children;\n    var _b = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), isOpen = _b[0], setIsOpen = _b[1];\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null,\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", { onClick: function () { return setIsOpen(!isOpen); } },\n            isOpen ? '▼' : '►',\n            \" \",\n            heading),\n        isOpen && react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, children)));\n}\nvar Decoder = /** @class */ (function () {\n    function Decoder() {\n        this.elementStyles = {\n            h1: \"my-2 text-[30px] uppercase font-extrabold text-main\",\n            h2: \"my-2 text-[20px] uppercase font-bold text-main\",\n            h3: \"my-2 text-[15px] uppercase font-semibold text-main\",\n            h4: \"my-2 text-sm uppercase font-medium text-main\",\n            hr: \"w-1/2 h-1 bg-dark mb-5 mx-0\",\n            p: \"my-1 text-sm\",\n            collapsible: \"border rounded-md p-2 mt-2\",\n            collapsibleButton: \"cursor-pointer ml-2\",\n        };\n    }\n    Decoder.prototype.createElement = function (type, content, key) {\n        var _a;\n        switch (type) {\n            case _types__WEBPACK_IMPORTED_MODULE_1__.ESateElements.p:\n                return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", { className: this.elementStyles.p, key: key },\n                    \" \",\n                    content,\n                    \" \");\n            case _types__WEBPACK_IMPORTED_MODULE_1__.ESateElements.h1:\n                return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", { className: this.elementStyles.h1, key: key },\n                    \" \",\n                    content,\n                    \" \");\n            case _types__WEBPACK_IMPORTED_MODULE_1__.ESateElements.h2:\n                return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", { className: this.elementStyles.h2, key: key },\n                    \" \",\n                    content,\n                    \" \");\n            case _types__WEBPACK_IMPORTED_MODULE_1__.ESateElements.h3:\n                return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h3\", { className: this.elementStyles.h3, key: key },\n                    \" \",\n                    content,\n                    \" \");\n            case _types__WEBPACK_IMPORTED_MODULE_1__.ESateElements.h4:\n                return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h4\", { className: this.elementStyles.h4, key: key },\n                    \" \",\n                    content,\n                    \" \");\n            case _types__WEBPACK_IMPORTED_MODULE_1__.ESateElements.hr:\n                return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"hr\", { className: this.elementStyles.hr });\n            case _types__WEBPACK_IMPORTED_MODULE_1__.ESateElements.br:\n                return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", { key: key });\n            case _types__WEBPACK_IMPORTED_MODULE_1__.ESateElements.img:\n                return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", { key: key, className: 'w-full aspect-square rounded-2xl' },\n                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", { src: content, alt: \"\", className: 'w-full h-full object-cover rounded-2xl' })));\n            case _types__WEBPACK_IMPORTED_MODULE_1__.ESateElements.Collapsible:\n                if (typeof content === 'string') {\n                    // Handle the case where content is a string (may need to handle this differently)\n                    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", { key: key }, content);\n                }\n                else if (content && 'heading' in content && 'content' in content) {\n                    // Ensure that content is a TCollapsible object\n                    var collapsibleContent = content;\n                    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Collapsible, { key: key, heading: collapsibleContent.heading || '' }, (_a = collapsibleContent.content) === null || _a === void 0 ? void 0 : _a.map(function (item) {\n                        var _a;\n                        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(item.type, { key: item.id }, (_a = item.content) === null || _a === void 0 ? void 0 : _a.toString());\n                    })));\n                }\n                else {\n                    // Handle the case where content is neither a string nor a TCollapsible\n                    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null); // or handle it in a way that makes sense for your application\n                }\n            default:\n                break;\n        }\n    };\n    Decoder.prototype.decodeToJSX = function (data) {\n        var _this = this;\n        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", { className: \"w-full h-full p-10\" }, data.map(function (item) {\n            return _this.createElement(item.type, item.content, item.id);\n        })));\n    };\n    return Decoder;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (Decoder);\n\n\n//# sourceURL=webpack://sate-editor/./src/core/decoder.tsx?");

/***/ }),

/***/ "./src/core/encoder.ts":
/*!*****************************!*\
  !*** ./src/core/encoder.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Encoder: function() { return /* binding */ Encoder; }\n/* harmony export */ });\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ \"./src/core/types.ts\");\n\nvar Encoder = /** @class */ (function () {\n    function Encoder() {\n        this.encodedLIST = [];\n        this.recentCollapsible = {\n            open: false,\n        };\n    }\n    Encoder.prototype.getElementType = function (tag) {\n        if (tag.startsWith(\"> \"))\n            return _types__WEBPACK_IMPORTED_MODULE_0__.ESateElements.Collapsible;\n        if (tag.startsWith(\">> \"))\n            return _types__WEBPACK_IMPORTED_MODULE_0__.ESateElements.CollapsibleContent;\n        if (tag.startsWith(\"#>\"))\n            return _types__WEBPACK_IMPORTED_MODULE_0__.ESateElements.CollapsibleEnd;\n        if (tag.startsWith(\"# \"))\n            return _types__WEBPACK_IMPORTED_MODULE_0__.ESateElements.h1;\n        if (tag.startsWith(\"## \"))\n            return _types__WEBPACK_IMPORTED_MODULE_0__.ESateElements.h2;\n        if (tag.startsWith(\"### \"))\n            return _types__WEBPACK_IMPORTED_MODULE_0__.ESateElements.h3;\n        if (tag.startsWith(\"#### \"))\n            return _types__WEBPACK_IMPORTED_MODULE_0__.ESateElements.h4;\n        if (tag.startsWith(\"---\"))\n            return _types__WEBPACK_IMPORTED_MODULE_0__.ESateElements.hr;\n        if (tag === \"\")\n            return _types__WEBPACK_IMPORTED_MODULE_0__.ESateElements.br;\n        if (tag.startsWith(\"img[\"))\n            return _types__WEBPACK_IMPORTED_MODULE_0__.ESateElements.img;\n        return _types__WEBPACK_IMPORTED_MODULE_0__.ESateElements.p;\n    };\n    Encoder.prototype.getContentFromElement = function (tag, elementType) {\n        switch (elementType) {\n            case _types__WEBPACK_IMPORTED_MODULE_0__.ESateElements.p:\n                return tag.trim();\n            case _types__WEBPACK_IMPORTED_MODULE_0__.ESateElements.h1:\n                return tag.replace(\"# \", \"\").trim();\n            case _types__WEBPACK_IMPORTED_MODULE_0__.ESateElements.h2:\n                return tag.replace(\"## \", \"\").trim();\n            case _types__WEBPACK_IMPORTED_MODULE_0__.ESateElements.h3:\n                return tag.replace(\"### \", \"\").trim();\n            case _types__WEBPACK_IMPORTED_MODULE_0__.ESateElements.h4:\n                return tag.replace(\"#### \", \"\").trim();\n            case _types__WEBPACK_IMPORTED_MODULE_0__.ESateElements.hr:\n                return tag.replace(\"---\", \"\");\n            case _types__WEBPACK_IMPORTED_MODULE_0__.ESateElements.br:\n                return \"\";\n            case _types__WEBPACK_IMPORTED_MODULE_0__.ESateElements.img:\n                return tag.replace(\"img[\", \"\").replace(\"]\", \"\").trim();\n            case _types__WEBPACK_IMPORTED_MODULE_0__.ESateElements.Collapsible:\n                return this.handleCollapsible(tag);\n            case _types__WEBPACK_IMPORTED_MODULE_0__.ESateElements.CollapsibleContent:\n                return this.handleCollapsible(tag);\n            case _types__WEBPACK_IMPORTED_MODULE_0__.ESateElements.CollapsibleEnd:\n                return this.handleCollapsible(tag);\n            default:\n                return null;\n        }\n    };\n    Encoder.prototype.handleCollapsible = function (tag) {\n        var _a, _b;\n        var collapsibleType = this.getElementType(tag);\n        if (collapsibleType === _types__WEBPACK_IMPORTED_MODULE_0__.ESateElements.Collapsible) {\n            // Check if collapsible Already open\n            if (this.recentCollapsible.open)\n                return null;\n            // Start the collapsible \n            this.recentCollapsible = {\n                open: true,\n                collapsible: {\n                    id: this.encodedLIST.length,\n                    heading: tag.replace(\"> \", \"\"),\n                    content: []\n                }\n            };\n            return this.recentCollapsible.collapsible;\n        }\n        if (collapsibleType === _types__WEBPACK_IMPORTED_MODULE_0__.ESateElements.CollapsibleContent) {\n            // Check if collapsible closed \n            if (!this.recentCollapsible.open)\n                return this.getContentFromElement(tag, _types__WEBPACK_IMPORTED_MODULE_0__.ESateElements.p);\n            (_b = (_a = this.recentCollapsible.collapsible) === null || _a === void 0 ? void 0 : _a.content) === null || _b === void 0 ? void 0 : _b.push({\n                id: this.encodedLIST.length,\n                type: _types__WEBPACK_IMPORTED_MODULE_0__.ESateElements.p,\n                content: this.getContentFromElement(tag.replace(\">>\", \"\"), _types__WEBPACK_IMPORTED_MODULE_0__.ESateElements.p),\n            });\n            return null;\n        }\n        if (collapsibleType === _types__WEBPACK_IMPORTED_MODULE_0__.ESateElements.CollapsibleEnd) {\n            if (!this.recentCollapsible.open)\n                return null;\n            this.recentCollapsible.open = false;\n            this.recentCollapsible.collapsible = null;\n            return null;\n        }\n    };\n    Encoder.prototype.encodeTEXT = function (text) {\n        var _this = this;\n        text.split(\"\\n\").forEach(function (tag) {\n            var elementType = _this.getElementType(tag);\n            var newElement = {\n                id: _this.encodedLIST.length,\n                type: elementType,\n                content: _this.getContentFromElement(tag, elementType)\n            };\n            if (newElement.content != null)\n                _this.encodedLIST.push(newElement);\n        });\n        return this.encodedLIST;\n    };\n    return Encoder;\n}());\n\n\n\n//# sourceURL=webpack://sate-editor/./src/core/encoder.ts?");

/***/ }),

/***/ "./src/core/index.ts":
/*!***************************!*\
  !*** ./src/core/index.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Sate: function() { return /* reexport safe */ _sate__WEBPACK_IMPORTED_MODULE_0__.Sate; }\n/* harmony export */ });\n/* harmony import */ var _sate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sate */ \"./src/core/sate.ts\");\n\n\n\n\n//# sourceURL=webpack://sate-editor/./src/core/index.ts?");

/***/ }),

/***/ "./src/core/sate.ts":
/*!**************************!*\
  !*** ./src/core/sate.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Sate: function() { return /* binding */ Sate; }\n/* harmony export */ });\n/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./encoder */ \"./src/core/encoder.ts\");\n/* harmony import */ var _decoder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./decoder */ \"./src/core/decoder.tsx\");\n\n\nvar Sate = /** @class */ (function () {\n    function Sate() {\n        this.encoder = new _encoder__WEBPACK_IMPORTED_MODULE_0__.Encoder();\n        this.decoder = new _decoder__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    }\n    Sate.prototype.encode = function (text) {\n        return this.encoder.encodeTEXT(text);\n    };\n    Sate.prototype.decode = function (data) {\n        return this.decoder.decodeToJSX(data);\n    };\n    return Sate;\n}());\n\n\n\n//# sourceURL=webpack://sate-editor/./src/core/sate.ts?");

/***/ }),

/***/ "./src/core/types.ts":
/*!***************************!*\
  !*** ./src/core/types.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ESateElements: function() { return /* binding */ ESateElements; }\n/* harmony export */ });\nvar ESateElements;\n(function (ESateElements) {\n    ESateElements[\"p\"] = \"p\";\n    ESateElements[\"h1\"] = \"h1\";\n    ESateElements[\"h2\"] = \"h2\";\n    ESateElements[\"h3\"] = \"h3\";\n    ESateElements[\"h4\"] = \"h4\";\n    ESateElements[\"hr\"] = \"hr\";\n    ESateElements[\"br\"] = \"br\";\n    ESateElements[\"img\"] = \"img\";\n    ESateElements[\"Collapsible\"] = \"Collapsible\";\n    ESateElements[\"CollapsibleEnd\"] = \"CollapsibleEnd\";\n    ESateElements[\"CollapsibleContent\"] = \"CollapsibleContent\";\n})(ESateElements || (ESateElements = {}));\n\n\n//# sourceURL=webpack://sate-editor/./src/core/types.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Sate: function() { return /* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_0__.Sate; }\n/* harmony export */ });\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ \"./src/core/index.ts\");\n\n\n\n\n//# sourceURL=webpack://sate-editor/./src/index.ts?");

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"commonjs":"react","commonjs2":"react","amd":"React","root":"React"} ***!
  \**************************************************************************************/
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});