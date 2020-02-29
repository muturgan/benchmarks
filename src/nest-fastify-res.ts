import { NestFactory } from '@nestjs/core';
import { Module, Controller, Get, Res } from '@nestjs/common';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { FastifyReply } from 'fastify';
import { ServerResponse } from 'http';


@Controller('benchmarks')
export class BenchmarksController
{
  @Get()
  public benchmarks(@Res() res: FastifyReply<ServerResponse>)
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
  const app = await NestFactory.create<NestFastifyApplication>(
    ApplicationModule,
    new FastifyAdapter(),
  );
  await app.listen(3000);
}
bootstrap();
