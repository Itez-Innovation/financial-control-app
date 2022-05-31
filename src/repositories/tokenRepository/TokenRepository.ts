import dayjs = require("dayjs")
import * as jwt from "jsonwebtoken"
import { getRepository, Repository } from "typeorm"
import RefreshTokenEntity from "../../entity/RefreshTokenEntity"
import RefreshToken from "../../model/RefreshToken"
import ITokenRepository from "./ITokenRepository"

export default class TokenRepository implements ITokenRepository{

    private repository: Repository<RefreshTokenEntity>

    constructor(){
        this.repository = getRepository(RefreshTokenEntity)
    }

    async generateRefreshToken(account_id: string) {
        const refToken = jwt.sign({userId: account_id}, process.env.SECRET, { expiresIn: "1h", subject: account_id })

        const refreshToken = new RefreshToken({ refToken, account_id })

        const result: RefreshTokenEntity | RefreshToken = await this.repository.save(refreshToken)

        return result
    }

    async generateToken(account_id: string) {
        return jwt.sign({userId: account_id}, process.env.SECRET, { expiresIn: "10m", subject: account_id })
    }

    async delete(id: string) {
        return this.repository.delete({id})
    }

    findById(id: string) {
        return this.repository.findOne(id)
    }

}