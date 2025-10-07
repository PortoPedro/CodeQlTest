import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { TestControllerModule } from './test-controller/test-controller.module';

@Module({
  imports: [PrismaModule, TestControllerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
