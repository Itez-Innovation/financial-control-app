import CustomError from './custom.error';
export default class ForbiddenError extends CustomError {
    identifier: string;
    constructor(identifier: string);
}
