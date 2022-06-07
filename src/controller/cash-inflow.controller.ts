/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Param, Patch, Post } from '@nestjs/common';
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

  async read(request: Request, res: Response, next: NextFunction) {
    try {
      const { id } = request.body;

      const response = await service.read(id);

      return res.status(201).json(response);
    } catch (error) {
      res.status(500).json({ code: 500, message: 'internal server error' });
    }
  }

  async readAll(request: Request, res: Response, next: NextFunction) {
    try {
      return res.status(201).json(await service.readAll());
    } catch (error) {
      res.status(500).json({ code: 500, message: 'internal server error' });
    }
  }
}
