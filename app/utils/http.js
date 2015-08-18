var http = {};

/**
 * Makes an HTTP request
 * @param  {string}   method              GET/POST/DELETE etc etc.
 * @param  {string}   url                 URL for the request.
 * @param  {function} callback            Callback that will be called as soon as the request finishes.
 * @param  {string}   data                Data that will be in the request body.
 * @param  {Array}    [opt_headers]       Request headers to be set.
 *                                        Example [['Authorization', 'Bearer X'], ['...', '...']]
 * @param  {boolean}    [opt_ignore_error]  Don't capture errors from this request in Raven.
 */
http.request = function(method, url, callback, data, opt_headers, opt_ignore_error) {

  var xhr = new XMLHttpRequest();

  xhr.onload = function() {
    var err;

    // Some HTTP 50x status codes shall cause the callback to consider the response an error.
    if (this.status >= 500 && this.status <= 504) {
      err = this;
    } else {
      err = null;
    }

    callback(err, {
      statusCode: this.status,
      responseText: this.responseText
    });
  };

  xhr.onerror = callback;
  xhr.onabort = callback;
  xhr.ontimeout = callback;

  xhr.open(method, url, true);

  if (opt_headers) {

    var i = 0, l = opt_headers.length, obj;

    for (; i < l; i++) {
      obj = opt_headers[i];
      xhr.setRequestHeader(obj[0], obj[1]);
    }
  }

  xhr.send(data);
};

module.exports = http;
