"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth */ \"./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _api_auth_nextauth___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api/auth/[...nextauth] */ \"./pages/api/auth/[...nextauth].ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [url, setUrl] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [shortened, setShortened] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const session = async ()=>{\n        const sessionStat = await (0,next_auth__WEBPACK_IMPORTED_MODULE_3__.getServerSession)(_api_auth_nextauth___WEBPACK_IMPORTED_MODULE_4__.authOptions);\n        return sessionStat;\n    };\n    console.log(session);\n    /*const handleSignOut: FormEventHandler<HTMLFormElement> = async (e) => {\n    e.preventDefault();\n\n    const result = await signOut();\n    console.log(result);\n  };*/ const handleSubmit = async (e)=>{\n        e.preventDefault();\n        // Create an object with the form data\n        const formData = {\n            url: url,\n            customHash: \"\"\n        };\n        // Send a POST request to your Next.js API endpoint\n        const response = await fetch(\"\".concat(\"http://localhost:3000\", \"/api/shorten-url\"), {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(formData)\n        });\n        // Handle the response\n        if (response.ok) {\n            // Request was successful\n            const resJSON = await response.json();\n            console.log(resJSON); // Handle the response data as needed\n            console.log(resJSON.data.token);\n            setShortened(\"https://tinee-url.vercel.app//\".concat(resJSON.data.token));\n            setUrl(\"\");\n        } else {\n            // Request failed\n            console.log(\"Request failed\");\n        }\n    };\n    const handleReset = ()=>{\n        setUrl(\"\");\n        setShortened(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jsx-768a094dbd40266\" + \" \" + ((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().page) || \"\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-768a094dbd40266\" + \" \" + ((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().header) || \"\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"jsx-768a094dbd40266\",\n                        children: \" TINEE URL \"\n                    }, void 0, false, {\n                        fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/index.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, this),\n                    session ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"jsx-768a094dbd40266\" + \" \" + ((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().featlist) || \"\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"jsx-768a094dbd40266\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"jsx-768a094dbd40266\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"/\",\n                                        className: \"jsx-768a094dbd40266\" + \" \" + ((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().signup) || \"\"),\n                                        children: \"Profile\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/index.tsx\",\n                                        lineNumber: 72,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/index.tsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"jsx-768a094dbd40266\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        className: \"jsx-768a094dbd40266\" + \" \" + ((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().signin) || \"\"),\n                                        children: \"Logout\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/index.tsx\",\n                                        lineNumber: 77,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/index.tsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/index.tsx\",\n                            lineNumber: 70,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/index.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 11\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"jsx-768a094dbd40266\" + \" \" + ((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().featlist) || \"\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"jsx-768a094dbd40266\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"jsx-768a094dbd40266\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"/auth/signup\",\n                                        className: \"jsx-768a094dbd40266\" + \" \" + ((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().signup) || \"\"),\n                                        children: \"Sign Up\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/index.tsx\",\n                                        lineNumber: 85,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/index.tsx\",\n                                    lineNumber: 84,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"jsx-768a094dbd40266\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"/auth/signin\",\n                                        className: \"jsx-768a094dbd40266\" + \" \" + ((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().signin) || \"\"),\n                                        children: \"Login\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/index.tsx\",\n                                        lineNumber: 90,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/index.tsx\",\n                                    lineNumber: 89,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/index.tsx\",\n                            lineNumber: 83,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/index.tsx\",\n                        lineNumber: 82,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/index.tsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"768a094dbd40266\",\n                children: \"body{margin:0px;padding:0px}\"\n            }, void 0, false, void 0, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"jsx-768a094dbd40266\",\n                children: shortened ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    className: \"jsx-768a094dbd40266\" + \" \" + ((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().hero) || \"\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"jsx-768a094dbd40266\",\n                            children: \"Shorten your URLs and share them easily!\"\n                        }, void 0, false, {\n                            fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/index.tsx\",\n                            lineNumber: 108,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {\n                            className: \"jsx-768a094dbd40266\"\n                        }, void 0, false, {\n                            fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/index.tsx\",\n                            lineNumber: 109,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"jsx-768a094dbd40266\",\n                            children: [\n                                \"Your shortened URL is\",\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"jsx-768a094dbd40266\",\n                                    children: [\n                                        \" \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: shortened,\n                                            target: \"_blank\",\n                                            className: \"jsx-768a094dbd40266\",\n                                            children: [\n                                                shortened,\n                                                \" \"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/index.tsx\",\n                                            lineNumber: 114,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/index.tsx\",\n                                    lineNumber: 112,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/index.tsx\",\n                            lineNumber: 110,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {\n                            className: \"jsx-768a094dbd40266\"\n                        }, void 0, false, {\n                            fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/index.tsx\",\n                            lineNumber: 119,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleReset,\n                            type: \"button\",\n                            className: \"jsx-768a094dbd40266\" + \" \" + ((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().button) || \"\"),\n                            children: \"Shorten another\"\n                        }, void 0, false, {\n                            fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/index.tsx\",\n                            lineNumber: 120,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/index.tsx\",\n                    lineNumber: 107,\n                    columnNumber: 11\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    className: \"jsx-768a094dbd40266\" + \" \" + ((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().hero) || \"\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"jsx-768a094dbd40266\",\n                            children: \"Shorten your URLs and share them easily!\"\n                        }, void 0, false, {\n                            fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/index.tsx\",\n                            lineNumber: 130,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {\n                            className: \"jsx-768a094dbd40266\"\n                        }, void 0, false, {\n                            fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/index.tsx\",\n                            lineNumber: 131,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            onSubmit: handleSubmit,\n                            className: \"jsx-768a094dbd40266\" + \" \" + ((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().form) || \"\"),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    required: true,\n                                    type: \"text\",\n                                    id: \"fname\",\n                                    name: \"fname\",\n                                    placeholder: \"Input original URL here\",\n                                    value: url,\n                                    onChange: (e)=>setUrl(e.target.value),\n                                    className: \"jsx-768a094dbd40266\" + \" \" + ((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().inputbox) || \"\")\n                                }, void 0, false, {\n                                    fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/index.tsx\",\n                                    lineNumber: 133,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"submit\",\n                                    className: \"jsx-768a094dbd40266\" + \" \" + ((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().button) || \"\"),\n                                    children: \"Shorten URL!\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/index.tsx\",\n                                    lineNumber: 143,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/index.tsx\",\n                            lineNumber: 132,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {\n                            className: \"jsx-768a094dbd40266\"\n                        }, void 0, false, {\n                            fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/index.tsx\",\n                            lineNumber: 147,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"jsx-768a094dbd40266\"\n                        }, void 0, false, {\n                            fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/index.tsx\",\n                            lineNumber: 148,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/index.tsx\",\n                    lineNumber: 129,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/index.tsx\",\n                lineNumber: 105,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/index.tsx\",\n        lineNumber: 65,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"Vq9PIHUEiRDkHczYEthN9br2oz0=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVM0M7c0VBQXZCYixxRUFBVzs7OENBQzFCLDhEQUFDeUQ7b0NBQ0NDLFFBQVE7b0NBRVJKLE1BQUs7b0NBQ0xLLElBQUc7b0NBQ0hDLE1BQUs7b0NBQ0xDLGFBQVk7b0NBQ1pDLE9BQU96RDtvQ0FDUDBELFVBQVUsQ0FBQ2pELElBQU1SLE9BQU9RLEVBQUVxQyxNQUFNLENBQUNXLEtBQUs7OEVBTjNCOUQseUVBQWU7Ozs7Ozs4Q0FRNUIsOERBQUNvRDtvQ0FBaUNFLE1BQUs7OEVBQXBCdEQsdUVBQWE7OENBQWdCOzs7Ozs7Ozs7Ozs7c0NBSWxELDhEQUFDaUQ7Ozs7Ozs7c0NBQ0QsOERBQUNnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWI7R0FuSndCN0Q7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgRm9ybUV2ZW50LCBGb3JtRXZlbnRIYW5kbGVyLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgZ2V0U2VydmVyU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGhcIjtcbmltcG9ydCB7IGF1dGhPcHRpb25zIH0gZnJvbSBcIi4vYXBpL2F1dGgvWy4uLm5leHRhdXRoXVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbdXJsLCBzZXRVcmxdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtzaG9ydGVuZWQsIHNldFNob3J0ZW5lZF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBzZXNzaW9uID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHNlc3Npb25TdGF0ID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbihhdXRoT3B0aW9ucyk7XG4gICAgcmV0dXJuIHNlc3Npb25TdGF0O1xuICB9O1xuICBjb25zb2xlLmxvZyhzZXNzaW9uKTtcblxuICAvKmNvbnN0IGhhbmRsZVNpZ25PdXQ6IEZvcm1FdmVudEhhbmRsZXI8SFRNTEZvcm1FbGVtZW50PiA9IGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc2lnbk91dCgpO1xuICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gIH07Ki9cblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZTogRm9ybUV2ZW50KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgLy8gQ3JlYXRlIGFuIG9iamVjdCB3aXRoIHRoZSBmb3JtIGRhdGFcbiAgICBjb25zdCBmb3JtRGF0YSA9IHtcbiAgICAgIHVybDogdXJsLFxuICAgICAgY3VzdG9tSGFzaDogXCJcIixcbiAgICB9O1xuXG4gICAgLy8gU2VuZCBhIFBPU1QgcmVxdWVzdCB0byB5b3VyIE5leHQuanMgQVBJIGVuZHBvaW50XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0hPU1R9L2FwaS9zaG9ydGVuLXVybGAsXG4gICAgICB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZm9ybURhdGEpLFxuICAgICAgfVxuICAgICk7XG5cbiAgICAvLyBIYW5kbGUgdGhlIHJlc3BvbnNlXG4gICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAvLyBSZXF1ZXN0IHdhcyBzdWNjZXNzZnVsXG4gICAgICBjb25zdCByZXNKU09OID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgY29uc29sZS5sb2cocmVzSlNPTik7IC8vIEhhbmRsZSB0aGUgcmVzcG9uc2UgZGF0YSBhcyBuZWVkZWRcbiAgICAgIGNvbnNvbGUubG9nKHJlc0pTT04uZGF0YS50b2tlbik7XG4gICAgICBzZXRTaG9ydGVuZWQoYGh0dHBzOi8vdGluZWUtdXJsLnZlcmNlbC5hcHAvLyR7cmVzSlNPTi5kYXRhLnRva2VufWApO1xuICAgICAgc2V0VXJsKFwiXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZXF1ZXN0IGZhaWxlZFxuICAgICAgY29uc29sZS5sb2coXCJSZXF1ZXN0IGZhaWxlZFwiKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUmVzZXQgPSAoKSA9PiB7XG4gICAgc2V0VXJsKFwiXCIpO1xuICAgIHNldFNob3J0ZW5lZChcIlwiKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGFnZX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XG4gICAgICAgIDxoMz4gVElORUUgVVJMIDwvaDM+XG4gICAgICAgIHtzZXNzaW9uID8gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmVhdGxpc3R9PlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9cIiBjbGFzc05hbWU9e3N0eWxlcy5zaWdudXB9PlxuICAgICAgICAgICAgICAgICAgUHJvZmlsZVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLnNpZ25pbn0+TG9nb3V0PC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZlYXRsaXN0fT5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvYXV0aC9zaWdudXBcIiBjbGFzc05hbWU9e3N0eWxlcy5zaWdudXB9PlxuICAgICAgICAgICAgICAgICAgU2lnbiBVcFxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvYXV0aC9zaWduaW5cIiBjbGFzc05hbWU9e3N0eWxlcy5zaWduaW59PlxuICAgICAgICAgICAgICAgICAgTG9naW5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgPG1haW4+XG4gICAgICAgIHtzaG9ydGVuZWQgPyAoXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuaGVyb30+XG4gICAgICAgICAgICA8aDE+U2hvcnRlbiB5b3VyIFVSTHMgYW5kIHNoYXJlIHRoZW0gZWFzaWx5ITwvaDE+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgWW91ciBzaG9ydGVuZWQgVVJMIGlze1wiIFwifVxuICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgICAgPGEgaHJlZj17c2hvcnRlbmVkfSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgIHtzaG9ydGVuZWR9e1wiIFwifVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVJlc2V0fVxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgU2hvcnRlbiBhbm90aGVyXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuaGVyb30+XG4gICAgICAgICAgICA8aDE+U2hvcnRlbiB5b3VyIFVSTHMgYW5kIHNoYXJlIHRoZW0gZWFzaWx5ITwvaDE+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17c3R5bGVzLmZvcm19IG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0Ym94fVxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBpZD1cImZuYW1lXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZm5hbWVcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSW5wdXQgb3JpZ2luYWwgVVJMIGhlcmVcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXt1cmx9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRVcmwoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0gdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgICAgIFNob3J0ZW4gVVJMIVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPHA+PC9wPlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgKX1cbiAgICAgIDwvbWFpbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ1c2VTdGF0ZSIsImdldFNlcnZlclNlc3Npb24iLCJhdXRoT3B0aW9ucyIsIkhvbWUiLCJ1cmwiLCJzZXRVcmwiLCJzaG9ydGVuZWQiLCJzZXRTaG9ydGVuZWQiLCJzZXNzaW9uIiwic2Vzc2lvblN0YXQiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZm9ybURhdGEiLCJjdXN0b21IYXNoIiwicmVzcG9uc2UiLCJmZXRjaCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19IT1NUIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwib2siLCJyZXNKU09OIiwianNvbiIsImRhdGEiLCJ0b2tlbiIsImhhbmRsZVJlc2V0IiwiZGl2IiwicGFnZSIsImhlYWRlciIsImgzIiwiZmVhdGxpc3QiLCJ1bCIsImxpIiwiYSIsImhyZWYiLCJzaWdudXAiLCJzaWduaW4iLCJtYWluIiwic2VjdGlvbiIsImhlcm8iLCJoMSIsImJyIiwic3BhbiIsInRhcmdldCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJ0eXBlIiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJyZXF1aXJlZCIsImlkIiwibmFtZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImlucHV0Ym94IiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});