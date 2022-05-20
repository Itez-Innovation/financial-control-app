import * as uuid from 'uuid'

export default class CashInflow {
    id: string
    Titulo: string
    Valor: number
    account_id: string
    createdAt: Date
    updatedAt: Date

    
    constructor(props: Omit<CashInflow, 'id' | 'createdAt' | 'updatedAt' | 'account_id'>, id?: string, account_id?: string) {
        Object.assign(this, props)

        if(!id) this.id = uuid.v4()
    }

}