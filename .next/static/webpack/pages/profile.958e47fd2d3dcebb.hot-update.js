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

/***/ "./pages/profile.tsx":
/*!***************************!*\
  !*** ./pages/profile.tsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst ProfilePage = ()=>{\n    _s();\n    const { status, ...session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{}, [\n        session.data\n    ]);\n    const handleSignOut = async ()=>{\n        await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.signOut)();\n        window.location.href = \"\".concat(\"http://localhost:3000\");\n    };\n    const getCreateDate = ()=>{\n        var _session_data_user, _session_data, _session;\n        const createDate = new Date((_session = session) === null || _session === void 0 ? void 0 : (_session_data = _session.data) === null || _session_data === void 0 ? void 0 : (_session_data_user = _session_data.user) === null || _session_data_user === void 0 ? void 0 : _session_data_user.email);\n        return \"\".concat(createDate.getFullYear(), \"/\").concat(createDate.getMonth(), \"/\").concat(createDate.getDay());\n    };\n    const getUsername = ()=>{\n        var _session_data_user, _session_data, _session;\n        return (_session = session) === null || _session === void 0 ? void 0 : (_session_data = _session.data) === null || _session_data === void 0 ? void 0 : (_session_data_user = _session_data.user) === null || _session_data_user === void 0 ? void 0 : _session_data_user.name;\n    };\n    console.log(\"Session from clientside: \", session);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"style\", {\n                    children: \"\\n          html,\\n          body {\\n            margin: 0;\\n            padding: 0;\\n          }\\n        \"\n                }, void 0, false, {\n                    fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/profile.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/profile.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    height: \"100vh\",\n                    fontFamily: \"Helvetica\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            flex: \"0 0 25%\",\n                            backgroundColor: \"#273043\",\n                            color: \"#fff\",\n                            padding: \"20px\",\n                            paddingLeft: \"40px\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: \"User Profile\"\n                            }, void 0, false, {\n                                fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/profile.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: \"Username \"\n                            }, void 0, false, {\n                                fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/profile.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                style: {\n                                    fontStyle: \"italic\"\n                                },\n                                children: \" \"\n                            }, void 0, false, {\n                                fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/profile.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: \"Account Creation Date \"\n                            }, void 0, false, {\n                                fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/profile.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                style: {\n                                    fontStyle: \"italic\"\n                                },\n                                children: \" \"\n                            }, void 0, false, {\n                                fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/profile.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: \"Account Tier\"\n                            }, void 0, false, {\n                                fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/profile.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                style: {\n                                    fontStyle: \"italic\"\n                                },\n                                children: \"Free\"\n                            }, void 0, false, {\n                                fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/profile.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                style: {\n                                    marginTop: \"110%\"\n                                },\n                                children: [\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        onClick: handleSignOut,\n                                        style: {\n                                            textDecoration: \"none\",\n                                            fontSize: \"15px\",\n                                            borderRadius: \"15px\",\n                                            padding: \"10px\",\n                                            paddingLeft: \"25px\",\n                                            paddingRight: \"25px\",\n                                            border: \"2px solid #fff\",\n                                            backgroundColor: \"#fff\",\n                                            color: \"#273043\",\n                                            cursor: \"pointer\"\n                                        },\n                                        children: \"Logout\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/profile.tsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"/\",\n                                        style: {\n                                            textDecoration: \"none\",\n                                            fontSize: \"15px\",\n                                            borderRadius: \"15px\",\n                                            padding: \"10px\",\n                                            paddingLeft: \"25px\",\n                                            paddingRight: \"25px\",\n                                            border: \"2px solid #9bc7da\",\n                                            backgroundColor: \"#9bc7da\",\n                                            color: \"#273043\",\n                                            marginLeft: \"15px\",\n                                            cursor: \"pointer\"\n                                        },\n                                        children: \"Home\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/profile.tsx\",\n                                        lineNumber: 74,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/profile.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/profile.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            flex: 1,\n                            padding: \"20px\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/profile.tsx\",\n                        lineNumber: 94,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/profile.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(ProfilePage, \"0V0lnI0Uk3odyAJG0AGgxcpGhvg=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession\n    ];\n});\n_c = ProfilePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProfilePage);\nvar _c;\n$RefreshReg$(_c, \"ProfilePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wcm9maWxlLnRzeD9kY2U1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IHVzZVNlc3Npb24sIHNpZ25PdXQgfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XG5cbmNvbnN0IFByb2ZpbGVQYWdlID0gKCkgPT4ge1xuICBjb25zdCB7IHN0YXR1cywgLi4uc2Vzc2lvbiB9ID0gdXNlU2Vzc2lvbigpO1xuICB1c2VFZmZlY3QoKCkgPT4ge30sIFtzZXNzaW9uLmRhdGFdKTtcblxuICBjb25zdCBoYW5kbGVTaWduT3V0ID0gYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IHNpZ25PdXQoKTtcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0hPU1R9YDtcbiAgfTtcblxuICBjb25zdCBnZXRDcmVhdGVEYXRlID0gKCkgPT4ge1xuICAgIGNvbnN0IGNyZWF0ZURhdGUgPSBuZXcgRGF0ZShzZXNzaW9uPy5kYXRhPy51c2VyPy5lbWFpbCk7XG4gICAgcmV0dXJuIGAke2NyZWF0ZURhdGUuZ2V0RnVsbFllYXIoKX0vJHtjcmVhdGVEYXRlLmdldE1vbnRoKCl9LyR7Y3JlYXRlRGF0ZS5nZXREYXkoKX1gO1xuICB9O1xuXG4gIGNvbnN0IGdldFVzZXJuYW1lID0gKCkgPT4ge1xuICAgIHJldHVybiBzZXNzaW9uPy5kYXRhPy51c2VyPy5uYW1lO1xuICB9O1xuXG4gIGNvbnNvbGUubG9nKFwiU2Vzc2lvbiBmcm9tIGNsaWVudHNpZGU6IFwiLCBzZXNzaW9uKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxzdHlsZT57YFxuICAgICAgICAgIGh0bWwsXG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgaGVpZ2h0OiBcIjEwMHZoXCIsIGZvbnRGYW1pbHk6IFwiSGVsdmV0aWNhXCIgfX1cbiAgICAgID5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBmbGV4OiBcIjAgMCAyNSVcIixcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMjczMDQzXCIsXG4gICAgICAgICAgICBjb2xvcjogXCIjZmZmXCIsXG4gICAgICAgICAgICBwYWRkaW5nOiBcIjIwcHhcIixcbiAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiBcIjQwcHhcIixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGgxPlVzZXIgUHJvZmlsZTwvaDE+XG4gICAgICAgICAgPGgzPlVzZXJuYW1lIDwvaDM+XG4gICAgICAgICAgPHAgc3R5bGU9e3sgZm9udFN0eWxlOiBcIml0YWxpY1wiIH19PiB7fTwvcD5cbiAgICAgICAgICA8aDM+QWNjb3VudCBDcmVhdGlvbiBEYXRlIDwvaDM+XG4gICAgICAgICAgPHAgc3R5bGU9e3sgZm9udFN0eWxlOiBcIml0YWxpY1wiIH19PiB7fTwvcD5cbiAgICAgICAgICA8aDM+QWNjb3VudCBUaWVyPC9oMz5cbiAgICAgICAgICA8cCBzdHlsZT17eyBmb250U3R5bGU6IFwiaXRhbGljXCIgfX0+RnJlZTwvcD5cblxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjExMCVcIiB9fT5cbiAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNpZ25PdXR9XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE1cHhcIixcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMTVweFwiLFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMTBweFwiLFxuICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiBcIjI1cHhcIixcbiAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IFwiMjVweFwiLFxuICAgICAgICAgICAgICAgIGJvcmRlcjogXCIycHggc29saWQgI2ZmZlwiLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmZmXCIsXG4gICAgICAgICAgICAgICAgY29sb3I6IFwiIzI3MzA0M1wiLFxuICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIExvZ291dFxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgaHJlZj1cIi9cIlxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxNXB4XCIsXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjE1cHhcIixcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjEwcHhcIixcbiAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogXCIyNXB4XCIsXG4gICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiBcIjI1cHhcIixcbiAgICAgICAgICAgICAgICBib3JkZXI6IFwiMnB4IHNvbGlkICM5YmM3ZGFcIixcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzliYzdkYVwiLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBcIiMyNzMwNDNcIixcbiAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIjE1cHhcIixcbiAgICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBIb21lXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsZXg6IDEsIHBhZGRpbmc6IFwiMjBweFwiIH19PlxuICAgICAgICAgIHsvKiBSaWdodCBwYXJ0IGNvbnRlbnQgKi99XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlUGFnZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsIkhlYWQiLCJ1c2VTZXNzaW9uIiwic2lnbk91dCIsIlByb2ZpbGVQYWdlIiwic3RhdHVzIiwic2Vzc2lvbiIsImRhdGEiLCJoYW5kbGVTaWduT3V0Iiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0hPU1QiLCJnZXRDcmVhdGVEYXRlIiwiY3JlYXRlRGF0ZSIsIkRhdGUiLCJ1c2VyIiwiZW1haWwiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiZ2V0RGF5IiwiZ2V0VXNlcm5hbWUiLCJuYW1lIiwiY29uc29sZSIsImxvZyIsInN0eWxlIiwiZGl2IiwiZGlzcGxheSIsImhlaWdodCIsImZvbnRGYW1pbHkiLCJmbGV4IiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJwYWRkaW5nIiwicGFkZGluZ0xlZnQiLCJoMSIsImgzIiwicCIsImZvbnRTdHlsZSIsIm1hcmdpblRvcCIsImEiLCJvbkNsaWNrIiwidGV4dERlY29yYXRpb24iLCJmb250U2l6ZSIsImJvcmRlclJhZGl1cyIsInBhZGRpbmdSaWdodCIsImJvcmRlciIsImN1cnNvciIsIm1hcmdpbkxlZnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/profile.tsx\n"));

/***/ })

});