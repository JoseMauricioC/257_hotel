import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipoHabitacionesService } from './tipo_habitaciones.service';
import { CreateTipoHabitacioneDto } from './dto/create-tipo_habitacione.dto';
import { UpdateTipoHabitacioneDto } from './dto/update-tipo_habitacione.dto';

@Controller('tipo-habitaciones')
export class TipoHabitacionesController {
  constructor(private readonly tipoHabitacionesService: TipoHabitacionesService) {}

  @Post()
  create(@Body() createTipoHabitacioneDto: CreateTipoHabitacioneDto) {
    return this.tipoHabitacionesService.create(createTipoHabitacioneDto);
  }

  @Get()
  findAll() {
    return this.tipoHabitacionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipoHabitacionesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTipoHabitacioneDto: UpdateTipoHabitacioneDto) {
    return this.tipoHabitacionesService.update(+id, updateTipoHabitacioneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipoHabitacionesService.remove(+id);
  }
}
