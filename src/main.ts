import { Educacao } from './model/Educacao'
import { Alimentacao } from './model/Alimentacao'
import { Entretenimento } from './model/Entretenimento'
import { Saude } from './model/Saude'
import { Transporte } from './model/Transporte'

let teste: Educacao = new Educacao(1, "Educação", "Escola", 100.5)
let teste1: Alimentacao = new Alimentacao(2, "Alimentação", "Escola", 100.5)
let teste2: Entretenimento = new Entretenimento(3, "Entretenimento", "Escola", 100.5)
let teste3: Saude = new Saude(4, "Educação", "Saúde", 100.5)
let teste5: Saude = new Saude(5, "Transporte", "Saúde", 100.5)


let teste4: Array<Educacao | Alimentacao | Entretenimento | Saude | Transporte> = []
teste4.push(teste)
teste4.push(teste1)
teste4.push(teste2)
teste4.push(teste3)
teste4.push(teste5)

console.log(`O índice é ${teste4.indexOf(teste)}`)
console.log(`O índice é ${teste4.indexOf(teste1)}`)
console.log(`O índice é ${teste4.indexOf(teste2)}`)
console.log(`O índice é ${teste4.indexOf(teste3)}`)
console.log(`O índice é ${teste4.indexOf(teste5)}`)