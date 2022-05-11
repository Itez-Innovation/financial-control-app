import { Router } from 'express';
import permissionController from "../controller/permissionController";
import { verifyAuth } from '../middleware/verifyAuth';

const permissionRoute = Router()

permissionRoute.post("/permissions", verifyAuth, permissionController.create);

export default permissionRoute