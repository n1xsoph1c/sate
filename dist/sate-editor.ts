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
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nconst types_1 = __webpack_require__(/*! ./types */ \"./src/core/types.ts\");\nfunction Collapsible({ heading, children }) {\n    const [isOpen, setIsOpen] = (0, react_1.useState)(false);\n    return (react_1.default.createElement(\"div\", null,\n        react_1.default.createElement(\"button\", { onClick: () => setIsOpen(!isOpen) },\n            isOpen ? '▼' : '►',\n            \" \",\n            heading),\n        isOpen && react_1.default.createElement(\"div\", null, children)));\n}\nclass Decoder {\n    elementStyles = {\n        h1: \"my-2 text-[30px] uppercase font-extrabold text-main\",\n        h2: \"my-2 text-[20px] uppercase font-bold text-main\",\n        h3: \"my-2 text-[15px] uppercase font-semibold text-main\",\n        h4: \"my-2 text-sm uppercase font-medium text-main\",\n        hr: \"w-1/2 h-1 bg-dark mb-5 mx-0\",\n        p: \"my-1 text-sm\",\n        collapsible: \"border rounded-md p-2 mt-2\",\n        collapsibleButton: \"cursor-pointer ml-2\",\n    };\n    createElement(type, content, key) {\n        switch (type) {\n            case types_1.ESateElements.p:\n                return react_1.default.createElement(\"p\", { className: this.elementStyles.p, key: key },\n                    \" \",\n                    content,\n                    \" \");\n            case types_1.ESateElements.h1:\n                return react_1.default.createElement(\"h1\", { className: this.elementStyles.h1, key: key },\n                    \" \",\n                    content,\n                    \" \");\n            case types_1.ESateElements.h2:\n                return react_1.default.createElement(\"h2\", { className: this.elementStyles.h2, key: key },\n                    \" \",\n                    content,\n                    \" \");\n            case types_1.ESateElements.h3:\n                return react_1.default.createElement(\"h3\", { className: this.elementStyles.h3, key: key },\n                    \" \",\n                    content,\n                    \" \");\n            case types_1.ESateElements.h4:\n                return react_1.default.createElement(\"h4\", { className: this.elementStyles.h4, key: key },\n                    \" \",\n                    content,\n                    \" \");\n            case types_1.ESateElements.hr:\n                return react_1.default.createElement(\"hr\", { className: this.elementStyles.hr });\n            case types_1.ESateElements.br:\n                return react_1.default.createElement(\"br\", { key: key });\n            case types_1.ESateElements.img:\n                return (react_1.default.createElement(\"div\", { key: key, className: 'w-full aspect-square rounded-2xl' },\n                    react_1.default.createElement(\"img\", { src: content, alt: \"\", className: 'w-full h-full object-cover rounded-2xl' })));\n            case types_1.ESateElements.Collapsible:\n                if (typeof content === 'string') {\n                    // Handle the case where content is a string (may need to handle this differently)\n                    return react_1.default.createElement(\"p\", { key: key }, content);\n                }\n                else if (content && 'heading' in content && 'content' in content) {\n                    // Ensure that content is a TCollapsible object\n                    const collapsibleContent = content;\n                    return (react_1.default.createElement(Collapsible, { key: key, heading: collapsibleContent.heading || '' }, collapsibleContent.content?.map((item) => {\n                        return react_1.default.createElement(item.type, { key: item.id }, item.content?.toString());\n                    })));\n                }\n                else {\n                    // Handle the case where content is neither a string nor a TCollapsible\n                    return react_1.default.createElement(react_1.default.Fragment, null); // or handle it in a way that makes sense for your application\n                }\n            default:\n                break;\n        }\n    }\n    decodeToJSX(data) {\n        return (react_1.default.createElement(\"div\", { className: \"w-full h-full p-10\" }, data.map((item) => {\n            return this.createElement(item.type, item.content, item.id);\n        })));\n    }\n}\nexports[\"default\"] = Decoder;\n\n\n//# sourceURL=webpack://sate-editor/./src/core/decoder.tsx?");

/***/ }),

