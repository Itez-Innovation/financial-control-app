import { Router } from 'express';
import accountRoute from './account.routes';
import cashInflowRoute from './cashInflow.routes';

const routes = Router();

routes.use('/Account', accountRoute);
routes.use('/CashInflow', cashInflowRoute);
routes.use('/CashOutflow', cashInflowRoute);

export default routes;