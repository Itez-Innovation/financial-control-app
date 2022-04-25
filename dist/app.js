"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AccountEntity_1 = require("./entity/AccountEntity");
const CashInflowEntity_1 = require("./entity/CashInflowEntity");
const CashOutflowEntity_1 = require("./entity/CashOutflowEntity");
const Account_1 = require("./model/Account");
const CashInflow_1 = require("./model/CashInflow");
const CashOutflow_1 = require("./model/CashOutflow");
const CashOutflow_2 = require("./model/CashOutflow");
const AccountRepository_1 = require("./repositories/AccountRepository");
const CashInflowRepository_1 = require("./repositories/CashInflowRepository");
const CashOutflowRepository_1 = require("./repositories/CashOutflowRepository");
const app = async () => {
    // Declarações
    let option = 0;
    const accountRepository = new AccountRepository_1.default();
    const inputRepository = new CashInflowRepository_1.default();
    const outputRepository = new CashOutflowRepository_1.default();
    let ac = new AccountEntity_1.default();
    let acc = new Account_1.default;
    let inn = new CashInflowEntity_1.default();
    let inf = new CashInflow_1.default;
    let out = new CashOutflowEntity_1.default();
    let ouf = new CashOutflow_1.default;
    // npm install prompt-sync
    const prompt = require("prompt-sync")();
    /*-----------------------------------------------------------------------------------------*/
    // Função para imprimir uma linha do tamanho desejado
    function printLine(tamanho = 40, tipo = 1) {
        if (tipo === 1) {
            for (let i = 1; i < tamanho; i++) {
                process.stdout.write("-");
            }
            console.log("-");
        }
        else {
            for (let i = 1; i < tamanho; i++) {
                process.stdout.write("=");
            }
            console.log("=");
        }
    }
    /*-----------------------------------------------------------------------------------------*/
    //Função para imprimir o Menu de acesso à conta
    function printMenuAccount() {
        console.log("-----------------CONTAS-----------------");
        console.log("1 - CADASTRO");
        console.log("2 - ACESSAR CONTA");
        console.log("3 - SAIR");
        option = Number(prompt("Opção escolhida: "));
    }
    // Função para imprimir o menu com as opções da conta em uso
    function printMenuUser() {
        console.log("------------------OLÁ------------------");
        console.log("1 - ACESSAR FUNCIONALIDADES");
        console.log("2 - VER DADOS CADASTRADOS");
        console.log("3 - REMOVER CONTA CADASTRADA");
        console.log("4 - EDITAR DADOS CADASTRADOS");
        console.log("5 - SAIR");
        option = Number(prompt("Opção escolhida: "));
    }
    // Função para imprimir o menu de funcionalidades
    function printMenu() {
        console.log("------------------MENU------------------");
        console.log("1 - ADICIONAR GASTO");
        // console.log("2 - REMOVER GASTO")
        console.log("3 - LISTAR GASTOS");
        // console.log("4 - EDITAR GASTO")
        console.log("5 - ADICIONAR GANHO");
        // console.log("6 - REMOVER GANHO")
        console.log("7 - LISTAR GANHOS");
        // console.log("8 - EDITAR GANHO")
        // console.log("9 - GERAR EXTRATO")
        console.log("10 - ENCERRAR");
        option = Number(prompt("Opção escolhida: "));
    }
    /*-----------------------------------------------------------------------------------------*/
    // Função principal
    async function main() {
        let act; // Conta que será usada!
        printLine(40, 2);
        do {
            printMenuAccount();
            switch (option) {
                case 1:
                    printLine(40, 1);
                    console.log("----------------CADASTRO----------------");
                    acc.CPF = prompt("Primeiramente, digite seu CPF (apenas números): ");
                    acc.Name = prompt("Agora, digite seu nome: ");
                    await accountRepository.create(acc);
                    console.log("Pronto! Conta criada!");
                    printLine(40, 1);
                    break;
                case 2:
                    printLine(40, 1);
                    console.log("--------------ACESSAR CONTA-------------");
                    const a = await accountRepository.get_all();
                    if (a.length == 0) {
                        console.log("Não há contas cadastradas!");
                        console.log("Cadastre uma e tente novamente!");
                    }
                    else {
                        let i = 1;
                        a.forEach(element => {
                            console.log(i + "º conta: " + element.Name);
                            //console.log("CPF: " + element.CPF + "\n")
                            i++;
                        });
                        act = await accountRepository.findByCpf(prompt("Digite o CPF da conta que deseja acessar (apenas números): "));
                        if (act instanceof AccountEntity_1.default) {
                            console.log("Conta acessada! Seja bem vind@ " + act.Name + "!");
                            option = 3;
                        }
                        else {
                            console.log("CPF inválido!");
                        }
                    }
                    printLine(40, 1);
                    break;
                case 3:
                    printLine(40, 1);
                    console.log("Obrigado por acessar!");
                    printLine(40, 2);
                    return 0;
                    break;
                case 4:
                    if (act == null) {
                        printLine(40, 1);
                        console.log("Opção Inválida! Siga o menu!");
                        printLine(40, 1);
                        break;
                    }
                    else {
                        option = 3;
                        printLine(40, 2);
                        break;
                    }
                default:
                    console.log("Opção Inválida! Siga o menu!");
                    break;
            }
        } while (option != 3);
        if (act instanceof AccountEntity_1.default) {
            option = 0;
            do {
                printMenuUser();
                switch (option) {
                    case 1:
                        option = 5;
                        break;
                    case 2:
                        printLine(40, 1);
                        console.log("Dados cadastrados: ");
                        console.log("Nome: " + act.Name);
                        console.log("CPF: " + act.CPF);
                        printLine(40, 1);
                        break;
                    case 3:
                        printLine(40, 1);
                        let inf = await accountRepository.delete(act.CPF);
                        if (inf instanceof Error) {
                            console.log("Erro!");
                        }
                        console.log("Conta deletada!");
                        printLine(40, 1);
                        return 0;
                        break;
                    case 4:
                        printLine(40, 1);
                        console.log("--------------EDITAR DADOS-------------");
                        let n = prompt("Insira o novo nome: ");
                        let c = prompt("Insira o novo CPF (apenas números): ");
                        let ac = await accountRepository.update(act.id, c, n);
                        if (ac instanceof AccountEntity_1.default) {
                            act = ac;
                        }
                        else {
                            console.log("Erro! Tente outra vez!");
                        }
                        printLine(40, 1);
                        break;
                    case 5:
                        printLine(40, 1);
                        console.log("Obrigado por acessar!");
                        printLine(40, 2);
                        return 0;
                        break;
                    default:
                        printLine(40, 1);
                        console.log("Opção Inválida! Siga o menu!");
                        printLine(40, 2);
                        break;
                }
            } while (option != 5);
        }
        printLine(40, 2);
        if (act instanceof AccountEntity_1.default) {
            option = 0;
            do {
                printMenu();
                printLine(40, 1);
                switch (option) {
                    case 1:
                        console.log("~~~~~~~~~~ADICIONAR GASTO~~~~~~~~~~\n");
                        ouf.Titulo = prompt("Insira a descrição do gasto: ");
                        ouf.Valor = Number(prompt("Insira o valor do gasto (apenas valor): "));
                        let opt;
                        do {
                            console.log("Selecione uma área de gasto: ");
                            console.log("1 - Alimentação");
                            console.log("2 - Educação");
                            console.log("3 - Entretenimento");
                            console.log("4 - Saúde");
                            console.log("5 - Transporte");
                            opt = Number(prompt("Opção escolhida: "));
                        } while (opt < 1 || opt > 5);
                        switch (opt) {
                            case 1:
                                ouf.Area = CashOutflow_2.setores.groceries;
                                console.log(ouf.Area);
                                break;
                            case 2:
                                ouf.Area = CashOutflow_2.setores.education;
                                break;
                            case 3:
                                ouf.Area = CashOutflow_2.setores.entertainment;
                                break;
                            case 4:
                                ouf.Area = CashOutflow_2.setores.health;
                                break;
                            case 5:
                                ouf.Area = CashOutflow_2.setores.transport;
                                break;
                            default:
                                ouf.Area = CashOutflow_2.setores.education;
                                break;
                        }
                        ouf.account_id = act.id;
                        await outputRepository.create(ouf);
                        break;
                    case 2:
                        console.log("~~~~~~~~~~REMOVER GASTO~~~~~~~~~~");
                        break;
                    case 3:
                        console.log("~~~~~~~~~~LISTAR GASTOS~~~~~~~~~~");
                        let b = await outputRepository.get_all();
                        let j = 1;
                        if (b.length == 0) {
                            console.log("Não há saídas cadastradas!");
                            console.log("Cadastre uma e tente novamente!");
                        }
                        else {
                            b.forEach(element => {
                                console.log(j + "º gasto: ");
                                console.log(element.Titulo + ", no valor de R$ " + element.Valor + " do tipo " + element.Area + ";");
                                j++;
                            });
                        }
                        break;
                    case 4:
                        console.log("~~~~~~~~~~EDITAR GASTOS~~~~~~~~~~");
                        break;
                    case 5:
                        console.log("~~~~~~~~~~ADICIONAR GANHO~~~~~~~~~~");
                        inf.Titulo = prompt("Insira a descrição do ganho: ");
                        inf.Valor = Number(prompt("Insira o valor do ganho (apenas valor): "));
                        inf.account_id = act.id;
                        await inputRepository.create(inf);
                        break;
                    case 6:
                        console.log("~~~~~~~~~~REMOVER GANHO~~~~~~~~~~");
                        break;
                    case 7:
                        console.log("~~~~~~~~~~LISTAR GANHOS~~~~~~~~~~");
                        let a = await inputRepository.get_all();
                        let i = 1;
                        if (a.length == 0) {
                            console.log("Não há entradas cadastradas!");
                            console.log("Cadastre uma e tente novamente!");
                        }
                        else {
                            a.forEach(element => {
                                console.log(i + "º ganho: ");
                                console.log(element.Titulo + ", no valor de R$ " + element.Valor + ";");
                                i++;
                            });
                        }
                        break;
                    case 8:
                        console.log("~~~~~~~~~~EDITAR GANHO~~~~~~~~~~");
                        break;
                    case 9:
                        console.log("~~~~~~~~~~GERAR EXTRATO~~~~~~~~~~");
                        break;
                    case 10:
                        printLine(40, 1);
                        console.log("Obrigado por acessar!");
                        printLine(40, 2);
                        return 0;
                        break;
                    default:
                        printLine(40, 1);
                        console.log("Opção inválida!");
                        console.log("Siga o menu!");
                        printLine(40, 1);
                        break;
                }
            } while (option != 10);
        }
    }
    main();
};
exports.default = app;
//# sourceMappingURL=app.js.map