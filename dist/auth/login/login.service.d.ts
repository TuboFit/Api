import { UsuariosService } from 'src/usuarios/usuarios.service';
export declare class LoginService {
    private readonly usuariosService;
    constructor(usuariosService: UsuariosService);
    execute(email: string, password: string): Promise<{
        token: string;
        useReturns: any;
    }>;
}
