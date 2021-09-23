"use strict";
self["webpackHotUpdate_N_E"]("pages/campaigns/new",{

/***/ "./pages/campaigns/new.js":
/*!********************************!*\
  !*** ./pages/campaigns/new.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_Tuti_Desktop_YO_Proyectos_Actuales_Solidity_kickstarter_smart_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_Tuti_Desktop_YO_Proyectos_Actuales_Solidity_kickstarter_smart_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_Tuti_Desktop_YO_Proyectos_Actuales_Solidity_kickstarter_smart_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_Tuti_Desktop_YO_Proyectos_Actuales_Solidity_kickstarter_smart_frontend_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var C_Users_Tuti_Desktop_YO_Proyectos_Actuales_Solidity_kickstarter_smart_frontend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Users_Tuti_Desktop_YO_Proyectos_Actuales_Solidity_kickstarter_smart_frontend_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Users_Tuti_Desktop_YO_Proyectos_Actuales_Solidity_kickstarter_smart_frontend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var C_Users_Tuti_Desktop_YO_Proyectos_Actuales_Solidity_kickstarter_smart_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_Tuti_Desktop_YO_Proyectos_Actuales_Solidity_kickstarter_smart_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Tuti_Desktop_YO_Proyectos_Actuales_Solidity_kickstarter_smart_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(C_Users_Tuti_Desktop_YO_Proyectos_Actuales_Solidity_kickstarter_smart_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../ethereum/factory */ "./ethereum/factory.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__);
/* module decorator */ module = __webpack_require__.hmd(module);








var _jsxFileName = "C:\\Users\\Tuti\\Desktop\\YO\\Proyectos Actuales\\Solidity\\kickstarter_smart_frontend\\pages\\campaigns\\new.js";


function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,C_Users_Tuti_Desktop_YO_Proyectos_Actuales_Solidity_kickstarter_smart_frontend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,C_Users_Tuti_Desktop_YO_Proyectos_Actuales_Solidity_kickstarter_smart_frontend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,C_Users_Tuti_Desktop_YO_Proyectos_Actuales_Solidity_kickstarter_smart_frontend_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }








var CampaignNew = /*#__PURE__*/function (_React$Component) {
  (0,C_Users_Tuti_Desktop_YO_Proyectos_Actuales_Solidity_kickstarter_smart_frontend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.default)(CampaignNew, _React$Component);

  var _super = _createSuper(CampaignNew);

  function CampaignNew() {
    var _this;

    (0,C_Users_Tuti_Desktop_YO_Proyectos_Actuales_Solidity_kickstarter_smart_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, CampaignNew);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    (0,C_Users_Tuti_Desktop_YO_Proyectos_Actuales_Solidity_kickstarter_smart_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__.default)((0,C_Users_Tuti_Desktop_YO_Proyectos_Actuales_Solidity_kickstarter_smart_frontend_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this), "state", {
      minimumContribution: '',
      errorMessage: ''
    });

    (0,C_Users_Tuti_Desktop_YO_Proyectos_Actuales_Solidity_kickstarter_smart_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__.default)((0,C_Users_Tuti_Desktop_YO_Proyectos_Actuales_Solidity_kickstarter_smart_frontend_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this), "onSubmit", /*#__PURE__*/function () {
      var _ref = (0,C_Users_Tuti_Desktop_YO_Proyectos_Actuales_Solidity_kickstarter_smart_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_Tuti_Desktop_YO_Proyectos_Actuales_Solidity_kickstarter_smart_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default().mark(function _callee(event) {
        var accounts;
        return C_Users_Tuti_Desktop_YO_Proyectos_Actuales_Solidity_kickstarter_smart_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                _context.prev = 1;
                _context.next = 4;
                return _ethereum_web3__WEBPACK_IMPORTED_MODULE_12__.default.eth.getAccounts();

              case 4:
                accounts = _context.sent;
                _context.next = 7;
                return _ethereum_factory__WEBPACK_IMPORTED_MODULE_11__.default.methods.createCampaign(_this.state.minimumContribution).send({
                  from: accounts[0]
                });

              case 7:
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](1);

                _this.setState({
                  errorMessage: _context.t0.message
                });

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 9]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    return _this;
  }

  (0,C_Users_Tuti_Desktop_YO_Proyectos_Actuales_Solidity_kickstarter_smart_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(CampaignNew, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_10__.default, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("h3", {
          children: "Create a Campaign"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.Form, {
          onSubmit: this.onSubmit,
          error: !!this.state.errorMessage,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.Form.Field, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("label", {
              children: "Minimum Contribution"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.Input, {
              label: "wei",
              labelPosition: "right",
              value: this.state.minimumContribution,
              onChange: function onChange(event) {
                return _this2.setState({
                  minimumContribution: event.target.value
                });
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.Message, {
            error: true,
            header: "Oops!",
            content: this.state.errorMessage
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.Button, {
            primary: true,
            children: "Create!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 13
      }, this);
    }
  }]);

  return CampaignNew;
}((react__WEBPACK_IMPORTED_MODULE_9___default().Component));

;
/* harmony default export */ __webpack_exports__["default"] = (CampaignNew);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FtcGFpZ25zL25ldy5lODBlYmQ3YjcyZjRjMDE1Y2FmMi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0lBRU1ROzs7Ozs7Ozs7Ozs7Ozs7O3dYQUNNO0FBQ0pDLE1BQUFBLG1CQUFtQixFQUFFLEVBRGpCO0FBRUpDLE1BQUFBLFlBQVksRUFBRTtBQUZWOzs7aVhBS0csaUJBQU9DLEtBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1BBLGdCQUFBQSxLQUFLLENBQUNDLGNBQU47QUFETztBQUFBO0FBQUEsdUJBSW9CTCxvRUFBQSxFQUpwQjs7QUFBQTtBQUlHUSxnQkFBQUEsUUFKSDtBQUFBO0FBQUEsdUJBS0dULDhFQUFBLENBQStCLE1BQUtZLEtBQUwsQ0FBV1QsbUJBQTFDLEVBQ0RVLElBREMsQ0FDSTtBQUNGQyxrQkFBQUEsSUFBSSxFQUFFTCxRQUFRLENBQUMsQ0FBRDtBQURaLGlCQURKLENBTEg7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFVSCxzQkFBS00sUUFBTCxDQUFjO0FBQUVYLGtCQUFBQSxZQUFZLEVBQUUsWUFBSVk7QUFBcEIsaUJBQWQ7O0FBVkc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7OztXQWVYLGtCQUFRO0FBQUE7O0FBQ0osMEJBQ0ksK0RBQUMsd0RBQUQ7QUFBQSxnQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJLCtEQUFDLG9EQUFEO0FBQU0sa0JBQVEsRUFBRSxLQUFLQyxRQUFyQjtBQUErQixlQUFLLEVBQUUsQ0FBQyxDQUFDLEtBQUtMLEtBQUwsQ0FBV1IsWUFBbkQ7QUFBQSxrQ0FDSSwrREFBQywwREFBRDtBQUFBLG9DQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLGVBRUksK0RBQUMscURBQUQ7QUFDSSxtQkFBSyxFQUFDLEtBRFY7QUFFSSwyQkFBYSxFQUFDLE9BRmxCO0FBR0ksbUJBQUssRUFBRSxLQUFLUSxLQUFMLENBQVdULG1CQUh0QjtBQUlJLHNCQUFRLEVBQUUsa0JBQUFFLEtBQUs7QUFBQSx1QkFBSSxNQUFJLENBQUNVLFFBQUwsQ0FBYztBQUFFWixrQkFBQUEsbUJBQW1CLEVBQUVFLEtBQUssQ0FBQ2EsTUFBTixDQUFhQztBQUFwQyxpQkFBZCxDQUFKO0FBQUE7QUFKbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFVSSwrREFBQyx1REFBRDtBQUFTLGlCQUFLLE1BQWQ7QUFBZSxrQkFBTSxFQUFDLE9BQXRCO0FBQThCLG1CQUFPLEVBQUUsS0FBS1AsS0FBTCxDQUFXUjtBQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVZKLGVBV0ksK0RBQUMsc0RBQUQ7QUFBUSxtQkFBTyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESjtBQWtCSDs7OztFQXhDcUJWOztBQXlDekI7QUFFRCwrREFBZVEsV0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jYW1wYWlnbnMvbmV3LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRm9ybSwgQnV0dG9uLCBJbnB1dCAsIE1lc3NhZ2V9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IGZhY3RvcnkgZnJvbSAnLi4vLi4vZXRoZXJldW0vZmFjdG9yeSc7XHJcbmltcG9ydCB3ZWIzIGZyb20gJy4uLy4uL2V0aGVyZXVtL3dlYjMnO1xyXG5cclxuY2xhc3MgQ2FtcGFpZ25OZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgICAgbWluaW11bUNvbnRyaWJ1dGlvbjogJycsXHJcbiAgICAgICAgZXJyb3JNZXNzYWdlOiAnJ1xyXG4gICAgfTtcclxuXHJcbiAgICBvblN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xyXG4gICAgICAgICAgICBhd2FpdCBmYWN0b3J5Lm1ldGhvZHMuY3JlYXRlQ2FtcGFpZ24odGhpcy5zdGF0ZS5taW5pbXVtQ29udHJpYnV0aW9uKVxyXG4gICAgICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGZyb206IGFjY291bnRzWzBdXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yTWVzc2FnZTogZXJyLm1lc3NhZ2V9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgIDxoMz5DcmVhdGUgYSBDYW1wYWlnbjwvaDM+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdH0gZXJyb3I9eyEhdGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+TWluaW11bSBDb250cmlidXRpb248L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nd2VpJyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsUG9zaXRpb249J3JpZ2h0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubWluaW11bUNvbnRyaWJ1dGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB0aGlzLnNldFN0YXRlKHsgbWluaW11bUNvbnRyaWJ1dGlvbjogZXZlbnQudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5GaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICA8TWVzc2FnZSBlcnJvciBoZWFkZXI9J09vcHMhJyBjb250ZW50PXt0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHByaW1hcnk+Q3JlYXRlITwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICApO1xyXG4gICAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhbXBhaWduTmV3OyJdLCJuYW1lcyI6WyJSZWFjdCIsIkZvcm0iLCJCdXR0b24iLCJJbnB1dCIsIk1lc3NhZ2UiLCJMYXlvdXQiLCJmYWN0b3J5Iiwid2ViMyIsIkNhbXBhaWduTmV3IiwibWluaW11bUNvbnRyaWJ1dGlvbiIsImVycm9yTWVzc2FnZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsImNyZWF0ZUNhbXBhaWduIiwic3RhdGUiLCJzZW5kIiwiZnJvbSIsInNldFN0YXRlIiwibWVzc2FnZSIsIm9uU3VibWl0IiwidGFyZ2V0IiwidmFsdWUiLCJDb21wb25lbnQiXSwic291cmNlUm9vdCI6IiJ9