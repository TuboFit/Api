import { Connection } from 'typeorm';
import { Professor } from './entities/professores.entity';
export declare const professorProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("typeorm").Repository<Professor>;
    inject: string[];
}[];
