import Account from "../model/Account";
import CreateAccountDto from "../dto/account/createAccountDto";
import CreateAclDto from "../dto/account/createAclDto";
import * as jwt from "jsonwebtoken"
import { compare } from "bcryptjs";
import dayjs from 'dayjs';
import NotFoundError from "../exceptions/notFoundError";
import CustomError from "../exceptions/customError";
import ConflictError from "../exceptions/conflictError";
import UnauthorizedError from "../exceptions/unauthorizedError";
import ForbiddenError from "../exceptions/forbiddenError";
import IAccountRepository from "../repositories/accountRepository/IAccountRepository";
import ITokenRepository from "../repositories/tokenRepository/ITokenRepository";
import IPermissionRepository from "../repositories/permissionRepository/IPermissionRepository";
import IRoleRepository from "../repositories/roleRepository/IRoleRepository";

export default class AccountService {
    constructor(
        private readonly repository: IAccountRepository,
        private readonly repoToken: ITokenRepository,
        private readonly permissionRepo: IPermissionRepository,
        private readonly roleRepo: IRoleRepository
    ) {}

    async create(dto: CreateAccountDto) {
        try{
            const accountAlreadyExists = await this.repository.findByCpf(dto.CPF)

            if(accountAlreadyExists) throw new ConflictError(`This account ${dto.CPF} already exists`)

            const newAccount = new Account(dto)

            return this.repository.create(newAccount);

        }catch (error) {
            if(error instanceof CustomError) throw error
            else throw new Error("Internal server error")
        }
    }

    async delete(id: string) {
        try{

            const accountFound = await this.repository.findById(id)

            if(!accountFound) throw new NotFoundError(`Account ${id}`)

            return this.repository.delete(id)

        }catch(error) {
            if(error instanceof CustomError) throw error
            else throw new Error("Internal server error")
        }
    }

    async update(CPF, Name, password, id){
        try{

            const accountFound = await this.repository.findById(id)

            if(!accountFound) throw new NotFoundError(`Account ${id}`)

            return this.repository.update(id, CPF, Name, password)

        } catch(error){
            if(error instanceof CustomError) throw error
            else throw new Error("Internal server error")
        }
    }

    async read(id: string){
        try{
            const accountFound = await this.repository.findById(id)

            if(!accountFound) throw new NotFoundError(`Account ${id}`)

            return accountFound
        } catch(error){
            if(error instanceof CustomError) throw error
            else throw new Error("Internal server error")
        }
    }

    async readAll(){
        try{
            const accountsFound = await this.repository.get_all()

            if(!accountsFound) throw new NotFoundError(`No accounts were found`)

            return accountsFound
        } catch(error){
            if(error instanceof CustomError) throw error
            else throw new Error("Internal server error")
        }
    }

    async getStats(id: string){
        try{
            const statsFound = await this.repository.getStats(id)

            if(!statsFound) throw new NotFoundError("Couldn't find Financial Stats")

            return statsFound
        } catch(error){
            if(error instanceof CustomError) throw error
            else throw new Error("Internal server error")
        }
    }

    async login(CPF: string, password: string){
        try{
            let cpfMatch = await this.repository.findByCpf(CPF)
            if(!cpfMatch) throw new NotFoundError(`CPF or Password doesn't match`)

            let passMatch = await compare(password, (await this.repository.findByCpf(CPF)).password)
            if(!passMatch) throw new NotFoundError(`CPF or Password doesn't match`)

            let acc = await this.repository.findByCpf(CPF)

            const token = await this.repoToken.generateToken(acc.id);
            
            const refreshToken = await this.repoToken.generateRefreshToken(acc.id);

            return { token, refreshToken }
        } catch (error) {
            if(error instanceof CustomError) throw error
            else throw new Error("Internal server error")
        }
    }

    async refresh(refreshToken: string) {
        let refToken = await this.repoToken.findById(refreshToken);
        
        if(!refToken) throw new UnauthorizedError("Refresh Token isn't valid")

        const { exp, sub } =  jwt.decode(refToken.refToken, { json: true })

        const refreshTokenExpired = dayjs().isAfter(dayjs.unix(exp))

        if(refreshTokenExpired) {
            await this.repoToken.delete(refToken.id);
            throw new ForbiddenError("Refresh Token Expired!")
        }

        return this.repoToken.generateToken(sub);
    }

    async createACL(dto: CreateAclDto) {
        try{
            const { userId, roles, permissions } = dto

            const user = await this.repository.findById(userId);

            if(!user) throw new NotFoundError("Couldn't find this account")

            const permissionsExists = await this.permissionRepo.findByIds(permissions);
            const rolesExists = await this.roleRepo.findByIds(roles);

            user.permissions = permissionsExists;
            user.roles = rolesExists;

            this.repository.create(user);

            return user;

        } catch (error) {
            if(error instanceof CustomError) throw error
            else throw new Error("Internal server error")
        }
    }   

}