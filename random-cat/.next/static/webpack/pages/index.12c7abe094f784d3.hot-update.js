"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\nvar catImages = [\n    \"https://cdn2.thecatapi.com/images/bpc.jpg\",\n    \"https://cdn2.thecatapi.com/images/eac.jpg\",\n    \"https://cdn2.thecatapi.com/images/6qi.jpg\", \n];\nvar randomCatImage = function() {\n    var index = Math.floor(Math.random() * catImages.length);\n    return catImages[index];\n};\nvar fetchCatImage = function() {\n    var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(function() {\n        var res, result;\n        return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    return [\n                        4,\n                        fetch(\"https://api.thecatapi.com/v1/images/search\")\n                    ];\n                case 1:\n                    res = _state.sent();\n                    return [\n                        4,\n                        res.json()\n                    ];\n                case 2:\n                    result = _state.sent();\n                    return [\n                        2,\n                        result[0]\n                    ];\n            }\n        });\n    });\n    return function fetchCatImage() {\n        return _ref.apply(this, arguments);\n    };\n}();\nfetchCatImage().then(function(image) {\n    console.log(\"猫の画像：\".concat(image.url));\n});\nvar IndexPage = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"https://cdn2.thecatapi.com/images/bpc.jpg\"), catImageUrl = ref[0], setCatImageUrl = ref[1];\n    var handleClick = function() {\n        setCatImageUrl(randomCatImage());\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleClick,\n                children: \"今日のにゃんこ\\uD83D\\uDC08\"\n            }, void 0, false, {\n                fileName: \"/Users/runa.okamoto/Documents/ts-test/random-cat/src/pages/index.tsx\",\n                lineNumber: 32,\n                columnNumber: 15\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    marginTop: 8\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: catImageUrl,\n                    alt: \"\"\n                }, void 0, false, {\n                    fileName: \"/Users/runa.okamoto/Documents/ts-test/random-cat/src/pages/index.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/runa.okamoto/Documents/ts-test/random-cat/src/pages/index.tsx\",\n                lineNumber: 33,\n                columnNumber: 15\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/runa.okamoto/Documents/ts-test/random-cat/src/pages/index.tsx\",\n        lineNumber: 31,\n        columnNumber: 12\n    }, _this);\n};\n_s(IndexPage, \"yLgaZuTkrUpHdbdQ51mZpjF5VBs=\");\n_c = IndexPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);\nvar _c;\n$RefreshReg$(_c, \"IndexPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7QUFBaUM7QUFFakMsSUFBTUMsU0FBUyxHQUFhO0lBQzFCLDJDQUEyQztJQUMzQywyQ0FBMkM7SUFDM0MsMkNBQTJDO0NBQzVDO0FBRUQsSUFBTUMsY0FBYyxHQUFHLFdBQWM7SUFDbkMsSUFBTUMsS0FBSyxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLEVBQUUsR0FBR0wsU0FBUyxDQUFDTSxNQUFNLENBQUM7SUFDMUQsT0FBT04sU0FBUyxDQUFDRSxLQUFLLENBQUMsQ0FBQztBQUMxQixDQUFDO0FBRUQsSUFBTUssYUFBYTtlQUFFLCtGQUFZO1lBQ3pCQyxHQUFHLEVBQ0hDLE1BQU07Ozs7b0JBREE7O3dCQUFNQyxLQUFLLENBQUMsNENBQTRDLENBQUM7c0JBQUE7O29CQUEvREYsR0FBRyxHQUFHLGFBQXlEO29CQUN0RDs7d0JBQU1BLEdBQUcsQ0FBQ0csSUFBSSxFQUFFO3NCQUFBOztvQkFBekJGLE1BQU0sR0FBRyxhQUFnQjtvQkFDL0I7O3dCQUFPQSxNQUFNLENBQUMsQ0FBQyxDQUFDO3NCQUFDOzs7SUFDbkIsQ0FBQztvQkFKS0YsYUFBYTs7O0dBSWxCO0FBRURBLGFBQWEsRUFBRSxDQUFDSyxJQUFJLENBQUMsU0FBQ0MsS0FBSyxFQUFLO0lBQzlCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxPQUFNLENBQVksT0FBVkYsS0FBSyxDQUFDRyxHQUFHLENBQUUsQ0FBQztBQUNsQyxDQUFDLENBQUM7QUFFRixJQUFNQyxTQUFTLEdBQUcsV0FBTTs7SUFDdEIsSUFBc0NsQixHQUVyQyxHQUZxQ0EsK0NBQVEsQ0FDNUMsMkNBQTJDLENBQzVDLEVBRk1tQixXQUFXLEdBQW9CbkIsR0FFckMsR0FGaUIsRUFBRW9CLGNBQWMsR0FBSXBCLEdBRXJDLEdBRmlDO0lBR2xDLElBQU1xQixXQUFXLEdBQUcsV0FBTTtRQUN4QkQsY0FBYyxDQUFDbEIsY0FBYyxFQUFFLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBQ0MscUJBQU8sOERBQUNvQixLQUFHOzswQkFDRCw4REFBQ0MsUUFBTTtnQkFBQ0MsT0FBTyxFQUFFSCxXQUFXOzBCQUFFLHFCQUFROzs7OztxQkFBUzswQkFDL0MsOERBQUNDLEtBQUc7Z0JBQUNHLEtBQUssRUFBRTtvQkFBRUMsU0FBUyxFQUFFLENBQUM7aUJBQUU7MEJBQzFCLDRFQUFDQyxLQUFHO29CQUFDQyxHQUFHLEVBQUVULFdBQVc7b0JBQUVVLEdBQUcsRUFBQyxFQUFFOzs7Ozt5QkFBRzs7Ozs7cUJBQzVCOzs7Ozs7YUFDRjtBQUNoQixDQUFDO0dBYkdYLFNBQVM7QUFBVEEsS0FBQUEsU0FBUztBQWViLCtEQUFlQSxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IGNhdEltYWdlczogc3RyaW5nW10gPSBbXG4gIFwiaHR0cHM6Ly9jZG4yLnRoZWNhdGFwaS5jb20vaW1hZ2VzL2JwYy5qcGdcIixcbiAgXCJodHRwczovL2NkbjIudGhlY2F0YXBpLmNvbS9pbWFnZXMvZWFjLmpwZ1wiLFxuICBcImh0dHBzOi8vY2RuMi50aGVjYXRhcGkuY29tL2ltYWdlcy82cWkuanBnXCIsXG5dXG5cbmNvbnN0IHJhbmRvbUNhdEltYWdlID0gKCk6IHN0cmluZyA9PiB7XG4gIGNvbnN0IGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2F0SW1hZ2VzLmxlbmd0aCk7XG4gIHJldHVybiBjYXRJbWFnZXNbaW5kZXhdO1xufVxuXG5jb25zdCBmZXRjaENhdEltYWdlID1hc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9hcGkudGhlY2F0YXBpLmNvbS92MS9pbWFnZXMvc2VhcmNoXCIpO1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXMuanNvbigpO1xuICByZXR1cm4gcmVzdWx0WzBdO1xufVxuXG5mZXRjaENhdEltYWdlKCkudGhlbigoaW1hZ2UpID0+IHtcbiAgY29uc29sZS5sb2coYOeMq+OBrueUu+WDj++8miR7aW1hZ2UudXJsfWApXG59KVxuXG5jb25zdCBJbmRleFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFtjYXRJbWFnZVVybCwgc2V0Q2F0SW1hZ2VVcmxdID0gdXNlU3RhdGUoXG4gICAgXCJodHRwczovL2NkbjIudGhlY2F0YXBpLmNvbS9pbWFnZXMvYnBjLmpwZ1wiXG4gICk7XG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgIHNldENhdEltYWdlVXJsKHJhbmRvbUNhdEltYWdlKCkpO1xuICB9XG4gICAgcmV0dXJuIDxkaXY+XG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2t9PuS7iuaXpeOBruOBq+OCg+OCk+OBk/CfkIg8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IDggfX0+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2NhdEltYWdlVXJsfSBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICB9O1xuXG4gIGV4cG9ydCBkZWZhdWx0IEluZGV4UGFnZTsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJjYXRJbWFnZXMiLCJyYW5kb21DYXRJbWFnZSIsImluZGV4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwiZmV0Y2hDYXRJbWFnZSIsInJlcyIsInJlc3VsdCIsImZldGNoIiwianNvbiIsInRoZW4iLCJpbWFnZSIsImNvbnNvbGUiLCJsb2ciLCJ1cmwiLCJJbmRleFBhZ2UiLCJjYXRJbWFnZVVybCIsInNldENhdEltYWdlVXJsIiwiaGFuZGxlQ2xpY2siLCJkaXYiLCJidXR0b24iLCJvbkNsaWNrIiwic3R5bGUiLCJtYXJnaW5Ub3AiLCJpbWciLCJzcmMiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ }),

