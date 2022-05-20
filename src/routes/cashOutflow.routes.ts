import { Router } from 'express';
import { verifyAuth } from '../middleware/verifyAuth';
import { can, is } from "../middleware/permissions";
import { ERoles } from "../enum/ERoles";
import { EPermissions } from "../enum/EPermissions";
import cashOutflowController from '../controller/cashOutflowController';


const cashOutflowRoute = Router()

cashOutflowRoute.post("/outputs", verifyAuth, cashOutflowController.create)

cashOutflowRoute.get("/outputs", verifyAuth, cashOutflowController.read)

cashOutflowRoute.delete("/outputs", verifyAuth, cashOutflowController.delete)

cashOutflowRoute.put("/outputs", verifyAuth, cashOutflowController.update)

cashOutflowRoute.get("/outputs/all", verifyAuth, can([EPermissions.GET_ALL_ACCOUNTS]), is([ERoles.ADMIN, ERoles.CREATOR]), cashOutflowController.readAll)

export default cashOutflowRoute