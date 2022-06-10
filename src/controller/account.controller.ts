import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  SetMetadata,
} from '@nestjs/common';
import { AccountService } from '../service/account.service';
import { account as AccountModel } from '@prisma/client';
import { hash } from 'bcryptjs';
import { ERoles } from 'src/enum/roles.enum';
import { Roles } from 'src/middleware/roles.decorator';

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
  @Roles(ERoles.ADMIN)
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

  @Get('read/:id')
  async read(@Param('id') id: string) {
    return this.accountService.read({ id });
  }

  // async readAdmin(request: Request, res: Response, next: NextFunction) {
  //   try {
  //     const { id } = request.body;

  //     const response = await service.read(id);

  //     return res.status(200).json(response);
  //   } catch (error) {
  //     next(error);
  //   }
  // }

  @Get('readAll')
  async readAll() {
    return this.accountService.readAll();
  }

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

  @Post('login')
  async login(@Body() dataLogin: { CPF; password }) {
    const { CPF, password } = dataLogin;

    return this.accountService.login({ CPF, password });
  }

  @Post('refresh/:id')
  async refresh(@Param('id') id: string) {
    const refresh = await this.accountService.refresh(id);

    return JSON.stringify(refresh);
  }

  @Post('admin/acl')
  async createAcl(
    @Param('id') userId: string,
    @Body() aclData: { roles: string[]; permissions: string[] },
  ) {
    const { roles, permissions } = aclData;

    return this.accountService.createACL({
      userId,
      roles,
      permissions,
    });
  }
}
