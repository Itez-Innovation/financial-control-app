"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllAccountsController = void 0;
const GetAllAccountsService_1 = require("../service/GetAllAccountsService");
class GetAllAccountsController {
    async handle(request, response) {
        const service = new GetAllAccountsService_1.GetAllAccountsService();
        const accounts = await service.execute();
        return response.json(accounts);
    }
}
exports.GetAllAccountsController = GetAllAccountsController;
//# sourceMappingURL=GetAllAccountsController.js.map