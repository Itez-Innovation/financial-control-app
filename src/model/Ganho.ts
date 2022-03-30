// npm install prompt-sync
const prompt = require("prompt-sync")()

export class Ganho {
    _id: number
    _titulo: string
    _valor: number

    
    constructor(id?: number, titulo?: string, valor?: number) {
        if (id && titulo && valor) {
            this._id = id
            this._titulo = titulo
            this._valor = valor
        } else {
            this._id = 0
            this._titulo = ""
            this._valor = 0.0
        }
    }


    // Função para adicionar ganho
    static adicionarGanho(idGanho: number) {
        let ganho = new Ganho()

        ganho._id = idGanho

        console.log("")
        ganho._titulo = String(prompt("Insira uma breve descrição do ganho: "))

        ganho._valor = Number(prompt("Insira o valor do ganho (apenas números): "))
        
        return ganho
    }

    // Função para listar ganhos
    static listarGanhos(ganhos: Array<Ganho>){
        if (ganhos.length === 0 ) {
            console.log("\nNão há ganho a ser listado!\n")
        } else {
            console.log("\nListando todos os ganhos: ")

            for(let value of ganhos) {
                console.log(`\nID: ${value._id}`)
                console.log(`Descrição: ${value._titulo}`)
                console.log(`Valor: R$${value._valor}`)
                console.log("")
            }
        }
    }

    // Função para remover ganhos
    static removerGanhos(ganhos: Array<Ganho>) {
        if (ganhos.length === 0 ) {
            console.log("\nNão há ganho a ser removido!\n")
        } else {
            let entrada = false
            do{
                this.listarGanhos(ganhos)

                let idOpcao = Number(prompt("Digite o ID do ganho a ser removido: "))

                for(let value of ganhos) {
                    if(value._id == idOpcao) {
                        ganhos.splice(ganhos.indexOf(value), 1)
                        console.log("Ganho removido!\n")
                        entrada = true
                        break;
                    } 
                }

                if(!entrada){
                    console.log("Não há ganho com esse ID!")
                }
            } while (!entrada)  
        } 
    }

}








// // Função para editar ganhos
// function editarGanhos() {
//     console.log("Listando todos os ganhos: ")
//     listarGanhos()

//     let idOpcao = Number(prompt("Digite o ID do ganho a ser editado: "))
//     for(let value of ganhos) {
//         if(value.id == idOpcao) {

//             value.titulo = prompt("Digite uma breve descrição do ganho: ")
//             value.valor = Number(prompt("Insira o valor ganho (apenas números): "))

//             idOpcao = -15
//             break;
//         } 
//     }

//     // Se o ID digitado estiver errado...
//     if(idOpcao != -15){
//         console.log("Não há ganho com esse ID!")
//     }
// }