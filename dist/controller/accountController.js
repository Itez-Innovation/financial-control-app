"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const accountService_1 = require("../service/accountService");
const service = new accountService_1.AccountService();
class AccountController {
    async create(request, res, next) {
        try {
            const { CPF, Name } = request.body;
            const response = await service.create({ CPF, Name });
            return res.status(201).json(response);
        }
        catch (error) {
            res.status(500).json({ code: 500, message: "internal server error" });
        }
    }
    async delete(request, res, next) {
        try {
            const { id } = request.params;
            await service.delete(id);
            return res.status(204).json();
        }
        catch (error) {
            res.status(500).json({ code: 500, message: "internal server error" });
        }
    }
    async update(request, res, next) {
        try {
            const { CPF, Name, id } = request.body;
            const response = await service.update(CPF, Name, id);
            return res.status(201).json(response);
        }
        catch (error) {
            res.status(500).json({ code: 500, message: "internal server error" });
        }
    }
    async read(request, res, next) {
        try {
            const { id } = request.body;
            const response = await service.read(id);
            return res.status(201).json();
        }
        catch (error) {
            res.status(500).json({ code: 500, message: "internal server error" });
        }
    }
    async readAll(request, res, next) {
        try {
            const response = await service.readAll();
            return res.status(201).json(response);
        }
        catch (error) {
            res.status(500).json({ code: 500, message: "internal server error" });
        }
    }
}
exports.default = new AccountController();
//# sourceMappingURL=accountController.js.map