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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Footer.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
var _jsxFileName = "/Users/Sam/Code/highfield-next/components/Footer.jsx";


/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("footer", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  });
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
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["967703333", [__WEBPACK_IMPORTED_MODULE_3__commonStyles__["f" /* white */], __WEBPACK_IMPORTED_MODULE_3__commonStyles__["c" /* primary */]]]])
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("nav", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["967703333", [__WEBPACK_IMPORTED_MODULE_3__commonStyles__["f" /* white */], __WEBPACK_IMPORTED_MODULE_3__commonStyles__["c" /* primary */]]]])
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
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["967703333", [__WEBPACK_IMPORTED_MODULE_3__commonStyles__["f" /* white */], __WEBPACK_IMPORTED_MODULE_3__commonStyles__["c" /* primary */]]]])
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
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["967703333", [__WEBPACK_IMPORTED_MODULE_3__commonStyles__["f" /* white */], __WEBPACK_IMPORTED_MODULE_3__commonStyles__["c" /* primary */]]]])
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
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["967703333", [__WEBPACK_IMPORTED_MODULE_3__commonStyles__["f" /* white */], __WEBPACK_IMPORTED_MODULE_3__commonStyles__["c" /* primary */]]]])
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
    src: "../static/img/flame.png",
    alt: "flame graphic",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["967703333", [__WEBPACK_IMPORTED_MODULE_3__commonStyles__["f" /* white */], __WEBPACK_IMPORTED_MODULE_3__commonStyles__["c" /* primary */]]]])
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
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["967703333", [__WEBPACK_IMPORTED_MODULE_3__commonStyles__["f" /* white */], __WEBPACK_IMPORTED_MODULE_3__commonStyles__["c" /* primary */]]]])
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
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["967703333", [__WEBPACK_IMPORTED_MODULE_3__commonStyles__["f" /* white */], __WEBPACK_IMPORTED_MODULE_3__commonStyles__["c" /* primary */]]]])
  }, "Contact"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "967703333",
    css: "header.__jsx-style-dynamic-selector{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:#000;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:2.5rem;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:1rem 0;width:100%;}nav.__jsx-style-dynamic-selector{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:90%;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:90%;}nav.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{color:".concat(__WEBPACK_IMPORTED_MODULE_3__commonStyles__["f" /* white */], ";-webkit-letter-spacing:0.2rem;-moz-letter-spacing:0.2rem;-ms-letter-spacing:0.2rem;letter-spacing:0.2rem;font-size:0.9rem;-webkit-flex:1;-ms-flex:1;flex:1;text-align:center;}nav.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector:hover{color:").concat(__WEBPACK_IMPORTED_MODULE_3__commonStyles__["c" /* primary */], ";}nav.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{height:auto;width:1.5rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQk8sQUFFc0IsQUFTQSxBQU9nQixBQU9BLEFBR3ZCLFlBQ0MsYUFDZixVQVh3QixBQU94QiwwREF2QmtCLEFBU0gsZ0JBUkEsK0JBZ0JJLGlCQUNWLFVBUkksV0FDbUIsS0FUaEIsT0FpQkksT0FoQkssV0FpQnpCLHFGQVJZLEdBUkssT0FTakIsUUFSYSxXQUNiIiwiZmlsZSI6ImNvbXBvbmVudHMvSGVhZGVyLmpzeCIsInNvdXJjZVJvb3QiOiIvVXNlcnMvU2FtL0NvZGUvaGlnaGZpZWxkLW5leHQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgd2hpdGUsIHByaW1hcnkgfSBmcm9tICcuL2NvbW1vblN0eWxlcyc7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgPGhlYWRlcj5cbiAgICA8bmF2PlxuICAgICAgPExpbmsgaHJlZj1cIi9cIj48YT5Ib21lPC9hPjwvTGluaz5cbiAgICAgIDxMaW5rIGhyZWY9XCIvc2VydmljZXNcIj48YT5TZXJ2aWNlczwvYT48L0xpbms+XG4gICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICA8YT48aW1nIHNyYz1cIi4uL3N0YXRpYy9pbWcvZmxhbWUucG5nXCIgYWx0PVwiZmxhbWUgZ3JhcGhpY1wiIC8+PC9hPlxuICAgICAgPC9MaW5rPlxuICAgICAgPExpbmsgaHJlZj1cIi9iYXRocm9vbXNcIj48YT5CYXRocm9vbXM8L2E+PC9MaW5rPlxuICAgICAgPExpbmsgaHJlZj1cIi9jb250YWN0XCI+PGE+Q29udGFjdDwvYT48L0xpbms+XG4gICAgPC9uYXY+XG5cbiAgICA8c3R5bGUganN4PlxuICAgICAge2BcbiAgICAgICAgaGVhZGVyIHtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgaGVpZ2h0OiAyLjVyZW07XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgcGFkZGluZzogMXJlbSAwO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgbmF2IHtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgaGVpZ2h0OiA5MCU7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIHdpZHRoOiA5MCU7XG5cbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIGNvbG9yOiAke3doaXRlfVxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMnJlbVxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW1cbiAgICAgICAgICAgIGZsZXg6IDFcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlclxuXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgY29sb3I6ICR7cHJpbWFyeX1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgd2lkdGg6IDEuNXJlbTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC9oZWFkZXI+XG4pO1xuIl19 */\n/*@ sourceURL=components/Header.jsx */"),
    dynamic: [__WEBPACK_IMPORTED_MODULE_3__commonStyles__["f" /* white */], __WEBPACK_IMPORTED_MODULE_3__commonStyles__["c" /* primary */]]
  }));
});

