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
exports.id = "pages/api/profile-data";
exports.ids = ["pages/api/profile-data"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/profile-data/index.ts":
/*!*****************************************!*\
  !*** ./pages/api/profile-data/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(process.env.MONGODB_URI);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    console.log(\"Query is: \", req.body);\n    const { username } = req.body;\n    const urlCollection = client.db(\"TinyUrl\").collection(\"url\");\n    try {\n        const userUrls = await urlCollection.find({\n            creator: username\n        }).toArray();\n        console.log(\"User URLs is: \", userUrls);\n        return res.status(201).json({\n            message: `User ${username} has the following urls`,\n            data: userUrls\n        });\n    } catch (error) {\n        console.error(error);\n        return res.status(500).json({\n            error: \"Internal Server Error\"\n        });\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJvZmlsZS1kYXRhL2luZGV4LnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUNzQztBQUV0QyxNQUFNQyxTQUFTLElBQUlELGdEQUFXQSxDQUFDRSxRQUFRQyxHQUFHLENBQUNDLFdBQVc7QUFFdEQsaUVBQWUsT0FBT0MsS0FBcUJDO0lBQ3pDQyxRQUFRQyxHQUFHLENBQUMsY0FBY0gsSUFBSUksSUFBSTtJQUNsQyxNQUFNLEVBQUVDLFFBQVEsRUFBRSxHQUFHTCxJQUFJSSxJQUFJO0lBQzdCLE1BQU1FLGdCQUFnQlYsT0FBT1csRUFBRSxDQUFDLFdBQVdDLFVBQVUsQ0FBQztJQUV0RCxJQUFJO1FBQ0YsTUFBTUMsV0FBVyxNQUFNSCxjQUFjSSxJQUFJLENBQUM7WUFBRUMsU0FBU047UUFBUyxHQUFHTyxPQUFPO1FBQ3hFVixRQUFRQyxHQUFHLENBQUMsa0JBQWtCTTtRQUM5QixPQUFPUixJQUFJWSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQzFCQyxTQUFTLENBQUMsS0FBSyxFQUFFVixTQUFTLHVCQUF1QixDQUFDO1lBQ2xEVyxNQUFNUDtRQUNSO0lBQ0YsRUFBRSxPQUFPUSxPQUFPO1FBQ2RmLFFBQVFlLEtBQUssQ0FBQ0E7UUFDZCxPQUFPaEIsSUFBSVksTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFRyxPQUFPO1FBQXdCO0lBQy9EO0FBQ0YsR0FBRSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2FwaS9wcm9maWxlLWRhdGEvaW5kZXgudHM/YmQ2YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xuXG5jb25zdCBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQocHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkpO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcbiAgY29uc29sZS5sb2coXCJRdWVyeSBpczogXCIsIHJlcS5ib2R5KTtcbiAgY29uc3QgeyB1c2VybmFtZSB9ID0gcmVxLmJvZHk7XG4gIGNvbnN0IHVybENvbGxlY3Rpb24gPSBjbGllbnQuZGIoXCJUaW55VXJsXCIpLmNvbGxlY3Rpb24oXCJ1cmxcIik7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCB1c2VyVXJscyA9IGF3YWl0IHVybENvbGxlY3Rpb24uZmluZCh7IGNyZWF0b3I6IHVzZXJuYW1lIH0pLnRvQXJyYXkoKTtcbiAgICBjb25zb2xlLmxvZyhcIlVzZXIgVVJMcyBpczogXCIsIHVzZXJVcmxzKTtcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDEpLmpzb24oe1xuICAgICAgbWVzc2FnZTogYFVzZXIgJHt1c2VybmFtZX0gaGFzIHRoZSBmb2xsb3dpbmcgdXJsc2AsXG4gICAgICBkYXRhOiB1c2VyVXJscyxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogXCJJbnRlcm5hbCBTZXJ2ZXIgRXJyb3JcIiB9KTtcbiAgfVxufTtcbiJdLCJuYW1lcyI6WyJNb25nb0NsaWVudCIsImNsaWVudCIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSSSIsInJlcSIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJib2R5IiwidXNlcm5hbWUiLCJ1cmxDb2xsZWN0aW9uIiwiZGIiLCJjb2xsZWN0aW9uIiwidXNlclVybHMiLCJmaW5kIiwiY3JlYXRvciIsInRvQXJyYXkiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsImRhdGEiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/profile-data/index.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/profile-data/index.ts"));
module.exports = __webpack_exports__;

})();