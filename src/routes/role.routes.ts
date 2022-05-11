import { Router } from 'express';
import roleController from '../controller/roleController';
import { verifyAuth } from '../middleware/verifyAuth';

const roleRoute = Router()

roleRoute.post("/roles", verifyAuth, roleController.create);

roleRoute.post("/roles/:roleId", verifyAuth, roleController.createRolePermission);

export default roleRoute