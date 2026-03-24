const CustomAPIError = require("./custom-error");

class UnAuthError extends CustomAPIError {
    constructor(message) {
        super(message);
        this.statusCode = 401;
    }
}

module.exports = UnAuthError;