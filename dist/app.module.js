"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const cash_inflow_module_1 = require("./module/cash-inflow.module");
const cash_outflow_module_1 = require("./module/cash-outflow.module");
const permission_module_1 = require("./module/permission.module");
const role_module_1 = require("./module/role.module");
const refresh_token_module_1 = require("./module/refresh-token.module");
const account_entity_1 = require("./entity/account.entity");
const cash_inflow_entity_1 = require("./entity/cash-inflow.entity");
const cash_outflow_entity_1 = require("./entity/cash-outflow.entity");
const permission_entity_1 = require("./entity/permission.entity");
const refreshToken_entity_1 = require("./entity/refreshToken.entity");
const role_entity_1 = require("./entity/role.entity");
const account_service_1 = require("./service/account.service");
const cash_inflow_service_1 = require("./service/cash-inflow.service");
const cash_outflow_service_1 = require("./service/cash-outflow.service");
const permission_service_1 = require("./service/permission.service");
const role_service_1 = require("./service/role.service");
const account_controller_1 = require("./controller/account.controller");
const cash_inflow_controller_1 = require("./controller/cash-inflow.controller");
const cash_outflow_controller_1 = require("./controller/cash-outflow.controller");
const permission_controller_1 = require("./controller/permission.controller");
const role_controller_1 = require("./controller/role.controller");
const account_module_1 = require("./module/account.module");
const prisma_service_1 = require("./service/prisma.service");
let AppModule = class AppModule {
    constructor(connection) {
        this.connection = connection;
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'finance',
                password: 'finance',
                database: 'finance',
                entities: [
                    account_entity_1.Account,
                    cash_inflow_entity_1.CashInflow,
                    cash_outflow_entity_1.CashOutflow,
                    permission_entity_1.Permission,
                    refreshToken_entity_1.RefreshToken,
                    role_entity_1.Role,
                ],
                synchronize: false,
            }),
            account_module_1.AccountModule,
            cash_inflow_module_1.CashInflowModule,
            cash_outflow_module_1.CashOutflowModule,
            permission_module_1.PermissionModule,
            role_module_1.RoleModule,
            refresh_token_module_1.RefreshTokenModule,
        ],
        controllers: [
            account_controller_1.AccountController,
            cash_inflow_controller_1.CashInflowController,
            cash_outflow_controller_1.CashOutflowController,
            permission_controller_1.PermissionController,
            role_controller_1.RoleController,
        ],
        providers: [
            account_service_1.AccountService,
            cash_inflow_service_1.CashInflowService,
            cash_outflow_service_1.CashOutflowService,
            permission_service_1.PermissionService,
            role_service_1.RoleService,
            prisma_service_1.PrismaService,
        ],
    }),
    __metadata("design:paramtypes", [typeorm_2.Connection])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map