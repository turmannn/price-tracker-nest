import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { AuthGuard } from './auth.guard';

// @Module({
//   imports: [UsersModule],
//   controllers: [AuthController],
//   providers: [AuthService]
// })
@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret, //TODO: use env secret value instead in prod env
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [
    AuthService,
    // { provide: 'APP_GUARD', useClass: AuthGuard }, // bind AuthGuard to all endpoints
  ],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
