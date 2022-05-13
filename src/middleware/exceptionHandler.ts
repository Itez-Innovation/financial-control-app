import { NextFunction, Request, Response } from "express";
import CustomError from "../exceptions/customError";
import { ErrorCodes } from "../exceptions/errorCode";
import NotFoundError from "../exceptions/notFoundError";

export default function (error: any, request: Request, response: Response, next: NextFunction){
    switch (error.constructor) {
        case NotFoundError:
            return response.status(404).json({
                code: ErrorCodes.NOT_FOUND.code,
                message: ErrorCodes.NOT_FOUND.message,
                identifier: error.identifier
            })
            break;

        case CustomError:
            // Usar um if para definir o erro e a msg específica
            break;
    
        default:
            return response.status(500).json({
                code: ErrorCodes.INTERNAL_SERVER_ERROR.code,
                message: ErrorCodes.INTERNAL_SERVER_ERROR.message
            })
            break;
    }

}