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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(process.env.MONGODB_URI);\nconst userCollection = client.db(\"TinyUrl\").collection(\"users\");\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const username = req.body.username;\n    const password = req.body.password;\n    console.log(req.body);\n    console.log(req);\n    /*if (req.body.type == \"SignIn\") {\n    console.log(\"Lol\");\n    const isFound = await userCollection.findOne({\n      username: username,\n      password: password,\n    });\n    console.log(isFound);\n    if (!isFound) {\n      return res.status(404).json({ error: \"Wrong username/password\" });\n    }\n    const data = {\n      status: 200,\n      username: isFound.username,\n      password: isFound.password,\n    };\n    return res.status(200).json(data);\n  } \n  */ if (req.body.type == \"SignUp\") {\n        try {\n            const response = await fetch(`${process.env.LAMBDA_VERIFY_SIGNIN}`, {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    username: req.body.username,\n                    password: req.body.password,\n                    type: \"SignUp\"\n                })\n            });\n            console.log(response);\n            const user = await response.json();\n            console.log(user);\n            if (response.status === 200) {\n                return res.status(200).json({\n                    message: \"Sign up successful\"\n                });\n            } else {\n                console.log(\"Signup not successful\");\n                return res.status(404).json({\n                    error: \"Method not allowed\"\n                });\n            }\n        } catch (error) {\n        // Handle any network or server errors\n        }\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2lnbmluL2luZGV4LnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUNzQztBQUV0QyxNQUFNQyxTQUFTLElBQUlELGdEQUFXQSxDQUFDRSxRQUFRQyxHQUFHLENBQUNDLFdBQVc7QUFDdEQsTUFBTUMsaUJBQWlCSixPQUFPSyxFQUFFLENBQUMsV0FBV0MsVUFBVSxDQUFDO0FBRXZELGlFQUFlLE9BQU9DLEtBQXFCQztJQUN6QyxNQUFNQyxXQUFXRixJQUFJRyxJQUFJLENBQUNELFFBQVE7SUFDbEMsTUFBTUUsV0FBV0osSUFBSUcsSUFBSSxDQUFDQyxRQUFRO0lBQ2xDQyxRQUFRQyxHQUFHLENBQUNOLElBQUlHLElBQUk7SUFFcEJFLFFBQVFDLEdBQUcsQ0FBQ047SUFDWjs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFpQkEsR0FDQSxJQUFJQSxJQUFJRyxJQUFJLENBQUNJLElBQUksSUFBSSxVQUFVO1FBQzdCLElBQUk7WUFDRixNQUFNQyxXQUFXLE1BQU1DLE1BQU0sQ0FBQyxFQUFFZixRQUFRQyxHQUFHLENBQUNlLG9CQUFvQixDQUFDLENBQUMsRUFBRTtnQkFDbEVDLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQ1AsZ0JBQWdCO2dCQUNsQjtnQkFDQVQsTUFBTVUsS0FBS0MsU0FBUyxDQUFDO29CQUNuQlosVUFBVUYsSUFBSUcsSUFBSSxDQUFDRCxRQUFRO29CQUMzQkUsVUFBVUosSUFBSUcsSUFBSSxDQUFDQyxRQUFRO29CQUMzQkcsTUFBTTtnQkFDUjtZQUNGO1lBQ0FGLFFBQVFDLEdBQUcsQ0FBQ0U7WUFDWixNQUFNTyxPQUFPLE1BQU1QLFNBQVNRLElBQUk7WUFFaENYLFFBQVFDLEdBQUcsQ0FBQ1M7WUFDWixJQUFJUCxTQUFTUyxNQUFNLEtBQUssS0FBSztnQkFDM0IsT0FBT2hCLElBQUlnQixNQUFNLENBQUMsS0FBS0QsSUFBSSxDQUFDO29CQUFFRSxTQUFTO2dCQUFxQjtZQUM5RCxPQUFPO2dCQUNMYixRQUFRQyxHQUFHLENBQUM7Z0JBQ1osT0FBT0wsSUFBSWdCLE1BQU0sQ0FBQyxLQUFLRCxJQUFJLENBQUM7b0JBQUVHLE9BQU87Z0JBQXFCO1lBQzVEO1FBQ0YsRUFBRSxPQUFPQSxPQUFPO1FBQ2Qsc0NBQXNDO1FBQ3hDO0lBQ0Y7QUFDRixHQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL3NpZ25pbi9pbmRleC50cz8xNDFiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCI7XG5cbmNvbnN0IGNsaWVudCA9IG5ldyBNb25nb0NsaWVudChwcm9jZXNzLmVudi5NT05HT0RCX1VSSSk7XG5jb25zdCB1c2VyQ29sbGVjdGlvbiA9IGNsaWVudC5kYihcIlRpbnlVcmxcIikuY29sbGVjdGlvbihcInVzZXJzXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcbiAgY29uc3QgdXNlcm5hbWUgPSByZXEuYm9keS51c2VybmFtZTtcbiAgY29uc3QgcGFzc3dvcmQgPSByZXEuYm9keS5wYXNzd29yZDtcbiAgY29uc29sZS5sb2cocmVxLmJvZHkpO1xuXG4gIGNvbnNvbGUubG9nKHJlcSk7XG4gIC8qaWYgKHJlcS5ib2R5LnR5cGUgPT0gXCJTaWduSW5cIikge1xuICAgIGNvbnNvbGUubG9nKFwiTG9sXCIpO1xuICAgIGNvbnN0IGlzRm91bmQgPSBhd2FpdCB1c2VyQ29sbGVjdGlvbi5maW5kT25lKHtcbiAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSxcbiAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhpc0ZvdW5kKTtcbiAgICBpZiAoIWlzRm91bmQpIHtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IGVycm9yOiBcIldyb25nIHVzZXJuYW1lL3Bhc3N3b3JkXCIgfSk7XG4gICAgfVxuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBzdGF0dXM6IDIwMCxcbiAgICAgIHVzZXJuYW1lOiBpc0ZvdW5kLnVzZXJuYW1lLFxuICAgICAgcGFzc3dvcmQ6IGlzRm91bmQucGFzc3dvcmQsXG4gICAgfTtcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oZGF0YSk7XG4gIH0gXG4gICovXG4gIGlmIChyZXEuYm9keS50eXBlID09IFwiU2lnblVwXCIpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtwcm9jZXNzLmVudi5MQU1CREFfVkVSSUZZX1NJR05JTn1gLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIHVzZXJuYW1lOiByZXEuYm9keS51c2VybmFtZSxcbiAgICAgICAgICBwYXNzd29yZDogcmVxLmJvZHkucGFzc3dvcmQsXG4gICAgICAgICAgdHlwZTogXCJTaWduVXBcIixcbiAgICAgICAgfSksXG4gICAgICB9KTtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgIGNvbnNvbGUubG9nKHVzZXIpO1xuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lc3NhZ2U6IFwiU2lnbiB1cCBzdWNjZXNzZnVsXCIgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlNpZ251cCBub3Qgc3VjY2Vzc2Z1bFwiKTtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgZXJyb3I6IFwiTWV0aG9kIG5vdCBhbGxvd2VkXCIgfSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIC8vIEhhbmRsZSBhbnkgbmV0d29yayBvciBzZXJ2ZXIgZXJyb3JzXG4gICAgfVxuICB9XG59O1xuIl0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwiY2xpZW50IiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJJIiwidXNlckNvbGxlY3Rpb24iLCJkYiIsImNvbGxlY3Rpb24iLCJyZXEiLCJyZXMiLCJ1c2VybmFtZSIsImJvZHkiLCJwYXNzd29yZCIsImNvbnNvbGUiLCJsb2ciLCJ0eXBlIiwicmVzcG9uc2UiLCJmZXRjaCIsIkxBTUJEQV9WRVJJRllfU0lHTklOIiwibWV0aG9kIiwiaGVhZGVycyIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1c2VyIiwianNvbiIsInN0YXR1cyIsIm1lc3NhZ2UiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/signin/index.ts\n");

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