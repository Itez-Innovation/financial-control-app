import { Request } from 'express';
import { Account } from 'src/entity/account.entity';
export interface AuthRequest extends Request {
    account: Account;
}
