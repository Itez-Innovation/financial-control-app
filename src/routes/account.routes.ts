import { Router } from 'express';
import accountController from "../controller/accountController";

const accountRoute = Router();

accountRoute.post("/accounts", accountController.create);

accountRoute.get("/accounts", accountController.read);

accountRoute.delete("/accounts", accountController.delete);

accountRoute.put("/accounts", accountController.update);

accountRoute.get("/accounts/all", accountController.readAll);

export default accountRoute