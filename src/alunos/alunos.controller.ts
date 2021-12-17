import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { AlunosService } from './alunos.service';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { UpdateAlunoDto } from './dto/update-aluno.dto';

@Controller('alunos')
export class AlunosController {
  constructor(private readonly alunosService: AlunosService) { }

  @Post()
  async create(@Body() createAlunoDto: CreateAlunoDto) {
    try {
      return await this.alunosService.create(createAlunoDto);
    } catch (error) {
      return new HttpException("Erro ao cadastrar dados", HttpStatus.NOT_IMPLEMENTED);
    }
  }

  @Get()
  async findAll() {
    try {
      return await this.alunosService.findAll();
    } catch (error) {
      return new HttpException("Alunos não encontrados", HttpStatus.NOT_FOUND);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.alunosService.findOne(id);

    } catch (error) {
      throw new HttpException("Aluno não encontrado", HttpStatus.NOT_FOUND);
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateAlunoDto: UpdateAlunoDto) {
    try {
      return await this.alunosService.update(id, updateAlunoDto);
    } catch (error) {
      throw new HttpException("Aluno não atualizado", HttpStatus.NOT_ACCEPTABLE);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      return await this.alunosService.remove(id);
    } catch (error) {
      throw new HttpException("Não foi possivel deletar o aluno", HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
