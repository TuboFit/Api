import { Repository } from 'typeorm';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';
export declare class UsuariosService {
    private usuarioRepository;
    constructor(usuarioRepository: Repository<Usuario>);
    create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario>;
    findAll(): Promise<Usuario[]>;
    findOne(id: string): Promise<Usuario>;
    findOneEmail(email: string): Promise<any>;
    update(id: string, updateUsuarioDto: UpdateUsuarioDto): Promise<Error | Usuario>;
    remove(id: string): Promise<any>;
}
