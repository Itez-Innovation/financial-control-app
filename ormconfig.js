console.log('process.env.DATABASE_URL :>> ', process.env.DATABASE_URL);
module.exports = {
  "type": "postgres",
    host: "localhost",
    port: 5433,
    username: "finance",
    password: "finance",
    database: "finance",
  "name":"default",
  "logging": true,
  "cache": true,
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