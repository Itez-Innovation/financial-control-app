
import Account from "../model/Account";
import CreateAccountDto from "../dto/account/createAccountDto";
import CreateAclDto from "../dto/account/createAclDto";
import AccountRepository from "../repositories/AccountRepository";
import TokenRepository from "../repositories/TokenRepository";
import { compare } from "bcryptjs";
import * as jwt from "jsonwebtoken"
import * as dayjs from 'dayjs'
// import GenerateRefreshToken from "../provider/GenerateRefreshToken";
import { getRepository } from "typeorm";
import RefreshTokenEntity from "../entity/RefreshTokenEntity";
// import GenerateToken from "../provider/GenerateToken";
import PermissionRepository from "../repositories/PermissionRepository";
import PermissionEntity from "../entity/PermissionEntity";
import RoleEntity from "../entity/RoleEntity";

export class AccountService {

    constructor(
        private readonly repository = new AccountRepository(),
        private readonly repoToken = new TokenRepository(),
        // private readonly repoRefToken = getRepository(RefreshTokenEntity),
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

            if(!accountFound) throw new Error("Account not found")

            return this.repository.findById(id)
        } catch(error){
            throw new Error(error)
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

            // const generateToken = new GenerateToken();
            // const token = await generateToken.generate(acc.id);
            const token = await this.repoToken.generateToken(acc.id);
            
            // const generateRefreshToken = new GenerateRefreshToken();
            // const refreshToken = await generateRefreshToken.generate(acc.id)
            const refreshToken = await this.repoToken.generateRefreshToken(acc.id);

            return { token, refreshToken }
        } catch (error) {
            throw new Error(error)
        }
    }

    async refresh(refreshToken: string) {
        // const generateRefreshToken = new GenerateRefreshToken();
        // let refToken = await generateRefreshToken.findById(refreshToken)
        let refToken = await this.repoToken.findById(refreshToken);
        
        if(!refToken) throw new Error("Invalid Refresh Token")

        const refreshTokenExpired = dayjs().isAfter(dayjs.unix(refToken.expiresIn))

        //const newRefToken = await generateRefreshToken.generate(refToken.account_id);
        if(refreshTokenExpired) {
            // generateRefreshToken.delete(refToken.id);
            return new Error("Refresh token expired!")
        }

        // const generateToken = new GenerateToken();
        // const token = await generateToken.generate(refToken.account_id);
        const token = await this.repoToken.generateToken(refToken.account_id);

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