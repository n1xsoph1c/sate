"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _types = require("./types");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Collapsible = function Collapsible(_ref) {
  var heading = _ref.heading,
    children = _ref.children;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var toggleCollapsible = function toggleCollapsible() {
    setIsOpen(!isOpen);
  };
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("button", {
    onClick: toggleCollapsible
  }, isOpen ? "▼" : "►", " ", heading), isOpen && /*#__PURE__*/_react.default.createElement("div", null, children));
};
var Decoder = /*#__PURE__*/function () {
  function Decoder() {
    _classCallCheck(this, Decoder);
    this.elementStyles = {
      h1: "my-2 text-[30px] uppercase font-extrabold text-main",
      h2: "my-2 text-[20px] uppercase font-bold text-main",
      h3: "my-2 text-[15px] uppercase font-semibold text-main",
      h4: "my-2 text-sm uppercase font-medium text-main",
      hr: "w-1/2 h-1 bg-dark mb-5 mx-0",
      p: "my-1 text-sm",
      collapsible: "border rounded-md p-2 mt-2",
      collapsibleButton: "cursor-pointer ml-2"
    };
  }
  _createClass(Decoder, [{
    key: "createElement",
    value: function createElement(type, content, key) {
      switch (type) {
        case _types.ESateElements.p:
          return /*#__PURE__*/_react.default.createElement("p", {
            className: this.elementStyles.p,
            key: key
          }, " ", content, " ");
        case _types.ESateElements.h1:
          return /*#__PURE__*/_react.default.createElement("h1", {
            className: this.elementStyles.h1,
            key: key
          }, " ", content, " ");
        case _types.ESateElements.h2:
          return /*#__PURE__*/_react.default.createElement("h2", {
            className: this.elementStyles.h2,
            key: key
          }, " ", content, " ");
        case _types.ESateElements.h3:
          return /*#__PURE__*/_react.default.createElement("h3", {
            className: this.elementStyles.h3,
            key: key
          }, " ", content, " ");
        case _types.ESateElements.h4:
          return /*#__PURE__*/_react.default.createElement("h4", {
            className: this.elementStyles.h4,
            key: key
          }, " ", content, " ");
        case _types.ESateElements.hr:
          return /*#__PURE__*/_react.default.createElement("hr", {
            className: this.elementStyles.hr
          });
        case _types.ESateElements.br:
          return /*#__PURE__*/_react.default.createElement("br", {
            key: key
          });
        case _types.ESateElements.img:
          return /*#__PURE__*/_react.default.createElement("div", {
            key: key,
            className: "w-full aspect-square rounded-2xl"
          }, /*#__PURE__*/_react.default.createElement("img", {
            src: content,
            alt: "",
            className: "w-full h-full object-cover rounded-2xl"
          }));
        case _types.ESateElements.Collapsible:
          var collapsibleContent = content;
          return /*#__PURE__*/_react.default.createElement(Collapsible, {
            key: key,
            heading: collapsibleContent.heading || ''
          }, collapsibleContent.content.map(function (item) {
            return /*#__PURE__*/_react.default.createElement(item.type, {
              key: item.id
            }, item.content.toString());
          }));
        default:
          break;
      }
    }
  }, {
    key: "decodeToJSX",
    value: function decodeToJSX(data) {
      var _this = this;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "w-full h-full p-10"
      }, data.map(function (item) {
        return _this.createElement(item.type, item.content, item.id);
      }));
    }
  }]);
  return Decoder;
}();
var _default = exports.default = Decoder;