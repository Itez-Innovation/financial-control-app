import 'reflect-metadata';
import { createConnection } from "typeorm";

createConnection().then(async connection => {
    const app = await import("./app")
    app.default.listen(process.env.API_PORT || 8081);
    console.log("server on in port:" + (process.env.API_PORT || 8081));
}).catch(error => console.log(error))