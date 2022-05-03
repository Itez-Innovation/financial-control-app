import { Router } from 'express';
import cashInflowController from "../controller/cashInflowController"

const cashInflowRoute = Router()

cashInflowRoute.post("/inputs", cashInflowController.create)

cashInflowRoute.get("/inputs", cashInflowController.read)

cashInflowRoute.delete("/inputs", cashInflowController.delete)

cashInflowRoute.put("/inputs", cashInflowController.update)

cashInflowRoute.get("/inputs/all", cashInflowController.readAll)

export default cashInflowRoute