import { Connection } from 'typeorm';
import { Dados } from './entities/dado.entity';
import { Endereco } from './entities/endereco.entity';
export declare const dadosProviders: ({
    provide: string;
    useFactory: (connection: Connection) => import("typeorm").Repository<Dados>;
    inject: string[];
} | {
    provide: string;
    useFactory: (connection: Connection) => import("typeorm").Repository<Endereco>;
    inject: string[];
})[];
