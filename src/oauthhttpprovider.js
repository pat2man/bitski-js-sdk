"use strict";
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
exports.__esModule = true;
var oidc_client_1 = require("oidc-client");
var web3_1 = require("web3");
require("xhr2");
oidc_client_1.Log.logger = console;
oidc_client_1.Log.level = oidc_client_1.Log.DEBUG;
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
        var userManager = new oidc_client_1.UserManager(settings);
        var provider = _this;
        userManager.getUser().then(function (user) {
            if (typeof (user) === 'undefined' || user === null) {
                throw Error("Not signed in");
            }
            return user;
        })["catch"](function (err) {
            if (err.toString() !== "Error: Not signed in") {
                throw err;
            }
            return new oidc_client_1.UserManager(settings).signinRedirectCallback();
        })["catch"](function (err) {
            if (err.toString() !== "Error: No state in response" && err.toString() !== "Error: No matching state found in storage") {
                throw err;
            }
            return userManager.signinRedirect({ state: 'some data' });
        })["catch"](function (err) {
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
}(web3_1["default"].providers.HttpProvider));
exports.OAuthHttpProvider = OAuthHttpProvider;
;
