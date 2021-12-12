import { Repository } from 'typeorm';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { UpdateAlunoDto } from './dto/update-aluno.dto';
import { Aluno } from './entities/aluno.entity';
export declare class AlunosService {
    private alunoRepository;
    constructor(alunoRepository: Repository<Aluno>);
    create(createAlunoDto: CreateAlunoDto): Promise<Aluno>;
    findAll(): Promise<Aluno[] | Error>;
    findOne(id: string): Promise<Aluno | Error>;
    update(id: string, updateAlunoDto: UpdateAlunoDto): Promise<Aluno | Error>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
