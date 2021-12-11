import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, HttpException } from '@nestjs/common';
import { DadoService } from './dados.service';
import { CreateDadosDto } from './dto/create-dado.dto';
import { UpdateDadosDto } from './dto/update-dado.dto';

@Controller('dados')
export class DadoController {
  constructor(private readonly dadoService: DadoService) { }

  @Post()
  async create(@Body() createDadoDto: CreateDadosDto) {
    try {
      return await this.dadoService.create(createDadoDto);
    } catch (error) {
      throw new HttpException("Erro ao cadastrar dados", HttpStatus.NOT_IMPLEMENTED);
    }
  }

  @Get()
  findAll() {
    try {
      return this.dadoService.findAll();
    } catch (error) {
      throw new HttpException("Dados não encontrados", HttpStatus.NOT_FOUND);
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    try {
      return this.dadoService.findOne(id);
    } catch (error) {
      throw new HttpException("Dados não encontrados", HttpStatus.NOT_FOUND);
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateDadoDto: UpdateDadosDto) {
    try {
      return await this.dadoService.update(id, updateDadoDto);
    } catch (error) {
      throw new HttpException("Não foi possivel atualizar dados", HttpStatus.NOT_MODIFIED);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      return await this.dadoService.remove(id);
    } catch (error) {
      throw new HttpException("Não foi possivel deletar dados", HttpStatus.NOT_MODIFIED);
    }
  }
}
