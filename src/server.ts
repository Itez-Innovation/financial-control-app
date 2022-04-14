import * as dotenv from 'dotenv';
import app from './app';
import 'reflect-metadata';
import './migration';
import { createConnection } from 'typeorm';

createConnection().then(async connection => {
  app.listen(process.env.PORT || 3000, () => {
    console.log('🏃 Running Server');
  })

}).catch(error => console.log(error))

dotenv.config();

