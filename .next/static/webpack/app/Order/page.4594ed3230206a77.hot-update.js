"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/Order/page",{

/***/ "(app-pages-browser)/./components/Steps.jsx":
/*!******************************!*\
  !*** ./components/Steps.jsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hooks_useCategories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/hooks/useCategories */ \"(app-pages-browser)/./hooks/useCategories.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst steps = [\n    {\n        step: 1,\n        name: \"Menu\",\n        url: \"/\"\n    },\n    {\n        step: 2,\n        name: \"Resumen\",\n        url: \"/Summary\"\n    },\n    {\n        step: 3,\n        name: \"Datos y total\",\n        url: \"/Order\"\n    }\n];\nconst Steps = ()=>{\n    _s();\n    const { handleChangeStep, step } = (0,_hooks_useCategories__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();\n    const progress = ()=>{\n        let value;\n        if (pathname === \"/\") {\n            value = 2;\n        } else if (pathname === \"/Summary\") {\n            value = 50;\n        } else if (pathname === \"/Order\") {\n            value = 100;\n        }\n        return value;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between mb-5\",\n                children: steps.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: item.url,\n                        className: \"text-2xl font-bold\",\n                        onClick: ()=>{\n                            //router.push(item.url);\n                            handleChangeStep(item.step);\n                        },\n                        children: item.name\n                    }, item.step, false, {\n                        fileName: \"C:\\\\Users\\\\LuisAntonioArellanoB\\\\Downloads\\\\Convert\\\\Apps-React\\\\QuioscoRes\\\\components\\\\Steps.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\LuisAntonioArellanoB\\\\Downloads\\\\Convert\\\\Apps-React\\\\QuioscoRes\\\\components\\\\Steps.jsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-gray-100 mb-10\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"rounded-full bg-amber-500 text-xs leading-none h-2 text-center text-white\",\n                    style: {\n                        width: \"\".concat(progress(), \"%\")\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\LuisAntonioArellanoB\\\\Downloads\\\\Convert\\\\Apps-React\\\\QuioscoRes\\\\components\\\\Steps.jsx\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\LuisAntonioArellanoB\\\\Downloads\\\\Convert\\\\Apps-React\\\\QuioscoRes\\\\components\\\\Steps.jsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Steps, \"d4lM1oJ71my3mSV6Mf2SVpNIDFY=\", false, function() {\n    return [\n        _hooks_useCategories__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname\n    ];\n});\n_c = Steps;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Steps);\nvar _c;\n$RefreshReg$(_c, \"Steps\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvU3RlcHMuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUM2QjtBQUM0QjtBQUNQO0FBRWxELE1BQU1JLFFBQVE7SUFDWjtRQUFFQyxNQUFNO1FBQUdDLE1BQU07UUFBUUMsS0FBSztJQUFJO0lBQ2xDO1FBQUVGLE1BQU07UUFBR0MsTUFBTTtRQUFXQyxLQUFLO0lBQVc7SUFDNUM7UUFBRUYsTUFBTTtRQUFHQyxNQUFNO1FBQWlCQyxLQUFLO0lBQVM7Q0FDakQ7QUFFRCxNQUFNQyxRQUFROztJQUNaLE1BQU0sRUFBRUMsZ0JBQWdCLEVBQUVKLElBQUksRUFBRSxHQUFHRixnRUFBYUE7SUFDaEQsTUFBTU8sU0FBU1QsMERBQVNBO0lBQ3hCLE1BQU1VLFdBQVdULDREQUFXQTtJQUU1QixNQUFNVSxXQUFXO1FBQ2YsSUFBSUM7UUFDSixJQUFJRixhQUFhLEtBQUs7WUFDcEJFLFFBQVE7UUFDVixPQUFPLElBQUlGLGFBQWEsWUFBWTtZQUNsQ0UsUUFBUTtRQUNWLE9BQU8sSUFBSUYsYUFBYSxVQUFVO1lBQ2hDRSxRQUFRO1FBQ1Y7UUFDQSxPQUFPQTtJQUNUO0lBRUEscUJBQ0U7OzBCQUNFLDhEQUFDQztnQkFBSUMsV0FBVTswQkFDWlgsTUFBTVksR0FBRyxDQUFDLENBQUNDLHFCQUNWLDhEQUFDakIsa0RBQUlBO3dCQUNIa0IsTUFBTUQsS0FBS1YsR0FBRzt3QkFDZFEsV0FBVTt3QkFDVkksU0FBUzs0QkFDUCx3QkFBd0I7NEJBQ3hCVixpQkFBaUJRLEtBQUtaLElBQUk7d0JBQzVCO2tDQUdDWSxLQUFLWCxJQUFJO3VCQUZMVyxLQUFLWixJQUFJOzs7Ozs7Ozs7OzBCQU1wQiw4REFBQ1M7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNEO29CQUNDQyxXQUFVO29CQUNWSyxPQUFPO3dCQUFFQyxPQUFPLEdBQWMsT0FBWFQsWUFBVztvQkFBRzs7Ozs7Ozs7Ozs7OztBQUszQztHQTFDTUo7O1FBQytCTCw0REFBYUE7UUFDakNGLHNEQUFTQTtRQUNQQyx3REFBV0E7OztLQUh4Qk07QUE0Q04sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TdGVwcy5qc3g/ZmJjOSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciwgdXNlUGF0aG5hbWUgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCB1c2VDYXRlZ29yaWVzIGZyb20gXCJAL2hvb2tzL3VzZUNhdGVnb3JpZXNcIjtcclxuXHJcbmNvbnN0IHN0ZXBzID0gW1xyXG4gIHsgc3RlcDogMSwgbmFtZTogXCJNZW51XCIsIHVybDogXCIvXCIgfSxcclxuICB7IHN0ZXA6IDIsIG5hbWU6IFwiUmVzdW1lblwiLCB1cmw6IFwiL1N1bW1hcnlcIiB9LFxyXG4gIHsgc3RlcDogMywgbmFtZTogXCJEYXRvcyB5IHRvdGFsXCIsIHVybDogXCIvT3JkZXJcIiB9LFxyXG5dO1xyXG5cclxuY29uc3QgU3RlcHMgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBoYW5kbGVDaGFuZ2VTdGVwLCBzdGVwIH0gPSB1c2VDYXRlZ29yaWVzKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgcGF0aG5hbWUgPSB1c2VQYXRobmFtZSgpO1xyXG5cclxuICBjb25zdCBwcm9ncmVzcyA9ICgpID0+IHtcclxuICAgIGxldCB2YWx1ZTtcclxuICAgIGlmIChwYXRobmFtZSA9PT0gXCIvXCIpIHtcclxuICAgICAgdmFsdWUgPSAyO1xyXG4gICAgfSBlbHNlIGlmIChwYXRobmFtZSA9PT0gXCIvU3VtbWFyeVwiKSB7XHJcbiAgICAgIHZhbHVlID0gNTA7XHJcbiAgICB9IGVsc2UgaWYgKHBhdGhuYW1lID09PSBcIi9PcmRlclwiKSB7XHJcbiAgICAgIHZhbHVlID0gMTAwO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIG1iLTVcIj5cclxuICAgICAgICB7c3RlcHMubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICBocmVmPXtpdGVtLnVybH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkXCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIC8vcm91dGVyLnB1c2goaXRlbS51cmwpO1xyXG4gICAgICAgICAgICAgIGhhbmRsZUNoYW5nZVN0ZXAoaXRlbS5zdGVwKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAga2V5PXtpdGVtLnN0ZXB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtpdGVtLm5hbWV9XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYXktMTAwIG1iLTEwXCI+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIGJnLWFtYmVyLTUwMCB0ZXh0LXhzIGxlYWRpbmctbm9uZSBoLTIgdGV4dC1jZW50ZXIgdGV4dC13aGl0ZVwiXHJcbiAgICAgICAgICBzdHlsZT17eyB3aWR0aDogYCR7cHJvZ3Jlc3MoKX0lYCB9fVxyXG4gICAgICAgID48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RlcHM7XHJcbiJdLCJuYW1lcyI6WyJMaW5rIiwidXNlUm91dGVyIiwidXNlUGF0aG5hbWUiLCJ1c2VDYXRlZ29yaWVzIiwic3RlcHMiLCJzdGVwIiwibmFtZSIsInVybCIsIlN0ZXBzIiwiaGFuZGxlQ2hhbmdlU3RlcCIsInJvdXRlciIsInBhdGhuYW1lIiwicHJvZ3Jlc3MiLCJ2YWx1ZSIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsIml0ZW0iLCJocmVmIiwib25DbGljayIsInN0eWxlIiwid2lkdGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Steps.jsx\n"));

/***/ })

});