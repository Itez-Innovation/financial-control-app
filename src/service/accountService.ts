
import Account from "../model/Account";
import CreateAccountDto from "../dto/account/createAccountDto";
import AccountRepository from "../repositories/AccountRepository";
import { compare } from "bcryptjs";
import * as jwt from "jsonwebtoken"
import AccountEntity from "../entity/AccountEntity";
import { config } from "dotenv";
import GenerateRefreshToken from "../provider/GenerateRefreshToken";
import { getRepository } from "typeorm";
import RefreshTokenEntity from "../entity/RefreshTokenEntity";


export class AccountService {

    constructor(
        private readonly repository = new AccountRepository(),
        private readonly repoRefToken = getRepository(RefreshTokenEntity)
    ) {}


    async create(dto: CreateAccountDto) {

        try{

            const {CPF} = dto

            const accountAlreadyExists = await this.repository.findByCpf(CPF)

            if(accountAlreadyExists) throw new Error("Account already exists")

            const newAccount = new Account(dto)

            console.log(newAccount)

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

            const token = jwt.sign({userId: acc.id}, process.env.SECRET, { expiresIn: "30s", subject: acc.id })
            
            const generateRefreshToken = new GenerateRefreshToken();
            const refreshToken = await generateRefreshToken.generate(acc.id)

            return { token, refreshToken }
        } catch (error) {
            throw new Error(error)
        }
    }

    async refresh(refreshToken: string) {
        const generateRefreshToken = new GenerateRefreshToken();
        const refToken = await generateRefreshToken.findById(refreshToken)
        
        if(!refToken) throw new Error("Invalid Refresh Token")

        const token = jwt.sign({userId: refToken.account_id}, process.env.SECRET, { expiresIn: "1h", subject: refToken.account_id })
    
        return token
    }

}