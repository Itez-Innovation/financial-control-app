"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountModule = void 0;
const common_1 = require("@nestjs/common");
const AccountRepository_1 = __importDefault(require("../repository/accountRepository/AccountRepository"));
const PermissionRepository_1 = __importDefault(require("../repository/permissionRepository/PermissionRepository"));
const RoleRepository_1 = __importDefault(require("../repository/roleRepository/RoleRepository"));
const TokenRepository_1 = __importDefault(require("../repository/tokenRepository/TokenRepository"));
const account_controller_1 = require("../controller/account.controller");
const account_service_1 = require("../service/account.service");
let AccountModule = class AccountModule {
};
AccountModule = __decorate([
    (0, common_1.Module)({
        controllers: [account_controller_1.AccountController],
        providers: [account_service_1.AccountService],
        imports: [
            AccountRepository_1.default,
            TokenRepository_1.default,
            PermissionRepository_1.default,
            RoleRepository_1.default,
        ],
    })
], AccountModule);
exports.AccountModule = AccountModule;
//# sourceMappingURL=account.module.js.map