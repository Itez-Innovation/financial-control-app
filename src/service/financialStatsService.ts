// Importações
import { Input } from '../model/cashInflow'
import { Output } from '../model/cashOutflow'


// npm install prompt-sync
const prompt = require("prompt-sync")()
let inpt = new Input()
let otpt = new Output()

export class financialStats {

    constructor () {}

    // Função que gera um extrato com gastos e ganhos
    generateStats(inflow: Array<Input>, outflow: Array<Output>) {
        let sumOutput = 0
        let gastoEdu = 0, gastoEnt = 0, gastoSau = 0, gastoTra = 0
        let sumInput = 0

        console.log("> BALANÇO DA CARTEIRA <")
        
        // Somando gastos com o for(let ... of ...)
        // for (let value of outflow) {
        //     sumOutput += value._valor
        //     if (value._area == "Alimentação") {
        //         gastoAli += value._valor
        //     } else if (value._area == "Educação") {
        //         gastoEdu += value._valor
        //     } else if (value._area == "Entretenimento") {
        //         gastoEnt += value._valor
        //     } else if (value._area == "Saúde") {
        //         gastoSau += value._valor
        //     } else if (value._area == "Transporte") {
        //         gastoTra += value._valor
        //     }
        // }

        // Somando gastos usando forEach
        outflow.forEach(element => {
            sumOutput += element._valor
            if (element._area == "Educação") {
                gastoEdu += element._valor
            } else if (element._area == "Entretenimento") {
                gastoEnt += element._valor
            } else if (element._area == "Saúde") {
                gastoSau += element._valor
            } else if (element._area == "Transporte") {
                gastoTra += element._valor
            }
        });

        // Criando um vetor com todos os valores gastos em alimentação
        let gastoAli = outflow.map(function(outflow){
            if(outflow._area == "Alimentação"){
                return outflow._valor
            }
        });

        // Somando gastos do vetor de gastos de alimentação
        let somaAli = 0
        for(let value of gastoAli){
            if(value != null){
                somaAli += value
            }
        } 

        console.log(`\nNo total, foram gastos R$ ${sumOutput.toFixed(2)}, sendo distribuídos nas seguintes áreas: `)
        console.log(`ALIMENTAÇÃO: R$ ${somaAli.toFixed(2)}`)
        console.log(`EDUCAÇÃO: R$ ${gastoEdu.toFixed(2)}`)
        console.log(`ENTRETENIMENTO: R$ ${gastoEnt.toFixed(2)}`)
        console.log(`SAÚDE: R$ ${gastoSau.toFixed(2)}`)
        console.log(`TRANSPORTE: R$ ${gastoTra.toFixed(2)}`)

        for (let value of inflow) {
            sumInput += value._valor
        }

        console.log(`\nNo total, foram recebidos R$ ${sumInput.toFixed(2)}, sendo distribuídos em: `)
        for (let value of inflow) {
            console.log(`- ${value._titulo}: R$ ${value._valor.toFixed(2)}`)
        }
        
        let balanco = Number(sumInput) - Number(sumOutput)
        console.log(`\nPortanto, seu balanço geral da carteira é de R$ ${balanco.toFixed(2)}\n`)
        

        let yesNo = prompt("(S/N) Deseja exibir a lista de todos os ganhos? ")
        if(yesNo == 'S' || yesNo == 's' || yesNo == 'Y' || yesNo == 'y') {
            inpt.listarGanhos(inflow)
        }

        yesNo = prompt("(S/N) Deseja exibir a lista de todos os gastos? ")
        if(yesNo == 'S' || yesNo == 's' || yesNo == 'Y' || yesNo == 'y') {
            otpt.listarGastos(outflow)
        }
    }
    
}