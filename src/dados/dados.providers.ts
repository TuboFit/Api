import { Connection } from 'typeorm';
import { Dados } from './entities/dado.entity';
import { Endereco } from './entities/endereco.entity';

export const dadosProviders = [
    {
        provide: 'DADOS_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(Dados),
        inject: ['DATABASE_CONNECTION'],
    },
    {
        provide: 'ENDERECO_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(Endereco),
        inject: ['DATABASE_CONNECTION'],
    },
];