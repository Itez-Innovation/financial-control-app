import {
    Entity,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn
} from 'typeorm';
import Account from './AccountEntity';

@Entity('cashOutflow')
export default class CashOutflowEntity {

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
        nullable: false,
        type: 'float4'
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