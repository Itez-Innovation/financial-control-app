import { Router } from 'express';
import cashOutflowController from '../controller/cashOutflowController';


const cashOutflowRoute = Router()

cashOutflowRoute.post("/outputs", cashOutflowController.create)

cashOutflowRoute.get("/outputs", cashOutflowController.read)

cashOutflowRoute.delete("/outputs", cashOutflowController.delete)

cashOutflowRoute.put("/outputs", cashOutflowController.update)

cashOutflowRoute.get("/outputs/all", cashOutflowController.readAll)

export default cashOutflowRoute