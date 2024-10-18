import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('empleados')
export class Empleado {
    @PrimaryGeneratedColumn('identity')
    id: number;

    @Column('varchar', { length: 50 })
    nombre: string;

    @Column('varchar', { length: 50 })
    apellido: string;

    @Column('varchar', { length: 50 })
    cargo: string;

    @Column('date')
    fechaContratacion: Date;
  
}
