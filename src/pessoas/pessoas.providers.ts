import { Connection } from 'typeorm';
import { Pessoa } from './entities/pessoa.entity';

export const pessoaProviders = [
    {
        provide: 'PESSOA_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(Pessoa),
        inject: ['DATABASE_CONNECTION'],
    },
];