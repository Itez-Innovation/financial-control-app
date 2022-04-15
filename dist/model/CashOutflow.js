"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Output = exports.setores = void 0;
// npm install prompt-sync
const prompt = require("prompt-sync")();
var setores;
(function (setores) {
    setores["groceries"] = "Alimenta\u00E7\u00E3o";
    setores["education"] = "Educa\u00E7\u00E3o";
    setores["entertainment"] = "Entretenimento";
    setores["health"] = "Sa\u00FAde";
    setores["transport"] = "Transporte";
})(setores = exports.setores || (exports.setores = {}));
class Output {
    constructor(id, area, titulo, valor) {
        if (id && area && titulo && valor) {
            this.id = id;
            this.area = area;
            this.titulo = titulo;
            this.valor = valor;
        }
        else {
            this.id = 0;
            this.area = setores.groceries;
            this.titulo = "";
            this.valor = 0.0;
        }
    }
    // Função para o usuário escolher uma área de gasto
    findArea() {
        let entrada;
        let area = setores.groceries;
        do {
            entrada = true;
            console.log("Selecione a área do gasto: ");
            console.log("1 - Alimentação");
            console.log("2 - Educação");
            console.log("3 - Entretenimento");
            console.log("4 - Saúde");
            console.log("5 - Transporte");
            let tipo = Number(prompt("Opção escolhida: "));
            switch (tipo) {
                case 1:
                    area = setores.groceries;
                    break;
                case 2:
                    area = setores.education;
                    break;
                case 3:
                    area = setores.entertainment;
                    break;
                case 4:
                    area = setores.health;
                    break;
                case 5:
                    area = setores.transport;
                    break;
                default:
                    console.log("Erro! Siga as opções do menu!");
                    entrada = false;
                    break;
            }
            console.log("");
        } while (!entrada);
        return area;
    }
    // Função para adicionar gastos
    adicionarGasto(id) {
        let gasto = new Output();
        gasto.area = this.findArea();
        gasto.id = id;
        gasto.titulo = String(prompt("Insira uma breve descrição do gasto: "));
        gasto.valor = Number(prompt("Insira o valor do gasto (apenas números): "));
        return gasto;
    }
    // Função para listar gastos
    listarGastos(outflow) {
        if (outflow.length === 0) {
            console.log(`Não há gasto a ser listado!\n`);
        }
        else {
            outflow.forEach(element => {
                console.log(`\nÁrea: ${element.area}`);
                console.log(`ID: ${element.id}`);
                console.log(`Descrição: ${element.titulo}`);
                console.log(`Valor: R$ ${element.valor}`);
                console.log("");
            });
        }
    }
    // Função para remover gastos
    removerGastos(outflow) {
        if (outflow.length === 0) {
            console.log(`Não há gasto a ser removido!\n`);
        }
        else {
            console.log("Listando todos os gastos: ");
            this.listarGastos(outflow);
            let idOpcao = Number(prompt("Digite o ID do gasto a ser removido: "));
            outflow.forEach(element => {
                if (element.id == idOpcao) {
                    outflow.splice(outflow.indexOf(element), 1);
                    console.log("Gasto removido!");
                    idOpcao = -15;
                }
            });
            if (idOpcao != -15) {
                console.log("Não há gasto com esse ID!");
            }
        }
    }
    // Função que edita os dados dos gastos
    editarGastos(outflow) {
        if (outflow.length === 0) {
            console.log(`Não há gasto a ser editado!\n`);
        }
        else {
            console.log("Listando todos os gastos: ");
            this.listarGastos(outflow);
            let idOpcao = Number(prompt("Digite o ID do gasto a ser editado: "));
            let idCheck = false;
            outflow.forEach(element => {
                if (idOpcao === element.id) {
                    idCheck = true;
                    // Alterando a área do gasto
                    let yesNo = prompt("Deseja alterar a área do gasto (S/N)? ");
                    if (yesNo == 'S' || yesNo == 's' || yesNo == 'Y' || yesNo == 'y') {
                        element.area = this.findArea();
                    }
                    element.titulo = prompt("Digite uma breve descrição do gasto: ");
                    element.valor = Number(prompt("Insira o valor gasto (apenas números): "));
                }
            });
            if (!idCheck) {
                console.log(`Não há gasto com esse ID!`);
            }
        }
    }
}
exports.Output = Output;
//# sourceMappingURL=CashOutflow.js.map