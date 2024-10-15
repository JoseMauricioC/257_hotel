import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoHabitacioneDto } from './create-tipo_habitacione.dto';

export class UpdateTipoHabitacioneDto extends PartialType(CreateTipoHabitacioneDto) {}
