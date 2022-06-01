import { ESetores } from '../../enum/setores.enum';

export class CreateInputDto {
  Area: ESetores;
  Titulo: string;
  Valor: number;
  account_id: string;
}
