import {
    Entity,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryGeneratedColumn,
    OneToMany,
} from 'typeorm';

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

    @CreateDateColumn({ name: 'created_At' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_At' })
    updatedAt: Date;
}