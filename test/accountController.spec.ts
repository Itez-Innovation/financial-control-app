import Request from "supertest"
import CreateAccountDto from "../src/dto/account/createAccountDto"
import { getApp } from './config/baseIntegrationTest'




// --------------------------------- //
const dto = new CreateAccountDto()
dto.CPF = "11111111111"
dto.Name = "Teste"
dto.password = "Teste123"
// --------------------------------- //

describe("Create User Controller", () => {

    it("Should be able to create a new user", async () => {

        const ans = await Request(getApp())
        .post("/accounts")
        .send({
            CPF: dto.CPF,
            Name: dto.Name,
            password: dto.password
        })

        console.log(ans.status);
        return ans.status;
    })
})