import { NextFunction, Request, Response } from "express";
import PermissionRepository from "../repositories/permissionRepository/PermissionRepository";
import { PermissionService } from "../service/permissionService";


const service = new PermissionService(new PermissionRepository())

class PermissionController {
    async create(request: Request, res: Response, next: NextFunction){
        try{

            const { name, description } = request.body;

            const response = await service.create({ name, description })
        
            res.status(201).json(response)

        } catch (error) {
            res.status(500).json({code: 500, message: "internal server error"})
        }
    }
}

export default new PermissionController()