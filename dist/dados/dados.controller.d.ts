import { DadoService } from './dados.service';
import { CreateDadosDto } from './dto/create-dado.dto';
import { UpdateDadosDto } from './dto/update-dado.dto';
export declare class DadoController {
    private readonly dadoService;
    constructor(dadoService: DadoService);
    create(createDadoDto: CreateDadosDto): Promise<import("./entities/dado.entity").Dados | Error>;
    findAll(): Promise<import("./entities/dado.entity").Dados[]>;
    findOne(id: string): Promise<import("./entities/dado.entity").Dados>;
    update(id: string, updateDadoDto: UpdateDadosDto): Promise<import("./entities/dado.entity").Dados>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
