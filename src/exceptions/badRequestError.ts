import CustomError from "./customError";
import { ErrorCodes } from "./errorCode";

export default class BadRequestError extends CustomError {

    constructor (
        public identifier: string,
    ) {
        super(ErrorCodes.BAD_REQUEST)
    }
}