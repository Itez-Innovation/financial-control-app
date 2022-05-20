import CreateAccountDto from "../dto/account/createAccountDto";
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
        
    })
})