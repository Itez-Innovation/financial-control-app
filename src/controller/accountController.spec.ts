import app from "../app"
import request from "supertest"
import CreateAccountDto from "../dto/account/createAccountDto"
import AccountRepository from "../repositories/accountRepository/AccountRepository"
import TokenRepository from "../repositories/tokenRepository/TokenRepository"
import PermissionRepository from "../repositories/permissionRepository/PermissionRepository"
import RoleRepository from "../repositories/roleRepository/RoleRepository"
import AccountService from "../service/accountService"
import { createConnections, getConnection } from "typeorm"


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
// --------------------------------- //

describe("Create User Controller", () => {

    it("Should be able to create a new user", async () => {
        // await createConnections()
        // const defaultConnection = getConnection('default')

        

        const ans = await request(app)
        .post("/accounts")
        .send({
            CPF: dto.CPF,
            Name: dto.Name,
            password: dto.password
        })

        

        console.log(ans.status);
    })
})