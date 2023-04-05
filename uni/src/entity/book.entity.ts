import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class BookEntity {
    @PrimaryGeneratedColumn('uuid')
    id: number
 
    @Column({ nullable: true})
    name: string
 
    @Column()
    preview: string
}
