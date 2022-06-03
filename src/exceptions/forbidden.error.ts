import CustomError from './custom.error';
import { ErrorCodes } from './error-code.error';

export default class ForbiddenError extends CustomError {
  constructor(public identifier: string) {
    super(ErrorCodes.FORBIDDEN);
  }
}
