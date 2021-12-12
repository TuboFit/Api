import { Connection } from 'typeorm';
import { Usuario } from './entities/usuario.entity';
export declare const usuarioProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("typeorm").Repository<Usuario>;
    inject: string[];
}[];
