import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseService } from './database/database.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { CashInflowModule } from './cash-inflow/cash-inflow.module';

@Module({
  imports: [TypeOrmModule.forRoot(), CashInflowModule],
  controllers: [AppController],
  providers: [AppService, DatabaseService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
