// npm install prompt-sync
const prompt = require("prompt-sync")()

export enum setores {
    groceries = "Alimentação",
    education = "Educação",
    entertainment = "Entretenimento",
    health = "Saúde",
    transport = "Transporte"
}

export class Output { 
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
            this._area = setores.groceries
            this._titulo = ""
            this._valor = 0.0
        }
    }

    // Função para o usuário escolher uma área de gasto
    static findArea() {
        let entrada: boolean
        let area: setores = setores.groceries

        do{
            entrada = true

            console.log("Selecione a área do gasto: ")
            console.log("1 - Alimentação")
            console.log("2 - Educação")
            console.log("3 - Entretenimento")
            console.log("4 - Saúde")
            console.log("5 - Transporte")
            let tipo = Number(prompt("Opção escolhida: "))

            switch (tipo) {
                case 1:
                    area = setores.groceries
                    break;
                case 2:
                    area = setores.education
                    break;
                case 3:
                    area = setores.entertainment
                    break;
                case 4:
                    area = setores.health
                    break;
                case 5: 
                    area = setores.transport
                    break;
                default:
                    console.log("Erro! Siga as opções do menu!")
                    entrada = false
                    break;
            }
            console.log("")
        } while (!entrada)

        return area
    }

    // Função para adicionar gastos
    static adicionarGasto(id: number){
        let gasto = new Output()

        gasto._area = this.findArea()
        
        gasto._id = id

        gasto._titulo = String(prompt("Insira uma breve descrição do gasto: "))

        gasto._valor = Number(prompt("Insira o valor do gasto (apenas números): "))

        return gasto
    }

    // Função para listar gastos
    static listarGastos(outflow: Array<Output>) {
        if (outflow.length === 0) {
            console.log(`Não há gasto a ser listado!\n`)
        } else {
            outflow.forEach(element => {
                console.log(`\nÁrea: ${element._area}`)
                console.log(`ID: ${element._id}`)
                console.log(`Descrição: ${element._titulo}`)
                console.log(`Valor: R$ ${element._valor}`)
                console.log("")
            });
        }
    }

    // Função para remover gastos
    static removerGastos(outflow: Array<Output>){
        if (outflow.length === 0) {
            console.log(`Não há gasto a ser removido!\n`)
        } else {
            console.log("Listando todos os gastos: ")
            this.listarGastos(outflow)

            let idOpcao = Number(prompt("Digite o ID do gasto a ser removido: "))

            outflow.forEach(element => {
                if(element._id == idOpcao) {
                    outflow.splice(outflow.indexOf(element), 1)
                    console.log("Gasto removido!")
                    idOpcao = -15
                } 
            });

            if(idOpcao != -15){
                console.log("Não há gasto com esse ID!")
            }
        }
    }

    // Função que edita os dados dos gastos
    static editarGastos(outflow: Array<Output>) {
        if (outflow.length === 0) {
            console.log(`Não há gasto a ser editado!\n`)
        } else {
            console.log("Listando todos os gastos: ")
            this.listarGastos(outflow)

            let idOpcao = Number(prompt("Digite o ID do gasto a ser editado: "))

            let idCheck: boolean = false
            outflow.forEach(element => {
                if (idOpcao === element._id) {
                    idCheck = true

                    // Alterando a área do gasto
                    let yesNo = prompt("Deseja alterar a área do gasto (S/N)? ")
                    if(yesNo == 'S' || yesNo == 's' || yesNo == 'Y' || yesNo == 'y'){
                        element._area = this.findArea()
                    }

                    element._titulo = prompt("Digite uma breve descrição do gasto: ")
                    element._valor = Number(prompt("Insira o valor gasto (apenas números): "))
                }
            });

            if (!idCheck) {
                console.log(`Não há gasto com esse ID!`)
            }
        }
    }
}