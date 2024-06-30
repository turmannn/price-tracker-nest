import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) {}

    async signIn(email: string, pass: string): Promise<{ access_token: string }> {
        const user = await this.usersService.findOne(email);
        if (user?.password !== pass) {
            throw new UnauthorizedException();
        }
        // const { password, ...result } = user;
        // return result;

        // TODO: Generate a JWT and return it here
        // instead of the user object
        const payload = { sub: user.userId, username: user.username };
        return {
            access_token: await this.jwtService.signAsync(payload)
        };
    }
}