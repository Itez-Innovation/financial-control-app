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
}


// // Função para adicionar ganho
// function adicionarGanho() {
//     let titulo: string
//     let valor: number

//     let ganho = new Ganho()

//     ganho.id = idGanho
//     idGanho++

//     titulo = prompt("\nInsira uma breve descrição do ganho: ")
//     ganho.titulo = titulo

//     valor = Number(prompt("Insira o valor do ganho (apenas números): "))
//     ganho.valor = valor

//     ganhos.push(ganho)
// }

// // Função para listar ganhos
// function listarGanhos(){
//     console.log("\nListando todos os ganhos: ")

//     for(let value of ganhos) {
//         console.log(`\nID: ${value.id}`)
//         console.log(`Descrição: ${value.titulo}`)
//         console.log(`Valor: R$${value.valor}`)
//     }

//     console.log("")
// }

// // Função para remover ganhos
// function removerGanhos() {
//     listarGanhos()

//     let idOpcao = Number(prompt("Digite o ID do ganho a ser removido: "))
//     for(let value of ganhos) {
//         if(value.id == idOpcao) {
//             ganhos.splice(ganhos.indexOf(value), 1)
//             console.log("Ganho removido!")
//             idOpcao = -15
//             break;
//         } 
//     }
//     if(idOpcao != -15){
//         console.log("Não há ganho com esse ID!")
//     }
// }

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