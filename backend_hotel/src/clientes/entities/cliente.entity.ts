import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('clientes')
export class Cliente {
    @PrimaryGeneratedColumn('identity')
    id: number;

    @Column('varchar', { length: 50 })
    nombre: string;

    @Column('varchar', { length: 50 })
    apellido: string;

    @Column('varchar', { length: 50 })
    direccion: string;

    @Column('varchar', { length: 50 })
    telefono: string;
  
    @Column('varchar', { length: 50 })
    correo: string;
}
