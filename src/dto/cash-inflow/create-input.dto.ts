import { CashInflow } from 'src/entity/cash-inflow.entity';

export class CreateInputDto extends CashInflow {
  Titulo: string;
  Valor: number;
  account_id: string;
}
