import { Inject, Injectable } from '@nestjs/common';
import { Professor } from './entities/professor.entity';
import { Repository } from 'typeorm';
import { CreateProfessorDto } from './dto/create-professor.dto';
import { UpdateProfessorDto } from './dto/update-professor.dto';
import { ProfessorDto } from './dto/Professor.dto';

@Injectable()
export class ProfessoresService {
    constructor(
        @Inject('PROFESSOR_REPOSITORY')
        private professorRepository: Repository<Professor>,
    ) { }
    create(createProfessorDto: CreateProfessorDto) {
        const professor = new Professor();
        professor.cref = createProfessorDto.cref
        professor.dados = createProfessorDto.dados
        return this.professorRepository.save(professor)
    }

    findAll(): Promise<ProfessorDto[]> {
        return this.professorRepository.find();
    }

    findOne(id: string): Promise<ProfessorDto> {
        return this.professorRepository.findOne({ id: id });
    }

    update(id: string, updateProfessorDto: UpdateProfessorDto) {
        return this.professorRepository.update({ id: id }, updateProfessorDto);
    }

    remove(id: string) {
        return this.professorRepository.delete({ id: id });
    }
}