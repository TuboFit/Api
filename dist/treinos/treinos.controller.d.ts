import { TreinosService } from './treinos.service';
import { CreateTreinoDto } from './dto/create-treino.dto';
import { UpdateTreinoDto } from './dto/update-treino.dto';
export declare class TreinosController {
    private readonly treinosService;
    constructor(treinosService: TreinosService);
    create(createTreinoDto: CreateTreinoDto): Promise<import("./entities/treino.entity").Treino>;
    findAll(): Promise<import("./entities/treino.entity").Treino[]>;
    findOne(id: string): string;
    update(id: string, updateTreinoDto: UpdateTreinoDto): string;
    remove(id: string): string;
}
