import CustomError from './custom.error';
export default class UnauthorizedError extends CustomError {
    identifier: string;
    constructor(identifier: string);
}
