
import { Check, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import Account from './AccountEntity';

@Entity('refreshToken')
export default class RefreshTokenEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column()
    refToken: string;

    @Column()
    account_id: string;

    @OneToOne(type => Account, account => account.refresh, {onDelete: "CASCADE"})
    @JoinColumn({name: "account_id"})
    account: Account

}