/***/ }),

/***/ "./components/Hero.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__commonStyles__ = __webpack_require__("./components/commonStyles.js");
var _jsxFileName = "/Users/Sam/Code/highfield-next/components/Hero.jsx";



/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3911956139", [__WEBPACK_IMPORTED_MODULE_2__commonStyles__["c" /* primary */], __WEBPACK_IMPORTED_MODULE_2__commonStyles__["f" /* white */], __WEBPACK_IMPORTED_MODULE_2__commonStyles__["e" /* textShadow */], __WEBPACK_IMPORTED_MODULE_2__commonStyles__["f" /* white */], __WEBPACK_IMPORTED_MODULE_2__commonStyles__["e" /* textShadow */]]]])
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
    src: "../static/img/background_2.jpg",
    alt: "tools on a bench",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3911956139", [__WEBPACK_IMPORTED_MODULE_2__commonStyles__["c" /* primary */], __WEBPACK_IMPORTED_MODULE_2__commonStyles__["f" /* white */], __WEBPACK_IMPORTED_MODULE_2__commonStyles__["e" /* textShadow */], __WEBPACK_IMPORTED_MODULE_2__commonStyles__["f" /* white */], __WEBPACK_IMPORTED_MODULE_2__commonStyles__["e" /* textShadow */]]]])
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3911956139", [__WEBPACK_IMPORTED_MODULE_2__commonStyles__["c" /* primary */], __WEBPACK_IMPORTED_MODULE_2__commonStyles__["f" /* white */], __WEBPACK_IMPORTED_MODULE_2__commonStyles__["e" /* textShadow */], __WEBPACK_IMPORTED_MODULE_2__commonStyles__["f" /* white */], __WEBPACK_IMPORTED_MODULE_2__commonStyles__["e" /* textShadow */]]]]) + " " + "hero-inner"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3911956139", [__WEBPACK_IMPORTED_MODULE_2__commonStyles__["c" /* primary */], __WEBPACK_IMPORTED_MODULE_2__commonStyles__["f" /* white */], __WEBPACK_IMPORTED_MODULE_2__commonStyles__["e" /* textShadow */], __WEBPACK_IMPORTED_MODULE_2__commonStyles__["f" /* white */], __WEBPACK_IMPORTED_MODULE_2__commonStyles__["e" /* textShadow */]]]])
  }, "HIGHFIELD PLUMBING AND HEATING"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3911956139", [__WEBPACK_IMPORTED_MODULE_2__commonStyles__["c" /* primary */], __WEBPACK_IMPORTED_MODULE_2__commonStyles__["f" /* white */], __WEBPACK_IMPORTED_MODULE_2__commonStyles__["e" /* textShadow */], __WEBPACK_IMPORTED_MODULE_2__commonStyles__["f" /* white */], __WEBPACK_IMPORTED_MODULE_2__commonStyles__["e" /* textShadow */]]]])
  }, "All aspects of gas installation, service, repair, heating and plumbing from a well established family company based in the North East")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "3911956139",
    css: "section.__jsx-style-dynamic-selector{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:".concat(__WEBPACK_IMPORTED_MODULE_2__commonStyles__["c" /* primary */], ";background-size:cover;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:30rem;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;overflow:hidden;position:relative;width:100%;}section.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{-webkit-filter:grayscale(90%);filter:grayscale(90%);height:100%;mix-blend-mode:multiply;object-fit:cover;object-position:center;width:100%;}h1.__jsx-style-dynamic-selector{font-size:3rem;color:").concat(__WEBPACK_IMPORTED_MODULE_2__commonStyles__["f" /* white */], ";margin-top:0;text-shadow:").concat(__WEBPACK_IMPORTED_MODULE_2__commonStyles__["e" /* textShadow */], ";z-index:1;}.hero-inner.__jsx-style-dynamic-selector{position:absolute;text-align:center;width:80%;}.hero-inner.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{color:").concat(__WEBPACK_IMPORTED_MODULE_2__commonStyles__["f" /* white */], ";text-shadow:").concat(__WEBPACK_IMPORTED_MODULE_2__commonStyles__["e" /* textShadow */], ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVyby5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVU8sQUFFc0IsQUFXRyxBQVFQLEFBT0csQUFLaUIsZUFYQSxHQU9qQixpQkFLdUIsQ0FKL0IsVUFDWixJQVJlLEVBVEQsV0FVNkIsQ0FUakIsWUFvQjFCLFlBbkJtQixLQWJ1QixXQXNCOUIsQ0FSYSxTQVN6QixjQVJhLEtBZFcsTUFleEIsZ0JBZGUsMEVBQ0EsYUFDVSxtR0FDUCxnQkFDRSxrQkFDUCxXQUNiIiwiZmlsZSI6ImNvbXBvbmVudHMvSGVyby5qc3giLCJzb3VyY2VSb290IjoiL1VzZXJzL1NhbS9Db2RlL2hpZ2hmaWVsZC1uZXh0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHJpbWFyeSwgd2hpdGUsIHRleHRTaGFkb3cgfSBmcm9tICcuL2NvbW1vblN0eWxlcyc7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgPHNlY3Rpb24+XG4gICAgPGltZyBzcmM9XCIuLi9zdGF0aWMvaW1nL2JhY2tncm91bmRfMi5qcGdcIiBhbHQ9XCJ0b29scyBvbiBhIGJlbmNoXCIgLz5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8taW5uZXJcIj5cbiAgICAgIDxoMT5ISUdIRklFTEQgUExVTUJJTkcgQU5EIEhFQVRJTkc8L2gxPlxuICAgICAgPHA+QWxsIGFzcGVjdHMgb2YgZ2FzIGluc3RhbGxhdGlvbiwgc2VydmljZSwgcmVwYWlyLCBoZWF0aW5nIGFuZCBwbHVtYmluZyBmcm9tIGEgd2VsbCBlc3RhYmxpc2hlZCBmYW1pbHkgY29tcGFueSBiYXNlZCBpbiB0aGUgTm9ydGggRWFzdDwvcD5cbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PlxuICAgICAge2BcbiAgICAgICAgc2VjdGlvbiB7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlclxuICAgICAgICAgIGJhY2tncm91bmQ6ICR7cHJpbWFyeX1cbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyXG4gICAgICAgICAgZGlzcGxheTogZmxleFxuICAgICAgICAgIGhlaWdodDogMzByZW1cbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW5cbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmVcbiAgICAgICAgICB3aWR0aDogMTAwJVxuXG4gICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDkwJSlcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIG1peC1ibGVuZC1tb2RlOiBtdWx0aXBseVxuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXJcbiAgICAgICAgICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyXG4gICAgICAgICAgICB3aWR0aDogMTAwJVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGgxIHtcbiAgICAgICAgICBmb250LXNpemU6IDNyZW1cbiAgICAgICAgICBjb2xvcjogJHt3aGl0ZX1cbiAgICAgICAgICBtYXJnaW4tdG9wOiAwXG4gICAgICAgICAgdGV4dC1zaGFkb3c6ICR7dGV4dFNoYWRvd31cbiAgICAgICAgICB6LWluZGV4OiAxXG4gICAgICAgIH1cblxuICAgICAgICAuaGVyby1pbm5lciB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyXG4gICAgICAgICAgd2lkdGg6IDgwJVxuXG4gICAgICAgICAgcCB7XG4gICAgICAgICAgICBjb2xvcjogJHt3aGl0ZX1cbiAgICAgICAgICAgIHRleHQtc2hhZG93OiAke3RleHRTaGFkb3d9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfVxuICAgIDwvc3R5bGU+XG4gIDwvc2VjdGlvbj5cbik7XG5cbi8vLCB1cmwoLi4vc3RhdGljL2ltZy9iYWNrZ3JvdW5kXzIuanBnKSBuby1yZXBlYXQgY2VudGVyIl19 */\n/*@ sourceURL=components/Hero.jsx */"),
    dynamic: [__WEBPACK_IMPORTED_MODULE_2__commonStyles__["c" /* primary */], __WEBPACK_IMPORTED_MODULE_2__commonStyles__["f" /* white */], __WEBPACK_IMPORTED_MODULE_2__commonStyles__["e" /* textShadow */], __WEBPACK_IMPORTED_MODULE_2__commonStyles__["f" /* white */], __WEBPACK_IMPORTED_MODULE_2__commonStyles__["e" /* textShadow */]]
  }));
}); //, url(../static/img/background_2.jpg) no-repeat center

