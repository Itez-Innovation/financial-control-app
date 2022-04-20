import {
    Entity,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryGeneratedColumn,
    OneToMany,
    ManyToOne,
    JoinColumn
} from 'typeorm';
import Account from './AccountEntity';

@Entity('cashOutflow')
export default class CashOutflow {

    @PrimaryGeneratedColumn('uuid')
    id: string

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

    @Column()
    account_id: string;

    @ManyToOne(type => Account, account => account.outputs, {onDelete: "CASCADE"})
    @JoinColumn({name: "account_id"})
    account: Account

    @CreateDateColumn({ name: 'created_At' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_At' })
    updatedAt: Date;
}