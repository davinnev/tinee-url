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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const [url, setUrl] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [shortened, setShortened] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const handleSignOut = async (e)=>{\n        e.preventDefault();\n        const result = await signOut();\n        console.log(result);\n    };\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        // Create an object with the form data\n        const formData = {\n            url: url,\n            customHash: \"\"\n        };\n        // Send a POST request to your Next.js API endpoint\n        const response = await fetch(\"\".concat(\"http://localhost:3000\", \"/api/shorten-url\"), {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(formData)\n        });\n        // Handle the response\n        if (response.ok) {\n            // Request was successful\n            const resJSON = await response.json();\n            console.log(resJSON); // Handle the response data as needed\n            console.log(resJSON.data.token);\n            setShortened(\"https://tinee-url.vercel.app//\".concat(resJSON.data.token));\n            setUrl(\"\");\n        } else {\n            // Request failed\n            console.log(\"Request failed\");\n        }\n    };\n    const handleReset = ()=>{\n        setUrl(\"\");\n        setShortened(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jsx-768a094dbd40266\" + \" \" + ((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().page) || \"\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-768a094dbd40266\" + \" \" + ((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().header) || \"\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"jsx-768a094dbd40266\",\n                        children: \" TINEE URL \"\n                    }, void 0, false, {\n                        fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/index.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this),\n                    session ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"jsx-768a094dbd40266\" + \" \" + ((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().featlist) || \"\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"jsx-768a094dbd40266\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"jsx-768a094dbd40266\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"/\",\n                                        className: \"jsx-768a094dbd40266\" + \" \" + ((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().signup) || \"\"),\n                                        children: \"Profile\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/index.tsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/index.tsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"jsx-768a094dbd40266\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        onClick: handleSignOut,\n                                        className: \"jsx-768a094dbd40266\" + \" \" + ((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().signin) || \"\"),\n                                        children: \"Logout\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/index.tsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/index.tsx\",\n                                    lineNumber: 69,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/index.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/index.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 11\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"jsx-768a094dbd40266\" + \" \" + ((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().featlist) || \"\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"jsx-768a094dbd40266\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"jsx-768a094dbd40266\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"/auth/signup\",\n                                        className: \"jsx-768a094dbd40266\" + \" \" + ((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().signup) || \"\"),\n                                        children: \"Sign Up\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/index.tsx\",\n                                        lineNumber: 80,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/index.tsx\",\n                                    lineNumber: 79,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"jsx-768a094dbd40266\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"/auth/signin\",\n                                        className: \"jsx-768a094dbd40266\" + \" \" + ((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().signin) || \"\"),\n                                        children: \"Login\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/index.tsx\",\n                                        lineNumber: 85,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/index.tsx\",\n                                    lineNumber: 84,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/index.tsx\",\n                            lineNumber: 78,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/index.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/index.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"768a094dbd40266\",\n                children: \"body{margin:0px;padding:0px}\"\n            }, void 0, false, void 0, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"jsx-768a094dbd40266\",\n                children: shortened ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    className: \"jsx-768a094dbd40266\" + \" \" + ((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().hero) || \"\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"jsx-768a094dbd40266\",\n                            children: \"Shorten your URLs and share them easily!\"\n                        }, void 0, false, {\n                            fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/index.tsx\",\n                            lineNumber: 103,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {\n                            className: \"jsx-768a094dbd40266\"\n                        }, void 0, false, {\n                            fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/index.tsx\",\n                            lineNumber: 104,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"jsx-768a094dbd40266\",\n                            children: [\n                                \"Your shortened URL is\",\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"jsx-768a094dbd40266\",\n                                    children: [\n                                        \" \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: shortened,\n                                            target: \"_blank\",\n                                            className: \"jsx-768a094dbd40266\",\n                                            children: [\n                                                shortened,\n                                                \" \"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/index.tsx\",\n                                            lineNumber: 109,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/index.tsx\",\n                                    lineNumber: 107,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/index.tsx\",\n                            lineNumber: 105,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {\n                            className: \"jsx-768a094dbd40266\"\n                        }, void 0, false, {\n                            fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/index.tsx\",\n                            lineNumber: 114,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleReset,\n                            type: \"button\",\n                            className: \"jsx-768a094dbd40266\" + \" \" + ((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().button) || \"\"),\n                            children: \"Shorten another\"\n                        }, void 0, false, {\n                            fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/index.tsx\",\n                            lineNumber: 115,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/index.tsx\",\n                    lineNumber: 102,\n                    columnNumber: 11\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    className: \"jsx-768a094dbd40266\" + \" \" + ((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().hero) || \"\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"jsx-768a094dbd40266\",\n                            children: \"Shorten your URLs and share them easily!\"\n                        }, void 0, false, {\n                            fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/index.tsx\",\n                            lineNumber: 125,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {\n                            className: \"jsx-768a094dbd40266\"\n                        }, void 0, false, {\n                            fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/index.tsx\",\n                            lineNumber: 126,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            onSubmit: handleSubmit,\n                            className: \"jsx-768a094dbd40266\" + \" \" + ((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().form) || \"\"),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    required: true,\n                                    type: \"text\",\n                                    id: \"fname\",\n                                    name: \"fname\",\n                                    placeholder: \"Input original URL here\",\n                                    value: url,\n                                    onChange: (e)=>setUrl(e.target.value),\n                                    className: \"jsx-768a094dbd40266\" + \" \" + ((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().inputbox) || \"\")\n                                }, void 0, false, {\n                                    fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/index.tsx\",\n                                    lineNumber: 128,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"submit\",\n                                    className: \"jsx-768a094dbd40266\" + \" \" + ((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().button) || \"\"),\n                                    children: \"Shorten URL!\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/index.tsx\",\n                                    lineNumber: 138,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/index.tsx\",\n                            lineNumber: 127,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {\n                            className: \"jsx-768a094dbd40266\"\n                        }, void 0, false, {\n                            fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/index.tsx\",\n                            lineNumber: 142,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"jsx-768a094dbd40266\"\n                        }, void 0, false, {\n                            fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/index.tsx\",\n                            lineNumber: 143,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/index.tsx\",\n                    lineNumber: 124,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/index.tsx\",\n                lineNumber: 100,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/index.tsx\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"Vq9PIHUEiRDkHczYEthN9br2oz0=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QzFCLDhEQUFDeUQ7b0NBQ0NDLFFBQVE7b0NBRVJKLE1BQUs7b0NBQ0xLLElBQUc7b0NBQ0hDLE1BQUs7b0NBQ0xDLGFBQVk7b0NBQ1pDLE9BQU8zRDtvQ0FDUDRELFVBQVUsQ0FBQ3ZELElBQU1KLE9BQU9JLEVBQUU0QyxNQUFNLENBQUNVLEtBQUs7OEVBTjNCOUQseUVBQWU7Ozs7Ozs4Q0FRNUIsOERBQUNxRDtvQ0FBaUNDLE1BQUs7OEVBQXBCdEQsdUVBQWE7OENBQWdCOzs7Ozs7Ozs7Ozs7c0NBSWxELDhEQUFDa0Q7Ozs7Ozs7c0NBQ0QsOERBQUNlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNYjtHQS9Jd0IvRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyBGb3JtRXZlbnQsIEZvcm1FdmVudEhhbmRsZXIsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBnZXRTZXJ2ZXJTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbdXJsLCBzZXRVcmxdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtzaG9ydGVuZWQsIHNldFNob3J0ZW5lZF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBoYW5kbGVTaWduT3V0OiBGb3JtRXZlbnRIYW5kbGVyPEhUTUxGb3JtRWxlbWVudD4gPSBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHNpZ25PdXQoKTtcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlOiBGb3JtRXZlbnQpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAvLyBDcmVhdGUgYW4gb2JqZWN0IHdpdGggdGhlIGZvcm0gZGF0YVxuICAgIGNvbnN0IGZvcm1EYXRhID0ge1xuICAgICAgdXJsOiB1cmwsXG4gICAgICBjdXN0b21IYXNoOiBcIlwiLFxuICAgIH07XG5cbiAgICAvLyBTZW5kIGEgUE9TVCByZXF1ZXN0IHRvIHlvdXIgTmV4dC5qcyBBUEkgZW5kcG9pbnRcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfSE9TVH0vYXBpL3Nob3J0ZW4tdXJsYCxcbiAgICAgIHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShmb3JtRGF0YSksXG4gICAgICB9XG4gICAgKTtcblxuICAgIC8vIEhhbmRsZSB0aGUgcmVzcG9uc2VcbiAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgIC8vIFJlcXVlc3Qgd2FzIHN1Y2Nlc3NmdWxcbiAgICAgIGNvbnN0IHJlc0pTT04gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICBjb25zb2xlLmxvZyhyZXNKU09OKTsgLy8gSGFuZGxlIHRoZSByZXNwb25zZSBkYXRhIGFzIG5lZWRlZFxuICAgICAgY29uc29sZS5sb2cocmVzSlNPTi5kYXRhLnRva2VuKTtcbiAgICAgIHNldFNob3J0ZW5lZChgaHR0cHM6Ly90aW5lZS11cmwudmVyY2VsLmFwcC8vJHtyZXNKU09OLmRhdGEudG9rZW59YCk7XG4gICAgICBzZXRVcmwoXCJcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlcXVlc3QgZmFpbGVkXG4gICAgICBjb25zb2xlLmxvZyhcIlJlcXVlc3QgZmFpbGVkXCIpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVSZXNldCA9ICgpID0+IHtcbiAgICBzZXRVcmwoXCJcIik7XG4gICAgc2V0U2hvcnRlbmVkKFwiXCIpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYWdlfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cbiAgICAgICAgPGgzPiBUSU5FRSBVUkwgPC9oMz5cbiAgICAgICAge3Nlc3Npb24gPyAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mZWF0bGlzdH0+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiIGNsYXNzTmFtZT17c3R5bGVzLnNpZ251cH0+XG4gICAgICAgICAgICAgICAgICBQcm9maWxlXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGEgb25DbGljaz17aGFuZGxlU2lnbk91dH0gY2xhc3NOYW1lPXtzdHlsZXMuc2lnbmlufT5cbiAgICAgICAgICAgICAgICAgIExvZ291dFxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mZWF0bGlzdH0+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2F1dGgvc2lnbnVwXCIgY2xhc3NOYW1lPXtzdHlsZXMuc2lnbnVwfT5cbiAgICAgICAgICAgICAgICAgIFNpZ24gVXBcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2F1dGgvc2lnbmluXCIgY2xhc3NOYW1lPXtzdHlsZXMuc2lnbmlufT5cbiAgICAgICAgICAgICAgICAgIExvZ2luXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG5cbiAgICAgIDxtYWluPlxuICAgICAgICB7c2hvcnRlbmVkID8gKFxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmhlcm99PlxuICAgICAgICAgICAgPGgxPlNob3J0ZW4geW91ciBVUkxzIGFuZCBzaGFyZSB0aGVtIGVhc2lseSE8L2gxPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgIFlvdXIgc2hvcnRlbmVkIFVSTCBpc3tcIiBcIn1cbiAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e3Nob3J0ZW5lZH0gdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICB7c2hvcnRlbmVkfXtcIiBcIn1cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufVxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVSZXNldH1cbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFNob3J0ZW4gYW5vdGhlclxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmhlcm99PlxuICAgICAgICAgICAgPGgxPlNob3J0ZW4geW91ciBVUkxzIGFuZCBzaGFyZSB0aGVtIGVhc2lseSE8L2gxPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e3N0eWxlcy5mb3JtfSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dGJveH1cbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgaWQ9XCJmbmFtZVwiXG4gICAgICAgICAgICAgICAgbmFtZT1cImZuYW1lXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIklucHV0IG9yaWdpbmFsIFVSTCBoZXJlXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dXJsfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXJsKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259IHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgICBTaG9ydGVuIFVSTCFcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxwPjwvcD5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICl9XG4gICAgICA8L21haW4+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsic3R5bGVzIiwidXNlU3RhdGUiLCJIb21lIiwidXJsIiwic2V0VXJsIiwic2hvcnRlbmVkIiwic2V0U2hvcnRlbmVkIiwiaGFuZGxlU2lnbk91dCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlc3VsdCIsInNpZ25PdXQiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlU3VibWl0IiwiZm9ybURhdGEiLCJjdXN0b21IYXNoIiwicmVzcG9uc2UiLCJmZXRjaCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19IT1NUIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwib2siLCJyZXNKU09OIiwianNvbiIsImRhdGEiLCJ0b2tlbiIsImhhbmRsZVJlc2V0IiwiZGl2IiwicGFnZSIsImhlYWRlciIsImgzIiwic2Vzc2lvbiIsImZlYXRsaXN0IiwidWwiLCJsaSIsImEiLCJocmVmIiwic2lnbnVwIiwib25DbGljayIsInNpZ25pbiIsIm1haW4iLCJzZWN0aW9uIiwiaGVybyIsImgxIiwiYnIiLCJzcGFuIiwidGFyZ2V0IiwiYnV0dG9uIiwidHlwZSIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwicmVxdWlyZWQiLCJpZCIsIm5hbWUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJpbnB1dGJveCIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});