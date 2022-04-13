import "reflect-metadata"
import { DataSource } from "typeorm"

console.log('process.env.DATABASE_URL :>> ', process.env.DATABASE_URL);
export const AppDataSource = new DataSource({
    type: "postgres",
    url: process.env.DATABASE_URL,
    logging: true,
    cache: true,
    synchronize: true,
    entities: ["dist/entity/*.js"],
    migrations: ["dist/migration/*.js"],
    subscribers: [],
})