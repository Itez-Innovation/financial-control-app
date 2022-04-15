console.log('process.env.DATABASE_URL :>> ', process.env.DATABASE_URL);
module.exports = {

  "type": "postgres",
  "url" : process.env.DATABASE_URL,
  "logging": true,
  "cache": true,
  "synchronize": true,
  //"migrationsRun": false,
 "cli":{
  "migrationsDir": [
    "src/migration/"
  ],
  "migrations": ["dist/migration/*.js"],
  "entitiesDir": ["dist/entity/*.js"]
  },
}