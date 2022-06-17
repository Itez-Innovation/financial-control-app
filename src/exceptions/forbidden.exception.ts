import CustomError from './custom.error';
import { ErrorCodes } from './errorCode';

export default class ForbiddenError extends CustomError {
  constructor(public identifier: string) {
    super(ErrorCodes.FORBIDDEN);
  }
}
