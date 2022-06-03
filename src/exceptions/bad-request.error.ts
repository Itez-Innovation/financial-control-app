import CustomError from './custom.error';
import { ErrorCodes } from './error-code.error';

export default class BadRequestError extends CustomError {
  constructor(public identifier: string) {
    super(ErrorCodes.BAD_REQUEST);
  }
}
