import CustomError from './custom.error';
import { ErrorCodes } from './error-code.error';

export default class NotFoundError extends CustomError {
  constructor(public identifier: string) {
    super(ErrorCodes.NOT_FOUND);
  }
}
