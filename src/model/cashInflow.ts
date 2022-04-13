// npm install prompt-sync
const prompt = require("prompt-sync")()

export class Input {
    id: number
    titulo: string
    valor: number

    
    constructor(id?: number, titulo?: string, valor?: number) {
        if (id && titulo && valor) {
            this.id = id
            this.titulo = titulo
            this.valor = valor
        } else {
            this.id = 0
            this.titulo = ""
            this.valor = 0.0
        }
    }


    // Função para adicionar ganho
    adicionarGanho(idGanho: number) {
        let ganho = new Input()

        ganho.id = idGanho

        console.log("")
        ganho.titulo = String(prompt("Insira uma breve descrição do ganho: "))

        ganho.valor = Number(prompt("Insira o valor do ganho (apenas números): "))
        
        return ganho
    }

    // Função para listar ganhos
    listarGanhos(ganhos: Array<Input>){
        if (ganhos.length === 0 ) {
            console.log("Não há ganho a ser listado!\n")
        } else {
            console.log("Listando todos os ganhos: ")

            for(let value of ganhos) {
                console.log(`\nID: ${value.id}`)
                console.log(`Descrição: ${value.titulo}`)
                console.log(`Valor: R$${value.valor}`)
                console.log("")
            }
        }
    }

    // Função para remover ganhos
    removerGanhos(ganhos: Array<Input>) {
        if (ganhos.length === 0 ) {
            console.log("Não há ganho a ser removido!\n")
        } else {
            let entrada = false
            do{
                this.listarGanhos(ganhos)

                let idOpcao = Number(prompt("Digite o ID do ganho a ser removido: "))

                for(let value of ganhos) {
                    if(value.id == idOpcao) {
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

    // Função para editar ganhos
    editarGanhos(ganhos: Array<Input>) {
        if (ganhos.length === 0 ) {
            console.log("Não há ganho a ser editado!\n")
        } else {
            let entrada = false
            do{
                this.listarGanhos(ganhos)

                let idOpcao = Number(prompt("Digite o ID do ganho a ser editado: "))
                for(let value of ganhos) {
                    if(value.id == idOpcao) {

                        value.titulo = prompt("Digite uma breve descrição do ganho: ")
                        value.valor = Number(prompt("Insira o valor ganho (apenas números): "))

                        entrada = true
                        break;
                    } 
                }

                // Se o ID digitado estiver errado...
                if(!entrada){
                    console.log("Não há ganho com esse ID!")
                }
            } while (!entrada)
        }
    }
}