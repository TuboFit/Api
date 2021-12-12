import { Connection } from 'typeorm';
import { Treino } from './entities/treino.entity';
export declare const treinoProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("typeorm").Repository<Treino>;
    inject: string[];
}[];
