import { Repository } from 'typeorm';
import { CreateTreinoDto } from './dto/create-treino.dto';
import { UpdateTreinoDto } from './dto/update-treino.dto';
import { Treino } from './entities/treino.entity';
export declare class TreinosService {
    private treinoRepository;
    constructor(treinoRepository: Repository<Treino>);
    create(createTreinoDto: CreateTreinoDto): Promise<Treino>;
    findAll(): Promise<Treino[]>;
    findOne(id: string): Promise<Treino>;
    update(id: string, updateTreinoDto: UpdateTreinoDto): Promise<void>;
    remove(id: string): Promise<Error | import("typeorm").DeleteResult>;
}
