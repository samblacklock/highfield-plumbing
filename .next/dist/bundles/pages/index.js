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

/***/ "./components/Hero.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hex_rgba__ = __webpack_require__("hex-rgba");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hex_rgba___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_hex_rgba__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__commonStyles__ = __webpack_require__("./components/commonStyles.js");
var _jsxFileName = "/Users/Sam/Code/highfield-next/components/Hero.jsx";




/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2907671211", [__WEBPACK_IMPORTED_MODULE_3__commonStyles__["b" /* primary */], __WEBPACK_IMPORTED_MODULE_3__commonStyles__["d" /* white */], __WEBPACK_IMPORTED_MODULE_3__commonStyles__["c" /* textShadow */], __WEBPACK_IMPORTED_MODULE_3__commonStyles__["d" /* white */], __WEBPACK_IMPORTED_MODULE_3__commonStyles__["c" /* textShadow */]]]])
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
    src: "../static/img/background_2.jpg",
    alt: "tools on a bench",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2907671211", [__WEBPACK_IMPORTED_MODULE_3__commonStyles__["b" /* primary */], __WEBPACK_IMPORTED_MODULE_3__commonStyles__["d" /* white */], __WEBPACK_IMPORTED_MODULE_3__commonStyles__["c" /* textShadow */], __WEBPACK_IMPORTED_MODULE_3__commonStyles__["d" /* white */], __WEBPACK_IMPORTED_MODULE_3__commonStyles__["c" /* textShadow */]]]])
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2907671211", [__WEBPACK_IMPORTED_MODULE_3__commonStyles__["b" /* primary */], __WEBPACK_IMPORTED_MODULE_3__commonStyles__["d" /* white */], __WEBPACK_IMPORTED_MODULE_3__commonStyles__["c" /* textShadow */], __WEBPACK_IMPORTED_MODULE_3__commonStyles__["d" /* white */], __WEBPACK_IMPORTED_MODULE_3__commonStyles__["c" /* textShadow */]]]]) + " " + "hero-inner"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2907671211", [__WEBPACK_IMPORTED_MODULE_3__commonStyles__["b" /* primary */], __WEBPACK_IMPORTED_MODULE_3__commonStyles__["d" /* white */], __WEBPACK_IMPORTED_MODULE_3__commonStyles__["c" /* textShadow */], __WEBPACK_IMPORTED_MODULE_3__commonStyles__["d" /* white */], __WEBPACK_IMPORTED_MODULE_3__commonStyles__["c" /* textShadow */]]]])
  }, "HIGHFIELD PLUMBING AND HEATING"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2907671211", [__WEBPACK_IMPORTED_MODULE_3__commonStyles__["b" /* primary */], __WEBPACK_IMPORTED_MODULE_3__commonStyles__["d" /* white */], __WEBPACK_IMPORTED_MODULE_3__commonStyles__["c" /* textShadow */], __WEBPACK_IMPORTED_MODULE_3__commonStyles__["d" /* white */], __WEBPACK_IMPORTED_MODULE_3__commonStyles__["c" /* textShadow */]]]])
  }, "All aspects of gas installation, service, repair, heating and plumbing from a well established family company based in the North East")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "2907671211",
    css: "section.__jsx-style-dynamic-selector{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:".concat(__WEBPACK_IMPORTED_MODULE_3__commonStyles__["b" /* primary */], ";background-size:cover;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:30rem;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;overflow:hidden;position:relative;width:100%;}section.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{-webkit-filter:grayscale(90%);filter:grayscale(90%);height:100%;mix-blend-mode:multiply;object-fit:cover;object-position:center;width:100%;}h1.__jsx-style-dynamic-selector{font-size:3rem;color:").concat(__WEBPACK_IMPORTED_MODULE_3__commonStyles__["d" /* white */], ";margin-top:0;text-shadow:").concat(__WEBPACK_IMPORTED_MODULE_3__commonStyles__["c" /* textShadow */], ";z-index:1;}.hero-inner.__jsx-style-dynamic-selector{position:absolute;text-align:center;width:80%;}.hero-inner.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{color:").concat(__WEBPACK_IMPORTED_MODULE_3__commonStyles__["d" /* white */], ";text-shadow:").concat(__WEBPACK_IMPORTED_MODULE_3__commonStyles__["c" /* textShadow */], ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVyby5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV08sQUFFc0IsQUFXRyxBQVFQLEFBT0csQUFLaUIsZUFYQSxHQU9qQixpQkFLdUIsQ0FKL0IsVUFDWixJQVJlLEVBVEQsV0FVNkIsQ0FUakIsWUFvQjFCLFlBbkJtQixLQWJ1QixXQXNCOUIsQ0FSYSxTQVN6QixjQVJhLEtBZFcsTUFleEIsZ0JBZGUsMEVBQ0EsYUFDVSxtR0FDUCxnQkFDRSxrQkFDUCxXQUNiIiwiZmlsZSI6ImNvbXBvbmVudHMvSGVyby5qc3giLCJzb3VyY2VSb290IjoiL1VzZXJzL1NhbS9Db2RlL2hpZ2hmaWVsZC1uZXh0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGhleFRvUmdiYSBmcm9tICdoZXgtcmdiYSc7XG5pbXBvcnQgeyBwcmltYXJ5LCB3aGl0ZSwgdGV4dFNoYWRvdyB9IGZyb20gJy4vY29tbW9uU3R5bGVzJztcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8c2VjdGlvbj5cbiAgICA8aW1nIHNyYz1cIi4uL3N0YXRpYy9pbWcvYmFja2dyb3VuZF8yLmpwZ1wiIGFsdD1cInRvb2xzIG9uIGEgYmVuY2hcIiAvPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyby1pbm5lclwiPlxuICAgICAgPGgxPkhJR0hGSUVMRCBQTFVNQklORyBBTkQgSEVBVElORzwvaDE+XG4gICAgICA8cD5BbGwgYXNwZWN0cyBvZiBnYXMgaW5zdGFsbGF0aW9uLCBzZXJ2aWNlLCByZXBhaXIsIGhlYXRpbmcgYW5kIHBsdW1iaW5nIGZyb20gYSB3ZWxsIGVzdGFibGlzaGVkIGZhbWlseSBjb21wYW55IGJhc2VkIGluIHRoZSBOb3J0aCBFYXN0PC9wPlxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+XG4gICAgICB7YFxuICAgICAgICBzZWN0aW9uIHtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyXG4gICAgICAgICAgYmFja2dyb3VuZDogJHtwcmltYXJ5fVxuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4XG4gICAgICAgICAgaGVpZ2h0OiAzMHJlbVxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlblxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxuICAgICAgICAgIHdpZHRoOiAxMDAlXG5cbiAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgZmlsdGVyOiBncmF5c2NhbGUoOTAlKVxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgbWl4LWJsZW5kLW1vZGU6IG11bHRpcGx5XG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlclxuICAgICAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaDEge1xuICAgICAgICAgIGZvbnQtc2l6ZTogM3JlbVxuICAgICAgICAgIGNvbG9yOiAke3doaXRlfVxuICAgICAgICAgIG1hcmdpbi10b3A6IDBcbiAgICAgICAgICB0ZXh0LXNoYWRvdzogJHt0ZXh0U2hhZG93fVxuICAgICAgICAgIHotaW5kZXg6IDFcbiAgICAgICAgfVxuXG4gICAgICAgIC5oZXJvLWlubmVyIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGVcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXJcbiAgICAgICAgICB3aWR0aDogODAlXG5cbiAgICAgICAgICBwIHtcbiAgICAgICAgICAgIGNvbG9yOiAke3doaXRlfVxuICAgICAgICAgICAgdGV4dC1zaGFkb3c6ICR7dGV4dFNoYWRvd31cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICBgfVxuICAgIDwvc3R5bGU+XG4gIDwvc2VjdGlvbj5cbik7XG5cbi8vLCB1cmwoLi4vc3RhdGljL2ltZy9iYWNrZ3JvdW5kXzIuanBnKSBuby1yZXBlYXQgY2VudGVyIl19 */\n/*@ sourceURL=components/Hero.jsx */"),
    dynamic: [__WEBPACK_IMPORTED_MODULE_3__commonStyles__["b" /* primary */], __WEBPACK_IMPORTED_MODULE_3__commonStyles__["d" /* white */], __WEBPACK_IMPORTED_MODULE_3__commonStyles__["c" /* textShadow */], __WEBPACK_IMPORTED_MODULE_3__commonStyles__["d" /* white */], __WEBPACK_IMPORTED_MODULE_3__commonStyles__["c" /* textShadow */]]
  }));
}); //, url(../static/img/background_2.jpg) no-repeat center

