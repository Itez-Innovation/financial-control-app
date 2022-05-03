import { Router } from 'express';
import cashInflowController from "../controller/cashInflowController"

const cashInflowRoute = Router()

cashInflowRoute.post("/inputs", cashInflowController.create)

//cashInflowRoute.post("/cashInflow", new CreateCashInflowController().handle);



export default cashInflowRoute