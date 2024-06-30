import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import {LoginUserDto} from "../users/dto/login-user.dto";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    // TODO: Ideally, instead of using the Record<string, any> type, we should use a DTO class to define the shape of the request body. See the validation chapter for more information.
    @HttpCode(HttpStatus.OK)
    @Post('login')
    // signIn(@Body() signInDto: Record<string, any>) {
    //     return this.authService.signIn(signInDto.username, signInDto.password);
    // }
    signIn(@Body() signInDto: LoginUserDto) {
        return this.authService.signIn(signInDto.email, signInDto.password);
    }
}