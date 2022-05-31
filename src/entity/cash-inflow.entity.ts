import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { AccountEntity } from './account.entity';

@Entity()
export class CashInflowEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  Titulo: string;

  @Column({
    type: 'float4',
  })
  Valor: number;

  @Column()
  account_id: string;

  @ManyToOne((type) => AccountEntity, (account) => account.input, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'account_id' })
  account: AccountEntity;

  @CreateDateColumn({ name: 'created_At' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_At' })
  updatedAt: Date;
}