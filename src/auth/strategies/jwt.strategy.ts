import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AccountFromJwt } from '../models/AccountFromJwt';
import { AccountPayload } from '../models/AccountPayload';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: `${process.env.JWT_SECRET_KEY}`,
    });
  }

  async validate(payload: AccountPayload): Promise<AccountFromJwt> {
    return {
      id: payload.sub,
      CPF: payload.CPF,
      Name: payload.Name,
    };
  }
}
