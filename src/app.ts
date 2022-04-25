import { isNotEmpty } from 'class-validator';
import AccountEntity from './entity/AccountEntity';
import Account from './model/Account';
import AccountRepository from './repositories/AccountRepository';

const app = async () =>{
        // Declarações
        let option = 0

        const accountRepository = new AccountRepository()
        let ac = new AccountEntity()
        let acc = new Account

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
                        return 0;
                        printLine(40, 2)
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
                            return 0;
                            printLine(40, 1)
                            break;
                        default:
                            printLine(40, 1)
                            console.log("Opção Inválida! Siga o menu!")
                            printLine(40, 1)
                            break
                    }

                }while(option != 5);
            }
    
        }

        main();
        
}

export default app


// do {
    //     printMenuAccount()

    //     switch (option) {
    //         case 1:
    //             console.log("\n~~~~~~~~~~ADICIONAR CONTA~~~~~~~~~~\n")
    //             accounts.push(acc.createAccount("idAcc"))
    //             console.log(acc)
    //             acc.CPF = prompt("CPF: ")
    //             acc.Name = prompt("Nome: ")
    //             const a = await accountRepository.create(acc)
    //             console.log(a)

    //             idAcc++
    //             break;
    //         case 2:
    //             if (accounts.length === 0){
    //                 console.log(`\nPor favor, crie uma conta primeiro!`)
    //             } else {
    //                 printLine(40, 1)
    //                 acc.showDataAccount(accounts)
    //                 printLine(40, 1)
    //             }
                
    //             break;
    //         case 3:
    //             if (accounts.length === 0){
    //                 console.log(`\nPor favor, crie uma conta primeiro!`)
    //                 option = 0
    //             }
    //             break;
    //         case 4:
    //             if (accounts.length === 0){
    //                 console.log(`\nPor favor, crie uma conta primeiro!`)
    //                 option = 0
    //             }
    //             let id = prompt("ID da Conta: ")
    //             const b = await accountRepository.delete(id)
    //             console.log(b)
    //             break;
    //         case 5:
    //             if (accounts.length === 0){
    //                 console.log(`\nPor favor, crie uma conta primeiro!`)
    //                 option = 0
    //             }
    //             let identifier = prompt("ID da Conta: ")
    //             let CPF = prompt("Novo CPF da conta: ")
    //             let Nome = prompt("Novo NOME da conta: ")
    //             const c = await accountRepository.update(identifier, CPF, Nome)
    //             console.log(c)
    //             break;
    //         case 6:
    //             if (accounts.length === 0){
    //                 console.log(`\nPor favor, crie uma conta primeiro!`)
    //                 option = 0
    //             }
    //             const d = await accountRepository.get_all()
    //             break;

    //         default:
    //             console.log("\nOpção incorreta! Siga o menu!")
    //             break;
    //     }
    // } while (option != 7)

    // printLine(40,2)
    // option = 0

    // do{
    //     printMenu()
    //     printLine(40, 1)
    //     switch (option) {
    //         case 1:
    //             console.log("~~~~~~~~~~ADICIONAR GASTO~~~~~~~~~~\n")
    //             acc.addOutput(accounts[0], idOutflow)
    //             idOutflow++
    //             break;
    //         case 2:
    //             console.log("~~~~~~~~~~REMOVER GASTO~~~~~~~~~~\n")
    //             acc.rmOutput(accounts[0])
    //             break;
    //         case 3:
    //             console.log("~~~~~~~~~~LISTAR GASTOS~~~~~~~~~~\n")
    //             acc.listOutput(accounts[0])
    //             break;
    //         case 4:
    //             console.log("~~~~~~~~~~EDITAR GASTOS~~~~~~~~~~\n")
    //             acc.editOutput(accounts[0])
    //             break;
    //         case 5:
    //             console.log("~~~~~~~~~~ADICIONAR GANHO~~~~~~~~~~\n")
    //             acc.addInput(accounts[0], idInflow)
    //             idInflow++
    //             break;
    //         case 6:
    //             console.log("~~~~~~~~~~REMOVER GANHO~~~~~~~~~~\n")
    //             acc.rmInput(accounts[0])
    //             break;
    //         case 7:
    //             console.log("~~~~~~~~~~LISTAR GANHOS~~~~~~~~~~\n")
    //             acc.listInput(accounts[0])
    //             break;
    //         case 8:
    //             console.log("~~~~~~~~~~EDITAR GANHO~~~~~~~~~~\n")
    //             acc.editInput(accounts[0])
    //             break;
    //         case 9:
    //             console.log("~~~~~~~~~~GERAR EXTRATO~~~~~~~~~~\n")
    //             acc.genStats(accounts[0])
    //             break;
    //         case 10:
    //             console.log("OBRIGADO POR UTILIZAR O PROGRAMA!\n")
    //             break;
    //         default:
    //             console.log("OPÇÃO INCORRETA! SIGA O MENU E DIGITE NOVAMENTE!\n")
    //             break;
    //     }
    //     printLine(40, 2)
    // } while (option != 10)