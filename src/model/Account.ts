import { Input } from './cashInflow'
import { Output } from './cashOutflow'
import { financialStats } from '../service/financialStatsService'

// npm install prompt-sync
const prompt = require("prompt-sync")()
let inpt = new Input()
let otpt = new Output()
let fStat = new financialStats()
export class account {
    id: number
    nome: string
    cpf: string
    input: Array<Input>
    output: Array<Output>

    constructor(id?: number, nome?: string, cpf?: string, input?: Input, output?: Output){
        if (id && nome && cpf && input && output){
            this.id = id
            this.nome = nome
            this.cpf = cpf
            this.input = [input]
            this.output = [output]
        } else {
            this.id = 0
            this.nome = ""
            this.cpf = ""
            this.input = []
            this.output = []
        }
    }

    // Criando a conta
    createAccount(idAcc: number) {
        let acc = new account()

        console.log("Olá!")

        acc.id = idAcc

        let check = false
        do{
            acc.nome = String(prompt(`Insira seu nome completo: `))
            if(acc.nome.trim()){
                check = true
            } else {
                console.log("Insira um nome válido!\n")
            }
        } while (!check)

        check = false
        do{
            acc.cpf = String(prompt(`Insira seu CPF: `))
            if(acc.cpf.trim()){
                check = true
            } else {
                console.log("Insira um CPF válido!\n")
            }
        } while (!check)

        console.log("")

        acc.input = []
        acc.output = []

        return acc
    }

    showDataAccount(accounts: Array<account>){
        console.log("\nListando contas cadastradas: ")
        accounts.forEach(element => {
            console.log(`\nID da conta: ${element.id}`)
            console.log(`Nome: ${element.nome}`)
            console.log(`CPF: ${element.cpf}`)
        });
        
    }

    // Adicionando ganho
    addInput(acc: account, idInflow: number) {
        let inp = new Input()
        inp = inpt.adicionarGanho(idInflow)
        acc.input.push(inp)
    }

    // Editando ganho
    editInput(acc: account) {
        inpt.editarGanhos(acc.input)
    }

    // Listando ganhos
    listInput(acc: account) {
        inpt.listarGanhos(acc.input)
    }

    // Removendo ganho
    rmInput(acc: account) {
        inpt.removerGanhos(acc.input)
    }

    // Adicionando gasto
    addOutput(acc: account, idOutflow: number) {
        let out = new Output()
        out = otpt.adicionarGasto(idOutflow)
        acc.output.push(out)
    }

    // Editando gasto
    editOutput(acc: account) {
        otpt.editarGastos(acc.output)
    }

    // Listando gastos
    listOutput(acc: account) {
        otpt.listarGastos(acc.output)
    }

    // Removendo gastos
    rmOutput(acc: account) {
        otpt.removerGastos(acc.output)
    }

    genStats(acc: account) {
        fStat.generateStats(acc.input, acc.output)
    }

}