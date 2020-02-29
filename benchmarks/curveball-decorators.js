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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@curveball/core");
const router_1 = __importDefault(require("@curveball/router"));
const controller_1 = require("@curveball/controller");
const bodyparser_1 = __importDefault(require("@curveball/bodyparser"));
class BenchmarksController extends controller_1.Controller {
    decoratedGet(ctx) {
        ctx.status = 200;
        ctx.response.body = { hello: 'benchmarks' };
    }
}
__decorate([
    controller_1.method('GET'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], BenchmarksController.prototype, "decoratedGet", null);
const app = new core_1.Application();
app.use(bodyparser_1.default());
app.use(router_1.default('/benchmarks', new BenchmarksController()));
app.listen(3000);
