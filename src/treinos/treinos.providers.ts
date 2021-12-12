import { Connection } from 'typeorm';
import { Treino } from './entities/treino.entity';

export const treinoProviders = [
    {
        provide: 'TREINO_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(Treino),
        inject: ['DATABASE_CONNECTION'],
    }
];