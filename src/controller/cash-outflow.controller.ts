import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CashOutflowService } from '../service/cash-outflow.service';

@Controller('cash-outflow')
export class CashOutflowController {
  constructor(private readonly cashOutflowService: CashOutflowService) {}

  @Post('create/:id')
  async create(
    @Param('id') account_id: string,
    @Body() createData: { Area; Titulo; Valor },
  ) {
    const { Area, Titulo, Valor } = createData;

    return this.cashOutflowService.create({ Area, Titulo, Valor, account_id });
  }

  @Delete('delete')
  async delete(@Body() id: string) {
    return this.cashOutflowService.delete(id);
  }

  @Patch('update/:id')
  async update(
    @Param('id') id: string,
    @Body() updateData: { Area?: string; Titulo?: string; Valor?: number },
  ) {
    const { Area, Titulo, Valor } = updateData;

    return this.cashOutflowService.update({
      Area,
      Titulo,
      Valor,
      id,
    });
  }

  @Get('read/:id')
  async read(@Param('id') id: string) {
    return this.cashOutflowService.read(id);
  }

  @Get('admin/readAll')
  async readAll() {
    return this.cashOutflowService.readAll();
  }
}
