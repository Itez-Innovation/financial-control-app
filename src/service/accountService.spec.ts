import AccountEntity from "../entity/AccountEntity";
import CreateAccountDto from "../dto/account/createAccountDto";
import ConflictError from "../exceptions/conflictError";
import NotFoundError from "../exceptions/notFoundError";
import Account from "../model/Account";
import AccountRepository from "../repositories/accountRepository/AccountRepository";
import PermissionRepository from "../repositories/permissionRepository/PermissionRepository";
import RoleRepository from "../repositories/roleRepository/RoleRepository";
import TokenRepository from "../repositories/tokenRepository/TokenRepository";
import AccountService from "./accountService"

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
dto.password = "Teste123"
const newAccount = new Account(dto);

dto.CPF = "22222222222"
dto.Name = "Teste2"
dto.password = "Teste2"
const newAccount2 = new Account(dto, newAccount.id);
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
        
        const response = service.update("22222222222", "Teste2", "Teste2", newAccount2.id)
        
        await expect(response)

    });
})