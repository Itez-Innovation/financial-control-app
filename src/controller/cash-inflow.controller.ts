/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CashInflowService } from '../service/cash-inflow.service';

@Controller('cash-inflow')
export class CashInflowController {
  constructor(private readonly cashInflowService: CashInflowService) {}

  @Post('create/:id')
  async create(
    @Param('id') account_id: string,
    @Body() createData: { Titulo; Valor },
  ) {
    const { Titulo, Valor } = createData;

    return this.cashInflowService.create({
      Titulo,
      Valor,
      account_id,
    });
  }

  @Delete('delete/:id')
  async delete(@Param('id') id: string) {
    return this.cashInflowService.delete(id);
  }

  @Patch('update/:id')
  async update(@Param('id') id: string, @Body() updateData: { Titulo; Valor }) {
    const { Titulo, Valor } = updateData;
    
    return this.cashInflowService.update({
      Titulo,
      Valor,
      id,
    });
  }

  @Get('read/:id')
  async read(@Param('id') id: string) {
    return this.cashInflowService.read(id);
  }

  @Get('admin/readAll')
  async readAll() {
    return this.cashInflowService.readAll();
  }
}