/***/ }),

/***/ "./components/InfoCard.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_hex_rgba__ = __webpack_require__("hex-rgba");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_hex_rgba___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_hex_rgba__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__commonStyles__ = __webpack_require__("./components/commonStyles.js");
var _jsxFileName = "/Users/Sam/Code/highfield-next/components/InfoCard.jsx";







var InfoCard = function InfoCard(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["77114543", [__WEBPACK_IMPORTED_MODULE_3_hex_rgba___default()(__WEBPACK_IMPORTED_MODULE_4__commonStyles__["a" /* black */], 60), __WEBPACK_IMPORTED_MODULE_4__commonStyles__["d" /* secondary */], __WEBPACK_IMPORTED_MODULE_4__commonStyles__["b" /* boxShadow */], __WEBPACK_IMPORTED_MODULE_4__commonStyles__["f" /* white */]]]]) + " " + "info-card"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
    src: "../static/img/".concat(props.img),
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["77114543", [__WEBPACK_IMPORTED_MODULE_3_hex_rgba___default()(__WEBPACK_IMPORTED_MODULE_4__commonStyles__["a" /* black */], 60), __WEBPACK_IMPORTED_MODULE_4__commonStyles__["d" /* secondary */], __WEBPACK_IMPORTED_MODULE_4__commonStyles__["b" /* boxShadow */], __WEBPACK_IMPORTED_MODULE_4__commonStyles__["f" /* white */]]]]) + " " + "info-card-image"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["77114543", [__WEBPACK_IMPORTED_MODULE_3_hex_rgba___default()(__WEBPACK_IMPORTED_MODULE_4__commonStyles__["a" /* black */], 60), __WEBPACK_IMPORTED_MODULE_4__commonStyles__["d" /* secondary */], __WEBPACK_IMPORTED_MODULE_4__commonStyles__["b" /* boxShadow */], __WEBPACK_IMPORTED_MODULE_4__commonStyles__["f" /* white */]]]]) + " " + "inner"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["77114543", [__WEBPACK_IMPORTED_MODULE_3_hex_rgba___default()(__WEBPACK_IMPORTED_MODULE_4__commonStyles__["a" /* black */], 60), __WEBPACK_IMPORTED_MODULE_4__commonStyles__["d" /* secondary */], __WEBPACK_IMPORTED_MODULE_4__commonStyles__["b" /* boxShadow */], __WEBPACK_IMPORTED_MODULE_4__commonStyles__["f" /* white */]]]])
  }, props.title), props.children)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "77114543",
    css: "img.__jsx-style-dynamic-selector{-webkit-filter:grayscale(90%);filter:grayscale(90%);height:100%;mix-blend-mode:multiply;object-fit:cover;object-position:center;width:100%;}.info-card.__jsx-style-dynamic-selector{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:linear-gradient(to bottom right,".concat(__WEBPACK_IMPORTED_MODULE_3_hex_rgba___default()(__WEBPACK_IMPORTED_MODULE_4__commonStyles__["a" /* black */], 60), ",").concat(__WEBPACK_IMPORTED_MODULE_4__commonStyles__["d" /* secondary */], ");background-size:cover;box-shadow:").concat(__WEBPACK_IMPORTED_MODULE_4__commonStyles__["b" /* boxShadow */], ";display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:20rem;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;overflow:hidden;position:relative;width:20rem;}.info-card.__jsx-style-dynamic-selector .inner.__jsx-style-dynamic-selector{color:").concat(__WEBPACK_IMPORTED_MODULE_4__commonStyles__["f" /* white */], ";padding:1rem;position:absolute;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSW5mb0NhcmQuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdCTyxBQUV5QixBQVFILEFBWWdCLG1DQUN0QixhQUNLLElBckJOLFlBQ1ksRUFxQk4sa0JBQ3BCLElBckJtQixLQU11RixZQUxqRix1QkFDWixXQUNiLHdEQUl3QixzQkFDa0Isd0NBQzNCLDBFQUNBLGFBQ1UsbUdBQ1AsZ0JBQ0Usa0JBQ04sWUFDZCIsImZpbGUiOiJjb21wb25lbnRzL0luZm9DYXJkLmpzeCIsInNvdXJjZVJvb3QiOiIvVXNlcnMvU2FtL0NvZGUvaGlnaGZpZWxkLW5leHQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgaGV4VG9SZ2JhIGZyb20gJ2hleC1yZ2JhJztcbmltcG9ydCB7IHByaW1hcnksIHNlY29uZGFyeSwgd2hpdGUsIGJsYWNrLCBib3hTaGFkb3cgfSBmcm9tICcuL2NvbW1vblN0eWxlcyc7XG5cbmNvbnN0IEluZm9DYXJkID0gcHJvcHMgPT4gKFxuICA8RnJhZ21lbnQ+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvLWNhcmRcIj5cbiAgICAgIDxpbWcgc3JjPXtgLi4vc3RhdGljL2ltZy8ke3Byb3BzLmltZ31gfSBhbHQ9XCJcIiBjbGFzc05hbWU9XCJpbmZvLWNhcmQtaW1hZ2VcIiAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lclwiPlxuICAgICAgICA8aDI+e3Byb3BzLnRpdGxlfTwvaDI+XG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPHN0eWxlIGpzeD5cbiAgICAgIHtgXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgZmlsdGVyOiBncmF5c2NhbGUoOTAlKVxuICAgICAgICAgIGhlaWdodDogMTAwJVxuICAgICAgICAgIG1peC1ibGVuZC1tb2RlOiBtdWx0aXBseVxuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyXG4gICAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXJcbiAgICAgICAgICB3aWR0aDogMTAwJVxuICAgICAgICB9XG5cbiAgICAgICAgLmluZm8tY2FyZCB7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlclxuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICR7aGV4VG9SZ2JhKGJsYWNrLCA2MCl9LCAke3NlY29uZGFyeX0pXG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlclxuICAgICAgICAgIGJveC1zaGFkb3c6ICR7Ym94U2hhZG93fVxuICAgICAgICAgIGRpc3BsYXk6IGZsZXhcbiAgICAgICAgICBoZWlnaHQ6IDIwcmVtXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXJcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlXG4gICAgICAgICAgd2lkdGg6IDIwcmVtXG5cbiAgICAgICAgICAuaW5uZXIge1xuICAgICAgICAgICAgY29sb3I6ICR7d2hpdGV9XG4gICAgICAgICAgICBwYWRkaW5nOiAxcmVtXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGVcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlclxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH1cbiAgICA8L3N0eWxlPlxuICA8L0ZyYWdtZW50PlxuKTtcblxuSW5mb0NhcmQucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkLFxuICBpbWc6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5mb0NhcmQ7XG5cbiJdfQ== */\n/*@ sourceURL=components/InfoCard.jsx */"),
    dynamic: [__WEBPACK_IMPORTED_MODULE_3_hex_rgba___default()(__WEBPACK_IMPORTED_MODULE_4__commonStyles__["a" /* black */], 60), __WEBPACK_IMPORTED_MODULE_4__commonStyles__["d" /* secondary */], __WEBPACK_IMPORTED_MODULE_4__commonStyles__["b" /* boxShadow */], __WEBPACK_IMPORTED_MODULE_4__commonStyles__["f" /* white */]]
  }));
};