/***/ "./src/core/encoder.ts":
/*!*****************************!*\
  !*** ./src/core/encoder.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Encoder = void 0;\nconst types_1 = __webpack_require__(/*! ./types */ \"./src/core/types.ts\");\nclass Encoder {\n    encodedLIST = [];\n    recentCollapsible = {\n        open: false,\n    };\n    getElementType(tag) {\n        if (tag.startsWith(\"> \"))\n            return types_1.ESateElements.Collapsible;\n        if (tag.startsWith(\">> \"))\n            return types_1.ESateElements.CollapsibleContent;\n        if (tag.startsWith(\"#>\"))\n            return types_1.ESateElements.CollapsibleEnd;\n        if (tag.startsWith(\"# \"))\n            return types_1.ESateElements.h1;\n        if (tag.startsWith(\"## \"))\n            return types_1.ESateElements.h2;\n        if (tag.startsWith(\"### \"))\n            return types_1.ESateElements.h3;\n        if (tag.startsWith(\"#### \"))\n            return types_1.ESateElements.h4;\n        if (tag.startsWith(\"---\"))\n            return types_1.ESateElements.hr;\n        if (tag === \"\")\n            return types_1.ESateElements.br;\n        if (tag.startsWith(\"img[\"))\n            return types_1.ESateElements.img;\n        return types_1.ESateElements.p;\n    }\n    getContentFromElement(tag, elementType) {\n        switch (elementType) {\n            case types_1.ESateElements.p:\n                return tag.trim();\n            case types_1.ESateElements.h1:\n                return tag.replace(\"# \", \"\").trim();\n            case types_1.ESateElements.h2:\n                return tag.replace(\"## \", \"\").trim();\n            case types_1.ESateElements.h3:\n                return tag.replace(\"### \", \"\").trim();\n            case types_1.ESateElements.h4:\n                return tag.replace(\"#### \", \"\").trim();\n            case types_1.ESateElements.hr:\n                return tag.replace(\"---\", \"\");\n            case types_1.ESateElements.br:\n                return \"\";\n            case types_1.ESateElements.img:\n                return tag.replace(\"img[\", \"\").replace(\"]\", \"\").trim();\n            case types_1.ESateElements.Collapsible:\n                return this.handleCollapsible(tag);\n            case types_1.ESateElements.CollapsibleContent:\n                return this.handleCollapsible(tag);\n            case types_1.ESateElements.CollapsibleEnd:\n                return this.handleCollapsible(tag);\n            default:\n                return null;\n        }\n    }\n    handleCollapsible(tag) {\n        const collapsibleType = this.getElementType(tag);\n        if (collapsibleType === types_1.ESateElements.Collapsible) {\n            // Check if collapsible Already open\n            if (this.recentCollapsible.open)\n                return null;\n            // Start the collapsible \n            this.recentCollapsible = {\n                open: true,\n                collapsible: {\n                    id: this.encodedLIST.length,\n                    heading: tag.replace(\"> \", \"\"),\n                    content: []\n                }\n            };\n            return this.recentCollapsible.collapsible;\n        }\n        if (collapsibleType === types_1.ESateElements.CollapsibleContent) {\n            // Check if collapsible closed \n            if (!this.recentCollapsible.open)\n                return this.getContentFromElement(tag, types_1.ESateElements.p);\n            this.recentCollapsible.collapsible?.content?.push({\n                id: this.encodedLIST.length,\n                type: types_1.ESateElements.p,\n                content: this.getContentFromElement(tag.replace(\">>\", \"\"), types_1.ESateElements.p),\n            });\n            return null;\n        }\n        if (collapsibleType === types_1.ESateElements.CollapsibleEnd) {\n            if (!this.recentCollapsible.open)\n                return null;\n            this.recentCollapsible.open = false;\n            this.recentCollapsible.collapsible = null;\n            return null;\n        }\n    }\n    encodeTEXT(text) {\n        text.split(\"\\n\").forEach((tag) => {\n            let elementType = this.getElementType(tag);\n            let newElement = {\n                id: this.encodedLIST.length,\n                type: elementType,\n                content: this.getContentFromElement(tag, elementType)\n            };\n            if (newElement.content != null)\n                this.encodedLIST.push(newElement);\n        });\n        return this.encodedLIST;\n    }\n}\nexports.Encoder = Encoder;\n\n\n//# sourceURL=webpack://sate-editor/./src/core/encoder.ts?");

/***/ }),

/***/ "./src/core/sate.ts":
/*!**************************!*\
  !*** ./src/core/sate.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Sate = void 0;\nconst encoder_1 = __webpack_require__(/*! ./encoder */ \"./src/core/encoder.ts\");\nconst decoder_1 = __importDefault(__webpack_require__(/*! ./decoder */ \"./src/core/decoder.tsx\"));\nclass Sate {\n    encoder = new encoder_1.Encoder();\n    decoder = new decoder_1.default();\n    encode(text) {\n        return this.encoder.encodeTEXT(text);\n    }\n    decode(data) {\n        return this.decoder.decodeToJSX(data);\n    }\n}\nexports.Sate = Sate;\n\n\n//# sourceURL=webpack://sate-editor/./src/core/sate.ts?");

/***/ }),

/***/ "./src/core/types.ts":
/*!***************************!*\
  !*** ./src/core/types.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ESateElements = void 0;\nvar ESateElements;\n(function (ESateElements) {\n    ESateElements[\"p\"] = \"p\";\n    ESateElements[\"h1\"] = \"h1\";\n    ESateElements[\"h2\"] = \"h2\";\n    ESateElements[\"h3\"] = \"h3\";\n    ESateElements[\"h4\"] = \"h4\";\n    ESateElements[\"hr\"] = \"hr\";\n    ESateElements[\"br\"] = \"br\";\n    ESateElements[\"img\"] = \"img\";\n    ESateElements[\"Collapsible\"] = \"Collapsible\";\n    ESateElements[\"CollapsibleEnd\"] = \"CollapsibleEnd\";\n    ESateElements[\"CollapsibleContent\"] = \"CollapsibleContent\";\n})(ESateElements || (exports.ESateElements = ESateElements = {}));\n\n\n//# sourceURL=webpack://sate-editor/./src/core/types.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Sate = void 0;\nvar sate_1 = __webpack_require__(/*! ./core/sate */ \"./src/core/sate.ts\");\nObject.defineProperty(exports, \"Sate\", ({ enumerable: true, get: function () { return sate_1.Sate; } }));\n\n\n//# sourceURL=webpack://sate-editor/./src/index.ts?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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