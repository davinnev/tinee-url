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

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/signin/index.ts":
/*!***********************************!*\
  !*** ./pages/api/signin/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(process.env.MONGODB_URI);\nconst userCollection = client.db(\"TinyUrl\").collection(\"users\");\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const username = req.body.username;\n    const password = req.body.password;\n    console.log(req);\n    if (req.body.type == \"SignIn\") {\n        console.log(\"Lol\");\n        const isFound = await userCollection.findOne({\n            username: username,\n            password: password\n        });\n        console.log(isFound);\n        if (!isFound) {\n            return res.status(404).json({\n                error: \"Wrong username/password\"\n            });\n        }\n        const data = {\n            status: 200,\n            username: isFound.username,\n            password: isFound.password\n        };\n        return res.status(200).json(data);\n    } else if (req.body.type == \"SignUp\") {\n        const isUsernameTaken = await userCollection.findOne({\n            username: username\n        });\n        if (isUsernameTaken) {\n            return res.status(404).json({\n                error: \"Username taken, please use another one!\"\n            });\n        }\n        userCollection.insertOne({\n            username: username,\n            password: password\n        });\n        return res.status(200).json({\n            message: \"Success!\"\n        });\n    } else {\n        console.log(\"Method not allowed\");\n        return res.status(404).json({\n            error: \"Method not allowed\"\n        });\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2lnbmluL2luZGV4LnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUNzQztBQUV0QyxNQUFNQyxTQUFTLElBQUlELGdEQUFXQSxDQUFDRSxRQUFRQyxHQUFHLENBQUNDLFdBQVc7QUFDdEQsTUFBTUMsaUJBQWlCSixPQUFPSyxFQUFFLENBQUMsV0FBV0MsVUFBVSxDQUFDO0FBRXZELGlFQUFlLE9BQU9DLEtBQXFCQztJQUN6QyxNQUFNQyxXQUFXRixJQUFJRyxJQUFJLENBQUNELFFBQVE7SUFDbEMsTUFBTUUsV0FBV0osSUFBSUcsSUFBSSxDQUFDQyxRQUFRO0lBRWxDQyxRQUFRQyxHQUFHLENBQUNOO0lBQ1osSUFBSUEsSUFBSUcsSUFBSSxDQUFDSSxJQUFJLElBQUksVUFBVTtRQUM3QkYsUUFBUUMsR0FBRyxDQUFDO1FBQ1osTUFBTUUsVUFBVSxNQUFNWCxlQUFlWSxPQUFPLENBQUM7WUFDM0NQLFVBQVVBO1lBQ1ZFLFVBQVVBO1FBQ1o7UUFDQUMsUUFBUUMsR0FBRyxDQUFDRTtRQUNaLElBQUksQ0FBQ0EsU0FBUztZQUNaLE9BQU9QLElBQUlTLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVDLE9BQU87WUFBMEI7UUFDakU7UUFDQSxNQUFNQyxPQUFPO1lBQ1hILFFBQVE7WUFDUlIsVUFBVU0sUUFBUU4sUUFBUTtZQUMxQkUsVUFBVUksUUFBUUosUUFBUTtRQUM1QjtRQUNBLE9BQU9ILElBQUlTLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNFO0lBQzlCLE9BQU8sSUFBSWIsSUFBSUcsSUFBSSxDQUFDSSxJQUFJLElBQUksVUFBVTtRQUNwQyxNQUFNTyxrQkFBa0IsTUFBTWpCLGVBQWVZLE9BQU8sQ0FBQztZQUNuRFAsVUFBVUE7UUFDWjtRQUNBLElBQUlZLGlCQUFpQjtZQUNuQixPQUFPYixJQUNKUyxNQUFNLENBQUMsS0FDUEMsSUFBSSxDQUFDO2dCQUFFQyxPQUFPO1lBQTBDO1FBQzdEO1FBQ0FmLGVBQWVrQixTQUFTLENBQUM7WUFBRWIsVUFBVUE7WUFBVUUsVUFBVUE7UUFBUztRQUNsRSxPQUFPSCxJQUFJUyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVLLFNBQVM7UUFBVztJQUNwRCxPQUFPO1FBQ0xYLFFBQVFDLEdBQUcsQ0FBQztRQUNaLE9BQU9MLElBQUlTLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUFxQjtJQUM1RDtBQUNGLEdBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvc2lnbmluL2luZGV4LnRzPzE0MWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcblxuY29uc3QgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJKTtcbmNvbnN0IHVzZXJDb2xsZWN0aW9uID0gY2xpZW50LmRiKFwiVGlueVVybFwiKS5jb2xsZWN0aW9uKFwidXNlcnNcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xuICBjb25zdCB1c2VybmFtZSA9IHJlcS5ib2R5LnVzZXJuYW1lO1xuICBjb25zdCBwYXNzd29yZCA9IHJlcS5ib2R5LnBhc3N3b3JkO1xuXG4gIGNvbnNvbGUubG9nKHJlcSk7XG4gIGlmIChyZXEuYm9keS50eXBlID09IFwiU2lnbkluXCIpIHtcbiAgICBjb25zb2xlLmxvZyhcIkxvbFwiKTtcbiAgICBjb25zdCBpc0ZvdW5kID0gYXdhaXQgdXNlckNvbGxlY3Rpb24uZmluZE9uZSh7XG4gICAgICB1c2VybmFtZTogdXNlcm5hbWUsXG4gICAgICBwYXNzd29yZDogcGFzc3dvcmQsXG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coaXNGb3VuZCk7XG4gICAgaWYgKCFpc0ZvdW5kKSB7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBlcnJvcjogXCJXcm9uZyB1c2VybmFtZS9wYXNzd29yZFwiIH0pO1xuICAgIH1cbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgc3RhdHVzOiAyMDAsXG4gICAgICB1c2VybmFtZTogaXNGb3VuZC51c2VybmFtZSxcbiAgICAgIHBhc3N3b3JkOiBpc0ZvdW5kLnBhc3N3b3JkLFxuICAgIH07XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKGRhdGEpO1xuICB9IGVsc2UgaWYgKHJlcS5ib2R5LnR5cGUgPT0gXCJTaWduVXBcIikge1xuICAgIGNvbnN0IGlzVXNlcm5hbWVUYWtlbiA9IGF3YWl0IHVzZXJDb2xsZWN0aW9uLmZpbmRPbmUoe1xuICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLFxuICAgIH0pO1xuICAgIGlmIChpc1VzZXJuYW1lVGFrZW4pIHtcbiAgICAgIHJldHVybiByZXNcbiAgICAgICAgLnN0YXR1cyg0MDQpXG4gICAgICAgIC5qc29uKHsgZXJyb3I6IFwiVXNlcm5hbWUgdGFrZW4sIHBsZWFzZSB1c2UgYW5vdGhlciBvbmUhXCIgfSk7XG4gICAgfVxuICAgIHVzZXJDb2xsZWN0aW9uLmluc2VydE9uZSh7IHVzZXJuYW1lOiB1c2VybmFtZSwgcGFzc3dvcmQ6IHBhc3N3b3JkIH0pO1xuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lc3NhZ2U6IFwiU3VjY2VzcyFcIiB9KTtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZyhcIk1ldGhvZCBub3QgYWxsb3dlZFwiKTtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBlcnJvcjogXCJNZXRob2Qgbm90IGFsbG93ZWRcIiB9KTtcbiAgfVxufTtcbiJdLCJuYW1lcyI6WyJNb25nb0NsaWVudCIsImNsaWVudCIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSSSIsInVzZXJDb2xsZWN0aW9uIiwiZGIiLCJjb2xsZWN0aW9uIiwicmVxIiwicmVzIiwidXNlcm5hbWUiLCJib2R5IiwicGFzc3dvcmQiLCJjb25zb2xlIiwibG9nIiwidHlwZSIsImlzRm91bmQiLCJmaW5kT25lIiwic3RhdHVzIiwianNvbiIsImVycm9yIiwiZGF0YSIsImlzVXNlcm5hbWVUYWtlbiIsImluc2VydE9uZSIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/signin/index.ts\n");

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