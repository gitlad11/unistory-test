import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm'

@Entity()
export class AbonementEntity {
    @PrimaryGeneratedColumn('uuid')
    id: number
 
    @Column()
    owner: string
 
    @Column()
    type: number

}
