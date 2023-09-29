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
/******/ 	var __webpack_modules__ = ({

/***/ "./src/core/decoder.jsx":
/*!******************************!*\
  !*** ./src/core/decoder.jsx ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ \"./src/core/types.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\nvar Collapsible = function Collapsible(_ref) {\n  var heading = _ref.heading,\n    children = _ref.children;\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n    _useState2 = _slicedToArray(_useState, 2),\n    isOpen = _useState2[0],\n    setIsOpen = _useState2[1];\n  var toggleCollapsible = function toggleCollapsible() {\n    setIsOpen(!isOpen);\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    onClick: toggleCollapsible\n  }, isOpen ? \"▼\" : \"►\", \" \", heading), isOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, children));\n};\nvar Decoder = /*#__PURE__*/function () {\n  function Decoder() {\n    _classCallCheck(this, Decoder);\n    this.elementStyles = {\n      h1: \"my-2 text-[30px] uppercase font-extrabold text-main\",\n      h2: \"my-2 text-[20px] uppercase font-bold text-main\",\n      h3: \"my-2 text-[15px] uppercase font-semibold text-main\",\n      h4: \"my-2 text-sm uppercase font-medium text-main\",\n      hr: \"w-1/2 h-1 bg-dark mb-5 mx-0\",\n      p: \"my-1 text-sm\",\n      collapsible: \"border rounded-md p-2 mt-2\",\n      collapsibleButton: \"cursor-pointer ml-2\"\n    };\n  }\n  _createClass(Decoder, [{\n    key: \"createElement\",\n    value: function createElement(type, content, key) {\n      switch (type) {\n        case _types__WEBPACK_IMPORTED_MODULE_1__.ESateElements.p:\n          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n            className: this.elementStyles.p,\n            key: key\n          }, \" \", content, \" \");\n        case _types__WEBPACK_IMPORTED_MODULE_1__.ESateElements.h1:\n          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n            className: this.elementStyles.h1,\n            key: key\n          }, \" \", content, \" \");\n        case _types__WEBPACK_IMPORTED_MODULE_1__.ESateElements.h2:\n          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", {\n            className: this.elementStyles.h2,\n            key: key\n          }, \" \", content, \" \");\n        case _types__WEBPACK_IMPORTED_MODULE_1__.ESateElements.h3:\n          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h3\", {\n            className: this.elementStyles.h3,\n            key: key\n          }, \" \", content, \" \");\n        case _types__WEBPACK_IMPORTED_MODULE_1__.ESateElements.h4:\n          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h4\", {\n            className: this.elementStyles.h4,\n            key: key\n          }, \" \", content, \" \");\n        case _types__WEBPACK_IMPORTED_MODULE_1__.ESateElements.hr:\n          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"hr\", {\n            className: this.elementStyles.hr\n          });\n        case _types__WEBPACK_IMPORTED_MODULE_1__.ESateElements.br:\n          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", {\n            key: key\n          });\n        case _types__WEBPACK_IMPORTED_MODULE_1__.ESateElements.img:\n          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n            key: key,\n            className: \"w-full aspect-square rounded-2xl\"\n          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n            src: content,\n            alt: \"\",\n            className: \"w-full h-full object-cover rounded-2xl\"\n          }));\n        case _types__WEBPACK_IMPORTED_MODULE_1__.ESateElements.Collapsible:\n          var collapsibleContent = content;\n          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Collapsible, {\n            key: key,\n            heading: collapsibleContent.heading || ''\n          }, collapsibleContent.content.map(function (item) {\n            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(item.type, {\n              key: item.id\n            }, item.content.toString());\n          }));\n        default:\n          break;\n      }\n    }\n  }, {\n    key: \"decodeToJSX\",\n    value: function decodeToJSX(data) {\n      var _this = this;\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        className: \"w-full h-full p-10\"\n      }, data.map(function (item) {\n        return _this.createElement(item.type, item.content, item.id);\n      }));\n    }\n  }]);\n  return Decoder;\n}();\n/* harmony default export */ __webpack_exports__[\"default\"] = (Decoder);\n\n//# sourceURL=webpack://sate-editor/./src/core/decoder.jsx?");

/***/ }),

/***/ "./src/core/encoder.js":
/*!*****************************!*\
  !*** ./src/core/encoder.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ \"./src/core/types.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\nvar Encoder = /*#__PURE__*/function () {\n  function Encoder() {\n    _classCallCheck(this, Encoder);\n    this.encodedLIST = [];\n    this.recentCollapsible = {\n      open: false\n    };\n  }\n  _createClass(Encoder, [{\n    key: \"getElementType\",\n    value: function getElementType(tag) {\n      if (tag.startsWith(\"> \")) return _types__WEBPACK_IMPORTED_MODULE_0__.ESateElements.Collapsible;\n      if (tag.startsWith(\">> \")) return _types__WEBPACK_IMPORTED_MODULE_0__.ESateElements.CollapsibleContent;\n      if (tag.startsWith(\"#>\")) return _types__WEBPACK_IMPORTED_MODULE_0__.ESateElements.CollapsibleEnd;\n      if (tag.startsWith(\"# \")) return _types__WEBPACK_IMPORTED_MODULE_0__.ESateElements.h1;\n      if (tag.startsWith(\"## \")) return _types__WEBPACK_IMPORTED_MODULE_0__.ESateElements.h2;\n      if (tag.startsWith(\"### \")) return _types__WEBPACK_IMPORTED_MODULE_0__.ESateElements.h3;\n      if (tag.startsWith(\"#### \")) return _types__WEBPACK_IMPORTED_MODULE_0__.ESateElements.h4;\n      if (tag.startsWith(\"---\")) return _types__WEBPACK_IMPORTED_MODULE_0__.ESateElements.hr;\n      if (tag === \"\") return _types__WEBPACK_IMPORTED_MODULE_0__.ESateElements.br;\n      if (tag.startsWith(\"img[\")) return _types__WEBPACK_IMPORTED_MODULE_0__.ESateElements.img;\n      return _types__WEBPACK_IMPORTED_MODULE_0__.ESateElements.p;\n    }\n  }, {\n    key: \"getContentFromElement\",\n    value: function getContentFromElement(tag, elementType) {\n      switch (elementType) {\n        case _types__WEBPACK_IMPORTED_MODULE_0__.ESateElements.p:\n          return tag.trim();\n        case _types__WEBPACK_IMPORTED_MODULE_0__.ESateElements.h1:\n          return tag.replace(\"# \", \"\").trim();\n        case _types__WEBPACK_IMPORTED_MODULE_0__.ESateElements.h2:\n          return tag.replace(\"## \", \"\").trim();\n        case _types__WEBPACK_IMPORTED_MODULE_0__.ESateElements.h3:\n          return tag.replace(\"### \", \"\").trim();\n        case _types__WEBPACK_IMPORTED_MODULE_0__.ESateElements.h4:\n          return tag.replace(\"#### \", \"\").trim();\n        case _types__WEBPACK_IMPORTED_MODULE_0__.ESateElements.hr:\n          return tag.replace(\"---\", \"\");\n        case _types__WEBPACK_IMPORTED_MODULE_0__.ESateElements.br:\n          return \"\";\n        case _types__WEBPACK_IMPORTED_MODULE_0__.ESateElements.img:\n          return tag.replace(\"img[\", \"\").replace(\"]\", \"\").trim();\n        case _types__WEBPACK_IMPORTED_MODULE_0__.ESateElements.Collapsible:\n          return this.handleCollapsible(tag);\n        case _types__WEBPACK_IMPORTED_MODULE_0__.ESateElements.CollapsibleContent:\n          return this.handleCollapsible(tag);\n        case _types__WEBPACK_IMPORTED_MODULE_0__.ESateElements.CollapsibleEnd:\n          return this.handleCollapsible(tag);\n        default:\n          return null;\n      }\n    }\n  }, {\n    key: \"handleCollapsible\",\n    value: function handleCollapsible(tag) {\n      var collapsibleType = this.getElementType(tag);\n      if (collapsibleType === _types__WEBPACK_IMPORTED_MODULE_0__.ESateElements.Collapsible) {\n        if (this.recentCollapsible.open) return null;\n        this.recentCollapsible = {\n          open: true,\n          collapsible: {\n            id: this.encodedLIST.length,\n            heading: tag.replace(\"> \", \"\"),\n            content: []\n          }\n        };\n        return this.recentCollapsible.collapsible;\n      }\n      if (collapsibleType === _types__WEBPACK_IMPORTED_MODULE_0__.ESateElements.CollapsibleContent) {\n        var _this$recentCollapsib;\n        if (!this.recentCollapsible.open) return this.getContentFromElement(tag, _types__WEBPACK_IMPORTED_MODULE_0__.ESateElements.p);\n        (_this$recentCollapsib = this.recentCollapsible.collapsible) === null || _this$recentCollapsib === void 0 || (_this$recentCollapsib = _this$recentCollapsib.content) === null || _this$recentCollapsib === void 0 || _this$recentCollapsib.push({\n          id: this.encodedLIST.length,\n          type: _types__WEBPACK_IMPORTED_MODULE_0__.ESateElements.p,\n          content: this.getContentFromElement(tag.replace(\">>\", \"\"), _types__WEBPACK_IMPORTED_MODULE_0__.ESateElements.p)\n        });\n        return null;\n      }\n      if (collapsibleType === _types__WEBPACK_IMPORTED_MODULE_0__.ESateElements.CollapsibleEnd) {\n        if (!this.recentCollapsible.open) return null;\n        this.recentCollapsible.open = false;\n        this.recentCollapsible.collapsible = null;\n        return null;\n      }\n    }\n  }, {\n    key: \"encodeTEXT\",\n    value: function encodeTEXT(text) {\n      var _this = this;\n      text.split(\"\\n\").forEach(function (tag) {\n        var elementType = _this.getElementType(tag);\n        var newElement = {\n          id: _this.encodedLIST.length,\n          type: elementType,\n          content: _this.getContentFromElement(tag, elementType)\n        };\n        if (newElement.content != null) _this.encodedLIST.push(newElement);\n      });\n      return this.encodedLIST;\n    }\n  }]);\n  return Encoder;\n}();\n/* harmony default export */ __webpack_exports__[\"default\"] = (Encoder);\n\n//# sourceURL=webpack://sate-editor/./src/core/encoder.js?");

/***/ }),

/***/ "./src/core/sate.js":
/*!**************************!*\
  !*** ./src/core/sate.js ***!
  \**************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("function _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nvar Encoder = __webpack_require__(/*! ./encoder */ \"./src/core/encoder.js\");\nvar Decoder = __webpack_require__(/*! ./decoder */ \"./src/core/decoder.jsx\");\nvar SATE = /*#__PURE__*/function () {\n  function SATE() {\n    _classCallCheck(this, SATE);\n    this.encoder = new Encoder();\n    this.decoder = new Decoder();\n  }\n  _createClass(SATE, [{\n    key: \"encode\",\n    value: function encode(text) {\n      return this.encoder.encodeTEXT(text);\n    }\n  }, {\n    key: \"decode\",\n    value: function decode(data) {\n      return this.decoder.decodeToJSX(data);\n    }\n  }]);\n  return SATE;\n}();\nmodule.exports = SATE;\n\n//# sourceURL=webpack://sate-editor/./src/core/sate.js?");

/***/ }),

/***/ "./src/core/types.js":
/*!***************************!*\
  !*** ./src/core/types.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ESateElements: function() { return /* binding */ ESateElements; }\n/* harmony export */ });\nvar ESateElements = {\n  p: \"p\",\n  h1: \"h1\",\n  h2: \"h2\",\n  h3: \"h3\",\n  h4: \"h4\",\n  hr: \"hr\",\n  br: \"br\",\n  img: \"img\",\n  Collapsible: \"Collapsible\",\n  CollapsibleEnd: \"CollapsibleEnd\",\n  CollapsibleContent: \"CollapsibleContent\"\n};\n\n//# sourceURL=webpack://sate-editor/./src/core/types.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var _require = __webpack_require__(/*! ./core/sate */ \"./src/core/sate.js\"),\n  SATE = _require.SATE;\nmodule.exports = {\n  SATE: SATE\n};\n\n//# sourceURL=webpack://sate-editor/./src/index.js?");

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"commonjs":"react","commonjs2":"react","amd":"React","root":"React"} ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});