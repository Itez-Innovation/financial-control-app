import CustomError from './custom.error';
import { ErrorCodes } from './errorCode';

export default class ConflictError extends CustomError {
  constructor(public identifier: string) {
    super(ErrorCodes.CONFLICT);
  }
}
