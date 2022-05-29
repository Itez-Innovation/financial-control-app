import { setores } from '../../enum/setores.enum';

export class CreateInputDto {
  Area: setores;
  Titulo: string;
  Valor: number;
}
