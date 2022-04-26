import { isNotEmpty } from 'class-validator';
import AccountEntity from './entity/AccountEntity';
import CashInflowEntity from './entity/CashInflowEntity';
import CashOutflowEntity from './entity/CashOutflowEntity';
import Account from './model/Account';
import Input from './model/CashInflow';
import Output from './model/CashOutflow';
import { setores } from './model/CashOutflow';
import AccountRepository from './repositories/AccountRepository';
import CashInflowRepository from './repositories/CashInflowRepository';
import CashOutflowRepository from './repositories/CashOutflowRepository';

const app = async () =>{
        // Declarações
        let option = 0

        const accountRepository = new AccountRepository();
        const inputRepository = new CashInflowRepository();
        const outputRepository = new CashOutflowRepository();

        let ac = new AccountEntity();
        let acc = new Account;

        let inn = new CashInflowEntity();
        let inf = new Input;

        let out = new CashOutflowEntity()
        let ouf = new Output;


        // npm install prompt-sync
        const prompt = require("prompt-sync")()

        /*-----------------------------------------------------------------------------------------*/

        // Função para imprimir uma linha do tamanho desejado
        function printLine(tamanho = 40, tipo = 1){
            if(tipo === 1){
                for(let i = 1; i < tamanho; i++){
                    process.stdout.write("-");
                }
                console.log("-")
            } else {
                for(let i = 1; i < tamanho; i++){
                    process.stdout.write("=");
                }
                console.log("=")
            }
        }

        /*-----------------------------------------------------------------------------------------*/

        //Função para imprimir o Menu de acesso à conta
        function printMenuAccount() {
            console.log("-----------------CONTAS-----------------")
            console.log("1 - CADASTRO")
            console.log("2 - ACESSAR CONTA")
            console.log("3 - SAIR")

            option = Number(prompt("Opção escolhida: "))
        }

        // Função para imprimir o menu com as opções da conta em uso
        function printMenuUser() {
            console.log("------------------OLÁ------------------")
            console.log("1 - ACESSAR FUNCIONALIDADES")
            console.log("2 - VER DADOS CADASTRADOS")
            console.log("3 - REMOVER CONTA CADASTRADA")
            console.log("4 - EDITAR DADOS CADASTRADOS")
            console.log("5 - SAIR")

            option = Number(prompt("Opção escolhida: "))
        }

        // Função para imprimir o menu de funcionalidades
        function printMenu() {
            console.log("------------------MENU------------------")
            console.log("1 - ADICIONAR GASTO")
            console.log("2 - REMOVER GASTO")
            console.log("3 - LISTAR GASTOS")
            console.log("4 - EDITAR GASTO")
            console.log("5 - ADICIONAR GANHO")
            console.log("6 - REMOVER GANHO")
            console.log("7 - LISTAR GANHOS")
            console.log("8 - EDITAR GANHO")
            console.log("9 - GERAR EXTRATO")
            console.log("10 - ENCERRAR")

            option = Number(prompt("Opção escolhida: "))
        }

        /*-----------------------------------------------------------------------------------------*/

        // Função principal
        async function main(){
            let act: AccountEntity | Error // Conta que será usada!
            printLine(40,2)
            do{
                printMenuAccount();
                switch(option){
                    case 1:
                        printLine(40, 1)
                        console.log("----------------CADASTRO----------------")
                        acc.CPF = prompt("Primeiramente, digite seu CPF (apenas números): ")
                        acc.Name = prompt("Agora, digite seu nome: ")
                        await accountRepository.create(acc)
                        console.log("Pronto! Conta criada!")
                        printLine(40, 1)
                        break;
                    case 2:
                        printLine(40, 1)
                        console.log("--------------ACESSAR CONTA-------------")
                        const a = await accountRepository.get_all()
                        if(a.length == 0){
                            console.log("Não há contas cadastradas!")
                            console.log("Cadastre uma e tente novamente!")
                        } else {
                            let i = 1
                            a.forEach(element => {
                                console.log(i + "º conta: " + element.Name);
                                //console.log("CPF: " + element.CPF + "\n")
                                i++;
                            });

                            act = await accountRepository.findByCpf(prompt("Digite o CPF da conta que deseja acessar (apenas números): "))

                            if(act instanceof AccountEntity){
                                console.log("Conta acessada! Seja bem vind@ "+ act.Name + "!")
                                option = 3
                            } else {
                                console.log("CPF inválido!");
                            }
                        }
                        printLine(40, 1)
                        break;
                    case 3:
                        printLine(40, 1)
                        console.log("Obrigado por acessar!")
                        printLine(40, 2)
                        return 0;
                        break;
                    case 4:
                        if(act == null){
                            printLine(40, 1)
                            console.log("Opção Inválida! Siga o menu!")
                            printLine(40, 1)
                            break;
                        } else {
                            option = 3;
                            printLine(40, 2)
                            break;
                        }
                    default:
                        console.log("Opção Inválida! Siga o menu!")
                        break;
                }
            }while(option != 3);

            if(act instanceof AccountEntity){
                option = 0;
                do{
                    printMenuUser();

                    switch(option){
                        case 1:
                            option = 5;
                            break;
                        case 2:
                            printLine(40, 1)
                            console.log("Dados cadastrados: ")
                            console.log("Nome: " + act.Name)
                            console.log("CPF: " + act.CPF)
                            printLine(40, 1)
                            break;
                        case 3:
                            printLine(40, 1)
                            let inf = await accountRepository.delete(act.CPF)
                            if(inf instanceof Error){
                                console.log("Erro!")
                            }
                            console.log("Conta deletada!")
                            printLine(40, 1)
                            return 0;
                            break;
                        case 4:
                            printLine(40, 1)
                            console.log("--------------EDITAR DADOS-------------")
                            let n = prompt("Insira o novo nome: ")
                            let c = prompt("Insira o novo CPF (apenas números): ")
                            let ac = await accountRepository.update(act.id, c, n)
                            if(ac instanceof AccountEntity){
                                act = ac
                            } else {
                                console.log("Erro! Tente outra vez!")
                            }
                            printLine(40, 1)
                            break;
                        case 5:
                            printLine(40, 1)
                            console.log("Obrigado por acessar!")
                            printLine(40, 2)
                            return 0;
                            break;
                        default:
                            printLine(40, 1)
                            console.log("Opção Inválida! Siga o menu!")
                            printLine(40, 2)
                            break;
                    }

                }while(option != 5);
            }

            printLine(40, 2)

            if(act instanceof AccountEntity){
                option = 0;

                do{
                    printMenu();
                    printLine(40, 1)
                    switch(option){
                        case 1:
                            console.log("~~~~~~~~~~ADICIONAR GASTO~~~~~~~~~~\n")
                            ouf.Titulo = prompt("Insira a descrição do gasto: ")
                            ouf.Valor = Number(prompt("Insira o valor do gasto (apenas valor): "))
                            
                            let opt
                            do{
                                console.log("Selecione uma área de gasto: ");
                                console.log("1 - Alimentação");
                                console.log("2 - Educação");
                                console.log("3 - Entretenimento");
                                console.log("4 - Saúde");
                                console.log("5 - Transporte");
                                opt = Number(prompt("Opção escolhida: "))
                            } while(opt < 1 || opt > 5);

                            switch(opt){
                                case 1:
                                    ouf.Area = setores.groceries;
                                    break;
                                case 2:
                                    ouf.Area = setores.education;
                                    break;
                                case 3:
                                    ouf.Area = setores.entertainment;
                                    break;
                                case 4:
                                    ouf.Area = setores.health;
                                    break;
                                case 5:
                                    ouf.Area = setores.transport;
                                    break;
                                default:
                                    ouf.Area = setores.education;
                                    break;
                            }

                            ouf.account_id = act.id;

                            await outputRepository.create(ouf);
                            break;
                        case 2:
                            console.log("~~~~~~~~~~REMOVER GASTO~~~~~~~~~~")
                            let c = await outputRepository.get_all();
                            let r = 1;
                            if(c.length == 0){
                                console.log("Não há saídas cadastradas!")
                                console.log("Cadastre uma e tente novamente!")
                            } else {
                                c.forEach(element => {
                                    console.log("ID do " + f + "º gasto (" + element.Titulo + "): "+ element.id);
                                    r++;
                                });
                            }
                            let idGasto = prompt("Digite o ID do gasto a ser removido: ");
                            await outputRepository.delete(idGasto);
                            break;
                        case 3:
                            console.log("~~~~~~~~~~LISTAR GASTOS~~~~~~~~~~")
                            let b = await outputRepository.get_all();
                            let j = 1;
                            if(b.length == 0){
                                console.log("Não há saídas cadastradas!")
                                console.log("Cadastre uma e tente novamente!")
                            } else {
                                b.forEach(element => {
                                    console.log(j + "º gasto: ")
                                    console.log(element.Titulo + ", no valor de R$ " + element.Valor + " do tipo " + element.Area + ";")
                                    j++;
                                });
                            }
                            break;
                        case 4:
                            console.log("~~~~~~~~~~EDITAR GASTOS~~~~~~~~~~")
                            let d = await outputRepository.get_all();
                            let t = 1;
                            if(d.length == 0){
                                console.log("Não há saídas cadastradas!")
                                console.log("Cadastre uma e tente novamente!")
                            } else {
                                d.forEach(element => {
                                    console.log("ID do " + f + "º gasto (" + element.Titulo + "): "+ element.id);
                                    t++;
                                });
                            }
                            let id_gasto = prompt("Digite o ID do gasto a ser editado: ");
                            let ar = prompt("Digite a área do gasto a ser editado: ");
                            let ti = prompt("Digite o título do gasto a ser editado: ");
                            let val = Number(prompt("Digite o valor do gasto a ser editado: "));
                            await outputRepository.update(id_gasto, ar, ti, val);
                            break;
                        case 5:
                            console.log("~~~~~~~~~~ADICIONAR GANHO~~~~~~~~~~")
                            inf.Titulo = prompt("Insira a descrição do ganho: ")
                            inf.Valor = Number(prompt("Insira o valor do ganho (apenas valor): "))
                            inf.account_id = act.id;
                            await inputRepository.create(inf);
                            break;
                        case 6:
                            console.log("~~~~~~~~~~REMOVER GANHO~~~~~~~~~~")
                            let q = await inputRepository.get_all();
                            let w = 1;
                            if(q.length == 0){
                                console.log("Não há entradas cadastradas!")
                                console.log("Cadastre uma e tente novamente!")
                            } else {
                                q.forEach(element => {
                                    console.log("ID do " + w + "º ganho (" + element.Titulo + "): "+ element.id);
                                    w++;
                                });
                            }
                            let idGanho = prompt("Digite o ID do ganho a ser removido: ");
                            await inputRepository.delete(idGanho);
                            break;
                        case 7:
                            console.log("~~~~~~~~~~LISTAR GANHOS~~~~~~~~~~")
                            let a = await inputRepository.get_all();
                            let i = 1;
                            if(a.length == 0){
                                console.log("Não há entradas cadastradas!")
                                console.log("Cadastre uma e tente novamente!")
                            } else {
                                a.forEach(element => {
                                    console.log(i + "º ganho: ")
                                    console.log(element.Titulo + ", no valor de R$ " + element.Valor + ";")
                                    i++;
                                });
                            }
                            break;
                        case 8:
                            console.log("~~~~~~~~~~EDITAR GANHO~~~~~~~~~~")
                            let y = await inputRepository.get_all();
                            let f = 1;
                            if(y.length == 0){
                                console.log("Não há entradas cadastradas!")
                                console.log("Cadastre uma e tente novamente!")
                            } else {
                                y.forEach(element => {
                                    console.log("ID do " + f + "º ganho (" + element.Titulo + "): "+ element.id);
                                    f++;
                                });
                            }
                            let id_ganho = prompt("Digite o ID do ganho a ser editado: ");
                            let tit = prompt("Digite o título do gasto a ser editado: ");
                            let valo = Number(prompt("Digite o valor do gasto a ser editado: "));
                            await inputRepository.update(id_ganho, tit, valo);
                            break;
                    
                        case 9:
                            console.log("~~~~~~~~~~GERAR EXTRATO~~~~~~~~~~")

                            break;
                        case 10:
                            printLine(40, 1)
                            console.log("Obrigado por acessar!")
                            printLine(40, 2)
                            return 0;
                            break;
                        default:
                            printLine(40, 1)
                            console.log("Opção inválida!")
                            console.log("Siga o menu!")
                            printLine(40, 1)
                            break;
                    }

                } while (option != 10)
            }
    
        }

        main();
        
}

export default app