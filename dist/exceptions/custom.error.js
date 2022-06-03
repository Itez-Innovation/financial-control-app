"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CustomError extends Error {
    constructor(errorCode, service, data) {
        super();
        this.errorCode = errorCode;
        this.service = service;
        this.data = data;
    }
}
exports.default = CustomError;
//# sourceMappingURL=custom.error.js.map