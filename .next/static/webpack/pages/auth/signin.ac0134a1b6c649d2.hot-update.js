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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction SignIn() {\n    _s();\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [successful, setSuccessful] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const session = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    const handleSignIn = async (e)=>{\n        e.preventDefault();\n        const result = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signIn)(\"credentials\", {\n            username,\n            password,\n            redirect: false\n        });\n        console.log(\"Result: \", result);\n        if (!result.ok) {\n            // Sign-in failed\n            console.log(\"fAILED\");\n            setSuccessful(false);\n            console.error(result.error);\n        } else {\n            // Sign-in successful\n            // Redirect or handle success as needed\n            console.log(\"Login successful\");\n            console.log(session);\n            window.location.href = \"/\";\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            backgroundColor: \"#fff\",\n            padding: \"50px\",\n            height: \"100vh\",\n            fontFamily: \"font-family: Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    justifyContent: \"center\",\n                    marginTop: \"100px\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        backgroundColor: \"#273043\",\n                        borderRadius: \"10px\",\n                        boxShadow: \"0px 2px 6px rgba(0, 0, 0, 0.1)\",\n                        maxWidth: \"80%\",\n                        paddingLeft: \"50px\",\n                        paddingTop: \"30px\",\n                        paddingBottom: \"55px\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            style: {\n                                fontSize: \"24px\",\n                                marginBottom: \"30px\",\n                                color: \"#fff\",\n                                fontFamily: \"Helvetica\",\n                                maxWidth: \"80%\"\n                            },\n                            children: \"Login\"\n                        }, void 0, false, {\n                            fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/auth/signin.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            onSubmit: handleSignIn,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    required: true,\n                                    style: {\n                                        height: \"40px\",\n                                        fontSize: \"16px\",\n                                        marginBottom: \"30px\",\n                                        paddingLeft: \"15px\",\n                                        backgroundColor: \"#fff\",\n                                        color: \"#273043\",\n                                        borderRadius: \"15px\",\n                                        borderColor: \"#fff\",\n                                        width: \"80%\"\n                                    },\n                                    type: \"username\",\n                                    placeholder: \"Username\",\n                                    value: username,\n                                    onChange: (e)=>setUsername(e.target.value)\n                                }, void 0, false, {\n                                    fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/auth/signin.tsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    required: true,\n                                    style: {\n                                        width: \"80%\",\n                                        height: \"40px\",\n                                        fontSize: \"16px\",\n                                        marginBottom: \"30px\",\n                                        paddingLeft: \"15px\",\n                                        backgroundColor: \"#fff\",\n                                        color: \"#273043\",\n                                        borderRadius: \"15px\",\n                                        borderColor: \"#fff\"\n                                    },\n                                    type: \"password\",\n                                    placeholder: \"Password\",\n                                    value: password,\n                                    onChange: (e)=>setPassword(e.target.value)\n                                }, void 0, false, {\n                                    fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/auth/signin.tsx\",\n                                    lineNumber: 92,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    style: {\n                                        backgroundColor: \"#fff\",\n                                        color: \"#273043\",\n                                        borderRadius: \"15px\",\n                                        textDecoration: \"none\",\n                                        height: \"40px\",\n                                        width: \"30%\",\n                                        textAlign: \"center\",\n                                        verticalAlign: \"center\",\n                                        fontSize: \"15px\",\n                                        cursor: \"pointer\",\n                                        borderColor: \"#fff\"\n                                    },\n                                    type: \"submit\",\n                                    children: \"Login\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/auth/signin.tsx\",\n                                    lineNumber: 110,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/auth/signin.tsx\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/auth/signin.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/auth/signin.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this),\n            successful ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    textAlign: \"center\",\n                    marginTop: \"20px\",\n                    fontFamily: \"Helvetica\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        style: {\n                            fontSize: \"14px\",\n                            color: \"#273043\"\n                        },\n                        children: [\n                            \"Don't have an account?\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"/auth/signup\",\n                                style: {\n                                    color: \"#273043\"\n                                },\n                                children: \"Sign up\"\n                            }, void 0, false, {\n                                fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/auth/signin.tsx\",\n                                lineNumber: 146,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/auth/signin.tsx\",\n                        lineNumber: 139,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        style: {\n                            fontSize: \"14px\",\n                            color: \"#273043\"\n                        },\n                        children: [\n                            \"Stay guest mode and return\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"/\",\n                                style: {\n                                    color: \"#273043\"\n                                },\n                                children: \"home\"\n                            }, void 0, false, {\n                                fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/auth/signin.tsx\",\n                                lineNumber: 157,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/auth/signin.tsx\",\n                        lineNumber: 150,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/auth/signin.tsx\",\n                lineNumber: 132,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    textAlign: \"center\",\n                    marginTop: \"20px\",\n                    fontFamily: \"Helvetica\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    style: {\n                        fontSize: \"14px\",\n                        color: \"#\"\n                    },\n                    children: \"Wrong username/password!\"\n                }, void 0, false, {\n                    fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/auth/signin.tsx\",\n                    lineNumber: 170,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/auth/signin.tsx\",\n                lineNumber: 163,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/auth/signin.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, this);\n}\n_s(SignIn, \"fHJWMHY/ATDFFgO+R9t+r8xa1Q8=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession\n    ];\n});\n_c = SignIn;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignIn);\nvar _c;\n$RefreshReg$(_c, \"SignIn\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hdXRoL3NpZ25pbi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQW1EO0FBQ0U7QUFHckQsU0FBU0c7O0lBQ1AsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdMLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ00sVUFBVUMsWUFBWSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNRLFlBQVlDLGNBQWMsR0FBR1QsK0NBQVFBLENBQUM7SUFDN0MsTUFBTVUsVUFBVVIsMkRBQVVBO0lBRTFCLE1BQU1TLGVBQWtELE9BQU9DO1FBQzdEQSxFQUFFQyxjQUFjO1FBRWhCLE1BQU1DLFNBQVMsTUFBTWIsdURBQU1BLENBQUMsZUFBZTtZQUN6Q0c7WUFDQUU7WUFDQVMsVUFBVTtRQUNaO1FBQ0FDLFFBQVFDLEdBQUcsQ0FBQyxZQUFZSDtRQUN4QixJQUFJLENBQUNBLE9BQU9JLEVBQUUsRUFBRTtZQUNkLGlCQUFpQjtZQUNqQkYsUUFBUUMsR0FBRyxDQUFDO1lBQ1pSLGNBQWM7WUFDZE8sUUFBUUcsS0FBSyxDQUFDTCxPQUFPSyxLQUFLO1FBQzVCLE9BQU87WUFDTCxxQkFBcUI7WUFDckIsdUNBQXVDO1lBQ3ZDSCxRQUFRQyxHQUFHLENBQUM7WUFDWkQsUUFBUUMsR0FBRyxDQUFDUDtZQUNaVSxPQUFPQyxRQUFRLENBQUNDLElBQUksR0FBRztRQUN6QjtJQUNGO0lBRUEscUJBQ0UsOERBQUNDO1FBQ0NDLE9BQU87WUFDTEMsaUJBQWlCO1lBQ2pCQyxTQUFTO1lBQ1RDLFFBQVE7WUFDUkMsWUFDRTtRQUNKOzswQkFFQSw4REFBQ0w7Z0JBQ0NDLE9BQU87b0JBQ0xLLFNBQVM7b0JBQ1RDLGdCQUFnQjtvQkFDaEJDLFdBQVc7Z0JBQ2I7MEJBRUEsNEVBQUNSO29CQUNDQyxPQUFPO3dCQUNMQyxpQkFBaUI7d0JBQ2pCTyxjQUFjO3dCQUNkQyxXQUFXO3dCQUNYQyxVQUFVO3dCQUNWQyxhQUFhO3dCQUNiQyxZQUFZO3dCQUNaQyxlQUFlO29CQUNqQjs7c0NBRUEsOERBQUNDOzRCQUNDZCxPQUFPO2dDQUNMZSxVQUFVO2dDQUNWQyxjQUFjO2dDQUNkQyxPQUFPO2dDQUNQYixZQUFZO2dDQUNaTSxVQUFVOzRCQUNaO3NDQUNEOzs7Ozs7c0NBR0QsOERBQUNROzRCQUFLQyxVQUFVaEM7OzhDQUNkLDhEQUFDaUM7b0NBQ0NDLFFBQVE7b0NBQ1JyQixPQUFPO3dDQUNMRyxRQUFRO3dDQUNSWSxVQUFVO3dDQUNWQyxjQUFjO3dDQUNkTCxhQUFhO3dDQUNiVixpQkFBaUI7d0NBQ2pCZ0IsT0FBTzt3Q0FDUFQsY0FBYzt3Q0FDZGMsYUFBYTt3Q0FDYkMsT0FBTztvQ0FDVDtvQ0FDQUMsTUFBSztvQ0FDTEMsYUFBWTtvQ0FDWkMsT0FBTzlDO29DQUNQK0MsVUFBVSxDQUFDdkMsSUFBTVAsWUFBWU8sRUFBRXdDLE1BQU0sQ0FBQ0YsS0FBSzs7Ozs7OzhDQUU3Qyw4REFBQ047b0NBQ0NDLFFBQVE7b0NBQ1JyQixPQUFPO3dDQUNMdUIsT0FBTzt3Q0FDUHBCLFFBQVE7d0NBQ1JZLFVBQVU7d0NBQ1ZDLGNBQWM7d0NBQ2RMLGFBQWE7d0NBQ2JWLGlCQUFpQjt3Q0FDakJnQixPQUFPO3dDQUNQVCxjQUFjO3dDQUNkYyxhQUFhO29DQUNmO29DQUNBRSxNQUFLO29DQUNMQyxhQUFZO29DQUNaQyxPQUFPNUM7b0NBQ1A2QyxVQUFVLENBQUN2QyxJQUFNTCxZQUFZSyxFQUFFd0MsTUFBTSxDQUFDRixLQUFLOzs7Ozs7OENBRTdDLDhEQUFDRztvQ0FDQzdCLE9BQU87d0NBQ0xDLGlCQUFpQjt3Q0FDakJnQixPQUFPO3dDQUNQVCxjQUFjO3dDQUNkc0IsZ0JBQWdCO3dDQUNoQjNCLFFBQVE7d0NBQ1JvQixPQUFPO3dDQUNQUSxXQUFXO3dDQUNYQyxlQUFlO3dDQUNmakIsVUFBVTt3Q0FDVmtCLFFBQVE7d0NBQ1JYLGFBQWE7b0NBQ2Y7b0NBQ0FFLE1BQUs7OENBQ047Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBTU54QywyQkFDQyw4REFBQ2U7Z0JBQ0NDLE9BQU87b0JBQ0wrQixXQUFXO29CQUNYeEIsV0FBVztvQkFDWEgsWUFBWTtnQkFDZDs7a0NBRUEsOERBQUM4Qjt3QkFDQ2xDLE9BQU87NEJBQ0xlLFVBQVU7NEJBQ1ZFLE9BQU87d0JBQ1Q7OzRCQUNEOzRCQUN3QjswQ0FDdkIsOERBQUNrQjtnQ0FBRXJDLE1BQUs7Z0NBQWVFLE9BQU87b0NBQUVpQixPQUFPO2dDQUFVOzBDQUFHOzs7Ozs7Ozs7Ozs7a0NBSXRELDhEQUFDaUI7d0JBQ0NsQyxPQUFPOzRCQUNMZSxVQUFVOzRCQUNWRSxPQUFPO3dCQUNUOzs0QkFDRDs0QkFDNEI7MENBQzNCLDhEQUFDa0I7Z0NBQUVyQyxNQUFLO2dDQUFJRSxPQUFPO29DQUFFaUIsT0FBTztnQ0FBVTswQ0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7cUNBTTdDLDhEQUFDbEI7Z0JBQ0NDLE9BQU87b0JBQ0wrQixXQUFXO29CQUNYeEIsV0FBVztvQkFDWEgsWUFBWTtnQkFDZDswQkFFQSw0RUFBQzhCO29CQUNDbEMsT0FBTzt3QkFDTGUsVUFBVTt3QkFDVkUsT0FBTztvQkFDVDs4QkFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPWDtHQWpMU3RDOztRQUlTRCx1REFBVUE7OztLQUpuQkM7QUFtTFQsK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXV0aC9zaWduaW4udHN4P2U3NjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9ybUV2ZW50SGFuZGxlciwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHNpZ25JbiwgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcbmltcG9ydCBsb2dvIGZyb20gXCIuLi8uLi9wdWJsaWMvdGluZWUtbG9nby5wbmdcIjtcblxuZnVuY3Rpb24gU2lnbkluKCkge1xuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbc3VjY2Vzc2Z1bCwgc2V0U3VjY2Vzc2Z1bF0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3Qgc2Vzc2lvbiA9IHVzZVNlc3Npb24oKTtcblxuICBjb25zdCBoYW5kbGVTaWduSW46IEZvcm1FdmVudEhhbmRsZXI8SFRNTEZvcm1FbGVtZW50PiA9IGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc2lnbkluKFwiY3JlZGVudGlhbHNcIiwge1xuICAgICAgdXNlcm5hbWUsXG4gICAgICBwYXNzd29yZCxcbiAgICAgIHJlZGlyZWN0OiBmYWxzZSxcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhcIlJlc3VsdDogXCIsIHJlc3VsdCk7XG4gICAgaWYgKCFyZXN1bHQub2spIHtcbiAgICAgIC8vIFNpZ24taW4gZmFpbGVkXG4gICAgICBjb25zb2xlLmxvZyhcImZBSUxFRFwiKTtcbiAgICAgIHNldFN1Y2Nlc3NmdWwoZmFsc2UpO1xuICAgICAgY29uc29sZS5lcnJvcihyZXN1bHQuZXJyb3IpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTaWduLWluIHN1Y2Nlc3NmdWxcbiAgICAgIC8vIFJlZGlyZWN0IG9yIGhhbmRsZSBzdWNjZXNzIGFzIG5lZWRlZFxuICAgICAgY29uc29sZS5sb2coXCJMb2dpbiBzdWNjZXNzZnVsXCIpO1xuICAgICAgY29uc29sZS5sb2coc2Vzc2lvbik7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL1wiO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmZmXCIsXG4gICAgICAgIHBhZGRpbmc6IFwiNTBweFwiLFxuICAgICAgICBoZWlnaHQ6IFwiMTAwdmhcIixcbiAgICAgICAgZm9udEZhbWlseTpcbiAgICAgICAgICBcImZvbnQtZmFtaWx5OiBJbnRlciwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBGaXJhIFNhbnMsIERyb2lkIFNhbnMsIEhlbHZldGljYSBOZXVlLCBzYW5zLXNlcmlmXCIsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICBtYXJnaW5Ub3A6IFwiMTAwcHhcIixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzI3MzA0M1wiLFxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjEwcHhcIixcbiAgICAgICAgICAgIGJveFNoYWRvdzogXCIwcHggMnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSlcIixcbiAgICAgICAgICAgIG1heFdpZHRoOiBcIjgwJVwiLFxuICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IFwiNTBweFwiLFxuICAgICAgICAgICAgcGFkZGluZ1RvcDogXCIzMHB4XCIsXG4gICAgICAgICAgICBwYWRkaW5nQm90dG9tOiBcIjU1cHhcIixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGgyXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBmb250U2l6ZTogXCIyNHB4XCIsXG4gICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIzMHB4XCIsXG4gICAgICAgICAgICAgIGNvbG9yOiBcIiNmZmZcIixcbiAgICAgICAgICAgICAgZm9udEZhbWlseTogXCJIZWx2ZXRpY2FcIixcbiAgICAgICAgICAgICAgbWF4V2lkdGg6IFwiODAlXCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIExvZ2luXG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU2lnbklufT5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIGhlaWdodDogXCI0MHB4XCIsXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTZweFwiLFxuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIzMHB4XCIsXG4gICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IFwiMTVweFwiLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmZmXCIsXG4gICAgICAgICAgICAgICAgY29sb3I6IFwiIzI3MzA0M1wiLFxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIxNXB4XCIsXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwiI2ZmZlwiLFxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjgwJVwiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICB0eXBlPVwidXNlcm5hbWVcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3VzZXJuYW1lfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICB3aWR0aDogXCI4MCVcIixcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiNDBweFwiLFxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE2cHhcIixcbiAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMzBweFwiLFxuICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiBcIjE1cHhcIixcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZlwiLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBcIiMyNzMwNDNcIixcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMTVweFwiLFxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcIiNmZmZcIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmZmXCIsXG4gICAgICAgICAgICAgICAgY29sb3I6IFwiIzI3MzA0M1wiLFxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIxNXB4XCIsXG4gICAgICAgICAgICAgICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgIGhlaWdodDogXCI0MHB4XCIsXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMzAlXCIsXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTVweFwiLFxuICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwiI2ZmZlwiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgTG9naW5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtzdWNjZXNzZnVsID8gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgIG1hcmdpblRvcDogXCIyMHB4XCIsXG4gICAgICAgICAgICBmb250RmFtaWx5OiBcIkhlbHZldGljYVwiLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8cFxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTRweFwiLFxuICAgICAgICAgICAgICBjb2xvcjogXCIjMjczMDQzXCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIERvbid0IGhhdmUgYW4gYWNjb3VudD97XCIgXCJ9XG4gICAgICAgICAgICA8YSBocmVmPVwiL2F1dGgvc2lnbnVwXCIgc3R5bGU9e3sgY29sb3I6IFwiIzI3MzA0M1wiIH19PlxuICAgICAgICAgICAgICBTaWduIHVwXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBmb250U2l6ZTogXCIxNHB4XCIsXG4gICAgICAgICAgICAgIGNvbG9yOiBcIiMyNzMwNDNcIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgU3RheSBndWVzdCBtb2RlIGFuZCByZXR1cm57XCIgXCJ9XG4gICAgICAgICAgICA8YSBocmVmPVwiL1wiIHN0eWxlPXt7IGNvbG9yOiBcIiMyNzMwNDNcIiB9fT5cbiAgICAgICAgICAgICAgaG9tZVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgIG1hcmdpblRvcDogXCIyMHB4XCIsXG4gICAgICAgICAgICBmb250RmFtaWx5OiBcIkhlbHZldGljYVwiLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8cFxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTRweFwiLFxuICAgICAgICAgICAgICBjb2xvcjogXCIjXCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFdyb25nIHVzZXJuYW1lL3Bhc3N3b3JkIVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTaWduSW47XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJzaWduSW4iLCJ1c2VTZXNzaW9uIiwiU2lnbkluIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJzdWNjZXNzZnVsIiwic2V0U3VjY2Vzc2Z1bCIsInNlc3Npb24iLCJoYW5kbGVTaWduSW4iLCJlIiwicHJldmVudERlZmF1bHQiLCJyZXN1bHQiLCJyZWRpcmVjdCIsImNvbnNvbGUiLCJsb2ciLCJvayIsImVycm9yIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiZGl2Iiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWRkaW5nIiwiaGVpZ2h0IiwiZm9udEZhbWlseSIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsIm1hcmdpblRvcCIsImJvcmRlclJhZGl1cyIsImJveFNoYWRvdyIsIm1heFdpZHRoIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsImgyIiwiZm9udFNpemUiLCJtYXJnaW5Cb3R0b20iLCJjb2xvciIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwicmVxdWlyZWQiLCJib3JkZXJDb2xvciIsIndpZHRoIiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsImJ1dHRvbiIsInRleHREZWNvcmF0aW9uIiwidGV4dEFsaWduIiwidmVydGljYWxBbGlnbiIsImN1cnNvciIsInAiLCJhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/auth/signin.tsx\n"));

/***/ })

});