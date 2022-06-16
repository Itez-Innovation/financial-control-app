import { ESetores } from '../../enum/setores.enum';

export class UpdateOutputDto {
  Area?: ESetores;
  Titulo?: string;
  Valor?: number;
}
