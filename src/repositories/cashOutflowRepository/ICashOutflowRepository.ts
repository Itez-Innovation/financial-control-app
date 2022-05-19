import CashOutflowEntity from "../../entity/CashOutflowEntity";
import Output from "../../model/CashOutflow";


export default interface ICashOutflowRepository {
    create(output: Output): Promise<CashOutflowEntity>;
    get_all(): Promise<CashOutflowEntity[]>;
    delete(id: string): Promise<any>;
    update(id: string, area: string, titulo: string, valor: number): Promise<CashOutflowEntity>;
    findByID(id: string): Promise<CashOutflowEntity | undefined>;
}