"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const roles_guard_1 = require("./middleware/roles.guard");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalGuards(new roles_guard_1.RolesGuard());
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map