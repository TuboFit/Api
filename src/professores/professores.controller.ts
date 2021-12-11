import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProfessoresService } from './professores.service';
import { CreateProfessorDto } from './dto/create-professore.dto';
import { UpdateProfessorDto } from './dto/update-professore.dto';

@Controller('professores')
export class ProfessoresController {
  constructor(private readonly professoresService: ProfessoresService) { }

  @Post()
  create(@Body() createProfessoreDto: CreateProfessorDto) {
    return this.professoresService.create(createProfessoreDto);
  }

  @Get()
  findAll() {
    return this.professoresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.professoresService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProfessorDto: UpdateProfessorDto) {
    return this.professoresService.update(id, updateProfessorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.professoresService.remove(id);
  }
}
