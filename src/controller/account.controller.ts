import { Body, Controller, Delete, Param, Patch, Post } from '@nestjs/common';
import { AccountService } from '../service/account.service';
import { account as AccountModel } from '@prisma/client';
import { hash } from 'bcryptjs';

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Post('create')
  async create(
    @Body() createData: { CPF: string; Name: string; password: string },
  ): Promise<AccountModel> {
    const { CPF, Name, password } = createData;

    const passHash = await hash(password, 8);

    return this.accountService.create({
      CPF,
      Name,
      password: passHash,
    });
  }

  @Delete('delete/:id')
  async delete(@Param('id') id: string) {
    return this.accountService.delete({ id: id });
  }

  // async deleteAdmin(request: Request, res: Response, next: NextFunction) {
  //   try {
  //     const { id } = request.body;

  //     await service.delete(id);

  //     return res.status(202).json();
  //   } catch (error) {
  //     next(error);
  //   }
  // }

  @Patch('update/:id')
  async update(
    @Param('id') id: string,
    @Body() updateData: { CPF?: string; Name?: string; password?: string },
  ) {
    const { CPF, Name, password } = updateData;

    const passHash = await hash(password, 8);

    return this.accountService.update({
      id,
      CPF,
      Name,
      password: passHash,
    });
  }

  // async updateAdmin(request: Request, res: Response, next: NextFunction) {
  //   try {
  //     const { id, CPF, Name, password } = request.body;

  //     const passHash = await hash(password, 8);

  //     const response = await service.update(CPF, Name, passHash, id);

  //     return res.status(200).json(response);
  //   } catch (error) {
  //     next(error);
  //   }
  // }

  // async read(request: IRequest, res: Response, next: NextFunction) {
  //   try {
  //     const id = request.userId;

  //     const response = await service.read(id);

  //     return res.status(200).json(response);
  //   } catch (error) {
  //     next(error);
  //   }
  // }

  // async readAdmin(request: Request, res: Response, next: NextFunction) {
  //   try {
  //     const { id } = request.body;

  //     const response = await service.read(id);

  //     return res.status(200).json(response);
  //   } catch (error) {
  //     next(error);
  //   }
  // }

  // async readAll(request: Request, res: Response, next: NextFunction) {
  //   try {
  //     const response = await service.readAll();

  //     return res.status(200).json(response);
  //   } catch (error) {
  //     next(error);
  //   }
  // }

  // async getStatsAdmin(request: Request, res: Response, next: NextFunction) {
  //   try {
  //     const { id } = request.body;

  //     const response = await service.getStats(id);

  //     return res.status(200).json(response);
  //   } catch (error) {
  //     next(error);
  //   }
  // }

  // async getStats(request: IRequest, res: Response, next: NextFunction) {
  //   try {
  //     const id = request.userId;

  //     const response = await service.getStats(id);

  //     return res.status(200).json(response);
  //   } catch (error) {
  //     next(error);
  //   }
  // }

  // async login(request: Request, res: Response, next: NextFunction) {
  //   try {
  //     const { CPF, password } = request.body;

  //     const token = await service.login(CPF, password);

  //     return res.status(200).json(token);
  //   } catch (error) {
  //     next(error);
  //   }
  // }

  // async refresh(request: Request, res: Response, next: NextFunction) {
  //   try {
  //     const refreshToken = request.params;

  //     const response = await service.refresh(refreshToken.id);

  //     return res.status(200).json(response);
  //   } catch (error) {
  //     next(error);
  //   }
  // }

  // async createAcl(request: IRequest, res: Response, next: NextFunction) {
  //   try {
  //     const { permissions, roles } = request.body;

  //     const userId = request.userId;

  //     const response = await service.createACL({ userId, permissions, roles });

  //     return res.status(201).json(response);
  //   } catch (error) {
  //     next(error);
  //   }
  // }
}
