import { CashInflow } from 'src/entity/cash-inflow.entity';
export declare class CreateInputDto extends CashInflow {
    Titulo: string;
    Valor: number;
    account_id: string;
}
