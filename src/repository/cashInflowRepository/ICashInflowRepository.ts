export default interface ICashInflowRepository {
  create(input: Input): Promise<CashInflowEntity>;
  get_all(): Promise<CashInflowEntity[]>;
  delete(id: string): Promise<any>;
  update(id: string, titulo: string, valor: number): Promise<CashInflowEntity>;
  findByID(id: string): Promise<CashInflowEntity | undefined>;
}
