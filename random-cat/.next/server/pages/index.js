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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst catImages = [\n    \"https://cdn2.thecatapi.com/images/bpc.jpg\",\n    \"https://cdn2.thecatapi.com/images/eac.jpg\",\n    \"https://cdn2.thecatapi.com/images/6qi.jpg\", \n];\nconst randomCatImage = ()=>{\n    const index = Math.floor(Math.random() * catImages.length);\n    return catImages[index];\n};\nconst fetchCatImage = async ()=>{\n    const res = await fetch(\"https://api.thecatapi.com/v1/images/search\");\n    const result = await res.json();\n    return result[0];\n};\nconst IndexPage = ()=>{\n    const { 0: catImageUrl , 1: setCatImageUrl  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"https://cdn2.thecatapi.com/images/bpc.jpg\");\n    const handleClick = async ()=>{\n        const image = await fetchCatImage();\n        setCatImageUrl(image.url);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleClick,\n                children: \"今日のにゃんこ\\uD83D\\uDC08\"\n            }, void 0, false, {\n                fileName: \"/Users/runa.okamoto/Documents/ts-test/random-cat/src/pages/index.tsx\",\n                lineNumber: 46,\n                columnNumber: 15\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    marginTop: 8\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: catImageUrl,\n                    alt: \"\",\n                    width: 500,\n                    height: \"auto\"\n                }, void 0, false, {\n                    fileName: \"/Users/runa.okamoto/Documents/ts-test/random-cat/src/pages/index.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/runa.okamoto/Documents/ts-test/random-cat/src/pages/index.tsx\",\n                lineNumber: 47,\n                columnNumber: 15\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/runa.okamoto/Documents/ts-test/random-cat/src/pages/index.tsx\",\n        lineNumber: 45,\n        columnNumber: 12\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndexPage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDaUM7QUFnQmpDLE1BQU1DLFNBQVMsR0FBYTtJQUMxQiwyQ0FBMkM7SUFDM0MsMkNBQTJDO0lBQzNDLDJDQUEyQztDQUM1QztBQUVELE1BQU1DLGNBQWMsR0FBRyxJQUFjO0lBQ25DLE1BQU1DLEtBQUssR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxFQUFFLEdBQUdMLFNBQVMsQ0FBQ00sTUFBTSxDQUFDO0lBQzFELE9BQU9OLFNBQVMsQ0FBQ0UsS0FBSyxDQUFDLENBQUM7QUFDMUIsQ0FBQztBQUlELE1BQU1LLGFBQWEsR0FBRSxVQUFxQztJQUN4RCxNQUFNQyxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFDLDRDQUE0QyxDQUFDO0lBQ3JFLE1BQU1DLE1BQU0sR0FBSSxNQUFNRixHQUFHLENBQUNHLElBQUksRUFBRTtJQUNoQyxPQUFPRCxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbkIsQ0FBQztBQUVELE1BQU1FLFNBQVMsR0FBRyxJQUFNO0lBQ3RCLE1BQU0sS0FBQ0MsV0FBVyxNQUFFQyxjQUFjLE1BQUlmLCtDQUFRLENBQzVDLDJDQUEyQyxDQUM1QztJQUNELE1BQU1nQixXQUFXLEdBQUcsVUFBVztRQUM1QixNQUFNQyxLQUFLLEdBQUcsTUFBTVQsYUFBYSxFQUFFO1FBQ25DTyxjQUFjLENBQUNFLEtBQUssQ0FBQ0MsR0FBRyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUNDLHFCQUFPLDhEQUFDQyxLQUFHOzswQkFDRCw4REFBQ0MsUUFBTTtnQkFBQ0MsT0FBTyxFQUFFTCxXQUFXOzBCQUFFLHFCQUFROzs7Ozt5QkFBUzswQkFDL0MsOERBQUNHLEtBQUc7Z0JBQUNHLEtBQUssRUFBRTtvQkFBRUMsU0FBUyxFQUFFLENBQUM7aUJBQUU7MEJBQzFCLDRFQUFDQyxLQUFHO29CQUFDQyxHQUFHLEVBQUVYLFdBQVc7b0JBQUVZLEdBQUcsRUFBQyxFQUFFO29CQUFDQyxLQUFLLEVBQUUsR0FBRztvQkFBRUMsTUFBTSxFQUFDLE1BQU07Ozs7OzZCQUFFOzs7Ozt5QkFDckQ7Ozs7OztpQkFDRjtBQUNoQixDQUFDO0FBRUQsaUVBQWVmLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0eXBlIH0gZnJvbSBcIm9zXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbnRlcmZhY2UgQ2F0Q2F0ZWdvcnkge1xuICBpZDogbnVtYmVyO1xuICBuYW1lOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBTZWFyY2hDYXRJbWFnZSB7XG4gIGJyZWVkczogc3RyaW5nW107XG4gIGNhdGVnb3JpZWVzOiBDYXRDYXRlZ29yeVtdO1xuICBpZDogc3RyaW5nO1xuICB1cmw6IHN0cmluZztcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG59XG5cbmNvbnN0IGNhdEltYWdlczogc3RyaW5nW10gPSBbXG4gIFwiaHR0cHM6Ly9jZG4yLnRoZWNhdGFwaS5jb20vaW1hZ2VzL2JwYy5qcGdcIixcbiAgXCJodHRwczovL2NkbjIudGhlY2F0YXBpLmNvbS9pbWFnZXMvZWFjLmpwZ1wiLFxuICBcImh0dHBzOi8vY2RuMi50aGVjYXRhcGkuY29tL2ltYWdlcy82cWkuanBnXCIsXG5dXG5cbmNvbnN0IHJhbmRvbUNhdEltYWdlID0gKCk6IHN0cmluZyA9PiB7XG4gIGNvbnN0IGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2F0SW1hZ2VzLmxlbmd0aCk7XG4gIHJldHVybiBjYXRJbWFnZXNbaW5kZXhdO1xufVxuXG50eXBlIFNlYXJjaENhdEltYWdlUmVzcG9uc2UgPSBTZWFyY2hDYXRJbWFnZVtdO1xuXG5jb25zdCBmZXRjaENhdEltYWdlID1hc3luYyAoKTogUHJvbWlzZTxTZWFyY2hDYXRJbWFnZT4gPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vYXBpLnRoZWNhdGFwaS5jb20vdjEvaW1hZ2VzL3NlYXJjaFwiKTtcbiAgY29uc3QgcmVzdWx0ID0gKGF3YWl0IHJlcy5qc29uKCkpIGFzIFNlYXJjaENhdEltYWdlUmVzcG9uc2U7XG4gIHJldHVybiByZXN1bHRbMF07XG59XG5cbmNvbnN0IEluZGV4UGFnZSA9ICgpID0+IHtcbiAgY29uc3QgW2NhdEltYWdlVXJsLCBzZXRDYXRJbWFnZVVybF0gPSB1c2VTdGF0ZShcbiAgICBcImh0dHBzOi8vY2RuMi50aGVjYXRhcGkuY29tL2ltYWdlcy9icGMuanBnXCJcbiAgKTtcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSBhc3luYygpID0+IHtcbiAgICAgY29uc3QgaW1hZ2UgPSBhd2FpdCBmZXRjaENhdEltYWdlKCk7XG4gICAgIHNldENhdEltYWdlVXJsKGltYWdlLnVybCk7XG4gIH1cbiAgICByZXR1cm4gPGRpdj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja30+5LuK5pel44Gu44Gr44KD44KT44GT8J+QiDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogOCB9fT5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17Y2F0SW1hZ2VVcmx9IGFsdD1cIlwiIHdpZHRoPXs1MDB9IGhlaWdodD1cImF1dG9cIi8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gIH07XG5cbiAgZXhwb3J0IGRlZmF1bHQgSW5kZXhQYWdlOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsImNhdEltYWdlcyIsInJhbmRvbUNhdEltYWdlIiwiaW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJmZXRjaENhdEltYWdlIiwicmVzIiwiZmV0Y2giLCJyZXN1bHQiLCJqc29uIiwiSW5kZXhQYWdlIiwiY2F0SW1hZ2VVcmwiLCJzZXRDYXRJbWFnZVVybCIsImhhbmRsZUNsaWNrIiwiaW1hZ2UiLCJ1cmwiLCJkaXYiLCJidXR0b24iLCJvbkNsaWNrIiwic3R5bGUiLCJtYXJnaW5Ub3AiLCJpbWciLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();