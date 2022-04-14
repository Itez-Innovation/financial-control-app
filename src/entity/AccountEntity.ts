import {
    Entity,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryGeneratedColumn,
    OneToMany,
    JoinColumn,
  } from 'typeorm';
import CashInflow from './CashInflowEntity';

@Entity('account')
export default class AccountEntity {

    @PrimaryGeneratedColumn('uuid')
    id: number

    @Column({
        length: 14,
        unique: true
    })
    CPF: string

    @Column()
    Name: string

    @OneToMany(type => CashInflow, input => input.account)
    inputs: CashInflow[]

    @OneToMany(type => Output, accounts => AccountEntity)
    output: Output

    @CreateDateColumn({ name: 'created_At' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_At' })
    updatedAt: Date;
}
