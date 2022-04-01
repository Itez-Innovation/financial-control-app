import { Input } from './cashInflow'
import { Output } from './cashOutflow'
import { financialStats } from '../service/financialStatsService'

// npm install prompt-sync
const prompt = require("prompt-sync")()
let inpt = new Input()
let otpt = new Output()
let fStat = new financialStats()
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
        console.log("\nListando contas cadastradas: ")
        accounts.forEach(element => {
            console.log(`\nID da conta: ${element._id}`)
            console.log(`Nome: ${element._nome}`)
            console.log(`CPF: ${element._cpf}`)
        });
        
    }

    // Adicionando ganho
    addInput(acc: account, idInflow: number) {
        let inp = new Input()
        inp = inpt.adicionarGanho(idInflow)
        acc._input.push(inp)
    }

    // Editando ganho
    editInput(acc: account) {
        inpt.editarGanhos(acc._input)
    }

    // Listando ganhos
    listInput(acc: account) {
        inpt.listarGanhos(acc._input)
    }

    // Removendo ganho
    rmInput(acc: account) {
        inpt.removerGanhos(acc._input)
    }

    // Adicionando gasto
    addOutput(acc: account, idOutflow: number) {
        let out = new Output()
        out = otpt.adicionarGasto(idOutflow)
        acc._output.push(out)
    }

    // Editando gasto
    editOutput(acc: account) {
        otpt.editarGastos(acc._output)
    }

    // Listando gastos
    listOutput(acc: account) {
        otpt.listarGastos(acc._output)
    }

    // Removendo gastos
    rmOutput(acc: account) {
        otpt.removerGastos(acc._output)
    }

    genStats(acc: account) {
        fStat.generateStats(acc._input, acc._output)
    }

}