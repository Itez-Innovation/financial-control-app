import * as uuid from 'uuid'

export default class Input {
    id: string
    Titulo: string
    Valor: number
    account_id: string
    createdAt: Date
    updatedAt: Date

    
    constructor(props: Omit<Input, 'id' | 'createdAt' | 'UpdatedAt' | 'account_id'>, id?: string, account_id?: string) {
        Object.assign(this, props)

        if(!id) this.id = uuid.v4()
    }

}