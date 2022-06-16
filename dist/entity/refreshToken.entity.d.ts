import { AccountEntity } from './account.entity';
export declare class RefreshTokenEntity {
    id?: string;
    refToken: string;
    account_id: string;
    account?: AccountEntity;
}