/***/ "./node_modules/@swc/helpers/src/_async_to_generator.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/@swc/helpers/src/_async_to_generator.mjs ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ _asyncToGenerator; }\n/* harmony export */ });\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n  try {\n    var info = gen[key](arg);\n    var value = info.value;\n  } catch (error) {\n    reject(error);\n    return;\n  }\n\n  if (info.done) {\n    resolve(value);\n  } else {\n    Promise.resolve(value).then(_next, _throw);\n  }\n}\n\nfunction _asyncToGenerator(fn) {\n  return function () {\n    var self = this,\n      args = arguments;\n    return new Promise(function (resolve, reject) {\n      var gen = fn.apply(self, args);\n\n      function _next(value) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n      }\n\n      function _throw(err) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n      }\n\n      _next(undefined);\n    });\n  };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQHN3Yy9oZWxwZXJzL3NyYy9fYXN5bmNfdG9fZ2VuZXJhdG9yLm1qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0Bzd2MvaGVscGVycy9zcmMvX2FzeW5jX3RvX2dlbmVyYXRvci5tanM/MmZlOCJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/@swc/helpers/src/_async_to_generator.mjs\n"));

/***/ }),

/***/ "./node_modules/@swc/helpers/src/_ts_generator.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/@swc/helpers/src/_ts_generator.mjs ***!
  \*********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* reexport safe */ tslib__WEBPACK_IMPORTED_MODULE_0__.__generator; }\n/* harmony export */ });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQHN3Yy9oZWxwZXJzL3NyYy9fdHNfZ2VuZXJhdG9yLm1qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUE4QyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHN3Yy9oZWxwZXJzL3NyYy9fdHNfZ2VuZXJhdG9yLm1qcz8wNDZjIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IF9fZ2VuZXJhdG9yIGFzIGRlZmF1bHQgfSBmcm9tICd0c2xpYidcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/@swc/helpers/src/_ts_generator.mjs\n"));

/***/ })

});