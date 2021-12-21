import { HttpException } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
export declare class UsuariosController {
    private readonly usuariosService;
    constructor(usuariosService: UsuariosService);
    create(createUsuarioDto: CreateUsuarioDto): Promise<import("./entities/usuario.entity").Usuario>;
    findAll(): Promise<import("./entities/usuario.entity").Usuario[]>;
    findOne(id: string): Promise<HttpException | import("./entities/usuario.entity").Usuario>;
    update(id: string, updateUsuarioDto: UpdateUsuarioDto): Promise<Error | import("./entities/usuario.entity").Usuario>;
    remove(id: string): Promise<any>;
}
