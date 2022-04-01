import { Input } from './cashInflow'
import { Output } from './cashOutflow'
import { financialStats } from '../service/financialStatsService'

// npm install prompt-sync
const prompt = require("prompt-sync")()
export class account {
    _id: number
    _nome: string
    _cpf: string
    _input: Array<Input>
    _output: Array<Output>

    constructor(id?: number, nome?: string, cpf?: string, input?: Input, output?: Output){
        if (id && nome && cpf && input && output){
            this._id = id
            this._nome = nome
            this._cpf = cpf
            this._input = [input]
            this._output = [output]
        } else {
            this._id = 0
            this._nome = ""
            this._cpf = ""
            this._input = []
            this._output = []
        }
    }

    // Criando a conta
    createAccount(idAcc: number) {
        let acc = new account()

        console.log("Olá!")

        acc._id = idAcc

        let check = false
        do{
            acc._nome = String(prompt(`Insira seu nome completo: `))
            if(acc._nome.trim()){
                check = true
            } else {
                console.log("Insira um nome válido!\n")
            }
        } while (!check)

        check = false
        do{
            acc._cpf = String(prompt(`Insira seu CPF: `))
            if(acc._cpf.trim()){
                check = true
            } else {
                console.log("Insira um CPF válido!\n")
            }
        } while (!check)

        console.log("")

        acc._input = []
        acc._output = []

        return acc
    }

    showDataAccount(accounts: Array<account>){
        accounts.forEach(element => {
            console.log(`ID da conta: ${element._id}`)
            console.log(`Nome: ${element._nome}`)
            console.log(`CPF: ${element._cpf}\n`)
        });
        
    }

    // Adicionando ganho
    addInput(acc: account, idInflow: number) {
        let inp = new Input()
        inp = Input.adicionarGanho(idInflow)
        acc._input.push(inp)
    }

    // Editando ganho
    editInput(acc: account) {
        Input.editarGanhos(acc._input)
    }

    // Listando ganhos
    listInput(acc: account) {
        Input.listarGanhos(acc._input)
    }

    // Removendo ganho
    rmInput(acc: account) {
        Input.removerGanhos(acc._input)
    }

    // Adicionando gasto
    addOutput(acc: account, idOutflow: number) {
        let out = new Output()
        out = Output.adicionarGasto(idOutflow)
        acc._output.push(out)
    }

    // Editando gasto
    editOutput(acc: account) {
        Output.editarGastos(acc._output)
    }

    // Listando gastos
    listOutput(acc: account) {
        Output.listarGastos(acc._output)
    }

    // Removendo gastos
    rmOutput(acc: account) {
        Output.removerGastos(acc._output)
    }

    genStats(acc: account) {
        financialStats.generateStats(acc._input, acc._output)
    }

}