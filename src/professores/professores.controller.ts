import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { ProfessoresService } from './professores.service';
import { CreateProfessorDto } from './dto/create-professore.dto';
import { UpdateProfessorDto } from './dto/update-professore.dto';

@Controller('professores')
export class ProfessoresController {
  constructor(private readonly professoresService: ProfessoresService) { }

  @Post()
  async create(@Body() createProfessoreDto: CreateProfessorDto) {
    try {
      return await this.professoresService.create(createProfessoreDto);
    } catch (error) {
      throw new HttpException("Professores não cadastrado", HttpStatus.NOT_IMPLEMENTED);
    }
  }

  @Get()
  async findAll() {
    try {
      return await this.professoresService.findAll();

    } catch (error) {
      throw new HttpException("Professores não encontrados", HttpStatus.NOT_FOUND);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.professoresService.findOne(id);

    } catch (error) {
      throw new HttpException("Professor não encontrado", HttpStatus.NOT_FOUND);
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateProfessorDto: UpdateProfessorDto) {
    try {
      return await this.professoresService.update(id, updateProfessorDto);
    } catch (error) {
      throw new HttpException("Não foi possivel alterar o professor", HttpStatus.NOT_IMPLEMENTED);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      return await this.professoresService.remove(id);
    } catch (error) {
      throw new HttpException("Não foi possivel deletar o professor", HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
