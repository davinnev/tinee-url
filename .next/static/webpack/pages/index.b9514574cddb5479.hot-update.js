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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    const [url, setUrl] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [shortened, setShortened] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        // Create an object with the form data\n        const formData = {\n            url: url,\n            customHash: \"\"\n        };\n        // Send a POST request to your Next.js API endpoint\n        const response = await fetch(\"\".concat(\"http://localhost:3000/\", \"/api/shorten-url\"), {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(formData)\n        });\n        // Handle the response\n        if (response.ok) {\n            // Request was successful\n            const resJSON = await response.json();\n            console.log(resJSON); // Handle the response data as needed\n            console.log(resJSON.data.token);\n            setShortened(\"https://tinee-url.vercel.app/\".concat(resJSON.data.token));\n            setUrl(\"\");\n        } else {\n            // Request failed\n            console.log(\"Request failed\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jsx-768a094dbd40266\" + \" \" + ((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().page) || \"\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-768a094dbd40266\" + \" \" + ((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().header) || \"\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"jsx-768a094dbd40266\",\n                        children: \" TINEE URL \"\n                    }, void 0, false, {\n                        fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/index.js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"jsx-768a094dbd40266\" + \" \" + ((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().featlist) || \"\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"jsx-768a094dbd40266\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"jsx-768a094dbd40266\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"#\",\n                                        className: \"jsx-768a094dbd40266\",\n                                        children: \"Sign Up\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/index.js\",\n                                        lineNumber: 51,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/index.js\",\n                                    lineNumber: 50,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"jsx-768a094dbd40266\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"#\",\n                                        className: \"jsx-768a094dbd40266\",\n                                        children: \"Sign In\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/index.js\",\n                                        lineNumber: 54,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/index.js\",\n                                    lineNumber: 53,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/index.js\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/index.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/index.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"768a094dbd40266\",\n                children: \"body{margin:0px;padding:0px}\"\n            }, void 0, false, void 0, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"jsx-768a094dbd40266\",\n                children: shortened ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    className: \"jsx-768a094dbd40266\" + \" \" + ((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().hero) || \"\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"jsx-768a094dbd40266\",\n                            children: \"Shorten your URLs and share them easily!\"\n                        }, void 0, false, {\n                            fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/index.js\",\n                            lineNumber: 69,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {\n                            className: \"jsx-768a094dbd40266\"\n                        }, void 0, false, {\n                            fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/index.js\",\n                            lineNumber: 70,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"jsx-768a094dbd40266\",\n                            children: [\n                                \"Your shortened URL is\",\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"jsx-768a094dbd40266\",\n                                    children: [\n                                        \" \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: shortened,\n                                            target: \"_blank\",\n                                            className: \"jsx-768a094dbd40266\",\n                                            children: [\n                                                shortened,\n                                                \" \"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/index.js\",\n                                            lineNumber: 75,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/index.js\",\n                                    lineNumber: 73,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/index.js\",\n                            lineNumber: 71,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {\n                            className: \"jsx-768a094dbd40266\"\n                        }, void 0, false, {\n                            fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/index.js\",\n                            lineNumber: 80,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            href: \"\",\n                            type: \"\",\n                            className: \"jsx-768a094dbd40266\" + \" \" + ((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().button) || \"\"),\n                            children: \"Shorten another\"\n                        }, void 0, false, {\n                            fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/index.js\",\n                            lineNumber: 81,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/index.js\",\n                    lineNumber: 68,\n                    columnNumber: 11\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    className: \"jsx-768a094dbd40266\" + \" \" + ((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().hero) || \"\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"jsx-768a094dbd40266\",\n                            children: \"Shorten your URLs and share them easily!\"\n                        }, void 0, false, {\n                            fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/index.js\",\n                            lineNumber: 87,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {\n                            className: \"jsx-768a094dbd40266\"\n                        }, void 0, false, {\n                            fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/index.js\",\n                            lineNumber: 88,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            onSubmit: handleSubmit,\n                            className: \"jsx-768a094dbd40266\" + \" \" + ((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().form) || \"\"),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    id: \"fname\",\n                                    name: \"fname\",\n                                    placeholder: \"Input original URL here\",\n                                    value: url,\n                                    onChange: (e)=>setUrl(e.target.value),\n                                    className: \"jsx-768a094dbd40266\" + \" \" + ((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().inputbox) || \"\")\n                                }, void 0, false, {\n                                    fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/index.js\",\n                                    lineNumber: 90,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    href: \"\",\n                                    type: \"submit\",\n                                    className: \"jsx-768a094dbd40266\" + \" \" + ((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().button) || \"\"),\n                                    children: \"Shorten URL!\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/index.js\",\n                                    lineNumber: 99,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/index.js\",\n                            lineNumber: 89,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {\n                            className: \"jsx-768a094dbd40266\"\n                        }, void 0, false, {\n                            fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/index.js\",\n                            lineNumber: 103,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"jsx-768a094dbd40266\"\n                        }, void 0, false, {\n                            fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/index.js\",\n                            lineNumber: 104,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/index.js\",\n                    lineNumber: 86,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/index.js\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/index.js\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"Vq9PIHUEiRDkHczYEthN9br2oz0=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUE2QjtBQUNrQjtBQUNkO0FBRWxCLFNBQVNHOztJQUN0QixNQUFNLENBQUNDLEtBQUtDLE9BQU8sR0FBR0gsK0NBQVFBLENBQUM7SUFDL0IsTUFBTSxDQUFDSSxXQUFXQyxhQUFhLEdBQUdMLCtDQUFRQSxDQUFDO0lBRTNDLE1BQU1NLGVBQWUsT0FBT0M7UUFDMUJBLEVBQUVDLGNBQWM7UUFFaEIsc0NBQXNDO1FBQ3RDLE1BQU1DLFdBQVc7WUFDZlAsS0FBS0E7WUFDTFEsWUFBWTtRQUNkO1FBRUEsbURBQW1EO1FBQ25ELE1BQU1DLFdBQVcsTUFBTUMsTUFDckIsR0FBZ0MsT0FBN0JDLHdCQUE0QixFQUFDLHFCQUNoQztZQUNFRyxRQUFRO1lBQ1JDLFNBQVM7Z0JBQ1AsZ0JBQWdCO1lBQ2xCO1lBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQ1g7UUFDdkI7UUFHRixzQkFBc0I7UUFDdEIsSUFBSUUsU0FBU1UsRUFBRSxFQUFFO1lBQ2YseUJBQXlCO1lBQ3pCLE1BQU1DLFVBQVUsTUFBTVgsU0FBU1ksSUFBSTtZQUNuQ0MsUUFBUUMsR0FBRyxDQUFDSCxVQUFVLHFDQUFxQztZQUMzREUsUUFBUUMsR0FBRyxDQUFDSCxRQUFRSSxJQUFJLENBQUNDLEtBQUs7WUFDOUJ0QixhQUFhLGdDQUFtRCxPQUFuQmlCLFFBQVFJLElBQUksQ0FBQ0MsS0FBSztZQUMvRHhCLE9BQU87UUFDVCxPQUFPO1lBQ0wsaUJBQWlCO1lBQ2pCcUIsUUFBUUMsR0FBRyxDQUFDO1FBQ2Q7SUFDRjtJQUVBLHFCQUNFLDhEQUFDRztrREFBZTdCLHFFQUFXOzswQkFDekIsOERBQUM2QjswREFBZTdCLHVFQUFhOztrQ0FDM0IsOERBQUNnQzs7a0NBQUc7Ozs7OztrQ0FDSiw4REFBQ0g7a0VBQWU3Qix5RUFBZTtrQ0FDN0IsNEVBQUNrQzs7OzhDQUNDLDhEQUFDQzs7OENBQ0MsNEVBQUNDO3dDQUFFQyxNQUFLOztrREFBSTs7Ozs7Ozs7Ozs7OENBRWQsOERBQUNGOzs4Q0FDQyw0RUFBQ0M7d0NBQUVDLE1BQUs7O2tEQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFZcEIsOERBQUNDOzswQkFDRWpDLDBCQUNDLDhEQUFDa0M7OERBQW1CdkMscUVBQVc7O3NDQUM3Qiw4REFBQ3lDOztzQ0FBRzs7Ozs7O3NDQUNKLDhEQUFDQzs7Ozs7OztzQ0FDRCw4REFBQ1Y7OztnQ0FBRztnQ0FDb0I7OENBQ3RCLDhEQUFDVzs7O3dDQUNFO3NEQUNELDhEQUFDUDs0Q0FBRUMsTUFBTWhDOzRDQUFXdUMsUUFBTzs7O2dEQUN4QnZDO2dEQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQUlsQiw4REFBQ3FDOzs7Ozs7O3NDQUNELDhEQUFDRzs0QkFBaUNSLE1BQUs7NEJBQUdTLE1BQUs7c0VBQTVCOUMsdUVBQWE7c0NBQWtCOzs7Ozs7Ozs7Ozt5Q0FLcEQsOERBQUN1Qzs4REFBbUJ2QyxxRUFBVzs7c0NBQzdCLDhEQUFDeUM7O3NDQUFHOzs7Ozs7c0NBQ0osOERBQUNDOzs7Ozs7O3NDQUNELDhEQUFDSzs0QkFBNkJDLFVBQVV6QztzRUFBdkJQLHFFQUFXOzs4Q0FDMUIsOERBQUNpRDtvQ0FFQ0gsTUFBSztvQ0FDTEksSUFBRztvQ0FDSEMsTUFBSztvQ0FDTEMsYUFBWTtvQ0FDWkMsT0FBT2xEO29DQUNQbUQsVUFBVSxDQUFDOUMsSUFBTUosT0FBT0ksRUFBRW9DLE1BQU0sQ0FBQ1MsS0FBSzs4RUFOM0JyRCx5RUFBZTs7Ozs7OzhDQVE1Qiw4REFBQzZDO29DQUFpQ1IsTUFBSztvQ0FBR1MsTUFBSzs4RUFBNUI5Qyx1RUFBYTs4Q0FBd0I7Ozs7Ozs7Ozs7OztzQ0FJMUQsOERBQUMwQzs7Ozs7OztzQ0FDRCw4REFBQ2M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1iO0dBekd3QnREO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW3VybCwgc2V0VXJsXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbc2hvcnRlbmVkLCBzZXRTaG9ydGVuZWRdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAvLyBDcmVhdGUgYW4gb2JqZWN0IHdpdGggdGhlIGZvcm0gZGF0YVxuICAgIGNvbnN0IGZvcm1EYXRhID0ge1xuICAgICAgdXJsOiB1cmwsXG4gICAgICBjdXN0b21IYXNoOiBcIlwiLFxuICAgIH07XG5cbiAgICAvLyBTZW5kIGEgUE9TVCByZXF1ZXN0IHRvIHlvdXIgTmV4dC5qcyBBUEkgZW5kcG9pbnRcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfSE9TVH0vYXBpL3Nob3J0ZW4tdXJsYCxcbiAgICAgIHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShmb3JtRGF0YSksXG4gICAgICB9XG4gICAgKTtcblxuICAgIC8vIEhhbmRsZSB0aGUgcmVzcG9uc2VcbiAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgIC8vIFJlcXVlc3Qgd2FzIHN1Y2Nlc3NmdWxcbiAgICAgIGNvbnN0IHJlc0pTT04gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICBjb25zb2xlLmxvZyhyZXNKU09OKTsgLy8gSGFuZGxlIHRoZSByZXNwb25zZSBkYXRhIGFzIG5lZWRlZFxuICAgICAgY29uc29sZS5sb2cocmVzSlNPTi5kYXRhLnRva2VuKTtcbiAgICAgIHNldFNob3J0ZW5lZChgaHR0cHM6Ly90aW5lZS11cmwudmVyY2VsLmFwcC8ke3Jlc0pTT04uZGF0YS50b2tlbn1gKTtcbiAgICAgIHNldFVybChcIlwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmVxdWVzdCBmYWlsZWRcbiAgICAgIGNvbnNvbGUubG9nKFwiUmVxdWVzdCBmYWlsZWRcIik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYWdlfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cbiAgICAgICAgPGgzPiBUSU5FRSBVUkwgPC9oMz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mZWF0bGlzdH0+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlNpZ24gVXA8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlNpZ24gSW48L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgPG1haW4+XG4gICAgICAgIHtzaG9ydGVuZWQgPyAoXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuaGVyb30+XG4gICAgICAgICAgICA8aDE+U2hvcnRlbiB5b3VyIFVSTHMgYW5kIHNoYXJlIHRoZW0gZWFzaWx5ITwvaDE+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgWW91ciBzaG9ydGVuZWQgVVJMIGlze1wiIFwifVxuICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgICAgPGEgaHJlZj17c2hvcnRlbmVkfSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgIHtzaG9ydGVuZWR9e1wiIFwifVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259IGhyZWY9XCJcIiB0eXBlPVwiXCI+XG4gICAgICAgICAgICAgIFNob3J0ZW4gYW5vdGhlclxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmhlcm99PlxuICAgICAgICAgICAgPGgxPlNob3J0ZW4geW91ciBVUkxzIGFuZCBzaGFyZSB0aGVtIGVhc2lseSE8L2gxPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e3N0eWxlcy5mb3JtfSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRib3h9XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIGlkPVwiZm5hbWVcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJmbmFtZVwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJJbnB1dCBvcmlnaW5hbCBVUkwgaGVyZVwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3VybH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFVybChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufSBocmVmPVwiXCIgdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgICAgIFNob3J0ZW4gVVJMIVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPHA+PC9wPlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgKX1cbiAgICAgIDwvbWFpbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwic3R5bGVzIiwidXNlU3RhdGUiLCJIb21lIiwidXJsIiwic2V0VXJsIiwic2hvcnRlbmVkIiwic2V0U2hvcnRlbmVkIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZm9ybURhdGEiLCJjdXN0b21IYXNoIiwicmVzcG9uc2UiLCJmZXRjaCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19IT1NUIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwib2siLCJyZXNKU09OIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwidG9rZW4iLCJkaXYiLCJwYWdlIiwiaGVhZGVyIiwiaDMiLCJmZWF0bGlzdCIsInVsIiwibGkiLCJhIiwiaHJlZiIsIm1haW4iLCJzZWN0aW9uIiwiaGVybyIsImgxIiwiYnIiLCJzcGFuIiwidGFyZ2V0IiwiYnV0dG9uIiwidHlwZSIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwiaWQiLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiaW5wdXRib3giLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});