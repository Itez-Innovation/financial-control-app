import { createConnection } from "typeorm";
import app from "./app"
import { Express } from "express"

createConnection({ 
    "type": "postgres", 
    "host": "localhost", 
    "port": 5433, 
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

// database on docker
// docker run --name finance -e POSTGRES_PASSWORD=finance -e POSTGRES_USER=finance -p 5433:5432 -d postgres

