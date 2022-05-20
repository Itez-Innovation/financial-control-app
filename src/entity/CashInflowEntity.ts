import {
    Entity,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import Account from './AccountEntity';

@Entity('cashInflow')
export default class CashInflowEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    Titulo: string;

    @Column({
        type: 'float4'
    })
    Valor: number

    @Column()
    account_id: string;

    @ManyToOne(type => Account, account => account.input, {onDelete: "CASCADE"})
    @JoinColumn({name: "account_id"})
    account?: Account

    @CreateDateColumn({ name: 'created_At' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_At' })
    updatedAt: Date;
}