import {
    Entity,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryGeneratedColumn,
    OneToMany
  } from 'typeorm';
import CashInflow from './CashInflowEntity';
import CashOutflow from './CashOutflowEntity';

@Entity('account')
export default class AccountEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({
        length: 14,
        unique: true
    })
    CPF: string

    @Column()
    Name: string

    @OneToMany(type => CashInflow, input => input.account)
    inputs: CashInflow[]

    @OneToMany(type => CashOutflow, output => output.account)
    outputs: CashOutflow[]

    @CreateDateColumn({ name: 'created_At' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_At' })
    updatedAt: Date;
}
