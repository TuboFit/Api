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
    return this.professorRepository.find();
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
    const getProfessor = await this.professorRepository.findOne(id)
    try {
      if (getProfessor) {
        this.professorRepository.merge(getProfessor, updateProfessoreDto)
        return await this.professorRepository.save(getProfessor)
      }
    } catch (error) {
      throw new Error(error.message)
    }
  }

  remove(id: string) {
    return this.professorRepository.delete(id);
  }
}
