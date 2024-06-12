import { Module } from '@nestjs/common';
import { ProtectedDataService } from './protected-data.service';
import { ProtectedDataController } from './protected-data.controller';

@Module({
  controllers: [ProtectedDataController],
  providers: [ProtectedDataService],
})
export class ProtectedDataModule {}
