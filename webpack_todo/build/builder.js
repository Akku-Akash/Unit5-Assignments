/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\r\nlet btn=document.querySelector(\"#btn\");\r\nbtn.setAttribute(\"class\",\"submit_btn\")\r\nlet form =document.querySelector(\"form\");\r\nform.setAttribute(\"class\",\"taskForm\")\r\ndocument.querySelector(\"#submit\").addEventListener(\"submit\",(e)=>{\r\n    e.preventDefault();\r\n    let task_name=document.querySelector(\"#task\").value;\r\n    let id=Math.floor(Math.random()*10)+1;\r\n    append(task_name,id);\r\n})\r\n\r\nfunction append(task,id){\r\n    let row=document.createElement(\"tr\");\r\n    row.setAttribute(\"class\",\"row\");\r\n    let td1=document.createElement(\"td\");\r\n    let td2=document.createElement(\"td\");\r\n    let td3=document.createElement(\"td\");\r\n    let button=document.createElement(\"button\");\r\n    button.textContent=\"Delete\"\r\n    button.setAttribute(\"id\",\"deletebtn\")\r\n    td1.textContent=task;\r\n    td2.textContent=id;\r\n    td3.append(button);\r\n    row.append(td2,td1,td3);\r\n    document.querySelector(\"tbody\").append(row);\r\n\r\n}\n\n//# sourceURL=webpack://webpack_todo/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;