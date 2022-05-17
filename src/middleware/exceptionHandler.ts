import { NextFunction, Request, Response } from "express";
import BadRequestError from "../exceptions/badRequestError";
import ConflictError from "../exceptions/conflictError";
import CustomError from "../exceptions/customError";
import { ErrorCodes } from "../exceptions/errorCode";
import ForbiddenError from "../exceptions/forbiddenError";
import NotFoundError from "../exceptions/notFoundError";
import UnauthorizedError from "../exceptions/unauthorizedError";

export default function (error: any, request: Request, response: Response, next: NextFunction){
    switch (error.constructor) {
        case NotFoundError:
            return response.status(404).json({
                code: ErrorCodes.NOT_FOUND.code,
                message: ErrorCodes.NOT_FOUND.message,
                identifier: error.identifier
            })
            break;
        case UnauthorizedError:
            return response.status(401).json({
                code: ErrorCodes.UNAUTHORIZED.code,
                message: ErrorCodes.UNAUTHORIZED.message,
                identifier: error.identifier
            })
            break;
        case BadRequestError:
            return response.status(400).json({
                code: ErrorCodes.BAD_REQUEST.code,
                message: ErrorCodes.BAD_REQUEST.message,
                identifier: error.identifier
            })
            break;
        case ForbiddenError:
            return response.status(403).json({
                code: ErrorCodes.FORBIDDEN.code,
                message: ErrorCodes.FORBIDDEN.message,
                identifier: error.identifier
            })
        case ConflictError:
            return response.status(409).json({
                code: ErrorCodes.CONFLICT.code,
                message: ErrorCodes.CONFLICT.message,
                identifier: error.identifier
            })
        case CustomError:
            // Usar um if para definir o erro e a msg específica
            // if(error.errorCode == "CONFLICT"){
            //     return response.status(409).json({
            //         code: ErrorCodes.CONFLICT.code,
            //         message: ErrorCodes.CONFLICT.message,
            //         identifier: error.identifier
            //     })
            // }
            break;
        default:
            return response.status(500).json({
                code: ErrorCodes.INTERNAL_SERVER_ERROR.code,
                message: ErrorCodes.INTERNAL_SERVER_ERROR.message
            })
            break;
    }

}