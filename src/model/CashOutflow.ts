import * as uuid from 'uuid'

export enum setores {
    groceries = "Alimentação",
    education = "Educação",
    entertainment = "Entretenimento",
    health = "Saúde",
    transport = "Transporte"
}

export default class CashOutflow { 
    id: string
    Area: setores
    Titulo: string
    Valor: number
    account_id: string
    createdAt: Date
    updatedAt: Date

    constructor(props: Omit<CashOutflow, 'id' | 'createdAt' | 'updatedAt' | 'account_id'>, id?: string, account_id?: string){
        Object.assign(this, props)
        if(!id) this.id = uuid.v4()
    }
}