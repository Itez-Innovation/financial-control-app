import {
    Entity,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryGeneratedColumn,
    OneToMany,
  } from 'typeorm';
import { Input } from '../model/cashInflow'
 import { Output } from '../model/cashOutflow'

@Entity('account')
export default class Account {

    @PrimaryGeneratedColumn('uuid')
    id: number

    @Column({
        length: 14,
        unique: true
    })
    CPF: string

    @Column()
    Name: string

    // @Column()
    // input: Input

    // @Column()
    // output: Output

    @CreateDateColumn({ name: 'created_At' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_At' })
    updatedAt: Date;
}
