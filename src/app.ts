import * as express from "express";
import accountRoute from "./routes/account.routes";
import cashInflowRoute from "./routes/cashInflow.routes";
import cashOutflowRoute from "./routes/cashOutflow.routes";

const app = express();
app.use(express.json());

app.use(accountRoute)
app.use(cashInflowRoute)
app.use(cashOutflowRoute)

export default app