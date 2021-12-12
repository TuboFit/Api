import { Repository } from 'typeorm';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { UpdateAlunoDto } from './dto/update-aluno.dto';
import { Aluno } from './entities/aluno.entity';
export declare class AlunosService {
    private alunoRepository;
    constructor(alunoRepository: Repository<Aluno>);
    create(createAlunoDto: CreateAlunoDto): Promise<Error | Aluno>;
    findAll(): Promise<Aluno[] | Error>;
    findOne(id: string): Promise<Aluno | Error>;
    update(id: string, updateAlunoDto: UpdateAlunoDto): Promise<Error | Aluno>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
