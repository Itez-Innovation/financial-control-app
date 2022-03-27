console.log("Everything is fine")

import { Educacao } from './model/Educacao'

let teste: Educacao = new Educacao(1, "Educação", "Escola", 100.5)
let x = teste.getId

console.log(`O primeiro ID é ${x}`)