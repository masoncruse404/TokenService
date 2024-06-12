import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProtectedDataModule } from './protectedData/protected-data.module';
import { UsersModule } from './users/users.module';
import { IamModule } from './iam/iam.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.config.module';


@Module({
  imports: [
  ConfigModule.forRoot({ isGlobal: true}),
  DatabaseModule,
  ProtectedDataModule,
  UsersModule, 
  IamModule,
  
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
