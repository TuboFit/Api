import { TreinosService } from './treinos.service';
import { CreateTreinoDto } from './dto/create-treino.dto';
import { UpdateTreinoDto } from './dto/update-treino.dto';
export declare class TreinosController {
    private readonly treinosService;
    constructor(treinosService: TreinosService);
    create(createTreinoDto: CreateTreinoDto): Promise<import("./entities/treino.entity").Treino>;
    findAll(): Promise<import("./entities/treino.entity").Treino[] | Error>;
    findOne(id: string): Promise<Error | {
        id: string;
        grupMuscular: string;
        nome: string;
        nivel: string;
        crefProfessor: string;
        exercicios: import("./entities/exercicios.entity").Exercicio[];
        nomeProfessor: any;
    }>;
    findForCref(cref: string): Promise<import("./entities/treino.entity").Treino[] | Error>;
    update(id: string, updateTreinoDto: UpdateTreinoDto): Promise<void>;
    remove(id: string): Promise<Error | import("typeorm").DeleteResult>;
}
