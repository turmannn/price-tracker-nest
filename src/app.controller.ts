//TODO: delete the controller?

import {Controller, Get, Post, Request, UseGuards} from '@nestjs/common';
import { AppService } from './app.service';
import {NoAuth} from "./auth/public.decorator";
import {PassportLocalAuthGuard} from "./auth-passport/local-auth.guard";
import {AuthPassportLocalService} from "./auth-passport/auth-passport.service";
import {JwtAuthGuard} from "./auth-passport/jwt-auth.guard";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private authService: AuthPassportLocalService) {}

  @NoAuth()
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @NoAuth()
  @UseGuards(PassportLocalAuthGuard)
  @Post('auth-passport-local/login')
  async login(@Request() req) {
    // return req.user;
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
