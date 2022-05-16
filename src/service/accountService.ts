import Account from "../model/Account";
import CreateAccountDto from "../dto/account/createAccountDto";
import CreateAclDto from "../dto/account/createAclDto";
import AccountRepository from "../repositories/AccountRepository";
import TokenRepository from "../repositories/TokenRepository";
import * as jwt from "jsonwebtoken"
import { compare } from "bcryptjs";
import * as dayjs from 'dayjs'
import { getRepository } from "typeorm";
import PermissionEntity from "../entity/PermissionEntity";
import RoleEntity from "../entity/RoleEntity";
import NotFoundError from "../exceptions/notFoundError";
import CustomError from "../exceptions/customError";

export class AccountService {

    constructor(
        private readonly repository = new AccountRepository(),
        private readonly repoToken = new TokenRepository(),
        private readonly permissionRepo = getRepository(PermissionEntity),
        private readonly roleRepo = getRepository(RoleEntity)
    ) {}


    async create(dto: CreateAccountDto) {

        try{

            const {CPF} = dto

            const accountAlreadyExists = await this.repository.findByCpf(CPF)

            if(accountAlreadyExists) throw new Error("Account already exists")

            const newAccount = new Account(dto)

            return this.repository.create(newAccount);

        }catch (error) {
            throw new Error(error)
        }
    }

    async delete(id: string) {
        try{

            const accountFound = await this.repository.findById(id)

            if(!accountFound) throw new Error("Account not found")

            return this.repository.delete(id)

        }catch(error) {
            throw new Error(error)
        }
    }

    async update(CPF, Name, password, id){
        try{

            const accountFound = await this.repository.findById(id)

            if(!accountFound) throw new Error("Account not found")

            return this.repository.update(id, CPF, Name, password)

        } catch(error){
            throw new Error(error)
        }
    }

    async read(id: string){
        try{
            const accountFound = await this.repository.findById(id)

            if(!accountFound) throw new NotFoundError(`Account ${id}`)

            return this.repository.findById(id)
        } catch(error){
            console.log("OIOIOIO ", error)
            if(error instanceof CustomError) throw error
            else throw new Error("Internal server error")
        }
    }

    async readAll(){
        try{
            const accountsFound = await this.repository.get_all()

            if(!accountsFound) throw new Error("Accounts not found")

            return this.repository.get_all()
        } catch(error){
            throw new Error(error)
        }
    }

    async getStats(id: string){
        try{
            const statsFound = await this.repository.getStats(id)

            if(!statsFound) throw new Error("Stats not found")
            return statsFound
        } catch(error){
            throw new Error(error)
        }
    }

    async login(CPF: string, password: string){
        try{
            let cpfMatch = await this.repository.findByCpf(CPF)
            if(!cpfMatch) throw new Error("Account not found")

            let passMatch = await compare(password, (await this.repository.findByCpf(CPF)).password)
            if(!passMatch) throw new Error("Password doesn't match")

            let acc = await this.repository.findByCpf(CPF)

            const token = await this.repoToken.generateToken(acc.id);
            
            const refreshToken = await this.repoToken.generateRefreshToken(acc.id);

            return { token, refreshToken }
        } catch (error) {
            throw new Error(error)
        }
    }

    async refresh(refreshToken: string) {
        let refToken = await this.repoToken.findById(refreshToken);
        
        if(!refToken) throw new Error("Invalid Refresh Token")

        const { exp, sub } =  jwt.decode(refToken.refToken, { json: true })

        const refreshTokenExpired = dayjs().isAfter(dayjs.unix(exp))

        if(refreshTokenExpired) {
            await this.repoToken.delete(refToken.id);
            throw new Error("Refresh token expired!")
            // await this.repoToken.delete(refToken.id);
            // refToken = await this.repoToken.generateRefreshToken(refToken.account_id);
        }

        const token = await this.repoToken.generateToken(sub);

        return token
    }

    async createACL(dto: CreateAclDto) {
        try{
            const { userId, roles, permissions } = dto

            const user = await this.repository.findById(userId);

            if(!user) throw new Error("User does not exists!")

            const permissionsExists = await this.permissionRepo.findByIds(permissions);
            const rolesExists = await this.roleRepo.findByIds(roles);

            user.permissions = permissionsExists;
            user.roles = rolesExists;

            this.repository.create(user);

            return user;

        } catch (error) {
            throw new Error(error)
        }
    }   

}