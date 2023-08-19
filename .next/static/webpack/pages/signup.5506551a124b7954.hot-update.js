"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/signup",{

/***/ "./pages/signup.tsx":
/*!**************************!*\
  !*** ./pages/signup.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction SignUp() {\n    _s();\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSignUp = async (e)=>{\n        e.preventDefault();\n        // Perform any client-side validation here\n        // Create a new user with the provided username and password\n        try {\n            const response = await fetch(\"\".concat(\"http://localhost:3000\", \"/api/signin\"), {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    username: username,\n                    password: password,\n                    type: \"SignUp\"\n                })\n            });\n            console.log(response);\n            if (response.status === 200) {\n                // User registration successful\n                // Redirect or show a success message\n                console.log(\"SignUp successful\");\n                window.location.href = \"/auth/signin\";\n            } else {\n                console.log(\"Signup not successful\");\n            }\n        } catch (error) {\n        // Handle any network or server errors\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            backgroundColor: \"#fff\",\n            padding: \"50px\",\n            height: \"100vh\",\n            fontFamily: \"font-family: Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    justifyContent: \"center\",\n                    marginTop: \"100px\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        backgroundColor: \"#273043\",\n                        borderRadius: \"10px\",\n                        boxShadow: \"0px 2px 6px rgba(0, 0, 0, 0.1)\",\n                        maxWidth: \"80%\",\n                        paddingLeft: \"50px\",\n                        paddingTop: \"30px\",\n                        paddingBottom: \"55px\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            style: {\n                                fontSize: \"24px\",\n                                marginBottom: \"30px\",\n                                color: \"#fff\",\n                                fontFamily: \"Helvetica\",\n                                maxWidth: \"80%\"\n                            },\n                            children: \"Sign Up\"\n                        }, void 0, false, {\n                            fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/signup.tsx\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            onSubmit: handleSignUp,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    required: true,\n                                    style: {\n                                        height: \"40px\",\n                                        fontSize: \"16px\",\n                                        marginBottom: \"30px\",\n                                        paddingLeft: \"15px\",\n                                        backgroundColor: \"#fff\",\n                                        color: \"#273043\",\n                                        borderRadius: \"15px\",\n                                        borderColor: \"#fff\",\n                                        width: \"80%\"\n                                    },\n                                    type: \"username\",\n                                    placeholder: \"Username\",\n                                    value: username,\n                                    onChange: (e)=>setUsername(e.target.value)\n                                }, void 0, false, {\n                                    fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/signup.tsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    required: true,\n                                    style: {\n                                        width: \"80%\",\n                                        height: \"40px\",\n                                        fontSize: \"16px\",\n                                        marginBottom: \"30px\",\n                                        paddingLeft: \"15px\",\n                                        backgroundColor: \"#fff\",\n                                        color: \"#273043\",\n                                        borderRadius: \"15px\",\n                                        borderColor: \"#fff\"\n                                    },\n                                    type: \"password\",\n                                    placeholder: \"Password\",\n                                    value: password,\n                                    onChange: (e)=>setPassword(e.target.value)\n                                }, void 0, false, {\n                                    fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/signup.tsx\",\n                                    lineNumber: 100,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    style: {\n                                        backgroundColor: \"#fff\",\n                                        color: \"#273043\",\n                                        borderRadius: \"15px\",\n                                        textDecoration: \"none\",\n                                        height: \"40px\",\n                                        width: \"30%\",\n                                        textAlign: \"center\",\n                                        verticalAlign: \"center\",\n                                        fontSize: \"15px\",\n                                        cursor: \"pointer\",\n                                        borderColor: \"#fff\"\n                                    },\n                                    type: \"submit\",\n                                    children: \"Sign Up\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/signup.tsx\",\n                                    lineNumber: 118,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/signup.tsx\",\n                            lineNumber: 81,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/signup.tsx\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/signup.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    textAlign: \"center\",\n                    marginTop: \"20px\",\n                    fontFamily: \"Helvetica\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        style: {\n                            fontSize: \"14px\",\n                            color: \"#273043\",\n                            fontFamily: \"Helvetica\"\n                        },\n                        children: [\n                            \"Already have an account?\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"/auth/signin\",\n                                style: {\n                                    color: \"#273043\"\n                                },\n                                children: \"Login\"\n                            }, void 0, false, {\n                                fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/signup.tsx\",\n                                lineNumber: 154,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/signup.tsx\",\n                        lineNumber: 146,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        style: {\n                            fontSize: \"14px\",\n                            color: \"#273043\"\n                        },\n                        children: [\n                            \"Stay guest mode and return\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"/\",\n                                style: {\n                                    color: \"#273043\"\n                                },\n                                children: \"home\"\n                            }, void 0, false, {\n                                fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/signup.tsx\",\n                                lineNumber: 165,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/signup.tsx\",\n                        lineNumber: 158,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/signup.tsx\",\n                lineNumber: 139,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/signup.tsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, this);\n}\n_s(SignUp, \"Lrw7JeD9zj6OUWhT/IH4OIvPKEk=\");\n_c = SignUp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignUp);\nvar _c;\n$RefreshReg$(_c, \"SignUp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBQ1E7Z0JBQ0NDLE9BQU87b0JBQ0w4QixXQUFXO29CQUNYdkIsV0FBVztvQkFDWEgsWUFBWTtnQkFDZDs7a0NBRUEsOERBQUM2Qjt3QkFDQ2pDLE9BQU87NEJBQ0xlLFVBQVU7NEJBQ1ZFLE9BQU87NEJBQ1BiLFlBQVk7d0JBQ2Q7OzRCQUNEOzRCQUMwQjswQ0FDekIsOERBQUM4QjtnQ0FBRXJDLE1BQUs7Z0NBQWVHLE9BQU87b0NBQUVpQixPQUFPO2dDQUFVOzBDQUFHOzs7Ozs7Ozs7Ozs7a0NBSXRELDhEQUFDZ0I7d0JBQ0NqQyxPQUFPOzRCQUNMZSxVQUFVOzRCQUNWRSxPQUFPO3dCQUNUOzs0QkFDRDs0QkFDNEI7MENBQzNCLDhEQUFDaUI7Z0NBQUVyQyxNQUFLO2dDQUFJRyxPQUFPO29DQUFFaUIsT0FBTztnQ0FBVTswQ0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT25EO0dBektTNUM7S0FBQUE7QUEyS1QsK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbnVwLnRzeD8wZWFhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvcm1FdmVudEhhbmRsZXIsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIFNpZ25VcCgpIHtcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBoYW5kbGVTaWduVXA6IEZvcm1FdmVudEhhbmRsZXI8SFRNTEZvcm1FbGVtZW50PiA9IGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIFBlcmZvcm0gYW55IGNsaWVudC1zaWRlIHZhbGlkYXRpb24gaGVyZVxuXG4gICAgLy8gQ3JlYXRlIGEgbmV3IHVzZXIgd2l0aCB0aGUgcHJvdmlkZWQgdXNlcm5hbWUgYW5kIHBhc3N3b3JkXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0hPU1R9L2FwaS9zaWduaW5gLFxuICAgICAgICB7XG4gICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSxcbiAgICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcbiAgICAgICAgICAgIHR5cGU6IFwiU2lnblVwXCIsXG4gICAgICAgICAgfSksXG4gICAgICAgIH1cbiAgICAgICk7XG5cbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAvLyBVc2VyIHJlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsXG4gICAgICAgIC8vIFJlZGlyZWN0IG9yIHNob3cgYSBzdWNjZXNzIG1lc3NhZ2VcbiAgICAgICAgY29uc29sZS5sb2coXCJTaWduVXAgc3VjY2Vzc2Z1bFwiKTtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9hdXRoL3NpZ25pblwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJTaWdudXAgbm90IHN1Y2Nlc3NmdWxcIik7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIC8vIEhhbmRsZSBhbnkgbmV0d29yayBvciBzZXJ2ZXIgZXJyb3JzXG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZmZcIixcbiAgICAgICAgcGFkZGluZzogXCI1MHB4XCIsXG4gICAgICAgIGhlaWdodDogXCIxMDB2aFwiLFxuICAgICAgICBmb250RmFtaWx5OlxuICAgICAgICAgIFwiZm9udC1mYW1pbHk6IEludGVyLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIEZpcmEgU2FucywgRHJvaWQgU2FucywgSGVsdmV0aWNhIE5ldWUsIHNhbnMtc2VyaWZcIixcbiAgICAgIH19XG4gICAgPlxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgIG1hcmdpblRvcDogXCIxMDBweFwiLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMjczMDQzXCIsXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMTBweFwiLFxuICAgICAgICAgICAgYm94U2hhZG93OiBcIjBweCAycHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKVwiLFxuICAgICAgICAgICAgbWF4V2lkdGg6IFwiODAlXCIsXG4gICAgICAgICAgICBwYWRkaW5nTGVmdDogXCI1MHB4XCIsXG4gICAgICAgICAgICBwYWRkaW5nVG9wOiBcIjMwcHhcIixcbiAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IFwiNTVweFwiLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8aDJcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGZvbnRTaXplOiBcIjI0cHhcIixcbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjMwcHhcIixcbiAgICAgICAgICAgICAgY29sb3I6IFwiI2ZmZlwiLFxuICAgICAgICAgICAgICBmb250RmFtaWx5OiBcIkhlbHZldGljYVwiLFxuICAgICAgICAgICAgICBtYXhXaWR0aDogXCI4MCVcIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgU2lnbiBVcFxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVNpZ25VcH0+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiNDBweFwiLFxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE2cHhcIixcbiAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMzBweFwiLFxuICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiBcIjE1cHhcIixcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZlwiLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBcIiMyNzMwNDNcIixcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMTVweFwiLFxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcIiNmZmZcIixcbiAgICAgICAgICAgICAgICB3aWR0aDogXCI4MCVcIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgdHlwZT1cInVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiXG4gICAgICAgICAgICAgIHZhbHVlPXt1c2VybmFtZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiODAlXCIsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjQwcHhcIixcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxNnB4XCIsXG4gICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjMwcHhcIixcbiAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogXCIxNXB4XCIsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZmZcIixcbiAgICAgICAgICAgICAgICBjb2xvcjogXCIjMjczMDQzXCIsXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjE1cHhcIixcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogXCIjZmZmXCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZlwiLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBcIiMyNzMwNDNcIixcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMTVweFwiLFxuICAgICAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiNDBweFwiLFxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjMwJVwiLFxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE1cHhcIixcbiAgICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcIiNmZmZcIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFNpZ24gVXBcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgbWFyZ2luVG9wOiBcIjIwcHhcIixcbiAgICAgICAgICBmb250RmFtaWx5OiBcIkhlbHZldGljYVwiLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8cFxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBmb250U2l6ZTogXCIxNHB4XCIsXG4gICAgICAgICAgICBjb2xvcjogXCIjMjczMDQzXCIsXG4gICAgICAgICAgICBmb250RmFtaWx5OiBcIkhlbHZldGljYVwiLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBBbHJlYWR5IGhhdmUgYW4gYWNjb3VudD97XCIgXCJ9XG4gICAgICAgICAgPGEgaHJlZj1cIi9hdXRoL3NpZ25pblwiIHN0eWxlPXt7IGNvbG9yOiBcIiMyNzMwNDNcIiB9fT5cbiAgICAgICAgICAgIExvZ2luXG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGZvbnRTaXplOiBcIjE0cHhcIixcbiAgICAgICAgICAgIGNvbG9yOiBcIiMyNzMwNDNcIixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgU3RheSBndWVzdCBtb2RlIGFuZCByZXR1cm57XCIgXCJ9XG4gICAgICAgICAgPGEgaHJlZj1cIi9cIiBzdHlsZT17eyBjb2xvcjogXCIjMjczMDQzXCIgfX0+XG4gICAgICAgICAgICBob21lXG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2lnblVwO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiU2lnblVwIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJoYW5kbGVTaWduVXAiLCJlIiwicHJldmVudERlZmF1bHQiLCJyZXNwb25zZSIsImZldGNoIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0hPU1QiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0eXBlIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImVycm9yIiwiZGl2Iiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWRkaW5nIiwiaGVpZ2h0IiwiZm9udEZhbWlseSIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsIm1hcmdpblRvcCIsImJvcmRlclJhZGl1cyIsImJveFNoYWRvdyIsIm1heFdpZHRoIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsImgyIiwiZm9udFNpemUiLCJtYXJnaW5Cb3R0b20iLCJjb2xvciIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwicmVxdWlyZWQiLCJib3JkZXJDb2xvciIsIndpZHRoIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwiYnV0dG9uIiwidGV4dERlY29yYXRpb24iLCJ0ZXh0QWxpZ24iLCJ2ZXJ0aWNhbEFsaWduIiwiY3Vyc29yIiwicCIsImEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/signup.tsx\n"));

/***/ })

});