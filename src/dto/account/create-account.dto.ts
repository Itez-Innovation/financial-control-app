import { IsString, MinLength } from 'class-validator';
import { Account } from 'src/entity/account.entity';

export class CreateAccountDto extends Account {
  CPF: string;

  @IsString()
  Name: string;

  @IsString()
  @MinLength(4)
  password: string;
}
