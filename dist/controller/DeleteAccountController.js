"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteAccountController = void 0;
const DeleteAccountService_1 = require("../service/DeleteAccountService");
class DeleteAccountController {
    async handle(request, response) {
        const { id } = request.params;
        const service = new DeleteAccountService_1.DeleteAccountService();
        const result = await service.execute(id);
        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }
        return response.status(200).end();
    }
}
exports.DeleteAccountController = DeleteAccountController;
//# sourceMappingURL=DeleteAccountController.js.map