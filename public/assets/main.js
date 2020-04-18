/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/css/main.scss":
/*!*********************************!*\
  !*** ./resources/css/main.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/js/main.js":
/*!******************************!*\
  !*** ./resources/js/main.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _toggle_class_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toggle-class.js */ "./resources/js/toggle-class.js");
/* harmony import */ var _toggle_class_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_toggle_class_js__WEBPACK_IMPORTED_MODULE_0__);
 //get total of articles

var totalItems = document.querySelectorAll('article').length;
var totalNumber = document.getElementById("numberOfItems");
totalNumber.innerHTML = totalItems; // show numbers of checked item in counter

var clickOnArticle = document.querySelectorAll('article');
var numberOfItems = document.getElementById("checkedItems");
var totalChecked = document.getElementsByClassName('active').length;

function addCheckedItemsToDiv() {
  totalChecked++;
  numberOfItems.innerHTML = totalChecked;

  if (totalChecked === totalItems) {
    timeToCelebrate(); // window.alert('Good job. Tijd om de deur achter je toe te trekken.')
  }
}

;

for (var i = 0; i < clickOnArticle.length; i++) {
  clickOnArticle[i].addEventListener("click", addCheckedItemsToDiv);
} // show fun gif when all checks are completed


function timeToCelebrate() {
  var celebrate = document.getElementById("celebration");
  celebrate.classList.remove("hidden");
}

/***/ }),

/***/ "./resources/js/toggle-class.js":
/*!**************************************!*\
  !*** ./resources/js/toggle-class.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (!Array.from) {
  Array.from = function () {
    var toStr = Object.prototype.toString;

    var isCallable = function isCallable(fn) {
      return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
    };

    var toInteger = function toInteger(value) {
      var number = Number(value);

      if (isNaN(number)) {
        return 0;
      }

      if (number === 0 || !isFinite(number)) {
        return number;
      }

      return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
    };

    var maxSafeInteger = Math.pow(2, 53) - 1;

    var toLength = function toLength(value) {
      var len = toInteger(value);
      return Math.min(Math.max(len, 0), maxSafeInteger);
    }; // The length property of the from method is 1.


    return function from(arrayLike
    /*, mapFn, thisArg */
    ) {
      // 1. Let C be the this value.
      var C = this; // 2. Let items be ToObject(arrayLike).

      var items = Object(arrayLike); // 3. ReturnIfAbrupt(items).

      if (arrayLike == null) {
        throw new TypeError("Array.from requires an array-like object - not null or undefined");
      } // 4. If mapfn is undefined, then let mapping be false.


      var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
      var T;

      if (typeof mapFn !== 'undefined') {
        // 5. else
        // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
        if (!isCallable(mapFn)) {
          throw new TypeError('Array.from: when provided, the second argument must be a function');
        } // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.


        if (arguments.length > 2) {
          T = arguments[2];
        }
      } // 10. Let lenValue be Get(items, "length").
      // 11. Let len be ToLength(lenValue).


      var len = toLength(items.length); // 13. If IsConstructor(C) is true, then
      // 13. a. Let A be the result of calling the [[Construct]] internal method of C with an argument list containing the single item len.
      // 14. a. Else, Let A be ArrayCreate(len).

      var A = isCallable(C) ? Object(new C(len)) : new Array(len); // 16. Let k be 0.

      var k = 0; // 17. Repeat, while k < len… (also steps a - h)

      var kValue;

      while (k < len) {
        kValue = items[k];

        if (mapFn) {
          A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
        } else {
          A[k] = kValue;
        }

        k += 1;
      } // 18. Let putStatus be Put(A, "length", len, true).


      A.length = len; // 20. Return A.

      return A;
    };
  }();
}

if (!String.prototype.includes) {
  String.prototype.includes = function (search, start) {
    'use strict';

    if (typeof start !== 'number') {
      start = 0;
    }

    if (start + search.length > this.length) {
      return false;
    } else {
      return this.indexOf(search, start) !== -1;
    }
  };
}
/*
| ---------------------------------------------------------------
| Class Toggle functionality
| ----------------------------------------------------------------
| Allows to toggle classes for the target selectors. Default class is 'hidden'
| which resp. hides or shows the target element.
| e.g. data-toggle-class="#dropdown"
| The class can be specifically given: data-toggle-class="#dropdown,hidden"
| Multiple targets can be set as well: data-toggle-class="#dropdown,hidden|#backdrop"
*/


;

(function () {
  function handleToggle(e) {
    e.preventDefault();
    var trigger = this,
        targetSelectors = trigger.getAttribute('data-toggle-class').split('|');
    targetSelectors.forEach(function (targetSelector) {
      var targets = document.querySelectorAll(targetSelector.split(',')[0]),
          className = targetSelector.includes(',') ? targetSelector.split(',')[1] : 'hidden',
          triggerClassName = 'active';
      Array.from(targets).forEach(function (target) {
        if (target.classList.contains(className)) {
          trigger.classList.add(triggerClassName);
          target.classList.remove(className);
        } else {
          trigger.classList.remove(triggerClassName);
          target.classList.add(className);
        }
      });
    });
  }

  window.registerClassToggles = function () {
    var toggles = document.querySelectorAll('[data-toggle-class]');
    Array.from(toggles).forEach(function (trigger) {
      trigger.removeEventListener('click', handleToggle);
    });
    Array.from(toggles).forEach(function (trigger) {
      trigger.addEventListener('click', handleToggle);
    });
  };

  window.registerClassToggles();
})();

/***/ }),

/***/ 0:
/*!**************************************************************!*\
  !*** multi ./resources/js/main.js ./resources/css/main.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/johnnyberkmans/Documents/GitHub/checklist/resources/js/main.js */"./resources/js/main.js");
module.exports = __webpack_require__(/*! /Users/johnnyberkmans/Documents/GitHub/checklist/resources/css/main.scss */"./resources/css/main.scss");


/***/ })

/******/ });