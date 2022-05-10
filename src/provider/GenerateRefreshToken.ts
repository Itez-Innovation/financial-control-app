import { getRepository, Repository } from 'typeorm';
import RefreshTokenEntity from "../entity/RefreshTokenEntity";
import * as dayjs from "dayjs"

import RefreshToken from '../model/RefreshToken';

export default class GenerateRefreshToken {

    private repository: Repository<RefreshTokenEntity>

    constructor(){
        this.repository = getRepository(RefreshTokenEntity)
    }

    async generate(account_id: string) {
        const expiresIn = dayjs().add(15, "second").unix()

        const refreshToken = new RefreshToken({expiresIn, account_id})

        const generateRefreshToken = await this.repository.save(refreshToken)

        return generateRefreshToken
    }

    findById(id: string) {
        return this.repository.findOne(id)
    }
}