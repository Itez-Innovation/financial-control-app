import { Account } from 'src/entity/account.entity';
export declare class CreateAccountDto extends Account {
    CPF: string;
    Name: string;
    password: string;
}
