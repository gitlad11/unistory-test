import { MinLength } from 'class-validator';

export class AbonDTO {

    @MinLength(4)
    owner: string;

    type: number;
    
}