import { NextFunction, Request, Response } from "express";
import { decode, verify } from "jsonwebtoken";
import { IRequest } from "../utils/utils";

export const verifyAuth = (request: IRequest, response: Response, next: NextFunction) => {

        const authHeaders = request.headers.authorization;

        if(!authHeaders) {
            return response.status(401).json({error:"Token is missing"})
        }

        // O formato do token é:
        // Bearer tokendjkahsdkasjhdkajshdkajhsaldjk
        const [, token] = authHeaders.split(" ");
        // Por isso, pegamos apenas o token após o espaço

        try{
            verify(token, process.env.SECRET);

            const { sub } = decode(token);
            
            request.userId = sub.toString();
            return next();
        } catch (err) {
            return response.status(401).json("Invalid Token!");
        }

}