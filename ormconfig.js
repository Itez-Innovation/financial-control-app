console.log('process.env.DATABASE_URL :>> ', process.env.DATABASE_URL);
module.exports = process.env.ENVIRONMENT == "test"? {
  "type": "postgres",
    host: "localhost",
    port: 5432,
    username: "prod",
    password: "prod",
    database: "prod",
}: {
  "type": "postgres",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: "finance",
  "name":"default",
  "logging": false,
  "synchronize": true,
  "entities": ["src/entity/*.ts"],
  "migrations": ["src/database/migration/*.ts"],
 "cli":{
  "migrationsDir": [
    "src/database/migration"
  ],
  "entitiesDir": "src/entity"
  },
}