InfoCard.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.any.isRequired,
  img: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string.isRequired,
  title: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (InfoCard);

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
    href: "https://fonts.googleapis.com/css?family=Open+Sans|Raleway:300",
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
      lineNumber: 18
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1639274377", [__WEBPACK_IMPORTED_MODULE_7__commonStyles__["f" /* white */], __WEBPACK_IMPORTED_MODULE_7__commonStyles__["a" /* black */], __WEBPACK_IMPORTED_MODULE_7__commonStyles__["c" /* primary */]]]])
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Header__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }), props.children, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Footer__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "1639274377",
    css: "html{background-color:".concat(__WEBPACK_IMPORTED_MODULE_7__commonStyles__["f" /* white */], ";}body{margin:0;font-family:'Open Sans',sans-serif;}a,h1,h2,h3{font-family:Raleway;text-transform:uppercase;}a{color:").concat(__WEBPACK_IMPORTED_MODULE_7__commonStyles__["a" /* black */], ";-webkit-text-decoration:none;text-decoration:none;-webkit-transition:0.2s color linear;transition:0.2s color linear;}a:hover{color:").concat(__WEBPACK_IMPORTED_MODULE_7__commonStyles__["c" /* primary */], ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQlMsQUFFaUQsQUFHckMsQUFPVyxBQUllLEFBS0EsU0FmQyxXQU9YLGVBSUosQUFLdkIsU0FmQSxDQU9BLENBWEEsdUNBZStCLGtFQUMvQiIsImZpbGUiOiJjb21wb25lbnRzL0xheW91dC5qc3giLCJzb3VyY2VSb290IjoiL1VzZXJzL1NhbS9Db2RlL2hpZ2hmaWVsZC1uZXh0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL0Zvb3Rlcic7XG5pbXBvcnQgJy4uL25vZGVfbW9kdWxlcy9tb2Rlcm4tbm9ybWFsaXplL21vZGVybi1ub3JtYWxpemUuY3NzJztcbmltcG9ydCAqIGFzIGNvbW1vbiBmcm9tICcuL2NvbW1vblN0eWxlcyc7XG5cbmNvbnN0IExheW91dCA9IHByb3BzID0+IChcbiAgPEZyYWdtZW50PlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPnsgcHJvcHMudGl0bGUgfTwvdGl0bGU+XG4gICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnN8UmFsZXdheTozMDBcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cbiAgICAgIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgaHJlZj1cIi4uL3N0YXRpYy9pbWcvZmxhbWUucG5nXCIgLz5cbiAgICA8L0hlYWQ+XG4gICAgPHNlY3Rpb24+XG5cbiAgICAgIDxIZWFkZXIgLz5cblxuICAgICAgeyBwcm9wcy5jaGlsZHJlbiB9XG5cbiAgICAgIDxGb290ZXIgLz5cblxuXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgICAge2BcbiAgICAgICAgICBodG1sIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29tbW9uLndoaXRlfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYSxcbiAgICAgICAgICBoMSxcbiAgICAgICAgICBoMixcbiAgICAgICAgICBoMyB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogUmFsZXdheVxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgY29sb3I6ICR7Y29tbW9uLmJsYWNrfVxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzIGNvbG9yIGxpbmVhcjtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgIGNvbG9yOiAke2NvbW1vbi5wcmltYXJ5fVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9zZWN0aW9uPlxuICA8L0ZyYWdtZW50PlxuKTtcblxuTGF5b3V0LmRlZmF1bHRQcm9wcyA9IHtcbiAgdGl0bGU6ICdIaWdoZmllbGQgUGx1bWJpbmcgYW5kIEhlYXRpbmcnXG59O1xuXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9mb3JiaWQtcHJvcC10eXBlcyAqL1xuTGF5b3V0LnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiJdfQ== */\n/*@ sourceURL=components/Layout.jsx */"),
    dynamic: [__WEBPACK_IMPORTED_MODULE_7__commonStyles__["f" /* white */], __WEBPACK_IMPORTED_MODULE_7__commonStyles__["a" /* black */], __WEBPACK_IMPORTED_MODULE_7__commonStyles__["c" /* primary */]]
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return primary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return secondary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return black; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return white; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return textShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return boxShadow; });
// colors
var primary = '#ed932a';
var secondary = '#1B78A0';
var black = '#000';
var white = '#fefefe';
var textShadow = '0 1px 2px rgba(0, 0, 0, 0.2)';
var boxShadow = '0 2px 4px rgba(0, 0, 0, 0.18)';

