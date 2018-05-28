module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Footer.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__commonStyles__ = __webpack_require__("./components/commonStyles.js");
var _jsxFileName = "/Users/Sam/Code/highfield-next/components/Footer.jsx";





/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("footer", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3146407822", [__WEBPACK_IMPORTED_MODULE_3__commonStyles__["a" /* black */], __WEBPACK_IMPORTED_MODULE_3__commonStyles__["d" /* white */]]]])
  }, "Highfield Plumbing and Heating, ", new Date().getFullYear()), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "3146407822",
    css: "footer.__jsx-style-dynamic-selector{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:".concat(__WEBPACK_IMPORTED_MODULE_3__commonStyles__["a" /* black */], ";color:").concat(__WEBPACK_IMPORTED_MODULE_3__commonStyles__["d" /* white */], ";display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:0.7rem;height:2rem;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-top:auto;padding:0 1rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRm9vdGVyLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXTyxBQUVzQiw2RkFDcUIsd0NBQ0wsbUNBQ3RCLDBFQUNJLGlCQUNMLFlBQ1csbUdBQ1AsZ0JBQ0QsZUFDakIiLCJmaWxlIjoiY29tcG9uZW50cy9Gb290ZXIuanN4Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9TYW0vQ29kZS9oaWdoZmllbGQtbmV4dCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IGJsYWNrLCB3aGl0ZSB9IGZyb20gJy4vY29tbW9uU3R5bGVzJztcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8RnJhZ21lbnQ+XG4gICAgPGZvb3Rlcj5cbiAgICAgIEhpZ2hmaWVsZCBQbHVtYmluZyBhbmQgSGVhdGluZywge25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX1cbiAgICA8L2Zvb3Rlcj5cblxuICAgIDxzdHlsZSBqc3g+XG4gICAgICB7YFxuICAgICAgICBmb290ZXIge1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtibGFja31cbiAgICAgICAgICBjb2xvcjogJHt3aGl0ZX1cbiAgICAgICAgICBkaXNwbGF5OiBmbGV4XG4gICAgICAgICAgZm9udC1zaXplOiAwLjdyZW1cbiAgICAgICAgICBoZWlnaHQ6IDJyZW1cbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxuICAgICAgICAgIG1hcmdpbi10b3A6IGF1dG9cbiAgICAgICAgICBwYWRkaW5nOiAwIDFyZW1cbiAgICAgICAgfVxuICAgICAgYH1cbiAgICA8L3N0eWxlPlxuICA8L0ZyYWdtZW50PlxuKTtcbiJdfQ== */\n/*@ sourceURL=components/Footer.jsx */"),
    dynamic: [__WEBPACK_IMPORTED_MODULE_3__commonStyles__["a" /* black */], __WEBPACK_IMPORTED_MODULE_3__commonStyles__["d" /* white */]]
  }));
});

/***/ }),

/***/ "./components/Header.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__commonStyles__ = __webpack_require__("./components/commonStyles.js");
var _jsxFileName = "/Users/Sam/Code/highfield-next/components/Header.jsx";




