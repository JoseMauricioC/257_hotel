import { Module } from '@nestjs/common';
import { TipoHabitacionesService } from './tipo_habitaciones.service';
import { TipoHabitacionesController } from './tipo_habitaciones.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoHabitacione } from './entities/tipo_habitacione.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TipoHabitacione])],
  controllers: [TipoHabitacionesController],
  providers: [TipoHabitacionesService],
})
export class TipoHabitacionesModule {}
