import { RefreshToken } from 'src/entity/refreshToken.entity';

export default class CreateRefreshTokenDto extends RefreshToken {
  refToken: string;
  account_id: string;
}
