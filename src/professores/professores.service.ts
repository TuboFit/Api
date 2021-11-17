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

  findOne(id: string) {
    return this.professorRepository.findOne({ id: id });
  }

  update(id: string, updateProfessorDto: UpdateProfessorDto) {
    return this.professorRepository.update({ id: id }, updateProfessorDto);
  }

  remove(id: string) {
    return this.professorRepository.delete({ id: id });
  }
}
