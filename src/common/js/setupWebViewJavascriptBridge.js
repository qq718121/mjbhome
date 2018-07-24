import Ob from './obshare'

let iph = navigator.userAgent.match(/(iPhone|iPod|iPad);?/i);
let az = navigator.userAgent.match(/android/i);
function setupWebViewJavascriptBridge(callback) {
  if (window.WebViewJavascriptBridge) {
    return callback(WebViewJavascriptBridge);
  }
  if (window.WVJBCallbacks) {
    return window.WVJBCallbacks.push(callback);
  }
  window.WVJBCallbacks = [callback];
  var WVJBIframe = document.createElement('iframe');
  WVJBIframe.style.display = 'none';
  WVJBIframe.src = 'wvjbscheme://__BRIDGE_LOADED__';
  document.documentElement.appendChild(WVJBIframe);
  setTimeout(function () {
    document.documentElement.removeChild(WVJBIframe)
  }, 0)
}
if (iph) {
//native调用js
  setupWebViewJavascriptBridge(function (bridge) {
    bridge.registerHandler('testJSFunction', function (data, responseCallback) {
      if (data) {
        window.sessionStorage.setItem('token', data.token);
      }
      responseCallback('js执行过了');
    })
  });
} else if (az) {
  window.testJSFunctions = function (data) {
    if (data) {
      window.sessionStorage.setItem('token', data);
    }
  };
}
export default setupWebViewJavascriptBridge;

