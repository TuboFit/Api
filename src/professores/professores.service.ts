import { Inject, Injectable } from '@nestjs/common';
import { hashSync } from 'bcrypt';
import { Repository } from 'typeorm';
import { CreateProfessorDto } from './dto/create-professore.dto';
import { UpdateProfessorDto } from './dto/update-professore.dto';
import { Professor } from './entities/professores.entity';

@Injectable()
export class ProfessoresService {
  constructor(
    @Inject('PROFESSOR_REPOSITORY')
    private professorRepository: Repository<Professor>,
  ) { }
  create(createProfessorDto: CreateProfessorDto) {
    const professor = new Professor(createProfessorDto)
    professor.usuario.password = hashSync(createProfessorDto.usuario.password, 10)
    return this.professorRepository.save(professor);
  }

  findAll(): Promise<Professor[]> {
    try {

      return this.professorRepository.find();
    } catch (error) {
      throw new Error(error.message)
    }
  }

  async findOne(id: string): Promise<Professor> {
    try {
      const professor = await this.professorRepository.findOne(id);
      if (professor) return professor
      throw new Error("Professor não encontrado")
    } catch (error) {
      throw new Error(error.message)
    }
  }

  async update(id: string, updateProfessoreDto: UpdateProfessorDto) {
    try {
      const updateProfessor = new Professor(updateProfessoreDto)
      const getProfessor = await this.professorRepository.findOne(id)
      updateProfessor.usuario.password = hashSync(updateProfessoreDto.usuario.password, 10)
      if (getProfessor) {
        await this.professorRepository
          .query(`
          UPDATE 
            usuarios
          SET
           "email"='${updateProfessor.usuario.email}',
           "password"='${updateProfessor.usuario.password}'
          WHERE "id"='${getProfessor.usuario.id}'
          `)
        this.professorRepository.merge(getProfessor, updateProfessor)
        return await this.professorRepository.save(getProfessor)
      }
    } catch (error) {
      throw new Error(error.message)
    }
  }

  async remove(id: string) {
    const professor = await this.professorRepository.findOne(id)
    try {
      if (professor) {
        await this.professorRepository
          .delete(id)
          .then(() => "Professor deletado do banco de dados")
          .catch(e => e)

        await this.professorRepository
          .query(`DELETE FROM dados WHERE "id"='${professor.dados.id}'`)
          .then(() => "Dados do professor deletados")
          .catch(e => e)
        await this.professorRepository
          .query(`DELETE FROM usuarios WHERE "id"='${professor.usuario.id}'`)
          .then(() => "Usuario do professor foi deletado")
          .catch(e => e)
      }
    } catch (error) {
      throw new Error("Erro ao deletar professor");

    }
  }
}
