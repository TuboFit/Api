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
    const professor = new Professor();
    professor.cref = createProfessoreDto.cref;
    professor.dados = createProfessoreDto.dados;
    professor.usuario = createProfessoreDto.usuario;
    return this.professorRepository.save(professor)
  }

  findAll(): Promise<Professor[]> {
    return this.professorRepository.find();
  }

  findOne(id: string): Promise<Professor> {
    try {
      return this.professorRepository.findOne({ id: id });

    } catch (error) {
      return error
    }
  }

  async update(id: string, updateProfessorDto: UpdateProfessorDto) {
    try {
      return await this.professorRepository.save(updateProfessorDto, { data: { id } })

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
