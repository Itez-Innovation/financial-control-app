import {
    Entity,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryGeneratedColumn,
    OneToMany,
    ManyToOne,
} from 'typeorm';
import { Output } from '../model/cashOutflow';
import Account from './AccountEntity';

@Entity('cashOutflow')
export default class CashOutflow {

    @PrimaryGeneratedColumn('uuid')
    id: number

    @Column({
        unique: false,
        nullable: false
    })
    Area: string

    @Column({
        length: 150,
    })
    Titulo: string;

    @Column()
    Valor: number

    @ManyToOne(type => Account, outputs => Output)
    account: Account

    @CreateDateColumn({ name: 'created_At' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_At' })
    updatedAt: Date;
}