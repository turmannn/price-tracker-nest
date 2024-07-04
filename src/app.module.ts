import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {PricesModule} from "./prices/prices.module";
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AuthPassportModule } from './auth-passport/auth-passport.module';

@Module({
  imports: [PricesModule, AuthModule, UsersModule, AuthPassportModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
