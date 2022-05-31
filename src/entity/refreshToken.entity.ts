import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AccountEntity } from './account.entity';

@Entity('refreshToken')
export class RefreshTokenEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  refToken: string;

  @Column()
  account_id: string;

  @OneToOne((type) => AccountEntity, (account) => account.refresh, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'account_id' })
  account: AccountEntity;
}
