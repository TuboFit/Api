import { ProfessoresService } from './professores.service';
import { CreateProfessorDto } from './dto/create-professore.dto';
import { UpdateProfessorDto } from './dto/update-professore.dto';
export declare class ProfessoresController {
    private readonly professoresService;
    constructor(professoresService: ProfessoresService);
    create(createProfessoreDto: CreateProfessorDto): Promise<import("./entities/professores.entity").Professor>;
    findAll(): Promise<import("./entities/professores.entity").Professor[]>;
    findOne(id: string): Promise<import("./entities/professores.entity").Professor>;
    update(id: string, updateProfessorDto: UpdateProfessorDto): Promise<import("./entities/professores.entity").Professor>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
