webpackHotUpdate(5,{

/***/ "./pages/services.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_grid_gallery__ = __webpack_require__("./node_modules/react-grid-gallery/lib/Gallery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_grid_gallery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_grid_gallery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Layout__ = __webpack_require__("./components/Layout.jsx");
var _jsxFileName = "/Users/Sam/Code/highfield-next/pages/services.jsx";



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();




function getImgSize(imgSrc) {
  var newImg = new Image();

  newImg.onload = function () {
    return {
      h: newImg.height,
      w: newImg.width
    };
  };

  newImg.src = imgSrc; // this must be done AFTER setting onload
}

var buildGrid = function buildGrid() {
  var grid = [];

  for (var i = 1; i <= 15; i++) {
    var img = "../static/img/services-gallery/".concat(i, ".jpg");

    var _getImgSize = getImgSize(img),
        h = _getImgSize.h,
        w = _getImgSize.w;

    grid.push({
      src: img,
      thumbnail: img,
      thumbnailWidth: w,
      thumbnailHeight: h
    });
  }

  return grid;
};

var _default = function _default() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Layout__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    className: "jsx-2180632454"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    className: "jsx-2180632454"
  }, "Our Services"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_grid_gallery___default.a, {
    images: buildGrid(),
    enableImageSelection: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "2180632454",
    css: "section.jsx-2180632454{-webkit-flex:1;-ms-flex:1;flex:1;padding:1rem;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3NlcnZpY2VzLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQ08sQUFFVSxpQ0FDTSxhQUNLLGtCQUNwQiIsImZpbGUiOiJwYWdlcy9zZXJ2aWNlcy5qc3giLCJzb3VyY2VSb290IjoiL1VzZXJzL1NhbS9Db2RlL2hpZ2hmaWVsZC1uZXh0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbGxlcnkgZnJvbSAncmVhY3QtZ3JpZC1nYWxsZXJ5JztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuXG5mdW5jdGlvbiBnZXRJbWdTaXplKGltZ1NyYykge1xuICBjb25zdCBuZXdJbWcgPSBuZXcgSW1hZ2UoKTtcblxuICBuZXdJbWcub25sb2FkID0gKCkgPT4gKHtcbiAgICBoOiBuZXdJbWcuaGVpZ2h0LFxuICAgIHc6IG5ld0ltZy53aWR0aFxuICB9KTtcblxuICBuZXdJbWcuc3JjID0gaW1nU3JjOyAvLyB0aGlzIG11c3QgYmUgZG9uZSBBRlRFUiBzZXR0aW5nIG9ubG9hZFxufVxuXG5jb25zdCBidWlsZEdyaWQgPSAoKSA9PiB7XG4gIGNvbnN0IGdyaWQgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMTU7IGkrKykge1xuICAgIGNvbnN0IGltZyA9IGAuLi9zdGF0aWMvaW1nL3NlcnZpY2VzLWdhbGxlcnkvJHtpfS5qcGdgO1xuICAgIGNvbnN0IHsgaCwgdyB9ID0gZ2V0SW1nU2l6ZShpbWcpO1xuXG4gICAgZ3JpZC5wdXNoKHtcbiAgICAgIHNyYzogaW1nLFxuICAgICAgdGh1bWJuYWlsOiBpbWcsXG4gICAgICB0aHVtYm5haWxXaWR0aDogdyxcbiAgICAgIHRodW1ibmFpbEhlaWdodDogaFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGdyaWQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxMYXlvdXQ+XG5cbiAgICA8c2VjdGlvbj5cbiAgICAgIDxoMT5PdXIgU2VydmljZXM8L2gxPlxuICAgICAgPEdhbGxlcnlcbiAgICAgICAgaW1hZ2VzPXtidWlsZEdyaWQoKX1cbiAgICAgICAgZW5hYmxlSW1hZ2VTZWxlY3Rpb249e2ZhbHNlfVxuICAgICAgLz5cbiAgICA8L3NlY3Rpb24+XG5cbiAgICA8c3R5bGUganN4PlxuICAgICAge2BcbiAgICAgICAgc2VjdGlvbiB7XG4gICAgICAgICAgZmxleDogMVxuICAgICAgICAgIHBhZGRpbmc6IDFyZW1cbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXJcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICA8L3N0eWxlPlxuICA8L0xheW91dD5cbik7XG4iXX0= */\n/*@ sourceURL=pages/services.jsx */"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(getImgSize, "getImgSize", "/Users/Sam/Code/highfield-next/pages/services.jsx");
  reactHotLoader.register(buildGrid, "buildGrid", "/Users/Sam/Code/highfield-next/pages/services.jsx");
  reactHotLoader.register(_default, "default", "/Users/Sam/Code/highfield-next/pages/services.jsx");
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/services")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.ed58b95626727c110e66.hot-update.js.map