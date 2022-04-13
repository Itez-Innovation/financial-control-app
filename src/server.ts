import * as dotenv from 'dotenv';
import app from './app';
import 'reflect-metadata';
import './migration';

dotenv.config();

app.listen(process.env.PORT || 3000, () => {
  console.log('🏃 Running Server');
});