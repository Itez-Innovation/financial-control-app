import { Strategy } from 'passport-jwt';
import { AccountFromJwt } from '../models/AccountFromJwt';
import { AccountPayload } from '../models/AccountPayload';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    constructor();
    validate(payload: AccountPayload): Promise<AccountFromJwt>;
}
export {};
