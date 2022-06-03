"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const custom_error_1 = require("./custom.error");
const error_code_error_1 = require("./error-code.error");
class BadRequestError extends custom_error_1.default {
    constructor(identifier) {
        super(error_code_error_1.ErrorCodes.BAD_REQUEST);
        this.identifier = identifier;
    }
}
exports.default = BadRequestError;
//# sourceMappingURL=bad-request.error.js.map