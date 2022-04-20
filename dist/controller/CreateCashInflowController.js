"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCashInflowController = void 0;
const CreateCashInflowService_1 = require("../service/CreateCashInflowService");
class CreateCashInflowController {
    async handle(request, response) {
        const { Titulo, Valor, account_id } = request.body;
        const service = new CreateCashInflowService_1.CreateCashInflowService();
        const result = await service.execute({
            Titulo,
            Valor,
            account_id
        });
        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }
        return response.json(result);
    }
}
exports.CreateCashInflowController = CreateCashInflowController;
//# sourceMappingURL=CreateCashInflowController.js.map