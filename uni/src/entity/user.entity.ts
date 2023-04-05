import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm'
import { OrderEntity } from './order.entity'

@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn('uuid')
    id: number
 
    @Column()
    email: string
 
    @Column()
    password: string

}
