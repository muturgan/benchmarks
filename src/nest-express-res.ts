import { NestFactory } from '@nestjs/core';
import { Module, Controller, Get, Res } from '@nestjs/common';
import { ExpressAdapter, NestExpressApplication } from '@nestjs/platform-express';
import { Response } from 'express';

@Controller('benchmarks')
export class BenchmarksController
{
  @Get()
  public benchmarks(@Res() res: Response)
  {
    res.send({ hello: 'benchmarks' });
  }
}

@Module({
  controllers: [BenchmarksController],
})
export class BenchmarksModule {}

@Module({
  imports: [
    BenchmarksModule,
  ],
})
class ApplicationModule {}


async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    ApplicationModule,
    new ExpressAdapter(),
  );
  await app.listen(3000);
}
bootstrap();
