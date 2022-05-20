import AccountService from "../service/accountService";
import { NextFunction, Request, Response } from "express";
import { hash } from "bcryptjs"
import { IRequest } from "../utils/utils";
import AccountRepository from "../repositories/accountRepository/AccountRepository";
import TokenRepository from "../repositories/tokenRepository/TokenRepository";
import PermissionRepository from "../repositories/permissionRepository/PermissionRepository";
import RoleRepository from "../repositories/roleRepository/RoleRepository";

const service = new AccountService(new AccountRepository(), new TokenRepository(), new PermissionRepository(), new RoleRepository())

class AccountController {

    async create(request: Request, res: Response, next: NextFunction) {
        try {

            const { CPF, Name, password } = request.body

            const passHash = await hash(password, 8)

            const response = await service.create({ CPF, Name , password: passHash})

            return res.status(201).json(response)

        }catch (error) {
            next(error)
        }
    }

    async delete(request: IRequest, res: Response, next: NextFunction) {
        try {

            const id  = request.userId

            await service.delete(id)

            return res.status(202).json()

        }catch (error) {
            next(error)
        }
    }

    async deleteAdmin(request: Request, res: Response, next: NextFunction) {
        try {

            const { id }  = request.body

            await service.delete(id)

            return res.status(202).json()

        }catch (error) {
            next(error)
        }
    }

    async update(request: IRequest, res: Response, next: NextFunction) {
        try{
            let id = request.body

            const { CPF, Name, password } = request.body

            const passHash = await hash(password, 8)

            const response = await service.update(CPF, Name, passHash, id)

            return res.status(200).json(response)

        }catch(error){
            next(error)
        }
    }

    async updateAdmin(request: Request, res: Response, next: NextFunction) {
        try{

            const { id, CPF, Name, password } = request.body

            const passHash = await hash(password, 8)

            const response = await service.update(CPF, Name, passHash, id)

            return res.status(200).json(response)

        }catch(error){
            next(error)
        }
    }

    async read(request: IRequest, res: Response, next: NextFunction){
        try{
            const id = request.userId

            const response = await service.read(id)

            return res.status(200).json(response)

        }catch(error){
            next(error)
        }
    }

    async readAdmin(request: Request, res: Response, next: NextFunction){
        try{
            const { id }= request.body

            const response = await service.read(id)

            return res.status(200).json(response)

        }catch(error){
            next(error)
        }
    }

    async readAll(request: Request, res: Response, next: NextFunction){
        try{

            const response = await service.readAll()

            return res.status(200).json(response)

        }catch(error){
            next(error)
        }
    }

    async getStatsAdmin(request: Request, res: Response, next: NextFunction){
        try{

            const { id } = request.body

            const response = await service.getStats(id)

            return res.status(200).json(response)

        } catch(error){
            next(error)
        }
    }

    async getStats(request: IRequest, res: Response, next: NextFunction){
        try{

            const id = request.userId

            const response = await service.getStats(id)

            return res.status(200).json(response)

        } catch(error){
            next(error)
        }
    }

    async login(request: Request, res: Response, next: NextFunction){
        try{

            const { CPF, password } = request.body

            const token = await service.login(CPF, password)

            return res.status(200).json(token)

        } catch(error){
            next(error)
        }
    }

    async refresh(request: Request, res: Response, next: NextFunction){
        try{
            const refreshToken = request.params

            const response = await service.refresh(refreshToken.id)

            return res.status(200).json(response)

        } catch(error){
            next(error)
        }
    }

    async createAcl(request: IRequest, res: Response, next: NextFunction){
        try{

            const { permissions, roles } = request.body;

            const userId = request.userId;

            const response = await service.createACL({userId, permissions, roles})

            return res.status(201).json(response)

        } catch(error){
            next(error)
        }
    }
}

export default new AccountController()