import {IsEmail, MinLength } from 'class-validator';

export class UserDTO {
    @IsEmail()
    email: string;

    @MinLength(4)
    password: string;

    abonement: any;
}