import CustomError from './custom.error';
export default class NotFoundError extends CustomError {
    identifier: string;
    constructor(identifier: string);
}
