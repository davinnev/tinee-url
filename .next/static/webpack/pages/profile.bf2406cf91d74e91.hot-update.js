"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/profile",{

/***/ "./components/url-card/index.tsx":
/*!***************************************!*\
  !*** ./components/url-card/index.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   URLCard: function() { return /* binding */ URLCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction URLCard(props) {\n    const cardStyles = {\n        card: {\n            width: \"100%\",\n            maxWidth: \"500px\",\n            backgroundColor: \"#DEE4E7\",\n            borderRadius: \"15px\",\n            overflow: \"hidden\",\n            display: \"table\",\n            paddingBottom: \"10px\",\n            paddingTop: \"5px\"\n        },\n        content: {\n            marginLeft: \"25px\",\n            color: \"#273043\"\n        },\n        data: {\n            marginLeft: \"10px\",\n            fontSize: \"14px\"\n        },\n        token: {\n            marginBottom: \"0\",\n            fontSize: \"16px\"\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: cardStyles.card,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: cardStyles.content,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    style: cardStyles.token,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"https://tinee.vercel.app/\".concat(props.token),\n                        target: \"_blank\",\n                        children: \"tinee.vercel.app/\".concat(props.token)\n                    }, void 0, false, {\n                        fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/components/url-card/index.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/components/url-card/index.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: cardStyles.data,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    style: {\n                                        fontWeight: \"bold\"\n                                    },\n                                    children: [\n                                        \"Original URL:\",\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/components/url-card/index.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 13\n                                }, this),\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: props.url,\n                                    target: \"_blank\",\n                                    children: props.url\n                                }, void 0, false, {\n                                    fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/components/url-card/index.tsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/components/url-card/index.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    style: {\n                                        fontWeight: \"bold\"\n                                    },\n                                    children: \"Create Date: \"\n                                }, void 0, false, {\n                                    fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/components/url-card/index.tsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 13\n                                }, this),\n                                props.createDate\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/components/url-card/index.tsx\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    style: {\n                                        fontWeight: \"bold\"\n                                    },\n                                    children: \"Expired Date: \"\n                                }, void 0, false, {\n                                    fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/components/url-card/index.tsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 13\n                                }, this),\n                                props.expiredDate\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/components/url-card/index.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/components/url-card/index.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/components/url-card/index.tsx\",\n            lineNumber: 39,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/components/url-card/index.tsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, this);\n}\n_c = URLCard;\nvar _c;\n$RefreshReg$(_c, \"URLCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3VybC1jYXJkL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMEI7QUFTbkIsU0FBU0MsUUFBUUMsS0FBbUI7SUFDekMsTUFBTUMsYUFBYTtRQUNqQkMsTUFBTTtZQUNKQyxPQUFPO1lBQ1BDLFVBQVU7WUFDVkMsaUJBQWlCO1lBQ2pCQyxjQUFjO1lBQ2RDLFVBQVU7WUFDVkMsU0FBUztZQUNUQyxlQUFlO1lBQ2ZDLFlBQVk7UUFFZDtRQUNBQyxTQUFTO1lBQ1BDLFlBQVk7WUFDWkMsT0FBTztRQUNUO1FBQ0FDLE1BQU07WUFDSkYsWUFBWTtZQUNaRyxVQUFVO1FBQ1o7UUFDQUMsT0FBTztZQUNMQyxjQUFjO1lBQ2RGLFVBQVU7UUFDWjtJQUNGO0lBRUEscUJBQ0UsOERBQUNHO1FBQUlDLE9BQU9sQixXQUFXQyxJQUFJO2tCQUN6Qiw0RUFBQ2dCO1lBQUlDLE9BQU9sQixXQUFXVSxPQUFPOzs4QkFDNUIsOERBQUNTO29CQUFHRCxPQUFPbEIsV0FBV2UsS0FBSzs4QkFDekIsNEVBQUNLO3dCQUNDQyxNQUFNLDRCQUF3QyxPQUFadEIsTUFBTWdCLEtBQUs7d0JBQzdDTyxRQUFPO2tDQUNQLG9CQUFnQyxPQUFadkIsTUFBTWdCLEtBQUs7Ozs7Ozs7Ozs7OzhCQUVuQyw4REFBQ0U7b0JBQUlDLE9BQU9sQixXQUFXYSxJQUFJOztzQ0FDekIsOERBQUNVOzs4Q0FDQyw4REFBQ0M7b0NBQ0NOLE9BQU87d0NBQ0xPLFlBQVk7b0NBQ2Q7O3dDQUNEO3dDQUNlOzs7Ozs7O2dDQUNSOzhDQUNSLDhEQUFDTDtvQ0FBRUMsTUFBTXRCLE1BQU0yQixHQUFHO29DQUFFSixRQUFPOzhDQUN4QnZCLE1BQU0yQixHQUFHOzs7Ozs7Ozs7Ozs7c0NBR2QsOERBQUNIOztnQ0FDRTs4Q0FDRCw4REFBQ0M7b0NBQUtOLE9BQU87d0NBQUVPLFlBQVk7b0NBQU87OENBQUc7Ozs7OztnQ0FDcEMxQixNQUFNNEIsVUFBVTs7Ozs7OztzQ0FFbkIsOERBQUNKOztnQ0FDRTs4Q0FDRCw4REFBQ0M7b0NBQUtOLE9BQU87d0NBQUVPLFlBQVk7b0NBQU87OENBQUc7Ozs7OztnQ0FDcEMxQixNQUFNNkIsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTlCO0tBL0RnQjlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdXJsLWNhcmQvaW5kZXgudHN4PzkyOWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbnRlcmZhY2UgVVJMQ2FyZFByb3BzIHtcbiAgdXJsOiBzdHJpbmc7XG4gIHRva2VuOiBzdHJpbmc7XG4gIGNyZWF0ZURhdGU6IHN0cmluZztcbiAgZXhwaXJlZERhdGU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFVSTENhcmQocHJvcHM6IFVSTENhcmRQcm9wcykge1xuICBjb25zdCBjYXJkU3R5bGVzID0ge1xuICAgIGNhcmQ6IHtcbiAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgIG1heFdpZHRoOiBcIjUwMHB4XCIsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0RFRTRFN1wiLFxuICAgICAgYm9yZGVyUmFkaXVzOiBcIjE1cHhcIixcbiAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICAgICAgZGlzcGxheTogXCJ0YWJsZVwiLFxuICAgICAgcGFkZGluZ0JvdHRvbTogXCIxMHB4XCIsXG4gICAgICBwYWRkaW5nVG9wOiBcIjVweFwiLFxuICAgICAgLy9ib3hTaGFkb3c6IFwiNXB4IDVweCAjMjczMDQzXCIsXG4gICAgfSxcbiAgICBjb250ZW50OiB7XG4gICAgICBtYXJnaW5MZWZ0OiBcIjI1cHhcIixcbiAgICAgIGNvbG9yOiBcIiMyNzMwNDNcIixcbiAgICB9LFxuICAgIGRhdGE6IHtcbiAgICAgIG1hcmdpbkxlZnQ6IFwiMTBweFwiLFxuICAgICAgZm9udFNpemU6IFwiMTRweFwiLFxuICAgIH0sXG4gICAgdG9rZW46IHtcbiAgICAgIG1hcmdpbkJvdHRvbTogXCIwXCIsXG4gICAgICBmb250U2l6ZTogXCIxNnB4XCIsXG4gICAgfSxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e2NhcmRTdHlsZXMuY2FyZH0+XG4gICAgICA8ZGl2IHN0eWxlPXtjYXJkU3R5bGVzLmNvbnRlbnR9PlxuICAgICAgICA8aDIgc3R5bGU9e2NhcmRTdHlsZXMudG9rZW59PlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPXtgaHR0cHM6Ly90aW5lZS52ZXJjZWwuYXBwLyR7cHJvcHMudG9rZW59YH1cbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgPntgdGluZWUudmVyY2VsLmFwcC8ke3Byb3BzLnRva2VufWB9PC9hPlxuICAgICAgICA8L2gyPlxuICAgICAgICA8ZGl2IHN0eWxlPXtjYXJkU3R5bGVzLmRhdGF9PlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgT3JpZ2luYWwgVVJMOntcIiBcIn1cbiAgICAgICAgICAgIDwvc3Bhbj57XCIgXCJ9XG4gICAgICAgICAgICA8YSBocmVmPXtwcm9wcy51cmx9IHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICB7cHJvcHMudXJsfVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19PkNyZWF0ZSBEYXRlOiA8L3NwYW4+XG4gICAgICAgICAgICB7cHJvcHMuY3JlYXRlRGF0ZX1cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250V2VpZ2h0OiBcImJvbGRcIiB9fT5FeHBpcmVkIERhdGU6IDwvc3Bhbj5cbiAgICAgICAgICAgIHtwcm9wcy5leHBpcmVkRGF0ZX1cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJVUkxDYXJkIiwicHJvcHMiLCJjYXJkU3R5bGVzIiwiY2FyZCIsIndpZHRoIiwibWF4V2lkdGgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJvdmVyZmxvdyIsImRpc3BsYXkiLCJwYWRkaW5nQm90dG9tIiwicGFkZGluZ1RvcCIsImNvbnRlbnQiLCJtYXJnaW5MZWZ0IiwiY29sb3IiLCJkYXRhIiwiZm9udFNpemUiLCJ0b2tlbiIsIm1hcmdpbkJvdHRvbSIsImRpdiIsInN0eWxlIiwiaDIiLCJhIiwiaHJlZiIsInRhcmdldCIsInAiLCJzcGFuIiwiZm9udFdlaWdodCIsInVybCIsImNyZWF0ZURhdGUiLCJleHBpcmVkRGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/url-card/index.tsx\n"));

/***/ })

});