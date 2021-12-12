import { Repository } from 'typeorm';
import { CreateProfessorDto } from './dto/create-professore.dto';
import { UpdateProfessorDto } from './dto/update-professore.dto';
import { Professor } from './entities/professores.entity';
export declare class ProfessoresService {
    private professorRepository;
    constructor(professorRepository: Repository<Professor>);
    create(createProfessorDto: CreateProfessorDto): Promise<Professor>;
    findAll(): Promise<Professor[]>;
    findOne(id: string): Promise<Professor>;
    update(id: string, updateProfessoreDto: UpdateProfessorDto): Promise<Professor>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
