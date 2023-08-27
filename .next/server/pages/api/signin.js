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
exports.id = "pages/api/signin";
exports.ids = ["pages/api/signin"];
exports.modules = {

/***/ "(api)/./pages/api/signin/index.ts":
/*!***********************************!*\
  !*** ./pages/api/signin/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    console.log(req.body);\n    if (req.body.type == \"SignUp\") {\n        try {\n            const response = await fetch(`${process.env.LAMBDA_VERIFY_SIGNIN}`, {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    username: req.body.username,\n                    password: req.body.password,\n                    type: \"SignUp\"\n                })\n            });\n            console.log(response);\n            if (response.status === 200) {\n                return res.status(200).json({\n                    message: \"Sign up successful\"\n                });\n            } else {\n                console.log(\"Signup not successful\");\n                return res.status(404).json({\n                    error: \"Method not allowed\"\n                });\n            }\n        } catch (error) {\n        // Handle any network or server errors\n        }\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2lnbmluL2luZGV4LnRzIiwibWFwcGluZ3MiOiI7Ozs7QUFFQSxpRUFBZSxPQUFPQSxLQUFxQkM7SUFDekNDLFFBQVFDLEdBQUcsQ0FBQ0gsSUFBSUksSUFBSTtJQUVwQixJQUFJSixJQUFJSSxJQUFJLENBQUNDLElBQUksSUFBSSxVQUFVO1FBQzdCLElBQUk7WUFDRixNQUFNQyxXQUFXLE1BQU1DLE1BQU0sQ0FBQyxFQUFFQyxRQUFRQyxHQUFHLENBQUNDLG9CQUFvQixDQUFDLENBQUMsRUFBRTtnQkFDbEVDLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQ1AsZ0JBQWdCO2dCQUNsQjtnQkFDQVIsTUFBTVMsS0FBS0MsU0FBUyxDQUFDO29CQUNuQkMsVUFBVWYsSUFBSUksSUFBSSxDQUFDVyxRQUFRO29CQUMzQkMsVUFBVWhCLElBQUlJLElBQUksQ0FBQ1ksUUFBUTtvQkFDM0JYLE1BQU07Z0JBQ1I7WUFDRjtZQUNBSCxRQUFRQyxHQUFHLENBQUNHO1lBQ1osSUFBSUEsU0FBU1csTUFBTSxLQUFLLEtBQUs7Z0JBQzNCLE9BQU9oQixJQUFJZ0IsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztvQkFBRUMsU0FBUztnQkFBcUI7WUFDOUQsT0FBTztnQkFDTGpCLFFBQVFDLEdBQUcsQ0FBQztnQkFDWixPQUFPRixJQUFJZ0IsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztvQkFBRUUsT0FBTztnQkFBcUI7WUFDNUQ7UUFDRixFQUFFLE9BQU9BLE9BQU87UUFDZCxzQ0FBc0M7UUFDeEM7SUFDRjtBQUNGLEdBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvc2lnbmluL2luZGV4LnRzPzE0MWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSA9PiB7XG4gIGNvbnNvbGUubG9nKHJlcS5ib2R5KTtcblxuICBpZiAocmVxLmJvZHkudHlwZSA9PSBcIlNpZ25VcFwiKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuTEFNQkRBX1ZFUklGWV9TSUdOSU59YCwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICB1c2VybmFtZTogcmVxLmJvZHkudXNlcm5hbWUsXG4gICAgICAgICAgcGFzc3dvcmQ6IHJlcS5ib2R5LnBhc3N3b3JkLFxuICAgICAgICAgIHR5cGU6IFwiU2lnblVwXCIsXG4gICAgICAgIH0pLFxuICAgICAgfSk7XG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVzc2FnZTogXCJTaWduIHVwIHN1Y2Nlc3NmdWxcIiB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2lnbnVwIG5vdCBzdWNjZXNzZnVsXCIpO1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBlcnJvcjogXCJNZXRob2Qgbm90IGFsbG93ZWRcIiB9KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgLy8gSGFuZGxlIGFueSBuZXR3b3JrIG9yIHNlcnZlciBlcnJvcnNcbiAgICB9XG4gIH1cbn07XG4iXSwibmFtZXMiOlsicmVxIiwicmVzIiwiY29uc29sZSIsImxvZyIsImJvZHkiLCJ0eXBlIiwicmVzcG9uc2UiLCJmZXRjaCIsInByb2Nlc3MiLCJlbnYiLCJMQU1CREFfVkVSSUZZX1NJR05JTiIsIm1ldGhvZCIsImhlYWRlcnMiLCJKU09OIiwic3RyaW5naWZ5IiwidXNlcm5hbWUiLCJwYXNzd29yZCIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/signin/index.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/signin/index.ts"));
module.exports = __webpack_exports__;

})();