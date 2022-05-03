import { Router } from 'express';
import accountRoute from './account.routes';
import cashInflowRoute from './cashInflow.routes';
import cashOutflowRoute from './cashOutflow.routes';

const routes = Router();

routes.use('/Account', accountRoute);
routes.use('/CashInflow', cashInflowRoute);
routes.use('/CashOutflow', cashOutflowRoute);

export default routes;