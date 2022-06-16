import { Account } from './account.entity';
export declare class RefreshToken {
    id?: string;
    refToken: string;
    account_id: string;
    account?: Account;
}
