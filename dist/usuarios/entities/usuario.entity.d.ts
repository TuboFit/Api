import { CreateUsuarioDto } from "../dto/create-usuario.dto";
import { UpdateUsuarioDto } from "../dto/update-usuario.dto";
export declare class Usuario {
    readonly id: string;
    email: string;
    password: string;
    type: string;
    created_at: Date;
    updated_at: Date;
    constructor(user: CreateUsuarioDto | UpdateUsuarioDto);
}
