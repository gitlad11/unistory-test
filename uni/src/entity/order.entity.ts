import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class OrderEntity {
    @PrimaryGeneratedColumn('uuid')
    id: number;
    
    @Column()
    owner:string;

   @Column()
    name: string;
    
    @Column()
    preview: string;
}
