import { HttpException } from '@nestjs/common';
import { AlunosService } from './alunos.service';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { UpdateAlunoDto } from './dto/update-aluno.dto';
export declare class AlunosController {
    private readonly alunosService;
    constructor(alunosService: AlunosService);
    create(createAlunoDto: CreateAlunoDto): Promise<import("./entities/aluno.entity").Aluno | HttpException>;
    findAll(): Promise<Error | import("./entities/aluno.entity").Aluno[]>;
    findOne(id: string): Promise<Error | import("./entities/aluno.entity").Aluno>;
    update(id: string, updateAlunoDto: UpdateAlunoDto): Promise<Error | import("./entities/aluno.entity").Aluno>;
    remove(id: string): Promise<void>;
}
