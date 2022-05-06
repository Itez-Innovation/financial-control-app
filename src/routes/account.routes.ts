import { Router } from 'express';
import accountController from "../controller/accountController";
import { verifyAuth } from '../middleware/verifyAuth';

const accountRoute = Router();

accountRoute.post("/accounts", verifyAuth(), accountController.create);

accountRoute.get("/accounts", verifyAuth(), accountController.read);

accountRoute.delete("/accounts", verifyAuth(), accountController.delete);

accountRoute.put("/accounts", verifyAuth(), accountController.update);

accountRoute.get("/accounts/all", verifyAuth(), accountController.readAll);

accountRoute.get("/stats", verifyAuth(), accountController.getStats);

accountRoute.get("/login", accountController.login);

export default accountRoute