import { Repository } from 'typeorm';
import { CreateTreinoDto } from './dto/create-treino.dto';
import { UpdateTreinoDto } from './dto/update-treino.dto';
import { Treino } from './entities/treino.entity';
export declare class TreinosService {
    private treinoRepository;
    constructor(treinoRepository: Repository<Treino>);
    create(createTreinoDto: CreateTreinoDto): Promise<Treino>;
    findAll(): Promise<Treino[]>;
    findOne(id: string): string;
    update(id: string, updateTreinoDto: UpdateTreinoDto): string;
    remove(id: string): string;
}
