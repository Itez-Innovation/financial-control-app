import CustomError from './custom.error';
export default class BadRequestError extends CustomError {
    identifier: string;
    constructor(identifier: string);
}
