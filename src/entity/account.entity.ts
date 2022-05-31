import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  OneToMany,
  OneToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { RefreshTokenEntity } from './refreshToken.entity';
import { CashInflowEntity } from './cash-inflow.entity';
import { CashOutflowEntity } from './cash-outflow.entity';
import { PermissionEntity } from './permission.entity';
import { RoleEntity } from './role.entity';

@Entity()
export class AccountEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  password: string;

  @Column()
  Name: string;

  @Column({
    length: 14,
    unique: true,
  })
  CPF: string;

  @OneToMany((type) => CashInflowEntity, (input) => input.account)
  input: CashInflowEntity[];

  @OneToMany((type) => CashOutflowEntity, (output) => output.account)
  output: CashOutflowEntity[];

  @OneToOne((type) => RefreshTokenEntity, (refresh) => refresh.account)
  refresh: RefreshTokenEntity;

  @CreateDateColumn({ name: 'created_At' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_At' })
  updatedAt: Date;

  @ManyToMany(() => RoleEntity)
  @JoinTable({
    name: 'users_roles',
    joinColumns: [{ name: 'user_id' }],
    inverseJoinColumns: [{ name: 'role_id' }],
  })
  roles: RoleEntity[];

  @ManyToMany(() => PermissionEntity)
  @JoinTable({
    name: 'users_permissions',
    joinColumns: [{ name: 'user_id' }],
    inverseJoinColumns: [{ name: 'permission_id' }],
  })
  permissions: PermissionEntity[];
}
