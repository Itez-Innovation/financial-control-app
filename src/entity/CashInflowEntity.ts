import {
    Entity,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryGeneratedColumn,
    OneToMany,
    ManyToOne,
} from 'typeorm';
import Account from './AccountEntity';

@Entity('cashInflow')
export default class CashInflowEntity {

    @PrimaryGeneratedColumn('uuid')
    id: number

    @Column()
    Titulo: string;

    @Column()
    Valor: number

    @ManyToOne(type => Account, account => account.inputs, {onDelete: "CASCADE"})
    account: Account

    @CreateDateColumn({ name: 'created_At' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_At' })
    updatedAt: Date;
}