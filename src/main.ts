import { createConnection } from "typeorm";
import app from "./app"

createConnection({ 
    "type": "postgres", 
    "host": "localhost", 
    "port": 5432, 
    "username": "finance", 
    "password": "finance", 
    "database": "finance",
    "synchronize": true, 
    "logging": false, 
    entities: [__dirname + '/entity/*{.ts,.js}'] 
 }).then(
     async conn => {
        await app
})