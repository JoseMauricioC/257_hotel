import { Injectable } from '@nestjs/common';
import { CreateTipoHabitacioneDto } from './dto/create-tipo_habitacione.dto';
import { UpdateTipoHabitacioneDto } from './dto/update-tipo_habitacione.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TipoHabitacione } from './entities/tipo_habitacione.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TipoHabitacionesService {
  constructor(
    @InjectRepository(TipoHabitacione)
    private tipo_habitacionesRepository: Repository<TipoHabitacione>,
  ) {}
  create(createTipoHabitacioneDto: CreateTipoHabitacioneDto) {
    return 'This action adds a new tipoHabitacione';
  }

  findAll() {
    return `This action returns all tipoHabitaciones`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tipoHabitacione`;
  }

  update(id: number, updateTipoHabitacioneDto: UpdateTipoHabitacioneDto) {
    return `This action updates a #${id} tipoHabitacione`;
  }

  remove(id: number) {
    return `This action removes a #${id} tipoHabitacione`;
  }
}
