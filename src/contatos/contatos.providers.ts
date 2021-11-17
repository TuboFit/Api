import { Connection } from 'typeorm';
import { Contato } from './entities/contato.entity';

export const contatoProviders = [
    {
        provide: 'CONTATO_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(Contato),
        inject: ['DATABASE_CONNECTION'],
    },
];