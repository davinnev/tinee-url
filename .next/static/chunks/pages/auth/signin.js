/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/auth/signin"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fdavinnevaleria%2FDesktop%2FNot%20uni%20coding%2Ftinee-url%2Fpages%2Fauth%2Fsignin.tsx&page=%2Fauth%2Fsignin!":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fdavinnevaleria%2FDesktop%2FNot%20uni%20coding%2Ftinee-url%2Fpages%2Fauth%2Fsignin.tsx&page=%2Fauth%2Fsignin! ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/auth/signin\",\n      function () {\n        return __webpack_require__(/*! ./pages/auth/signin.tsx */ \"./pages/auth/signin.tsx\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/auth/signin\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/YWJzb2x1dGVQYWdlUGF0aD0lMkZVc2VycyUyRmRhdmlubmV2YWxlcmlhJTJGRGVza3RvcCUyRk5vdCUyMHVuaSUyMGNvZGluZyUyRnRpbmVlLXVybCUyRnBhZ2VzJTJGYXV0aCUyRnNpZ25pbi50c3gmcGFnZT0lMkZhdXRoJTJGc2lnbmluISIsIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQkFBTyxDQUFDLHdEQUF5QjtBQUNoRDtBQUNBO0FBQ0EsT0FBTyxJQUFVO0FBQ2pCLE1BQU0sVUFBVTtBQUNoQjtBQUNBLE9BQU87QUFDUDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8/ODhhMyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAod2luZG93Ll9fTkVYVF9QID0gd2luZG93Ll9fTkVYVF9QIHx8IFtdKS5wdXNoKFtcbiAgICAgIFwiL2F1dGgvc2lnbmluXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXF1aXJlKFwiLi9wYWdlcy9hdXRoL3NpZ25pbi50c3hcIik7XG4gICAgICB9XG4gICAgXSk7XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2luZG93Ll9fTkVYVF9QLnB1c2goW1wiL2F1dGgvc2lnbmluXCJdKVxuICAgICAgfSk7XG4gICAgfVxuICAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fdavinnevaleria%2FDesktop%2FNot%20uni%20coding%2Ftinee-url%2Fpages%2Fauth%2Fsignin.tsx&page=%2Fauth%2Fsignin!\n"));

/***/ }),

