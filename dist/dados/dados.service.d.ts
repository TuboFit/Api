import { Repository } from 'typeorm';
import { CreateDadosDto } from './dto/create-dado.dto';
import { UpdateDadosDto } from './dto/update-dado.dto';
import { Dados } from './entities/dado.entity';
import { Endereco } from './entities/endereco.entity';
export declare class DadoService {
    private dadosRepository;
    private enderecoRepository;
    constructor(dadosRepository: Repository<Dados>, enderecoRepository: Repository<Endereco>);
    create(createDadoDto: CreateDadosDto): Promise<Dados | Error>;
    findAll(): Promise<Dados[]>;
    findOne(id: string): Promise<Dados>;
    update(id: string, updateDadoDto: UpdateDadosDto): Promise<Dados>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
