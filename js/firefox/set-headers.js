// Manipulate outgoing HTTP request headers
// Service API: https://developer.mozilla.org/en-US/docs/XPCOM_Interface_Reference/nsIObserverService

var {Cc, Ci, Cr} = require('chrome');

var observer = {
  observe: function(subject, topic, data) {
    if (topic == 'http-on-modify-request') {
      var channel = subject.QueryInterface(Ci.nsIHttpChannel);
      if (/example\.com/.test(channel.originalURI.host)) {
        channel.setRequestHeader('Header-Name-To-Manipulate', 'A new header value', false);
      }
    }
  }
};

var observerService = Cc['@mozilla.org/observer-service;1'].getService(Ci.nsIObserverService);
observerService.addObserver(observer, 'http-on-modify-request', false);
