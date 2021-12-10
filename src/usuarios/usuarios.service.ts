import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuariosService {
  constructor(
    @Inject('USUARIO_REPOSITORY')
    private usuarioRepository: Repository<Usuario>,
  ) { }

  create(createUsuarioDto: CreateUsuarioDto) {
    try {
      const usuario = new Usuario()
      usuario.email = createUsuarioDto.email;
      usuario.password = createUsuarioDto.password;

      return this.usuarioRepository.save(usuario);
    } catch (error) {
      return error
    }
  }

  findAll(): Promise<Usuario[]> {
    try {
      return this.usuarioRepository.find();
    } catch (error) {
      return error
    }
  }

  findOne(id: string): Promise<Usuario> {
    return this.usuarioRepository.findOne({ id: id });
  }

  async findOneEmail(email: string): Promise<Usuario> {
    try {

      return await this.usuarioRepository.findOne({ email: email });
    } catch (error) {
      return error
    }
  }

  async update(id: string, updateUsuarioDto: UpdateUsuarioDto) {
    try {
      const getUsuario = await this.usuarioRepository.findOne(id)
      this.usuarioRepository.merge(getUsuario, updateUsuarioDto)
      return await this.usuarioRepository.save(getUsuario)
    } catch (error) {
      return error
    }
  }

  remove(id: string) {
    try {
      return this.usuarioRepository.delete({ id: id });
    } catch (error) {
      return error
    }
  }
}
