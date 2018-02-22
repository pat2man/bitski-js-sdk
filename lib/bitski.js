(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("web3"), require("Oidc"));
	else if(typeof define === 'function' && define.amd)
		define(["web3", "Oidc"], factory);
	else if(typeof exports === 'object')
		exports["bitski"] = factory(require("web3"), require("Oidc"));
	else
		root["bitski"] = factory(root["web3"], root["Oidc"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["InitializeWeb3"] = InitializeWeb3;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_web3__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_web3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_web3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__oauthhttpprovider__ = __webpack_require__(2);


/**
 * Initialize [Web3](https://github.com/ethereum/web3) with Bitski. This will be ignored if a web3 object already exists.
 * @param {Object} settings
 * @param {string} settings.authority - Authority URL
 * @param {string} settings.client_id - Your unique client ID (sign up at bitski.co)
 * @param {string} settings.redirect_uri - URL to redirect to
 * @param {string} settings.post_logout_redirect_uri - URL to redirect to after log out
 * @param {string} settings.response_type - Response type
 * @param {string} settings.scope - Requested scope
 * @param {string} settings.popup_redirect_uri - URL to redirect to using popup method
 * @param {string} settings.popup_post_logout_redirect_uri - URL to redirect to after log out
 * @param {string} settings.silent_redirect_uri - URL to redirect to using silent method
 * @param {Boolean} settings.automaticSilentRenew - Automatically renew using silent method
 * @param {number} settings.silentRequestTimeout - Timeout for silent request in seconds
 * @param {Boolean} settings.filterProtocolClaims - Filter protocol claims
 * @param {Boolean} settings.loadUserInfo - Whether or not to automatically load the user's info
 * @example
 * // Set up Bitski for exampledapp.co
 * web3 = InitializeWeb3({
 *   authority: 'https://hydra.outtherelabs.com/',
 *   client_id: 'YOUR-CLIENT-ID',
 *   redirect_uri: 'https://exampledapp.co/',
 *   post_logout_redirect_uri: 'https://exampledapp.co',
 *   response_type: 'token id_token',
 *   scope: 'openid',
 *   popup_redirect_uri: 'https://exampledapp.co',
 *   popup_post_logout_redirect_uri: 'https://exampledapp.co',
 *   silent_redirect_uri: 'https://exampledapp.co',
 *   automaticSilentRenew: true,
 *   silentRequestTimeout: 10000,
 *   filterProtocolClaims: true,
 *   loadUserInfo: true
 * });
 * @returns {Web3} Web3 object configured for Bitski.
 */
function InitializeWeb3(settings) {
    var provider = new __WEBPACK_IMPORTED_MODULE_1__oauthhttpprovider__["a" /* OAuthHttpProvider */]("https://keep-api.outtherelabs.com/v1/web3/kovan", 0, settings);
    var web3Client = new __WEBPACK_IMPORTED_MODULE_0_web3___default.a(provider);
    return web3Client;
}
;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OAuthHttpProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_oidc_client__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_oidc_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_oidc_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_web3__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_web3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_web3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_xhr2__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_xhr2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_xhr2__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



__WEBPACK_IMPORTED_MODULE_0_oidc_client__["Log"].logger = console;
__WEBPACK_IMPORTED_MODULE_0_oidc_client__["Log"].level = __WEBPACK_IMPORTED_MODULE_0_oidc_client__["Log"].DEBUG;
/**
 * A class that extends Web3's HTTPProvider by adding OAuth to JSON-RPC calls
 * @class
 * @param {string} host - JSON-RPC endpoint
 * @param {number} timeout - Timeout in seconds
 * @param {Object} settings - settings object for configuring OAuth, see {@link InitializeWeb3}
 * @example
 * // Set up a new HTTPOAuthProvider
 * var settings = {
 *   authority: 'https://hydra.outtherelabs.com/',
 *   client_id: 'YOUR-CLIENT-ID',
 *   redirect_uri: 'https://exampledapp.co/',
 *   post_logout_redirect_uri: 'https://exampledapp.co',
 *   response_type: 'token id_token',
 *   scope: 'openid',
 *   popup_redirect_uri: 'https://exampledapp.co',
 *   popup_post_logout_redirect_uri: 'https://exampledapp.co',
 *   silent_redirect_uri: 'https://exampledapp.co',
 *   automaticSilentRenew: true,
 *   silentRequestTimeout: 10000,
 *   filterProtocolClaims: true,
 *   loadUserInfo: true
 * };
 * var provider = new OAuthHttpProvider('https://my-rpc-server.com', 1000, settings);
 */
var OAuthHttpProvider = /** @class */ (function (_super) {
    __extends(OAuthHttpProvider, _super);
    function OAuthHttpProvider(host, timeout, settings) {
        var _this = _super.call(this, host, timeout) || this;
        var userManager = new __WEBPACK_IMPORTED_MODULE_0_oidc_client__["UserManager"](settings);
        var provider = _this;
        userManager.getUser().then(function (user) {
            if (typeof (user) === 'undefined' || user === null) {
                throw Error("Not signed in");
            }
            return user;
        }).catch(function (err) {
            if (err.toString() !== "Error: Not signed in") {
                throw err;
            }
            return new __WEBPACK_IMPORTED_MODULE_0_oidc_client__["UserManager"](settings).signinRedirectCallback();
        }).catch(function (err) {
            if (err.toString() !== "Error: No state in response" && err.toString() !== "Error: No matching state found in storage") {
                throw err;
            }
            return userManager.signinRedirect({ state: 'some data' });
        }).catch(function (err) {
            console.log("Error setting up Web3 OAuth", err);
            throw err;
        }).then(function (user) {
            provider.currentUser = user;
        });
        _this.userManager = userManager;
        _this.host = host;
        return _this;
    }
    OAuthHttpProvider.prototype._prepareRequest = function () {
        var request = new XMLHttpRequest();
        request.open('POST', this.host, true);
        request.setRequestHeader('Content-Type', 'application/json');
        if (this.currentUser !== null) {
            request.setRequestHeader('Authorization', "Bearer " + this.currentUser.access_token);
        }
        return request;
    };
    return OAuthHttpProvider;
}(__WEBPACK_IMPORTED_MODULE_1_web3___default.a.providers.HttpProvider));

;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = XMLHttpRequest;


/***/ })
/******/ ]);
});
//# sourceMappingURL=bitski.js.map