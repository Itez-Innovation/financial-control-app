import {
    Entity,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryGeneratedColumn,
    OneToMany,
    ManyToOne,
} from 'typeorm';
import { account } from '../model/Account';
import { Output } from '../model/cashOutflow';
import Account from './AccountEntity';

@Entity('cashOutflow')
export default class CashOutflow {

    @PrimaryGeneratedColumn('uuid')
    id: number

    @Column({
        unique: false,
        nullable: false,
    })
    Area: string

    @Column()
    Titulo: string;

    @Column({
        nullable: false
    })
    Valor: number

    @ManyToOne(type => Account, account => account.outputs, {onDelete: "CASCADE"})
    account: Account

    @CreateDateColumn({ name: 'created_At' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_At' })
    updatedAt: Date;
}