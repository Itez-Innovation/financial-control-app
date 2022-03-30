// Importações
import { Ganho } from './model/Ganho'
import { Gasto, setores } from './model/Gasto'

/*-----------------------------------------------------------------------------------------*/

// Declarações
let gastos: Array<Gasto> = []
let idGasto: number = 1
let ganhos: Array<Ganho> = []
let idGanho: number = 1
let opcao: number = 0

// npm install prompt-sync
const prompt = require("prompt-sync")()

/*-----------------------------------------------------------------------------------------*/

// Inserindo valores iniciais apenas para teste
function insereInicial(){
    let gasto: Gasto
    let ganho: Ganho

    gasto = new Gasto(idGasto, setores.Educacao, "Escola0", 150.99)
    gastos.push(gasto)
    idGasto++
    gasto = new Gasto(idGasto, setores.Educacao, "Escola1", 40.33)
    gastos.push(gasto)
    idGasto++

    gasto = new Gasto(idGasto, setores.Alimentacao, "Comida0", 23.99)
    gastos.push(gasto)
    idGasto++
    gasto = new Gasto(idGasto, setores.Alimentacao, "Comida1", 25)
    gastos.push(gasto)
    idGasto++

    gasto = new Gasto(idGasto, setores.Entretenimento, "Filme0", 30.5)
    gastos.push(gasto)
    idGasto++
    gasto = new Gasto(idGasto, setores.Entretenimento, "Filme1", 60.5)
    gastos.push(gasto)
    idGasto++

    gasto = new Gasto(idGasto, setores.Saude, "Vacina0", 150.99)
    gastos.push(gasto)
    idGasto++
    gasto = new Gasto(idGasto, setores.Saude, "Vacina1", 3.99)
    gastos.push(gasto)
    idGasto++

    gasto = new Gasto(idGasto, setores.Transporte, "Uber0", 150.99)
    gastos.push(gasto)
    idGasto++
    gasto = new Gasto(idGasto, setores.Transporte, "Uber1", 15.90)
    gastos.push(gasto)
    idGasto++

    ganho = new Ganho(idGanho, "Venda0", 150.99)
    ganhos.push(ganho)
    idGanho++
    ganho = new Ganho(idGanho, "Venda1", 157.90)
    ganhos.push(ganho)
    idGanho++
}

/*-----------------------------------------------------------------------------------------*/

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
    console.log("9 - GERAR EXTRATO")
    console.log("10 - ENCERRAR")

    opcao = Number(prompt("Opção escolhida: "))
}

/*-----------------------------------------------------------------------------------------*/

// Começo do programa
insereInicial()

imprimeLinha(40,2)
do{
    imprimeMenu()
    imprimeLinha(40, 1)
    switch (opcao) {
        case 1:
            console.log("~~~~~~~~~~ADICIONAR GASTO~~~~~~~~~~")
            gastos.push(Gasto.adicionarGasto(idGasto))
            idGasto++
            break;
        case 2:
            console.log("~~~~~~~~~~REMOVER GASTO~~~~~~~~~~")
            //removerGastos()
            break;
        case 3:
            console.log("~~~~~~~~~~LISTAR GASTOS~~~~~~~~~~")
            Gasto.listarGastos(gastos)
            break;
        case 4:
            console.log("~~~~~~~~~~EDITAR GASTOS~~~~~~~~~~")
            //editarGastos()
            break;
        case 5:
            console.log("~~~~~~~~~~ADICIONAR GANHO~~~~~~~~~~")
            //adicionarGanho()
            break;
        case 6:
            console.log("~~~~~~~~~~REMOVER GANHO~~~~~~~~~~")
            //removerGanhos()
            break;
        case 7:
            console.log("~~~~~~~~~~LISTAR GANHOS~~~~~~~~~~")
            //listarGanhos()
            break;
        case 8:
            console.log("~~~~~~~~~~EDITAR GANHO~~~~~~~~~~")
            //editarGanhos()
            break;
        case 9:
            console.log("~~~~~~~~~~GERAR EXTRATO~~~~~~~~~~")
            //gerarExtrato()
            break;
        case 10:
            console.log("OBRIGADO POR UTILIZAR O PROGRAMA!")
            break;
        default:
            console.log("OPÇÃO INCORRETA! SIGA O MENU E DIGITE NOVAMENTE!")
            break;
    }
    imprimeLinha(40, 2)
} while (opcao != 10)