/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./service-worker.js":
/*!***************************!*\
  !*** ./service-worker.js ***!
  \***************************/
/***/ (() => {

eval("importScripts(\r\n  \"https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js\"\r\n);\r\n\r\nworkbox.routing.registerRoute(\r\n  ({ request }) => request.destination === \"image\",\r\n  new workbox.strategies.CacheFirst()\r\n);\r\n\r\nworkbox.routing.registerRoute(\r\n  ({ request }) =>\r\n    request.destination === \"script\" || request.destination === \"style\",\r\n  new workbox.strategies.StaleWhileRevalidate()\r\n);\r\n\r\nworkbox.routing.registerRoute(\r\n  ({ request }) => request.mode === \"navigate\",\r\n  new workbox.strategies.NetworkFirst()\r\n);\r\n\n\n//# sourceURL=webpack://test/./service-worker.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./service-worker.js"]();
/******/ 	
/******/ })()
;