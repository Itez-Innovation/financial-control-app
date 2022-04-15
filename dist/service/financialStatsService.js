"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.financialStats = void 0;
// Importações
const CashInflow_1 = require("../model/CashInflow");
const CashOutflow_1 = require("../model/CashOutflow");
// npm install prompt-sync
const prompt = require("prompt-sync")();
let inpt = new CashInflow_1.Input();
let otpt = new CashOutflow_1.Output();
class financialStats {
    constructor() { }
    // Função que gera um extrato com gastos e ganhos
    generateStats(inflow, outflow) {
        let sumOutput = 0;
        let gastoEdu = 0, gastoEnt = 0, gastoSau = 0, gastoTra = 0;
        let sumInput = 0;
        console.log("> BALANÇO DA CARTEIRA <");
        // Somando gastos com o for(let ... of ...)
        // for (let value of outflow) {
        //     sumOutput += value.valor
        //     if (value.area == "Alimentação") {
        //         gastoAli += value.valor
        //     } else if (value.area == "Educação") {
        //         gastoEdu += value.valor
        //     } else if (value.area == "Entretenimento") {
        //         gastoEnt += value.valor
        //     } else if (value.area == "Saúde") {
        //         gastoSau += value.valor
        //     } else if (value.area == "Transporte") {
        //         gastoTra += value.valor
        //     }
        // }
        // Somando gastos usando forEach
        outflow.forEach(element => {
            sumOutput += element.valor;
            if (element.area == "Educação") {
                gastoEdu += element.valor;
            }
            else if (element.area == "Entretenimento") {
                gastoEnt += element.valor;
            }
            else if (element.area == "Saúde") {
                gastoSau += element.valor;
            }
            else if (element.area == "Transporte") {
                gastoTra += element.valor;
            }
        });
        // Criando um vetor com todos os valores gastos em alimentação
        let gastoAli = outflow.map(function (outflow) {
            if (outflow.area == "Alimentação") {
                return outflow.valor;
            }
        });
        // Somando gastos do vetor de gastos de alimentação
        let somaAli = 0;
        for (let value of gastoAli) {
            if (value != null) {
                somaAli += value;
            }
        }
        console.log(`\nNo total, foram gastos R$ ${sumOutput.toFixed(2)}, sendo distribuídos nas seguintes áreas: `);
        console.log(`ALIMENTAÇÃO: R$ ${somaAli.toFixed(2)}`);
        console.log(`EDUCAÇÃO: R$ ${gastoEdu.toFixed(2)}`);
        console.log(`ENTRETENIMENTO: R$ ${gastoEnt.toFixed(2)}`);
        console.log(`SAÚDE: R$ ${gastoSau.toFixed(2)}`);
        console.log(`TRANSPORTE: R$ ${gastoTra.toFixed(2)}`);
        for (let value of inflow) {
            sumInput += value.valor;
        }
        console.log(`\nNo total, foram recebidos R$ ${sumInput.toFixed(2)}, sendo distribuídos em: `);
        for (let value of inflow) {
            console.log(`- ${value.titulo}: R$ ${value.valor.toFixed(2)}`);
        }
        let balanco = Number(sumInput) - Number(sumOutput);
        console.log(`\nPortanto, seu balanço geral da carteira é de R$ ${balanco.toFixed(2)}\n`);
        let yesNo = prompt("(S/N) Deseja exibir a lista de todos os ganhos? ");
        if (yesNo == 'S' || yesNo == 's' || yesNo == 'Y' || yesNo == 'y') {
            inpt.listarGanhos(inflow);
        }
        yesNo = prompt("(S/N) Deseja exibir a lista de todos os gastos? ");
        if (yesNo == 'S' || yesNo == 's' || yesNo == 'Y' || yesNo == 'y') {
            otpt.listarGastos(outflow);
        }
    }
}
exports.financialStats = financialStats;
//# sourceMappingURL=financialStatsService.js.map