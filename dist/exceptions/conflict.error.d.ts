import CustomError from './custom.error';
export default class ConflictError extends CustomError {
    identifier: string;
    constructor(identifier: string);
}
