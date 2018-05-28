webpackHotUpdate(5,{

/***/ "./components/LinkButton.jsx":
false,

/***/ "./node_modules/react-masonry-css/dist/react-masonry-css.es5.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Masonry = function (_React$Component) {
  _inherits(Masonry, _React$Component);

  function Masonry(props) {
    _classCallCheck(this, Masonry);

    var _this = _possibleConstructorReturn(this, (Masonry.__proto__ || Object.getPrototypeOf(Masonry)).call(this, props));

    _this.reCalculateColumnCount = _this.reCalculateColumnCount.bind(_this);

    // default state
    _this.state = {
      columnCount: 2
    };
    return _this;
  }

  _createClass(Masonry, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.reCalculateColumnCount();

      // window may not be avaliable in some environments
      if (window) {
        window.addEventListener('resize', this.reCalculateColumnCount);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps() {
      this.reCalculateColumnCount();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (window) {
        window.removeEventListener('resize', this.reCalculateColumnCount);
      }
    }
  }, {
    key: 'reCalculateColumnCount',
    value: function reCalculateColumnCount() {
      var windowWidth = window && window.innerWidth || Infinity;
      var breakpointColsObject = this.props.breakpointCols;

      // Allow passing a single number instead of an object
      if (parseInt(breakpointColsObject) > 0) {
        breakpointColsObject = {
          default: breakpointColsObject
        };
      }

      var matchedBreakpoint = Infinity;
      var columns = breakpointColsObject.default || 2;

      for (var breakpoint in breakpointColsObject) {
        var optBreakpoint = parseInt(breakpoint);
        var isCurrentBreakpoint = optBreakpoint > 0 && windowWidth <= optBreakpoint;

        if (isCurrentBreakpoint && optBreakpoint < matchedBreakpoint) {
          matchedBreakpoint = optBreakpoint;
          columns = breakpointColsObject[breakpoint];
        }
      }

      columns = Math.max(1, parseInt(columns) || 1);

      if (this.state.columnCount !== columns) {
        this.setState({
          columnCount: columns
        });
      }
    }
  }, {
    key: 'itemsInColumns',
    value: function itemsInColumns() {
      var currentColumnCount = this.state.columnCount;
      var itemsInColumns = new Array(currentColumnCount);
      var items = this.props.children || [];

      for (var i = 0; i < items.length; i++) {
        var columnIndex = i % currentColumnCount;

        if (!itemsInColumns[columnIndex]) {
          itemsInColumns[columnIndex] = [];
        }

        itemsInColumns[columnIndex].push(items[i]);
      }

      return itemsInColumns;
    }
  }, {
    key: 'renderColumns',
    value: function renderColumns() {
      var _props = this.props,
          column = _props.column,
          columnClassName = _props.columnClassName;

      var childrenInColumns = this.itemsInColumns();
      var w = 100 / childrenInColumns.length + '%';

      return childrenInColumns.map(function (items, i) {
        return _react2.default.createElement(
          'div',
          _extends({
            key: i,
            className: columnClassName,
            style: { width: w }
          }, column),
          items
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          breakpointCols = _props2.breakpointCols,
          columnClassName = _props2.columnClassName,
          column = _props2.column,
          wrapperProps = _objectWithoutProperties(_props2, ['breakpointCols', 'columnClassName', 'column']);

      return _react2.default.createElement(
        'div',
        wrapperProps,
        this.renderColumns()
      );
    }
  }]);

  return Masonry;
}(_react2.default.Component);

Masonry.propTypes = {
  breakpointCols: _propTypes2.default.object,
  columnClassName: _propTypes2.default.string
};

Masonry.defaultProps = {
  breakpointCols: {},
  className: 'my-masonry-grid',
  columnClassName: 'my-masonry-grid_column'
};

exports.default = Masonry;


/***/ }),

/***/ "./pages/services.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout__ = __webpack_require__("./components/Layout.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_masonry_css__ = __webpack_require__("./node_modules/react-masonry-css/dist/react-masonry-css.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_masonry_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_masonry_css__);
var _jsxFileName = "/Users/Sam/Code/highfield-next/pages/services.jsx";



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();




var _default = function _default() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Layout__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    className: "jsx-2180632454"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    className: "jsx-2180632454"
  }, "Our Services"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_masonry_css___default.a, {
    breakpointCols: 3,
    className: "my-masonry-grid",
    columnClassName: "my-masonry-grid_column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, function () {
    for (var i = 1; i <= 15; i++) {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: "../static/img/services-gallery/".concat(i, ".jpg"),
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        className: "jsx-2180632454"
      });
    }
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "2180632454",
    css: "section.jsx-2180632454{-webkit-flex:1;-ms-flex:1;flex:1;padding:1rem;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3NlcnZpY2VzLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1Qk8sQUFFVSxpQ0FDTSxhQUNLLGtCQUNwQiIsImZpbGUiOiJwYWdlcy9zZXJ2aWNlcy5qc3giLCJzb3VyY2VSb290IjoiL1VzZXJzL1NhbS9Db2RlL2hpZ2hmaWVsZC1uZXh0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgTWFzb25yeSBmcm9tICdyZWFjdC1tYXNvbnJ5LWNzcyc7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgPExheW91dD5cblxuICAgIDxzZWN0aW9uPlxuICAgICAgPGgxPk91ciBTZXJ2aWNlczwvaDE+XG5cbiAgICAgIDxNYXNvbnJ5XG4gICAgICAgIGJyZWFrcG9pbnRDb2xzPXszfVxuICAgICAgICBjbGFzc05hbWU9XCJteS1tYXNvbnJ5LWdyaWRcIlxuICAgICAgICBjb2x1bW5DbGFzc05hbWU9XCJteS1tYXNvbnJ5LWdyaWRfY29sdW1uXCJcbiAgICAgID5cbiAgICAgICAgeygpID0+IHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAxNTsgaSsrKSB7XG4gICAgICAgICAgICByZXR1cm4gPGltZyBzcmM9e2AuLi9zdGF0aWMvaW1nL3NlcnZpY2VzLWdhbGxlcnkvJHtpfS5qcGdgfSBhbHQ9XCJcIiAvPlxuICAgICAgICAgIH1cbiAgICAgICAgfX1cbiAgICAgIDwvTWFzb25yeT5cbiAgICA8L3NlY3Rpb24+XG5cbiAgICA8c3R5bGUganN4PlxuICAgICAge2BcbiAgICAgICAgc2VjdGlvbiB7XG4gICAgICAgICAgZmxleDogMVxuICAgICAgICAgIHBhZGRpbmc6IDFyZW1cbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXJcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICA8L3N0eWxlPlxuICA8L0xheW91dD5cbik7XG4iXX0= */\n/*@ sourceURL=pages/services.jsx */"
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
//# sourceMappingURL=5.bf4e026117b9b543f3f0.hot-update.js.map