import { ErrorCode } from './errorCode';

export default class CustomError extends Error {
  constructor(
    public errorCode: ErrorCode,
    public service?: string,
    public data?: any,
  ) {
    super();
  }
}
