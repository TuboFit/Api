import { Inject, Injectable } from '@nestjs/common';
import { hashSync } from 'bcrypt';
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

  async create(createUsuarioDto: CreateUsuarioDto) {
    const usuario = new Usuario(createUsuarioDto)
    try {
      usuario.password = hashSync(createUsuarioDto.password, 10)
      if (usuario) return await this.usuarioRepository.save(usuario)
    } catch (error) {
      throw new Error("Usuario não cadastrado")
    }
  }

  findAll(): Promise<Usuario[]> {
    try {
      return this.usuarioRepository.query("SELECT * FROM usuarios");
    } catch (error) {
      return error
    }
  }

  async findOne(id: string): Promise<Usuario> {
    try {
      const usuario = await this.usuarioRepository.findOne(id)
      if (usuario) return usuario
      throw new Error("Usuario não encontrado")
    } catch (error) {
      throw new Error(error)
    }
  }

  async findOneEmail(email: string) {
    try {
      const usuario = await this.usuarioRepository.findOne({ email: email })
      if (usuario && usuario.type === 'professor') {
        const dadosProfessor = await this.usuarioRepository.query(`SELECT * FROM professores WHERE "usuarioId"='${usuario.id}'`)
        return { ...usuario, ...dadosProfessor[0] }
      } else if (usuario && usuario.type === 'aluno') {
        const dadosAlunos = await this.usuarioRepository.query(`SELECT * FROM alunos WHERE "usuarioId"='${usuario.id}'`)
        return { ...usuario, ...dadosAlunos[0] }
      } else if (usuario && usuario.type === 'admin') {
        return usuario
      }
      throw new Error("Usuario não encontrado")
    } catch (error) {
      return error
    }
  }

  async update(id: string, updateUsuarioDto: UpdateUsuarioDto) {
    const newUser = new Usuario(updateUsuarioDto)
    newUser.password = hashSync(updateUsuarioDto.password, 10)
    try {
      const getUsuario = await this.usuarioRepository.findOne(id)
      if (getUsuario) {
        this.usuarioRepository.merge(getUsuario, newUser)
        return await this.usuarioRepository.save(getUsuario)
      }
      throw new Error("Usuario não foi atualizado")
    } catch (error) {
      return new Error(error.message)
    }
  }

  async remove(id: string) {
    try {
      const getUsuario = await this.usuarioRepository.findOne(id)
      if (getUsuario) return await this.usuarioRepository.delete({ id: id }).then(() => "Usuario deletado").catch((e) => `Usuario não pode ser deletado${e}`)
      throw new Error("Usuario não encontrado")
    } catch (error) {
      return error
    }
  }
}
