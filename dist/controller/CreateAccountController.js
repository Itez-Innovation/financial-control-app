"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAccountController = void 0;
const CreateAccountService_1 = require("../service/CreateAccountService");
class CreateAccountController {
    static create(arg0, create) {
        throw new Error("Method not implemented.");
    }
    async handle(request, response) {
        const { CPF, Name } = request.body;
        const service = new CreateAccountService_1.CreateAccountService();
        const result = await service.execute({ CPF, Name });
        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }
        return response.json(result);
    }
}
exports.CreateAccountController = CreateAccountController;
//# sourceMappingURL=CreateAccountController.js.map