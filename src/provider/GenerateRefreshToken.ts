import { getRepository, Repository } from 'typeorm';
import RefreshTokenEntity from "../entity/RefreshTokenEntity";
import * as dayjs from "dayjs"

export default class GenerateRefreshToken {

    private repository: Repository<RefreshTokenEntity>

    constructor(){
        this.repository = getRepository(RefreshTokenEntity)
    }

    async generate(userId: string) {
        const expiresIn = dayjs().add(15, "second").unix()

        const generateRefreshToken = await this.repository.create({
            account_id: userId,
            expiresIn
        })

        return generateRefreshToken
    }
}