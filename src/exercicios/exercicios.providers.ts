import { Connection } from 'typeorm';
import { Exercicio } from './entities/exercicio.entity';

export const exercicioProviders = [
    {
        provide: 'EXERCICIO_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(Exercicio),
        inject: ['DATABASE_CONNECTION'],
    },
];