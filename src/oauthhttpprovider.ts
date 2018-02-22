import { Log, UserManager, User } from 'oidc-client';

import Web3 from 'web3';
import 'xhr2';

Log.logger = console;
Log.level = Log.DEBUG;


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
export class OAuthHttpProvider extends Web3.providers.HttpProvider {
  userManager: UserManager;
  currentUser: User;
  host: string;

  constructor(host: string, timeout: number, settings: any) {
    super(host, timeout);

    var userManager = new UserManager(settings);
    var provider = this;

    userManager.getUser().then(function (user: User) {
      if (typeof (user) === 'undefined' || user === null) {
        throw Error("Not signed in");
      }
      
      return user;
    }).catch(function (err: any) {
      if (err.toString() !== "Error: Not signed in") {
        throw err;
      }

      return new UserManager(settings).signinRedirectCallback();
    }).catch(function (err: any) {
      if (err.toString() !== "Error: No state in response" && err.toString() !== "Error: No matching state found in storage") {
        throw err;
      }
      return userManager.signinRedirect({ state: 'some data' });
    }).catch(function (err: any) {
      console.log("Error setting up Web3 OAuth", err);
      throw err;
    }).then(function(user: User){
      provider.currentUser = user;
    });

    this.userManager = userManager;    
    this.host = host;
  }

  _prepareRequest(): XMLHttpRequest {
    var request = new XMLHttpRequest();
    request.open('POST', this.host, true);
    request.setRequestHeader('Content-Type','application/json');
    if (this.currentUser !== null) {
      request.setRequestHeader('Authorization', "Bearer " + this.currentUser.access_token);
    }
    return request
  }
};