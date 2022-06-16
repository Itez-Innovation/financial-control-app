import { CashOutflow } from 'src/entity/cash-outflow.entity';
import { ESetores } from '../../enum/setores.enum';

export class CreateOutputDto extends CashOutflow {
  Area: ESetores;
  Titulo: string;
  Valor: number;
  account_id: string;
}
