import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('tipo_habitaciones')
export class TipoHabitacione {
    @PrimaryGeneratedColumn('identity')
    id: number;

    @Column('varchar', { length: 50 })
    tipo: string;

    //@Column({ type: 'decimal', precision: 10, scale: 2 })
    @Column('decimal', {precision: 10, scale: 2 })
    precio: number;
}
