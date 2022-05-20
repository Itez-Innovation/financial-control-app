import { verifyAuth } from '../middleware/verifyAuth';
import { can, is } from "../middleware/permissions";
import { ERoles } from "../enum/ERoles";
import { EPermissions } from "../enum/EPermissions";
import { Router } from 'express';
import cashInflowController from "../controller/cashInflowController"

const cashInflowRoute = Router()

cashInflowRoute.post("/inputs", verifyAuth, cashInflowController.create)

cashInflowRoute.get("/inputs", verifyAuth, cashInflowController.read)

cashInflowRoute.delete("/inputs", verifyAuth, cashInflowController.delete)

cashInflowRoute.put("/inputs", verifyAuth, cashInflowController.update)

cashInflowRoute.get("/inputs/all", verifyAuth, can([EPermissions.GET_ALL_ACCOUNTS]), is([ERoles.ADMIN, ERoles.CREATOR]), cashInflowController.readAll)

export default cashInflowRoute