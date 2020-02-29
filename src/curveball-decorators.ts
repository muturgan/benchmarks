import { Application, Context } from '@curveball/core';
import router from '@curveball/router';
import { Controller, method } from '@curveball/controller';
import bodyParser from '@curveball/bodyparser';

class BenchmarksController extends Controller
{
  @method('GET')
  public decoratedGet(ctx: Context)
  {
    ctx.status = 200;
    ctx.response.body = { hello: 'benchmarks' };
  }
}

const app = new Application();
app.use(bodyParser());

app.use(
  router('/benchmarks', new BenchmarksController()),
);

app.listen(3000);
