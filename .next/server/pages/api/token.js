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
exports.id = "pages/api/token";
exports.ids = ["pages/api/token"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/token/index.ts":
/*!**********************************!*\
  !*** ./pages/api/token/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(process.env.MONGODB_URI);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const urlCollection = client.db(\"TinyUrl\").collection(\"url\");\n    const { token } = req.query;\n    try {\n        const urlData = await urlCollection.findOne({\n            hash: token\n        });\n        if (urlData && urlData.url) {\n            return res.status(200).json({\n                message: \"success\",\n                url: urlData.url\n            });\n        } else {\n            return res.status(404).json({\n                error: \"URL not found\"\n            });\n        }\n    } catch (error) {\n        console.error(error);\n        return res.status(500).json({\n            error: \"Internal Server Error\"\n        });\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdG9rZW4vaW5kZXgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ3NDO0FBRXRDLE1BQU1DLFNBQVMsSUFBSUQsZ0RBQVdBLENBQUNFLFFBQVFDLEdBQUcsQ0FBQ0MsV0FBVztBQUV0RCxpRUFBZSxPQUFPQyxLQUFxQkM7SUFDekMsTUFBTUMsZ0JBQWdCTixPQUFPTyxFQUFFLENBQUMsV0FBV0MsVUFBVSxDQUFDO0lBQ3RELE1BQU0sRUFBRUMsS0FBSyxFQUFFLEdBQUdMLElBQUlNLEtBQUs7SUFDM0IsSUFBSTtRQUNGLE1BQU1DLFVBQVUsTUFBTUwsY0FBY00sT0FBTyxDQUFDO1lBQUVDLE1BQU1KO1FBQU07UUFFMUQsSUFBSUUsV0FBV0EsUUFBUUcsR0FBRyxFQUFFO1lBQzFCLE9BQU9ULElBQUlVLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQzFCQyxTQUFTO2dCQUNUSCxLQUFLSCxRQUFRRyxHQUFHO1lBQ2xCO1FBQ0YsT0FBTztZQUNMLE9BQU9ULElBQUlVLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVFLE9BQU87WUFBZ0I7UUFDdkQ7SUFDRixFQUFFLE9BQU9BLE9BQU87UUFDZEMsUUFBUUQsS0FBSyxDQUFDQTtRQUNkLE9BQU9iLElBQUlVLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUUsT0FBTztRQUF3QjtJQUMvRDtBQUNGLEdBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvdG9rZW4vaW5kZXgudHM/NDIyOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xuXG5jb25zdCBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQocHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkpO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcbiAgY29uc3QgdXJsQ29sbGVjdGlvbiA9IGNsaWVudC5kYihcIlRpbnlVcmxcIikuY29sbGVjdGlvbihcInVybFwiKTtcbiAgY29uc3QgeyB0b2tlbiB9ID0gcmVxLnF1ZXJ5O1xuICB0cnkge1xuICAgIGNvbnN0IHVybERhdGEgPSBhd2FpdCB1cmxDb2xsZWN0aW9uLmZpbmRPbmUoeyBoYXNoOiB0b2tlbiB9KTtcblxuICAgIGlmICh1cmxEYXRhICYmIHVybERhdGEudXJsKSB7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgICAgICBtZXNzYWdlOiBcInN1Y2Nlc3NcIixcbiAgICAgICAgdXJsOiB1cmxEYXRhLnVybCxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBlcnJvcjogXCJVUkwgbm90IGZvdW5kXCIgfSk7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiBcIkludGVybmFsIFNlcnZlciBFcnJvclwiIH0pO1xuICB9XG59O1xuIl0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwiY2xpZW50IiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJJIiwicmVxIiwicmVzIiwidXJsQ29sbGVjdGlvbiIsImRiIiwiY29sbGVjdGlvbiIsInRva2VuIiwicXVlcnkiLCJ1cmxEYXRhIiwiZmluZE9uZSIsImhhc2giLCJ1cmwiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsImVycm9yIiwiY29uc29sZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/token/index.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/token/index.ts"));
module.exports = __webpack_exports__;

})();