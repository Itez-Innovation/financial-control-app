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

    async update(request: IRequest, res: Response, next: NextFunction) {
        try{
            // Essa parte aqui que não consegue receber o ID presente 
            // no JWT
            // const idToken = request.headers.authorization
            // console.log("aqui é o token: ", idToken)

            let id = request.userId

            const { CPF, Name, password} = request.body

            const passHash = await hash(password, 8)

            const response = await service.update(CPF, Name, passHash, id)

            return res.status(201).json(response)

        }catch(error){
            res.status(500).json({code: 500, message: "internal server error"})
        }
    }

    async read(request: Request, res: Response, next: NextFunction){
        try{
            const { id }= request.body

            const response = await service.read(id)

            return res.status(201).json(response)

        }catch(error){
            res.status(500).json({code: 500, message: "internal server error"})
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

    async getStats(request: Request, res: Response, next: NextFunction){
        try{

            const { id } = request.body

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
            res.status(500).json(error)
        }
    }


}

export default new AccountController()