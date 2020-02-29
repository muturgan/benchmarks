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
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
let BenchmarksController = class BenchmarksController {
    benchmarks() {
        return { hello: 'benchmarks' };
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BenchmarksController.prototype, "benchmarks", null);
BenchmarksController = __decorate([
    common_1.Controller('benchmarks')
], BenchmarksController);
exports.BenchmarksController = BenchmarksController;
let BenchmarksModule = class BenchmarksModule {
};
BenchmarksModule = __decorate([
    common_1.Module({
        controllers: [BenchmarksController],
    })
], BenchmarksModule);
exports.BenchmarksModule = BenchmarksModule;
let ApplicationModule = class ApplicationModule {
};
ApplicationModule = __decorate([
    common_1.Module({
        imports: [
            BenchmarksModule,
        ],
    })
], ApplicationModule);
async function bootstrap() {
    const app = await core_1.NestFactory.create(ApplicationModule, new platform_express_1.ExpressAdapter());
    await app.listen(3000);
}
bootstrap();
