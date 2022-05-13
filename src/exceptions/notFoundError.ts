import CustomError from "./customError";
import { ErrorCodes } from "./errorCode";


export default class NotFoundError extends CustomError{

    constructor(
        public identifier: string,
    )
    { super(ErrorCodes.NOT_FOUND) }

}