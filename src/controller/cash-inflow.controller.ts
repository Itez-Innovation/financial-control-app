import { Body, Controller, Param, Post } from '@nestjs/common';
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

  async delete(request: Request, res: Response, next: NextFunction) {
    try {
      const { id } = request.body;

      await service.delete(id);

      return res.status(204).json();
    } catch (error) {
      res.status(500).json({ code: 500, message: 'internal server error' });
    }
  }

  async update(request: Request, res: Response, next: NextFunction) {
    try {
      const { Titulo, Valor, id } = request.body;

      const response = await service.update({ Titulo, Valor }, id);

      return res.status(201).json(response);
    } catch (error) {
      res.status(500).json({ code: 500, message: 'internal server error' });
    }
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
