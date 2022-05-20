import * as uuid from 'uuid'
import Account from './Account'

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
    account: Account
    createdAt: Date
    updatedAt: Date

    constructor(props: Omit<CashOutflow, 'id' | 'createdAt' | 'updatedAt' | 'account_id' | 'account'>, id?: string, account_id?: string, account?: Account){
        Object.assign(this, props)
        if(!id) this.id = uuid.v4()
    }
}