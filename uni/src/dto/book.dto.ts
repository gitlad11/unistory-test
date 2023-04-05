import { MinLength } from 'class-validator';

export class BookDTO {
    @MinLength(4)
    name: string;

    @MinLength(4)
    link: string;
}