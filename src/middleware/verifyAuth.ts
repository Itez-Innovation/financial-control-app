import { NextFunction, Request, Response } from "express";
import { decode, verify } from "jsonwebtoken";
import UnauthorizedError from "../exceptions/unauthorizedError";
import { IRequest } from "../utils/utils";

export const verifyAuth = (request: IRequest, response: Response, next: NextFunction) => {

        const authHeaders = request.headers.authorization;

        if(!authHeaders) {
            throw new UnauthorizedError("Missing Token!");
        }

        const [, token] = authHeaders.split(" ");

        try{
            verify(token, process.env.SECRET);

            const { sub } = decode(token);
            
            request.userId = sub.toString();
            return next();
        } catch (err) {
            throw new UnauthorizedError("Invalid Token!");
        }

}