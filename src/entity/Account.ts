import {
    Entity,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryGeneratedColumn,
    OneToMany,
    JoinColumn,
  } from 'typeorm';
import { Input } from '../model/cashInflow'
 import { Output } from '../model/cashOutflow'
import CashOutflow from './CashOutflow';

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

    @OneToMany(type => Input, accounts => Account)
    input: Input

    @OneToMany(type => Output, accounts => Account)
    output: Output

    @CreateDateColumn({ name: 'created_At' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_At' })
    updatedAt: Date;
}
