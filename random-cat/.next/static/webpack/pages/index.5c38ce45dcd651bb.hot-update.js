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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\nvar catImages = [\n    \"https://cdn2.thecatapi.com/images/bpc.jpg\",\n    \"https://cdn2.thecatapi.com/images/eac.jpg\",\n    \"https://cdn2.thecatapi.com/images/6qi.jpg\", \n];\nvar randomCatImage = function() {\n    var index = Math.floor(Math.random() * catImages.length);\n    return catImages[index];\n};\nvar fetchCatImage = function() {\n    var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(function() {\n        var res, result;\n        return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    return [\n                        4,\n                        fetch(\"https://api.thecatapi.com/v1/images/search\")\n                    ];\n                case 1:\n                    res = _state.sent();\n                    return [\n                        4,\n                        res.json()\n                    ];\n                case 2:\n                    result = _state.sent();\n                    return [\n                        2,\n                        result[0]\n                    ];\n            }\n        });\n    });\n    return function fetchCatImage() {\n        return _ref.apply(this, arguments);\n    };\n}();\nvar IndexPage = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"https://cdn2.thecatapi.com/images/bpc.jpg\"), catImageUrl = ref[0], setCatImageUrl = ref[1];\n    var handleClick = function() {\n        setCatImageUrl(randomCatImage());\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleClick,\n                children: \"今日のにゃんこ\\uD83D\\uDC08\"\n            }, void 0, false, {\n                fileName: \"/Users/runa.okamoto/Documents/ts-test/random-cat/src/pages/index.tsx\",\n                lineNumber: 45,\n                columnNumber: 15\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    marginTop: 8\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: catImageUrl,\n                    alt: \"\"\n                }, void 0, false, {\n                    fileName: \"/Users/runa.okamoto/Documents/ts-test/random-cat/src/pages/index.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/runa.okamoto/Documents/ts-test/random-cat/src/pages/index.tsx\",\n                lineNumber: 46,\n                columnNumber: 15\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/runa.okamoto/Documents/ts-test/random-cat/src/pages/index.tsx\",\n        lineNumber: 44,\n        columnNumber: 12\n    }, _this);\n};\n_s(IndexPage, \"yLgaZuTkrUpHdbdQ51mZpjF5VBs=\");\n_c = IndexPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);\nvar _c;\n$RefreshReg$(_c, \"IndexPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7QUFDaUM7QUFFakMsSUFBTUMsU0FBUyxHQUFhO0lBQzFCLDJDQUEyQztJQUMzQywyQ0FBMkM7SUFDM0MsMkNBQTJDO0NBQzVDO0FBRUQsSUFBTUMsY0FBYyxHQUFHLFdBQWM7SUFDbkMsSUFBTUMsS0FBSyxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLEVBQUUsR0FBR0wsU0FBUyxDQUFDTSxNQUFNLENBQUM7SUFDMUQsT0FBT04sU0FBUyxDQUFDRSxLQUFLLENBQUMsQ0FBQztBQUMxQixDQUFDO0FBRUQsSUFBTUssYUFBYTtlQUFFLCtGQUFZO1lBQ3pCQyxHQUFHLEVBQ0hDLE1BQU07Ozs7b0JBREE7O3dCQUFNQyxLQUFLLENBQUMsNENBQTRDLENBQUM7c0JBQUE7O29CQUEvREYsR0FBRyxHQUFHLGFBQXlEO29CQUN0RDs7d0JBQU1BLEdBQUcsQ0FBQ0csSUFBSSxFQUFFO3NCQUFBOztvQkFBekJGLE1BQU0sR0FBRyxhQUFnQjtvQkFDL0I7O3dCQUFPQSxNQUFNLENBQUMsQ0FBQyxDQUFDO3NCQUFDOzs7SUFDbkIsQ0FBQztvQkFKS0YsYUFBYTs7O0dBSWxCO0FBa0JELElBQU1LLFNBQVMsR0FBRyxXQUFNOztJQUN0QixJQUFzQ2IsR0FFckMsR0FGcUNBLCtDQUFRLENBQzVDLDJDQUEyQyxDQUM1QyxFQUZNYyxXQUFXLEdBQW9CZCxHQUVyQyxHQUZpQixFQUFFZSxjQUFjLEdBQUlmLEdBRXJDLEdBRmlDO0lBR2xDLElBQU1nQixXQUFXLEdBQUcsV0FBTTtRQUN4QkQsY0FBYyxDQUFDYixjQUFjLEVBQUUsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFDQyxxQkFBTyw4REFBQ2UsS0FBRzs7MEJBQ0QsOERBQUNDLFFBQU07Z0JBQUNDLE9BQU8sRUFBRUgsV0FBVzswQkFBRSxxQkFBUTs7Ozs7cUJBQVM7MEJBQy9DLDhEQUFDQyxLQUFHO2dCQUFDRyxLQUFLLEVBQUU7b0JBQUVDLFNBQVMsRUFBRSxDQUFDO2lCQUFFOzBCQUMxQiw0RUFBQ0MsS0FBRztvQkFBQ0MsR0FBRyxFQUFFVCxXQUFXO29CQUFFVSxHQUFHLEVBQUMsRUFBRTs7Ozs7eUJBQUc7Ozs7O3FCQUM1Qjs7Ozs7O2FBQ0Y7QUFDaEIsQ0FBQztHQWJHWCxTQUFTO0FBQVRBLEtBQUFBLFNBQVM7QUFlYiwrREFBZUEsU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0eXBlIH0gZnJvbSBcIm9zXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBjYXRJbWFnZXM6IHN0cmluZ1tdID0gW1xuICBcImh0dHBzOi8vY2RuMi50aGVjYXRhcGkuY29tL2ltYWdlcy9icGMuanBnXCIsXG4gIFwiaHR0cHM6Ly9jZG4yLnRoZWNhdGFwaS5jb20vaW1hZ2VzL2VhYy5qcGdcIixcbiAgXCJodHRwczovL2NkbjIudGhlY2F0YXBpLmNvbS9pbWFnZXMvNnFpLmpwZ1wiLFxuXVxuXG5jb25zdCByYW5kb21DYXRJbWFnZSA9ICgpOiBzdHJpbmcgPT4ge1xuICBjb25zdCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNhdEltYWdlcy5sZW5ndGgpO1xuICByZXR1cm4gY2F0SW1hZ2VzW2luZGV4XTtcbn1cblxuY29uc3QgZmV0Y2hDYXRJbWFnZSA9YXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vYXBpLnRoZWNhdGFwaS5jb20vdjEvaW1hZ2VzL3NlYXJjaFwiKTtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgcmV0dXJuIHJlc3VsdFswXTtcbn1cblxuaW50ZXJmYWNlIENhdENhdGVnb3J5IHtcbiAgaWQ6IG51bWJlcjtcbiAgbmFtZTogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgU2VhcmNoQ2F0SW1hZ2Uge1xuICBicmVlZHM6IHN0cmluZ1tdO1xuICBjYXRlZ29yaWVlczogQ2F0Q2F0ZWdvcnlbXTtcbiAgaWQ6IHN0cmluZztcbiAgdXJsOiBzdHJpbmc7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xufVxuXG50eXBlIFNlYXJjaENhdEltYWdlUmVzcG9uc2UgPSBTZWFyY2hDYXRJbWFnZVtdO1xuXG5jb25zdCBJbmRleFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFtjYXRJbWFnZVVybCwgc2V0Q2F0SW1hZ2VVcmxdID0gdXNlU3RhdGUoXG4gICAgXCJodHRwczovL2NkbjIudGhlY2F0YXBpLmNvbS9pbWFnZXMvYnBjLmpwZ1wiXG4gICk7XG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgIHNldENhdEltYWdlVXJsKHJhbmRvbUNhdEltYWdlKCkpO1xuICB9XG4gICAgcmV0dXJuIDxkaXY+XG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2t9PuS7iuaXpeOBruOBq+OCg+OCk+OBk/CfkIg8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IDggfX0+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2NhdEltYWdlVXJsfSBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICB9O1xuXG4gIGV4cG9ydCBkZWZhdWx0IEluZGV4UGFnZTsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJjYXRJbWFnZXMiLCJyYW5kb21DYXRJbWFnZSIsImluZGV4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwiZmV0Y2hDYXRJbWFnZSIsInJlcyIsInJlc3VsdCIsImZldGNoIiwianNvbiIsIkluZGV4UGFnZSIsImNhdEltYWdlVXJsIiwic2V0Q2F0SW1hZ2VVcmwiLCJoYW5kbGVDbGljayIsImRpdiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzdHlsZSIsIm1hcmdpblRvcCIsImltZyIsInNyYyIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});