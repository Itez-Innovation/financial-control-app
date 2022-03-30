// Importações
import { Ganho } from './model/Ganho'
import { Gasto } from './model/Gasto'
import { setores } from './model/Gasto'


/*-----------------------------------------------------------------------------------------*/



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

    gasto = new Alimentacao(idGasto, "Alimentação", "Comida0", 23.99)
    gastos.push(gasto)
    idGasto++
    gasto = new Alimentacao(idGasto, "Alimentação", "Comida1", 25)
    gastos.push(gasto)
    idGasto++

    gasto = new Entretenimento(idGasto, "Entretenimento", "Filme0", 30.5)
    gastos.push(gasto)
    idGasto++
    gasto = new Entretenimento(idGasto, "Entretenimento", "Filme1", 60.5)
    gastos.push(gasto)
    idGasto++

    gasto = new Saude(idGasto, "Saúde", "Vacina0", 150.99)
    gastos.push(gasto)
    idGasto++
    gasto = new Saude(idGasto, "Saúde", "Vacina1", 3.99)
    gastos.push(gasto)
    idGasto++

    gasto = new Transporte(idGasto, "Transporte", "Uber0", 150.99)
    gastos.push(gasto)
    idGasto++
    gasto = new Transporte(idGasto, "Transporte", "Uber1", 15.90)
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

// Função que gera um extrato com gastos e ganhos
function gerarExtrato() {
    let somaGastos = 0
    let gastoAli = 0, gastoEdu = 0, gastoEnt = 0, gastoSau = 0, gastoTra = 0
    let somaGanhos = 0

    console.log("\n> BALANÇO DA CARTEIRA <")
    
    // Somando gastos
    for (let value of gastos) {
        somaGastos += value.getValor
        if (value.getArea == "Alimentação") {
            gastoAli += value.getValor
        } else if (value.getArea == "Educação") {
            gastoEdu += value.getValor
        } else if (value.getArea == "Entretenimento") {
            gastoEnt += value.getValor
        } else if (value.getArea == "Saúde") {
            gastoSau += value.getValor
        } else if (value.getArea == "Transporte") {
            gastoTra += value.getValor
        }
    }
    console.log(`\nNo total, foram gastos R$ ${somaGastos.toFixed(2)}, sendo distribuídos nas seguintes áreas: \n`)
    console.log(`ALIMENTAÇÃO: R$ ${gastoAli.toFixed(2)}`)
    console.log(`EDUCAÇÃO: R$ ${gastoEdu.toFixed(2)}`)
    console.log(`ENTRETENIMENTO: R$ ${gastoEnt.toFixed(2)}`)
    console.log(`SAÚDE: R$ ${gastoSau.toFixed(2)}`)
    console.log(`TRANSPORTE: R$ ${gastoTra.toFixed(2)}`)

    for (let value of ganhos) {
        somaGanhos += value.valor
    }

    console.log(`\nNo total, foram recebidos R$ ${somaGanhos.toFixed(2)}, sendo distribuídos em: \n`)
    for (let value of ganhos) {
        console.log(`- ${value.titulo}: R$ ${value.valor.toFixed(2)}`)
    }
    
    let balanco = Number(somaGanhos) - Number(somaGastos)
    console.log(`\n Portanto, seu balanço geral da carteira é de R$ ${balanco.toFixed(2)}\n`)
    

    let yesNo = prompt("(S/N) Deseja exibir a lista de todos os ganhos? ")
    if(yesNo == 'S' || yesNo == 's' || yesNo == 'Y' || yesNo == 'y') {
        listarGanhos()
    }

    yesNo = prompt("(S/N) Deseja exibir a lista de todos os gastos? ")
    if(yesNo == 'S' || yesNo == 's' || yesNo == 'Y' || yesNo == 'y') {
        listarGastos()
    }
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
            adicionarGasto()
            break;
        case 2:
            console.log("~~~~~~~~~~REMOVER GASTO~~~~~~~~~~")
            removerGastos()
            break;
        case 3:
            console.log("~~~~~~~~~~LISTAR GASTOS~~~~~~~~~~")
            listarGastos()
            break;
        case 4:
            console.log("~~~~~~~~~~EDITAR GASTOS~~~~~~~~~~")
            editarGastos()
            break;
        case 5:
            console.log("~~~~~~~~~~ADICIONAR GANHO~~~~~~~~~~")
            adicionarGanho()
            break;
        case 6:
            console.log("~~~~~~~~~~REMOVER GANHO~~~~~~~~~~")
            removerGanhos()
            break;
        case 7:
            console.log("~~~~~~~~~~LISTAR GANHOS~~~~~~~~~~")
            listarGanhos()
            break;
        case 8:
            console.log("~~~~~~~~~~EDITAR GANHO~~~~~~~~~~")
            editarGanhos()
            break;
        case 9:
            console.log("~~~~~~~~~~GERAR EXTRATO~~~~~~~~~~")
            gerarExtrato()
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