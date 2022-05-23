import express from "express";
import exceptionHandler from "./middleware/exceptionHandler";
import accountRoute from "./routes/account.routes";
import adminRoute from "./routes/admin.routes";
import cashInflowRoute from "./routes/cashInflow.routes";
import cashOutflowRoute from "./routes/cashOutflow.routes";
import permissionRoute from "./routes/permission.routes";
import roleRoute from "./routes/role.routes";

const app = express();
app.use(express.json());

app.use(permissionRoute)
app.use(roleRoute)
app.use(accountRoute)
app.use(cashInflowRoute)
app.use(cashOutflowRoute)
app.use(adminRoute)
app.use(exceptionHandler)

export default app