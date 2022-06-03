"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const custom_error_1 = require("./custom.error");
const error_code_error_1 = require("./error-code.error");
class ForbiddenError extends custom_error_1.default {
    constructor(identifier) {
        super(error_code_error_1.ErrorCodes.FORBIDDEN);
        this.identifier = identifier;
    }
}
exports.default = ForbiddenError;
//# sourceMappingURL=forbidden.error.js.map