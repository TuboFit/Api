import { HttpException } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
export declare class UsuariosController {
    private readonly usuariosService;
    constructor(usuariosService: UsuariosService);
    create(createUsuarioDto: CreateUsuarioDto): Promise<import("./entities/usuario.entity").Usuario>;
    findAll(): Promise<import("./entities/usuario.entity").Usuario[]>;
    findOne(id: string): Promise<import("./entities/usuario.entity").Usuario | HttpException>;
    update(id: string, updateUsuarioDto: UpdateUsuarioDto): Promise<import("./entities/usuario.entity").Usuario | Error>;
    remove(id: string): Promise<any>;
}
