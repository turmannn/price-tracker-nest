import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {PricesModule} from "./prices/prices.module";
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PricesModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
