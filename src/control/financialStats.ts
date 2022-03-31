// Importações
import { Input } from '../model/cashInflow'
import { Output } from '../model/cashOutflow'


export class financialStats {

    constructor () {}

    static generateStats(inflow: Input, outflow: Output){
        return 0
    }
    
}

// // Função que gera um extrato com gastos e ganhos
// function gerarExtrato() {
//     let somaGastos = 0
//     let gastoAli = 0, gastoEdu = 0, gastoEnt = 0, gastoSau = 0, gastoTra = 0
//     let somaGanhos = 0

//     console.log("\n> BALANÇO DA CARTEIRA <")
    
//     // Somando gastos
//     for (let value of gastos) {
//         somaGastos += value.getValor
//         if (value.getArea == "Alimentação") {
//             gastoAli += value.getValor
//         } else if (value.getArea == "Educação") {
//             gastoEdu += value.getValor
//         } else if (value.getArea == "Entretenimento") {
//             gastoEnt += value.getValor
//         } else if (value.getArea == "Saúde") {
//             gastoSau += value.getValor
//         } else if (value.getArea == "Transporte") {
//             gastoTra += value.getValor
//         }
//     }
//     console.log(`\nNo total, foram gastos R$ ${somaGastos.toFixed(2)}, sendo distribuídos nas seguintes áreas: \n`)
//     console.log(`ALIMENTAÇÃO: R$ ${gastoAli.toFixed(2)}`)
//     console.log(`EDUCAÇÃO: R$ ${gastoEdu.toFixed(2)}`)
//     console.log(`ENTRETENIMENTO: R$ ${gastoEnt.toFixed(2)}`)
//     console.log(`SAÚDE: R$ ${gastoSau.toFixed(2)}`)
//     console.log(`TRANSPORTE: R$ ${gastoTra.toFixed(2)}`)

//     for (let value of ganhos) {
//         somaGanhos += value.valor
//     }

//     console.log(`\nNo total, foram recebidos R$ ${somaGanhos.toFixed(2)}, sendo distribuídos em: \n`)
//     for (let value of ganhos) {
//         console.log(`- ${value.titulo}: R$ ${value.valor.toFixed(2)}`)
//     }
    
//     let balanco = Number(somaGanhos) - Number(somaGastos)
//     console.log(`\n Portanto, seu balanço geral da carteira é de R$ ${balanco.toFixed(2)}\n`)
    

//     let yesNo = prompt("(S/N) Deseja exibir a lista de todos os ganhos? ")
//     if(yesNo == 'S' || yesNo == 's' || yesNo == 'Y' || yesNo == 'y') {
//         listarGanhos()
//     }

//     yesNo = prompt("(S/N) Deseja exibir a lista de todos os gastos? ")
//     if(yesNo == 'S' || yesNo == 's' || yesNo == 'Y' || yesNo == 'y') {
//         listarGastos()
//     }
// }