"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const custom_error_1 = require("./custom.error");
const error_code_error_1 = require("./error-code.error");
class NotFoundError extends custom_error_1.default {
    constructor(identifier) {
        super(error_code_error_1.ErrorCodes.NOT_FOUND);
        this.identifier = identifier;
    }
}
exports.default = NotFoundError;
//# sourceMappingURL=not-found.error.js.map