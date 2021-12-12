import { HttpException } from '@nestjs/common';
import { AlunosService } from './alunos.service';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { UpdateAlunoDto } from './dto/update-aluno.dto';
export declare class AlunosController {
    private readonly alunosService;
    constructor(alunosService: AlunosService);
    create(createAlunoDto: CreateAlunoDto): Promise<import("./entities/aluno.entity").Aluno | HttpException>;
    findAll(): Promise<Error | import("./entities/aluno.entity").Aluno[]>;
    findOne(id: string): Promise<import("./entities/aluno.entity").Aluno | Error>;
    update(id: string, updateAlunoDto: UpdateAlunoDto): Promise<import("./entities/aluno.entity").Aluno | Error>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
