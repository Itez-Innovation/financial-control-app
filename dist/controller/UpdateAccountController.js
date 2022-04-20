"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAccountController = void 0;
const UpdateAccountService_1 = require("../service/UpdateAccountService");
class UpdateAccountController {
    async handle(request, response) {
        const { id } = request.params;
        const { CPF, Name } = request.body;
        const service = new UpdateAccountService_1.UpdateAccountService();
        const result = await service.execute({ id, CPF, Name });
        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }
        return response.json(result);
    }
}
exports.UpdateAccountController = UpdateAccountController;
//# sourceMappingURL=UpdateAccountController.js.map