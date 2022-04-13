console.log('process.env.DATABASE_URL :>> ', process.env.DATABASE_URL);
module.exports = {

  "type": "postgres",
  "url" : process.env.DATABASE_URL,
  "logging": true,
  "cache": true,
  "synchronize": true,
  //"migrationsRun": false,
  "entities": [
    "src/entity/**/*.ts"
 ],
 "migrations": [
  "src/database/migration/**/*.ts"
],
 "cli":{
  "migrationsDir": [
    "src/database/migration/"
  ],
  "entitiesDir": "src/entity/"
  }
}