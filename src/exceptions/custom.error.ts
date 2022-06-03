import { ErrorCode } from './error-code.error';

export default class CustomError extends Error {
  constructor(
    public errorCode: ErrorCode,
    public service?: string,
    public data?: any,
  ) {
    super();
  }
}
