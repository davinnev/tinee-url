"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/auth/signin",{

/***/ "./pages/auth/signin.tsx":
/*!*******************************!*\
  !*** ./pages/auth/signin.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction SignIn() {\n    _s();\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const session = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    const handleSignIn = async (e)=>{\n        e.preventDefault();\n        const result = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signIn)(\"credentials\", {\n            username,\n            password,\n            redirect: false\n        });\n        console.log(\"Result: \", result);\n        if (!result.ok) {\n            // Sign-in failed\n            console.log(\"fAILED\");\n            console.error(result.error);\n        } else {\n            // Sign-in successful\n            // Redirect or handle success as needed\n            console.log(\"Login successful\");\n            console.log(session);\n            window.location.href = \"/\";\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            backgroundColor: \"#fff\",\n            padding: \"50px\",\n            height: \"100vh\",\n            fontFamily: \"font-family: Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    justifyContent: \"center\",\n                    marginTop: \"100px\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        backgroundColor: \"#273043\",\n                        borderRadius: \"10px\",\n                        boxShadow: \"0px 2px 6px rgba(0, 0, 0, 0.1)\",\n                        maxWidth: \"80%\",\n                        paddingLeft: \"50px\",\n                        paddingTop: \"30px\",\n                        paddingBottom: \"55px\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            style: {\n                                fontSize: \"24px\",\n                                marginBottom: \"30px\",\n                                color: \"#fff\",\n                                fontFamily: \"Helvetica\",\n                                maxWidth: \"80%\"\n                            },\n                            children: \"Login\"\n                        }, void 0, false, {\n                            fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/auth/signin.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            onSubmit: handleSignIn,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    required: true,\n                                    style: {\n                                        height: \"40px\",\n                                        fontSize: \"16px\",\n                                        marginBottom: \"30px\",\n                                        paddingLeft: \"15px\",\n                                        backgroundColor: \"#fff\",\n                                        color: \"#273043\",\n                                        borderRadius: \"15px\",\n                                        borderColor: \"#fff\",\n                                        width: \"80%\"\n                                    },\n                                    type: \"username\",\n                                    placeholder: \"Username\",\n                                    value: username,\n                                    onChange: (e)=>setUsername(e.target.value)\n                                }, void 0, false, {\n                                    fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/auth/signin.tsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    required: true,\n                                    style: {\n                                        width: \"80%\",\n                                        height: \"40px\",\n                                        fontSize: \"16px\",\n                                        marginBottom: \"30px\",\n                                        paddingLeft: \"15px\",\n                                        backgroundColor: \"#fff\",\n                                        color: \"#273043\",\n                                        borderRadius: \"15px\",\n                                        borderColor: \"#fff\"\n                                    },\n                                    type: \"password\",\n                                    placeholder: \"Password\",\n                                    value: password,\n                                    onChange: (e)=>setPassword(e.target.value)\n                                }, void 0, false, {\n                                    fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/auth/signin.tsx\",\n                                    lineNumber: 90,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    style: {\n                                        backgroundColor: \"#fff\",\n                                        color: \"#273043\",\n                                        borderRadius: \"15px\",\n                                        textDecoration: \"none\",\n                                        height: \"40px\",\n                                        width: \"30%\",\n                                        textAlign: \"center\",\n                                        verticalAlign: \"center\",\n                                        fontSize: \"15px\",\n                                        cursor: \"pointer\",\n                                        borderColor: \"#fff\"\n                                    },\n                                    type: \"submit\",\n                                    children: \"Login\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/auth/signin.tsx\",\n                                    lineNumber: 108,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/auth/signin.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/auth/signin.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/auth/signin.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    textAlign: \"center\",\n                    marginTop: \"20px\",\n                    fontFamily: \"Helvetica\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        style: {\n                            fontSize: \"14px\",\n                            color: \"#273043\"\n                        },\n                        children: [\n                            \"Don't have an account?\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"/auth/signup\",\n                                style: {\n                                    color: \"#273043\"\n                                },\n                                children: \"Sign up\"\n                            }, void 0, false, {\n                                fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/auth/signin.tsx\",\n                                lineNumber: 143,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/auth/signin.tsx\",\n                        lineNumber: 136,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        style: {\n                            fontSize: \"14px\",\n                            color: \"#273043\"\n                        },\n                        children: [\n                            \"Stay guest mode and return\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"/\",\n                                style: {\n                                    color: \"#273043\"\n                                },\n                                children: \"home\"\n                            }, void 0, false, {\n                                fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/auth/signin.tsx\",\n                                lineNumber: 154,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/auth/signin.tsx\",\n                        lineNumber: 147,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/auth/signin.tsx\",\n                lineNumber: 129,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/auth/signin.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n}\n_s(SignIn, \"0qJlumhN6PgPN9RgLrujvFpKgfc=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession\n    ];\n});\n_c = SignIn;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignIn);\nvar _c;\n$RefreshReg$(_c, \"SignIn\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU87NEJBQ0xlLFVBQVU7NEJBQ1ZFLE9BQU87d0JBQ1Q7OzRCQUNEOzRCQUN3QjswQ0FDdkIsOERBQUNrQjtnQ0FBRXJDLE1BQUs7Z0NBQWVFLE9BQU87b0NBQUVpQixPQUFPO2dDQUFVOzBDQUFHOzs7Ozs7Ozs7Ozs7a0NBSXRELDhEQUFDaUI7d0JBQ0NsQyxPQUFPOzRCQUNMZSxVQUFVOzRCQUNWRSxPQUFPO3dCQUNUOzs0QkFDRDs0QkFDNEI7MENBQzNCLDhEQUFDa0I7Z0NBQUVyQyxNQUFLO2dDQUFJRSxPQUFPO29DQUFFaUIsT0FBTztnQ0FBVTswQ0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT25EO0dBNUpTcEM7O1FBR1NELHVEQUFVQTs7O0tBSG5CQztBQThKVCwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hdXRoL3NpZ25pbi50c3g/ZTc2NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb3JtRXZlbnRIYW5kbGVyLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgc2lnbkluLCB1c2VTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xuaW1wb3J0IGxvZ28gZnJvbSBcIi4uLy4uL3B1YmxpYy90aW5lZS1sb2dvLnBuZ1wiO1xuXG5mdW5jdGlvbiBTaWduSW4oKSB7XG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IHNlc3Npb24gPSB1c2VTZXNzaW9uKCk7XG5cbiAgY29uc3QgaGFuZGxlU2lnbkluOiBGb3JtRXZlbnRIYW5kbGVyPEhUTUxGb3JtRWxlbWVudD4gPSBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHNpZ25JbihcImNyZWRlbnRpYWxzXCIsIHtcbiAgICAgIHVzZXJuYW1lLFxuICAgICAgcGFzc3dvcmQsXG4gICAgICByZWRpcmVjdDogZmFsc2UsXG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coXCJSZXN1bHQ6IFwiLCByZXN1bHQpO1xuICAgIGlmICghcmVzdWx0Lm9rKSB7XG4gICAgICAvLyBTaWduLWluIGZhaWxlZFxuICAgICAgY29uc29sZS5sb2coXCJmQUlMRURcIik7XG4gICAgICBjb25zb2xlLmVycm9yKHJlc3VsdC5lcnJvcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFNpZ24taW4gc3VjY2Vzc2Z1bFxuICAgICAgLy8gUmVkaXJlY3Qgb3IgaGFuZGxlIHN1Y2Nlc3MgYXMgbmVlZGVkXG4gICAgICBjb25zb2xlLmxvZyhcIkxvZ2luIHN1Y2Nlc3NmdWxcIik7XG4gICAgICBjb25zb2xlLmxvZyhzZXNzaW9uKTtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvXCI7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZmZcIixcbiAgICAgICAgcGFkZGluZzogXCI1MHB4XCIsXG4gICAgICAgIGhlaWdodDogXCIxMDB2aFwiLFxuICAgICAgICBmb250RmFtaWx5OlxuICAgICAgICAgIFwiZm9udC1mYW1pbHk6IEludGVyLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIEZpcmEgU2FucywgRHJvaWQgU2FucywgSGVsdmV0aWNhIE5ldWUsIHNhbnMtc2VyaWZcIixcbiAgICAgIH19XG4gICAgPlxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgIG1hcmdpblRvcDogXCIxMDBweFwiLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMjczMDQzXCIsXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMTBweFwiLFxuICAgICAgICAgICAgYm94U2hhZG93OiBcIjBweCAycHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKVwiLFxuICAgICAgICAgICAgbWF4V2lkdGg6IFwiODAlXCIsXG4gICAgICAgICAgICBwYWRkaW5nTGVmdDogXCI1MHB4XCIsXG4gICAgICAgICAgICBwYWRkaW5nVG9wOiBcIjMwcHhcIixcbiAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IFwiNTVweFwiLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8aDJcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGZvbnRTaXplOiBcIjI0cHhcIixcbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjMwcHhcIixcbiAgICAgICAgICAgICAgY29sb3I6IFwiI2ZmZlwiLFxuICAgICAgICAgICAgICBmb250RmFtaWx5OiBcIkhlbHZldGljYVwiLFxuICAgICAgICAgICAgICBtYXhXaWR0aDogXCI4MCVcIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgTG9naW5cbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTaWduSW59PlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjQwcHhcIixcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxNnB4XCIsXG4gICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjMwcHhcIixcbiAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogXCIxNXB4XCIsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZmZcIixcbiAgICAgICAgICAgICAgICBjb2xvcjogXCIjMjczMDQzXCIsXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjE1cHhcIixcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogXCIjZmZmXCIsXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiODAlXCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIHR5cGU9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIlxuICAgICAgICAgICAgICB2YWx1ZT17dXNlcm5hbWV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjgwJVwiLFxuICAgICAgICAgICAgICAgIGhlaWdodDogXCI0MHB4XCIsXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTZweFwiLFxuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIzMHB4XCIsXG4gICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IFwiMTVweFwiLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmZmXCIsXG4gICAgICAgICAgICAgICAgY29sb3I6IFwiIzI3MzA0M1wiLFxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIxNXB4XCIsXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwiI2ZmZlwiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZmZcIixcbiAgICAgICAgICAgICAgICBjb2xvcjogXCIjMjczMDQzXCIsXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjE1cHhcIixcbiAgICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjQwcHhcIixcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIzMCVcIixcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxNXB4XCIsXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogXCIjZmZmXCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBMb2dpblxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICBtYXJnaW5Ub3A6IFwiMjBweFwiLFxuICAgICAgICAgIGZvbnRGYW1pbHk6IFwiSGVsdmV0aWNhXCIsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxwXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGZvbnRTaXplOiBcIjE0cHhcIixcbiAgICAgICAgICAgIGNvbG9yOiBcIiMyNzMwNDNcIixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgRG9uJ3QgaGF2ZSBhbiBhY2NvdW50P3tcIiBcIn1cbiAgICAgICAgICA8YSBocmVmPVwiL2F1dGgvc2lnbnVwXCIgc3R5bGU9e3sgY29sb3I6IFwiIzI3MzA0M1wiIH19PlxuICAgICAgICAgICAgU2lnbiB1cFxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cFxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBmb250U2l6ZTogXCIxNHB4XCIsXG4gICAgICAgICAgICBjb2xvcjogXCIjMjczMDQzXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIFN0YXkgZ3Vlc3QgbW9kZSBhbmQgcmV0dXJue1wiIFwifVxuICAgICAgICAgIDxhIGhyZWY9XCIvXCIgc3R5bGU9e3sgY29sb3I6IFwiIzI3MzA0M1wiIH19PlxuICAgICAgICAgICAgaG9tZVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpZ25JbjtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInNpZ25JbiIsInVzZVNlc3Npb24iLCJTaWduSW4iLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsInNlc3Npb24iLCJoYW5kbGVTaWduSW4iLCJlIiwicHJldmVudERlZmF1bHQiLCJyZXN1bHQiLCJyZWRpcmVjdCIsImNvbnNvbGUiLCJsb2ciLCJvayIsImVycm9yIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiZGl2Iiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWRkaW5nIiwiaGVpZ2h0IiwiZm9udEZhbWlseSIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsIm1hcmdpblRvcCIsImJvcmRlclJhZGl1cyIsImJveFNoYWRvdyIsIm1heFdpZHRoIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsImgyIiwiZm9udFNpemUiLCJtYXJnaW5Cb3R0b20iLCJjb2xvciIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwicmVxdWlyZWQiLCJib3JkZXJDb2xvciIsIndpZHRoIiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsImJ1dHRvbiIsInRleHREZWNvcmF0aW9uIiwidGV4dEFsaWduIiwidmVydGljYWxBbGlnbiIsImN1cnNvciIsInAiLCJhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/auth/signin.tsx\n"));

/***/ })

});