/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["967703333", [__WEBPACK_IMPORTED_MODULE_3__commonStyles__["d" /* white */], __WEBPACK_IMPORTED_MODULE_3__commonStyles__["b" /* primary */]]]])
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("nav", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["967703333", [__WEBPACK_IMPORTED_MODULE_3__commonStyles__["d" /* white */], __WEBPACK_IMPORTED_MODULE_3__commonStyles__["b" /* primary */]]]])
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["967703333", [__WEBPACK_IMPORTED_MODULE_3__commonStyles__["d" /* white */], __WEBPACK_IMPORTED_MODULE_3__commonStyles__["b" /* primary */]]]])
  }, "Home")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/services",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["967703333", [__WEBPACK_IMPORTED_MODULE_3__commonStyles__["d" /* white */], __WEBPACK_IMPORTED_MODULE_3__commonStyles__["b" /* primary */]]]])
  }, "Services")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["967703333", [__WEBPACK_IMPORTED_MODULE_3__commonStyles__["d" /* white */], __WEBPACK_IMPORTED_MODULE_3__commonStyles__["b" /* primary */]]]])
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
    src: "../static/img/flame.png",
    alt: "flame graphic",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["967703333", [__WEBPACK_IMPORTED_MODULE_3__commonStyles__["d" /* white */], __WEBPACK_IMPORTED_MODULE_3__commonStyles__["b" /* primary */]]]])
  }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/bathrooms",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["967703333", [__WEBPACK_IMPORTED_MODULE_3__commonStyles__["d" /* white */], __WEBPACK_IMPORTED_MODULE_3__commonStyles__["b" /* primary */]]]])
  }, "Bathrooms")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["967703333", [__WEBPACK_IMPORTED_MODULE_3__commonStyles__["d" /* white */], __WEBPACK_IMPORTED_MODULE_3__commonStyles__["b" /* primary */]]]])
  }, "Contact"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "967703333",
    css: "header.__jsx-style-dynamic-selector{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:#000;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:2.5rem;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:1rem 0;width:100%;}nav.__jsx-style-dynamic-selector{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:90%;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:90%;}nav.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{color:".concat(__WEBPACK_IMPORTED_MODULE_3__commonStyles__["d" /* white */], ";-webkit-letter-spacing:0.2rem;-moz-letter-spacing:0.2rem;-ms-letter-spacing:0.2rem;letter-spacing:0.2rem;font-size:0.9rem;-webkit-flex:1;-ms-flex:1;flex:1;text-align:center;}nav.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector:hover{color:").concat(__WEBPACK_IMPORTED_MODULE_3__commonStyles__["b" /* primary */], ";}nav.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{height:auto;width:1.5rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQk8sQUFFc0IsQUFTQSxBQU9nQixBQU9BLEFBR3ZCLFlBQ0MsYUFDZixVQVh3QixBQU94QiwwREF2QmtCLEFBU0gsZ0JBUkEsK0JBZ0JJLGlCQUNWLFVBUkksV0FDbUIsS0FUaEIsT0FpQkksT0FoQkssV0FpQnpCLHFGQVJZLEdBUkssT0FTakIsUUFSYSxXQUNiIiwiZmlsZSI6ImNvbXBvbmVudHMvSGVhZGVyLmpzeCIsInNvdXJjZVJvb3QiOiIvVXNlcnMvU2FtL0NvZGUvaGlnaGZpZWxkLW5leHQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgd2hpdGUsIHByaW1hcnkgfSBmcm9tICcuL2NvbW1vblN0eWxlcyc7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgPGhlYWRlcj5cbiAgICA8bmF2PlxuICAgICAgPExpbmsgaHJlZj1cIi9cIj48YT5Ib21lPC9hPjwvTGluaz5cbiAgICAgIDxMaW5rIGhyZWY9XCIvc2VydmljZXNcIj48YT5TZXJ2aWNlczwvYT48L0xpbms+XG4gICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICA8YT48aW1nIHNyYz1cIi4uL3N0YXRpYy9pbWcvZmxhbWUucG5nXCIgYWx0PVwiZmxhbWUgZ3JhcGhpY1wiIC8+PC9hPlxuICAgICAgPC9MaW5rPlxuICAgICAgPExpbmsgaHJlZj1cIi9iYXRocm9vbXNcIj48YT5CYXRocm9vbXM8L2E+PC9MaW5rPlxuICAgICAgPExpbmsgaHJlZj1cIi9jb250YWN0XCI+PGE+Q29udGFjdDwvYT48L0xpbms+XG4gICAgPC9uYXY+XG5cbiAgICA8c3R5bGUganN4PlxuICAgICAge2BcbiAgICAgICAgaGVhZGVyIHtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgaGVpZ2h0OiAyLjVyZW07XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgcGFkZGluZzogMXJlbSAwO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgbmF2IHtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgaGVpZ2h0OiA5MCU7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIHdpZHRoOiA5MCU7XG5cbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIGNvbG9yOiAke3doaXRlfVxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMnJlbVxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW1cbiAgICAgICAgICAgIGZsZXg6IDFcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlclxuXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgY29sb3I6ICR7cHJpbWFyeX1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgd2lkdGg6IDEuNXJlbTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC9oZWFkZXI+XG4pO1xuIl19 */\n/*@ sourceURL=components/Header.jsx */"),
    dynamic: [__WEBPACK_IMPORTED_MODULE_3__commonStyles__["d" /* white */], __WEBPACK_IMPORTED_MODULE_3__commonStyles__["b" /* primary */]]
  }));
});

/***/ }),

