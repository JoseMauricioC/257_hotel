import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('roles')
export class Role {
    @PrimaryGeneratedColumn('identity')
    id: number;

    @Column('varchar', { length: 50 })
    nombre_rol: string;
}
