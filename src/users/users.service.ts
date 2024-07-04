import { Injectable } from '@nestjs/common';

// This should be a real class/interface representing a user entity
export interface User {
    userId: number;
    username: string;
    email: string;
    password: string;
};

@Injectable()
export class UsersService {
    private readonly users: User[] = [
        {
            userId: 1,
            username: 'john',
            email: 'john@gmail.com',
            password: 'changeme',
        },
        {
            userId: 2,
            username: 'maria',
            email: 'maria@gmail.com',
            password: 'guess',
        },
    ];

    async findOne(userIdentifier: string): Promise<User | undefined> {
        return this.users.find(user => [user.username, user.email].includes(userIdentifier));
    }
}