/***/ "./components/Layout.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Header__ = __webpack_require__("./components/Header.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Footer__ = __webpack_require__("./components/Footer.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__node_modules_modern_normalize_modern_normalize_css__ = __webpack_require__("./node_modules/modern-normalize/modern-normalize.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__node_modules_modern_normalize_modern_normalize_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__node_modules_modern_normalize_modern_normalize_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__commonStyles__ = __webpack_require__("./components/commonStyles.js");
var _jsxFileName = "/Users/Sam/Code/highfield-next/components/Layout.jsx";










var Layout = function Layout(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, props.title), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("meta", {
    charSet: "utf-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Open+Sans:400,300i|Raleway:300",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("link", {
    rel: "icon",
    type: "image/png",
    href: "../static/img/flame.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1248341451", [__WEBPACK_IMPORTED_MODULE_7__commonStyles__["a" /* black */], __WEBPACK_IMPORTED_MODULE_7__commonStyles__["d" /* white */], __WEBPACK_IMPORTED_MODULE_7__commonStyles__["a" /* black */], __WEBPACK_IMPORTED_MODULE_7__commonStyles__["b" /* primary */]]]]) + " " + "wrapper"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Header__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }), props.children, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Footer__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "1248341451",
    css: "html{background-color:".concat(__WEBPACK_IMPORTED_MODULE_7__commonStyles__["a" /* black */], ";height:100vh;}body{background-color:").concat(__WEBPACK_IMPORTED_MODULE_7__commonStyles__["d" /* white */], ";display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:0;min-height:100%;font-family:'Open Sans',sans-serif;}#__next,.wrapper{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}a,h1,h2,h3{font-family:Raleway;text-transform:uppercase;}a{color:").concat(__WEBPACK_IMPORTED_MODULE_7__commonStyles__["a" /* black */], ";-webkit-text-decoration:none;text-decoration:none;-webkit-transition:0.2s color linear;transition:0.2s color linear;}a:hover{color:").concat(__WEBPACK_IMPORTED_MODULE_7__commonStyles__["b" /* primary */], ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0QlMsQUFFaUQsQUFJQSxBQVNqQyxBQVFPLEFBSWUsQUFLQSxvQkFSVixlQUlKLEFBS3ZCLFVBUkEsQ0F0QmUsQUFJQSxhQUhmLGVBWVMsV0Fhc0Isc0JBWlAsYUFUQSwrQkFzQnhCLGtDQVpBLGFBVFcsU0FDTyxnQkFDb0IsbUNBQ3RDIiwiZmlsZSI6ImNvbXBvbmVudHMvTGF5b3V0LmpzeCIsInNvdXJjZVJvb3QiOiIvVXNlcnMvU2FtL0NvZGUvaGlnaGZpZWxkLW5leHQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vRm9vdGVyJztcbmltcG9ydCAnLi4vbm9kZV9tb2R1bGVzL21vZGVybi1ub3JtYWxpemUvbW9kZXJuLW5vcm1hbGl6ZS5jc3MnO1xuaW1wb3J0ICogYXMgY29tbW9uIGZyb20gJy4vY29tbW9uU3R5bGVzJztcblxuY29uc3QgTGF5b3V0ID0gcHJvcHMgPT4gKFxuICA8RnJhZ21lbnQ+XG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+eyBwcm9wcy50aXRsZSB9PC90aXRsZT5cbiAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2Fuczo0MDAsMzAwaXxSYWxld2F5OjMwMFwiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxuICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiBocmVmPVwiLi4vc3RhdGljL2ltZy9mbGFtZS5wbmdcIiAvPlxuICAgIDwvSGVhZD5cblxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cblxuICAgICAgPEhlYWRlciAvPlxuXG4gICAgICB7IHByb3BzLmNoaWxkcmVuIH1cblxuICAgICAgPEZvb3RlciAvPlxuXG5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICB7YFxuICAgICAgICAgIGh0bWwge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtjb21tb24uYmxhY2t9XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbW1vbi53aGl0ZX1cbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXhcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cbiAgICAgICAgICAgIG1hcmdpbjogMFxuICAgICAgICAgICAgbWluLWhlaWdodDogMTAwJVxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgI19fbmV4dCwgLndyYXBwZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleFxuICAgICAgICAgICAgZmxleDogMVxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxuICAgICAgICAgIH1cblxuICAgICAgICAgIGEsXG4gICAgICAgICAgaDEsXG4gICAgICAgICAgaDIsXG4gICAgICAgICAgaDMge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFJhbGV3YXlcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2VcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIGNvbG9yOiAke2NvbW1vbi5ibGFja31cbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZVxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4ycyBjb2xvciBsaW5lYXI7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICBjb2xvcjogJHtjb21tb24ucHJpbWFyeX1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvc2VjdGlvbj5cbiAgPC9GcmFnbWVudD5cbik7XG5cbkxheW91dC5kZWZhdWx0UHJvcHMgPSB7XG4gIHRpdGxlOiAnSGlnaGZpZWxkIFBsdW1iaW5nIGFuZCBIZWF0aW5nJ1xufTtcblxuLyogZXNsaW50LWRpc2FibGUgcmVhY3QvZm9yYmlkLXByb3AtdHlwZXMgKi9cbkxheW91dC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXX0= */\n/*@ sourceURL=components/Layout.jsx */"),
    dynamic: [__WEBPACK_IMPORTED_MODULE_7__commonStyles__["a" /* black */], __WEBPACK_IMPORTED_MODULE_7__commonStyles__["d" /* white */], __WEBPACK_IMPORTED_MODULE_7__commonStyles__["a" /* black */], __WEBPACK_IMPORTED_MODULE_7__commonStyles__["b" /* primary */]]
  })));
};

