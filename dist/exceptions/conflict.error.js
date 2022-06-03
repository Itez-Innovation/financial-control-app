"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const custom_error_1 = require("./custom.error");
const error_code_error_1 = require("./error-code.error");
class ConflictError extends custom_error_1.default {
    constructor(identifier) {
        super(error_code_error_1.ErrorCodes.CONFLICT);
        this.identifier = identifier;
    }
}
exports.default = ConflictError;
//# sourceMappingURL=conflict.error.js.map