/***/ "./pages/auth/signin.tsx":
/*!*******************************!*\
  !*** ./pages/auth/signin.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction SignIn() {\n    _s();\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [successful, setSuccessful] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const session = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    const handleSignIn = async (e)=>{\n        e.preventDefault();\n        const result = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signIn)(\"credentials\", {\n            username,\n            password,\n            redirect: false\n        });\n        console.log(\"Result: \", result);\n        if (!result.ok) {\n            // Sign-in failed\n            console.log(\"fAILED\");\n            setSuccessful(false);\n            console.error(result.error);\n        } else {\n            // Sign-in successful\n            // Redirect or handle success as needed\n            console.log(\"Login successful\");\n            console.log(session);\n            window.location.href = \"/\";\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            backgroundColor: \"#fff\",\n            padding: \"50px\",\n            height: \"100vh\",\n            fontFamily: \"font-family: Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    justifyContent: \"center\",\n                    marginTop: \"100px\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        backgroundColor: \"#273043\",\n                        borderRadius: \"10px\",\n                        boxShadow: \"0px 2px 6px rgba(0, 0, 0, 0.1)\",\n                        maxWidth: \"80%\",\n                        paddingLeft: \"50px\",\n                        paddingTop: \"30px\",\n                        paddingBottom: \"55px\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            style: {\n                                fontSize: \"24px\",\n                                marginBottom: \"30px\",\n                                color: \"#fff\",\n                                fontFamily: \"Helvetica\",\n                                maxWidth: \"80%\"\n                            },\n                            children: \"Login\"\n                        }, void 0, false, {\n                            fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/auth/signin.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            onSubmit: handleSignIn,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    required: true,\n                                    style: {\n                                        height: \"40px\",\n                                        fontSize: \"16px\",\n                                        marginBottom: \"30px\",\n                                        paddingLeft: \"15px\",\n                                        backgroundColor: \"#fff\",\n                                        color: \"#273043\",\n                                        borderRadius: \"15px\",\n                                        borderColor: \"#fff\",\n                                        width: \"80%\"\n                                    },\n                                    type: \"username\",\n                                    placeholder: \"Username\",\n                                    value: username,\n                                    onChange: (e)=>setUsername(e.target.value)\n                                }, void 0, false, {\n                                    fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/auth/signin.tsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    required: true,\n                                    style: {\n                                        width: \"80%\",\n                                        height: \"40px\",\n                                        fontSize: \"16px\",\n                                        marginBottom: \"30px\",\n                                        paddingLeft: \"15px\",\n                                        backgroundColor: \"#fff\",\n                                        color: \"#273043\",\n                                        borderRadius: \"15px\",\n                                        borderColor: \"#fff\"\n                                    },\n                                    type: \"password\",\n                                    placeholder: \"Password\",\n                                    value: password,\n                                    onChange: (e)=>setPassword(e.target.value)\n                                }, void 0, false, {\n                                    fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/auth/signin.tsx\",\n                                    lineNumber: 92,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    style: {\n                                        backgroundColor: \"#fff\",\n                                        color: \"#273043\",\n                                        borderRadius: \"15px\",\n                                        textDecoration: \"none\",\n                                        height: \"40px\",\n                                        width: \"30%\",\n                                        textAlign: \"center\",\n                                        verticalAlign: \"center\",\n                                        fontSize: \"15px\",\n                                        cursor: \"pointer\",\n                                        borderColor: \"#fff\"\n                                    },\n                                    type: \"submit\",\n                                    children: \"Login\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/auth/signin.tsx\",\n                                    lineNumber: 110,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/auth/signin.tsx\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/auth/signin.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/auth/signin.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this),\n            successful ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    textAlign: \"center\",\n                    marginTop: \"20px\",\n                    fontFamily: \"Helvetica\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        style: {\n                            fontSize: \"14px\",\n                            color: \"#273043\"\n                        },\n                        children: [\n                            \"Don't have an account?\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"/signup\",\n                                style: {\n                                    color: \"#273043\"\n                                },\n                                children: \"Sign up\"\n                            }, void 0, false, {\n                                fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/auth/signin.tsx\",\n                                lineNumber: 146,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/auth/signin.tsx\",\n                        lineNumber: 139,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        style: {\n                            fontSize: \"14px\",\n                            color: \"#273043\"\n                        },\n                        children: [\n                            \"Stay guest mode and return\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"/\",\n                                style: {\n                                    color: \"#273043\"\n                                },\n                                children: \"home\"\n                            }, void 0, false, {\n                                fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/auth/signin.tsx\",\n                                lineNumber: 157,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/auth/signin.tsx\",\n                        lineNumber: 150,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/auth/signin.tsx\",\n                lineNumber: 132,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    textAlign: \"center\",\n                    marginTop: \"20px\",\n                    fontFamily: \"Helvetica\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        style: {\n                            fontSize: \"14px\",\n                            color: \"#ed2939\"\n                        },\n                        children: \"Wrong username/password!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/auth/signin.tsx\",\n                        lineNumber: 170,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        style: {\n                            fontSize: \"14px\",\n                            color: \"#273043\"\n                        },\n                        children: [\n                            \"Don't have an account?\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"/signup\",\n                                style: {\n                                    color: \"#273043\"\n                                },\n                                children: \"Sign up\"\n                            }, void 0, false, {\n                                fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/auth/signin.tsx\",\n                                lineNumber: 185,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/auth/signin.tsx\",\n                        lineNumber: 178,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        style: {\n                            fontSize: \"14px\",\n                            color: \"#273043\"\n                        },\n                        children: [\n                            \"Stay guest mode and return\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"/\",\n                                style: {\n                                    color: \"#273043\"\n                                },\n                                children: \"home\"\n                            }, void 0, false, {\n                                fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/auth/signin.tsx\",\n                                lineNumber: 196,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/auth/signin.tsx\",\n                        lineNumber: 189,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/auth/signin.tsx\",\n                lineNumber: 163,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/auth/signin.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, this);\n}\n_s(SignIn, \"fHJWMHY/ATDFFgO+R9t+r8xa1Q8=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession\n    ];\n});\n_c = SignIn;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignIn);\nvar _c;\n$RefreshReg$(_c, \"SignIn\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NzY2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvcm1FdmVudEhhbmRsZXIsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBzaWduSW4sIHVzZVNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XG5pbXBvcnQgbG9nbyBmcm9tIFwiLi4vLi4vcHVibGljL3RpbmVlLWxvZ28ucG5nXCI7XG5cbmZ1bmN0aW9uIFNpZ25JbigpIHtcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3N1Y2Nlc3NmdWwsIHNldFN1Y2Nlc3NmdWxdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IHNlc3Npb24gPSB1c2VTZXNzaW9uKCk7XG5cbiAgY29uc3QgaGFuZGxlU2lnbkluOiBGb3JtRXZlbnRIYW5kbGVyPEhUTUxGb3JtRWxlbWVudD4gPSBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHNpZ25JbihcImNyZWRlbnRpYWxzXCIsIHtcbiAgICAgIHVzZXJuYW1lLFxuICAgICAgcGFzc3dvcmQsXG4gICAgICByZWRpcmVjdDogZmFsc2UsXG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coXCJSZXN1bHQ6IFwiLCByZXN1bHQpO1xuICAgIGlmICghcmVzdWx0Lm9rKSB7XG4gICAgICAvLyBTaWduLWluIGZhaWxlZFxuICAgICAgY29uc29sZS5sb2coXCJmQUlMRURcIik7XG4gICAgICBzZXRTdWNjZXNzZnVsKGZhbHNlKTtcbiAgICAgIGNvbnNvbGUuZXJyb3IocmVzdWx0LmVycm9yKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU2lnbi1pbiBzdWNjZXNzZnVsXG4gICAgICAvLyBSZWRpcmVjdCBvciBoYW5kbGUgc3VjY2VzcyBhcyBuZWVkZWRcbiAgICAgIGNvbnNvbGUubG9nKFwiTG9naW4gc3VjY2Vzc2Z1bFwiKTtcbiAgICAgIGNvbnNvbGUubG9nKHNlc3Npb24pO1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9cIjtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBzdHlsZT17e1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZlwiLFxuICAgICAgICBwYWRkaW5nOiBcIjUwcHhcIixcbiAgICAgICAgaGVpZ2h0OiBcIjEwMHZoXCIsXG4gICAgICAgIGZvbnRGYW1pbHk6XG4gICAgICAgICAgXCJmb250LWZhbWlseTogSW50ZXIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgRmlyYSBTYW5zLCBEcm9pZCBTYW5zLCBIZWx2ZXRpY2EgTmV1ZSwgc2Fucy1zZXJpZlwiLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgbWFyZ2luVG9wOiBcIjEwMHB4XCIsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMyNzMwNDNcIixcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIxMHB4XCIsXG4gICAgICAgICAgICBib3hTaGFkb3c6IFwiMHB4IDJweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpXCIsXG4gICAgICAgICAgICBtYXhXaWR0aDogXCI4MCVcIixcbiAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiBcIjUwcHhcIixcbiAgICAgICAgICAgIHBhZGRpbmdUb3A6IFwiMzBweFwiLFxuICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogXCI1NXB4XCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxoMlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgZm9udFNpemU6IFwiMjRweFwiLFxuICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMzBweFwiLFxuICAgICAgICAgICAgICBjb2xvcjogXCIjZmZmXCIsXG4gICAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiSGVsdmV0aWNhXCIsXG4gICAgICAgICAgICAgIG1heFdpZHRoOiBcIjgwJVwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBMb2dpblxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVNpZ25Jbn0+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiNDBweFwiLFxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE2cHhcIixcbiAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMzBweFwiLFxuICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiBcIjE1cHhcIixcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZlwiLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBcIiMyNzMwNDNcIixcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMTVweFwiLFxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcIiNmZmZcIixcbiAgICAgICAgICAgICAgICB3aWR0aDogXCI4MCVcIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgdHlwZT1cInVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiXG4gICAgICAgICAgICAgIHZhbHVlPXt1c2VybmFtZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiODAlXCIsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjQwcHhcIixcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxNnB4XCIsXG4gICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjMwcHhcIixcbiAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogXCIxNXB4XCIsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZmZcIixcbiAgICAgICAgICAgICAgICBjb2xvcjogXCIjMjczMDQzXCIsXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjE1cHhcIixcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogXCIjZmZmXCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZlwiLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBcIiMyNzMwNDNcIixcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMTVweFwiLFxuICAgICAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiNDBweFwiLFxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjMwJVwiLFxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE1cHhcIixcbiAgICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcIiNmZmZcIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIExvZ2luXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICB7c3VjY2Vzc2Z1bCA/IChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICBtYXJnaW5Ub3A6IFwiMjBweFwiLFxuICAgICAgICAgICAgZm9udEZhbWlseTogXCJIZWx2ZXRpY2FcIixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPHBcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE0cHhcIixcbiAgICAgICAgICAgICAgY29sb3I6IFwiIzI3MzA0M1wiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBEb24ndCBoYXZlIGFuIGFjY291bnQ/e1wiIFwifVxuICAgICAgICAgICAgPGEgaHJlZj1cIi9zaWdudXBcIiBzdHlsZT17eyBjb2xvcjogXCIjMjczMDQzXCIgfX0+XG4gICAgICAgICAgICAgIFNpZ24gdXBcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHBcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE0cHhcIixcbiAgICAgICAgICAgICAgY29sb3I6IFwiIzI3MzA0M1wiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBTdGF5IGd1ZXN0IG1vZGUgYW5kIHJldHVybntcIiBcIn1cbiAgICAgICAgICAgIDxhIGhyZWY9XCIvXCIgc3R5bGU9e3sgY29sb3I6IFwiIzI3MzA0M1wiIH19PlxuICAgICAgICAgICAgICBob21lXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjIwcHhcIixcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiSGVsdmV0aWNhXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxwXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBmb250U2l6ZTogXCIxNHB4XCIsXG4gICAgICAgICAgICAgIGNvbG9yOiBcIiNlZDI5MzlcIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgV3JvbmcgdXNlcm5hbWUvcGFzc3dvcmQhXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBmb250U2l6ZTogXCIxNHB4XCIsXG4gICAgICAgICAgICAgIGNvbG9yOiBcIiMyNzMwNDNcIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgRG9uJ3QgaGF2ZSBhbiBhY2NvdW50P3tcIiBcIn1cbiAgICAgICAgICAgIDxhIGhyZWY9XCIvc2lnbnVwXCIgc3R5bGU9e3sgY29sb3I6IFwiIzI3MzA0M1wiIH19PlxuICAgICAgICAgICAgICBTaWduIHVwXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBmb250U2l6ZTogXCIxNHB4XCIsXG4gICAgICAgICAgICAgIGNvbG9yOiBcIiMyNzMwNDNcIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgU3RheSBndWVzdCBtb2RlIGFuZCByZXR1cm57XCIgXCJ9XG4gICAgICAgICAgICA8YSBocmVmPVwiL1wiIHN0eWxlPXt7IGNvbG9yOiBcIiMyNzMwNDNcIiB9fT5cbiAgICAgICAgICAgICAgaG9tZVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTaWduSW47XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJzaWduSW4iLCJ1c2VTZXNzaW9uIiwiU2lnbkluIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJzdWNjZXNzZnVsIiwic2V0U3VjY2Vzc2Z1bCIsInNlc3Npb24iLCJoYW5kbGVTaWduSW4iLCJlIiwicHJldmVudERlZmF1bHQiLCJyZXN1bHQiLCJyZWRpcmVjdCIsImNvbnNvbGUiLCJsb2ciLCJvayIsImVycm9yIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiZGl2Iiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWRkaW5nIiwiaGVpZ2h0IiwiZm9udEZhbWlseSIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsIm1hcmdpblRvcCIsImJvcmRlclJhZGl1cyIsImJveFNoYWRvdyIsIm1heFdpZHRoIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsImgyIiwiZm9udFNpemUiLCJtYXJnaW5Cb3R0b20iLCJjb2xvciIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwicmVxdWlyZWQiLCJib3JkZXJDb2xvciIsIndpZHRoIiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsImJ1dHRvbiIsInRleHREZWNvcmF0aW9uIiwidGV4dEFsaWduIiwidmVydGljYWxBbGlnbiIsImN1cnNvciIsInAiLCJhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/auth/signin.tsx\n"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fdavinnevaleria%2FDesktop%2FNot%20uni%20coding%2Ftinee-url%2Fpages%2Fauth%2Fsignin.tsx&page=%2Fauth%2Fsignin!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);