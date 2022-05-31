import CreateAccountDto from "../dto/account/createAccountDto";
import CreateOutputDto from '../dto/output/createOutputDto'
import ConflictError from "../exceptions/conflictError";
import NotFoundError from "../exceptions/notFoundError";
import Account from "../model/Account";
import AccountRepository from "../repositories/accountRepository/AccountRepository";
import PermissionRepository from "../repositories/permissionRepository/PermissionRepository";
import RoleRepository from "../repositories/roleRepository/RoleRepository";
import TokenRepository from "../repositories/tokenRepository/TokenRepository";
import AccountService from "./accountService"
import CreateInputDto from "../dto/input/createInputDto";
import CashInflow from "../model/CashInflow";
import CashOutflow, { setores } from "../model/CashOutflow";

jest.mock("../repositories/accountRepository/AccountRepository")
const accountRepository = AccountRepository as jest.Mock<AccountRepository>
const accountRepositoryMock = new accountRepository() as jest.Mocked<AccountRepository>

jest.mock("../repositories/tokenRepository/TokenRepository")
const tokenRepository = TokenRepository as jest.Mock<TokenRepository>
const tokenRepositoryMock = new tokenRepository() as jest.Mocked<TokenRepository>

jest.mock("../repositories/permissionRepository/PermissionRepository")
const permissionRepository = PermissionRepository as jest.Mock<PermissionRepository>
const permissionRepositoryMock = new permissionRepository() as jest.Mocked<PermissionRepository>

jest.mock("../repositories/roleRepository/RoleRepository")
const roleRepository = RoleRepository as jest.Mock<RoleRepository>
const roleRepositoryMock = new roleRepository() as jest.Mocked<RoleRepository>

const service = new AccountService(accountRepositoryMock, tokenRepositoryMock, permissionRepositoryMock, roleRepositoryMock)


// --------------------------------- //
const dto = new CreateAccountDto()
dto.CPF = "11111111111"
dto.Name = "Teste"
dto.password = "Teste1"
const newAccount = new Account(dto);

dto.CPF = "22222222222"
dto.Name = "Teste2"
dto.password = "Teste2"
const newAccount2 = new Account(dto, newAccount.id);

dto.CPF = "33333333333"
dto.Name = "Teste3"
dto.password = "Teste3"
const newAccount3 = new Account(dto);

const dto2 = new CreateInputDto()
dto2.Titulo = "Input1"
dto2.Valor = 50.5
dto2.account_id = newAccount.id
const newInput = new CashInflow(dto2)

const dto3 = new CreateOutputDto()
dto3.Titulo = "Output1"
dto3.Valor = 50.5
dto3.Area = setores.education
dto3.account_id = newAccount.id
const newOutput = new CashOutflow(dto3)

newAccount.input = [newInput]
newAccount.output = [newOutput]
// --------------------------------- //

describe("Account Service", () => {
    it("should be able to create a new account", async () => {

        accountRepositoryMock.create.mockResolvedValueOnce(newAccount)

        const account = await service.create(newAccount);

        expect(account.id).not.toEqual(undefined)
        expect(account.Name).toEqual(newAccount.Name)
        expect(account.CPF).toEqual(newAccount.CPF)
        expect(account.password).toEqual(newAccount.password)
    });

    it("should not be able to create an existing account", async () => {
        accountRepositoryMock.findByCpf.mockResolvedValueOnce(newAccount)

        // Primeira vez (deve funcionar)
        const response = service.create(newAccount);

        // Segunda vez (deve retornar erro)
        await expect(response)
        .rejects.toEqual(new ConflictError(`This account ${dto.CPF} already exists`))
    });

    it("should not be able to delete an account that does not exists", async () => {
        const response = service.delete(newAccount.id);
        
        await expect(response)
        .rejects.toEqual(new NotFoundError(`Account ${newAccount.id}`))
    });

    it("should be able to update an existing account", async () => {
        accountRepositoryMock.findById.mockResolvedValueOnce(newAccount);
        accountRepositoryMock.update.mockResolvedValueOnce(newAccount2);
        
        const response = await service.update("22222222222", "Teste2", "Teste2", newAccount2.id)
        
        expect(response).toEqual(newAccount2)
    });

    it("should be able to read an existing account", async () => {
        accountRepositoryMock.findById.mockResolvedValue(newAccount);

        const response = await service.read(newAccount.id);

        expect(response).toEqual(newAccount);
    });

    it("should be able to read all accounts", async () => {
        accountRepositoryMock.get_all.mockResolvedValue([newAccount, newAccount3]);
    
        const response = await service.readAll();

        expect(response).toEqual([newAccount, newAccount3]);
    });

    it("should be able to get stats of an account", async () => {
        accountRepositoryMock.getStats.mockResolvedValueOnce([newAccount]);

        const response = await service.getStats(newAccount.id);
        
        expect(response.at(0).input).toEqual([newInput])
        expect(response.at(0).output).toEqual([newOutput])
    });
})