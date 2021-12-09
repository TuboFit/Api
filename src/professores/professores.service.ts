import { Inject, Injectable } from '@nestjs/common';
import { Professor } from './entities/professor.entity';
import { Repository } from 'typeorm';
import { CreateProfessorDto } from './dto/create-professor.dto';
import { UpdateProfessorDto } from './dto/update-professor.dto';

@Injectable()
export class ProfessoresService {
  constructor(
    @Inject('PROFESSOR_REPOSITORY')
    private professorRepository: Repository<Professor>,
  ) { }
  create(createProfessoreDto: CreateProfessorDto) {
    try {
      const professor = new Professor();
      professor.cref = createProfessoreDto.cref;
      professor.dados = createProfessoreDto.dados;
      professor.usuario = createProfessoreDto.usuario;
      return this.professorRepository.save(professor)
    } catch (err) {
      return err
    }

  }

  findAll(): Promise<Professor[]> {
    try {
      return this.professorRepository.find();

    } catch (error) {
      return error
    }
  }

  findOne(id: string): Promise<Professor> {
    try {
      return this.professorRepository.findOne({ id: id });

    } catch (error) {
      return error
    }
  }

  async update(id: string, updateProfessorDto: UpdateProfessorDto) {
    const getProfessor = await this.professorRepository.findOne(id)
    try {
      if (getProfessor) {
        this.professorRepository.merge(getProfessor, updateProfessorDto)
        return await this.professorRepository.save(getProfessor)
      }

    } catch (error) {
      return error
    }

  }

  remove(id: string) {
    try {
      return this.professorRepository.delete({ id: id });
    } catch (error) {
      return error
    }
  }
}
