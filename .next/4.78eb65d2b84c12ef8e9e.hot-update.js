webpackHotUpdate(4,{

/***/ "./components/Hero.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hex_rgba__ = __webpack_require__("./node_modules/hex-rgba/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hex_rgba___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_hex_rgba__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__commonStyles__ = __webpack_require__("./components/commonStyles.js");
var _jsxFileName = "/Users/Sam/Code/highfield-next/components/Hero.jsx";



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();




var _default = function _default() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["200647011", [__WEBPACK_IMPORTED_MODULE_2_hex_rgba___default()(__WEBPACK_IMPORTED_MODULE_3__commonStyles__["b" /* primary */], 0.5)]]])
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "200647011",
    css: "section.__jsx-style-dynamic-selector{background-image:url(\"../static/img/background_2.jpg\"),".concat(__WEBPACK_IMPORTED_MODULE_2_hex_rgba___default()(__WEBPACK_IMPORTED_MODULE_3__commonStyles__["b" /* primary */], 0.5), ";background-position:center;background-size:cover;height:30rem;width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVyby5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTU8sQUFFd0Ysb0ZBQzFELDJCQUNMLHNCQUNULGFBQ0YsV0FDYiIsImZpbGUiOiJjb21wb25lbnRzL0hlcm8uanN4Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9TYW0vQ29kZS9oaWdoZmllbGQtbmV4dCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBoZXhUb1JnYmEgZnJvbSAnaGV4LXJnYmEnO1xuaW1wb3J0IHsgcHJpbWFyeSB9IGZyb20gJy4vY29tbW9uU3R5bGVzJztcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8c2VjdGlvbj5cbiAgICA8c3R5bGUganN4PlxuICAgICAge2BcbiAgICAgICAgc2VjdGlvbiB7XG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL3N0YXRpYy9pbWcvYmFja2dyb3VuZF8yLmpwZyksICR7aGV4VG9SZ2JhKHByaW1hcnksIDAuNSl9XG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyXG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlclxuICAgICAgICAgIGhlaWdodDogMzByZW1cbiAgICAgICAgICB3aWR0aDogMTAwJVxuICAgICAgICB9XG4gICAgICBgfVxuICAgIDwvc3R5bGU+XG4gIDwvc2VjdGlvbj5cbik7XG4iXX0= */\n/*@ sourceURL=components/Hero.jsx */"),
    dynamic: [__WEBPACK_IMPORTED_MODULE_2_hex_rgba___default()(__WEBPACK_IMPORTED_MODULE_3__commonStyles__["b" /* primary */], 0.5)]
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/Users/Sam/Code/highfield-next/components/Hero.jsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/hex-rgba/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hexToRgba(hex, opacity){
  var opacity = opacity || 100;
  var hex = hex.replace('#', '');
  if(hex.length === 6) {
    var r = parseInt(hex.substring(0, 2), 16);
    var g = parseInt(hex.substring(2, 4), 16);
    var b = parseInt(hex.substring(4, 6), 16);
  } else {
    var rd = hex.substring(0, 1) + hex.substring(0, 1);
    var gd = hex.substring(1, 2) + hex.substring(1, 2);
    var bd = hex.substring(2, 3) + hex.substring(2, 3);
    var r = parseInt(rd, 16);
    var g = parseInt(gd, 16);
    var b = parseInt(bd, 16);
  }

  return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + opacity / 100 + ')';
};

module.exports = hexToRgba;

/***/ })

})
//# sourceMappingURL=4.78eb65d2b84c12ef8e9e.hot-update.js.map