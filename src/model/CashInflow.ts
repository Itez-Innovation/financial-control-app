import * as uuid from 'uuid'
import Account from './Account'

export default class CashInflow {
    id: string
    Titulo: string
    Valor: number
    account_id: string
    account: Account
    createdAt: Date
    updatedAt: Date

    
    constructor(props: Omit<CashInflow, 'id' | 'createdAt' | 'updatedAt' | 'account_id' | 'account'>, id?: string, account_id?: string, account?: Account) {
        Object.assign(this, props)
        if(!id) this.id = uuid.v4()
    }

}