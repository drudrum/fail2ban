// Generated by CoffeeScript 2.3.2
(function() {
  var Fail2Error;

  Fail2Error = class Fail2Error extends Error {
    constructor(code, message) {
      super(message);
      this.code = code;
      Error.captureStackTrace(this, Fail2Error);
    }

  };

  module.exports = Fail2Error;

}).call(this);
