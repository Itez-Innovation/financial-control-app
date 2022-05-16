import { Router } from "express";
import { EPermissions } from "../enum/EPermissions";
import { verifyAuth } from "../middleware/verifyAuth";
import { can, is } from "../middleware/permissions";
import { ERoles } from "../enum/ERoles";
import accountController from "../controller/accountController";


const adminRoute = Router();

adminRoute.post("/accounts/admin", verifyAuth, can([EPermissions.CREATE_ACCOUNT]), is([ERoles.ADMIN]), accountController.create);



export default adminRoute;