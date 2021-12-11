import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) { }

  @Post()
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    try {
      return this.usuariosService.create(createUsuarioDto);
    } catch (error) {
      throw new HttpException("Erro ao cadastrar usuario", HttpStatus.NOT_IMPLEMENTED);
    }
  }

  @Get()
  async findAll() {
    return await this.usuariosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.usuariosService.findOne(id);
    } catch (error) {
      return new HttpException("Usuario não encontrado", HttpStatus.NOT_FOUND);
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    try {
      return await this.usuariosService.update(id, updateUsuarioDto);
    } catch (error) {
      throw new HttpException("Usuario não encontrado", HttpStatus.NOT_IMPLEMENTED);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      return await this.usuariosService.remove(id);
    } catch (error) {
      throw new HttpException("Usuario não deletado", HttpStatus.NOT_IMPLEMENTED);
    }
  }
}
