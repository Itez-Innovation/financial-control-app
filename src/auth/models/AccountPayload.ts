export interface AccountPayload {
  sub: string;
  CPF: string;
  Name: string;
  role: string;
  iat?: number;
  exp?: number;
}
