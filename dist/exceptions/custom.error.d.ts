import { ErrorCode } from './error-code.error';
export default class CustomError extends Error {
    errorCode: ErrorCode;
    service?: string;
    data?: any;
    constructor(errorCode: ErrorCode, service?: string, data?: any);
}
