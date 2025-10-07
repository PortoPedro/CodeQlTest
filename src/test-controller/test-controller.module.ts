import { Module } from '@nestjs/common';
import { TestControllerController } from './test-controller.controller';
import { TestControllerService } from './test-controller.service';

@Module({
  controllers: [TestControllerController],
  providers: [TestControllerService]
})
export class TestControllerModule {}
