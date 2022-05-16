import { Router } from 'express';
import accountRoute from './account.routes';
import adminRoute from './admin.routes';
import cashInflowRoute from './cashInflow.routes';
import cashOutflowRoute from './cashOutflow.routes';
import permissionRoute from './permission.routes';
import roleRoute from './role.routes';

const routes = Router();

routes.use('/Permissions', permissionRoute);
routes.use('/Roles', roleRoute);
routes.use('/Account', accountRoute);
routes.use('/CashInflow', cashInflowRoute);
routes.use('/CashOutflow', cashOutflowRoute);
routes.use('/Admin', adminRoute);

export default routes;