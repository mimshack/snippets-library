// Manipulate outgoing HTTP request headers
// For more advanced usage, see: http://developer.chrome.com/extensions/webRequest

chrome.webRequest.onBeforeSendHeaders.addListener(
  function (details) {
    for (var i = 0; i < details.requestHeaders.length; ++i) {
      if (details.requestHeaders[i].name === 'Header-Name-To-Manipulate') {
        details.requestHeaders[i].value = 'A new header value';
        break;
      }
    }
    return {requestHeaders: details.requestHeaders};
  },
  { urls: ['http://example.com/*',] },
  ['blocking', 'requestHeaders']
);
