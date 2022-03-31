import { Input } from './cashInflow'
import { Output } from './cashOutflow'

export class account {
    _id: number
    _nome: string
    _cpf: string
    _login: string
    _password: string
    _input: Array<Input>
    _output: Array<Output>

    constructor(id?: number, nome?: string, cpf?: string, login?: string, password?: string, input?: Input, output?: Output){
        if (id && nome && cpf && login && password && input && output){
            this._id = id
            this._nome = nome
            this._cpf = cpf
            this._login = login
            this._password = password
            this._input = [input]
            this._output = [output]
        } else {
            this._id = 0
            this._nome = ""
            this._cpf = ""
            this._login = ""
            this._password = ""
            this._input = []
            this._output = []
        }
    }

    static createAccount() {
        let acc = new account()

        return acc
    }

    static addInput(acc: account, idInflow: number) {
        let inp = new Input()
        inp = Input.adicionarGanho(idInflow)
        acc._input.push(inp)
    }

    static editInput(acc: account) {
        Input.editarGanhos(acc._input)
    }

    static listInput(acc: account) {

    }

    static rmInput(acc: account) {

    }

    static addOutput(acc: account, idOutflow: number) {
        let out = new Output()
        out = Output.adicionarGasto(idOutflow)
        acc._output.push(out)
    }

    static editOutput(acc: account) {

    }

    static listOutput(acc: account) {

    }

    static rmOutput(acc: account) {

    }

}