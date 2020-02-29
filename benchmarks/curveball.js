"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@curveball/core");
const router_1 = __importDefault(require("@curveball/router"));
const controller_1 = require("@curveball/controller");
const bodyparser_1 = __importDefault(require("@curveball/bodyparser"));
class BenchmarksController extends controller_1.Controller {
    get(ctx) {
        ctx.status = 200;
        ctx.response.body = { hello: 'benchmarks' };
    }
}
const app = new core_1.Application();
app.use(bodyparser_1.default());
app.use(router_1.default('/benchmarks', new BenchmarksController()));
app.listen(3000);
