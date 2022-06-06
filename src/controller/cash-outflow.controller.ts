import { Body, Controller, Delete, Param, Patch, Post } from '@nestjs/common';
import { CashOutflowService } from '../service/cash-outflow.service';

@Controller('cash-outflow')
export class CashOutflowController {
  constructor(private readonly cashOutflowService: CashOutflowService) {}

  @Post('create')
  async create(@Body() createData: { Area; Titulo; Valor; account_id }) {
    const { Area, Titulo, Valor, account_id } = createData;

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
      const response = await service.readAll();

      return res.status(201).json(response);
    } catch (error) {
      res.status(500).json({ code: 500, message: 'internal server error' });
    }
  }
}
