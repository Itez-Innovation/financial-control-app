import {
    Entity,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryGeneratedColumn,
    OneToMany,
    OneToOne
  } from 'typeorm';
import RefreshTokenEntity from './RefreshTokenEntity';
import CashInflowEntity from './CashInflowEntity';
import CashOutflowEntity from './CashOutflowEntity';

@Entity('account')
export default class AccountEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    password: string

    @Column({
        length: 14,
        unique: true
    })
    CPF: string

    @Column()
    Name: string

    @OneToMany(type => CashInflowEntity, input => input.account)
    inputs: CashInflowEntity[]

    @OneToMany(type => CashOutflowEntity, output => output.account)
    outputs: CashOutflowEntity[]

    @OneToOne(type => RefreshTokenEntity, refresh => refresh.account)
    refresh: RefreshTokenEntity

    @CreateDateColumn({ name: 'created_At' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_At' })
    updatedAt: Date;
}
