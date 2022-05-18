import AccountRepository from "../repositories/accountRepository/AccountRepository";
import AccountService from "./accountService"

jest.mock("../repositories/accountRepository/AccountRepository")
const accountRepository = AccountRepository as jest.Mock<AccountRepository>
const accountRepositoryMock = new accountRepository() as jest.Mocked<AccountRepository>
const service = new AccountService(accountRepositoryMock)

describe("Account Service", () => {
    it("should be able to create a new account", async () => {
        // const createAccountService = AccountService;

        const CPF = "11111111111"
        const Name = "Teste"
        const password = "Teste123"

        const account = await service.create({ CPF, Name, password });
        
        console.log("oi: ", account)

        expect(account).toHaveProperty("id");
    })
})