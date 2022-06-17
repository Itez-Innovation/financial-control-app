import CustomError from './custom.error';
import { ErrorCodes } from './errorCode';

export default class UnauthorizedError extends CustomError {
  constructor(public identifier: string) {
    super(ErrorCodes.UNAUTHORIZED);
  }
}