/***/ }),

/***/ "./node_modules/modern-normalize/modern-normalize.css":
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout__ = __webpack_require__("./components/Layout.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Hero__ = __webpack_require__("./components/Hero.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_InfoCard__ = __webpack_require__("./components/InfoCard.jsx");
var _jsxFileName = "/Users/Sam/Code/highfield-next/pages/index.jsx";





/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Layout__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Hero__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    className: "jsx-1646164873"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    className: "jsx-1646164873"
  }, "Our Services"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    className: "jsx-1646164873" + " " + "info-wrapper"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_InfoCard__["a" /* default */], {
    img: "heating.jpg",
    title: "Heating",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, "No matter the size of your heating and hot water demands, we always find the most efficient, cost effective solution."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_InfoCard__["a" /* default */], {
    img: "gas.jpg",
    title: "Servicing",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, "All makes and models of gas appliance covered, from annual servicing and landlord safety certificates to emergency breakdowns and installations of the most up to date high efficiency boilers."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_InfoCard__["a" /* default */], {
    img: "plumbing.jpg",
    title: "Plumbing",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, "Full bathroom refurbishments, to dripping taps and blocked drains"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "1646164873",
    css: "section.jsx-1646164873{padding:1rem;text-align:center;}.info-wrapper.jsx-1646164873{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row-wrap;-ms-flex-direction:row-wrap;flex-direction:row-wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQk8sQUFFZ0IsQUFJQSxhQUhLLGtCQUNwQiwyQ0FHMEIsb0ZBQ00sbUhBQ2hDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzeCIsInNvdXJjZVJvb3QiOiIvVXNlcnMvU2FtL0NvZGUvaGlnaGZpZWxkLW5leHQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBIZXJvIGZyb20gJy4uL2NvbXBvbmVudHMvSGVybyc7XG5pbXBvcnQgSW5mb0NhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9JbmZvQ2FyZCc7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgPExheW91dD5cbiAgICA8SGVybyAvPlxuXG4gICAgPHNlY3Rpb24+XG4gICAgICA8aDE+T3VyIFNlcnZpY2VzPC9oMT5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvLXdyYXBwZXJcIj5cbiAgICAgICAgPEluZm9DYXJkIGltZz1cImhlYXRpbmcuanBnXCIgdGl0bGU9XCJIZWF0aW5nXCI+XG4gICAgICAgICAgTm8gbWF0dGVyIHRoZSBzaXplIG9mIHlvdXIgaGVhdGluZyBhbmQgaG90IHdhdGVyIGRlbWFuZHMsIHdlIGFsd2F5cyBmaW5kIHRoZSBtb3N0IGVmZmljaWVudCwgY29zdCBlZmZlY3RpdmUgc29sdXRpb24uXG4gICAgICAgIDwvSW5mb0NhcmQ+XG5cbiAgICAgICAgPEluZm9DYXJkIGltZz1cImdhcy5qcGdcIiB0aXRsZT1cIlNlcnZpY2luZ1wiPlxuICAgICAgICAgIEFsbCBtYWtlcyBhbmQgbW9kZWxzIG9mIGdhcyBhcHBsaWFuY2UgY292ZXJlZCwgZnJvbSBhbm51YWwgc2VydmljaW5nIGFuZCBsYW5kbG9yZCBzYWZldHkgY2VydGlmaWNhdGVzIHRvIGVtZXJnZW5jeSBicmVha2Rvd25zIGFuZCBpbnN0YWxsYXRpb25zIG9mIHRoZSBtb3N0IHVwIHRvIGRhdGUgaGlnaCBlZmZpY2llbmN5IGJvaWxlcnMuXG4gICAgICAgIDwvSW5mb0NhcmQ+XG5cbiAgICAgICAgPEluZm9DYXJkIGltZz1cInBsdW1iaW5nLmpwZ1wiIHRpdGxlPVwiUGx1bWJpbmdcIj5cbiAgICAgICAgICBGdWxsIGJhdGhyb29tIHJlZnVyYmlzaG1lbnRzLCB0byBkcmlwcGluZyB0YXBzIGFuZCBibG9ja2VkIGRyYWluc1xuICAgICAgICA8L0luZm9DYXJkPlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuXG4gICAgPHN0eWxlIGpzeD5cbiAgICAgIHtgXG4gICAgICAgIHNlY3Rpb24ge1xuICAgICAgICAgIHBhZGRpbmc6IDFyZW1cbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXJcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbmZvLXdyYXBwZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXhcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93LXdyYXBcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW5cbiAgICAgICAgfVxuICAgICAgYH1cbiAgICA8L3N0eWxlPlxuICA8L0xheW91dD5cbik7XG4iXX0= */\n/*@ sourceURL=pages/index.jsx */"
  }));
});

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.jsx");


/***/ }),

/***/ "hex-rgba":
/***/ (function(module, exports) {

module.exports = require("hex-rgba");

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

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map