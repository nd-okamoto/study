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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\nvar catImages = [\n    \"https://cdn2.thecatapi.com/images/bpc.jpg\",\n    \"https://cdn2.thecatapi.com/images/eac.jpg\",\n    \"https://cdn2.thecatapi.com/images/6qi.jpg\", \n];\nvar randomCatImage = function() {\n    var index = Math.floor(Math.random() * catImages.length);\n    return catImages[index];\n};\nvar fetchCatImage = function() {\n    var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(function() {\n        var res, result;\n        return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    return [\n                        4,\n                        fetch(\"https://api.thecatapi.com/v1/images/search\")\n                    ];\n                case 1:\n                    res = _state.sent();\n                    return [\n                        4,\n                        res.json()\n                    ];\n                case 2:\n                    result = _state.sent();\n                    return [\n                        2,\n                        result[0]\n                    ];\n            }\n        });\n    });\n    return function fetchCatImage() {\n        return _ref.apply(this, arguments);\n    };\n}();\nvar IndexPage = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"https://cdn2.thecatapi.com/images/bpc.jpg\"), catImageUrl = ref[0], setCatImageUrl = ref[1];\n    var handleClick = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(function() {\n            var image;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        return [\n                            4,\n                            fetchCatImage()\n                        ];\n                    case 1:\n                        image = _state.sent();\n                        setCatImageUrl(image.url);\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function handleClick() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleClick,\n                children: \"今日のにゃんこ\\uD83D\\uDC08\"\n            }, void 0, false, {\n                fileName: \"/Users/runa.okamoto/Documents/ts-test/random-cat/src/pages/index.tsx\",\n                lineNumber: 46,\n                columnNumber: 15\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    marginTop: 8\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: catImageUrl,\n                    alt: \"\"\n                }, void 0, false, {\n                    fileName: \"/Users/runa.okamoto/Documents/ts-test/random-cat/src/pages/index.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/runa.okamoto/Documents/ts-test/random-cat/src/pages/index.tsx\",\n                lineNumber: 47,\n                columnNumber: 15\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/runa.okamoto/Documents/ts-test/random-cat/src/pages/index.tsx\",\n        lineNumber: 45,\n        columnNumber: 12\n    }, _this);\n};\n_s(IndexPage, \"yLgaZuTkrUpHdbdQ51mZpjF5VBs=\");\n_c = IndexPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);\nvar _c;\n$RefreshReg$(_c, \"IndexPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7QUFDaUM7QUFnQmpDLElBQU1DLFNBQVMsR0FBYTtJQUMxQiwyQ0FBMkM7SUFDM0MsMkNBQTJDO0lBQzNDLDJDQUEyQztDQUM1QztBQUVELElBQU1DLGNBQWMsR0FBRyxXQUFjO0lBQ25DLElBQU1DLEtBQUssR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxFQUFFLEdBQUdMLFNBQVMsQ0FBQ00sTUFBTSxDQUFDO0lBQzFELE9BQU9OLFNBQVMsQ0FBQ0UsS0FBSyxDQUFDLENBQUM7QUFDMUIsQ0FBQztBQUlELElBQU1LLGFBQWE7ZUFBRSwrRkFBcUM7WUFDbERDLEdBQUcsRUFDSEMsTUFBTTs7OztvQkFEQTs7d0JBQU1DLEtBQUssQ0FBQyw0Q0FBNEMsQ0FBQztzQkFBQTs7b0JBQS9ERixHQUFHLEdBQUcsYUFBeUQ7b0JBQ3JEOzt3QkFBTUEsR0FBRyxDQUFDRyxJQUFJLEVBQUU7c0JBQUE7O29CQUExQkYsTUFBTSxHQUFJLGFBQWdCLENBQTJCO29CQUMzRDs7d0JBQU9BLE1BQU0sQ0FBQyxDQUFDLENBQUM7c0JBQUM7OztJQUNuQixDQUFDO29CQUpLRixhQUFhOzs7R0FJbEI7QUFFRCxJQUFNSyxTQUFTLEdBQUcsV0FBTTs7SUFDdEIsSUFBc0NiLEdBRXJDLEdBRnFDQSwrQ0FBUSxDQUM1QywyQ0FBMkMsQ0FDNUMsRUFGTWMsV0FBVyxHQUFvQmQsR0FFckMsR0FGaUIsRUFBRWUsY0FBYyxHQUFJZixHQUVyQyxHQUZpQztJQUdsQyxJQUFNZ0IsV0FBVzttQkFBRywrRkFBVztnQkFDdEJDLEtBQUs7Ozs7d0JBQUc7OzRCQUFNVCxhQUFhLEVBQUU7MEJBQUE7O3dCQUE3QlMsS0FBSyxHQUFHLGFBQXFCO3dCQUNuQ0YsY0FBYyxDQUFDRSxLQUFLLENBQUNDLEdBQUcsQ0FBQzs7Ozs7O1FBQzVCLENBQUM7d0JBSEtGLFdBQVc7OztPQUdoQjtJQUNDLHFCQUFPLDhEQUFDRyxLQUFHOzswQkFDRCw4REFBQ0MsUUFBTTtnQkFBQ0MsT0FBTyxFQUFFTCxXQUFXOzBCQUFFLHFCQUFROzs7OztxQkFBUzswQkFDL0MsOERBQUNHLEtBQUc7Z0JBQUNHLEtBQUssRUFBRTtvQkFBRUMsU0FBUyxFQUFFLENBQUM7aUJBQUU7MEJBQzFCLDRFQUFDQyxLQUFHO29CQUFDQyxHQUFHLEVBQUVYLFdBQVc7b0JBQUVZLEdBQUcsRUFBQyxFQUFFOzs7Ozt5QkFBRzs7Ozs7cUJBQzVCOzs7Ozs7YUFDRjtBQUNoQixDQUFDO0dBZEdiLFNBQVM7QUFBVEEsS0FBQUEsU0FBUztBQWdCYiwrREFBZUEsU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0eXBlIH0gZnJvbSBcIm9zXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbnRlcmZhY2UgQ2F0Q2F0ZWdvcnkge1xuICBpZDogbnVtYmVyO1xuICBuYW1lOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBTZWFyY2hDYXRJbWFnZSB7XG4gIGJyZWVkczogc3RyaW5nW107XG4gIGNhdGVnb3JpZWVzOiBDYXRDYXRlZ29yeVtdO1xuICBpZDogc3RyaW5nO1xuICB1cmw6IHN0cmluZztcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG59XG5cbmNvbnN0IGNhdEltYWdlczogc3RyaW5nW10gPSBbXG4gIFwiaHR0cHM6Ly9jZG4yLnRoZWNhdGFwaS5jb20vaW1hZ2VzL2JwYy5qcGdcIixcbiAgXCJodHRwczovL2NkbjIudGhlY2F0YXBpLmNvbS9pbWFnZXMvZWFjLmpwZ1wiLFxuICBcImh0dHBzOi8vY2RuMi50aGVjYXRhcGkuY29tL2ltYWdlcy82cWkuanBnXCIsXG5dXG5cbmNvbnN0IHJhbmRvbUNhdEltYWdlID0gKCk6IHN0cmluZyA9PiB7XG4gIGNvbnN0IGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2F0SW1hZ2VzLmxlbmd0aCk7XG4gIHJldHVybiBjYXRJbWFnZXNbaW5kZXhdO1xufVxuXG50eXBlIFNlYXJjaENhdEltYWdlUmVzcG9uc2UgPSBTZWFyY2hDYXRJbWFnZVtdO1xuXG5jb25zdCBmZXRjaENhdEltYWdlID1hc3luYyAoKTogUHJvbWlzZTxTZWFyY2hDYXRJbWFnZT4gPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vYXBpLnRoZWNhdGFwaS5jb20vdjEvaW1hZ2VzL3NlYXJjaFwiKTtcbiAgY29uc3QgcmVzdWx0ID0gKGF3YWl0IHJlcy5qc29uKCkpIGFzIFNlYXJjaENhdEltYWdlUmVzcG9uc2U7XG4gIHJldHVybiByZXN1bHRbMF07XG59XG5cbmNvbnN0IEluZGV4UGFnZSA9ICgpID0+IHtcbiAgY29uc3QgW2NhdEltYWdlVXJsLCBzZXRDYXRJbWFnZVVybF0gPSB1c2VTdGF0ZShcbiAgICBcImh0dHBzOi8vY2RuMi50aGVjYXRhcGkuY29tL2ltYWdlcy9icGMuanBnXCJcbiAgKTtcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSBhc3luYygpID0+IHtcbiAgICAgY29uc3QgaW1hZ2UgPSBhd2FpdCBmZXRjaENhdEltYWdlKCk7XG4gICAgIHNldENhdEltYWdlVXJsKGltYWdlLnVybClcbiAgfVxuICAgIHJldHVybiA8ZGl2PlxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT7ku4rml6Xjga7jgavjgoPjgpPjgZPwn5CIPC9idXR0b24+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiA4IH19PlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtjYXRJbWFnZVVybH0gYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgfTtcblxuICBleHBvcnQgZGVmYXVsdCBJbmRleFBhZ2U7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiY2F0SW1hZ2VzIiwicmFuZG9tQ2F0SW1hZ2UiLCJpbmRleCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsImZldGNoQ2F0SW1hZ2UiLCJyZXMiLCJyZXN1bHQiLCJmZXRjaCIsImpzb24iLCJJbmRleFBhZ2UiLCJjYXRJbWFnZVVybCIsInNldENhdEltYWdlVXJsIiwiaGFuZGxlQ2xpY2siLCJpbWFnZSIsInVybCIsImRpdiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzdHlsZSIsIm1hcmdpblRvcCIsImltZyIsInNyYyIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});