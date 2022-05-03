import Input from './CashInflow'
import Output from './CashOutflow'
import * as uuid from 'uuid'
// import { financialStats } from '../service/financialStatsService'

// npm install prompt-sync
// const prompt = require("prompt-sync")()
export default class Account {
    id: string
    Name: string
    CPF: string
    input: Array<Input>
    output: Array<Output>
    createdAt: Date
    updatedAt: Date

    constructor(props: Omit<Account, 'id' | 'createdAt' | 'updatedAt' | 'input' | 'output'>, id?: string, input?: Input, output?: Output){

        Object.assign(this, props)

        if(!id) this.id = uuid.v4()

    }

}