import { NestFactory } from '@nestjs/core';
import { Module, Controller, Get } from '@nestjs/common';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';

@Controller('benchmarks')
export class BenchmarksController
{
  @Get()
  public benchmarks()
  {
    return { hello: 'benchmarks' };
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
