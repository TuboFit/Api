import { Inject, Injectable } from '@nestjs/common';
import { encryptedPassword } from 'src/utils/generatePassword';
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
      const passwordBcrypt = encryptedPassword(createUsuarioDto.password, 10)
      usuario.email = createUsuarioDto.email;
      usuario.password = passwordBcrypt;

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

  findOneEmail(email: string): Promise<Usuario> {
    try {

      return this.usuarioRepository.findOne({ email: email });
    } catch (error) {
      return error
    }
  }

  update(id: string, updateUsuarioDto: UpdateUsuarioDto) {
    try {
      const usuarioUpdate = new Usuario()
      const passwordBcrypt = encryptedPassword(updateUsuarioDto.password, 10)
      usuarioUpdate.email = updateUsuarioDto.email;
      usuarioUpdate.password = passwordBcrypt;
      return this.usuarioRepository.save(usuarioUpdate, { data: { id } });
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
