import { Router } from "express";
import { EPermissions } from "../enum/EPermissions";
import { verifyAuth } from "../middleware/verifyAuth";
import { can, is } from "../middleware/permissions";
import { ERoles } from "../enum/ERoles";
import accountController from "../controller/accountController";


const adminRoute = Router();

adminRoute.post("/admin/accounts", verifyAuth, can([EPermissions.CREATE_ACCOUNT]), is([ERoles.ADMIN]), accountController.create);

adminRoute.get("/admin/accounts", verifyAuth, can([EPermissions.GET_ACCOUNT]), is([ERoles.ADMIN]), accountController.readAdmin);

adminRoute.delete("/admin/accounts", verifyAuth, can([EPermissions.DELETE_ACCOUNT]), is([ERoles.ADMIN]), accountController.deleteAdmin);

adminRoute.put("/admin/accounts", verifyAuth, can([EPermissions.UPDATE_ACCOUNT]), is([ERoles.ADMIN]), accountController.updateAdmin);

adminRoute.get("/admin/accounts/all", verifyAuth, can([EPermissions.GET_ALL_ACCOUNTS]), is([ERoles.ADMIN]), accountController.readAll);

adminRoute.get("/admin/stats", verifyAuth, accountController.getStatsAdmin);

adminRoute.post("/admin/acl", verifyAuth, accountController.createAcl);

export default adminRoute;