import { IsEmail, IsString } from 'class-validator';

export class LoginRequestBody {
  @IsString()
  CPF: string;

  @IsString()
  password: string;
}
