import RefreshToken from "src/model/RefreshToken";
import RefreshTokenEntity from "../../entity/RefreshTokenEntity";


export default interface ITokenRepository {
    generateRefreshToken(account_id: string): Promise<RefreshTokenEntity | RefreshToken>;
    generateToken(account_id: string): Promise<string>;
    delete(id: string): Promise<any>;
    findById(id: string): Promise<RefreshTokenEntity | undefined>;
}