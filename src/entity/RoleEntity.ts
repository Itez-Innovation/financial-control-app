import { Column, Entity, JoinTable, ManyToMany, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import PermissionEntity from './PermissionEntity'

@Entity("roles")
export default class RoleEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @CreateDateColumn({ name: 'created_At' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_At' })
    updatedAt: Date;

    @Column()
    name: string;

    @Column()
    description: string;

    @ManyToMany(() => PermissionEntity)
    @JoinTable({
        name: "permissions_roles",
        joinColumns: [{ name: "role_id" }],
        inverseJoinColumns: [{ name: "permission_id" }],
    })
    permissions: PermissionEntity[];
}