import CustomError from './custom.error';
import { ErrorCodes } from './error-code.error';

export default class UnauthorizedError extends CustomError {
  constructor(public identifier: string) {
    super(ErrorCodes.UNAUTHORIZED);
  }
}
