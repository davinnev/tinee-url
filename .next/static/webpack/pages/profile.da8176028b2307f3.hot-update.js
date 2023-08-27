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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_url_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/url-card */ \"./components/url-card/index.tsx\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst ProfilePage = ()=>{\n    _s();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [userUrls, setUserUrls] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const { status, data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchUser = async ()=>{\n            const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.getSession)();\n            if (session) {\n                setUser(session.user);\n            }\n        };\n        fetchUser();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            if (user) {\n                console.log(\"User: \", user);\n                const response = await fetch(\"\".concat(\"http://localhost:3000\", \"/api/profile-data\"), {\n                    method: \"POST\",\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    },\n                    body: JSON.stringify({\n                        username: user.name\n                    })\n                });\n                const res = await response.json();\n                console.log(res);\n                setUserUrls(res.data);\n                console.log(userUrls);\n            }\n        };\n        fetchData();\n    }, [\n        user\n    ]);\n    const handleSignOut = async ()=>{\n        await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.signOut)();\n        window.location.href = \"\".concat(\"http://localhost:3000\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"style\", {\n                    children: \"\\n          html,\\n          body {\\n            margin: 0;\\n            padding: 0;\\n          }\\n        \"\n                }, void 0, false, {\n                    fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/profile.tsx\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/profile.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    height: \"100vh\",\n                    fontFamily: \"Helvetica\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            flex: \"0 0 20%\",\n                            backgroundColor: \"#273043\",\n                            color: \"#fff\",\n                            padding: \"20px\",\n                            paddingLeft: \"30px\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: \"User Profile\"\n                            }, void 0, false, {\n                                fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/profile.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 11\n                            }, undefined),\n                            user && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        children: \"Username \"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/profile.tsx\",\n                                        lineNumber: 81,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        style: {\n                                            fontStyle: \"italic\"\n                                        },\n                                        children: user.name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/profile.tsx\",\n                                        lineNumber: 82,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        children: \"Account Creation Date \"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/profile.tsx\",\n                                        lineNumber: 83,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        style: {\n                                            fontStyle: \"italic\"\n                                        },\n                                        children: user.email\n                                    }, void 0, false, {\n                                        fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/profile.tsx\",\n                                        lineNumber: 84,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        children: \"Account Tier\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/profile.tsx\",\n                                        lineNumber: 85,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        style: {\n                                            fontStyle: \"italic\"\n                                        },\n                                        children: \"Free\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/profile.tsx\",\n                                        lineNumber: 86,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                style: {\n                                    position: \"fixed\",\n                                    bottom: \"20px\",\n                                    left: \"10%\",\n                                    transform: \"translateX(-50%)\",\n                                    marginBottom: \"20px\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        onClick: handleSignOut,\n                                        style: {\n                                            textDecoration: \"none\",\n                                            fontSize: \"15px\",\n                                            borderRadius: \"15px\",\n                                            padding: \"10px\",\n                                            paddingLeft: \"25px\",\n                                            paddingRight: \"25px\",\n                                            border: \"2px solid #fff\",\n                                            backgroundColor: \"#fff\",\n                                            color: \"#273043\",\n                                            cursor: \"pointer\"\n                                        },\n                                        children: \"Logout\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/profile.tsx\",\n                                        lineNumber: 99,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"/\",\n                                        style: {\n                                            textDecoration: \"none\",\n                                            fontSize: \"15px\",\n                                            borderRadius: \"15px\",\n                                            padding: \"10px\",\n                                            paddingLeft: \"25px\",\n                                            paddingRight: \"25px\",\n                                            border: \"2px solid #9bc7da\",\n                                            backgroundColor: \"#9bc7da\",\n                                            color: \"#273043\",\n                                            marginLeft: \"15px\",\n                                            cursor: \"pointer\"\n                                        },\n                                        children: \"Home\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/profile.tsx\",\n                                        lineNumber: 116,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/profile.tsx\",\n                                lineNumber: 90,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/profile.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            flex: \"0 0 80%\",\n                            padding: \"20px\"\n                        },\n                        children: userUrls.map((userUrl)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_url_card__WEBPACK_IMPORTED_MODULE_2__.URLCard, {\n                                        url: userUrl.url,\n                                        token: userUrl.hash,\n                                        createDate: userUrl.createDate,\n                                        expiredDate: userUrl.expiredDate\n                                    }, void 0, false, {\n                                        fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/profile.tsx\",\n                                        lineNumber: 140,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/profile.tsx\",\n                                        lineNumber: 146,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/profile.tsx\",\n                                lineNumber: 139,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/profile.tsx\",\n                        lineNumber: 136,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/davinnevaleria/Desktop/Not uni coding/tinee-url/pages/profile.tsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(ProfilePage, \"gygPGakZetSmoHbHJj62eYsYY3U=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession\n    ];\n});\n_c = ProfilePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProfilePage);\nvar _c;\n$RefreshReg$(_c, \"ProfilePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9maWxlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDRjtBQUNwQjtBQU1KO0FBRXpCLE1BQU1RLGNBQWM7O0lBQ2xCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHUiwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNTLFVBQVVDLFlBQVksR0FBR1YsK0NBQVFBLENBQUMsRUFBRTtJQUMzQyxNQUFNLEVBQUVXLE1BQU0sRUFBRUMsTUFBTUMsT0FBTyxFQUFFLEdBQUdWLDJEQUFVQTtJQUU1Q0osZ0RBQVNBLENBQUM7UUFDUixNQUFNZSxZQUFZO1lBQ2hCLE1BQU1ELFVBQVUsTUFBTVIsMkRBQVVBO1lBQ2hDLElBQUlRLFNBQVM7Z0JBQ1hMLFFBQVFLLFFBQVFOLElBQUk7WUFDdEI7UUFDRjtRQUVBTztJQUNGLEdBQUcsRUFBRTtJQUVMZixnREFBU0EsQ0FBQztRQUNSLE1BQU1nQixZQUFZO1lBQ2hCLElBQUlSLE1BQU07Z0JBQ1JTLFFBQVFDLEdBQUcsQ0FBQyxVQUFVVjtnQkFDdEIsTUFBTVcsV0FBVyxNQUFNQyxNQUNyQixHQUFnQyxPQUE3QkMsdUJBQTRCLEVBQUMsc0JBQ2hDO29CQUNFRyxRQUFRO29CQUNSQyxTQUFTO3dCQUNQLGdCQUFnQjtvQkFDbEI7b0JBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQzt3QkFBRUMsVUFBVXJCLEtBQUtzQixJQUFJO29CQUFDO2dCQUM3QztnQkFFRixNQUFNQyxNQUFNLE1BQU1aLFNBQVNhLElBQUk7Z0JBQy9CZixRQUFRQyxHQUFHLENBQUNhO2dCQUNacEIsWUFBWW9CLElBQUlsQixJQUFJO2dCQUNwQkksUUFBUUMsR0FBRyxDQUFDUjtZQUNkO1FBQ0Y7UUFDQU07SUFDRixHQUFHO1FBQUNSO0tBQUs7SUFFVCxNQUFNeUIsZ0JBQWdCO1FBQ3BCLE1BQU01Qix3REFBT0E7UUFDYjZCLE9BQU9DLFFBQVEsQ0FBQ0MsSUFBSSxHQUFHLEdBQWdDLE9BQTdCZix1QkFBNEI7SUFDeEQ7SUFFQSxxQkFDRTs7MEJBQ0UsOERBQUNsQixrREFBSUE7MEJBQ0gsNEVBQUNrQzs4QkFBUTs7Ozs7Ozs7Ozs7MEJBUVgsOERBQUNDO2dCQUNDRCxPQUFPO29CQUFFRSxTQUFTO29CQUFRQyxRQUFRO29CQUFTQyxZQUFZO2dCQUFZOztrQ0FFbkUsOERBQUNIO3dCQUNDRCxPQUFPOzRCQUNMSyxNQUFNOzRCQUNOQyxpQkFBaUI7NEJBQ2pCQyxPQUFPOzRCQUNQQyxTQUFTOzRCQUNUQyxhQUFhO3dCQUNmOzswQ0FFQSw4REFBQ0M7MENBQUc7Ozs7Ozs0QkFDSHZDLHNCQUNDOztrREFDRSw4REFBQ3dDO2tEQUFHOzs7Ozs7a0RBQ0osOERBQUNDO3dDQUFFWixPQUFPOzRDQUFFYSxXQUFXO3dDQUFTO2tEQUFJMUMsS0FBS3NCLElBQUk7Ozs7OztrREFDN0MsOERBQUNrQjtrREFBRzs7Ozs7O2tEQUNKLDhEQUFDQzt3Q0FBRVosT0FBTzs0Q0FBRWEsV0FBVzt3Q0FBUztrREFBSTFDLEtBQUsyQyxLQUFLOzs7Ozs7a0RBQzlDLDhEQUFDSDtrREFBRzs7Ozs7O2tEQUNKLDhEQUFDQzt3Q0FBRVosT0FBTzs0Q0FBRWEsV0FBVzt3Q0FBUztrREFBRzs7Ozs7Ozs7MENBSXZDLDhEQUFDWjtnQ0FDQ0QsT0FBTztvQ0FDTGUsVUFBVTtvQ0FDVkMsUUFBUTtvQ0FDUkMsTUFBTTtvQ0FDTkMsV0FBVztvQ0FDWEMsY0FBYztnQ0FDaEI7O2tEQUVBLDhEQUFDQzt3Q0FDQ0MsU0FBU3pCO3dDQUNUSSxPQUFPOzRDQUNMc0IsZ0JBQWdCOzRDQUNoQkMsVUFBVTs0Q0FDVkMsY0FBYzs0Q0FDZGhCLFNBQVM7NENBQ1RDLGFBQWE7NENBQ2JnQixjQUFjOzRDQUNkQyxRQUFROzRDQUNScEIsaUJBQWlCOzRDQUNqQkMsT0FBTzs0Q0FDUG9CLFFBQVE7d0NBQ1Y7a0RBQ0Q7Ozs7OztrREFHRCw4REFBQ1A7d0NBQ0NyQixNQUFLO3dDQUNMQyxPQUFPOzRDQUNMc0IsZ0JBQWdCOzRDQUNoQkMsVUFBVTs0Q0FDVkMsY0FBYzs0Q0FDZGhCLFNBQVM7NENBQ1RDLGFBQWE7NENBQ2JnQixjQUFjOzRDQUNkQyxRQUFROzRDQUNScEIsaUJBQWlCOzRDQUNqQkMsT0FBTzs0Q0FDUHFCLFlBQVk7NENBQ1pELFFBQVE7d0NBQ1Y7a0RBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FLTCw4REFBQzFCO3dCQUFJRCxPQUFPOzRCQUFFSyxNQUFNOzRCQUFXRyxTQUFTO3dCQUFPO2tDQUU1Q25DLFNBQVN3RCxHQUFHLENBQUMsQ0FBQ0Msd0JBQ2IsOERBQUM3Qjs7a0RBQ0MsOERBQUNwQyx5REFBT0E7d0NBQ05rRSxLQUFLRCxRQUFRQyxHQUFHO3dDQUNoQkMsT0FBT0YsUUFBUUcsSUFBSTt3Q0FDbkJDLFlBQVlKLFFBQVFJLFVBQVU7d0NBQzlCQyxhQUFhTCxRQUFRSyxXQUFXOzs7Ozs7a0RBRWxDLDhEQUFDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2Y7R0E5SU1sRTs7UUFHOEJILHVEQUFVQTs7O0tBSHhDRztBQWdKTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wcm9maWxlLnRzeD9kY2U1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBVUkxDYXJkIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvdXJsLWNhcmRcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7XG4gIHVzZVNlc3Npb24sXG4gIHNpZ25PdXQsXG4gIGdldFNlc3Npb24sXG4gIEdldFNlc3Npb25QYXJhbXMsXG59IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcblxuY29uc3QgUHJvZmlsZVBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbdXNlclVybHMsIHNldFVzZXJVcmxzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgeyBzdGF0dXMsIGRhdGE6IHNlc3Npb24gfSA9IHVzZVNlc3Npb24oKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoVXNlciA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKCk7XG4gICAgICBpZiAoc2Vzc2lvbikge1xuICAgICAgICBzZXRVc2VyKHNlc3Npb24udXNlcik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZldGNoVXNlcigpO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICBpZiAodXNlcikge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlVzZXI6IFwiLCB1c2VyKTtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgICBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19IT1NUfS9hcGkvcHJvZmlsZS1kYXRhYCxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHVzZXJuYW1lOiB1c2VyLm5hbWUgfSksXG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgIHNldFVzZXJVcmxzKHJlcy5kYXRhKTtcbiAgICAgICAgY29uc29sZS5sb2codXNlclVybHMpO1xuICAgICAgfVxuICAgIH07XG4gICAgZmV0Y2hEYXRhKCk7XG4gIH0sIFt1c2VyXSk7XG5cbiAgY29uc3QgaGFuZGxlU2lnbk91dCA9IGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBzaWduT3V0KCk7XG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19IT1NUfWA7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxzdHlsZT57YFxuICAgICAgICAgIGh0bWwsXG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgaGVpZ2h0OiBcIjEwMHZoXCIsIGZvbnRGYW1pbHk6IFwiSGVsdmV0aWNhXCIgfX1cbiAgICAgID5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBmbGV4OiBcIjAgMCAyMCVcIixcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMjczMDQzXCIsXG4gICAgICAgICAgICBjb2xvcjogXCIjZmZmXCIsXG4gICAgICAgICAgICBwYWRkaW5nOiBcIjIwcHhcIixcbiAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiBcIjMwcHhcIixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGgxPlVzZXIgUHJvZmlsZTwvaDE+XG4gICAgICAgICAge3VzZXIgJiYgKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPGgzPlVzZXJuYW1lIDwvaDM+XG4gICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRTdHlsZTogXCJpdGFsaWNcIiB9fT57dXNlci5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgPGgzPkFjY291bnQgQ3JlYXRpb24gRGF0ZSA8L2gzPlxuICAgICAgICAgICAgICA8cCBzdHlsZT17eyBmb250U3R5bGU6IFwiaXRhbGljXCIgfX0+e3VzZXIuZW1haWx9PC9wPlxuICAgICAgICAgICAgICA8aDM+QWNjb3VudCBUaWVyPC9oMz5cbiAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgZm9udFN0eWxlOiBcIml0YWxpY1wiIH19PkZyZWU8L3A+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgcG9zaXRpb246IFwiZml4ZWRcIixcbiAgICAgICAgICAgICAgYm90dG9tOiBcIjIwcHhcIixcbiAgICAgICAgICAgICAgbGVmdDogXCIxMCVcIixcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVgoLTUwJSlcIixcbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjIwcHhcIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU2lnbk91dH1cbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTVweFwiLFxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIxNXB4XCIsXG4gICAgICAgICAgICAgICAgcGFkZGluZzogXCIxMHB4XCIsXG4gICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IFwiMjVweFwiLFxuICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogXCIyNXB4XCIsXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBcIjJweCBzb2xpZCAjZmZmXCIsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZmZcIixcbiAgICAgICAgICAgICAgICBjb2xvcjogXCIjMjczMDQzXCIsXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgTG9nb3V0XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPVwiL1wiXG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE1cHhcIixcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMTVweFwiLFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMTBweFwiLFxuICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiBcIjI1cHhcIixcbiAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IFwiMjVweFwiLFxuICAgICAgICAgICAgICAgIGJvcmRlcjogXCIycHggc29saWQgIzliYzdkYVwiLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjOWJjN2RhXCIsXG4gICAgICAgICAgICAgICAgY29sb3I6IFwiIzI3MzA0M1wiLFxuICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiMTVweFwiLFxuICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEhvbWVcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZmxleDogXCIwIDAgODAlXCIsIHBhZGRpbmc6IFwiMjBweFwiIH19PlxuICAgICAgICAgIHsvKiBSaWdodCBwYXJ0IGNvbnRlbnQgKi99XG4gICAgICAgICAge3VzZXJVcmxzLm1hcCgodXNlclVybCkgPT4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPFVSTENhcmRcbiAgICAgICAgICAgICAgICB1cmw9e3VzZXJVcmwudXJsfVxuICAgICAgICAgICAgICAgIHRva2VuPXt1c2VyVXJsLmhhc2h9XG4gICAgICAgICAgICAgICAgY3JlYXRlRGF0ZT17dXNlclVybC5jcmVhdGVEYXRlfVxuICAgICAgICAgICAgICAgIGV4cGlyZWREYXRlPXt1c2VyVXJsLmV4cGlyZWREYXRlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZVBhZ2U7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlVSTENhcmQiLCJIZWFkIiwidXNlU2Vzc2lvbiIsInNpZ25PdXQiLCJnZXRTZXNzaW9uIiwiUHJvZmlsZVBhZ2UiLCJ1c2VyIiwic2V0VXNlciIsInVzZXJVcmxzIiwic2V0VXNlclVybHMiLCJzdGF0dXMiLCJkYXRhIiwic2Vzc2lvbiIsImZldGNoVXNlciIsImZldGNoRGF0YSIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZSIsImZldGNoIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0hPU1QiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1c2VybmFtZSIsIm5hbWUiLCJyZXMiLCJqc29uIiwiaGFuZGxlU2lnbk91dCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInN0eWxlIiwiZGl2IiwiZGlzcGxheSIsImhlaWdodCIsImZvbnRGYW1pbHkiLCJmbGV4IiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJwYWRkaW5nIiwicGFkZGluZ0xlZnQiLCJoMSIsImgzIiwicCIsImZvbnRTdHlsZSIsImVtYWlsIiwicG9zaXRpb24iLCJib3R0b20iLCJsZWZ0IiwidHJhbnNmb3JtIiwibWFyZ2luQm90dG9tIiwiYSIsIm9uQ2xpY2siLCJ0ZXh0RGVjb3JhdGlvbiIsImZvbnRTaXplIiwiYm9yZGVyUmFkaXVzIiwicGFkZGluZ1JpZ2h0IiwiYm9yZGVyIiwiY3Vyc29yIiwibWFyZ2luTGVmdCIsIm1hcCIsInVzZXJVcmwiLCJ1cmwiLCJ0b2tlbiIsImhhc2giLCJjcmVhdGVEYXRlIiwiZXhwaXJlZERhdGUiLCJiciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/profile.tsx\n"));

/***/ })

});