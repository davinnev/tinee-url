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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(process.env.MONGODB_URI);\nconst userCollection = client.db(\"TinyUrl\").collection(\"users\");\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const username = req.body.username;\n    const password = req.body.password;\n    console.log(req.body);\n    console.log(req);\n    if (req.body.type == \"SignIn\") {\n        console.log(\"Lol\");\n        const isFound = await userCollection.findOne({\n            username: username,\n            password: password\n        });\n        console.log(isFound);\n        if (!isFound) {\n            return res.status(404).json({\n                error: \"Wrong username/password\"\n            });\n        }\n        const data = {\n            status: 200,\n            username: isFound.username,\n            password: isFound.password\n        };\n        return res.status(200).json(data);\n    } else if (req.body.type == \"SignUp\") {\n        const isUsernameTaken = await userCollection.findOne({\n            username: username\n        });\n        if (isUsernameTaken) {\n            return res.status(404).json({\n                error: \"Username taken, please use another one!\"\n            });\n        }\n        userCollection.insertOne({\n            username: username,\n            password: password\n        });\n        return res.status(200).json({\n            message: \"Success!\"\n        });\n    } else {\n        console.log(\"Method not allowed\");\n        return res.status(404).json({\n            error: \"Method not allowed\"\n        });\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2lnbmluL2luZGV4LnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUNzQztBQUV0QyxNQUFNQyxTQUFTLElBQUlELGdEQUFXQSxDQUFDRSxRQUFRQyxHQUFHLENBQUNDLFdBQVc7QUFDdEQsTUFBTUMsaUJBQWlCSixPQUFPSyxFQUFFLENBQUMsV0FBV0MsVUFBVSxDQUFDO0FBRXZELGlFQUFlLE9BQU9DLEtBQXFCQztJQUN6QyxNQUFNQyxXQUFXRixJQUFJRyxJQUFJLENBQUNELFFBQVE7SUFDbEMsTUFBTUUsV0FBV0osSUFBSUcsSUFBSSxDQUFDQyxRQUFRO0lBQ2xDQyxRQUFRQyxHQUFHLENBQUNOLElBQUlHLElBQUk7SUFFcEJFLFFBQVFDLEdBQUcsQ0FBQ047SUFDWixJQUFJQSxJQUFJRyxJQUFJLENBQUNJLElBQUksSUFBSSxVQUFVO1FBQzdCRixRQUFRQyxHQUFHLENBQUM7UUFDWixNQUFNRSxVQUFVLE1BQU1YLGVBQWVZLE9BQU8sQ0FBQztZQUMzQ1AsVUFBVUE7WUFDVkUsVUFBVUE7UUFDWjtRQUNBQyxRQUFRQyxHQUFHLENBQUNFO1FBQ1osSUFBSSxDQUFDQSxTQUFTO1lBQ1osT0FBT1AsSUFBSVMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUMsT0FBTztZQUEwQjtRQUNqRTtRQUNBLE1BQU1DLE9BQU87WUFDWEgsUUFBUTtZQUNSUixVQUFVTSxRQUFRTixRQUFRO1lBQzFCRSxVQUFVSSxRQUFRSixRQUFRO1FBQzVCO1FBQ0EsT0FBT0gsSUFBSVMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ0U7SUFDOUIsT0FBTyxJQUFJYixJQUFJRyxJQUFJLENBQUNJLElBQUksSUFBSSxVQUFVO1FBQ3BDLE1BQU1PLGtCQUFrQixNQUFNakIsZUFBZVksT0FBTyxDQUFDO1lBQ25EUCxVQUFVQTtRQUNaO1FBQ0EsSUFBSVksaUJBQWlCO1lBQ25CLE9BQU9iLElBQ0pTLE1BQU0sQ0FBQyxLQUNQQyxJQUFJLENBQUM7Z0JBQUVDLE9BQU87WUFBMEM7UUFDN0Q7UUFDQWYsZUFBZWtCLFNBQVMsQ0FBQztZQUFFYixVQUFVQTtZQUFVRSxVQUFVQTtRQUFTO1FBQ2xFLE9BQU9ILElBQUlTLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUssU0FBUztRQUFXO0lBQ3BELE9BQU87UUFDTFgsUUFBUUMsR0FBRyxDQUFDO1FBQ1osT0FBT0wsSUFBSVMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQXFCO0lBQzVEO0FBQ0YsR0FBRSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2FwaS9zaWduaW4vaW5kZXgudHM/MTQxYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xuXG5jb25zdCBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQocHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkpO1xuY29uc3QgdXNlckNvbGxlY3Rpb24gPSBjbGllbnQuZGIoXCJUaW55VXJsXCIpLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSA9PiB7XG4gIGNvbnN0IHVzZXJuYW1lID0gcmVxLmJvZHkudXNlcm5hbWU7XG4gIGNvbnN0IHBhc3N3b3JkID0gcmVxLmJvZHkucGFzc3dvcmQ7XG4gIGNvbnNvbGUubG9nKHJlcS5ib2R5KTtcblxuICBjb25zb2xlLmxvZyhyZXEpO1xuICBpZiAocmVxLmJvZHkudHlwZSA9PSBcIlNpZ25JblwiKSB7XG4gICAgY29uc29sZS5sb2coXCJMb2xcIik7XG4gICAgY29uc3QgaXNGb3VuZCA9IGF3YWl0IHVzZXJDb2xsZWN0aW9uLmZpbmRPbmUoe1xuICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLFxuICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKGlzRm91bmQpO1xuICAgIGlmICghaXNGb3VuZCkge1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgZXJyb3I6IFwiV3JvbmcgdXNlcm5hbWUvcGFzc3dvcmRcIiB9KTtcbiAgICB9XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIHN0YXR1czogMjAwLFxuICAgICAgdXNlcm5hbWU6IGlzRm91bmQudXNlcm5hbWUsXG4gICAgICBwYXNzd29yZDogaXNGb3VuZC5wYXNzd29yZCxcbiAgICB9O1xuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihkYXRhKTtcbiAgfSBlbHNlIGlmIChyZXEuYm9keS50eXBlID09IFwiU2lnblVwXCIpIHtcbiAgICBjb25zdCBpc1VzZXJuYW1lVGFrZW4gPSBhd2FpdCB1c2VyQ29sbGVjdGlvbi5maW5kT25lKHtcbiAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSxcbiAgICB9KTtcbiAgICBpZiAoaXNVc2VybmFtZVRha2VuKSB7XG4gICAgICByZXR1cm4gcmVzXG4gICAgICAgIC5zdGF0dXMoNDA0KVxuICAgICAgICAuanNvbih7IGVycm9yOiBcIlVzZXJuYW1lIHRha2VuLCBwbGVhc2UgdXNlIGFub3RoZXIgb25lIVwiIH0pO1xuICAgIH1cbiAgICB1c2VyQ29sbGVjdGlvbi5pbnNlcnRPbmUoeyB1c2VybmFtZTogdXNlcm5hbWUsIHBhc3N3b3JkOiBwYXNzd29yZCB9KTtcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiBcIlN1Y2Nlc3MhXCIgfSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coXCJNZXRob2Qgbm90IGFsbG93ZWRcIik7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgZXJyb3I6IFwiTWV0aG9kIG5vdCBhbGxvd2VkXCIgfSk7XG4gIH1cbn07XG4iXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJjbGllbnQiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJ1c2VyQ29sbGVjdGlvbiIsImRiIiwiY29sbGVjdGlvbiIsInJlcSIsInJlcyIsInVzZXJuYW1lIiwiYm9keSIsInBhc3N3b3JkIiwiY29uc29sZSIsImxvZyIsInR5cGUiLCJpc0ZvdW5kIiwiZmluZE9uZSIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsImRhdGEiLCJpc1VzZXJuYW1lVGFrZW4iLCJpbnNlcnRPbmUiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/signin/index.ts\n");

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