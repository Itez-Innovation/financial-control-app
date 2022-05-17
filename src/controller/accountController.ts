import { AccountService } from "../service/accountService";
import { NextFunction, Request, Response } from "express";
import { hash } from "bcryptjs"
import { IRequest } from "../utils/utils";

const service = new AccountService()

class AccountController {

    async create(request: Request, res: Response, next: NextFunction) {
        try {

            const { CPF, Name, password } = request.body

            const passHash = await hash(password, 8)

            const response = await service.create({ CPF, Name , password: passHash})

            return res.status(201).json(response)

        }catch (error) {
            res.status(500).json({code: 500, message: "internal server error"})
        }
    }

    async delete(request: IRequest, res: Response, next: NextFunction) {
        try {

            const id  = request.userId

            await service.delete(id)

            return res.status(204).json()

        }catch (error) {
            res.status(500).json({code: 500, message: "internal server error"})
        }
    }

    async deleteAdmin(request: Request, res: Response, next: NextFunction) {
        try {

            const { id }  = request.body

            await service.delete(id)

            return res.status(204).json()

        }catch (error) {
            res.status(500).json({code: 500, message: "internal server error"})
        }
    }

    async update(request: IRequest, res: Response, next: NextFunction) {
        try{
            let id = request.body

            const { CPF, Name, password } = request.body

            const passHash = await hash(password, 8)

            const response = await service.update(CPF, Name, passHash, id)

            return res.status(201).json(response)

        }catch(error){
            res.status(500).json({code: 500, message: "internal server error"})
        }
    }

    async updateAdmin(request: Request, res: Response, next: NextFunction) {
        try{

            const { id, CPF, Name, password } = request.body

            const passHash = await hash(password, 8)

            const response = await service.update(CPF, Name, passHash, id)

            return res.status(201).json(response)

        }catch(error){
            res.status(500).json({code: 500, message: "internal server error"})
        }
    }

    async read(request: IRequest, res: Response, next: NextFunction){
        try{
            const id = request.userId

            const response = await service.read(id)

            return res.status(201).json(response)

        }catch(error){
            next(error)
        }
    }

    async readAdmin(request: Request, res: Response, next: NextFunction){
        try{
            const { id }= request.body

            const response = await service.read(id)

            return res.status(201).json(response)

        }catch(error){
            next(error)
        }
    }

    async readAll(request: Request, res: Response, next: NextFunction){
        try{

            const response = await service.readAll()

            return res.status(201).json(response)

        }catch(error){
            res.status(500).json({code: 500, message: "internal server error"})
        }
    }

    async getStatsAdmin(request: Request, res: Response, next: NextFunction){
        try{

            const { id } = request.body

            const response = await service.getStats(id)

            return res.status(201).json(response)

        } catch(error){
            res.status(500).json({code: 500, message: "internal server error"})
        }
    }

    async getStats(request: IRequest, res: Response, next: NextFunction){
        try{

            const id = request.userId

            const response = await service.getStats(id)

            return res.status(201).json(response)

        } catch(error){
            res.status(500).json({code: 500, message: "internal server error"})
        }
    }

    async login(request: Request, res: Response, next: NextFunction){
        try{

            const { CPF, password } = request.body

            const token = await service.login(CPF, password)

            return res.status(201).json(token)

        } catch(error){
            res.status(500).json({code: 500, message: "internal server error"})
        }
    }

    async refresh(request: Request, res: Response, next: NextFunction){
        try{
            const refreshToken = request.params

            const response = await service.refresh(refreshToken.id)

            return res.status(201).json(response)

        } catch(error){
            res.status(401).json({code: 401, message: "Unauthorized"})
        }
    }

    async createAcl(request: IRequest, res: Response, next: NextFunction){
        try{

            const { permissions, roles } = request.body;

            const userId = request.userId;

            const response = await service.createACL({userId, permissions, roles})

            return res.status(201).json(response)

        } catch(error){
            res.status(400).json(error.message)
        }
    }
}

export default new AccountController()