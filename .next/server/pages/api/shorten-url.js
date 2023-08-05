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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    if (req.method === \"POST\") {\n        // Subscribe\n        const { url } = req.body;\n        let lambdaRes = null;\n        try {\n            const response = await (await fetch(process.env.LAMBDA_SHORTEN_URL, {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    url: url\n                })\n            })).json();\n            console.log(response);\n            if (response.success) {\n                return res.status(200).json({\n                    message: \"success\",\n                    data: response\n                });\n            }\n            return res.status(200).json({\n                success: false,\n                message: \"Invalid token.\"\n            });\n        } catch (error) {\n            return res.status(200).json({\n                success: false,\n                message: \"Invalid token.\"\n            });\n        }\n    } else {\n        // Not allowed methods\n        res.status(405).json({\n            message: \"Method not allowed.\"\n        });\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2hvcnRlbi11cmwvaW5kZXgudHMiLCJtYXBwaW5ncyI6Ijs7OztBQUVBLGlFQUFlLE9BQU9BLEtBQXFCQztJQUN6QyxJQUFJRCxJQUFJRSxNQUFNLEtBQUssUUFBUTtRQUN6QixZQUFZO1FBQ1osTUFBTSxFQUFFQyxHQUFHLEVBQUUsR0FBR0gsSUFBSUksSUFBSTtRQUN4QixJQUFJQyxZQUFZO1FBRWhCLElBQUk7WUFDRixNQUFNQyxXQUFXLE1BQU0sQ0FDckIsTUFBTUMsTUFBTUMsUUFBUUMsR0FBRyxDQUFDQyxrQkFBa0IsRUFBRTtnQkFDMUNSLFFBQVE7Z0JBQ1JTLFNBQVM7b0JBQ1AsZ0JBQWdCO2dCQUNsQjtnQkFDQVAsTUFBTVEsS0FBS0MsU0FBUyxDQUFDO29CQUFFVixLQUFLQTtnQkFBSTtZQUNsQyxFQUFDLEVBQ0RXLElBQUk7WUFFTkMsUUFBUUMsR0FBRyxDQUFDVjtZQUVaLElBQUlBLFNBQVNXLE9BQU8sRUFBRTtnQkFDcEIsT0FBT2hCLElBQUlpQixNQUFNLENBQUMsS0FBS0osSUFBSSxDQUFDO29CQUMxQkssU0FBUztvQkFDVEMsTUFBTWQ7Z0JBQ1I7WUFDRjtZQUVBLE9BQU9MLElBQUlpQixNQUFNLENBQUMsS0FBS0osSUFBSSxDQUFDO2dCQUMxQkcsU0FBUztnQkFDVEUsU0FBUztZQUNYO1FBQ0YsRUFBRSxPQUFPRSxPQUFPO1lBQ2QsT0FBT3BCLElBQUlpQixNQUFNLENBQUMsS0FBS0osSUFBSSxDQUFDO2dCQUMxQkcsU0FBUztnQkFDVEUsU0FBUztZQUNYO1FBQ0Y7SUFDRixPQUFPO1FBQ0wsc0JBQXNCO1FBQ3RCbEIsSUFBSWlCLE1BQU0sQ0FBQyxLQUFLSixJQUFJLENBQUM7WUFDbkJLLFNBQVM7UUFDWDtJQUNGO0FBQ0YsR0FBRSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2FwaS9zaG9ydGVuLXVybC9pbmRleC50cz82ZDM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcbiAgICAvLyBTdWJzY3JpYmVcbiAgICBjb25zdCB7IHVybCB9ID0gcmVxLmJvZHk7XG4gICAgbGV0IGxhbWJkYVJlcyA9IG51bGw7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCAoXG4gICAgICAgIGF3YWl0IGZldGNoKHByb2Nlc3MuZW52LkxBTUJEQV9TSE9SVEVOX1VSTCwge1xuICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHVybDogdXJsIH0pLFxuICAgICAgICB9KVxuICAgICAgKS5qc29uKCk7XG5cbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcblxuICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICAgICAgICBtZXNzYWdlOiBcInN1Y2Nlc3NcIixcbiAgICAgICAgICBkYXRhOiByZXNwb25zZSxcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiBcIkludmFsaWQgdG9rZW4uXCIsXG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIG1lc3NhZ2U6IFwiSW52YWxpZCB0b2tlbi5cIixcbiAgICAgIH0pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBOb3QgYWxsb3dlZCBtZXRob2RzXG4gICAgcmVzLnN0YXR1cyg0MDUpLmpzb24oe1xuICAgICAgbWVzc2FnZTogXCJNZXRob2Qgbm90IGFsbG93ZWQuXCIsXG4gICAgfSk7XG4gIH1cbn07XG4iXSwibmFtZXMiOlsicmVxIiwicmVzIiwibWV0aG9kIiwidXJsIiwiYm9keSIsImxhbWJkYVJlcyIsInJlc3BvbnNlIiwiZmV0Y2giLCJwcm9jZXNzIiwiZW52IiwiTEFNQkRBX1NIT1JURU5fVVJMIiwiaGVhZGVycyIsIkpTT04iLCJzdHJpbmdpZnkiLCJqc29uIiwiY29uc29sZSIsImxvZyIsInN1Y2Nlc3MiLCJzdGF0dXMiLCJtZXNzYWdlIiwiZGF0YSIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/shorten-url/index.ts\n");

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