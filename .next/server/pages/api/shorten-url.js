"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/shorten-url";
exports.ids = ["pages/api/shorten-url"];
exports.modules = {

/***/ "(api)/./pages/api/shorten-url/index.ts":
/*!****************************************!*\
  !*** ./pages/api/shorten-url/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    if (req.method === \"POST\") {\n        // Subscribe\n        //const { url, customHash } = req.body;\n        //let lambdaRes = null;\n        try {\n            const response = await (await fetch(process.env.LAMBDA_SHORTEN_URL, {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(req.body)\n            })).json();\n            console.log(response);\n            if (response.success) {\n                return res.status(200).json({\n                    message: \"success\",\n                    data: response\n                });\n            } else {\n                return res.status(404).json({\n                    success: false,\n                    message: \"Token taken.\"\n                });\n            }\n        } catch (error) {\n            return res.status(404).json({\n                success: false,\n                message: \"Invalid token.\"\n            });\n        }\n    } else {\n        // Not allowed methods\n        res.status(405).json({\n            message: \"Method not allowed.\"\n        });\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2hvcnRlbi11cmwvaW5kZXgudHMiLCJtYXBwaW5ncyI6Ijs7OztBQUVBLGlFQUFlLE9BQU9BLEtBQXFCQztJQUN6QyxJQUFJRCxJQUFJRSxNQUFNLEtBQUssUUFBUTtRQUN6QixZQUFZO1FBQ1osdUNBQXVDO1FBQ3ZDLHVCQUF1QjtRQUV2QixJQUFJO1lBQ0YsTUFBTUMsV0FBVyxNQUFNLENBQ3JCLE1BQU1DLE1BQU1DLFFBQVFDLEdBQUcsQ0FBQ0Msa0JBQWtCLEVBQUU7Z0JBQzFDTCxRQUFRO2dCQUNSTSxTQUFTO29CQUNQLGdCQUFnQjtnQkFDbEI7Z0JBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQ1gsSUFBSVMsSUFBSTtZQUMvQixFQUFDLEVBQ0RHLElBQUk7WUFFTkMsUUFBUUMsR0FBRyxDQUFDWDtZQUVaLElBQUlBLFNBQVNZLE9BQU8sRUFBRTtnQkFDcEIsT0FBT2QsSUFBSWUsTUFBTSxDQUFDLEtBQUtKLElBQUksQ0FBQztvQkFDMUJLLFNBQVM7b0JBQ1RDLE1BQU1mO2dCQUNSO1lBQ0YsT0FBTztnQkFDTCxPQUFPRixJQUFJZSxNQUFNLENBQUMsS0FBS0osSUFBSSxDQUFDO29CQUMxQkcsU0FBUztvQkFDVEUsU0FBUztnQkFDWDtZQUNGO1FBQ0YsRUFBRSxPQUFPRSxPQUFPO1lBQ2QsT0FBT2xCLElBQUllLE1BQU0sQ0FBQyxLQUFLSixJQUFJLENBQUM7Z0JBQzFCRyxTQUFTO2dCQUNURSxTQUFTO1lBQ1g7UUFDRjtJQUNGLE9BQU87UUFDTCxzQkFBc0I7UUFDdEJoQixJQUFJZSxNQUFNLENBQUMsS0FBS0osSUFBSSxDQUFDO1lBQ25CSyxTQUFTO1FBQ1g7SUFDRjtBQUNGLEdBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvc2hvcnRlbi11cmwvaW5kZXgudHM/NmQzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XG4gICAgLy8gU3Vic2NyaWJlXG4gICAgLy9jb25zdCB7IHVybCwgY3VzdG9tSGFzaCB9ID0gcmVxLmJvZHk7XG4gICAgLy9sZXQgbGFtYmRhUmVzID0gbnVsbDtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IChcbiAgICAgICAgYXdhaXQgZmV0Y2gocHJvY2Vzcy5lbnYuTEFNQkRBX1NIT1JURU5fVVJMLCB7XG4gICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlcS5ib2R5KSxcbiAgICAgICAgfSlcbiAgICAgICkuanNvbigpO1xuXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG5cbiAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgICAgICAgbWVzc2FnZTogXCJzdWNjZXNzXCIsXG4gICAgICAgICAgZGF0YTogcmVzcG9uc2UsXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHtcbiAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICBtZXNzYWdlOiBcIlRva2VuIHRha2VuLlwiLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIG1lc3NhZ2U6IFwiSW52YWxpZCB0b2tlbi5cIixcbiAgICAgIH0pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBOb3QgYWxsb3dlZCBtZXRob2RzXG4gICAgcmVzLnN0YXR1cyg0MDUpLmpzb24oe1xuICAgICAgbWVzc2FnZTogXCJNZXRob2Qgbm90IGFsbG93ZWQuXCIsXG4gICAgfSk7XG4gIH1cbn07XG4iXSwibmFtZXMiOlsicmVxIiwicmVzIiwibWV0aG9kIiwicmVzcG9uc2UiLCJmZXRjaCIsInByb2Nlc3MiLCJlbnYiLCJMQU1CREFfU0hPUlRFTl9VUkwiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJqc29uIiwiY29uc29sZSIsImxvZyIsInN1Y2Nlc3MiLCJzdGF0dXMiLCJtZXNzYWdlIiwiZGF0YSIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/shorten-url/index.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/shorten-url/index.ts"));
module.exports = __webpack_exports__;

})();