class HttpError {
  constructor(msg, statusCode) {
    this.msg = msg;
    this.statusCode = statusCode;
  }
}

module.exports = HttpError;
