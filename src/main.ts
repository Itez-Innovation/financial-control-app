// Importações
import { Educacao } from './model/Educacao'
import { Alimentacao } from './model/Alimentacao'
import { Entretenimento } from './model/Entretenimento'
import { Saude } from './model/Saude'
import { Transporte } from './model/Transporte'
import { Ganho } from './model/Ganho'

// Type Alias
type tipos = Educacao | Alimentacao | Entretenimento | Saude | Transporte


// Declarações
let gastos: Array<tipos> = []
let ganhos: Array<Ganho> = []
let opcao: number = 0
let id: number = 1

// npm install prompt-sync
const prompt = require("prompt-sync")()

// Inserindo valores iniciais apenas para teste
function insereInicial(){
    let gasto: tipos

    gasto = new Educacao(id, "Educação", "Escola0", 150.99)
    gastos.push(gasto)
    id++
    gasto = new Educacao(id, "Educação", "Escola1", 40.33)
    gastos.push(gasto)
    id++

    gasto = new Alimentacao(id, "Alimentação", "Comida0", 23.99)
    gastos.push(gasto)
    id++
    gasto = new Alimentacao(id, "Alimentação", "Comida1", 25)
    gastos.push(gasto)
    id++

    gasto = new Entretenimento(id, "Entretenimento", "Filme0", 30.5)
    gastos.push(gasto)
    id++
    gasto = new Entretenimento(id, "Entretenimento", "Filme1", 60.5)
    gastos.push(gasto)
    id++

    gasto = new Saude(id, "Saúde", "Vacina0", 150.99)
    gastos.push(gasto)
    id++
    gasto = new Saude(id, "Saúde", "Vacina1", 3.99)
    gastos.push(gasto)
    id++

    gasto = new Transporte(id, "Transporte", "Uber0", 150.99)
    gastos.push(gasto)
    id++
    gasto = new Transporte(id, "Transporte", "Uber1", 15.90)
    gastos.push(gasto)
    id++
}

// Função para imprimir uma linha do tamanho desejado
function imprimeLinha(tamanho = 40, tipo = 1){
    if(tipo === 1){
        for(let i = 1; i < tamanho; i++){
            process.stdout.write("-");
        }
        console.log("-")
    } else {
        for(let i = 1; i < tamanho; i++){
            process.stdout.write("=");
        }
        console.log("=")
    }
}

// Função para imprimir o menu e pegar a opção escolhida
function imprimeMenu() {
    console.log("------------------MENU------------------")
    console.log("1 - ADICIONAR GASTO")
    console.log("2 - REMOVER GASTO")
    console.log("3 - LISTAR GASTOS")
    console.log("4 - EDITAR GASTO")
    console.log("5 - ADICIONAR GANHO")
    console.log("6 - REMOVER GANHO")
    console.log("7 - LISTAR GANHOS")
    console.log("8 - EDITAR GANHO")
    console.log("9 - ENCERRAR")

    opcao = Number(prompt("Opção escolhida: "))
}

// Função para adicionar gastos
function adicionarGasto(){
    console.log("Primeiramente, selecione a área do gasto: ")
    console.log("1 - Alimentação")
    console.log("2 - Educação")
    console.log("3 - Entretenimento")
    console.log("4 - Saúde")
    console.log("5 - Transporte")
    let tipo = Number(prompt("Opção escolhida: "))

    let area = ""
    let gasto: tipos
    let titulo: string
    let valor: number

    switch (tipo) {
        case 1:
            gasto = new Alimentacao()
            area = "Alimentação"
            break;
        case 2:
            gasto = new Educacao()
            area = "Educação"
            break;
        case 3:
            gasto = new Entretenimento()
            area = "Entretenimento"
            break;
        case 4:
            gasto = new Saude()
            area = "Saúde"
            break;
        case 5: 
            gasto = new Transporte()
            area = "Transporte"
            break;
        default:
            console.log("Erro! Será atribuida a área da alimentação!")
            gasto = new Alimentacao()
            area = "Alimentação"
            break;
    }
    console.log("")

    gasto.setId = id
    id++

    gasto.setArea = area

    titulo = prompt("Insira uma breve descrição do gasto: ")
    gasto.setTitulo = titulo

    valor = Number(prompt("Insira o valor do gasto (apenas números): "))
    gasto.setValor = valor

    gastos.push(gasto)
}

// Função para listar gastos
function listarGastos() {
    console.log("\n> ALIMENTAÇÃO <")
    for(let value of gastos) {
        if(value.getArea == "Alimentação") {
            console.log(`\nID: ${value.getId}`)
            console.log(`Descrição: ${value.getTitulo}`)
            console.log(`Valor: R$${value.getValor}`)
        } 
    }
    console.log("")

    console.log("\n> EDUCAÇÃO <")
    for(let value of gastos) {
        if(value.getArea == "Educação") {
            console.log(`\nID: ${value.getId}`)
            console.log(`Descrição: ${value.getTitulo}`)
            console.log(`Valor: R$${value.getValor}`)
        } 
    }
    console.log("")

    console.log("\n> ENTRETENIMENTO <")
    for(let value of gastos) {
        if(value.getArea == "Entretenimento") {
            console.log(`\nID: ${value.getId}`)
            console.log(`Descrição: ${value.getTitulo}`)
            console.log(`Valor: R$${value.getValor}`)
        } 
    }
    console.log("")

    console.log("\n> SAÚDE <")
    for(let value of gastos) {
        if(value.getArea == "Saúde") {
            console.log(`\nID: ${value.getId}`)
            console.log(`Descrição: ${value.getTitulo}`)
            console.log(`Valor: R$${value.getValor}`)
        } 
    }
    console.log("")

    console.log("\n> TRANSPORTE <")
    for(let value of gastos) {
        if(value.getArea == "Transporte") {
            console.log(`\nID: ${value.getId}`)
            console.log(`Descrição: ${value.getTitulo}`)
            console.log(`Valor: R$${value.getValor}`)
        } 
    }
    console.log("")
    
}

// Começo do programa
insereInicial()

imprimeLinha(40,2)
do{
    imprimeMenu()
    imprimeLinha(40, 1)
    switch (opcao) {
        case 1:
            console.log("~~~~~~~~~~ADICIONAR GASTO~~~~~~~~~~")
            adicionarGasto()
            break;
        case 2:
            console.log("~~~~~~~~~~REMOVER GASTO~~~~~~~~~~")
            break;
        case 3:
            console.log("~~~~~~~~~~LISTAR GASTOS~~~~~~~~~~")
            listarGastos()
            break;
        case 4:
            console.log("~~~~~~~~~~EDITAR GASTOS~~~~~~~~~~")
            break;
        case 5:
            console.log("~~~~~~~~~~ADICIONAR GANHO~~~~~~~~~~")
            break;
        case 6:
            console.log("~~~~~~~~~~REMOVER GANHO~~~~~~~~~~")
            break;
        case 7:
            console.log("~~~~~~~~~~LISTAR GANHOS~~~~~~~~~~")
            break;
        case 8:
            console.log("~~~~~~~~~~EDITAR GANHO~~~~~~~~~~")
            break;
        default:
            console.log("OBRIGADO POR UTILIZAR O PROGRAMA!")
            break;
    }
    imprimeLinha(40, 2)
} while (opcao != 9)