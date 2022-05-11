import { NextFunction, Request, Response } from "express";
import { RoleService } from "../service/roleService";


const service = new RoleService()

class RoleController {
    async create(request: Request, res: Response, next: NextFunction){
        try{

            const { name, description } = request.body;

            const response = await service.create({ name, description })
        
            res.status(201).json(response)

        } catch (error) {
            res.status(400).json({code: 400, message: "internal server error"})
        }
    }

    async createRolePermission(request: Request, res: Response, next: NextFunction) {
        try {

            const { roleId } = request.params;
            const { permissions } = request.body;

            const response = await service.createRolePermission({ roleId, permissions });

            res.status(201).json(response)

        } catch (error) {
            res.status(400).json({code: 400, message: "internal server error"})
        }
    }
}

export default new RoleController()