Layout.defaultProps = {
  title: 'Highfield Plumbing and Heating'
};
/* eslint-disable react/forbid-prop-types */

Layout.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.any.isRequired,
  title: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string
};
/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "./components/commonStyles.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return primary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return secondary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return black; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return white; });
/* unused harmony export textShadow */
/* unused harmony export boxShadow */
// colors
var primary = '#ed932a';
var secondary = '#1B78A0';
var black = '#000';
var white = '#fefefe';
var textShadow = '0 1px 2px rgba(0, 0, 0, 0.2)';
var boxShadow = '0 2px 10px rgba(0, 0, 0, 0.25)';

/***/ }),

/***/ "./node_modules/modern-normalize/modern-normalize.css":
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/services.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_grid_gallery__ = __webpack_require__("react-grid-gallery");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_grid_gallery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_grid_gallery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Layout__ = __webpack_require__("./components/Layout.jsx");
var _jsxFileName = "/Users/Sam/Code/highfield-next/pages/services.jsx";





var buildGrid = function buildGrid() {
  var grid = [];

  for (var i = 1; i <= 15; i++) {
    grid.push({
      src: "../static/img/services-gallery/".concat(i, ".jpg"),
      thumbnail: "../static/img/services-gallery/".concat(i, ".jpg"),
      thumbnailWidth: 150,
      thumbnailHeight: 200
    });
  }

  return grid;
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Layout__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    className: "jsx-2180632454"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    className: "jsx-2180632454"
  }, "Our Services"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_grid_gallery___default.a, {
    images: buildGrid(),
    enableImageSelection: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "2180632454",
    css: "section.jsx-2180632454{-webkit-flex:1;-ms-flex:1;flex:1;padding:1rem;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3NlcnZpY2VzLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2Qk8sQUFFVSxpQ0FDTSxhQUNLLGtCQUNwQiIsImZpbGUiOiJwYWdlcy9zZXJ2aWNlcy5qc3giLCJzb3VyY2VSb290IjoiL1VzZXJzL1NhbS9Db2RlL2hpZ2hmaWVsZC1uZXh0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbGxlcnkgZnJvbSAncmVhY3QtZ3JpZC1nYWxsZXJ5JztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuXG5jb25zdCBidWlsZEdyaWQgPSAoKSA9PiB7XG4gIGNvbnN0IGdyaWQgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMTU7IGkrKykge1xuICAgIGdyaWQucHVzaCh7XG4gICAgICBzcmM6IGAuLi9zdGF0aWMvaW1nL3NlcnZpY2VzLWdhbGxlcnkvJHtpfS5qcGdgLFxuICAgICAgdGh1bWJuYWlsOiBgLi4vc3RhdGljL2ltZy9zZXJ2aWNlcy1nYWxsZXJ5LyR7aX0uanBnYCxcbiAgICAgIHRodW1ibmFpbFdpZHRoOiAxNTAsXG4gICAgICB0aHVtYm5haWxIZWlnaHQ6IDIwMFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGdyaWQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxMYXlvdXQ+XG5cbiAgICA8c2VjdGlvbj5cbiAgICAgIDxoMT5PdXIgU2VydmljZXM8L2gxPlxuICAgICAgPEdhbGxlcnlcbiAgICAgICAgaW1hZ2VzPXtidWlsZEdyaWQoKX1cbiAgICAgICAgZW5hYmxlSW1hZ2VTZWxlY3Rpb249e2ZhbHNlfVxuICAgICAgLz5cbiAgICA8L3NlY3Rpb24+XG5cbiAgICA8c3R5bGUganN4PlxuICAgICAge2BcbiAgICAgICAgc2VjdGlvbiB7XG4gICAgICAgICAgZmxleDogMVxuICAgICAgICAgIHBhZGRpbmc6IDFyZW1cbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXJcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICA8L3N0eWxlPlxuICA8L0xheW91dD5cbik7XG4iXX0= */\n/*@ sourceURL=pages/services.jsx */"
  }));
});

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/services.jsx");


/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "prop-types":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-grid-gallery":
/***/ (function(module, exports) {

module.exports = require("react-grid-gallery");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=services.js.map