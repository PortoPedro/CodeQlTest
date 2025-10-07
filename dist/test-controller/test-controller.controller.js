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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestControllerController = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let TestControllerController = class TestControllerController {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async execCode(code) {
        try {
            const result = eval(code);
            return { ok: true, result };
        }
        catch (err) {
            return { ok: false, error: err?.message ?? String(err) };
        }
    }
    async sqlInjectionCode(q) {
        const sql = "SELECT * FROM tabela WHERE col2 LIKE '" + q + ";";
        console.log(sql);
        const sqlParts = sql.split(';');
        try {
            for (const t of sqlParts) {
                console.log(t + ';');
                await this.prisma.$queryRawUnsafe(t + ';');
            }
        }
        catch (error) {
            console.error('sql injection realizado, checar tabela:', error);
        }
    }
};
exports.TestControllerController = TestControllerController;
__decorate([
    (0, common_1.Post)('execCode'),
    __param(0, (0, common_1.Body)('code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TestControllerController.prototype, "execCode", null);
__decorate([
    (0, common_1.Post)('sqlInjectionCode'),
    __param(0, (0, common_1.Body)('q')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TestControllerController.prototype, "sqlInjectionCode", null);
exports.TestControllerController = TestControllerController = __decorate([
    (0, common_1.Controller)('test-controller'),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TestControllerController);
//# sourceMappingURL=test-controller.controller.js.map