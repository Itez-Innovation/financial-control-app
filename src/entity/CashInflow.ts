import {
    Entity,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryGeneratedColumn,
    OneToMany,
} from 'typeorm';

@Entity('cashInflow')
export default class CashInflow {

    @PrimaryGeneratedColumn('uuid')
    id: number

    @Column({
        length: 150,
    })
    Titulo: string;

    @Column()
    Valor: number

    @CreateDateColumn({ name: 'created_At' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_At' })
    updatedAt: Date;
}