import CashInflow from './CashInflow'
import CashOutflow from './CashOutflow'
import * as uuid from 'uuid'
import RefreshToken from './RefreshToken'
import Role from './Role'
import Permission from './Permission'

export default class Account {
    id: string
    password: string
    Name: string
    CPF: string
    input: Array<CashInflow>
    output: Array<CashOutflow>
    refresh: RefreshToken
    roles: Array<Role>
    permissions: Array<Permission>
    createdAt: Date
    updatedAt: Date

    constructor(props: Omit<Account, 'id' | 'createdAt' | 'updatedAt' | 'input' | 'output' | 'refresh' | 'roles' | 'permissions'>, 
    id?: string, input?: CashInflow, output?: CashOutflow, refresh?: RefreshToken, roles?: Array<Role>, permissions?: Array<Permission>){
        Object.assign(this, props)
        if(!id) this.id = uuid.v4()
    }

}