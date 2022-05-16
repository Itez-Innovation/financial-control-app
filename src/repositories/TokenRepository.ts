import dayjs = require("dayjs")
import * as jwt from "jsonwebtoken"
import { getRepository, Repository } from "typeorm"
import RefreshTokenEntity from "../entity/RefreshTokenEntity"
import RefreshToken from "../model/RefreshToken"


export default class TokenRepository {

    private repository: Repository<RefreshTokenEntity>

    constructor(){
        this.repository = getRepository(RefreshTokenEntity)
    }

    async generateRefreshToken(account_id: string) {
        const refToken = jwt.sign({userId: account_id}, process.env.SECRET, { expiresIn: "1h", subject: account_id })

        const refreshToken = new RefreshToken({ refToken, account_id })

        const generateRefreshToken = await this.repository.save(refreshToken)

        return generateRefreshToken
    }

    async generateToken(account_id: string) {
        const token = jwt.sign({userId: account_id}, process.env.SECRET, { expiresIn: "10m", subject: account_id })

        return token
    }

    async delete(id: string) {
        return this.repository.delete({id})
    }

    findById(id: string) {
        return this.repository.findOne(id)
    }

}