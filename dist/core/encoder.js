"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _types = require("./types");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Encoder = /*#__PURE__*/function () {
  function Encoder() {
    _classCallCheck(this, Encoder);
    this.encodedLIST = [];
    this.recentCollapsible = {
      open: false
    };
  }
  _createClass(Encoder, [{
    key: "getElementType",
    value: function getElementType(tag) {
      if (tag.startsWith("> ")) return _types.ESateElements.Collapsible;
      if (tag.startsWith(">> ")) return _types.ESateElements.CollapsibleContent;
      if (tag.startsWith("#>")) return _types.ESateElements.CollapsibleEnd;
      if (tag.startsWith("# ")) return _types.ESateElements.h1;
      if (tag.startsWith("## ")) return _types.ESateElements.h2;
      if (tag.startsWith("### ")) return _types.ESateElements.h3;
      if (tag.startsWith("#### ")) return _types.ESateElements.h4;
      if (tag.startsWith("---")) return _types.ESateElements.hr;
      if (tag === "") return _types.ESateElements.br;
      if (tag.startsWith("img[")) return _types.ESateElements.img;
      return _types.ESateElements.p;
    }
  }, {
    key: "getContentFromElement",
    value: function getContentFromElement(tag, elementType) {
      switch (elementType) {
        case _types.ESateElements.p:
          return tag.trim();
        case _types.ESateElements.h1:
          return tag.replace("# ", "").trim();
        case _types.ESateElements.h2:
          return tag.replace("## ", "").trim();
        case _types.ESateElements.h3:
          return tag.replace("### ", "").trim();
        case _types.ESateElements.h4:
          return tag.replace("#### ", "").trim();
        case _types.ESateElements.hr:
          return tag.replace("---", "");
        case _types.ESateElements.br:
          return "";
        case _types.ESateElements.img:
          return tag.replace("img[", "").replace("]", "").trim();
        case _types.ESateElements.Collapsible:
          return this.handleCollapsible(tag);
        case _types.ESateElements.CollapsibleContent:
          return this.handleCollapsible(tag);
        case _types.ESateElements.CollapsibleEnd:
          return this.handleCollapsible(tag);
        default:
          return null;
      }
    }
  }, {
    key: "handleCollapsible",
    value: function handleCollapsible(tag) {
      var collapsibleType = this.getElementType(tag);
      if (collapsibleType === _types.ESateElements.Collapsible) {
        if (this.recentCollapsible.open) return null;
        this.recentCollapsible = {
          open: true,
          collapsible: {
            id: this.encodedLIST.length,
            heading: tag.replace("> ", ""),
            content: []
          }
        };
        return this.recentCollapsible.collapsible;
      }
      if (collapsibleType === _types.ESateElements.CollapsibleContent) {
        var _this$recentCollapsib;
        if (!this.recentCollapsible.open) return this.getContentFromElement(tag, _types.ESateElements.p);
        (_this$recentCollapsib = this.recentCollapsible.collapsible) === null || _this$recentCollapsib === void 0 || (_this$recentCollapsib = _this$recentCollapsib.content) === null || _this$recentCollapsib === void 0 || _this$recentCollapsib.push({
          id: this.encodedLIST.length,
          type: _types.ESateElements.p,
          content: this.getContentFromElement(tag.replace(">>", ""), _types.ESateElements.p)
        });
        return null;
      }
      if (collapsibleType === _types.ESateElements.CollapsibleEnd) {
        if (!this.recentCollapsible.open) return null;
        this.recentCollapsible.open = false;
        this.recentCollapsible.collapsible = null;
        return null;
      }
    }
  }, {
    key: "encodeTEXT",
    value: function encodeTEXT(text) {
      var _this = this;
      text.split("\n").forEach(function (tag) {
        var elementType = _this.getElementType(tag);
        var newElement = {
          id: _this.encodedLIST.length,
          type: elementType,
          content: _this.getContentFromElement(tag, elementType)
        };
        if (newElement.content != null) _this.encodedLIST.push(newElement);
      });
      return this.encodedLIST;
    }
  }]);
  return Encoder;
}();
var _default = exports.default = Encoder;