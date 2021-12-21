import { Repository } from 'typeorm';
import { CreateTreinoDto } from './dto/create-treino.dto';
import { UpdateTreinoDto } from './dto/update-treino.dto';
import { Treino } from './entities/treino.entity';
export declare class TreinosService {
    private treinoRepository;
    constructor(treinoRepository: Repository<Treino>);
    create(createTreinoDto: CreateTreinoDto): Promise<Treino>;
    findAll(): Promise<Treino[] | Error>;
    findOne(id: string): Promise<Error | {
        id: string;
        grupMuscular: string;
        dia: string;
        nivel: string;
        crefProfessor: string;
        exercicios: import("./entities/exercicios.entity").Exercicio[];
        nomeProfessor: any;
    }>;
    update(id: string, updateTreinoDto: UpdateTreinoDto): Promise<void>;
    remove(id: string): Promise<Error | import("typeorm").DeleteResult>;
}