/***/ }),

/***/ "./components/InfoCard.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
var _jsxFileName = "/Users/Sam/Code/highfield-next/components/InfoCard.jsx";



var InfoCard = function InfoCard(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "info-card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, props.title), props.children)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("style", {
    jsx: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, "\n        .info-card {\n          .image {\n            background-image: url(".concat(props.img, ");\n          }\n        }\n      ")));
};

InfoCard.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.any.isRequired,
  img: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  title: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired
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
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Fragment, null, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, props.title), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("meta", {
    charSet: "utf-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Open+Sans|Raleway:300",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("link", {
    rel: "icon",
    type: "image/png",
    href: "../static/img/flame.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3049323905", [__WEBPACK_IMPORTED_MODULE_7__commonStyles__["a" /* black */], __WEBPACK_IMPORTED_MODULE_7__commonStyles__["b" /* primary */]]]])
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Header__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }), props.children, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Footer__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "3049323905",
    css: "body{margin:0;font-family:'Open Sans',sans-serif;}a,h1,h2,h3{font-family:Raleway;text-transform:uppercase;}a{color:".concat(__WEBPACK_IMPORTED_MODULE_7__commonStyles__["a" /* black */], ";-webkit-text-decoration:none;text-decoration:none;-webkit-transition:0.2s color linear;transition:0.2s color linear;}a:hover{color:").concat(__WEBPACK_IMPORTED_MODULE_7__commonStyles__["b" /* primary */], ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQlMsQUFFWSxBQU9XLEFBSWUsQUFLQSxTQWZDLFdBT1gsZUFJSixBQUt2QixTQWZBLENBT0Esd0NBSStCLGtFQUMvQiIsImZpbGUiOiJjb21wb25lbnRzL0xheW91dC5qc3giLCJzb3VyY2VSb290IjoiL1VzZXJzL1NhbS9Db2RlL2hpZ2hmaWVsZC1uZXh0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9Gb290ZXInO1xuaW1wb3J0ICcuLi9ub2RlX21vZHVsZXMvbW9kZXJuLW5vcm1hbGl6ZS9tb2Rlcm4tbm9ybWFsaXplLmNzcyc7XG5pbXBvcnQgKiBhcyBjb21tb24gZnJvbSAnLi9jb21tb25TdHlsZXMnO1xuXG5jb25zdCBMYXlvdXQgPSBwcm9wcyA9PiAoXG4gIDw+XG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+eyBwcm9wcy50aXRsZSB9PC90aXRsZT5cbiAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2Fuc3xSYWxld2F5OjMwMFwiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxuICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiBocmVmPVwiLi4vc3RhdGljL2ltZy9mbGFtZS5wbmdcIiAvPlxuICAgIDwvSGVhZD5cbiAgICA8c2VjdGlvbj5cblxuICAgICAgPEhlYWRlciAvPlxuXG4gICAgICB7IHByb3BzLmNoaWxkcmVuIH1cblxuICAgICAgPEZvb3RlciAvPlxuXG5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICB7YFxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYSxcbiAgICAgICAgICBoMSxcbiAgICAgICAgICBoMixcbiAgICAgICAgICBoMyB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogUmFsZXdheVxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgY29sb3I6ICR7Y29tbW9uLmJsYWNrfVxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzIGNvbG9yIGxpbmVhcjtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgIGNvbG9yOiAke2NvbW1vbi5wcmltYXJ5fVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9zZWN0aW9uPlxuICA8Lz5cbik7XG5cbkxheW91dC5kZWZhdWx0UHJvcHMgPSB7XG4gIHRpdGxlOiAnSGlnaGZpZWxkIFBsdW1iaW5nIGFuZCBIZWF0aW5nJ1xufTtcblxuLyogZXNsaW50LWRpc2FibGUgcmVhY3QvZm9yYmlkLXByb3AtdHlwZXMgKi9cbkxheW91dC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXX0= */\n/*@ sourceURL=components/Layout.jsx */"),
    dynamic: [__WEBPACK_IMPORTED_MODULE_7__commonStyles__["a" /* black */], __WEBPACK_IMPORTED_MODULE_7__commonStyles__["b" /* primary */]]
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return black; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return white; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return textShadow; });
// colors
var primary = '#ed932a';
var black = '#000';
var white = '#fef';
var textShadow = '0 1px 2px rgba(0, 0, 0, 0.2)';

/***/ }),

/***/ "./node_modules/modern-normalize/modern-normalize.css":
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__("./components/Layout.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Hero__ = __webpack_require__("./components/Hero.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_InfoCard__ = __webpack_require__("./components/InfoCard.jsx");
var _jsxFileName = "/Users/Sam/Code/highfield-next/pages/index.jsx";




/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Layout__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Hero__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, "Our Services"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_InfoCard__["a" /* default */], {
    img: '',
    title: "Heating",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, "No matter the size of your heating and hot water demands, we always find the most efficient, cost effective solution.")));
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