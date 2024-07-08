import { Module } from '@nestjs/common';
import {UsersModule} from "../users/users.module";
import {PassportModule} from "@nestjs/passport";
import {LocalStrategy} from "./local.strategy";
import {AuthPassportLocalService} from "./auth-passport.service";
import {JwtModule} from "@nestjs/jwt";
import {jwtConstants} from "./constants";
import {JwtStrategy} from "./jwt.strategy";
import {JwtAuthGuard} from "./jwt-auth.guard";

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [
    AuthPassportLocalService,
    LocalStrategy,
    JwtStrategy,
    { provide: 'APP_GUARD', useClass: JwtAuthGuard }, // bind AuthGuard to all endpoints}
  ],
  exports: [AuthPassportLocalService],
})
export class AuthPassportModule {}
