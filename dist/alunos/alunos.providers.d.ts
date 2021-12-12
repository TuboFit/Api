import { Connection } from 'typeorm';
import { Aluno } from './entities/aluno.entity';
export declare const alunosProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("typeorm").Repository<Aluno>;
    inject: string[];
}[];
