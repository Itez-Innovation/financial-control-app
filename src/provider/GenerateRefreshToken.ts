// import { getRepository, Repository } from 'typeorm';
// import RefreshTokenEntity from "../entity/RefreshTokenEntity";
// import * as dayjs from "dayjs"

// import RefreshToken from '../model/RefreshToken';

// export default class GenerateRefreshToken {

//     private repository: Repository<RefreshTokenEntity>

//     constructor(){
//         this.repository = getRepository(RefreshTokenEntity)
//     }

//     async generate(account_id: string) {
//         const expiresIn = dayjs().add(1, "hour").unix()

//         const refreshToken = new RefreshToken({expiresIn, account_id})

//         const generateRefreshToken = await this.repository.save(refreshToken)

//         return generateRefreshToken
//     }

//     async delete(id: string) {
//         return this.repository.delete({id})
//     }

//     findById(id: string) {
//         return this.repository.findOne(id)
//     }

    
// }