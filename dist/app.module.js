"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const cash_inflow_module_1 = require("./module/cash-inflow.module");
const cash_outflow_module_1 = require("./module/cash-outflow.module");
const permission_module_1 = require("./module/permission.module");
const role_module_1 = require("./module/role.module");
const refresh_token_module_1 = require("./module/refresh-token.module");
const account_module_1 = require("./module/account.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            account_module_1.AccountModule,
            cash_inflow_module_1.CashInflowModule,
            cash_outflow_module_1.CashOutflowModule,
            permission_module_1.PermissionModule,
            role_module_1.RoleModule,
            refresh_token_module_1.RefreshTokenModule,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map