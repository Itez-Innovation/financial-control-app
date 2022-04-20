"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCashOutflowController = void 0;
const CreateCashOutflowService_1 = require("../service/CreateCashOutflowService");
class CreateCashOutflowController {
    async handle(request, response) {
        const { Area, Titulo, Valor, account_id } = request.body;
        const service = new CreateCashOutflowService_1.CreateCashOutflowService();
        const result = await service.execute({
            Area,
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
exports.CreateCashOutflowController = CreateCashOutflowController;
//# sourceMappingURL=CreateCashOutflowController.js.map