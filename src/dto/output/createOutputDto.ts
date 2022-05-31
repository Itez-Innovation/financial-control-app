import { setores } from "../../model/CashOutflow"

export default class CreateOutputDto {
    Area: setores
    Titulo: string
    Valor: number
    account_id: string
}