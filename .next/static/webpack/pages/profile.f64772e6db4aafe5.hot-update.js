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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst ProfilePage = ()=>{\n    _s();\n    const { status, ...session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)();\n    const handleSignOut = async ()=>{\n        await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.signOut)();\n        window.location.href = \"\".concat(\"http://localhost:3000\");\n    };\n    const getCreateDate = ()=>{\n        var _session_data_user, _session_data, _session;\n        const createDate = new Date((_session = session) === null || _session === void 0 ? void 0 : (_session_data = _session.data) === null || _session_data === void 0 ? void 0 : (_session_data_user = _session_data.user) === null || _session_data_user === void 0 ? void 0 : _session_data_user.email);\n        return \"\".concat(createDate.getFullYear(), \"/\").concat(createDate.getMonth(), \"/\").concat(createDate.getDay());\n    };\n    const getUsername = ()=>{\n        var _session_data_user, _session_data, _session;\n        return (_session = session) === null || _session === void 0 ? void 0 : (_session_data = _session.data) === null || _session_data === void 0 ? void 0 : (_session_data_user = _session_data.user) === null || _session_data_user === void 0 ? void 0 : _session_data_user.name;\n    };\n    console.log(\"Session from clientside: \", session);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"style\", {\n                    children: \"\\n          html,\\n          body {\\n            margin: 0;\\n            padding: 0;\\n          }\\n        \"\n                }, void 0, false, {\n                    fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/profile.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/profile.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    height: \"100vh\",\n                    fontFamily: \"Helvetica\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            flex: \"0 0 25%\",\n                            backgroundColor: \"#273043\",\n                            color: \"#fff\",\n                            padding: \"20px\",\n                            paddingLeft: \"40px\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: \"User Profile\"\n                            }, void 0, false, {\n                                fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/profile.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: \"Username \"\n                            }, void 0, false, {\n                                fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/profile.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                style: {\n                                    fontStyle: \"italic\"\n                                },\n                                children: [\n                                    \" \",\n                                    session.data.user.name\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/profile.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: \"Account Creation Date \"\n                            }, void 0, false, {\n                                fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/profile.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                style: {\n                                    fontStyle: \"italic\"\n                                },\n                                children: \" \"\n                            }, void 0, false, {\n                                fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/profile.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: \"Account Tier\"\n                            }, void 0, false, {\n                                fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/profile.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                style: {\n                                    fontStyle: \"italic\"\n                                },\n                                children: \"Free\"\n                            }, void 0, false, {\n                                fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/profile.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                style: {\n                                    marginTop: \"110%\"\n                                },\n                                children: [\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        onClick: handleSignOut,\n                                        style: {\n                                            textDecoration: \"none\",\n                                            fontSize: \"15px\",\n                                            borderRadius: \"15px\",\n                                            padding: \"10px\",\n                                            paddingLeft: \"25px\",\n                                            paddingRight: \"25px\",\n                                            border: \"2px solid #fff\",\n                                            backgroundColor: \"#fff\",\n                                            color: \"#273043\",\n                                            cursor: \"pointer\"\n                                        },\n                                        children: \"Logout\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/profile.tsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"/\",\n                                        style: {\n                                            textDecoration: \"none\",\n                                            fontSize: \"15px\",\n                                            borderRadius: \"15px\",\n                                            padding: \"10px\",\n                                            paddingLeft: \"25px\",\n                                            paddingRight: \"25px\",\n                                            border: \"2px solid #9bc7da\",\n                                            backgroundColor: \"#9bc7da\",\n                                            color: \"#273043\",\n                                            marginLeft: \"15px\",\n                                            cursor: \"pointer\"\n                                        },\n                                        children: \"Home\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/profile.tsx\",\n                                        lineNumber: 73,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/profile.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/profile.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            flex: 1,\n                            padding: \"20px\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/profile.tsx\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/profile.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(ProfilePage, \"V7FO+s1cSKTPUSw1MRcliMr3jQ8=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession\n    ];\n});\n_c = ProfilePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProfilePage);\nvar _c;\n$RefreshReg$(_c, \"ProfilePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS50c3g/ZGNlNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyB1c2VTZXNzaW9uLCBzaWduT3V0IH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xuXG5jb25zdCBQcm9maWxlUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgeyBzdGF0dXMsIC4uLnNlc3Npb24gfSA9IHVzZVNlc3Npb24oKTtcblxuICBjb25zdCBoYW5kbGVTaWduT3V0ID0gYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IHNpZ25PdXQoKTtcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0hPU1R9YDtcbiAgfTtcblxuICBjb25zdCBnZXRDcmVhdGVEYXRlID0gKCkgPT4ge1xuICAgIGNvbnN0IGNyZWF0ZURhdGUgPSBuZXcgRGF0ZShzZXNzaW9uPy5kYXRhPy51c2VyPy5lbWFpbCk7XG4gICAgcmV0dXJuIGAke2NyZWF0ZURhdGUuZ2V0RnVsbFllYXIoKX0vJHtjcmVhdGVEYXRlLmdldE1vbnRoKCl9LyR7Y3JlYXRlRGF0ZS5nZXREYXkoKX1gO1xuICB9O1xuXG4gIGNvbnN0IGdldFVzZXJuYW1lID0gKCkgPT4ge1xuICAgIHJldHVybiBzZXNzaW9uPy5kYXRhPy51c2VyPy5uYW1lO1xuICB9O1xuXG4gIGNvbnNvbGUubG9nKFwiU2Vzc2lvbiBmcm9tIGNsaWVudHNpZGU6IFwiLCBzZXNzaW9uKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxzdHlsZT57YFxuICAgICAgICAgIGh0bWwsXG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgaGVpZ2h0OiBcIjEwMHZoXCIsIGZvbnRGYW1pbHk6IFwiSGVsdmV0aWNhXCIgfX1cbiAgICAgID5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBmbGV4OiBcIjAgMCAyNSVcIixcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMjczMDQzXCIsXG4gICAgICAgICAgICBjb2xvcjogXCIjZmZmXCIsXG4gICAgICAgICAgICBwYWRkaW5nOiBcIjIwcHhcIixcbiAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiBcIjQwcHhcIixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGgxPlVzZXIgUHJvZmlsZTwvaDE+XG4gICAgICAgICAgPGgzPlVzZXJuYW1lIDwvaDM+XG4gICAgICAgICAgPHAgc3R5bGU9e3sgZm9udFN0eWxlOiBcIml0YWxpY1wiIH19PiB7c2Vzc2lvbi5kYXRhLnVzZXIubmFtZX08L3A+XG4gICAgICAgICAgPGgzPkFjY291bnQgQ3JlYXRpb24gRGF0ZSA8L2gzPlxuICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRTdHlsZTogXCJpdGFsaWNcIiB9fT4ge308L3A+XG4gICAgICAgICAgPGgzPkFjY291bnQgVGllcjwvaDM+XG4gICAgICAgICAgPHAgc3R5bGU9e3sgZm9udFN0eWxlOiBcIml0YWxpY1wiIH19PkZyZWU8L3A+XG5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogXCIxMTAlXCIgfX0+XG4gICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTaWduT3V0fVxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxNXB4XCIsXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjE1cHhcIixcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjEwcHhcIixcbiAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogXCIyNXB4XCIsXG4gICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiBcIjI1cHhcIixcbiAgICAgICAgICAgICAgICBib3JkZXI6IFwiMnB4IHNvbGlkICNmZmZcIixcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZlwiLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBcIiMyNzMwNDNcIixcbiAgICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBMb2dvdXRcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGhyZWY9XCIvXCJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTVweFwiLFxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIxNXB4XCIsXG4gICAgICAgICAgICAgICAgcGFkZGluZzogXCIxMHB4XCIsXG4gICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IFwiMjVweFwiLFxuICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogXCIyNXB4XCIsXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBcIjJweCBzb2xpZCAjOWJjN2RhXCIsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiM5YmM3ZGFcIixcbiAgICAgICAgICAgICAgICBjb2xvcjogXCIjMjczMDQzXCIsXG4gICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogXCIxNXB4XCIsXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgSG9tZVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBmbGV4OiAxLCBwYWRkaW5nOiBcIjIwcHhcIiB9fT5cbiAgICAgICAgICB7LyogUmlnaHQgcGFydCBjb250ZW50ICovfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZVBhZ2U7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJIZWFkIiwidXNlU2Vzc2lvbiIsInNpZ25PdXQiLCJQcm9maWxlUGFnZSIsInN0YXR1cyIsInNlc3Npb24iLCJoYW5kbGVTaWduT3V0Iiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0hPU1QiLCJnZXRDcmVhdGVEYXRlIiwiY3JlYXRlRGF0ZSIsIkRhdGUiLCJkYXRhIiwidXNlciIsImVtYWlsIiwiZ2V0RnVsbFllYXIiLCJnZXRNb250aCIsImdldERheSIsImdldFVzZXJuYW1lIiwibmFtZSIsImNvbnNvbGUiLCJsb2ciLCJzdHlsZSIsImRpdiIsImRpc3BsYXkiLCJoZWlnaHQiLCJmb250RmFtaWx5IiwiZmxleCIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwicGFkZGluZyIsInBhZGRpbmdMZWZ0IiwiaDEiLCJoMyIsInAiLCJmb250U3R5bGUiLCJtYXJnaW5Ub3AiLCJhIiwib25DbGljayIsInRleHREZWNvcmF0aW9uIiwiZm9udFNpemUiLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nUmlnaHQiLCJib3JkZXIiLCJjdXJzb3IiLCJtYXJnaW5MZWZ0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/profile.tsx\n"));

/***/ })

});