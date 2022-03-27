import { Educacao } from './model/Educacao'
import { Alimentacao } from './model/Alimentacao'
import { Entretenimento } from './model/Entretenimento'
import { Saude } from './model/Saude'
import { Transporte } from './model/Transporte'
import { Ganho } from './model/Ganho'

//import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
//const rl = readline.createInterface({ input, output });

let gastos: Array<Educacao | Alimentacao | Entretenimento | Saude | Transporte> = []
let ganhos: Array<Ganho> = []



function imprimeLinha(tamanho = 25){
    for(let i = 1; i < tamanho; i++){
        process.stdout.write("-");
    }
    console.log("-")
}


function imprimeMenu() {
    console.log("---------------MENU---------------")
    console.log("1 - ADICIONAR GASTO")
    console.log("2 - REMOVER GASTO")
    console.log("3 - LISTAR GASTOS")
    console.log("4 - EDITAR GASTO")
    console.log("5 - ADICIONAR GANHO")
    console.log("6 - REMOVER GANHO")
    console.log("7 - LISTAR GANHOS")
    console.log("8 - EDITAR GANHO")
    console.log("9 - ENCERRAR")
}

imprimeMenu()

//let entrada = rl.question("Opção escolhida: ")
//rl.close()

//console.log(entrada)