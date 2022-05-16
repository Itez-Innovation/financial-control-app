import { Router } from 'express';
import accountController from "../controller/accountController";
import { ERoles } from '../enum/ERoles';
import { EPermissions } from '../enum/EPermissions';
import { verifyAuth } from '../middleware/verifyAuth';
import { can, is } from "../middleware/permissions"

const accountRoute = Router();

accountRoute.post("/accounts", accountController.create);

accountRoute.get("/accounts", verifyAuth, accountController.read);

accountRoute.delete("/accounts", verifyAuth, accountController.delete);

accountRoute.put("/accounts", verifyAuth, accountController.update);

accountRoute.get("/accounts/all", verifyAuth, accountController.readAll);

accountRoute.get("/stats", verifyAuth, accountController.getStats);

accountRoute.post("/login", accountController.login);

accountRoute.post("/refresh/:id", accountController.refresh);

accountRoute.post("/acl", verifyAuth, accountController.createAcl);

export default accountRoute

// accountRoute.get("/accounts", verifyAuth, (req, res, next) => authorization(req, res, next, ERoles.GET_ACCOUNT), accountController.read);