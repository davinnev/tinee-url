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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   URLCard: function() { return /* binding */ URLCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction URLCard(props) {\n    const cardStyles = {\n        card: {\n            width: \"100%\",\n            maxWidth: \"1060px\",\n            backgroundColor: \"#DEE4E7\",\n            borderRadius: \"15px\",\n            overflow: \"hidden\",\n            display: \"table\",\n            paddingBottom: \"10px\",\n            paddingTop: \"5px\"\n        },\n        content: {\n            marginLeft: \"25px\",\n            color: \"#273043\"\n        },\n        data: {\n            marginRight: \"10px\",\n            marginLeft: \"10px\",\n            fontSize: \"14px\",\n            maxWidth: \"1000px\"\n        },\n        token: {\n            marginBottom: \"0\",\n            fontSize: \"16px\"\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: cardStyles.card,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: cardStyles.content,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    style: cardStyles.token,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"https://tinee.vercel.app/\".concat(props.token),\n                        target: \"_blank\",\n                        children: \"tinee.vercel.app/\".concat(props.token)\n                    }, void 0, false, {\n                        fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/components/url-card/index.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/components/url-card/index.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: cardStyles.data,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    style: {\n                                        fontWeight: \"bold\"\n                                    },\n                                    children: [\n                                        \"Original URL:\",\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/components/url-card/index.tsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 13\n                                }, this),\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: props.url,\n                                    target: \"_blank\",\n                                    style: {\n                                        marginRight: \"10px\"\n                                    },\n                                    children: props.url\n                                }, void 0, false, {\n                                    fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/components/url-card/index.tsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/components/url-card/index.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    style: {\n                                        fontWeight: \"bold\"\n                                    },\n                                    children: \"Create Date: \"\n                                }, void 0, false, {\n                                    fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/components/url-card/index.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 13\n                                }, this),\n                                props.createDate\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/components/url-card/index.tsx\",\n                            lineNumber: 61,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    style: {\n                                        fontWeight: \"bold\"\n                                    },\n                                    children: \"Expired Date: \"\n                                }, void 0, false, {\n                                    fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/components/url-card/index.tsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 13\n                                }, this),\n                                props.expiredDate\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/components/url-card/index.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/components/url-card/index.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/components/url-card/index.tsx\",\n            lineNumber: 41,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/components/url-card/index.tsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, this);\n}\n_c = URLCard;\nvar _c;\n$RefreshReg$(_c, \"URLCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3VybC1jYXJkL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMEI7QUFTbkIsU0FBU0MsUUFBUUMsS0FBbUI7SUFDekMsTUFBTUMsYUFBYTtRQUNqQkMsTUFBTTtZQUNKQyxPQUFPO1lBQ1BDLFVBQVU7WUFDVkMsaUJBQWlCO1lBQ2pCQyxjQUFjO1lBQ2RDLFVBQVU7WUFDVkMsU0FBUztZQUNUQyxlQUFlO1lBQ2ZDLFlBQVk7UUFFZDtRQUNBQyxTQUFTO1lBQ1BDLFlBQVk7WUFDWkMsT0FBTztRQUNUO1FBQ0FDLE1BQU07WUFDSkMsYUFBYTtZQUNiSCxZQUFZO1lBQ1pJLFVBQVU7WUFDVlosVUFBVTtRQUNaO1FBQ0FhLE9BQU87WUFDTEMsY0FBYztZQUNkRixVQUFVO1FBQ1o7SUFDRjtJQUVBLHFCQUNFLDhEQUFDRztRQUFJQyxPQUFPbkIsV0FBV0MsSUFBSTtrQkFDekIsNEVBQUNpQjtZQUFJQyxPQUFPbkIsV0FBV1UsT0FBTzs7OEJBQzVCLDhEQUFDVTtvQkFBR0QsT0FBT25CLFdBQVdnQixLQUFLOzhCQUN6Qiw0RUFBQ0s7d0JBQ0NDLE1BQU0sNEJBQXdDLE9BQVp2QixNQUFNaUIsS0FBSzt3QkFDN0NPLFFBQU87a0NBQ1Asb0JBQWdDLE9BQVp4QixNQUFNaUIsS0FBSzs7Ozs7Ozs7Ozs7OEJBRW5DLDhEQUFDRTtvQkFBSUMsT0FBT25CLFdBQVdhLElBQUk7O3NDQUN6Qiw4REFBQ1c7OzhDQUNDLDhEQUFDQztvQ0FDQ04sT0FBTzt3Q0FDTE8sWUFBWTtvQ0FDZDs7d0NBQ0Q7d0NBQ2U7Ozs7Ozs7Z0NBQ1I7OENBQ1IsOERBQUNMO29DQUFFQyxNQUFNdkIsTUFBTTRCLEdBQUc7b0NBQUVKLFFBQU87b0NBQVNKLE9BQU87d0NBQUVMLGFBQWE7b0NBQU87OENBQzlEZixNQUFNNEIsR0FBRzs7Ozs7Ozs7Ozs7O3NDQUdkLDhEQUFDSDs7Z0NBQ0U7OENBQ0QsOERBQUNDO29DQUFLTixPQUFPO3dDQUFFTyxZQUFZO29DQUFPOzhDQUFHOzs7Ozs7Z0NBQ3BDM0IsTUFBTTZCLFVBQVU7Ozs7Ozs7c0NBRW5CLDhEQUFDSjs7Z0NBQ0U7OENBQ0QsOERBQUNDO29DQUFLTixPQUFPO3dDQUFFTyxZQUFZO29DQUFPOzhDQUFHOzs7Ozs7Z0NBQ3BDM0IsTUFBTThCLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU05QjtLQWpFZ0IvQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3VybC1jYXJkL2luZGV4LnRzeD85MjlmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW50ZXJmYWNlIFVSTENhcmRQcm9wcyB7XG4gIHVybDogc3RyaW5nO1xuICB0b2tlbjogc3RyaW5nO1xuICBjcmVhdGVEYXRlOiBzdHJpbmc7XG4gIGV4cGlyZWREYXRlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBVUkxDYXJkKHByb3BzOiBVUkxDYXJkUHJvcHMpIHtcbiAgY29uc3QgY2FyZFN0eWxlcyA9IHtcbiAgICBjYXJkOiB7XG4gICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICBtYXhXaWR0aDogXCIxMDYwcHhcIixcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjREVFNEU3XCIsXG4gICAgICBib3JkZXJSYWRpdXM6IFwiMTVweFwiLFxuICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gICAgICBkaXNwbGF5OiBcInRhYmxlXCIsXG4gICAgICBwYWRkaW5nQm90dG9tOiBcIjEwcHhcIixcbiAgICAgIHBhZGRpbmdUb3A6IFwiNXB4XCIsXG4gICAgICAvL2JveFNoYWRvdzogXCI1cHggNXB4ICMyNzMwNDNcIixcbiAgICB9LFxuICAgIGNvbnRlbnQ6IHtcbiAgICAgIG1hcmdpbkxlZnQ6IFwiMjVweFwiLFxuICAgICAgY29sb3I6IFwiIzI3MzA0M1wiLFxuICAgIH0sXG4gICAgZGF0YToge1xuICAgICAgbWFyZ2luUmlnaHQ6IFwiMTBweFwiLFxuICAgICAgbWFyZ2luTGVmdDogXCIxMHB4XCIsXG4gICAgICBmb250U2l6ZTogXCIxNHB4XCIsXG4gICAgICBtYXhXaWR0aDogXCIxMDAwcHhcIixcbiAgICB9LFxuICAgIHRva2VuOiB7XG4gICAgICBtYXJnaW5Cb3R0b206IFwiMFwiLFxuICAgICAgZm9udFNpemU6IFwiMTZweFwiLFxuICAgIH0sXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXtjYXJkU3R5bGVzLmNhcmR9PlxuICAgICAgPGRpdiBzdHlsZT17Y2FyZFN0eWxlcy5jb250ZW50fT5cbiAgICAgICAgPGgyIHN0eWxlPXtjYXJkU3R5bGVzLnRva2VufT5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj17YGh0dHBzOi8vdGluZWUudmVyY2VsLmFwcC8ke3Byb3BzLnRva2VufWB9XG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgID57YHRpbmVlLnZlcmNlbC5hcHAvJHtwcm9wcy50b2tlbn1gfTwvYT5cbiAgICAgICAgPC9oMj5cbiAgICAgICAgPGRpdiBzdHlsZT17Y2FyZFN0eWxlcy5kYXRhfT5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIE9yaWdpbmFsIFVSTDp7XCIgXCJ9XG4gICAgICAgICAgICA8L3NwYW4+e1wiIFwifVxuICAgICAgICAgICAgPGEgaHJlZj17cHJvcHMudXJsfSB0YXJnZXQ9XCJfYmxhbmtcIiBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIxMHB4XCIgfX0+XG4gICAgICAgICAgICAgIHtwcm9wcy51cmx9XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFdlaWdodDogXCJib2xkXCIgfX0+Q3JlYXRlIERhdGU6IDwvc3Bhbj5cbiAgICAgICAgICAgIHtwcm9wcy5jcmVhdGVEYXRlfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19PkV4cGlyZWQgRGF0ZTogPC9zcGFuPlxuICAgICAgICAgICAge3Byb3BzLmV4cGlyZWREYXRlfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlVSTENhcmQiLCJwcm9wcyIsImNhcmRTdHlsZXMiLCJjYXJkIiwid2lkdGgiLCJtYXhXaWR0aCIsImJhY2tncm91bmRDb2xvciIsImJvcmRlclJhZGl1cyIsIm92ZXJmbG93IiwiZGlzcGxheSIsInBhZGRpbmdCb3R0b20iLCJwYWRkaW5nVG9wIiwiY29udGVudCIsIm1hcmdpbkxlZnQiLCJjb2xvciIsImRhdGEiLCJtYXJnaW5SaWdodCIsImZvbnRTaXplIiwidG9rZW4iLCJtYXJnaW5Cb3R0b20iLCJkaXYiLCJzdHlsZSIsImgyIiwiYSIsImhyZWYiLCJ0YXJnZXQiLCJwIiwic3BhbiIsImZvbnRXZWlnaHQiLCJ1cmwiLCJjcmVhdGVEYXRlIiwiZXhwaXJlZERhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/url-card/index.tsx\n"));

/***/ })

});