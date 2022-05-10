import { setores } from "../../model/CashOutflow"

export default class CreateInputDto {
    Area: setores
    Titulo: string
    Valor: number
}