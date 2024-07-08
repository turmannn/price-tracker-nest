//TODO: delete the controller?

import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { skipAuth } from './auth/public.decorator';
import {PassportLocalAuthGuard} from "./auth-passport/local-auth.guard";
import { AuthPassportLocalService } from './auth-passport/auth-passport.service';
import { JwtAuthGuard } from './auth-passport/jwt-auth.guard';
import {KEY_SKIP_PASSPORT_LOCAL_AUTH, skipPassportLocalAuth} from "./auth-passport/public-route.decorator";

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthPassportLocalService,
  ) {}

  @skipAuth()
  @skipPassportLocalAuth()
  @Get()
  getHello(): string {
    console.log('debug get hello');
    return this.appService.getHello();
  }

  @skipAuth()
  @skipPassportLocalAuth()
  @UseGuards(PassportLocalAuthGuard)
  @Post('auth-passport-local/login')
  async login(@Request() req) {
    // return req.user;
    return this.authService.login(req.user);
  }

  // @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
