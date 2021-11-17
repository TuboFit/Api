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
    const usuario = new Usuario()
    usuario.email = createUsuarioDto.email;
    usuario.password = createUsuarioDto.password
    return this.usuarioRepository.save(usuario);
  }

  findAll(): Promise<Usuario[]> {
    return this.usuarioRepository.find();
  }

  findOne(id: string): Promise<Usuario> {
    return this.usuarioRepository.findOne({ id: id });
  }

  update(id: string, updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioRepository.update({ id: id }, updateUsuarioDto);
  }

  remove(id: string) {
    return this.usuarioRepository.delete({ id: id });
  }
}
