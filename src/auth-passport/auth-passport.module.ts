import { Module } from '@nestjs/common';
import {UsersModule} from "../users/users.module";
import {PassportModule} from "@nestjs/passport";
import {LocalStrategy} from "./local.strategy";
import {AuthPassportLocalService} from "./auth-passport.service";
import {JwtModule} from "@nestjs/jwt";
import {jwtConstants} from "./constants";
import {JwtStrategy} from "./jwt.strategy";

@Module({
  imports: [
      UsersModule,
      PassportModule,
      JwtModule.register({
        secret: jwtConstants.secret,
        signOptions: { expiresIn: '60s' },
      })
  ],
  providers: [AuthPassportLocalService, LocalStrategy, JwtStrategy],
  exports: [AuthPassportLocalService]
})
export class AuthPassportModule {}
