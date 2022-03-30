// npm install prompt-sync
const prompt = require("prompt-sync")()

export enum setores {
    Alimentacao = "Alimentação",
    Educacao = "Educação",
    Entretenimento = "Entretenimento",
    Saude = "Saúde",
    Transporte = "Transporte"
}

export class Gasto { 
    _id: number
    _area: setores
    _titulo: string
    _valor: number
    

    constructor(id?: number, area?: setores, titulo?: string, valor?: number){
        if (id && area && titulo && valor) {
            this._id = id
            this._area = area
            this._titulo = titulo
            this._valor = valor
        } else {
            this._id = 0
            this._area = setores.Alimentacao
            this._titulo = ""
            this._valor = 0.0
        }
    }

    // Função para adicionar gastos
    static adicionarGasto(id: number){
        let entrada: boolean
        let gasto = new Gasto()

        do{
            entrada = true

            console.log("Primeiramente, selecione a área do gasto: ")
            console.log("1 - Alimentação")
            console.log("2 - Educação")
            console.log("3 - Entretenimento")
            console.log("4 - Saúde")
            console.log("5 - Transporte")
            let tipo = Number(prompt("Opção escolhida: "))

            switch (tipo) {
                case 1:
                    gasto._area = setores.Alimentacao
                    break;
                case 2:
                    gasto._area = setores.Educacao
                    break;
                case 3:
                    gasto._area = setores.Entretenimento
                    break;
                case 4:
                    gasto._area = setores.Saude
                    break;
                case 5: 
                    gasto._area = setores.Transporte
                    break;
                default:
                    console.log("Erro! Siga as opções do menu!")
                    entrada = false
                    break;
            }

            console.log("")
        } while (!entrada)
        
        gasto._id = id

        gasto._titulo = String(prompt("Insira uma breve descrição do gasto: "))

        gasto._valor = Number(prompt("Insira o valor do gasto (apenas números): "))

        return gasto
    }
}




// // Função para listar gastos
// function listarGastos() {
//     console.log("\n> ALIMENTAÇÃO <")
//     for(let value of gastos) {
//         if(value.getArea == "Alimentação") {
//             console.log(`\nID: ${value.getId}`)
//             console.log(`Descrição: ${value.getTitulo}`)
//             console.log(`Valor: R$${value.getValor}`)
//         } 
//     }
//     console.log("")

//     console.log("\n> EDUCAÇÃO <")
//     for(let value of gastos) {
//         if(value.getArea == "Educação") {
//             console.log(`\nID: ${value.getId}`)
//             console.log(`Descrição: ${value.getTitulo}`)
//             console.log(`Valor: R$${value.getValor}`)
//         } 
//     }
//     console.log("")

//     console.log("\n> ENTRETENIMENTO <")
//     for(let value of gastos) {
//         if(value.getArea == "Entretenimento") {
//             console.log(`\nID: ${value.getId}`)
//             console.log(`Descrição: ${value.getTitulo}`)
//             console.log(`Valor: R$${value.getValor}`)
//         } 
//     }
//     console.log("")

//     console.log("\n> SAÚDE <")
//     for(let value of gastos) {
//         if(value.getArea == "Saúde") {
//             console.log(`\nID: ${value.getId}`)
//             console.log(`Descrição: ${value.getTitulo}`)
//             console.log(`Valor: R$${value.getValor}`)
//         } 
//     }
//     console.log("")

//     console.log("\n> TRANSPORTE <")
//     for(let value of gastos) {
//         if(value.getArea == "Transporte") {
//             console.log(`\nID: ${value.getId}`)
//             console.log(`Descrição: ${value.getTitulo}`)
//             console.log(`Valor: R$${value.getValor}`)
//         } 
//     }
//     console.log("")
    
// }

// // Função para remover gastos
// function removerGastos(){
//     console.log("Listando todos os gastos: ")
//     listarGastos()

//     let idOpcao = Number(prompt("Digite o ID do gasto a ser removido: "))
//     for(let value of gastos) {
//         if(value.getId == idOpcao) {
//             gastos.splice(gastos.indexOf(value), 1)
//             console.log("Gasto removido!")
//             idOpcao = -15
//             break;
//         } 
//     }
//     if(idOpcao != -15){
//         console.log("Não há gasto com esse ID!")
//     }

// }

// // Função que edita os dados dos gastos
// function editarGastos() {
//     console.log("Listando todos os gastos: ")
//     listarGastos()

//     let idOpcao = Number(prompt("Digite o ID do gasto a ser editado: "))
//     for(let value of gastos) {
//         if(value.getId == idOpcao) {

//             // Alterando a área do gasto
//             let yesNo = prompt("Deseja alterar a área do gasto (S/N)? ")
//             if(yesNo == 'S' || yesNo == 's' || yesNo == 'Y' || yesNo == 'y'){
//                 console.log("Selecione a nova área do gasto: ")
//                 console.log("1 - Alimentação")
//                 console.log("2 - Educação")
//                 console.log("3 - Entretenimento")
//                 console.log("4 - Saúde")
//                 console.log("5 - Transporte")
//                 let tipoArea = Number(prompt("Opção escolhida: "))

//                 switch (tipoArea) {
//                     case 1:
//                         value.setArea = "Alimentação"
//                         break;
//                     case 2:
//                         value.setArea = "Educação"
//                         break;
//                     case 3:
//                         value.setArea = "Entretenimento"
//                         break;
//                     case 4:
//                         value.setArea = "Saúde"
//                         break;
//                     case 5:
//                         value.setArea = "Transporte"
//                         break;
//                     default:
//                         console.log("Opção incorreta! A área permanecerá a mesma!")
//                         break;
//                 }
//             }

//             value.setTitulo = prompt("Digite uma breve descrição do gasto: ")
//             value.setValor = Number(prompt("Insira o valor gasto (apenas números): "))

//             idOpcao = -15
//             break;
//         } 
//     }

//     // Se o ID digitado estiver errado...
//     if(idOpcao != -15){
//         console.log("Não há gasto com esse ID!")
//     }
// }